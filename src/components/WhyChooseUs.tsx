"use client";

import { useRef } from "react";
import { 
  HeartHandshake, 
  TrendingUp, 
  ShieldCheck, 
  Gem, 
  Workflow, 
  Headphones 
} from "lucide-react";
import AnimatedText from "./AnimatedText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Client-Centric Advisory Approach",
    description: "Your strategic ambitions are at the heart of our counsel. We transcend traditional brokering by acting as trusted partners, delivering bespoke consultation tailored to your unique financial and operational goals."
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Strong Market Intelligence & Research",
    description: "Knowledge is power in premium real estate. We leverage rigorous, data-driven micro-market research and deep sector intelligence to ensure you capture premium opportunities and make highly informed decisions."
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Transparent & Ethical Transactions",
    description: "Trust is our most valuable asset. We maintain uncompromising transparency, complete regulatory compliance, and pristine ethical practices in every single negotiation and contractual agreement."
  },
  {
    icon: Gem,
    number: "04",
    title: "Access to Premium Commercial & Luxury Assets",
    description: "Unlock exclusive opportunities. Gain access to Pune's finest portfolios of high-performance Grade-A commercial properties, premium office spaces, and ultra-luxury residential estates."
  },
  {
    icon: Workflow,
    number: "05",
    title: "End-to-End Transaction Management",
    description: "Experience absolute peace of mind. Our experienced team seamlessly orchestrates the entire transaction lifecycle—from intensive property due diligence to sophisticated legal, compliance, and acquisition services."
  },
  {
    icon: Headphones,
    number: "06",
    title: "Dedicated Post-Sales Support",
    description: "Our partnership endures far beyond the signing of contracts. We offer meticulous post-sales services, including seamless possession handovers, tenant acquisition, and asset optimization support."
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".why-choose-card");
    
    // Set initial visible state
    gsap.set(cards, { opacity: 1, y: 0 });
    
    gsap.from(cards, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="why-choose-us" ref={containerRef} className="py-24 bg-deepblue text-white overflow-hidden relative">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Section */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-gold/50"></div>
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold whitespace-nowrap">Our Distinct Advantage</span>
          <div className="w-12 h-[1px] bg-gold/50"></div>
        </div>

        {/* Heading & Subtitle */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            <AnimatedText text="Why Choose" /> <span className="text-gold italic"><AnimatedText text="Starboard Realtors" /></span>
          </h2>
          <p className="text-gray-400 font-light tracking-wide max-w-2xl mx-auto text-lg leading-relaxed">
            We deliver a higher standard of real estate advisory, combining deep intelligence with absolute transparency to guide your path.
          </p>
        </div>

        {/* Advantage Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {advantages.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <article 
                key={index} 
                className="why-choose-card relative border border-gold/30 bg-[#122032] p-4 md:p-8 rounded-sm transition-all duration-500 shadow-[0_15px_40px_-15px_rgba(207,168,95,0.15)] hover:border-gold hover:bg-[#1a2d47] hover:scale-105 flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                {/* Decorative Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Card Corner Accent */}
                <div className="absolute top-0 right-0 border-t-2 border-r-2 border-gold/40 w-4 h-4 transition-all duration-500 rounded-tr-sm" />
                <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-gold/40 w-4 h-4 transition-all duration-500 rounded-bl-sm" />

                <div>
                  {/* Icon Row */}
                  <div className="flex items-start mb-4 md:mb-8">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-gold/20 bg-gold flex items-center justify-center text-deepblue transition-all duration-500 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                      <IconComponent size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Advantage Title & Copy */}
                  <h3 className="font-serif text-base md:text-2xl text-gold mb-2 md:mb-4 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 transition-colors duration-300 font-light leading-relaxed text-xs md:text-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
