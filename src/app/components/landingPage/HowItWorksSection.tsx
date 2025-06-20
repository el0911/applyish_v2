
import { Card, CardContent } from "@/app/components/ui/card";
import { Users, Target, Calendar, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Consultation",
      description: "Meet once with a team member for resume review and share job preferences, target roles, location, and experience level.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "We Apply For You",
      description: "Our team submits 30 targeted applications every day on your behalf across job boards and company websites.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Get Interview Invites",
      description: "Focus on preparing for interviews while we track and organize your applications. Most clients receive interview invitations weekly.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We handle the tedious application process while you prepare for interviews. 
            Real people apply to jobs on your behalf, not just another job scraper.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-xl transition-all duration-500 hover:scale-105 group h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;