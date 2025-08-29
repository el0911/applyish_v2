import { FC } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Calendar, CheckCircle, Zap, Check } from "lucide-react";
import logoImg from "../../logo.png";
import vaImg from "../../va.png";
import { motion } from "framer-motion";

const HeroSection: FC = () => {
    const floatingCards = [
        {
            top: "-15%",
            left: "-15%",
            content: {
                line1: "✓ Interview Scheduled",
                line2: "Google • Software Engineer",
                color: "text-green-600",
            },
        },
        {
            bottom: "0%",
            right: "-15%",
            content: {
                line1: "📈 2+ interviews/week",
                line2: "Average success rate",
                color: "text-blue-600",
            },
        },
        {
            top: "15%",
            left: "-20%",
            content: {
                line1: "✓ Offer Received",
                line2: "Amazon • Product Manager",
                color: "text-purple-600",
            },
        },
        {
            bottom: "10%",
            left: "-10%",
            content: {
                line1: "🚀 Promoted to Senior",
                line2: "Microsoft • Data Scientist",
                color: "text-red-600",
            },
        },
        {
            top: "-10%",
            right: "-10%",
            content: {
                line1: "✓ Interview Scheduled",
                line2: "Meta • UX Designer",
                color: "text-yellow-600",
            },
        },
        {
            bottom: "0%",
            right: "15%",
            content: {
                line1: "🎉 New Role Secured",
                line2: "Apple • Software Engineer",
                color: "text-pink-600",
            },
        },
        {
            top: "25%",
            right: "-20%",
            content: {
                line1: "✓ Interview Scheduled",
                line2: "Netflix • Content Strategist",
                color: "text-indigo-600",
            },
        },
        {
            bottom: "25%",
            left: "20%",
            content: {
                line1: "💰 Salary Increase",
                line2: "Stripe • Financial Analyst",
                color: "text-teal-600",
            },
        },
        {
            top: "-25%",
            left: "25%",
            content: {
                line1: "✓ Interview Scheduled",
                line2: "Google • Marketing Manager",
                color: "text-orange-600",
            },
        },
        {
            bottom: "0%",
            right: "25%",
            content: {
                line1: "🌟 Career Change Success",
                line2: "Salesforce • Sales Executive",
                color: "text-cyan-600",
            },
        },
    ];

    return (
        <div className="relative bg-white text-gray-900 min-h-screen">
            {/* Logo at the top */}
            <div className="w-full flex justify-start items-center px-8 py-6">
                <img src={logoImg.src} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    {/* LEFT: Text Content */}
                    <div className="text-left">
                        <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
                            Real People, Real Applications. No AI.
                        </h1>

                        <p className="mt-6  lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                            Tired of sending your resume into the void? Our team of dedicated job application specialists personally handles every application, ensuring your profile gets the attention it deserves.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col space-y-4 lg:flex-row lg:space-x-4">
                            <Button
                                onClick={() => {
                                    window.location.href = "https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105";
                                }}
                                size="lg"
                                className="bg-indigo-600 text-white px-10 py-6  min-h-[60px] font-semibold shadow-lg border border-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
                            >
                                Start Your Job Search Today
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            
                        </div>
                    </div>

                    {/* RIGHT: Job Application Visual */}
                    <div className="relative">
                        {/* Main Card */}
                        <div className="relative rounded-3xl overflow-visible shadow-2xl bg-gray-50 p-6 border border-black/10 max-w-md">
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
                                    className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-black/10"
                                />
                            </div>

                            {/* Status Cards */}
                            <div className="space-y-4">
                                {/* Google - Resume Sent */}
                                <div className="bg-white border border-black/10 rounded-xl p-3 flex items-center justify-between hover:bg-gray-100 transition-colors">
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
                                <div className="bg-white border border-black/10 rounded-xl p-3 flex items-center justify-between hover:bg-gray-100 transition-colors">
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
                                <div className="bg-white border border-black/10 rounded-xl p-3 flex items-center justify-between hover:bg-gray-100 transition-colors">
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

                            {/* Floating Stats */}
                            {floatingCards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute hidden lg:block bg-gray-100/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-xl"
                                    style={{ top: card.top, bottom: card.bottom, left: card.left, right: card.right }}
                                    animate={{
                                        x: [0, Math.random() * 40 - 20, 0],
                                        y: [0, Math.random() * 40 - 20, 0],
                                    }}
                                    transition={{
                                        duration: Math.random() * 2 + 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut",
                                    }}
                                >
                                    <div className={`${card.content.color} text-sm font-medium`}>{card.content.line1}</div>
                                    <div className="text-black text-xs">{card.content.line2}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;