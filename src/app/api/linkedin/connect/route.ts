// app/api/linkedin/route.ts

import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) return new NextResponse('Unauthorized', { status: 401 });
  
    const { tokens } = await req.json().catch(() => ({}));
    if (!tokens || typeof tokens !== 'object') {
      return new NextResponse('Bad Request', { status: 400 });
    }
  
    const userData = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });
    if (!userData) return new NextResponse('User not found', { status: 404 });
  
    await prisma.linkedInAccount.upsert({
      where: { userId: userData.id },
      update: { tokens },
      create: { userId: userData.id, tokens },
    });
  
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving LinkedIn tokens:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
    
  }
}

export async function GET(req: Request) {
  try {
    const user = await currentUser();
    if (!user) return new NextResponse('Unauthorized', { status: 401 });
  
    const userData = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });
    if (!userData) return new NextResponse('User not found', { status: 404 });
  
    const account = await prisma.linkedInAccount.findUnique({
      where: { userId: userData.id },
    });
  
    if (!account) {
      // 204 No Content indicates “we have nothing for you yet”
      return new NextResponse(null, { status: 204 });
    }
  
    // Return the saved tokens
    return NextResponse.json({ tokens: account.tokens });
  } catch (error) {
    console.error('Error fetching LinkedIn tokens:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
    
  }
}
