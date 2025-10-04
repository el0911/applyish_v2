"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onNext: () => void;
  question: {
    title: string;
    subtitle: string;
  };
}

export default function LoadingAnimation({ onNext, question }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onNext, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onNext]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-4 text-center"
    >
      <h2 className="text-2xl font-bold text-white">{question.title}</h2>
      <p className="text-lg text-gray-400">{question.subtitle}</p>
      <div className="relative mt-8 w-64 h-64 mx-auto">
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#374151"
            strokeWidth="10"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#4f46e5"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray="283"
            strokeDashoffset={283 - (progress / 100) * 283}
            transform="rotate(-90 50 50)"
          />
        </motion.svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <p className="text-5xl font-bold text-white">{Math.round(progress)}%</p>
        </div>
      </div>
    </motion.div>
  );
}