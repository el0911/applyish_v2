import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { shutDownLightsailInstance } from '@/app/lib/aws.service';

const prisma = new PrismaClient();



export async function PATCH(request: Request) {

    try {
        const token = request.headers.get('Authorization')

        console.log( token);
        if (!token) return new NextResponse('Unauthorized', { status: 401 });

        const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as JwtPayload;

        // check if the decoded has the server secret and it matches the env variable
        const conversation_secret = decoded.conversation_secret;

        console.log('Decoded token:', decoded);

        // if (conversation_secret !== process.env['CONVERSATION_SECRET']) return new NextResponse('Unauthorized', { status: 401 });

        // get the data from the decoded token

        const {process_id} = decoded;
        
        if (!process_id) return new NextResponse('Invalid process id', { status: 400 });

        // find the process and unpdete it

        const client_process = await prisma.process.findUnique({
            where: { id: process_id },
            include: { client: true }
        });

        if (!client_process) return new NextResponse('Process not found', { status: 404 });

        if (!client_process.client) return new NextResponse('Client not found for this process', { status: 404 });

        // upate process status to completed

        await prisma.process.update({
            where: { id: process_id },
            data: { status: 'ready' }
        });

        //  return a simple success response

        return NextResponse.json({ success: true });

    }
    catch (error) {
        console.error('Error updating LinkedIn tokens:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }

}