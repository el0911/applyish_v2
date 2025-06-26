// app/layout.tsx (correctly structured for App Router)

import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Applyish',
  description: 'We stress you chill',
  openGraph: {
    title: 'Applyish – We Apply to Jobs For You',
    description:
      'Applyish is your job-hunting agent. We apply to jobs on your behalf, so you can focus on interviews — not filling out forms.',
    type: 'website',
    url: 'https://www.applyish.com',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.applyish.com/1200x600.png',
        width: 1200,
        height: 630,
        alt: 'Applyish Open Graph Image',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col">
        <Analytics />
        {children}
      </body>
    </html>
  )
}
