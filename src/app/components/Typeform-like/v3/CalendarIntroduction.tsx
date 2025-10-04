"use client";

import { motion } from "framer-motion";

// Helper to render text that might be highlighted
const renderText = (text: string | { text: string; highlighted?: boolean }[], plan?: string) => {
  const replacePlan = (str: string) => plan ? str.replace(/{selectedPlan}/g, plan) : str;

  if (typeof text === 'string') {
    return replacePlan(text);
  }
  if (Array.isArray(text)) {
    return text.map((segment, index) => (
      <span key={index} className={segment.highlighted ? "text-indigo-300 font-bold" : ""}>
        {replacePlan(segment.text)}
      </span>
    ));
  }
  return null;
};

interface CalendarIntroductionProps {
  onNext: () => void;
  plan: string;
  question: {
    title: string;
    subtitle: string;
    emoji?: string;
    body: { text: string; highlighted?: boolean }[];
    expectations: string[];
    buttonText: string;
  };
}

export default function CalendarIntroduction({ onNext, plan, question }: CalendarIntroductionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-500">{question.subtitle}</p>
      <h1 className="text-3xl font-bold mt-2 text-white">{question.title}</h1>

      {question.emoji && (
        <div className="mt-8 bg-indigo-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto" style={{height: 120, width: 120}}>
          <span className="text-6xl">{question.emoji}</span>
        </div>
      )}

      <p className="mt-8 text-lg text-white">{renderText(question.body, plan)}</p>

      <div className="mt-8 space-y-4 text-left max-w-md mx-auto">
        {question.expectations.map((item, i) => (
          <div key={i} className="flex items-center">
            <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center mr-4">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg text-white">{item.replace('{selectedPlan}', plan)}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={onNext}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 w-full max-w-xs mx-auto block"
        >
          {question.buttonText}
        </button>
      </div>
    </motion.div>
  );
}