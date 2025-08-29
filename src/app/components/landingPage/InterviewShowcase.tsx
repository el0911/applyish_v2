import { Badge } from "@/app/components/ui/badge";

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
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Real Results, Real Interviews
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here are some of the interview invitations our clients have received.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {interviewImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewShowcase;
