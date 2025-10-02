
"use client";

import { motion } from "framer-motion";

interface CalendarIntroductionProps {
  onNext: () => void;
  plan: string;
}

const messages: { [key: string]: string } = {
    bulk: "We'll discuss your Bulk Applications plan and how we'll get you 100 quality applications fast.",
    pro: "We'll discuss your Pro plan and how we'll get you consistent interviews week after week.",
    custom: "We'll discuss your Custom plan and how we'll deliver 75 personalized applications weekly for maximum impact.",
};

const expectations = [
    "Review your job search goals",
    "Customize your application strategy",
    "Set up your first batch of applications",
];

export default function CalendarIntroduction({ onNext, plan }: CalendarIntroductionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-500">HOW WE HELP</p>
      <h1 className="text-3xl font-bold mt-2">You're almost there!</h1>
      <h2 className="text-2xl font-bold mt-4">Book your 15-minute onboarding call</h2>
      <p className="mt-4 text-lg">{messages[plan]}</p>
      <div className="mt-8 bg-yellow-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto" style={{height: 120, width: 120}}>
        <span className="text-6xl">🗓️</span>
      </div>
      <div className="mt-8 space-y-4 text-left max-w-md mx-auto">
        {expectations.map((item, i) => (
          <div key={i} className="flex items-center">
            <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center mr-4">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
      <button
        onClick={onNext}
        className="bg-yellow-400 text-white font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 w-full max-w-sm mx-auto" style={{height: 56, maxWidth: 400}}
      >
        CHOOSE YOUR TIME
      </button>
      </div>
    </motion.div>
  );
}
