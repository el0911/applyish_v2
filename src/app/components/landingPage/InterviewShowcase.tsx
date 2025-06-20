import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Mail, Calendar, Building, MapPin, Clock } from "lucide-react";

const InterviewShowcase = () => {
  const interviews = [
    {
      company: "TechCorp",
      position: "Senior Software Engineer",
      date: "Tomorrow, 2:00 PM",
      type: "Video Interview",
      status: "Confirmed",
      logo: "🏢"
    },
    {
      company: "DataFlow Inc",
      position: "Data Scientist",
      date: "Friday, 10:00 AM",
      type: "Phone Screen",
      status: "Confirmed",
      logo: "📊"
    },
    {
      company: "DesignStudio",
      position: "UX Designer",
      date: "Next Monday, 3:30 PM",
      type: "Portfolio Review",
      status: "Scheduled",
      logo: "🎨"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
            Live Results
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Real Interview Invites from This Week
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See actual interview invitations our clients received. Your success story could be next.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {interviews.map((interview, index) => (
            <Card 
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <CardContent className="p-6">
                {/* Email header simulation */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {interview.logo}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{interview.company}</div>
                      <div className="text-sm text-slate-500">HR Department</div>
                    </div>
                  </div>
                  <Badge 
                    className={
                      interview.status === "Confirmed" 
                        ? "bg-green-100 text-green-700 border-green-200" 
                        : "bg-blue-100 text-blue-700 border-blue-200"
                    }
                  >
                    {interview.status}
                  </Badge>
                </div>

                {/* Email content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Interview Invitation: {interview.position}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We're excited to invite you for an interview for the {interview.position} position.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span className="text-slate-700 font-medium">{interview.date}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-sm">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <span className="text-slate-700">{interview.type}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Received via Applyish Pro</span>
                      <Mail className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Join hundreds of professionals getting interview invites every week
          </p>
            <div className="flex justify-center items-center space-x-4">
            <div className="flex -space-x-2">
              {[
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/65.jpg",
              "https://randomuser.me/api/portraits/women/68.jpg",
              "https://randomuser.me/api/portraits/men/12.jpg"
              ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Happy client"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              ))}
            </div>
            <span className="text-slate-600 font-medium">+1000 happy clients</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewShowcase;
