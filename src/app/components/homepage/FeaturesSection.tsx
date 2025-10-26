import { 
  FileText, 
  Mail, 
  FormInput, 
  FolderOpen, 
  TrendingUp, 
  Search,
  Clock,
  Repeat,
  CheckSquare,
  Calendar,
  Download,
  Lightbulb
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: FileText,
    title: "AI-Powered Resume Builder & Customization",
    description: "Generate ATS-optimized, tailored resumes for each job application automatically. Our AI analyzes job descriptions and restructures your experience to match employer requirements, ensuring maximum relevance and keyword optimization."
  },
  {
    icon: Mail,
    title: "Intelligent Cover Letter Generator",
    description: "Stop staring at blank pages. Applyish writes compelling, personalized cover letters that highlight why you're the perfect fit for each specific position. Each letter is unique, professional, and tailored to the company and role."
  },
  {
    icon: FormInput,
    title: "Auto-Fill Application Forms",
    description: "Never type the same information twice. Our smart form-filling technology remembers your data and automatically populates repetitive application fields across different job boards and company career pages, saving you hours of data entry."
  },
  {
    icon: FolderOpen,
    title: "Centralized Application Tracking",
    description: "Keep all your job applications organized in one place. Track which jobs you've applied to, when you applied, application status, and any follow-up actions needed. Never lose track of an opportunity or accidentally apply twice to the same position."
  },
  {
    icon: TrendingUp,
    title: "Success Analytics & Insights",
    description: "Understand what's working and what's not with detailed analytics. See your application-to-interview conversion rate, identify which types of jobs respond best, and get data-driven recommendations to improve your job search strategy."
  },
  {
    icon: Search,
    title: "Job Board Integration & Aggregation",
    description: "Find relevant job postings from multiple sources in one place. Applyish integrates with major job boards and company career sites, helping you discover opportunities faster without jumping between dozens of websites."
  },
  {
    icon: Clock,
    title: "Application Time Tracking",
    description: "See exactly how much time you're saving. Track the time spent on each application and watch as Applyish reduces your average application time from hours to minutes, giving you back weeks of your life."
  },
  {
    icon: Repeat,
    title: "Template Management & Reusability",
    description: "Create reusable templates for different types of roles, industries, or seniority levels. Quickly apply variations of your resume and cover letter that are pre-optimized for specific career paths or job categories."
  },
  {
    icon: CheckSquare,
    title: "Application Checklist & Quality Control",
    description: "Never submit an incomplete or error-filled application again. Our built-in quality control checks ensure all required fields are filled, documents are properly formatted, and your application meets professional standards before submission."
  },
  {
    icon: Calendar,
    title: "Interview Scheduling & Follow-Up Reminders",
    description: "Get automatic reminders to follow up on applications, prepare for upcoming interviews, and send thank-you notes. Stay organized and never miss an important deadline or opportunity to make a positive impression."
  },
  {
    icon: Download,
    title: "Multi-Format Document Export",
    description: "Download your customized resumes and cover letters in any format employers require—PDF, Word, plain text, or formatted for specific ATS systems. Ensure compatibility with any application system."
  },
  {
    icon: Lightbulb,
    title: "AI Job Match Recommendations",
    description: "Get smart suggestions on which jobs are the best fit for your background and career goals. Our AI analyzes job requirements against your experience and highlights opportunities where you're most likely to succeed."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6">
            Everything you need to automate your job search
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete platform designed to solve every pain point in the application process.
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
