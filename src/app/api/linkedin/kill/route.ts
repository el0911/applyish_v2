// file: app/api/stop-instance/route.ts
import { NextResponse } from 'next/server';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { LightsailClient, StopInstanceCommand } from '@aws-sdk/client-lightsail';

export async function GET(req: Request) {
  // 1. Check Authorization header
  const auth = req.headers.get('Authorization')?.split(' ')[1];
  if (!auth) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // 2. Verify JWT and get instance_name
  let payload: JwtPayload;
  try {
    payload = jwt.verify(auth, process.env.JWT_SECRET as Secret) as JwtPayload;
  } catch {
    return new NextResponse('Invalid token', { status: 401 });
  }
  const instanceName = payload.instance_name;
  console.log('Decoded JWT payload:', payload);
  if (!instanceName || typeof instanceName !== 'string') {
    return new NextResponse('Instance name missing', { status: 400 });
  }

  // 3. Initialize Lightsail client
  const client = new LightsailClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  });

  // 4. Issue stop command directly
  try {
    const stopResp = await client.send(
      new StopInstanceCommand({ instanceName })
    );
    return NextResponse.json({ message: 'Stop command sent', stopResp });
  } catch (err: any) {
    console.error('Error stopping instance:', err);
    // If instance not found or other Lightsail error, can inspect err.name or err.Code if needed.
    // For simplicity, return 404 if name-related, else 500.
    const isNotFound = err.name === 'NotFoundException' || /not found/i.test(err.message);
    return new NextResponse(
      isNotFound ? 'Instance not found' : 'Failed to stop instance',
      { status: isNotFound ? 404 : 500 }
    );
  }
}
