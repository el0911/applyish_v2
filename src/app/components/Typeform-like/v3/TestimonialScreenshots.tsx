
"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { interviewImages } from '@/lib/interviewImages';

interface TestimonialScreenshotsProps {
  onNext: () => void;
  question: {
    title: string;
    subtitle: string;
  };
}

export default function TestimonialScreenshots({ onNext, question }: TestimonialScreenshotsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-500">{question.subtitle}</p>
      <h1 className="text-3xl font-bold mt-2   text-white ">{question.title}</h1>

      <div className="mt-8 flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4 scrollbar-hide">
        {interviewImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-64 snap-center     rounded-lg p-4 shadow-sm">
            <Image
              src={src}
              alt={`Testimonial screenshot ${index + 1}`}
              width={300}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>

       <div className="mt-10">
        <button
          onClick={onNext}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 w-full max-w-xs"
        >
          CONTINUE
        </button>
      </div>
    </motion.div>
  );
}