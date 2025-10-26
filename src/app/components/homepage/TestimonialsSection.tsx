import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Software Engineer",
    company: "Tech Startup",
    content: "I was spending 3+ hours on each application and barely getting any responses. With Applyish, I went from 10 applications a month to 50+ applications while actually improving my callback rate. Landed my dream job in just 6 weeks.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Manager",
    company: "Fortune 500 Company",
    content: "The AI-generated cover letters are surprisingly good. I barely have to edit them. What used to take me an hour now takes 10 minutes. I've gotten more interviews in the last month than I did in the previous 6 months combined.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Designer",
    company: "Design Agency",
    content: "Job searching was killing my mental health. The constant rejection and time wasted on applications that went nowhere was exhausting. Applyish gave me back my evenings and weekends. Plus, the analytics helped me figure out which types of roles to focus on.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Data Analyst",
    company: "Healthcare Company",
    content: "I was skeptical about AI writing my applications, but the quality is excellent. The resume customization actually helped me highlight relevant experience I was underselling. Got 3 job offers within 2 months of using Applyish.",
    rating: 5
  },
  {
    name: "Jessica Wu",
    role: "Sales Executive",
    company: "SaaS Company",
    content: "The application tracking alone is worth it. I used to lose track of where I'd applied and would sometimes apply to the same company twice. Now everything is organized, and I never miss a follow-up. Plus the time savings are incredible.",
    rating: 5
  },
  {
    name: "James Anderson",
    role: "Financial Analyst",
    company: "Investment Firm",
    content: "Best investment I made in my job search. The subscription paid for itself in the first week by saving me 10+ hours. The ATS optimization features really work—my callback rate tripled compared to my old applications.",
    rating: 5
  }
];

export function TestimonialsSection() {
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
            What our users say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from job seekers who automated their applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-6xl mx-auto border border-border mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-background p-8 hover:bg-accent/10 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-4xl mx-auto border border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { value: "50,000+", label: "Applications Submitted" },
            { value: "10,000+", label: "Users Landed Jobs" },
            { value: "3x", label: "Higher Callback Rate" },
            { value: "90%", label: "Time Saved" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-background p-8 text-center"
            >
              <div className="text-3xl mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
