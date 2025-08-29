import { FC } from 'react';
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from 'lucide-react';

const FinalCTA: FC = () => {
  return (
    <div className="bg-gray-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to land your dream job?
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Let us handle the applications, so you can focus on what matters.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            onClick={() => {
              window.location.href = "https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105";
            }}
            size="lg"
            className="bg-white text-black px-8 py-4 text-lg font-semibold group transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 shadow-lg"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;