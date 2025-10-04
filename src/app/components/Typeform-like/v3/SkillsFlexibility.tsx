
"use client";

import { motion } from "framer-motion";

interface SkillsFlexibilityProps {
  onNext: (answer: { [key: string]: boolean }) => void;
}

export default function SkillsFlexibility({ onNext }: SkillsFlexibilityProps) {
  const handleAnswer = (answer: boolean) => {
    onNext({ open_to_learn: answer });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-600 dark:text-gray-300">HOW WE HELP</p>
      <h1 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">Open to learn new skills if the role requires it?</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 italic">To move forward, specify</p>
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => handleAnswer(false)}
          className="bg-white border border-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100"
        >
          ❌ No
        </button>
        <button
          onClick={() => handleAnswer(true)}
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700"
        >
          ✅ Yes
        </button>
      </div>
    </motion.div>
  );
}
