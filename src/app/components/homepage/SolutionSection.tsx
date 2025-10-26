import {  Zap, Brain, Shield } from "lucide-react";
import { motion } from "motion/react";

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
            One platform. Complete automation.
          </h2>
          <p className="text-xl text-muted-foreground">
            From job discovery to application submission, we handle everything so you can focus on preparing for interviews.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { icon: Zap, title: "Lightning Fast", description: "What used to take 2-3 hours now takes 5-10 minutes. Apply to 10x more jobs without sacrificing quality." },
            { icon: Brain, title: "Smart Customization", description: "Every application is tailored to match specific job requirements, keywords, and company culture." },
            { icon: Shield, title: "ATS Optimized", description: "Beat applicant tracking systems with proper formatting and keyword optimization." }
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
      </div>
    </section>
  );
}
