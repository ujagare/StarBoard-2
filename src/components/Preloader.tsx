"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const displayRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // User's exact GSAP countdown code
    const counter = { val: 0 };
    const counterTween = gsap.to(counter, {
      val: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (displayRef.current) {
          displayRef.current.textContent = Math.round(counter.val) + "%";
        }
        if (barRef.current) {
          barRef.current.style.width = counter.val + "%";
        }
      },
      onComplete: () => {
        // Slide entire loader UPWARDS once countdown reaches 100%
        const tl = gsap.timeline({
          onComplete: () => {
            setIsLoading(false);
            document.body.style.overflow = "";
          }
        });

        // Slide the full preloader overlay up out of screen
        tl.to(containerRef.current, { 
          yPercent: -100, 
          duration: 1.1, 
          ease: "power3.inOut" 
        }, 0)
        // Reveal website content underneath
        .from(".content", { 
          scale: 0.95, 
          opacity: 0, 
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            // Clear any GSAP inline transforms so .content doesn't create a stacking context
            const el = document.querySelector(".content") as HTMLElement;
            if (el) el.style.cssText = "";
          }
        }, 0.2);
      }
    });

    return () => {
      counterTween.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F8F8F8] overflow-hidden select-none"
    >
      {/* Center Loader Content */}
      <div className="loader-center-content relative z-30 flex flex-col items-center justify-center p-6 text-center">
        
        {/* Top Eyebrow Accent */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#CFA85F]" />
          <span className="text-[#CFA85F] uppercase tracking-[0.3em] text-[9px] sm:text-[11px] font-medium">
            Starboard Realtors
          </span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#CFA85F]" />
        </div>

        {/* Brand Logo */}
        <div className="relative w-60 sm:w-80 md:w-96 h-20 sm:h-28 mb-4">
          <Image
            src="/SR_PNG horizontal_logo (1).png"
            alt="Starboard Realtors Luxury Real Estate"
            fill
            sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 384px"
            className="object-contain"
            priority
          />
        </div>

        {/* Dynamic Expanding Gold Progress Line */}
        <div className="w-48 sm:w-64 h-[2px] bg-black/10 rounded-full overflow-hidden my-4 relative">
          <div 
            ref={barRef}
            className="h-full bg-gradient-to-r from-[#B89247] via-[#CFA85F] to-[#EAD295] shadow-[0_0_12px_#CFA85F]"
            style={{ width: "0%" }}
          />
        </div>

        {/* Counter Display & Tagline */}
        <div className="flex flex-col items-center gap-1.5 mt-1">
          <span 
            ref={displayRef}
            className="font-serif text-lg sm:text-xl text-[#CFA85F] tracking-widest font-semibold"
          >
            0%
          </span>
          <span className="text-gray-600 uppercase tracking-[0.25em] text-[10px] sm:text-xs font-light">
            Curating Exceptional Spaces
          </span>
        </div>

      </div>
    </div>
  );
}
