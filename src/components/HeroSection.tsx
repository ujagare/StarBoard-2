"use client";

import { useEffect } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

export default function HeroSection() {
  useEffect(() => {
    // Other animations are handled globally by ImageAnimator and locally by AnimatedText
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/FEATURED OPPORTUNITIES/ChatGPT Image Jul 4, 2026, 08_40_14 PM.webp"
          alt="Luxury commercial real estate advisory in Pune"
          fill
          quality={85}
          className="object-cover object-top"
          sizes="100vw"
          preload
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 drop-shadow-lg uppercase tracking-wide leading-tight"
          >
            <AnimatedText text="Curating" />
            <br />
            <span className="text-white italic">
              <AnimatedText text="exceptional spaces" />
            </span>
          </h1>
          
          <p 
            className="line text-base md:text-lg font-light tracking-wide max-w-md drop-shadow-md mb-8"
          >
            Starboard Realtors is a boutique real estate advisory firm specializing in commercial real estate, retail spaces, and luxury residential properties across Pune.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-deepblue font-semibold uppercase tracking-widest text-sm hover:bg-gold-dark transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="#properties" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-deepblue transition-all duration-300 rounded-sm"
            >
              View Properties
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
