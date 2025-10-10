import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server';
import { createAwsInstanceForCoachClients } from '@/app/lib/aws.service';

const prisma = new PrismaClient();


export async function POST(req: NextRequest) {
    try {
        // get api from clerk validate it
        // create a client for a coach
        // create a process to create an instance for the client
        // return the Id for the process
        const user = await currentUser();
        if (!user) return new NextResponse('Unauthorized', { status: 401 });

        // valideate the user type to be a coach
        const userData = await prisma.user.findUnique({
            where: { clerkId: user.id },
        });
        console.log('userData', userData);
        if (!userData || userData.type !== 'career_coach') {
            return new NextResponse('Invalid user', { status: 404 });
        }
        const { name, email, linkedin, notes } = await req.json().catch(() => ({}));
        if (!name || !email) {
            return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
        }

        // check if user already made
        const existingUser = await prisma.user.findUnique({
            where: { email },
            include: { client: true },
        });
        if (existingUser) {
            // ok so we have a user already but multiple coaches can have the same client
            if (existingUser.client) {
                //    add this client to this coach
                const existingClient = await prisma.client.findFirst({
                    where: {
                        userId: existingUser.id,
                        coaches: {
                            some: { userId: userData.id || '' }
                        },
                    },
                });
                if (existingClient) {
                    return NextResponse.json({ error: 'Client already exists for this coach' }, { status: 400 });
                } else {
                    // connect the client to this coach
                    const newClient = await prisma.client.update({
                        where: { id: existingUser.client.id },
                        data: {
                            coaches:{
                                connect: { userId: userData.id }
                            } 
                        },
                    });
                    newClient.status = 'processing';
                    // return the existing client
                    return NextResponse.json({
                        message: 'Client created successfully',
                        newClient
                    }, { status: 200 });
                }
            } else {
                // create a client for the existing user
                const newClient = await prisma.client.create({
                    data: {
                        name,
                        email,
                        linkedin: linkedin || null,
                        notes: notes || null,
                        coaches:{
                            connect: { userId: userData.id }
                        },
                        userId: existingUser.id,
                        processes: {
                            create: {
                                status: 'processing'
                            }
                        }
                    },
                });

                newClient.status = 'processing';

                // Generate a unique instance name
                const instanceName = `applyish-automation-${newClient.id.substring(0, 8)}-${Math.floor(Math.random() * 10000)}`;

                // Call createAwsInstanceForCoachClients
                try {
                    await createAwsInstanceForCoachClients({
                        clientUserId: newClient.userId,
                        s3Identifier: newClient.id, // Using client ID as s3Identifier
                        jobLink: '', // No jobLink available here
                        instanceName: instanceName,
                    });
                    // Optionally update client with instance details if needed
                    // await prisma.client.update({
                    //     where: { id: newClient.id },
                    //     data: { instanceUrl: '...' }
                    // });
                } catch (awsError) {
                    console.error('Failed to create AWS instance for client:', awsError);
                    // Handle error, maybe update client status to 'failed_instance_creation'
                }
                
                return NextResponse.json({
                    message: 'Client created successfully',
                    newClient
                }, { status: 200 });
            }
        }




        // create user for the client and a connected process
        const newUser = await prisma.user.create({
            data: {
                email,
                type: 'client',
                name,
                client: {
                    create: {
                        name,
                        email,
                        linkedin: linkedin || null,
                        notes: notes || null,
                        coaches:{
                            connect: { userId: userData.id}
                        },
                        processes: {
                            create: {
                                status: 'processing'
                            }
                        }
                    },
                },
            },
            include: {
                client: true,
            },
        });

        newUser.client.status = 'processing';

        // Generate a unique instance name
        const instanceName = `applyish-automation-${newUser.client.id.substring(0, 8)}-${Math.floor(Math.random() * 10000)}`;

        // Call createAwsInstanceForCoachClients
        try {
            await createAwsInstanceForCoachClients({
                clientUserId: newUser.id,
                s3Identifier: newUser.client.id, // Using client ID as s3Identifier
                jobLink: '', // No jobLink available here
                instanceName: instanceName,
            });
            // Optionally update client with instance details if needed
            // await prisma.client.update({
            //     where: { id: newUser.client.id },
            //     data: { instanceUrl: '...' }
            // });
        } catch (awsError) {
            console.error('Failed to create AWS instance for new user/client:', awsError);
            // Handle error, maybe update client status to 'failed_instance_creation'
        }

        return NextResponse.json({
            message: 'Clients created successfully',
            newClient: newUser.client
        }, { status: 200 });
    } catch (error) {
        console.error('CSV upload error:', error);
        return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
    }
}
