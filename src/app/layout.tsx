// app/layout.tsx (correctly structured for App Router)

import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { ClerkProvider, 
  // UserButton
} from '@clerk/nextjs'
import { BrowserRouter as Router} from "react-router-dom";

// import Image from 'next/image'


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
     <Router>
    <ClerkProvider>
      <html lang="en">
        <head />
        <body className="flex flex-col">
        {/* <header className="flex items-center justify-between p-4">
            <Image src="/logo.svg" alt="Applyish Logo" width={100} height={40} />
            <UserButton />
          </header> */}
          <Analytics />
          {children}
        </body>
      </html>
    </ClerkProvider>
    </Router>
  )
}
