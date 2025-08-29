
import { Users, Target, Calendar } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Users,
      title: "1. Sign Up & Tell Us What You're Looking For",
      description: "Meet once with a team member for resume review and share job preferences, target roles, location, and experience level.",
    },
    {
      icon: Target,
      title: "2. We Search & Apply to Jobs For You",
      description: "Our team submits 30 targeted applications every day on your behalf across job boards and company websites.",
    },
    {
      icon: Calendar,
      title: "3. You Get Interview Invites",
      description: "Focus on preparing for interviews while we track and organize your applications. Most clients receive interview invitations weekly.",
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
            A simple 3-step process to land your dream job.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                <step.icon className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;