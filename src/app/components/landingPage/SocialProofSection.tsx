import { FC } from 'react';
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { id: 1, name: 'Applications sent per week', value: '70+' },
  { id: 2, name: 'Interviews per week', value: '2+' },
  { id: 3, name: 'Success rate', value: '94%' },
  { id: 4, name: 'Happy clients', value: '130+' },
];

const SocialProofSection: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-400 to-blue-50 py-24 sm:py-32 text-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Join thousands of professionals who landed their dream job
            </h2>
          </div>
          <motion.div
            className="mt-16 border-t border-gray-200 pt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4" variants={itemVariants}>
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      <div className="mt-16 text-center">
          <Button
            onClick={() => {
              window.location.href = "/apply";
            }}
            size="lg"
            className="bg-indigo-600 text-white px-10 py-6 text-lg min-h-[60px] font-semibold shadow-lg border border-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
          >
            Start Your Job Search Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;