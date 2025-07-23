import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


// health check for the LinkedIn easy connect accounts its done every day for accounts that are  connected 
//if it fails that means the account is not connected anymore and we need to reinitialize the connection

export async function POST(req: Request) {


    try {
        const { username,isAlive } = await req.json();

        if (!username) {
            return new NextResponse('Username is required', { status: 400 });
        }

        const account = await prisma.s3File.findFirst({
            where: { username },
        });

        if (account == null) {
            return new NextResponse('No account found for this username', { status: 404 });
        }

        // add a new record to the health checks table
        const healthCheck = await prisma.healthChecks.create({
            data: {
                username: account.username,
                isAlive, // assuming the check is successful
            },
        }); 


        return NextResponse.json({ success: true, healthCheck });


    } catch (error) {
        console.error('Error incrementing application count:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }

}