import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { CheckCircle, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

const PricingSection = () => {
  const features = [
    { icon: CheckCircle, text: "Human-powered job applications" },
    { icon: CheckCircle, text: "150+ weekly applications" },
    { icon: CheckCircle, text: "Application tracking & management" },
    { icon: CheckCircle, text: "Weekly progress reports" },
    { icon: CheckCircle, text: "Cancel anytime, no contracts" }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-400/30 mb-6 text-lg px-6 py-2">
            <Sparkles className="w-5 h-5 mr-2" />
            Simple, Transparent Pricing
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Pay Weekly, No Commitment
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Transparent pricing that scales with your success. Cancel anytime, no questions asked.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all duration-700 hover:scale-105 relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50"></div>
            
            <CardContent className="relative p-12 lg:p-16 text-center">
              <div className="mb-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">Job Application Service</h3>
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">$55</span>
                  <span className="text-3xl text-slate-300">/ week</span>
                </div>
                <p className="text-xl text-slate-300 font-light">
                  Everything you need to land your dream job
                </p>
              </div>

              <div className="space-y-6 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 text-left group">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center group-hover:bg-green-400/30 transition-colors">
                      <feature.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-slate-200 text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                onClick={()=>{
                  window.location.href = "https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105"; // Redirect to application page
                }}
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white border-0 py-6 text-xl font-semibold group transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
              >
                Start Your Success Journey
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="mt-10 p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-green-300" />
                  <div className="font-bold text-2xl text-green-300">
                    100% Interview Guarantee
                  </div>
                </div>
                <p className="text-green-200 leading-relaxed text-lg">
                  If you don't receive any interview invitations within your first month of service, 
                  we'll refund 100% of your fees. We're that confident in our ability to get you results.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>No hidden fees</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
