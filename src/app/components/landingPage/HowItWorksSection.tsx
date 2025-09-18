

import { Button } from "../ui/button";
import { ArrowRight, Users, Target, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Users,
      title: "1. Sign Up & Tell Us What You're Looking For",
      description: "One 30-minute call to stop your resume from getting auto-rejected (we'll fix what's killing your response rate)",
    },
    {
      icon: Target,
      title: "2. We Search & Apply to Jobs For You",
      description: "No more spray-and-pray applications that go nowhere – we hand-pick roles where you actually have a shot",
    },
    {
      icon: Calendar,
      title: "3. You Get Interview Invites",
      description: "Skip the application anxiety – we handle the follow-ups while you prep for interviews that actually happen",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple 3-step process to land your dream job.
          </p>
        </div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="text-center" variants={itemVariants}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
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
    </section>
  );
};

export default HowItWorksSection;