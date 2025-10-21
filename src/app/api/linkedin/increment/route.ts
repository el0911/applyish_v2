import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { clientId } = await req.json();

    if (!clientId) {
      return new NextResponse('Username is required', { status: 400 });
    }

    const account = await prisma.s3File.findFirst({
      where: { s3Identifier: clientId },
    });

    if(account == null) {
      return new NextResponse('No account found for this username', { status: 404 });
    }

    const now = new Date();
    const year = now.getFullYear();
    const startOfYear = new Date(year, 0, 1);
    const diff = now.getTime() - startOfYear.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const weekOfYear = Math.ceil(diff / oneWeek);

    let applicationCount = await prisma.applicationCount.findUnique({
      where: {
        clientId_weekOfYear_year: {
          clientId,
          weekOfYear,
          year,
        },
      },
    });

    if (applicationCount) {
      applicationCount = await prisma.applicationCount.update({
        where: {
          clientId_weekOfYear_year: {
            clientId,
            weekOfYear,
            year,
          },
        },
        data: {
          count: applicationCount.count + 1,
        },
      });
    } else {
      applicationCount = await prisma.applicationCount.create({
        data: {
          clientId,
          weekOfYear,
          year,
          count: 1,
        },
      });
    }

    return NextResponse.json(applicationCount);
  } catch (error) {
    console.error('Error incrementing application count:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}