"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.set(imageRef.current, {
      scale: 1.25
    });

    gsap.to(imageRef.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scale: 1,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-deepblue leading-tight">
              <AnimatedText text="About" /> <span className="text-gold italic"><AnimatedText text="Starboard Realtors" /></span>
            </h2>
            <div className="space-y-4 text-lg text-gray-600 font-light leading-relaxed">
              <p className="line">
                Founded on the principles of transparency, professionalism, and client-centric service, we help businesses, investors, and homebuyers make informed real estate decisions with confidence.
              </p>
              <p className="line">
                Our expertise spans commercial leasing, office space acquisitions, investment advisory, developer mandates, and premium residential transactions. We don&apos;t just facilitate transactions—we build lasting relationships by delivering value, trust, and real estate solutions that drive long-term success.
              </p>
            </div>
          </div>

          <div 
            ref={imageRef} 
            className="relative h-[400px] lg:h-[500px] xl:h-[700px] w-full overflow-hidden rounded-sm shadow-2xl"
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          >
            {/* Premium corporate/office imagery */}
            <Image
              src="/images/Services/ChatGPT Image Jun 25, 2026, 10_55_09 AM.webp"
              alt="Starboard Realtors corporate real estate consultation"
              fill
              quality={82}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
