"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SocialProofQuestion } from "./questionTypes";

// Helper to render text that might be highlighted
const renderText = (text: string | { text: string; highlighted?: boolean }[]) => {
  if (typeof text === 'string') {
    return text;
  }
  return text.map((segment, index) => (
    <span key={index} className={segment.highlighted ? "text-indigo-600 dark:text-indigo-300 font-bold" : ""}>
      {segment.text}
    </span>
  ));
};

interface TestimonialsProps {
  onNext: () => void;
  question:  SocialProofQuestion
}

export default function Testimonials({ onNext, question }: TestimonialsProps) {
  const title = question.screenshots ? question.screenshots.title : question.title;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      handleScroll();
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [question.screenshots]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-4 text-center flex flex-col h-full"
    >
      <div className="flex-shrink-0">
        <p className="text-sm text-gray-600 dark:text-gray-300">{question.subtitle}</p>
        <h1 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">{title}</h1>
      </div>

      <div className="flex-shrink-0 mt-10">
        <button
          onClick={onNext}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 w-full max-w-xs mx-auto block"
        >
          CONTINUE
        </button>
      </div>
      
      <div className="flex-grow overflow-y-auto mt-8">
        {!question.screenshots && (
          <div className="mt-12 bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
            <div className="flex items-start space-x-4">
              <Image src={question.testimonial.avatar} alt={question.testimonial.author} width={60} height={60} className="rounded-full" />
              <div>
                <p className="font-bold text-gray-900">{question.testimonial.author} wrote a review for Applyish</p>
                {question.testimonial.trustpilot_stars && (
                  <Image src={question.testimonial.trustpilot_stars} alt="Trustpilot stars" width={100} height={20} className="mt-2" />
                )}
                <p className="mt-4 text-gray-900 text-left">{renderText(question.testimonial.text)}</p>
              </div>
            </div>
          </div>
        )}

        {question.screenshots && (
          <div className="relative">
            <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 py-4">
              {question.screenshots.images.map((src: string | StaticImport, index: number) => (
                <div key={index} className="flex-shrink-0">
                  <Image src={src} alt={`Screenshot ${index + 1}`} width={300} height={225} className="rounded-lg shadow-md" />
                </div>
              ))}
            </div>
            {showLeftArrow && (
              <button onClick={() => scroll(-300)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full p-2 z-10 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {showRightArrow && (
              <button onClick={() => scroll(300)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full p-2 z-10 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

    </motion.div>
  );
}