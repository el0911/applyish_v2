// empty layout component



import React from 'react'
import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
// import {
//   ClerkProvider,
//   UserButton,
//   SignInButton,
//   SignUpButton,
//   SignedOut,
//   SignedIn,
// } from '@clerk/nextjs'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'Applyish',
  description: 'We stress you chill',
  openGraph: {
    title: 'Applyish – We Apply to Jobs For You',
    description: 'Applyish is your job-hunting agent. We apply to jobs on your behalf, so you can focus on interviews — not filling out forms.',
    type: 'website',
    images: [
      {
        url: 'https://placehold.co/1200x600?text=applyish',
        width: 1200,
        height: 630,
        alt: 'Applyish Open Graph Image',
      }
    ]
  },
}


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col ">
       {children}
    </div>
  )
}
export default Layout
//