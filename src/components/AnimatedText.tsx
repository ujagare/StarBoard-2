"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  // Split text into characters manually since GSAP SplitText is a paid plugin
  const words = text.split(" ");

  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Select all character spans
    const chars = containerRef.current.querySelectorAll(".char");
    
    gsap.from(chars, {
      y: 40,
      color: "#d4af37", // Changed to gold instead of neon green for premium feel
      opacity: 0,
      stagger: { each: 0.04, from: "start" },
      duration: 0.6,
      ease: "sine.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <span ref={containerRef} className={`inline-block ${className}`} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.2em] last:mr-0">
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className="char inline-block">
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
