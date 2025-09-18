'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/app/components/ui/button";
import { Check, X, Heart } from "lucide-react";

type PricingModalProps = {
  onClose: () => void;
  onProceed: () => void;
};

import { pricingTiers } from '@/lib/pricingTiers';

const PricingModal = ({ onClose, onProceed }: PricingModalProps) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl relative border border-gray-200"
      >
        <Button onClick={onClose} variant="ghost" size="icon" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 rounded-full z-10">
          <X size={24} />
        </Button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Find Your Perfect Plan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             {" Click the heart to reveal the price and see if it's a good fit."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                animate={{ scale: selectedCard === index ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCard(index)}
                className={`rounded-xl p-8 border h-full flex flex-col relative cursor-pointer ${tier.isPremium ? 'bg-blue-600 text-white border-blue-700 shadow-lg' : 'bg-gray-100 text-gray-800 border-gray-200'}`}>
                
                <h3 className={`text-2xl font-bold ${tier.isPremium ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
                
                <div className="my-8 text-center relative">
                  <motion.p 
                    animate={{ filter: selectedCard === index ? 'blur(0px)' : 'blur(8px)'}}
                    transition={{ duration: 0.3 }}
                    className={`text-5xl font-bold ${tier.isPremium ? 'text-white' : 'text-gray-900'}`}>
                      {tier.price}
                  </motion.p>
                  <span className={`text-xl font-normal ${tier.isPremium ? 'text-blue-200' : 'text-gray-500'}`}>{tier.frequency}</span>
                  
                  <AnimatePresence>
                    {selectedCard !== index && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div
                          className={`rounded-full h-20 w-20 flex items-center justify-center bg-white/30 backdrop-blur-sm border ${tier.isPremium ? 'border-blue-400 text-white' : 'border-gray-300 text-gray-800'}`}>
                          <Heart className="w-10 h-10" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <p className={`flex-grow ${tier.isPremium ? 'text-blue-200' : 'text-gray-600'}`}>{tier.description}</p>
                
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.isPremium ? 'text-white' : 'text-blue-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <AnimatePresence>
                  {selectedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 text-center"
                    >
                      <p className={`mb-4 ${tier.isPremium ? 'text-blue-100' : 'text-gray-600'}`}>Ready to proceed?</p>
                      <Button
                        onClick={(e) => { e.stopPropagation(); onProceed(); }}
                        className={`w-full text-lg font-bold py-3 rounded-lg transition-transform transform hover:scale-105 ${tier.isPremium ? 'bg-white text-blue-600 hover:bg-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                      >
                       {" Yes, Let's Continue"}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PricingModal;
