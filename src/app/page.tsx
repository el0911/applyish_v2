// app/page.tsx
import { currentUser } from '@clerk/nextjs/server'
import prisma from '@/lib/prisma'
import ConnectLinkedIn from './components/ConnectLinkedIn'

export default async function Page() {
  const user = await currentUser()
  if (!user) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Please sign in to sync your LinkedIn cookie.</p>
      </main>
    )
  }

  const linkedInAccount = await prisma.linkedInAccount.findUnique({
    where: { userId: user.id },
  })

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1
        className="
          text-4xl font-extrabold mb-8
          bg-clip-text text-transparent
          bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
        "
      >
        {linkedInAccount ? '✅ LinkedIn Synced!' : 'Connect LinkedIn'}
      </h1>

      {linkedInAccount ? (
        <p className="text-lg">Your LinkedIn cookie is safely stored.</p>
      ) : (
        <ConnectLinkedIn />
      )}
    </main>
  )
}
