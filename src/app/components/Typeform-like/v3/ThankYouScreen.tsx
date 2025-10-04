
"use client";

import { motion } from "framer-motion";

export default function ThankYouScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-4 text-center"
    >
      <h1 className="text-3xl font-bold mt-8 text-gray-900 dark:text-white">Thank You!</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Your information has been submitted successfully.</p>
    </motion.div>
  );
}
