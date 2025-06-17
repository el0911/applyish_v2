// app/api/stop-instance/route.ts
import { NextResponse } from 'next/server';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { EC2Client, StopInstancesCommand } from '@aws-sdk/client-ec2';

export async function POST(req: Request) {
  try {
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) return new NextResponse('Unauthorized', { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as JwtPayload;
    const { instance_name } = decoded;

    console.log('Decoded token:', decoded);
    console.log('Instance name:', instance_name);

    if (!instance_name) {
      return new NextResponse('Instance name missing from token', { status: 400 });
    }

    // You can optionally fetch the instance ID by name from DB if needed
    // For this example, we assume `instance_name` is the actual EC2 instance ID (e.g., i-0abc123xyz...)

    const ec2Client = new EC2Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });

    const stopCommand = new StopInstancesCommand({
      InstanceIds: [instance_name],
    });

    const result = await ec2Client.send(stopCommand);

    return NextResponse.json({ message: 'Stop command sent successfully', result });
  } catch (error) {
    console.error('Error stopping instance:', error);
    return new NextResponse('Failed to stop instance', { status: 500 });
  }
}
