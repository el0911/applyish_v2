import { FC } from 'react';
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from 'lucide-react';

const FinalCTA: FC = () => {
  return (
    <div className="bg-gray-50 py-20 sm:py-28 text-gray-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.05] bg-[length:20px_20px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Ready to Transform Your Job Search?
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          Stop wasting time on endless applications. Our human specialists handle the tedious work, so you can focus on acing your interviews and landing your dream job.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 flex-col sm:flex-row">
          <Button
            onClick={() => {
              window.location.href = "https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105";
            }}
            size="lg"
            className="bg-blue-600 text-white px-10 py-6 text-lg font-semibold group transition-all duration-500 hover:bg-blue-700 hover:scale-105 shadow-xl border border-blue-600 w-full sm:w-auto"
          >
            Claim Your Free Consultation
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;