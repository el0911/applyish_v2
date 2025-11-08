import {  Zap, Brain, Shield, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";

export function SolutionSection() {
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
            Why Choose Applyish? The Superior Job Application Service
          </h2>
          <p className="text-xl text-muted-foreground">
            Our experts manually manage the entire job application process for you. We use tailored resumes and ATS-optimized strategies designed specifically to boost your interview chances. When you choose our job application service, you get:
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { icon: Brain, title: "Real Human Expertise", description: "Real professionals apply to jobs on your behalf, ensuring accuracy, proper formatting, and customized submissions every time." },
            { icon: Shield, title: "The Results Guarantee", description: "100% Money-Back Guarantee – if we don't get you interviews, you don't pay. That's how confident we are in our job application service." },
            { icon: Zap, title: "Freedom from Fatigue", description: "Say goodbye to job search burnout and rejection fatigue. We handle the repetitive work so you can focus on preparing for success." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mx-auto">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/apply">
            <Button size="lg" className="text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90">
              Start your job application journey with Applyish today! <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
