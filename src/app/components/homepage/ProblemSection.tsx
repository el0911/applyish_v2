import { Clock, FileX, TrendingDown, Frown, AlertCircle, Target } from "lucide-react";
import { motion } from "motion/react";

const problems = [
  {
    icon: Clock,
    title: "Hours Wasted on Each Application",
    description: "The average job seeker spends 2-3 hours per application. With dozens of applications needed to land one interview, that's weeks of your life spent on repetitive data entry, resume formatting, and cover letter customization."
  },
  {
    icon: FileX,
    title: "Applications Disappearing Into the Void",
    description: "You click submit and then... nothing. 75% of job applications never get seen by a human. You're spending hours crafting the perfect application only to be filtered out by ATS systems before anyone reads your qualifications."
  },
  {
    icon: TrendingDown,
    title: "Low Response Rates Killing Your Motivation",
    description: "After sending out 50, 100, or even 200 applications, you're lucky to hear back from 5% of employers. The constant rejection and silence is demoralizing and makes it harder to stay motivated in your job search."
  },
  {
    icon: Frown,
    title: "Job Search Burnout is Real",
    description: "Between customizing resumes, writing cover letters, filling out forms, and tracking applications, job searching becomes a full-time job itself. The mental exhaustion and burnout make it even harder to perform well in the interviews you do get."
  },
  {
    icon: AlertCircle,
    title: "Missing Out on Great Opportunities",
    description: "By the time you finish applying to one job, three more perfect opportunities have come and gone. You can't keep up with the volume of postings, and great jobs get filled before you can even submit your application."
  },
  {
    icon: Target,
    title: "Can't Track What's Working",
    description: "You're applying everywhere but have no idea which strategies work. Without proper tracking and analytics, you can't optimize your approach, resulting in wasted effort on the wrong types of applications or companies."
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
            The job application process is broken
          </h2>
          <p className="text-xl text-muted-foreground">
            Job seekers waste hundreds of hours on repetitive tasks that AI can do better.
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
                <Icon className="w-6 h-6 text-foreground mb-4" />
                <h3 className="text-lg mb-3">{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
