import { NextResponse } from 'next/server';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { EC2Client, StopInstancesCommand, DescribeInstancesCommand } from '@aws-sdk/client-ec2';

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) return new NextResponse('Unauthorized', { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as JwtPayload;
    const { instance_name } = decoded;

    if (!instance_name) {
      return new NextResponse('Instance name missing from token', { status: 400 });
    }

    const ec2Client = new EC2Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });

    // Lookup instance ID by Name tag
    const describeCommand = new DescribeInstancesCommand({
      Filters: [
        { Name: 'tag:Name', Values: [instance_name] }
      ]
    });
    const describeResult = await ec2Client.send(describeCommand);
    const reservations = describeResult.Reservations || [];
    const instanceId = reservations
      .flatMap(res => res.Instances || [])
      .map(inst => inst.InstanceId)
      .find(id => !!id);

    if (!instanceId) {
      return new NextResponse('Instance not found', { status: 404 });
    }

    const stopCommand = new StopInstancesCommand({
      InstanceIds: [instanceId],
    });

    const result = await ec2Client.send(stopCommand);

    return NextResponse.json({ message: 'Stop command sent successfully', result });
  } catch (error) {
    console.error('Error stopping instance:', error);
    return new NextResponse('Failed to stop instance', { status: 500 });
  }
}