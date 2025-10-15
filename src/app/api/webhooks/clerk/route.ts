// import { Webhook } from 'svix'
import {  clerkClient } from '@clerk/nextjs/server'
// import { headers } from 'next/headers'
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

      // Read the user type from metadata, defaulting to 'client'
      const userType = (unsafe_metadata?.type as 'career_coach' | 'client') || 'client';

      // Securely update the user's public metadata so we can use it in JWT claims
      await client.users.updateUser(id, {
        publicMetadata: {
          type: userType,
        },
      });

      const name = `${first_name} ${last_name}`;
      const email = email_addresses[0].email_address;

      const createData : {
        clerkId: string;
        email: string;
        name: string;
        type: 'career_coach' | 'client';
        careerCoach?: { create: { name: string } };
        client?: { create: { name: string; email: string } };
      } = {
        clerkId: id,
        email: email,
        name: name,
        type: userType,
      };

      if (userType === 'career_coach') {
        createData.careerCoach = {
          create: {
            name: name,
          },
        };
      } else {
        createData.client = {
          create: {
            name: name,
            email: email,
          },
        };
      }

      // Save the user and their type to your own database
      await prisma.user.upsert({
        where: {
          clerkId: id,
          email: email_addresses[0].email_address,
         },
        update: {
          type: userType,
        },
        create: createData,
      });
    }

    return new Response('OK')
  } catch (error) {
    console.error(error)
  }
  return new Response('Bad Request', { status: 400 })
}
