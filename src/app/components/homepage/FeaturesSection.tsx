import { 
  FileText, 
  Mail, 
  FolderOpen, 
  TrendingUp, 
  Search,
  Clock,
  Repeat,
  CheckSquare,
  Calendar,
  Lightbulb,
  Play,
  Frown
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Clock,
    title: "Hours Saved Weekly",
    description: "Eliminate the 10+ hours you currently spend on repetitive application forms and data entry. Imagine having that time back to spend with family, pursuing hobbies, or focused on high-value networking activities instead of administrative paperwork."
  },
  {
    icon: FileText,
    title: "Manual, Error-Free Applications",
    description: "Real professionals apply on your behalf, guaranteeing accuracy and proper submission every time. We ensure all required fields are correctly completed and attachments are uploaded perfectly, removing the risk of immediate disqualification from simple errors."
  },
  {
    icon: Mail,
    title: "ATS Optimization",
    description: "Every application uses an ATS-optimized resume and tailored documents to bypass automated screening filters. We ensure your keywords match the job description, giving your qualifications a clear path past the algorithm and into a human recruiter's inbox."
  },
  {
    icon: FolderOpen,
    title: "Complete Application Management",
    description: "We handle the entire pipeline—from submission to follow-up—freeing up your schedule. You don't have to worry about tracking countless logins, passwords, or application statuses; we manage the whole system for you."
  },
  {
    icon: Search,
    title: "Targeted Submissions",
    description: "Every job is hand-picked by a specialist to precisely match your goals; no more \"spray-and-pray\" applications. We prioritize quality over quantity, ensuring you apply only to roles where you are genuinely competitive and interested."
  },
  {
    icon: TrendingUp,
    title: "Access to the Hidden Market",
    description: "We find and apply to roles on company career pages and niche sites, accessing jobs not found on major boards. This strategic approach opens doors to the crucial 60-70% of the job market where competition is lower and quality roles are often found."
  },
  {
    icon: Calendar,
    title: "Personalized Strategy Call",
    description: "Start with a 30-minute consultation to define your career goals and create a custom application approach. This ensures our entire application effort is aligned with your long-term vision, not just securing the next job."
  },
  {
    icon: CheckSquare,
    title: "Boosted Response Rates",
    description: "Our expert approach significantly increases your chances of hearing back from employers. By combining manual application rigor with ATS expertise, we ensure your profile stands out in a crowded applicant pool."
  },
  {
    icon: Lightbulb,
    title: "The Results Guarantee",
    description: "Our 100% Money-Back Guarantee means if we don't get you interviews, you don't pay. This removes all risk and demonstrates our complete confidence in the effectiveness of our job application service."
  },
  {
    icon: Frown,
    title: "Skip the Application Anxiety",
    description: "Eliminate the stress and worry of managing multiple deadlines and tracking systems. We bring order and professionalism to a chaotic process, allowing you to relax and conserve mental energy."
  },
  {
    icon: Play,
    title: "Interview Focus",
    description: "You stop focusing on applying and start focusing solely on preparing for the interviews we secure for you. Your valuable time shifts from data entry to practicing your pitch and negotiating your next offer."
  },
  {
    icon: Repeat,
    title: "Beat Job Search Burnout",
    description: "End the cycle of endless rejection and administrative fatigue by handing the hardest part of the search over to the experts. You regain your motivation and enthusiasm, knowing that the application work is being handled efficiently and professionally."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6">
            Maximize Your Interviews: The Benefits of a Professional Job Application Service
          </h2>
          <p className="text-xl text-muted-foreground">
            We’re not another automated tool. We’re your dedicated, professional job application team committed to securing interview invites for you. Unlike automated job platforms, Applyish offers a human-centered job application service that ensures your resume is seen by recruiters, not filtered out by algorithms.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-6xl mx-auto border border-border">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-background p-8 hover:bg-accent/10 transition-colors"
              >
                <Icon className="w-6 h-6 mb-4" />
                <h3 className="text-base mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
