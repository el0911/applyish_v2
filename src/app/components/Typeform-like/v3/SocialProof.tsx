
"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

interface SocialProofProps {
  onNext: () => void;
  question: {
    title: string;
    subtitle: string;
    testimonial: {
      text: { text: string; highlighted?: boolean }[];
      author: string;
      stars: number;
      avatar: string;
    };
  };
}

export default function SocialProof({ onNext, question }: SocialProofProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-500">{question.subtitle}</p>
      <h1 className="text-2xl font-bold mt-2 text-white">{question.title}</h1>
      <div className="mt-8 rounded-lg p-6 shadow-md max-w-md mx-auto" style={{backgroundColor: '#E0F2F7', borderRadius: 12, padding: 24, maxWidth: 500}}>
        <div className="flex items-start space-x-4">
          <Image src={question.testimonial.avatar} alt={question.testimonial.author} width={50} height={50} className="rounded-full" />
          <div>
            <p className="text-gray-800">
              {question.testimonial.text.map((segment, index) => (
                <span key={index} className={segment.highlighted ? "text-indigo-600 font-bold" : ""}>
                  {segment.text}
                </span>
              ))}
            </p>
            <p className="mt-4 font-bold text-gray-600">— {question.testimonial.author}</p>
            <div className="flex mt-2">
              {[...Array(question.testimonial.stars)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={onNext}
        className="mt-8 bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-700 w-full max-w-sm mx-auto"
      >
        CONTINUE
      </button>
    </motion.div>
  );
}
