"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sbRef = useRef<SVGTextElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Manage body scroll here to avoid hydration errors on initial render mismatch
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
      }
    });

    // 1. Draw SVG "SR"
    tl.fromTo(sbRef.current, 
      { strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut"
      }
    )
    // 2. Zoom-out effect for text directly below it
    .fromTo([text1Ref.current, text2Ref.current],
      { scale: 3, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.15 }
    )
    // 3. Slide entire preloader up
    .to(containerRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power3.inOut",
      delay: 0.5
    });

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      suppressHydrationWarning
      className="fixed inset-0 z-[99999] bg-[#0F1C2D] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center w-full" suppressHydrationWarning>
        {/* 1. SR SVG */}
        <svg width="400" height="200" viewBox="0 0 400 200" className="w-64 h-32 md:w-96 md:h-48 mb-6 overflow-visible" suppressHydrationWarning>
          <text 
            ref={sbRef}
            suppressHydrationWarning
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="central" 
            className="font-serif text-[100px] md:text-[150px] font-bold tracking-widest"
            style={{ 
              fill: "transparent", 
              stroke: "#CFA85F", 
              strokeWidth: 1,
              strokeDasharray: 1000,
              strokeDashoffset: 1000
            }}
          >
            SR
          </text>
        </svg>

        {/* 2. Text Zoom-Out (Positioned right below SR) */}
        <div className="flex flex-col items-center justify-center text-center" suppressHydrationWarning>
          <h3 ref={text1Ref} suppressHydrationWarning className="font-serif text-3xl md:text-5xl text-white tracking-[0.3em] uppercase opacity-0">
            Starboard
          </h3>
          <h3 ref={text2Ref} suppressHydrationWarning className="font-serif text-2xl md:text-4xl text-[#CFA85F] tracking-[0.4em] uppercase opacity-0 mt-2">
            Realtors
          </h3>
        </div>
      </div>
    </div>
  );
}
