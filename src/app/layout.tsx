// app/layout.tsx (correctly structured for App Router)

import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { ClerkProvider, 
  // UserButton
} from '@clerk/nextjs'


// import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Best Job Application Services to Land Interviews Faster | Applyish',
  description: 'Discover Applyish — the #1 job application service combining AI + humans to land interviews faster. Stop auto-rejections and apply smarter today.',
  openGraph: {
    title: 'Best Job Application Services to Land Interviews Faster | Applyish',
    description: 'Discover Applyish — the #1 job application service combining AI + humans to land interviews faster. Stop auto-rejections and apply smarter today.',
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


import Navbar from './components/layout/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
     <ClerkProvider>
      <html lang="en">
        <head />
        <body className="flex flex-col">
        <Navbar />
          <Analytics />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
