'use client';

import { useState, useEffect } from 'react';
import { questions } from './questions';
import WelcomeScreen from './WelcomeScreen';
import QuestionComponent from './Question';
import ThankYouScreen from './ThankYouScreen';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import FileQuestion from './FileQuestion';
import PhoneInput from './PhoneInput';
import Navigation from './Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, WelcomeQuestion, TextQuestion, FileQuestion as FileQuestionType, MultipleChoiceQuestion as MultipleChoiceQuestionType, ThankYouQuestion } from './types';
import GatingQuestion from './GatingQuestion';

export default function FormComponent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: string | File | null}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasAcknowledgedPrice, setHasAcknowledgedPrice] = useState(false);

  const handleNext = (answer: { [key: string]: string | File | null }) => {
    setAnswers({ ...answers, ...answer });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleBack = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleGoTo = (index: number) => {
    setCurrentQuestionIndex(index);
  }

  const handleAcknowledge = () => {
    setHasAcknowledgedPrice(true);
  }

  const handleSubmitToHubspot = async (formData: {[key: string]: string | File | null}) => {
    setIsSubmitting(true);
    
    const clientFormData = new FormData();

    // Append all form fields to the FormData object
    for (const key in formData) {
      const value = formData[key];
      if (value !== null) {
        clientFormData.append(key, value);
      }
    }

    // Add the new fields
    if (formData.howHearAboutUs) {
      clientFormData.append("howHearAboutUs", formData.howHearAboutUs as string);
    }
    if (formData.whyLookingForJob) {
      clientFormData.append("whyLookingForJob", formData.whyLookingForJob as string);
    }

    try {
      await fetch(
        `/api/hubspot-submit`,
        {
          method: "POST",
          body: clientFormData,
        }
      );
    } catch (error) {
      console.error('Error submitting to HubSpot:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (questions[currentQuestionIndex]?.type === 'thankyou') {
      handleSubmitToHubspot(answers);
    }
  }, [currentQuestionIndex, answers]);

  const currentQuestion: Question = questions[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex) / (questions.length-1)) * 100);

  const renderQuestion = () => {
    if (!currentQuestion) {
        return <ThankYouScreen isLoading={isSubmitting} />;
    }
    switch (currentQuestion.type) {
        case 'welcome':
          return <WelcomeScreen question={currentQuestion as WelcomeQuestion} onNext={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} />;
        case 'text':
        case 'email':
          return <QuestionComponent question={currentQuestion as TextQuestion} onNext={handleNext} answers={answers} />;
        case 'phone':
          return <PhoneInput question={currentQuestion as TextQuestion} onNext={handleNext} answers={answers} />;
        case 'multiple-choice':
          return <MultipleChoiceQuestion question={currentQuestion as MultipleChoiceQuestionType} onNext={handleNext} answers={answers} />;
        case 'file':
          return <FileQuestion question={currentQuestion as FileQuestionType} onNext={handleNext} answers={answers} />;
        case 'thankyou':
            return <ThankYouScreen question={currentQuestion as ThankYouQuestion} isLoading={isSubmitting} />;
        default:
          // For now, just go to the next question for other types
          handleNext({});
          return null;
      }
  }

  if (!hasAcknowledgedPrice) {
    return <GatingQuestion onNext={handleAcknowledge} />;
  }

  return (
    <div className="w-full max-w-lg mx-auto p-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
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
            {currentQuestionIndex > 0 && questions[currentQuestionIndex]?.type !== 'welcome' && questions[currentQuestionIndex]?.type !== 'thankyou' && (
                <button onClick={handleBack} className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-2 px-4 rounded">
                    Back
                </button>
            )}
        </div>
        <Navigation questions={questions} currentQuestionIndex={currentQuestionIndex} onGoTo={handleGoTo} />
    </div>
  )
}


