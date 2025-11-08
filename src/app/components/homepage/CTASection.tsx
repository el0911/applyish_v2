import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Ready to get started?
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Stop wasting time on endless applications. Let our experts land you the interviews you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/apply">
              <Button size="lg" className="text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90">
                Book Your Free Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="#pricing">
              <Button size="lg" variant="outline" className="text-base px-8">
                See Pricing
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>No credit card required for consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Money-Back Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
