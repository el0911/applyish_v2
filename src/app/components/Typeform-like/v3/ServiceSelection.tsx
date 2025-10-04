"use client";

import { motion } from "framer-motion";

// Helper to render text that might be highlighted
const renderText = (text: string | { text: string; highlighted?: boolean }[], highlightedClassName: string) => {
  if (typeof text === 'string') {
    return text;
  }
  if (Array.isArray(text)) {
    return text.map((segment, index) => (
      <span key={index} className={segment.highlighted ? highlightedClassName : ""}>
        {segment.text}
      </span>
    ));
  }
  return null;
};

interface ServiceSelectionProps {
  onNext: (answer: { [key: string]: string }) => void;
  question: {
    title: string;
    subtitle: string;
    callout?: {
        text: { text: string; highlighted?: boolean }[];
        icon?: string;
        style: 'info' | 'success';
    };
    plans: {
        id: string;
        name: string;
        price: number;
        period: string;
        badge: string | null;
        description: string;
        features: (string | { text: string; highlighted?: boolean }[])[];
        buttonText: string;
        buttonStyle: string;
        elevated?: boolean;
    }[];
    mobileOrder: string[];
  };
}

export default function ServiceSelection({ onNext, question }: ServiceSelectionProps) {
  const handleSelect = (planId: string) => {
    onNext({ selectedPlan: planId });
  };

  const sortedPlans = [...question.plans].sort((a, b) => {
    const aOrder = question.mobileOrder?.indexOf(a.id) ?? -1;
    const bOrder = question.mobileOrder?.indexOf(b.id) ?? -1;
    if (aOrder !== -1 && bOrder !== -1) return aOrder - bOrder;
    return 0;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-600 dark:text-gray-300">{question.subtitle}</p>
      <h1 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">{question.title}</h1>

      {/* Updated exploratory badge */}
      <div className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Preview Our Services — We&apos;ll Help You Decide
      </div>

      {question.callout && (
        <div className={`mt-6 p-3 rounded-lg text-base font-medium flex items-center justify-center max-w-2xl mx-auto
          ${question.callout.style === 'info' ? 'bg-blue-900 text-blue-200' : ''}
          ${question.callout.style === 'success' ? 'bg-green-900 text-green-200' : ''}
        `}>
          {question.callout.icon && <span className="mr-3 text-xl">{question.callout.icon}</span>}
          {renderText(question.callout.text, "text-white font-bold")}
        </div>
      )}

      <div className="mt-8 flex flex-col md:flex-row md:justify-center items-center md:items-stretch gap-6">
        {sortedPlans.map((plan) => (
          <div
            key={plan.id}
            className={`border rounded-xl p-8 flex flex-col ${plan.elevated ? 'border-indigo-600 border-2 shadow-xl transform md:scale-105' : 'border-gray-300'}`}
            style={{width: 320, borderRadius: 12, padding: 32}}
          >
            {plan.badge && (
              <div className="bg-indigo-600 text-white text-xs font-bold rounded-full px-3 py-1 self-center">
                {plan.badge}
              </div>
            )}
            <h2 className="text-2xl font-bold mt-4 text-center text-gray-900 dark:text-white">{plan.name}</h2>
            
            {/* Description moved up for emphasis */}
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-center text-base leading-relaxed min-h-[60px]">{plan.description}</p>
            
            {/* Pricing with "Starting at" context */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">Starting at</p>
              <p>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{plan.period === 'one-time' ? ' one-time' : `/${plan.period}`}</span>
              </p>
            </div>
            
            <ul className="mt-6 space-y-4 text-left text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-900 dark:text-white">{renderText(feature, "text-indigo-600 dark:text-indigo-300 font-bold")}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-6">
              <button
                onClick={() => handleSelect(plan.id)}
                className={`w-full py-3 rounded-full font-bold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 
                  ${plan.buttonStyle === 'primary' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border-2 border-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700'}
                `}
              >
                {plan.buttonText}
              </button>
              
              {/* Added reassurance text */}
              <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 text-center">
                No commitment • Discuss on your free call
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}