// app/layout.tsx (correctly structured for App Router)

import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Applyish – Your Job Hunt Assistant',
  description: 'Applyish is your personal job-hunting assistant. We apply to dozens of jobs for you every week, saving you time and energy so you can focus on what really matters: getting hired.',
  openGraph: {
    title: 'Applyish – We Apply to Jobs So You Don’t Have To',
    description: 'Applyish is your personal job-hunting assistant. We apply to dozens of jobs for you every week, saving you time and energy so you can focus on what really matters: getting hired.',
    type: 'website',
    url: 'https://www.applyish.com',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.applyish.com/1200x600.png',
        width: 1200,
        height: 630,
        alt: 'Applyish – We Apply to Jobs So You Don’t Have To',
      },
    ],
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className="flex flex-col">
        <Analytics />
           {children}
      </body>
    </html>
  )
}
