"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const messages = [
  "Scanning your profile...",
  "Matching your skills to our job database...",
  "Identifying top opportunities...",
  "Preparing your report...",
];

interface FindingJobsAnimationProps {
  onNext: () => void;
  question: {
    testimonial: {
      text: { text: string; highlighted?: boolean }[];
      author: string;
      stars: number;
      avatar: string;
    };
  };
}

export default function FindingJobsAnimation({ onNext, question }: FindingJobsAnimationProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        if (prevIndex < messages.length - 1) {
          return prevIndex + 1;
        }
        clearInterval(interval);
        setTimeout(onNext, 1000); // Wait a second before going to the next step
        return prevIndex;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [onNext]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-4 text-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-48 rounded-lg bg-gray-800 p-6 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-1 w-full bg-indigo-500"
            animate={{
              y: [0, 192, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative h-full flex items-center justify-center">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentMessageIndex ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                <h2 className="text-xl font-bold text-white">{message}</h2>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center space-x-4">
            <Image src={question.testimonial.avatar} alt={question.testimonial.author} width={80} height={80} className="rounded-full" />
            <div>
              <p className="font-bold text-gray-900">{question.testimonial.author}</p>
              <div className="flex mt-1">
                {[...Array(question.testimonial.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700 text-left">&quot;{question.testimonial.text.map((segment, index) => (
            <span key={index} className={segment.highlighted ? "text-indigo-600 font-bold" : ""}>
              {segment.text}
            </span>
          ))}&quot;</p>
        </div>
      </div>
    </motion.div>
  );
}
