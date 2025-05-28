// app/api/linkedin/route.ts
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


// export async function POST(req: Request) {
//   //  create a jwt token from the clerk id 
//   try {
//     // the reason this api exist is that all users are loaded from the db at a certain time 
//     // but put in a queeue to the fact that the python server is not able to handle all the requests at once
//     // so we need to create a token for the user that is valid for 2 minutes
//     //  this token then i used by the python server to get the user cookies i could just return the cookies at this point but
//     // i ok with doing it inefficient at the moment then making it better 
//     const token_from_system = req.headers.get('Authorization')?.split(' ')[1];
//     if (!token_from_system) return new NextResponse('Unauthorized', { status: 401 });
   
//     // token_from_system is the clerk token from the python server
//     // todo validate how secure this is for now it gets the job done
//     const decoded = jwt.verify(token_from_system, process.env.JWT_SECRET as Secret) as JwtPayload;
//     const clerk_id = decoded.clerk_id;
  
//     const userData = await prisma.user.findUnique({
//       where: { clerkId: clerk_id },
//     });

//     if (!userData) return new NextResponse('User not found', { status: 404 });
  
//     const token = jwt.sign(
//       { userId: userData.id },
//       process.env.JWT_SECRET as Secret,
//       { expiresIn: '2m' }
//     );
  
//     return NextResponse.json({ token });
  
//   } catch (error) {
//     console.error('Error creating JWT token:', error);
//     return new NextResponse('Internal Server Error', { status: 500 });
//   }
  
// }
 

export async function GET(req: Request) {
  const token = req.headers.get('Authorization')?.split(' ')[1];

  try {
    // use the token from the request header to get the linkeind tokkens
    // todo encrypt the tokens when transferring them over the network
    if (!token) return new NextResponse('Unauthorized', { status: 401 });
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as JwtPayload;
    const {userId} = decoded;

    console.log('userId', userId);
    console.log('decoded', decoded);
    console.log('token', token);
    if (!userId) return new NextResponse('Unauthorized', { status: 401 });

    // fetch the tokens from the database
    const account = await prisma.linkedInAccount.findUnique({
      where: { userId },
    });

    if (!account) {
      // 204 No Content indicates “we have nothing for you yet”
      return new NextResponse(null, { status: 204 });
    }

    // Return the saved tokens
    return NextResponse.json({ tokens: account.tokens });
    
   
  } catch (error) {
    console.error('Error fetching LinkedIn tokens: ',token, error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
