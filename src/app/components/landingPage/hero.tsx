import { FC } from "react";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle, Zap, Check } from "lucide-react";
import logoImg from "../../logo.png";
import vaImg from "../../va.png";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <div className="relative bg-white text-gray-900 min-h-screen w-full overflow-x-hidden">
            {/* Logos */}
            <div className="absolute top-0 left-0 p-6 sm:p-8 z-10">
                <Image src={logoImg.src} alt="Logo" className="h-8 sm:h-10 w-auto" height={40} width={100} priority />
            </div>
            {/* <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-10">
                 <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-white flex items-center justify-center rounded-full font-bold text-xl shadow-md">
                    N
                 </div>
            </div> */}

            <main className="min-h-screen flex items-center justify-center p-6">
                <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1700px] transition-all duration-300 ease-in-out">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 xl:gap-28 items-center">

                        {/* LEFT: Tuned Fluid Text Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="font-bold leading-tight tracking-tight text-[clamp(2.75rem,4.5vw,5rem)]">
                                We get you{" "}
                                <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-extrabold relative">
                                    INTERVIEWS
                                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                                </span>
                            </h1>
                            <p className="mt-6 text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-[clamp(1rem,1.5vw,1.25rem)]">
                                Our team manually applies to almost 100 jobs per week for you. Real humans that care and understand your professional  needs,
                                <span className="text-orange-600 font-semibold relative">
                                    not just AI bots
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600 rounded-full"></span>
                                </span>.
                            </p>
                            <div className="mt-10 flex justify-center lg:justify-start">
                                <Button
                                    onClick={() => { window.location.href = "/apply"; }}
                                    size="lg"
                                    className="bg-indigo-600 text-white px-10 py-6 min-h-[60px] font-semibold shadow-lg border border-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 group"
                                >
                                    Get Me Interviews
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT: Tuned Scalable Visual Component */}
                        <div className="relative hidden lg:flex justify-center">
                            <div className="transform transition-transform duration-500 ease-in-out lg:scale-90 xl:scale-100 2xl:scale-110">
                                <div className="relative rounded-3xl overflow-visible shadow-2xl bg-gray-50 p-6 border border-black/10 max-w-md w-full">
                                    {/* --- ALL INNER CONTENT IS UNCHANGED --- */}
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-black text-xl font-semibold">{`Job applications being submitted by VA's`}</h3>
                                        <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                    </div>
                                    {/* VA Illustration */}
                                    <div className="flex items-center justify-center mb-8 relative">
                                        <Image src={vaImg.src} alt="Virtual Assistant" className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-black/10" width={192} height={192} priority />
                                    </div>
                                    {/* Status Cards */}
                                    <div className="space-y-4">
                                        <div className="bg-white border border-black/10 rounded-xl p-3 flex items-center justify-between hover:bg-gray-100 transition-colors">
                                            <div className="flex items-center space-x-3"><div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center shadow-sm"><span className="text-black font-bold text-sm">S</span></div><span className="text-black font-medium flex items-center gap-2">Resume sent</span></div><span className="text-gray-700 flex font-semibold items-center gap-2"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google Logo" className="w-5 h-5" width={20} height={20} />Google</span>
                                        </div>
                                        <div className="bg-white border border-black/10 rounded-xl p-3 flex items-center justify-between hover:bg-gray-100 transition-colors">
                                            <div className="flex items-center space-x-3"><div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-sm"><Zap className="w-5 h-5 text-white" /></div><span className="text-black font-medium">Interview scheduled</span></div><span className="text-gray-700 flex font-semibold items-center gap-2"><Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook Logo" className="w-5 h-5" width={20} height={20} />Facebook</span>
                                        </div>
                                        <div className="bg-white border border-black/10 rounded-xl p-3 flex items-center justify-between hover:bg-gray-100 transition-colors">
                                            <div className="flex items-center space-x-3"><div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-sm"><Check className="w-5 h-5 text-white" /></div><span className="text-black font-medium">Offer received</span></div><div className="flex items-center space-x-3"><span className="text-gray-700 flex font-semibold items-center gap-2"><Image src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" className="w-5 h-5" width={20} height={20} />Amazon</span></div>
                                        </div>
                                    </div>
                                    {/* Floating Stats */}
                                    {floatingCards.map((card, index) => (
                                        <motion.div key={index} className="absolute hidden lg:block bg-gray-100/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-xl" style={{ top: card.top, bottom: card.bottom, left: card.left, right: card.right }} animate={{ x: [0, Math.random() * 20 - 10, 0], y: [0, Math.random() * 20 - 10, 0] }} transition={{ duration: Math.random() * 2 + 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
                                            <div className={`${card.content.color} text-sm font-medium`}>{card.content.line1}</div>
                                            <div className="text-black text-xs">{card.content.line2}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;