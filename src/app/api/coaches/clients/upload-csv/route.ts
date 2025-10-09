import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import csv from 'csv-parser';
import { Readable } from 'stream';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as Blob | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const readableStream = Readable.from(buffer.toString());

    const results: any[] = [];
    await new Promise((resolve, reject) => {
      readableStream
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', resolve)
        .on('error', reject);
    });

    const clientsToCreate = results.map((row) => ({
      name: row.name,
      email: row.email,
      linkedin: row.linkedin || null,
      notes: row.notes || null,
      status: 'creating', // Default status
      addedAt: new Date().toISOString(),
      // Assuming chartData, totalJobs, weekJobs, avgJobs are handled elsewhere or default
    }));

    // Basic validation
    for (const client of clientsToCreate) {
      if (!client.name || !client.email) {
        return NextResponse.json({ error: 'Each row must have a name and email' }, { status: 400 });
      }
    }

    // Create clients in Prisma
    // Note: This is a simplified example. In a real application, you'd want to
    // handle potential duplicates, more robust error handling, and perhaps
    // a background job for instance creation.
    const createdClients = await prisma.client.createMany({
      data: clientsToCreate,
      skipDuplicates: true, // Skip if a client with the same unique identifier (e.g., email) already exists
    });

    return NextResponse.json({ message: 'Clients uploaded successfully', count: createdClients.count }, { status: 200 });
  } catch (error) {
    console.error('CSV upload error:', error);
    return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
  }
}
