
"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

interface ValuePreviewProps {
  onNext: () => void;
  question: {
    title: string;
    subtitle: string;
    body: string;
    image?: string;
    emoji?: string;
    bottomText?: string;
    testimonial?: {
      text: string;
      author: string;
      stars: number;
      avatar: string;
      trustpilot_stars: string;
    };
  };
}

export default function ValuePreview({ onNext, question }: ValuePreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-500">{question.subtitle}</p>
      <h1 className="text-3xl font-bold mt-2 text-white">{question.title}</h1>
      <p className="mt-4 text-lg text-white">{question.body}</p>
      <div className="mt-8">
        {question.emoji ? (
          <span className="text-8xl">{question.emoji}</span>
        ) : question.image ? (
          <Image src={question.image} alt={question.title} width={700} height={600} className="mx-auto w-4/5" />
        ) : null}
      </div>
      {question.bottomText && <p className="mt-10 text-sm text-gray-500">{question.bottomText}</p>}
      {question.testimonial && (
        <div className="mt-12 bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
          <div className="flex items-start space-x-4">
            <Image src={question.testimonial.avatar} alt={question.testimonial.author} width={60} height={60} className="rounded-full" />
            <div>
              <p className="font-bold text-gray-900">{question.testimonial.author} wrote a review for Applyish</p>
              <Image src={question.testimonial.trustpilot_stars} alt="Trustpilot stars" width={150} height={30} />
              <p className="mt-4 text-gray-900 text-left">{question.testimonial.text}</p>
            </div>
          </div>
        </div>
      )}
      <div className="mt-8">
      <button
        onClick={onNext}
        className="mt-8 bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-700 w-full max-w-sm mx-auto"
      >
        CONTINUE
      </button>
      </div>
    </motion.div>
  );
}
