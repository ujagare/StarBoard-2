"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    // Set initial transform
    gsap.set(imageRef.current, {
      scale: 1.25
    });

    // Animate on scroll
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
    <section id="services" ref={sectionRef} className="py-24 bg-deepblue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div 
            ref={imageRef} 
            className="relative h-100 lg:h-125 xl:h-187.5 w-full rounded-sm overflow-hidden order-2 lg:order-1 shadow-2xl"
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          >
            <Image
              src="/images/Services/ChatGPT Image Jun 25, 2026, 10_56_16 AM.webp"
              alt="Starboard Realtors premium real estate services"
              fill
              quality={82}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-7xl leading-tight tracking-normal">
              <AnimatedText text="Premium" /> <span className="text-gold"><AnimatedText text="Services" /></span>
            </h2>
            <p className="line text-lg font-light leading-relaxed text-gray-300">
              Our expertise spans commercial leasing, office space acquisitions, investment advisory, developer mandates, and premium residential transactions. With deep market knowledge and strategic partnerships, we provide tailored solutions that align with our clients&apos; goals.
            </p>
            
            <ul className="pt-4 grid grid-cols-2 gap-4 md:gap-6">
              <li className="border border-white/20 p-6 hover:border-gold transition-colors">
                <h3 className="text-gold font-serif text-xl mb-2">Commercial</h3>
                <p className="text-gray-400 font-light text-sm">Leasing & Sales</p>
              </li>
              <li className="border border-white/20 p-6 hover:border-gold transition-colors">
                <h3 className="text-gold font-serif text-xl mb-2">Residential</h3>
                <p className="text-gray-400 font-light text-sm">Luxury Sales</p>
              </li>
              <li className="border border-white/20 p-6 hover:border-gold transition-colors">
                <h3 className="text-gold font-serif text-xl mb-2">Retail</h3>
                <p className="text-gray-400 font-light text-sm">Leasing</p>
              </li>
              <li className="border border-white/20 p-6 hover:border-gold transition-colors">
                <h3 className="text-gold font-serif text-xl mb-2">Advisory</h3>
                <p className="text-gray-400 font-light text-sm">Investment & Consulting</p>
              </li>
            </ul>

            <div className="pt-6">
              <a href="#contact" className="inline-block border border-gold text-gold px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:text-deepblue transition-colors">
                Explore Services
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
