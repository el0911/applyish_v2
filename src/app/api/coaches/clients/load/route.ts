import { NextResponse } from 'next/server';
import { ApplicationCount, PrismaClient } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server';

const prisma = new PrismaClient();


export async function GET() {
    try {
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

        // const today = new Date()
        // today.setDate(today.getDay() - 7)
        // to do l
        const clients = await prisma.client.findMany({
            where: {
                coaches: {
                    some: { userId: userData.id || '' }
                },
            },
            include: {
                applications: {
                    // where: {
                    //     createdAt: {
                    //         gte: today
                    //     }
                    // }
                },
                processes: {
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                },
                coaches: true,
            },
            orderBy: { createdAt: 'desc' },
        });


        interface Process {
            id: string;
            createdAt: Date;
            status: string;
            // Add other fields as needed
        }

        interface Coach {
            id: string;
            userId: string;
            // Add other fields as needed
        }

        interface Client {
            id: string;
            createdAt: Date;
            processes: Process[];
            coaches: Coach[];
            // Add other fields as needed
        }

        interface ClientResponse extends Omit<Client, 'processes'> {
            status: string | null;
        }


        return NextResponse.json<{
            clients: (ClientResponse & {
            chartData:  ApplicationCount[];
            })[];
        }>({
            clients: clients.map((client) => {
                return {
                    ...client,
                    status: client.processes[0]?.status || null,
                    chartData: client.processes[0]?.status === 'ready'
                        ? client.applications // Or fill with actual data
                        : [],
                };
            }),
        }, { status: 200 });

    } catch (error) {
        console.error('Error loading clients:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}