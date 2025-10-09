import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server';

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
                        coachId: user.id || '',
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

        return NextResponse.json({ message: 'Clients created successfully', 
             newClient: newUser.client
         }, { status: 200 });
    } catch (error) {
        console.error('CSV upload error:', error);
        return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
    }
}
