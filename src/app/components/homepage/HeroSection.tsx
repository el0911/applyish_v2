import { CheckCircle2, Play, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../imageWithFallback";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 border border-border rounded-full text-sm text-muted-foreground mb-6">
                Job Application Automation
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
                The Human-Powered Job Application Service That Gets You <span className="text-indigo-500">Interviews</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Applyish removes the stress of job hunting. Real humans hand-pick and apply to jobs for you—so you can focus on landing interviews that matter.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Link href="/apply">
                <Button size="lg" className="text-base px-8 bg-indigo-500 text-white hover:bg-indigo-400">
                  Free consultation calls <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="text-base px-8">
                  <Play className="w-4 h-4 mr-2" />
                  See how it works
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Money back guarantee if we can&apos;t get you an interview in a month</span>
              </div>
            </motion.div>
          </div>
          
          {/* Dashboard Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative rounded-lg border border-border overflow-hidden bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkYXNoYm9hcmQlMjBtb2Rlcm58ZW58MXx8fHwxNzYwNzEzMjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Job application services"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Applications sent</div>
            </div>
            <div className="text-center border-l border-r border-border">
              <div className="text-3xl md:text-4xl mb-1">78%</div>
              <div className="text-sm text-muted-foreground">Success rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-1">90%</div>
              <div className="text-sm text-muted-foreground">Time saved</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
