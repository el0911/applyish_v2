import { FC } from 'react';

const ObjectionHandling: FC = () => {
  const faqs = [
    {
      question: "Will they really apply to quality jobs?",
      answer: "Yes. We show you sample applications with company names.",
    },
    {
      question: "Is this just another job scraper?",
      answer: "No. We have a video of a real team member explaining our process.",
    },
    {
      question: "Is it too expensive?",
      answer: "If you land a job 2 weeks faster, you earn $X more. We also have an ROI calculator to show you the value.",
    },
    {
      question: "This seems too good to be true.",
      answer: "We have case studies with LinkedIn screenshots of interviews to prove it.",
    },
  ];

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about Applyish.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ObjectionHandling;