
"use client";

import { motion } from "framer-motion";
import { useState } from 'react';

interface ConfirmationScreenProps {
  answers: { [key: string]: any };
}

export default function ConfirmationScreen({ answers }: ConfirmationScreenProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitToHubSpot = async () => {
    setIsSubmitting(true);
    setIsError(false);
    setErrorMessage('');

    const formData = new FormData();
    for (const key in answers) {
      const value = answers[key];
      if (value instanceof File) {
        formData.append(key, value, value.name);
      } else if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    }

    try {
      const response = await fetch('/api/hubspot-submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        setIsError(true);
        setErrorMessage(errorData.message || 'An unknown error occurred.');
      }
    } catch (error: any) {
      setIsError(true);
      setErrorMessage(error.message || 'Network error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto p-4 text-center"
      >
        <h1 className="text-3xl font-bold mt-8 text-green-600">Submission Successful!</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Thank you for your submission. We will be in touch shortly.</p>
      </motion.div>
    );
  }

  if (isError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto p-4 text-center"
      >
        <h1 className="text-3xl font-bold mt-8 text-red-600">Submission Failed!</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{errorMessage}</p>
        <button
          onClick={handleSubmitToHubSpot}
          className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 w-full max-w-xs"
        >
          Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-4 text-center"
    >
      <h1 className="text-3xl font-bold mt-8 text-gray-900 dark:text-white">Review Your Information</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Please review the details below before submitting.</p>

      <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-left max-h-96 overflow-y-auto">
        {Object.entries(answers).map(([key, value]) => (
          <div key={key} className="mb-2 pb-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <p className="font-semibold text-gray-700 dark:text-gray-300">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:</p>
            <p className="text-gray-900 dark:text-white">{value instanceof File ? value.name : String(value)}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={handleSubmitToHubSpot}
          disabled={isSubmitting}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 w-full max-w-xs"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </motion.div>
  );
}
