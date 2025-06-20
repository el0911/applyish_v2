// empty layout component



import React from 'react'
import { Analytics } from "@vercel/analytics/next"
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



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col ">
      <Analytics/>
       {children}
    </div>
  )
}
export default Layout
//