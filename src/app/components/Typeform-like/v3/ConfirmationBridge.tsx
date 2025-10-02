
"use client";

import { motion } from "framer-motion";

interface ConfirmationBridgeProps {
  onNext: () => void;
  plan: string;
}

const messages: { [key: string]: string } = {
  bulk: "We'll need to understand your background and target roles on a quick call with our team. This ensures your 100 applications actually match what you're looking for and get you results.",
  pro: "We'll need to understand your background and goals on a quick call with our team. This helps us deliver Pro service that gets you consistent interviews week after week.",
  custom: "We'll need to understand your background and goals on a quick call with our team. This ensures every one of your 75 weekly applications is personalized for maximum impact.",
};

export default function ConfirmationBridge({ onNext, plan }: ConfirmationBridgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-500">HOW WE HELP</p>
      <h1 className="text-3xl font-bold mt-2">Great choice!</h1>
      <p className="mt-2 text-gray-500">Before we match you with jobs...</p>
      <div className="mt-8 bg-yellow-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto" style={{height: 120, width: 120}}>
        <span className="text-6xl">🚀</span>
      </div>
      <p className="mt-8 text-lg">{messages[plan]}</p>
      <div className="mt-10">
      <button
        onClick={onNext}
        className="bg-yellow-400 text-white font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 w-full max-w-sm mx-auto" style={{height: 56, maxWidth: 400}}
      >
        Book My Onboarding Call
      </button>
      </div>
    </motion.div>
  );
}
