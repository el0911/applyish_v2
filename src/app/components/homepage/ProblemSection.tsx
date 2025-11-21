import { Clock, FileX, TrendingDown, Frown, AlertCircle, Target, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";

const problems = [
  {
    icon: Clock,
    title: "Hours Wasted on Every Application",
    description: "The average job seeker spends 2–3 hours per application, a staggering amount of time spent on simple data entry and reformatting documents. Multiply that by dozens of jobs, and you’ve lost weeks to repetitive, soul-crushing tasks that lead nowhere. This time could be better spent networking, practicing interviews, or upskilling."
  },
  {
    icon: FileX,
    title: "Applications Disappearing Into the Void (The ATS Filter)",
    description: "Over 75% of applications are auto-rejected by ATS systems (Applicant Tracking Software) before a human even looks at them. These algorithms look for perfect keyword matches and specific formatting, essentially creating a digital gatekeeper that screens out qualified candidates just because their resume wasn't perfectly formatted for the machine. Your excellent experience never gets a chance to shine."
  },
  {
    icon: TrendingDown,
    title: "Low Response Rates Killing Motivation",
    description: "After submitting 100 applications, hearing back from only a tiny fraction (often less than 5%) of employers is crushing to your morale. The silence after all that effort feels like constant, systemic rejection. This low return on your massive investment of time makes it nearly impossible to maintain the necessary focus and optimism to land a great role."
  },
  {
    icon: AlertCircle,
    title: "The Risk of Critical Mistakes",
    description: "When you rush through dozens of online forms, it's easy to make a small error—a typo, an incorrect date, or a missed required field. One small mistake on a key application can immediately disqualify you from consideration, regardless of your qualifications. This hidden risk turns every application into a high-stakes, stressful editing job."
  },
  {
    icon: Target,
    title: "Missing Out on \"Hidden\" Jobs",
    description: "Relying solely on major job boards means you're competing with thousands of other candidates for the same listings. The best, most desirable roles are often filled through direct sourcing, company career pages, or professional networks—they are never publicly posted on aggregators. Without dedicated effort, you miss the crucial 60-70% of the job market that is often referred to as the \"hidden job market.\""
  },
  {
    icon: Frown,
    title: "Job Search Burnout Is Real",
    description: "The cycle of constant rejection, endless forms, and zero constructive feedback creates severe fatigue. You’re forced to manage job tracking spreadsheets, customize cover letters repeatedly, and deal with technical glitches on corporate career sites. You’re completely drained long before you even secure the next critical interview. Job search burnout means you're operating below your best when it matters most."
  }
];

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            The Job Application Process Is Broken (And It’s Costing You <span className="text-indigo-500">Time, Money & Opportunities</span>)
          </h2>
          <p className="text-xl text-muted-foreground">
            That’s where Applyish, one of the most effective job application services, comes in. We offer a comprehensive job application service to fix what’s broken and help you finally get real interview invites, not automated rejections.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-6xl mx-auto border border-border">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background p-8 hover:bg-accent/10 transition-colors"
              >
                <Icon className="w-6 h-6 text-indigo-500 mb-4" />
                <h3 className="text-lg mb-3">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-muted-foreground mb-4">
            Ready to Stop Applying Alone? Let real professionals handle the applications while you focus on landing the job.
          </p>
          <Link href="/apply">
            <Button size="lg" className="text-base px-8 bg-indigo-500 text-white hover:bg-indigo-400">
              Get Started with Applyish Today <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
