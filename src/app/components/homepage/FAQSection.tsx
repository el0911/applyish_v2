import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    question: "What is Applyish and how does it work?",
    answer: "Applyish is a human-powered job application service that applies to jobs on your behalf using tailored, ATS-optimized resumes."
  },
  {
    question: "Are the applications really done by humans?",
    answer: "Yes — every application is manually completed by our trained specialists."
  },
  {
    question: "How many job applications will Applyish send per week?",
    answer: "Between 55 and 100 per week, depending on your plan."
  },
  {
    question: "How soon can I expect interviews?",
    answer: "Most clients see results within 2–4 weeks."
  },
  {
    question: "What makes Applyish different from other job application services?",
    answer: "We’re 100% human-powered, ATS-optimized, and results-driven — not automated."
  },
  {
    question: "What is the 100% Money-Back Guarantee?",
    answer: "No interviews after one month? Get a full refund."
  },
  {
    question: "Can Applyish help with LinkedIn applications?",
    answer: "Yes — our Pro and Custom plans include LinkedIn Easy Apply."
  },
  {
    question: "Who should use Applyish?",
    answer: "Perfect for professionals, graduates, and career changers who want to save time and get real interview results."
  },
  {
    question: "How do I get started?",
    answer: "Book a 30-minute strategy call, choose your plan, and we start applying within 48 hours."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes — no contracts or commitments."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Frequently Asked Questions (FAQs) — <span className="text-indigo-500">Job Application Service</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-background"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="pr-4 text-sm">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
        
        </div>
    </section>
  );
}
