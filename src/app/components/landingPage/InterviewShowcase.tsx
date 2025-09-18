import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";
import Image from "next/image";

// Import your images statically or dynamically
import img1 from "@/app/interviewimages/1.png"
import img2 from "@/app/interviewimages/2.png"
import img3 from "@/app/interviewimages/3.png"
import img4 from "@/app/interviewimages/4.png"

const interviewImages = [
  { src: img1.src, alt: "Interview Screenshot 1" },
  { src: img2.src, alt: "Interview Screenshot 2" },
  { src: img3.src, alt: "Interview Screenshot 3" },
  { src: img4.src, alt: "Interview Screenshot 4" },
];

const InterviewShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Real Results, Real Interviews
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the interview invitations our clients have received.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {interviewImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 rounded-lg overflow-hidden"
              variants={itemVariants}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full"
                width={500}
                height={300}
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      <div className="mt-16 text-center">
          <Button
            onClick={() => {
              window.location.href = "/apply";
            }}
            size="lg"
            className="bg-indigo-600 text-white px-10 py-6 text-lg min-h-[60px] font-semibold shadow-lg border border-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
          >
            Start Your Job Search Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InterviewShowcase;
