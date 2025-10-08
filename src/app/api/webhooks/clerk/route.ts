import { Webhook } from 'svix'
import { WebhookEvent, clerkClient } from '@clerk/nextjs/server'
import { headers } from 'next/headers'
import prisma from '@/lib/prisma'
import { verifyWebhook } from "@clerk/backend/webhooks";

export async function POST(req: Request) {

  try {
    const client = await clerkClient()

    const secret = process.env.CLERK_WEBHOOK_SIGNING_SECRET
    if (!secret) return new Response('Missing secret', { status: 500 })



    const event = await verifyWebhook(req);


    if (event.type === 'user.created') {
      const { id, email_addresses, first_name, last_name, unsafe_metadata } = event.data;

      // Read the user type from metadata, defaulting to 'applicant'
      const userType = (unsafe_metadata?.type as 'career_coach' | 'applicant') || 'applicant';
      console.dir( event.data, { depth: null } );
      // Securely update the user's public metadata so we can use it in JWT claims
      await client.users.updateUser(id, {
        publicMetadata: {
          type: userType,
        },
      });

      // Save the user and their type to your own database
      await prisma.user.upsert({
        where: { 
          clerkId: id,
          email: email_addresses[0].email_address,
         },
        update: {
          type: userType,
        },
        create: {
          clerkId: id,
          email: email_addresses[0].email_address,
          name: `${first_name} ${last_name}`,
          type: userType,
        },
      });
    }

    return new Response('OK')
  } catch (error) {
    console.error(error)
  }
  return new Response('Bad Request', { status: 400 })
}
