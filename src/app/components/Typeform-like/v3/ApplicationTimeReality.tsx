
"use client";

import { motion } from "framer-motion";

interface ApplicationTimeRealityProps {
  onNext: () => void;
  question: {
    title: string;
    subtitle: string;
    emoji: string;
    points: string[];
  };
}

export default function ApplicationTimeReality({ onNext, question }: ApplicationTimeRealityProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4"
    >
      <div className="text-center">
        <p className="text-sm text-gray-500">{question.subtitle}</p>
        <h1 className="text-2xl font-bold mt-2 text-white">{question.title}</h1>
      </div>
      <div className="mt-8 bg-yellow-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto">
        <span className="text-6xl">{question.emoji}</span>
      </div>
      <div className="mt-8 space-y-5">
        {question.points.map((point, i) => (
          <div key={i} className="flex items-center">
            <div className="rounded-full h-6 w-6 flex items-center justify-center mr-4" style={{backgroundColor: '#10B981'}}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg text-white">{point}</p>
          </div>
        ))}
      </div>
      <button
        onClick={onNext}
        className="mt-8 bg-yellow-400 text-white font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 w-full max-w-sm mx-auto block"
      >
        CONTINUE
      </button>
    </motion.div>
  );
}
