
"use client";

import { motion } from "framer-motion";
import { ServiceSelectionQuestion } from '../types';

interface ServiceSelectionProps {
  onNext: (answer: { [key: string]: string }) => void;
  question: ServiceSelectionQuestion;
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
      <p className="text-sm text-gray-500">{question.subtitle}</p>
      <h1 className="text-3xl font-bold mt-2">{question.title}</h1>

      {question.callout && (
        <div className={`mt-4 p-3 rounded-lg text-sm font-medium flex items-center justify-center
          ${question.callout.style === 'info' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
          ${question.callout.style === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
        `}>
          {question.callout.icon && <span className="mr-2">{question.callout.icon}</span>}
          {question.callout.text}
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
            <h2 className="text-2xl font-bold mt-4 text-center">{plan.name}</h2>
            <p className="mt-4 text-center">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-500 text-sm">{plan.period === 'one-time' ? ' one-time' : `/${plan.period}`}</span>
            </p>
            <p className="mt-4 text-gray-600 h-16 text-center text-base">{plan.description}</p>
            <ul className="mt-6 space-y-4 text-left text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleSelect(plan.id)}
              className={`mt-auto w-full py-3 rounded-full font-bold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 h-12
                ${plan.buttonStyle === 'primary' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border-2 border-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700'}
              `}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
