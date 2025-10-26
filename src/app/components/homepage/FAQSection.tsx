import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    question: "How does Applyish save me so much time on job applications?",
    answer: "Applyish automates the most time-consuming parts of applying for jobs. Our AI analyzes job descriptions and automatically generates tailored resumes and cover letters in seconds. We also auto-fill repetitive form fields across different application systems, eliminating hours of data entry. What typically takes 2-3 hours per application now takes just 5-10 minutes."
  },
  {
    question: "Will employers know I used AI to write my application materials?",
    answer: "No. Our AI generates unique, personalized content based on your real experience and the specific job requirements. The output reads naturally and professionally, just like you wrote it yourself. You maintain full control to review and edit everything before submission. Think of it as an intelligent writing assistant that helps you present your qualifications more effectively."
  },
  {
    question: "Does Applyish work with ATS (Applicant Tracking Systems)?",
    answer: "Yes! We specifically optimize all generated resumes and cover letters to pass through ATS filters. We use proper formatting, include relevant keywords from job descriptions, and structure documents in ways that ATS systems can easily parse. This dramatically increases your chances of getting past automated screening and seen by human recruiters."
  },
  {
    question: "Can I customize the AI-generated resumes and cover letters?",
    answer: "Absolutely. While our AI creates high-quality first drafts, you have complete control to edit, modify, or rewrite any content. Many users make minor tweaks, while others use it as a strong starting point. The goal is to save you time while maintaining the personal touch that makes your application authentic."
  },
  {
    question: "What types of jobs does Applyish work for?",
    answer: "Applyish works for virtually any industry, role level, or job type. Whether you're applying for entry-level positions, mid-career roles, executive positions, remote jobs, or freelance gigs, our AI can tailor your application materials appropriately. We support tech, finance, healthcare, marketing, sales, education, and hundreds of other fields."
  },
  {
    question: "How many job applications can I submit with Applyish?",
    answer: "The number of applications depends on your plan. Our standard plans allow 20-50 applications per month, while premium plans offer unlimited applications. Most users find they need far fewer applications to land interviews because of the improved quality and ATS optimization, but higher volume plans are available for aggressive job searches."
  },
  {
    question: "Do I need to provide my own resume first?",
    answer: "Yes. You'll start by uploading a comprehensive master resume that includes all your experience, skills, education, and achievements. Applyish then uses this as a foundation to create customized versions for each job application. The better your master resume, the better the AI can tailor your applications."
  },
  {
    question: "How long does it take to learn how to use Applyish?",
    answer: "Most users are up and running in under 15 minutes. You'll upload your resume, fill out your profile, and then you can start applying to jobs immediately. The interface is intuitive and designed to be straightforward. We also provide tutorial videos and guides to help you get the most out of all features."
  },
  {
    question: "Can Applyish actually apply to jobs for me automatically?",
    answer: "Applyish generates all the materials and fills forms, but you always have final review and approval before submission. We believe you should maintain control over your job applications and have the opportunity to ensure everything is accurate. However, the process is streamlined so that review and submission take just a few minutes."
  },
  {
    question: "What's the difference between Applyish and just using ChatGPT?",
    answer: "While ChatGPT is a general AI tool, Applyish is specifically built for job applications. We integrate with job boards, automatically extract job requirements, maintain your professional history in a structured database, track all your applications, optimize for ATS systems, and provide analytics. It's a complete job search platform, not just a chatbot."
  },
  {
    question: "Is my personal information secure with Applyish?",
    answer: "Yes. We take data security seriously and use enterprise-grade encryption to protect your personal information, resumes, and application data. We never share or sell your information to third parties. Your data is stored securely and you maintain full control over what information is used in applications."
  },
  {
    question: "What if I'm not getting results with Applyish?",
    answer: "We offer a 14-day money-back guarantee. If you're not satisfied with the results, contact our support team. We also provide analytics to help identify what might not be working in your job search strategy. Sometimes adjustments to your master resume, target roles, or application approach can significantly improve results."
  },
  {
    question: "Can Applyish help with interview preparation too?",
    answer: "While our primary focus is on application automation and tracking, we do provide interview scheduling reminders and track which applications led to interviews. We're constantly adding features, and interview preparation tools are on our roadmap based on user feedback."
  },
  {
    question: "Do I need technical skills to use Applyish?",
    answer: "Not at all. If you can use a job board website or send an email, you can use Applyish. The platform is designed to be user-friendly for everyone, regardless of technical background. Everything is point-and-click with clear instructions."
  },
  {
    question: "How much does Applyish cost compared to the time I'll save?",
    answer: "If you value your time at even minimum wage, Applyish pays for itself with just 2-3 applications. The average user saves 15+ hours per week. Beyond time savings, users report landing jobs faster and often with better compensation, making the ROI substantial. Plus we offer a free trial so you can test it risk-free."
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
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about how Applyish works.
          </p>
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
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@applyish.com" 
            className="inline-flex items-center gap-2 hover:underline"
          >
            Contact support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
