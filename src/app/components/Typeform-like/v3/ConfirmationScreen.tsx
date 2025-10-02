
"use client";

import { motion } from "framer-motion";

interface ConfirmationScreenProps {
  answers: { [key: string]: any };
}

export default function ConfirmationScreen({ answers }: ConfirmationScreenProps) {
  const callDate = new Date(answers.call_datetime);

  const formattedDate = callDate.toLocaleDateString("en-US", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = callDate.toLocaleTimeString("en-US", {
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto p-4 text-center"
    >
      <div className="mt-8 bg-yellow-100 rounded-full h-40 w-40 flex items-center justify-center mx-auto" style={{height: 150, width: 150}}>
        <span className="text-8xl">🎉</span>
      </div>
      <h1 className="text-3xl font-bold mt-8">You're all set!</h1>
      <div className="mt-4 text-lg">
        <p>Your onboarding call is scheduled for:</p>
        <p className="font-bold">{formattedDate}</p>
        <p className="font-bold">{formattedTime}</p>
        <p className="mt-4">We've sent a confirmation email to:</p>
        <p className="font-bold">{answers.email}</p>
      </div>
      <div className="mt-8 rounded-lg p-6 text-left max-w-md mx-auto" style={{backgroundColor: '#FEF3C7', borderRadius: 12, padding: 24}}>
        <p className="font-bold">Confirmation email with:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Calendar invite (.ics file)</li>
          <li>What to prepare for your call</li>
          <li>Details about your {answers.plan_selected} plan</li>
        </ul>
      </div>
      <p className="mt-8 text-lg">We're excited to help you land interviews faster!</p>
      <div className="mt-4 flex justify-center space-x-4">
        <button className="bg-white border border-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-100" style={{height: 44}}>
          Add to Google Calendar
        </button>
        <button className="bg-white border border-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-100" style={{height: 44}}>
          Add to Outlook
        </button>
      </div>
      <p className="mt-8 text-sm text-gray-500">Check your email for all the details. See you soon!</p>
    </motion.div>
  );
}
