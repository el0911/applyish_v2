import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "$50",
        period: "/one-time",
        description: "A one-time batch of applications to kickstart your search.",
        features: [
          "100 Applications",
          "Targeted Job Matching",
          "One-Time Service",
          "Progress Report"
        ],
        cta: "Get Started",
        popular: false
      },
      {
        name: "Pro",
        price: "$55",
        period: "/week",
        description: "A weekly stream of applications to keep the momentum going.",
        features: [
          "55 Applications Weekly",
          "50 LinkedIn Easy Apply Weekly",
          "Location & Preference Matching",
          "Weekly Progress Reports"
        ],
        cta: "Get Started",
        popular: true
      },
      {
        name: "Pro Plus",
        price: "$65",
        period: "/week",
        description: "Maximum exposure with our most aggressive application strategy.",
        features: [
          "75 Applications Weekly",
          "50 LinkedIn Easy Apply Weekly",
          "Location & Preference Matching",
          "Priority Support",
          "Weekly Progress Reports"
        ],
        cta: "Get Started",
        popular: false
      }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 border border-border rounded-full text-sm text-muted-foreground mb-4">
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Find the Right Plan for Your <span className="text-indigo-500">Job Search</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the plan that fits your job search intensity. All plans include a money-back guarantee if we can&apos;t get you an interview in a month.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`h-full ${plan.popular ? 'transform md:scale-105' : ''}`}
            >
              <Card 
                className={`p-8 space-y-6 h-full flex flex-col ${
                  plan.popular 
                    ? 'border-2 border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/10' 
                    : 'border border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-indigo-500 text-white rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    {plan.description}
                  </p>
                </div>
                
                <div className="space-y-4 pt-4 border-t border-border">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3 items-start">
                      <Check className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/apply" className="block pt-4">
                  <Button 
                    className="w-full"
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                    style={plan.popular ? {backgroundColor: 'var(--color-indigo-500)'} : {}}
                  >
                    {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center space-y-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="p-8 bg-muted/50 rounded-2xl border border-border">
            <h3 className="text-lg font-semibold mb-4">All Plans Include</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              ATS-optimized documents, unlimited edits, secure data storage, and mobile access. Cancel anytime, no questions asked. The average job seeker spends <strong>$500+ on career coaches and resume services</strong>. With Applyish, you get a dedicated team for a fraction of the cost, saving both time and money while achieving better results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
