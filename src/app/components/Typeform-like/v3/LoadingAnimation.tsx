
"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { useEffect } from "react";

interface LoadingAnimationProps {
  onNext: () => void;
  question: {
    testimonial: {
      text: string;
      author: string;
      stars: number;
      avatar: string;
      trustpilot_stars: string;
    };
  };
}

export default function LoadingAnimation({ onNext, question }: LoadingAnimationProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-2xl p-10 shadow-2xl max-w-lg w-full text-center" style={{maxWidth: 500, padding: 40, borderRadius: 16}}>
        <h2 className="text-xl font-semibold">Matching you with remote jobs based on your profile</h2>
        <div className="mt-8 w-full bg-gray-200 rounded-full h-3 mx-auto" style={{width: 300, height: 12}}>
          <motion.div
            className="bg-indigo-600 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
          />
        </div>
        <div className="mt-4 text-indigo-600 font-bold text-2xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>30%...</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>45%...</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>67%...</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>89%...</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>100%</motion.span>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
        <div className="mt-12 bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto" style={{maxWidth: 700, padding: 24}}>
            <p className="text-sm text-gray-500 text-center mb-4">HOW WE HELP</p>
            <div className="flex items-start space-x-4">
                <Image src={question.testimonial.avatar} alt={question.testimonial.author} width={60} height={60} className="rounded-full" />
                <div>
                <p className="font-bold">{question.testimonial.author} wrote a review for Applyish</p>
                <Image src={question.testimonial.trustpilot_stars} alt="Trustpilot stars" width={150} height={30} />
                <p className="mt-4 text-gray-800 text-left">{question.testimonial.text}</p>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
