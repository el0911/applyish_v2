"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <SignIn
          signUpUrl="/coaches/sign-up?type=career_coach"
          redirectUrl="/coaches"
          transferable={false}
      />
    </div>
  );
}
