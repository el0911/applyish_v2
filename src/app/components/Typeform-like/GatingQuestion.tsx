
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from "@/app/components/ui/button";
import PricingModal from './PricingModal';
import Image from "next/image";
import { ArrowDown, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { interviewImages as images } from '@/lib/interviewImages';

type GatingQuestionProps = {
  onNext: () => void;
};

const ImageWithLoader = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-2xl">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className="rounded-2xl shadow-xl border-4 border-white"
        width={500}
        height={300}
        priority
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

const GatingQuestion = ({ onNext }: GatingQuestionProps) => {
  const [showPricing, setShowPricing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };


  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const videoScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  const videoY = useTransform(scrollYProgress, [0, 0.3], [0, 800]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.4], ['blur(12px)', 'blur(12px)', 'blur(0px)']);
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (videoRef.current) {
        if (latest > 0.35) { // Pause when video is mostly off-screen
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div ref={targetRef} className="min-h-[200vh] bg-white text-gray-800">
        <motion.div
          style={{ backdropFilter: blur }}
          className="h-screen sticky top-0 flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.div
              style={{ scale: videoScale, y: videoY, opacity: videoOpacity }}
              className="flex items-center justify-center"
            >
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[640px] w-[320px] shadow-xl">
                {/* Notch */}
                <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                {/* Side buttons */}
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                {/* Screen */}
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black">
                  <video
                    ref={videoRef}
                    src="https://res.cloudinary.com/immotal/video/upload/v1758219180/AQMZcYoCtGTDDd8oJiRnD3rJF2vo7en1a6BEW0zZRrZRhlNrUVcg-LzMIlwUW0VNwhrp53dFdn55aphugsZ30vfJmJ3Vd4mBKPbarMs_zsfmm9.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <button
              onClick={toggleMute}
              className="absolute -bottom-5 -right-5 bg-white p-4 rounded-full shadow-lg border-2 border-gray-200 text-gray-700 hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-10"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }} // Add this
            className="absolute bottom-10 flex flex-col items-center space-y-2 text-gray-600"
          >
            <p>Scroll to see the results</p>
            <ArrowDown className="animate-bounce" />
          </motion.div>
        </motion.div>

        <motion.div style={{ opacity: imageOpacity }} className="-mt-[100vh] pt-24 pb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Real Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ImageWithLoader src={src} alt={`Interview screenshot ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent flex justify-center">
          <Button
            onClick={() => setShowPricing(true)}
            className="bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            Find Your Perfect Plan  <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {showPricing && (
          <PricingModal
            onClose={() => setShowPricing(false)}
            onProceed={onNext}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GatingQuestion;

