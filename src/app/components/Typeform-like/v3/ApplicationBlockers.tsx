"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ApplicationBlockersProps {
  onNext: (answer: { [key: string]: string }) => void;
}

const options = [
  "Lack of resume/cover letter/portfolio",
  "Lack of online presence (LinkedIn, personal website)",
  "Limited network",
  "Lack of experience/skills",
  "Difficulty finding relevant jobs",
  "Struggling to tailor applications",
  "Interview preparation challenges",
  "Salary negotiation uncertainty",
  "Other",
];

export default function ApplicationBlockers({ onNext }: ApplicationBlockersProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setTimeout(() => {
      onNext({ application_blocker: option });
    }, 300);
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
        <p className="text-sm text-gray-600 dark:text-gray-300">HOW WE HELP</p>
        <h1 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">What&apos;s the biggest blocker in your job application process?</h1>
      </div>
      <div className="mt-8 space-y-4">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => handleSelect(option)}
            className={`border rounded-2xl p-4 text-center cursor-pointer flex items-center justify-between ${selected === option ? 'border-indigo-600 border-2' : 'border-gray-300'}`}
            style={{height: 60, maxWidth: 500, margin: 'auto'}}
          >
            <span className="text-gray-900 dark:text-white">{option}</span>
            {selected === option && <span className="text-indigo-600">✓</span>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}