import { FC } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, CheckCircle, Sparkles, Zap, Check, Calendar } from "lucide-react";
import vaImg from "../../va.png";
import logoImg from "../../logo.png"; // <-- Replace with your logo path

const HeroSection: FC = () => {
    return (
        <div className="relative bg-white text-black min-h-screen h-screen flex flex-col">
            {/* Logo at the top */}
            <div className="w-full flex justify-start items-center px-8 py-6">
                <img src={logoImg.src} alt="Logo" className="h-12 w-auto" />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center">
                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* LEFT: Text Content */}
                        <div className="space-y-10">
                            <Badge className="bg-black/10 text-black border border-black/20">
                                <Sparkles className="w-4 h-4 mr-2" />
                                100% Interview Guarantee
                            </Badge>

                            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                                Land Your{" "}
                                <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent block">
                                    Dream Job
                                </span>
                            </h1>

                            <p className="text-lg lg:text-2xl text-gray-700 leading-relaxed max-w-2xl font-light">
                                Stop wasting time on endless applications. We handle the tedious work while you focus on what matters — acing your interviews.
                            </p>

                            {/* Features List */}
                            <div className="space-y-5">
                                {[
                                    "100% Interview Guarantee or full refund",
                                    "30+ targeted applications submitted daily",
                                    "Cancel anytime, no long-term commitment"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-4 text-black group">
                                        <div className="w-6 h-6 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
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
                                        window.location.href = "https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105";
                                    }}
                                    size="lg"
                                    className="bg-black text-white px-10 py-6 text-lg font-semibold group transition-all duration-500 hover:bg-gray-900 hover:scale-105 shadow-xl border border-black"
                                >
                                    Start Your Journey
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <Button
                                    onClick={() => {
                                        window.location.href = "https://calendly.com/el-applyish/30min";
                                    }}
                                    variant="outline"
                                    size="lg"
                                    className="border-black dark:border-white text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 px-10 py-6 text-lg font-medium group hover:text-black dark:hover:text-white"
                                >
                                    <Calendar className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Book Demo
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Job Application Visual */}
                        <div className="relative">
                            {/* Main Card */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-50 p-8 border border-black/10">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-black text-xl font-semibold">{`Job applications being submitted by VA's`}</h3>
                                    <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* VA Illustration */}
                                <div className="flex items-center justify-center mb-8 relative">
                                    <img
                                        src={vaImg.src}
                                        alt="Virtual Assistant"
                                        className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-black/10"
                                    />
                                </div>

                                {/* Status Cards */}
                                <div className="space-y-4">
                                    {/* Google - Resume Sent */}
                                    <div className="bg-white border border-black/10 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center shadow-sm">
                                                <span className="text-black font-bold text-sm">S</span>
                                            </div>
                                            <span className="text-black font-medium flex items-center gap-2">
                                                Resume sent
                                            </span>
                                        </div>
                                        <span className="text-gray-700 flex font-semibold items-center gap-2">
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                                                alt="Google Logo"
                                                className="w-5 h-5"
                                            />Google</span>
                                    </div>

                                    {/* Stripe - Interview Scheduled */}
                                    <div className="bg-white border border-black/10 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-sm">
                                                <Zap className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-black font-medium">Interview scheduled</span>
                                        </div>
                                        <span className="text-gray-700 flex font-semibold items-center gap-2">
                                            <img
                                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                                                alt="Facebook Logo"
                                                className="w-5 h-5"
                                            />
                                            Facebook
                                        </span>
                                    </div>

                                    {/* Cisco - Offer Received */}
                                    <div className="bg-white border border-black/10 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-sm">
                                                <Check className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-black font-medium">Offer received</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-gray-700 flex font-semibold items-center gap-2">
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
                            <div className="absolute -top-10 -left-10 bg-black/5 rounded-2xl p-4 border border-black/10 shadow-xl">
                                <div className="text-green-600 text-sm font-medium">✓ Interview Scheduled</div>
                                <div className="text-black text-xs">Google • Software Engineer</div>
                            </div>

                            <div className="absolute -bottom-10 -right-10 bg-black/5 rounded-2xl p-4 border border-black/10 shadow-xl">
                                <div className="text-blue-600 text-sm font-medium">📈 2+ interviews/week</div>
                                <div className="text-black text-xs">Average success rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;