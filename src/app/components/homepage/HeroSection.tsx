import { Button } from "../ui/button";
import { CheckCircle2, Play, Sparkles, Zap, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// 
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 -z-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200/50 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Stop Wasting Time on Job Applications</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text leading-tight">
              Tired of Spending Hours on Job Applications That Go Nowhere?
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Job searching is exhausting. You're spending 2-3 hours per application, customizing resumes, writing cover letters, and filling out repetitive forms—only to hear nothing back. Applyish automates the tedious parts of job applications so you can apply to more opportunities in less time and actually get interviews.
            </p>
            
            <div className="space-y-3">
              {[
                { icon: Zap, text: "Automatically fill out repetitive application forms" },
                { icon: Sparkles, text: "Generate tailored resumes and cover letters in seconds" },
                { icon: TrendingUp, text: "Apply to 10x more jobs without the burnout" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-105">
                Start Applying Smarter - Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:bg-accent/50 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
            
            <p className="text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> No credit card required 
              <span className="text-muted-foreground/50">•</span> 14-day free trial 
              <span className="text-muted-foreground/50">•</span> Cancel anytime
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-gradient-to-br from-background to-muted">
              {/* <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758411898049-4de9588be514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwMzExMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Applyish Dashboard"
                className="w-full h-full object-cover"
              /> */}
              {/* Decorative floating elements */}
              <motion.div 
                className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs">5 New Matches</span>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative gradient orbs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
