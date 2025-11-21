import { Upload, Sparkles, Send, BarChart, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Sign Up & Strategy Call for Your Job Application Service",
    description: "We begin with a deep dive. We review your current resume, career goals, and ideal target roles to craft a personalized, high-impact application strategy."
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Targeted Job Search by Our Specialists",
    description: "Our specialists do the heavy lifting. They hand-pick only the most relevant, high-quality jobs you&apos;re qualified for—no spam, no guesswork, just strategic targeting for your applications."
  },
  {
    icon: Send,
    step: "03",
    title: "Manual, Tailored Applications",
    description: "This is the core of our job application service. We manually apply to positions using customized, ATS-optimized resumes and cover letters, ensuring your profile gets past the automated filters and into a recruiter&apos;s hands."
  },
  {
    icon: BarChart,
    step: "04",
    title: "Interview Invites — Focus on the Result",
    description: "We manage all follow-ups and tracking, keeping your applications active and organized. This leaves you free to stop worrying about paperwork and focus solely on preparing for the interview invites that actually happen."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-50/30 to-background dark:via-emerald-950/10 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-indigo-500 to-green-600 bg-clip-text text-transparent">
            How It Works — A Smarter Job Application Service
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our process is simple, transparent, and results-driven. We&apos;ve refined the job application process into four easy steps that maximize your success.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          {/* Connection lines for larger screens */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
              <line x1="25" y1="25" x2="75" y2="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
              <line x1="75" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
              <line x1="75" y1="75" x2="25" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
            </svg>
          </div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            const gradients = [
              "from-indigo-500 to-cyan-500",
              "from-purple-500 to-pink-500",
              "from-green-500 to-emerald-500",
              "from-orange-500 to-red-500"
            ];
            const gradient = gradients[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="p-8 space-y-4 relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-background to-background/50 h-full group">
                  <div className={`absolute top-4 right-4 text-8xl font-bold bg-gradient-to-br ${gradient} bg-clip-text text-transparent opacity-5`}>
                    {step.step}
                  </div>
                  
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-xl relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10`}></div>
                  </motion.div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className={`text-sm px-3 py-1 bg-gradient-to-r ${gradient} text-white rounded-full shadow-lg`}>
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl pr-16">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/apply">
            <Button size="lg" className="text-base px-8 bg-indigo-500 text-white hover:bg-indigo-400">
              Start Applying Smarter with Applyish <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
