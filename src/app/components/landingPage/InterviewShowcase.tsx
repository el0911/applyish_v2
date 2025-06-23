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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
            Live Results
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Real Interview Invites from This Week
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See actual interview invitations our clients received. Your success story could be next.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviewImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden flex flex-col"
            >
              <div className="w-full aspect-[9/16] bg-slate-100 flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full"
                  draggable={false}
                />
              </div>
            </div>
          ))}
          {/* Call-to-action card */}
          <div 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden flex flex-col"
          >
            <div className="flex flex-col items-center justify-center h-full w-full">
              <span className="inline-block mb-3">
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="mx-auto text-black">
                  <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2c0-2.66-5.33-4-8-4Z" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-black mb-2">
                Want to get an interview like this?
              </h3>
              <p className="text-slate-700 mb-4">
                Get on a free call with us and start your journey!
              </p>
              <a
                href="https://first-gas-3bf.notion.site/1b565bb93d5681dfaaf7fad306122371?pvs=105"
                className="inline-block bg-black hover:bg-neutral-800 text-white font-medium px-4 py-2 rounded transition"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Join hundreds of professionals getting interview invites every week
          </p>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex -space-x-2">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/65.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
                "https://randomuser.me/api/portraits/men/12.jpg"
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Happy client"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-slate-600 font-medium">+1000 happy clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewShowcase;
