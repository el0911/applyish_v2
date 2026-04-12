import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

const DAILY_EMAIL_LIMIT = 4;
const COOLDOWN_SECONDS = 60;

async function sendReferralEmail(email: string, referralCode: string): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;

  if (!apiKey || !senderEmail) {
    throw new Error('Brevo email configuration is missing');
  }

  await axios.post(
    'https://api.brevo.com/v3/smtp/email',
    {
      sender: { email: senderEmail, name: 'Applyish' },
      to: [{ email }],
      subject: 'Your Applyish Referral Code',
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #333;">Your Referral Code</h2>
          <p>Here's your unique Applyish referral code:</p>
          <div style="font-size: 32px; font-weight: bold; letter-spacing: 6px; text-align: center; padding: 24px; background: #f5f5f5; border-radius: 8px; color: #6366f1;">
            ${referralCode}
          </div>
          <p style="margin-top: 24px; color: #666;">Share this code with friends to give them a head start on their job search.</p>
        </div>
      `,
    },
    {
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
    },
  );
}

function generateReferralCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    let referral = await prisma.referrals.findUnique({
      where: {
        email: `${email}`
      },
    });

    const now = new Date();
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);

    if (referral && referral.lastEmailSentAt) {
      // Cooldown: reject if last email was sent less than 60s ago
      const secondsSinceLastEmail = (now.getTime() - new Date(referral.lastEmailSentAt).getTime()) / 1000;
      if (secondsSinceLastEmail < COOLDOWN_SECONDS) {
        const waitSeconds = Math.ceil(COOLDOWN_SECONDS - secondsSinceLastEmail);
        return NextResponse.json(
          { error: `Please wait ${waitSeconds} seconds before requesting another email.` },
          { status: 429 },
        );
      }

      // Daily limit: reject if already sent max emails today
      const lastSentDate = new Date(referral.lastEmailSentAt);
      lastSentDate.setHours(0, 0, 0, 0);

      if (lastSentDate.getTime() === today.getTime() && referral.emailSentCount >= DAILY_EMAIL_LIMIT) {
        return NextResponse.json(
          { error: 'You have reached the maximum email limit for today. Please try again tomorrow.' },
          { status: 429 },
        );
      }
    }

    // Ensure user exists and has a referral code
    let referralCode = referral?.referralCode;
    if (!referralCode) {
      referralCode = generateReferralCode();
    }

    if (!referral) {
      referral = await prisma.referrals.create({
        data: {
          email: `${email}`,
          referralCode,
        },
      });
    }



    // Send the email first — only update counts on success
    await sendReferralEmail(email, referralCode);

    // Email sent successfully — now update the send tracking fields
    const isSameDay = referral.lastEmailSentAt
      && new Date(new Date(referral.lastEmailSentAt).setHours(0, 0, 0, 0)).getTime() === today.getTime();
    const newEmailSentCount = isSameDay ? referral.emailSentCount + 1 : 1;

    await prisma.referrals.update({
      where: { id: referral.id },
      data: {
        emailSentCount: newEmailSentCount,
        lastEmailSentAt: now,
      },
    });

    return NextResponse.json(
      { message: 'Hey, we actually sent the code to your email, go check it out!' },
      { status: 200 },
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
