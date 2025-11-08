import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../imageWithFallback";

const benefits = [
  {
    title: "Real Human Connection and Precision",
    description: "We don’t use bots—period. Real humans on our team hand-pick and manually apply to positions on your behalf. This critical step ensures the attention to detail and personalized customization that automated tools simply cannot provide, guaranteeing your profile is perfectly positioned for success with every single submission."
  },
  {
    title: "Time Reclaimed and Energy Restored",
    description: "By handing off the entire, time-consuming job application process to our dedicated team, you instantly free up dozens of hours you would have spent on administrative tasks. This reclaimed time allows you to recover from burnout and invest in high-value activities like networking and skill development."
  },
  {
    title: "Shifted Focus to Career Growth",
    description: "You can finally concentrate on what matters most: preparing for interviews that actually happen. Our comprehensive job application service handles the tracking, customizing, and submission logistics; your only job is to focus on landing the offer."
  },
  {
    title: "A Strategic Partnership",
    description: "Applyish isn't just a service; it's a strategic partnership designed to cut through the digital noise and accelerate your career. We turn low-value application effort into high-value interview results."
  },
  {
    title: "Eliminate ATS Black Holes",
    description: "We use advanced, human-driven techniques to ensure your application sails past the Applicant Tracking System (ATS) filters. This means your qualifications actually land on a recruiter's desk, effectively eliminating the biggest barrier to entry in the modern job application process."
  },
  {
    title: "Guaranteed Professional Follow-Up",
    description: "Forget the anxiety of \"did they get my application?\" We manage all necessary follow-ups and monitor status changes meticulously. Our professional monitoring is a key feature of our job application service that keeps your candidacy active and visible."
  },
  {
    title: "Competitive Intelligence",
    description: "Our specialists gain deep insight into which job titles, companies, and application methods are generating the highest interview rates for your specific profile. We use this real-time data to constantly optimize our strategy, ensuring your applications are always one step ahead of the competition."
  },
  {
    title: "Confidence Through Organization",
    description: "We provide you with a single, clear report of all applications submitted on your behalf. This organized approach removes the chaos of tracking dozens of submissions across different platforms, giving you back control and boosting your confidence throughout your job search."
  }
];

export function BenefitsSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            The Applyish Impact: Focus on Interviews, Not Frustration
          </h2>
          <p className="text-xl text-muted-foreground">
            At Applyish, we offer human-powered job application services that take the stress, guesswork, and frustration out of your job hunt. This strategic approach fundamentally changes your job search experience and accelerates your journey to a new role:
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="border border-border p-6 rounded-lg hover:border-accent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  <h3 className="text-base">{benefit.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="relative rounded-lg border border-border overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1668608322253-9699284e90db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3b3JraW5nJTIwbGFwdG9wfGVufDF8fHx8MTc2MDYzOTUzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Job application services"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
        
        </div>
    </section>
  );
}
