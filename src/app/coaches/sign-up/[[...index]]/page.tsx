"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <SignUp
        unsafeMetadata={{ type: 'career_coach' }}
        signInUrl="/coaches/sign-in"
        redirectUrl="/coaches/app"
      />
    </div>
  );
}