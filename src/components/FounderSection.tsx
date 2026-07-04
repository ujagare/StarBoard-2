"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function FounderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const text = "At Starboard Realtors, we believe that real estate is more than just a transaction—it is one of the most important decisions individuals and businesses make. Our mission is to provide clients with honest advice, market expertise, and a seamless experience throughout their real estate journey. Whether it is finding the right commercial space, making a strategic investment, or securing a dream home, we are committed to understanding our clients' unique requirements and delivering solutions that create long-term value. Built on the principles of transparency, professionalism, and trust, Starboard Realtors strives to be a reliable partner for businesses, investors, and homebuyers alike.";
  const words = text.split(" ");

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Select all the word spans
    const wordElements = containerRef.current.querySelectorAll(".founder-word");
    
    // The exact animation snippet provided by the user
    gsap.to(wordElements, {
      color: "#ffffff",
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section id="founder" className="relative py-12 bg-deepblue text-white overflow-hidden">
      {/* Subtle Background Pattern/Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-4 uppercase tracking-[0.2em]">
            <span className="whitespace-nowrap"><AnimatedText text="A Word From" /></span> <span className="whitespace-nowrap"><AnimatedText text="The Founder" /></span>
          </h2>
          <div className="w-24 h-[1px] bg-gold/50 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Giant Quote Mark Background */}
          <div className="absolute -top-10 -left-6 text-[10rem] md:text-[15rem] font-serif text-white/5 select-none leading-none">
            &ldquo;
          </div>

          <div ref={containerRef} className="relative z-10 py-2 px-2 md:px-10">
            <p 
              className="text-center font-serif w-full" 
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.1)' }}
            >
              {words.map((word, i) => (
                <span key={i} className="founder-word inline-block mr-[0.25em]">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col items-center md:items-end md:pr-10">
          <div className="w-12 h-[2px] bg-gold mb-3"></div>
          <p className="font-serif text-2xl text-white">Sandesh Rolston</p>
          <p className="text-gold font-light tracking-widest uppercase text-xs mt-1">
            Founder & Director
          </p>
        </div>

      </div>
    </section>
  );
}
