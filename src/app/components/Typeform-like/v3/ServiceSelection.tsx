
"use client";

import { motion } from "framer-motion";

interface ServiceSelectionProps {
  onNext: (answer: { [key: string]: string }) => void;
}

const plans = [
  {
    id: "bulk",
    name: "Bulk",
    price: "$50",
    frequency: "One Time",
    description: "Perfect for a quick boost to your job applications.",
    features: ["100 Job Applications", "One Time Payment", "Weekly Progress Reports"],
    buttonText: "Get Bulk Applications",
    recommended: false,
    order: "md:order-1",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$55",
    frequency: "/week",
    description: "A high volume of tailored applications and dedicated support.",
    features: [
      "55 Tailored Resume Applications",
      "50 LinkedIn Easy Apply Weekly",
      "Personalized Support",
      "Weekly Progress Reports",
    ],
    badge: "MOST POPULAR",
    buttonText: "Go Pro",
    recommended: true,
    order: "md:order-2",
  },
  {
    id: "custom",
    name: "Custom",
    price: "$65",
    frequency: "/week",
    description: "Tailored applications and LinkedIn support.",
    features: [
      "75 Tailored Resume Applications",
      "50 LinkedIn Easy Apply Weekly",
      "Personalized Support",
      "Weekly Progress Reports",
    ],
    buttonText: "Get Custom Plan",
    recommended: false,
    order: "md:order-3",
  },
];

export default function ServiceSelection({ onNext }: ServiceSelectionProps) {
  const handleSelect = (planId: string) => {
    onNext({ plan_selected: planId });
  };

  // Mobile order: Pro, Custom, Bulk
  const mobileOrder = ["pro", "custom", "bulk"];
  const sortedPlans = [...plans].sort((a, b) => mobileOrder.indexOf(a.id) - mobileOrder.indexOf(b.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-4 text-center"
    >
      <p className="text-sm text-gray-500">HOW WE HELP</p>
      <h1 className="text-3xl font-bold mt-2">Which service matches your job search intensity?</h1>
      <p className="mt-2 text-gray-500">Choose the plan that fits your goals</p>
      <div className="mt-8 flex flex-col md:flex-row md:justify-center items-center md:items-stretch gap-6">
        {sortedPlans.map((plan) => (
          <div
            key={plan.id}
            className={`border rounded-xl p-8 flex flex-col ${plan.recommended ? 'border-yellow-400 border-2 shadow-xl transform md:scale-105' : 'border-gray-300'} ${plan.order}`}
            style={{width: 320, borderRadius: 12, padding: 32}}
          >
            {plan.badge && (
              <div className="bg-yellow-400 text-white text-xs font-bold rounded-full px-3 py-1 self-center">
                {plan.badge}
              </div>
            )}
            <h2 className="text-2xl font-bold mt-4 text-center">{plan.name}</h2>
            <p className="mt-4 text-center">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-500 text-sm">{plan.frequency === 'One Time' ? '' : plan.frequency}</span>
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
              className={`mt-auto w-full py-3 rounded-lg font-bold h-12 ${plan.recommended ? 'bg-yellow-400 text-gray-800' : 'bg-white text-gray-800 border-2 border-gray-400'}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
