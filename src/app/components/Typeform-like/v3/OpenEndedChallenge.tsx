
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface OpenEndedChallengeProps {
  onNext: (answer: { [key: string]: string }) => void;
}

export default function OpenEndedChallenge({ onNext }: OpenEndedChallengeProps) {
  const [challenge, setChallenge] = useState("");

  const handleNext = () => {
    onNext({ biggest_challenge: challenge });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4"
    >
      <div className="text-center">
        <p className="text-sm text-gray-500">HOW WE HELP</p>
        <h1 className="text-2xl font-bold mt-2">What&apos;s your biggest job search challenge right now?</h1>
      </div>
      <textarea
        value={challenge}
        onChange={(e) => setChallenge(e.target.value)}
        placeholder="e.g., Not getting responses, too many rejections, don't know where to start..."
        className="mt-8 w-full h-40 p-4 border border-gray-300 rounded-lg"
        style={{maxWidth: 500, height: 150, padding: 16, borderRadius: 8, margin: 'auto'}}
      />
      <p className="mt-2 text-sm text-gray-500 text-center">Optional — but helps us personalize your onboarding call</p>
      <button
        onClick={handleNext}
        className="mt-8 bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-700 w-full max-w-sm mx-auto block"
        style={{height: 56, maxWidth: 400}}
      >
        CONTINUE
      </button>
    </motion.div>
  );
}
