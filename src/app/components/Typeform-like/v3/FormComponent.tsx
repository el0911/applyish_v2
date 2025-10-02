
'use client';

import { useState, useEffect } from 'react';
import { FormData } from '../types';
import { questions } from './questions';
import PainPoint from './PainPoint';
import ProblemValidation from './ProblemValidation';
import SocialProof from './SocialProof';
import ApplicationTimeReality from './ApplicationTimeReality';
import ValuePreview from './ValuePreview';
import ServiceSelection from './ServiceSelection';
import ConfirmationBridge from './ConfirmationBridge';
import TimeAvailability from './TimeAvailability';
import ApplicationBlockers from './ApplicationBlockers';
import SkillsFlexibility from './SkillsFlexibility';
import OpenEndedChallenge from './OpenEndedChallenge';
import LoadingAnimation from './LoadingAnimation';
import CalendarIntroduction from './CalendarIntroduction';
import CalendarBooking from './CalendarBooking';
import ConfirmationScreen from './ConfirmationScreen';
import ServicePrimer from './ServicePrimer';
import TestimonialScreenshots from './TestimonialScreenshots';
import { motion, AnimatePresence } from 'framer-motion';

export default function FormComponent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = (answer: { [key: string]: any }) => {
    setAnswers({ ...answers, ...answer });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleBack = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  useEffect(() => {
    const savedProgress = localStorage.getItem('applyish_progress');
    const urlStep = new URLSearchParams(window.location.search).get('step');

    if (urlStep) {
      const step = parseInt(urlStep, 10);
      if (!isNaN(step) && step < questions.length) {
        setCurrentQuestionIndex(step - 1);
      }
    } else if (savedProgress) {
      const { current_step, data } = JSON.parse(savedProgress);
      if (current_step < questions.length - 1) {
        setCurrentQuestionIndex(current_step);
        setAnswers(data);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('applyish_progress', JSON.stringify({ current_step: currentQuestionIndex, data: answers, timestamp: Date.now() }));
    window.history.replaceState(null, '', `?step=${currentQuestionIndex + 1}`);
  }, [currentQuestionIndex, answers]);


  const currentQuestion: any = questions[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex + 1) / (questions.length)) * 100);

  const renderQuestion = () => {
    if (!currentQuestion) {
        return <ConfirmationScreen answers={answers} />;
    }
    switch (currentQuestion.type) {
        case 'pain-point':
          return <PainPoint question={currentQuestion} onNext={handleNext} />;
        case 'problem-validation':
          return <ProblemValidation question={currentQuestion} onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />;
        case 'social-proof':
            return <SocialProof question={currentQuestion} onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />;
        case 'application-time-reality':
            return <ApplicationTimeReality question={currentQuestion} onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />;
        case 'value-preview':
            return <ValuePreview question={currentQuestion} onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />;
        case 'service-primer':
            return <ServicePrimer question={currentQuestion} onNext={handleNext} />;
        case 'service-selection':
            return <ServiceSelection onNext={handleNext} />;
        case 'testimonial-screenshots':
            return <TestimonialScreenshots question={currentQuestion} onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />;
        case 'confirmation-bridge':
            return <ConfirmationBridge plan={answers.plan_selected} onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />;
        case 'time-availability':
            return <TimeAvailability onNext={handleNext} />;
        case 'application-blockers':
            return <ApplicationBlockers onNext={handleNext} />;
        case 'skills-flexibility':
            return <SkillsFlexibility onNext={handleNext} />;
        case 'open-ended-challenge':
            return <OpenEndedChallenge onNext={handleNext} />;
        case 'loading-animation':
            return <LoadingAnimation question={currentQuestion} onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />;
        case 'calendar-introduction':
            return <CalendarIntroduction plan={answers.plan_selected} onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />;
        case 'calendar-booking':
            return <CalendarBooking onNext={handleNext} />;
        case 'confirmation-screen':
            return <ConfirmationScreen answers={answers} />;
        default:
          handleNext({});
          return null;
      }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <AnimatePresence mode="wait">
            <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
            >
                {renderQuestion()}
            </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex justify-center">
            {currentQuestionIndex > 0 && currentQuestion?.type !== 'confirmation-screen' && (
                <button onClick={handleBack} className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-2 px-4 rounded">
                    Back
                </button>
            )}
        </div>
        <div className="text-center mt-4">
          <a href="/privacy" target="_blank" className="text-sm text-gray-500">Privacy Policy</a>
        </div>
    </div>
  )
}
