import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(["/",
  '/api/webhooks(.*)',  // Add webhooks as public routes
  "/coaches/login", '/sign-in(.*)', '/sign-up(.*)'])
const isCoach = createRouteMatcher(['/coaches/app(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims, isAuthenticated } = await auth()
  const { pathname } = req.nextUrl;
  // if (!isPublicRoute(req)) {
  //   await auth.protect()
  // }

  console.log("Pathname:", pathname);
  console.log("Is authenticated:", isAuthenticated);
  console.log("User type:", sessionClaims?.metadata?.type);

  if (isCoach(req)) {
    // Redirect authenticated coaches from sign-in/sign-up to /coaches/app
    if (isAuthenticated && sessionClaims?.metadata?.type === 'career_coach') {
      if (pathname.startsWith('/coaches/sign-in') || pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) {
        return NextResponse.redirect(new URL('/coaches/app', req.url));
      }
    }

    if (isAuthenticated && sessionClaims?.metadata?.type === 'career_coach' && pathname === '/app') {
      return NextResponse.redirect(new URL('/coaches/app', req.url));
    }
    if (isAuthenticated && sessionClaims?.metadata?.type !== 'career_coach') {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes except webhooks
    '/(api|trpc)(.*)',
  ],
}