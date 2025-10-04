
"use client";

import { motion } from "framer-motion";

interface ProblemValidationProps {
  onNext: () => void;
  question: {
    title: string;
    subtitle: string;
    emoji: string;
    body: { text: string; highlighted?: boolean }[];
  };
}

export default function ProblemValidation({ onNext, question }: ProblemValidationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-600 dark:text-gray-300">{question.subtitle}</p>
      <h1 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{question.title}</h1>
      <div className="mt-8 bg-indigo-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto" style={{height: 120, width: 120}}>
        <span className="text-6xl">{question.emoji}</span>
      </div>
      <p className="mt-8 text-lg text-gray-900 dark:text-white" style={{fontSize: 18}}>
        {question.body.map((segment, index) => (
          <span key={index} className={segment.highlighted ? "text-indigo-600 dark:text-indigo-300 font-bold" : ""}>
            {segment.text}
          </span>
        ))}
      </p>
      <div className="mt-10">
        <button
          onClick={onNext}
          className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-700 w-full max-w-sm mx-auto" style={{height: 56, maxWidth: 400}}
        >
          CONTINUE
        </button>
      </div>
    </motion.div>
  );
}
