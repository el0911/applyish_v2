// app/api/linkedin/route.ts
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';



export async function GET(req: Request) {
  try {
    // load all users from the db at a certain time
    // todo encrypt the tokens when transferring them over the network
    const token = req.headers.get('Authorization')?.split(' ')[1];
    console.log('token', token);
    if (!token) return new NextResponse('Unauthorized', { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as JwtPayload;
    const conversation_secret = decoded.conversation_secret;

    if (!conversation_secret) return new NextResponse('Unauthorized', { status: 401 });

    if (conversation_secret !== process.env['CONVERSATION_SECRET']) return new NextResponse('Unauthorized', { status: 401 });
    //  ok so conversation_secret is valid now return all users accounts with linkedInAccount is not null
    // const accounts = await prisma.user.findMany({
    //    select: {
    //     id: true
    //    },
    //    where: {
    //      linkedInAccount: {
    //         tokens: {
    //           not: Prisma.JsonNull,
    //        },
    //      },
    //    },
    // });
    // if (!accounts) {
    //   // 204 No Content indicates “we have nothing for you yet”
    //   return new NextResponse(null, { status: 204 });
    // }

    //so just return all accounts saved in s3 table
    const accounts = await prisma.client.findMany({
      // where: { 
      //   active: true
      // }
    })


    // Return the saved tokens
    return NextResponse.json({
      accounts: accounts.map((client) => {
        return {
          client_Id: client.id
        }
      })
    });


  } catch (error) {
    console.error('Error fetching LinkedIn accounts:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
