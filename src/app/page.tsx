"use client";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user } = useUser();

  return (
    <div>
      <h1>Hello, world!</h1>
      {isSignedIn ? (
        <p>Welcome, {user?.firstName}</p>
      ) : (
        <p>Please sign in.</p>
      )}
    </div>
  );
}