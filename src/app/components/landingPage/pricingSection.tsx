import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { CheckCircle, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

const PricingSection = () => {
  const features = [
    { icon: CheckCircle, text: "Human-powered job applications" },
    { icon: CheckCircle, text: "75 weekly applications" },
    { icon: CheckCircle, text: "Application tracking & management" },
    { icon: CheckCircle, text: "Weekly progress reports" },
    { icon: CheckCircle, text: "Cancel anytime, no contracts" }
  ];

  return (
    <section className="py-32 bg-white text-black relative overflow-hidden">
      {/* Subtle animated background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-24 w-40 h-40 bg-black/5 rounded-full blur-2xl animate-fadeIn" />
        <div className="absolute bottom-24 left-24 w-32 h-32 bg-black/5 rounded-full blur-2xl animate-fadeIn delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="border border-black/10 bg-white text-black text-lg px-6 py-2 shadow-sm animate-fadeIn">
            <Sparkles className="w-5 h-5 mr-2" />
            Simple, Transparent Pricing
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Pay Weekly, No Commitment
          </h2>
          <p className="text-xl lg:text-2xl text-black/60 max-w-3xl mx-auto font-light leading-relaxed">
            Transparent pricing that scales with your success. Cancel anytime, no questions asked.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white border border-black/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden animate-fadeIn">
            <CardContent className="relative p-12 lg:p-16 text-center">
              <div className="mb-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">Job Application Service</h3>
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-7xl lg:text-8xl font-bold text-black">$18</span>
                  <span className="text-3xl text-black/60">/ week</span>
                </div>
                <p className="text-xl text-black/60 font-light">
                  Everything you need to land your dream job
                </p>
              </div>

              <div className="space-y-6 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 text-left group">
                    <div className="flex-shrink-0 w-8 h-8 border border-black/10 rounded-full flex items-center justify-center group-hover:bg-black/5 transition-colors">
                      <feature.icon className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-black text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button
                style={{
                  position: 'relative',
                  display: 'ruby',
                  height: 'auto'
                }}
                variant="outline"
                onClick={() => {
                  window.location.href = "https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105";
                }}
                className="border-black dark:border-white text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 px-10 py-6 text-lg font-medium group hover:text-black dark:hover:text-white"
              >
                Start Your Success Journey
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>



              <div className="mt-10 p-8 border border-black/10 rounded-2xl bg-black/5 backdrop-blur-sm animate-fadeIn">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-black" />
                  <div className="font-bold text-2xl text-black">
                    100% Interview Guarantee
                  </div>
                </div>
                <p className="text-black/70 leading-relaxed text-lg">
                  {`If you don't receive any interview invitations within your first month of service, 
                  we'll refund 100% of your fees. We're that confident in our ability to get you results.`}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-black/40">
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
      {/* Subtle fadeIn animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: none;}
        }
        .animate-fadeIn {
          animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
};

export default PricingSection;
