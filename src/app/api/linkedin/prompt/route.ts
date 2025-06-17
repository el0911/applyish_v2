// app/api/stop-instance/route.ts
import { NextResponse } from 'next/server';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { PROMPT_TASK_EASY_APPLY } from '@/utils/constants';

export async function POST(req: Request) {
  try {
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) return new NextResponse('Unauthorized', { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as JwtPayload;
    const { instance_name } = decoded;

    if (!instance_name) {
      return new NextResponse('Instance name missing from token', { status: 400 });
    }

    
    return NextResponse.json({ prompt:PROMPT_TASK_EASY_APPLY });
  } catch (error) {
    console.error('Error stopping instance:', error);
    return new NextResponse('Failed to stop instance', { status: 500 });
  }
}
