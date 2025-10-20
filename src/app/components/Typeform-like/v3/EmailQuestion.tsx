
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { EmailQuestion as EmailQuestionType } from "./questionTypes";

interface EmailQuestionProps {
  question: EmailQuestionType;
  onNext: (answer: { [key: string]: string }) => void;
}

export default function EmailQuestion({ question, onNext }: EmailQuestionProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (question.required && !email) {
      alert("Email is required");
      return;
    }
    onNext({ [question.answerKey]: email });
  };

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
      <div className="mt-8">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={question.placeholder}
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
        {question.helperText && <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{question.helperText}</p>}
      </div>
      {question.valueProps && (
        <ul className="mt-6 text-left max-w-md mx-auto space-y-2">
          {question.valueProps.map((prop, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-900 dark:text-white">{prop}</p>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-10">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-700 w-full max-w-sm mx-auto"
        >
          CONTINUE
        </button>
      </div>
    </motion.div>
  );
}
