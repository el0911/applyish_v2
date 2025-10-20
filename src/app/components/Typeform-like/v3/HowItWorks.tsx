"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HowItWorksProps {
  onNext: () => void;
  question: {
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
    emoji: string;
    screenshots?: {
      title: string;
      images: string[];
    };
  };
}

export default function HowItWorks({ onNext, question }: HowItWorksProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-600 dark:text-gray-300">{question.subtitle}</p>
      <h1 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">{question.title}</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {question.steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold text-xl">
              {step.number}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-left">{step.title}</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400 text-left">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {question.screenshots && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{question.screenshots.title}</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {question.screenshots.images.map((src, index) => (
              <Image key={index} src={src} alt={`Screenshot ${index + 1}`} width={400} height={300} className="rounded-lg shadow-md" />
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <button
          onClick={onNext}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 w-full max-w-xs mx-auto block"
        >
          CONTINUE
        </button>
      </div>
    </motion.div>
  );
}
