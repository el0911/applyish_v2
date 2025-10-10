import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-between p-4 border-b">
        <div>
          {/* Add your logo or app name here */}
          <h1>My App</h1>
        </div>
        <div className="flex items-center space-x-4">
          <SignedIn>
            {/* Mount the UserButton component to show the signed-in user's profile, including logout */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            {/* Mount the SignInButton component to show the sign-in button to signed-out users */}
            <SignInButton />
          </SignedOut>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </>
  );
}
