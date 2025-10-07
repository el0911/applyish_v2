import { Webhook } from 'svix'
import { WebhookEvent } from '@clerk/nextjs/server'
import { headers } from 'next/headers'
import prisma from '@/lib/prisma'
import { clerkClient } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  const secret = process.env.SIGNING_SECRET
  if (!secret) return new Response('Missing secret', { status: 500 })

  const wh = new Webhook(secret)
  const body = await req.text()
  const headerPayload = await headers()

  const event = wh.verify(body, {
    'svix-id': headerPayload.get('svix-id')!,
    'svix-timestamp': headerPayload.get('svix-timestamp')!,
    'svix-signature': headerPayload.get('svix-signature')!,
  }) as WebhookEvent

  if (event.type === 'user.created') {
    const { id, email_addresses, first_name, last_name } = event.data
    
    const existingUser = await prisma.user.findUnique({
      where: { email:email_addresses[0].email_address }, // or use clerkId if preferred
    })

    console.log('existingUser:', existingUser)
    console.log({ email_addresses, first_name, last_name })
    
    await prisma.user.upsert({
      where: { clerkId: id },
      update: {},
      create: {
        clerkId: id,
        email: email_addresses[0].email_address,
        name: `${first_name} ${last_name}`,
      },
    })

    await clerkClient.users.updateUser(id, {
      publicMetadata: {
        userType: 'applicant'
      }
    });
  }

  if (event.type === 'user.updated') {
    const { id, public_metadata } = event.data;

    const user = await prisma.user.findUnique({
      where: { clerkId: id },
    });

    if (user) {
      await prisma.user.update({
        where: { clerkId: id },
        data: {
          type: public_metadata.userType as any,
        },
      });
    }
  }

  return new Response('OK')
}
