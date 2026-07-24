"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Murali Nayak",
    role: "Sr. Vice President, Samvardhana Motherson International Ltd",
    content: "Sandesh Rolston is a true professional and an absolute gentleman. His ability to understand client requirements and preferences is exceptional. He is punctual, courteous, flexible, and thoroughly prepared before every interaction. It was a pleasure working with him throughout the entire property search journey.",
  },
  {
    name: "Dr. Kanchan Sawant",
    role: "Eye Specialist, Shree Ram Netralaya",
    content: "Mr. Sandesh Rolston is a highly professional real estate consultant. He understood our requirements perfectly and shortlisted properties that aligned with our preferences. He values his clients' time, is always punctual, and made the entire experience smooth and enjoyable.",
  },
  {
    name: "Geetha Garud",
    role: "Associate Director – Pre-Sales, LTIMindtree",
    content: "Sandesh Rolston and his team were instrumental in assisting with the sale of my property. Their transparency, professionalism, and commitment to ethical business practices made the entire process seamless and stress-free.",
  },
  {
    name: "Sushrut Shah",
    role: "Client",
    content: "It was a true joy to meet Mr. Sandesh. He showed us properties worth the investment and instantly grasped our needs. He is also a really kind and sincere advisor.",
  },
  {
    name: "Malavika Nayak",
    role: "Client",
    content: "Mr. Sandesh comes across as a very thorough professional in his field. Being punctual is the first quality which we appreciate. The other foremost thing which stands out is his understanding of the client's requirements and his choice of options met our requirements exactly what we wanted. We thank him for all his patience and support and we strongly recommend him for the service he provides.",
  },
  {
    name: "Mr. Mujumdar Avinash",
    role: "Client",
    content: "A very hard working official. Shri Sandesh is a thorough gentleman, patient and knowledgeable. We totally trusted him through out the whole procedure of selling our flat and he offered his best and more than our expectations. We wish him and this firm a great success ahead.",
  },
  {
    name: "Chaitanya Krishna",
    role: "Client",
    content: "We had a great conversation with Mr. Sandesh. He is a serious businessman and a diligent worker. He assisted me in finding a home that fit my needs and price range. He is open and honest in their real estate transactions and a subject matter specialist! I sincerely suggest him and wish him much success!",
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const cards = marqueeRef.current.querySelectorAll('.testimonial-card');
    const totalWidth = Array.from(cards).reduce((acc, card) => acc + (card as HTMLElement).offsetWidth + 48, 0); // 48 = gap

    // Create infinite loop marquee
    gsap.to(marqueeRef.current, {
      x: -totalWidth / 2,
      duration: 60,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-[#F8F9FA] relative">
      {/* Decorative Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gold to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-7xl text-deepblue mb-4 leading-tight tracking-normal">
            <AnimatedText text="Client" /> <span className="text-gold"><AnimatedText text="Experiences" /></span>
          </h2>
          <p className="line text-gray-500 font-light max-w-2xl mx-auto tracking-wide">
            Discover what our esteemed clients have to say about our commitment to excellence, transparency, and delivering long-term value.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div ref={marqueeRef} className="flex gap-12" style={{ width: 'max-content' }}>
            {/* Render testimonials twice for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article 
                key={index}
                className="testimonial-card flex flex-col shrink-0 w-60 sm:w-80 md:w-95 lg:w-100 h-[280px] sm:h-[310px] md:h-[340px] bg-offwhite p-5 sm:p-6 md:p-8 lg:p-10 rounded-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border-2 border-gold/30 hover:border-gold hover:shadow-[0_20px_50px_-20px_rgba(197,160,60,0.3)] transition-all duration-500 relative group"
              >
                {/* Subtle Quote Mark inside card */}
                <div className="absolute top-3 right-3 text-4xl sm:text-6xl md:text-7xl text-gold/10 font-serif leading-none group-hover:text-gold/20 transition-colors">
                  &rdquo;
                </div>
                
                <div className="flex gap-1 mb-3 sm:mb-4 md:mb-5 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" strokeWidth={0} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  ))}
                </div>
                
                <blockquote className="text-xs sm:text-sm md:text-base text-gray-600 font-light leading-relaxed mb-4 sm:mb-5 md:mb-6 relative z-10 flex-1 overflow-hidden">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                
                <footer className="mt-auto border-t border-gray-100 pt-3 sm:pt-4 md:pt-5 flex flex-col">
                  <p className="text-[10px] sm:text-xs md:text-sm text-gold uppercase tracking-widest font-medium mt-0.5 sm:mt-1 leading-tight line-clamp-2">
                    {testimonial.role}
                  </p>
                  <h3 className="font-serif text-sm sm:text-base md:text-lg lg:text-xl text-deepblue whitespace-nowrap truncate mt-1 sm:mt-2">{testimonial.name}</h3>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
