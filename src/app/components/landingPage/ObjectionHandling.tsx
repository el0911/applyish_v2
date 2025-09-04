import { FC } from 'react';
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ObjectionHandling: FC = () => {
  const faqs = [
    {
      question: "How do I know you're not just another AI resume blaster?",
      answer: "We believe in a human-centric approach. You'll be assigned a dedicated job application specialist who will work with you to understand your career goals. We don't use AI to spam applications. We hand-pick jobs and tailor your resume for each one.",
    },
    {
      question: "What kind of jobs do you apply for?",
      answer: "We focus on quality over quantity. During your initial consultation, we'll work with you to define your ideal role, industry, and location. We then target jobs that match your criteria, from startups to Fortune 500 companies.",
    },
    {
      question: "How do you handle my personal information?",
      answer: "Your privacy is our top priority. We use secure systems to store your information and never share it with third parties without your consent. You have full control over your data.",
    },
    {
      question: "What if I want to apply for a job myself?",
      answer: "No problem! We provide you with a real-time dashboard of all the applications we've submitted on your behalf. You can pause our service at any time to apply for jobs on your own.",
    },
    {
      question: "How do you tailor my resume for each job?",
      answer: "Our job application specialists are expert resume writers. They will analyze the job description and highlight the skills and experience that are most relevant to the role. We can also work with you to create multiple versions of your resume for different types of positions.",
    },
    {
      question: "What's the difference between the plans?",
      answer: "Our plans are designed to meet the needs of different job seekers. The Basic plan is great for getting your foot in the door, while the Premium and Executive plans offer more personalized support, including LinkedIn optimization and interview preparation.",
    },
  ];

  return (
    <div className="bg-white py-20 sm:py-28 text-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about Applyish.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold leading-7">{faq.question}</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</p>
            </div>
          ))}
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

export default ObjectionHandling;