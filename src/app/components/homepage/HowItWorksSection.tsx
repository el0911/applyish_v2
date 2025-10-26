import { Upload, Sparkles, Send, BarChart } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "../ui/card";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Master Resume & Profile",
    description: "Start by uploading your comprehensive resume and filling out your professional profile once. Include all your experience, skills, education, and achievements. This becomes your master document that Applyish uses to generate customized applications."
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Find Jobs & Let AI Customize Your Application",
    description: "Browse job postings or import them from any job board. When you find a position you want to apply for, Applyish's AI analyzes the job description, identifies key requirements, and automatically generates a tailored resume and cover letter that highlights your most relevant qualifications."
  },
  {
    icon: Send,
    step: "03",
    title: "Review, Edit & Submit in Minutes",
    description: "Review the AI-generated materials, make any tweaks you want, and submit your application—all within the same platform. Applyish auto-fills repetitive form fields and saves all your application data for future use. What used to take hours now takes minutes."
  },
  {
    icon: BarChart,
    step: "04",
    title: "Track Applications & Optimize Your Strategy",
    description: "Monitor all your applications in one dashboard. See which jobs you've applied to, track response rates, set reminders for follow-ups, and get insights into what's working. Use analytics to continuously improve your application strategy and land more interviews."
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-200/50 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            How Applyish Works: From Hours to Minutes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our streamlined 4-step process transforms the painful job application experience into a fast, efficient workflow that helps you apply to more jobs with better quality applications.
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
              "from-blue-500 to-cyan-500",
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
          <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200/50">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The entire process is designed to save you time while improving the quality of your applications. No more copying and pasting. No more reformatting resumes. No more writer's block on cover letters. Just fast, effective job applications that get results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
