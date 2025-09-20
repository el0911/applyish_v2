
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
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  const getBlurDataURL = (url: string) => {
    if (!url.includes('res.cloudinary.com')) {
      return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8v5ZgPQAHNwF/pUf52wAAAABJRU5ErkJggg==';
    }
    const parts = url.split('/upload/');
    return `${parts[0]}/upload/w_50,q_auto:low/${parts[1]}`;
  };

  return (
    <div className="relative w-full" style={{ paddingTop: '177.77%' }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={`absolute inset-0 w-full h-full rounded-2xl shadow-xl border-4 border-white transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        placeholder="blur"
        blurDataURL={getBlurDataURL(src)}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setHasError(true)}
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

  const scrollToImages = () => {
    if (imagesRef.current) {
      const elementRect = imagesRef.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      window.scrollTo({
        top: absoluteElementTop,
        behavior: 'smooth'
      });
    }
  };

  const targetRef = useRef(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const videoScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.5]);
  const videoY = useTransform(scrollYProgress, [0, 0.15], [0, 800]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.12, 0.15], [1, 1, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (videoRef.current) {
        if (latest > 0.1) {
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
      <div ref={targetRef} className="min-h-[200vh] bg-white text-gray-800" style={{ width: '100vw' }}>
        <motion.div
          style={{ zIndex: 10 }}
          className="h-screen sticky top-0 flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.div
              style={{ scale: videoScale, y: videoY, opacity: videoOpacity }}
              className="flex items-center justify-center"
            >
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[640px] w-[320px] shadow-xl">
                <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black">
                  <button
                    onClick={toggleMute}
                    className="absolute -top-5 -right-5 bg-white p-4 rounded-full shadow-lg border-2 border-gray-200 text-gray-700 hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-10"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
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
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]), zIndex: 20 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-600"
          >
            <button
              onClick={scrollToImages}
              className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <p className="text-gray-800">Scroll to see the results</p>
              <ArrowDown className="animate-bounce text-gray-800" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div ref={imagesRef} style={{ opacity: 1 }} className=" pt-24 pb-32">
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

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent flex justify-center z-30">
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

