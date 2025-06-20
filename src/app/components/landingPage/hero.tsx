import { FC } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, CheckCircle, Sparkles, Zap, Check, Calendar } from "lucide-react";
import vaImg from "../../va.png";

const HeroSection: FC = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white min-h-screen flex items-center">
            {/* Background animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-24 -left-24 w-[32rem] h-[32rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* LEFT: Text Content */}
                    <div className="space-y-10 animate-fade-in">
                        <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-400/30 hover:bg-blue-500/30 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 mr-2" />
                            100% Interview Guarantee
                        </Badge>

                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                            Land Your{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent block">
                                Dream Job
                            </span>
                        </h1>

                        <p className="text-lg lg:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light">
                            Stop wasting time on endless applications. We handle the tedious work while you focus on what matters — acing your interviews.
                        </p>

                        {/* Features List */}
                        <div className="space-y-5">
                            {[
                                "100% Interview Guarantee or full refund",
                                "30+ targeted applications submitted daily",
                                "Cancel anytime, no long-term commitment"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 text-green-400 group">
                                    <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center group-hover:bg-green-400/30 transition-colors">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <span className="text-lg font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                onClick={() => {
                                    window.location.href = "https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105"; // Redirect to application page
                                }}
                                size="lg" className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 text-white px-10 py-6 text-lg font-semibold group transition-all duration-500 hover:scale-105 shadow-xl">
                                Start Your Journey
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button onClick={
                                    () => {
                                        window.location.href = "https://calendly.com/el-applyish/30min"; // Redirect to booking page
                                    }
                                }  variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-10 py-6 text-lg font-medium group backdrop-blur-sm">
                                <Calendar className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                                Book Demo
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT: Job Application Visual */}
                    <div className="relative animate-fade-in delay-300">
                        {/* Main Card */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-slate-700/50">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-white text-xl font-semibold">{`Job applications being submitted by VA's`}</h3>
                                <div className="bg-green-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                            </div>

                            {/* VA Illustration */}
                            <div className="flex items-center justify-center mb-8 relative">
                                <img
                                    src={vaImg.src}
                                    alt="Virtual Assistant"
                                    className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white/20"
                                />
                            </div>

                            {/* Status Cards */}
                            <div className="space-y-4">
                                {/* Google - Resume Sent */}
                                <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 flex items-center justify-between hover:bg-slate-700/70 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                            <span className="text-blue-600 font-bold text-sm">S</span>
                                        </div>
                                        <span className="text-white font-medium flex items-center gap-2">

                                            Resume sent
                                        </span>
                                    </div>
                                    <span className="text-slate-300 flex font-semibold items-center gap-2">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                            alt="Google Logo"
                                            className="w-5 h-5"
                                        />Google</span>
                                </div>

                                {/* Stripe - Interview Scheduled */}
                                <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 flex items-center justify-between hover:bg-slate-700/70 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                                            <Zap className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-white font-medium">Interview scheduled</span>
                                    </div>
                                    <span className="text-slate-300 flex font-semibold items-center gap-2">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                                            alt="Facebook Logo"
                                            className="w-5 h-5"
                                        />
                                        Facebook
                                    </span>
                                </div>

                                {/* Cisco - Offer Received */}
                                <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 flex items-center justify-between hover:bg-slate-700/70 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-sm">
                                            <Check className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-white font-medium">Offer received</span>
                                    </div>
                                    <div className="flex items-center space-x-3">

                                        <span className="text-slate-300 flex font-semibold items-center gap-2">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                                                alt="Amazon Logo"
                                                className="w-5 h-5"
                                            />
                                            Amazon
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -top-10 -left-10 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-xl animate-pulse">
                            <div className="text-green-400 text-sm font-medium">✓ Interview Scheduled</div>
                            <div className="text-white text-xs">Google • Software Engineer</div>
                        </div>

                        <div className="absolute -bottom-10 -right-10 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-xl animate-pulse delay-1000">
                            <div className="text-blue-400 text-sm font-medium">📈 2+ interviews/week</div>
                            <div className="text-white text-xs">Average success rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;