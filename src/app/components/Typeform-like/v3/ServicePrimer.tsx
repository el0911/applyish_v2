
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ServicePrimerProps {
  onNext: (answer: { [key: string]: string }) => void;
  question: {
    title: string;
    subtitle: string;
    options: {
      title: string;
      description: string;
      value: string;
    }[];
  };
}

export default function ServicePrimer({ onNext, question }: ServicePrimerProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setTimeout(() => {
      onNext({ service_primer: option });
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
        <p className="text-sm text-gray-500">{question.subtitle}</p>
        <h1 className="text-2xl font-bold mt-2">{question.title}</h1>
      </div>
      <div className="mt-8 space-y-4">
        {question.options.map((option, index) => (
          <div
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`border rounded-2xl p-4 cursor-pointer flex items-start ${selected === option.value ? 'border-yellow-400 border-2' : 'border-gray-300'}`}
            style={{maxWidth: 500, margin: 'auto'}}
          >
            <div className="flex-shrink-0 w-8 text-lg font-bold">{index + 1}.</div>
            <div className="flex-grow">
              <h3 className="font-bold">{option.title}</h3>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
            {selected === option.value && <div className="flex-shrink-0 w-8 text-yellow-400 text-2xl">✓</div>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
