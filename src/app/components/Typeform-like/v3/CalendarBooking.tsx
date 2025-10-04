"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { CalendarBookingQuestion } from './questionTypes';

// Define types

interface CalendarBookingProps {
  onNext: (answer: { [key: string]: string | Date }) => void;
  question: CalendarBookingQuestion;
  answers: { [key: string]: unknown };
}

export default function CalendarBooking({ onNext, question, answers }: CalendarBookingProps) {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load Calendly script
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src*="calendly.com"]')) {
      setScriptLoaded(true);
      setIsLoading(false);
      return;
    }

    const script = document.createElement('script');
    // makse sure it fits
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      setScriptLoaded(true);
      setIsLoading(false);
    };

    script.onerror = () => {
      setIsLoading(false);
      console.error('Failed to load Calendly script');
    };

    document.body.appendChild(script);

    return () => {
      // Only remove if we added it
      const existingScript = document.querySelector('script[src*="calendly.com"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  // Initialize Calendly widget
  useEffect(() => {
    if (!scriptLoaded || !calendlyRef.current || !window.Calendly) return;

    const prefill: CalendlyPrefill = {};
    if (answers.fullName) prefill.name = `${answers.fullName}`;
    if (answers.email) prefill.email = `${answers.email}`;
    if (answers.phoneNumber) {
      prefill.customAnswers = {
        a1: `${answers.phoneNumber}`
      };
    }

    // Initialize the widget
    window.Calendly.initInlineWidget({
      url: question.calendarConfig.calendlyUrl,
      parentElement: calendlyRef.current,
      prefill: prefill,
      utm: {},
    });

    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        // Event scheduled successfully
        if (e.data.event === 'calendly.event_scheduled') {
          const eventDetails = e.data.payload;
          onNext({ 
            call_datetime: new Date(eventDetails.event.start_time),
            calendly_event_uri: eventDetails.event.uri,
            calendly_invitee_uri: eventDetails.invitee.uri
          });
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [scriptLoaded, question, answers, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center p-4 sm:p-6 lg:p-8"
    >
      {/* Header */}
      <div className="w-full max-w-4xl text-center ">
        {question.subtitle && (
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{question.subtitle}</p>
        )}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
          {question.title}
        </h1>
      </div>

      {/* Calendly Widget Container */}
      <div className="w-full max-w-5xl flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Loading calendar...</p>
            </div>
          </div>
        )}
        
        <div 
          ref={calendlyRef}
          className="w-full rounded-lg overflow-hidden shadow-lg"
          style={{
            minHeight: '650px',
            height: 'calc(100vh - 250px)',
            maxHeight: '900px'
          }}
        >
          {/* Calendly inline widget will be embedded here */}
        </div>
      </div>

      {/* Info text */}
      <p className="mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center max-w-md">
        Select a time that works best for you. You&apos;ll receive a confirmation email after booking.
      </p>
    </motion.div>
  );
}

// TypeScript declaration for Calendly on window object
interface CalendlyPrefill {
  name?: string;
  email?: string;
  customAnswers?: {
    a1?: string;
  };
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: CalendlyPrefill;
        utm?: CalendlyUtm;
      }) => void;
    };
  }
}

interface CalendlyUtm {
  [key: string]: string;
}