import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../imageWithFallback";

const benefits = [
  {
    title: "Save 90% of Your Application Time",
    description: "Transform 2-3 hours per application into 5-10 minutes. That's 15+ hours saved per week, giving you time for interview prep, skill development, or simply reducing burnout."
  },
  {
    title: "Apply to 10x More Jobs",
    description: "With the time you save, apply to significantly more positions. More applications mean more interviews, which means better chances of landing your ideal role with competitive offers."
  },
  {
    title: "Increase Your Interview Callback Rate",
    description: "Tailored, ATS-optimized applications perform 3x better than generic resumes. Get past automated filters and get your application in front of real hiring managers."
  },
  {
    title: "Reduce Job Search Stress & Burnout",
    description: "Eliminate the mental exhaustion of repetitive tasks. Spend less time on busy work and more time on high-value activities like networking and preparing for interviews."
  },
  {
    title: "Never Miss Great Opportunities Again",
    description: "Apply quickly to time-sensitive job postings before they're filled. Many great positions get hundreds of applications within 48 hours—be one of the first to apply."
  },
  {
    title: "Stay Organized & Professional",
    description: "Track every application, follow-up, and interview in one place. Never wonder if you've already applied to a company or forget an important follow-up deadline."
  },
  {
    title: "Make Data-Driven Decisions",
    description: "Stop guessing what works. Use real analytics to understand your success rate, optimize your strategy, and focus on opportunities that actually lead to interviews."
  },
  {
    title: "Maintain Quality at Scale",
    description: "Don't sacrifice quality for quantity. Every application is customized and professional, even when you're applying to dozens of jobs per week."
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
            The real impact
          </h2>
          <p className="text-xl text-muted-foreground">
            When you eliminate repetitive tasks, you unlock time and opportunities that directly translate to better job offers.
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
              alt="Professional working efficiently"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="p-8 bg-accent text-accent-foreground rounded-lg">
            <p className="text-lg mb-4">
              The average Applyish user goes from submitting <strong>5-10 applications per week</strong> to <strong>30-50 applications per week</strong>, while maintaining or improving application quality.
            </p>
            <p className="text-base opacity-90">
              This dramatic increase leads to 3-5x more interview invitations and ultimately faster job placement with better compensation.
            </p>
          </div>
          <p className="text-center text-muted-foreground">
            More high-quality applications = More interviews = Better job offers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
