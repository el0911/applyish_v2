
import { Users, Target, Calendar, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Target,
      number: "30+",
      label: "Daily Applications",
      description: "Targeted applications submitted on your behalf",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      number: "2+",
      label: "Weekly Interviews",
      description: "Average interview invitations per client",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Success Stories",
      description: "Professionals who landed their dream jobs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      number: "94%",
      label: "Success Rate",
      description: "Clients who get interviews within 30 days",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Proven Results
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Real metrics from real job seekers who transformed their careers with our service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 border border-slate-100 overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-6xl lg:text-7xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:bg-clip-text transition-all duration-500" style={{ backgroundImage: `linear-gradient(to bottom right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})` }}>
                  {stat.number}
                </div>
                
                <div className="text-xl font-semibold text-slate-800 mb-3">
                  {stat.label}
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;