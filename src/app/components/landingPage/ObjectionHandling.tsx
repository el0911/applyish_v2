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
      answer: "No more spray-and-pray applications that lead nowhere. We focus on quality over quantity, working with you to define your ideal role so we can target jobs that are actually a good fit.",
    },
    {
      question: "How do you handle my personal information?",
      answer: "Your privacy is our top priority. We use secure systems to store your information and never share it with third parties without your consent. You have full control over your data.",
    },
    {
      question: "What if I want to apply for a job myself?",
      answer: "See exactly where your applications stand so you're not left wondering if you've been ghosted. We provide a real-time dashboard of all submitted applications, and you can pause our service any time.",
    },
    {
      question: "How do you tailor my resume for each job?",
      answer: "Finally, someone who knows what actually gets past those ATS filters. Our specialists analyze job descriptions to highlight the skills and experience that are most relevant to the role, significantly improving your response rate.",
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