"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const developers = [
  { name: "Panchshil", logo: "/images/Builders Logo/panchshil-logo.webp" },
  { name: "Amar Builders", logo: "/images/Builders Logo/amar-dark.webp" },
  { name: "Kasturi", logo: "/images/Builders Logo/kasturi-logo.svg" },
  { name: "Kolte Patil", logo: "/images/Builders Logo/kolte_patil-removebg-preview.webp" },
  { name: "Kalpataru", logo: "/images/Builders Logo/kalpataru.webp" },
  { name: "Gera", logo: "/images/Builders Logo/gera builder.webp" },
  { name: "Godrej", logo: "/images/Builders Logo/Godraje_-removebg-preview.webp" },
  { name: "Kohinoor", logo: "/images/Builders Logo/Kohinoor_Group-removebg-preview.webp" },
  { name: "Kumar Properties", logo: "/images/Builders Logo/Kumar_Properties_New_Logo_02.webp" },
  { name: "Shapoorji Pallonji", logo: "/images/Builders Logo/shapoorji pallonji.webp" },
  { name: "Adani", logo: "/images/Builders Logo/Adani.webp" },
  { name: "Malpani", logo: "/images/Builders Logo/Malpani.webp" }
];

export default function DeveloperPartners() {
  const marqueeRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // First marquee - Left to Right
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });

  }, []);

  return (
    <section className="py-20 bg-offwhite border-t border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-deepblue mb-4">
          <span className="whitespace-nowrap"><AnimatedText text="Trusted Access to" /></span> <span className="whitespace-nowrap"><AnimatedText text="Pune's" /></span> <span className="text-gold italic whitespace-nowrap"><AnimatedText text="Leading Developers" /></span>
        </h2>
        <p className="line text-gray-500 font-light max-w-2xl mx-auto">
          Access to 100+ Premium Projects Across Pune Through Our Extensive Developer Network
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap">
        {/* We duplicate the array to create a seamless infinite scroll loop */}
        <ul ref={marqueeRef} className="flex gap-8 sm:gap-12 md:gap-16 px-4 sm:px-6 md:px-8 items-center">
          {[...developers, ...developers].map((dev, index) => (
            <li key={index} className="flex-shrink-0 w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 relative transition-transform duration-300 hover:scale-105">
              <Image
                src={dev.logo}
                alt={`${dev.name} developer logo`}
                fill
                sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
