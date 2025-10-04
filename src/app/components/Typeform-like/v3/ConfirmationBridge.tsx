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
      <span key={index} className={segment.highlighted ? "text-indigo-600 dark:text-indigo-300 font-bold" : ""}>
        {replacePlan(segment.text)}
      </span>
    ));
  }
  return null;
};

interface ConfirmationBridgeProps {
  onNext: () => void;
  plan: string;
  question: {
    title: string;
    subtitle: string;
    emoji?: string;
    body: { text: string; highlighted?: boolean }[];
    callout?: {
      text: { text: string; highlighted?: boolean }[];
      icon?: string;
      style: 'info' | 'success';
    };
    buttonText: string;
  };
}

export default function ConfirmationBridge({ onNext, plan, question }: ConfirmationBridgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-600 dark:text-gray-300">{question.subtitle}</p>
      <h1 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">{question.title.replace('{selectedPlan}', plan)}</h1>

      {question.emoji && (
        <div className="mt-8 bg-indigo-100 rounded-full h-32 w-32 flex items-center justify-center mx-auto" style={{height: 120, width: 120}}>
          <span className="text-6xl">{question.emoji}</span>
        </div>
      )}

      <p className="mt-8 text-lg text-gray-900 dark:text-white">{renderText(question.body, plan)}</p>

      {question.callout && (
        <div className={`mt-4 p-3 rounded-lg text-sm font-medium flex items-center justify-center
          ${question.callout.style === 'info' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
          ${question.callout.style === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
        `}>
          {question.callout.icon && <span className="mr-2">{question.callout.icon}</span>}
          <p>{renderText(question.callout.text)}</p>
        </div>
      )}

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
