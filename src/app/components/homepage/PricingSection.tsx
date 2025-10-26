import { Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for job seekers who want to try application automation",
    features: [
      "20 AI-generated applications per month",
      "Resume & cover letter customization",
      "ATS optimization",
      "Application tracking dashboard",
      "Email support",
      "14-day free trial"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$59",
    period: "/month",
    description: "Best for active job seekers conducting serious job searches",
    features: [
      "50 AI-generated applications per month",
      "Everything in Starter, plus:",
      "Priority support",
      "Advanced analytics & insights",
      "Resume template library",
      "Interview tracking",
      "Follow-up reminders",
      "Export to all formats"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Premium",
    price: "$99",
    period: "/month",
    description: "For career changers and those applying to many positions",
    features: [
      "Unlimited AI-generated applications",
      "Everything in Professional, plus:",
      "1-on-1 job search consultation",
      "LinkedIn profile optimization",
      "Priority AI processing",
      "Custom application strategies",
      "Dedicated success manager"
    ],
    cta: "Start Free Trial",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-50/30 to-background dark:via-indigo-950/10 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200/50 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing That Pays for Itself
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the plan that fits your job search intensity. All plans include core automation features and a 14-day free trial. No credit card required to start.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`p-8 space-y-6 h-full ${
                  plan.popular 
                    ? 'border-2 border-foreground' 
                    : 'border border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background rounded-full text-xs">
                    Most Popular
                  </div>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-xl">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                
                <Button 
                  className="w-full"
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-3 pt-4 border-t border-border">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center space-y-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
            <p className="text-lg mb-2">
              <strong>All plans include:</strong> ATS-optimized documents, unlimited edits, secure data storage, and mobile access. Cancel anytime, no questions asked.
            </p>
            <p className="text-muted-foreground">
              The average job seeker spends <strong>$500+ on career coaches and resume services</strong>. With Applyish, you get AI-powered automation for a fraction of the cost, saving both time and money while achieving better results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
