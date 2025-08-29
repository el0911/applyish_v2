import { FC } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import logoImg from "../../logo.png"; // <-- Replace with your logo path

const HeroSection: FC = () => {
    return (
        <div className="relative bg-white text-black flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-grid-black/[0.05] bg-[length:20px_20px]"></div>

            {/* Logo at the top */}
            <div className="absolute top-0 left-0 w-full flex justify-start items-center px-8 py-6">
                <img src={logoImg.src} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                    We Apply to Jobs So You Don't Have To.
                </h1>

                <p className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Focus on what you do best: acing interviews and landing offers. We handle the tedious application process for you.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex justify-center">
                    <Button
                        onClick={() => {
                            window.location.href = "https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105";
                        }}
                        size="lg"
                        className="bg-black text-white px-8 py-4 text-lg font-semibold group transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 shadow-lg"
                    >
                        Get Started Now
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;