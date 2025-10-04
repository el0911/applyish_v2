
"use client";

import { motion } from "framer-motion";

interface PainPointProps {
  onNext: (answer: { [key: string]: boolean }) => void;
  question: {
    id: string;
    title: string;
    subtitle: string;
    quote: { text: string; highlighted?: boolean }[];
  };
}

export default function PainPoint({ onNext, question }: PainPointProps) {
  const handleAnswer = (answer: boolean) => {
    onNext({ [question.id]: answer });
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
        <p className="text-sm text-gray-600 dark:text-gray-300">{question.subtitle}</p>
        <h1 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{question.title}</h1>
      </div>
      <div className="mt-8 bg-white rounded-2xl p-10 shadow-md max-w-xl mx-auto">
        <div className="text-indigo-600 text-6xl">&quot;</div>
        <p className="text-2xl font-bold text-gray-900">
          {question.quote.map((segment, index) => (
            <span key={index} className={segment.highlighted ? "text-indigo-600" : ""}>
              {segment.text}
            </span>
          ))}
        </p>
      </div>
      <div className="mt-8 flex justify-center space-x-6">
        <button
          onClick={() => handleAnswer(false)}
          className="bg-white border border-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 text-base h-12"
        >
          ❌ No
        </button>
        <button
          onClick={() => handleAnswer(true)}
          className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 text-base h-12"
        >
          ✅ Yes
        </button>
      </div>
    </motion.div>
  );
}
