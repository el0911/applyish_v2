import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Matchers for different routes
const isCoachRoute = createRouteMatcher(['/coach(.*)', '/coaches(.*)'])
// const isPublicRoute = createRouteMatcher([
//   '/',
//   '/api/webhooks(.*)',      // Allow webhook routes
//   '/sign-in(.*)',
//   '/sign-up(.*)',
//   '/coaches/sign-in',
//   '/coaches/sign-up',
// ])

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims, isAuthenticated } = await auth()
  const { pathname } = req.nextUrl

  console.log("Pathname:", pathname)
  console.log("Is authenticated:", isAuthenticated)
  console.log("User type:", sessionClaims?.metadata?.type)


  

  // Redirect authenticated career coaches from `/` to `/coaches/app`
  if (pathname === '/' && isAuthenticated && sessionClaims?.metadata?.type === 'career_coach') {
    console.log('redirect')
    return NextResponse.redirect(new URL('/coaches/app', req.url))
  }


  // Redirect unauthenticated users trying to access protected coach routes
  if (isCoachRoute(req) && !isAuthenticated && pathname !== '/coaches/sign-in' && pathname !== '/coaches/sign-up') {
    return NextResponse.redirect(new URL('/coaches/sign-in', req.url))
  }

  // Redirect authenticated career coaches to the dashboard if on sign-in/up pages
  if (isAuthenticated && sessionClaims?.metadata?.type === 'career_coach') {
    const isAuthPage = [
      '/coaches/sign-in',
      '/sign-in',
      '/sign-up',
      '/coaches/sign-up',
    ].some(route => pathname.startsWith(route))

    if (isAuthPage || pathname === '/app') {
      return NextResponse.redirect(new URL('/coaches/app', req.url))
    }
  }

  // Optionally: Redirect users who are NOT career coaches away from coach routes
  // Uncomment if needed:
  // if (isCoachRoute(req) && isAuthenticated && sessionClaims?.metadata?.type !== 'career_coach') {
  //   return NextResponse.redirect(new URL('/', req.url))
  // }

  return NextResponse.next()
})

export const config = {
  matcher: [
    // Match everything except Next.js internals and static assets
    '/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes (excluding public webhooks)
    '/(api|trpc)(.*)',
  ],
}
