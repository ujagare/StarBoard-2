"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 75,
    suffix: "+ Cr",
    prefix: "₹",
    label: "TRANSACTIONS\nFACILITATED"
  },
  {
    value: 150,
    suffix: "+",
    prefix: "",
    label: "HAPPY CLIENTS\nSERVED"
  },
  {
    value: 100,
    suffix: "+",
    prefix: "",
    label: "PREMIUM PROJECTS\nACCESS"
  },
  {
    value: 6,
    suffix: "+ Yrs",
    prefix: "",
    label: "ADVISORY\nEXPERIENCE"
  }
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLElement | null)[]>([]);
  const numbersRef = useRef<(HTMLElement | null)[]>([]);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate stats cards
    gsap.fromTo(
      statsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate numbers counting up
    stats.forEach((stat, index) => {
      const counter = { val: 0 };
      gsap.to(counter, {
        val: stat.value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        },
        onUpdate: function() {
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(counter.val);
            return newValues;
          });
        }
      });
    });

  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-24 bg-deepblue text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Label */}
        <header className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold/50"></div>
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold">Key Achievements</span>
          <div className="w-12 h-px bg-gold/50"></div>
          </div>
          <h2 className="font-serif text-6xl md:text-7xl text-white">
            <span className="whitespace-nowrap"><AnimatedText text="A Track Record," /></span>{" "}
            <span className="text-gold whitespace-nowrap"><AnimatedText text="Measured In Trust." /></span>
          </h2>
        </header>

        {/* Stats Grid */}
        <dl className="grid grid-cols-2 md:flex md:flex-row md:justify-between items-center md:items-start border-b border-white/10 pb-16 mb-12 relative gap-8 md:gap-0">
          
          {stats.map((stat, index) => (
            <div
              key={index} 
              ref={(el) => { statsRef.current[index] = el; }}
              className={`w-full md:w-1/4 text-center py-4 md:py-0 relative ${
                index !== stats.length - 1 ? 'md:after:content-[""] md:after:absolute md:after:right-0 md:after:top-0 md:after:bottom-0 md:after:w-px md:after:bg-white/10' : ''
              }`}
            >
              <dt 
                ref={(el) => { numbersRef.current[index] = el; }}
                className="font-serif text-6xl md:text-7xl lg:text-8xl text-gold mb-3 md:mb-4"
              >
                {stat.prefix}{animatedValues[index]}{stat.suffix}
              </dt>
              <dd className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] text-gray-300 uppercase whitespace-pre-line leading-relaxed">
                {stat.label}
              </dd>
            </div>
          ))}

        </dl>

        {/* Bottom Tags */}
        <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[9px] sm:text-[11px] tracking-[0.2em] text-gray-400 uppercase">
          <li>Exclusive Sales Mandates</li>
          <li aria-hidden="true" className="w-1 h-1 rounded-full bg-gold/50"></li>
          <li>Commercial Leasing Specialists</li>
          <li aria-hidden="true" className="w-1 h-1 rounded-full bg-gold/50"></li>
          <li>Trusted by CXOs & HNIs</li>
        </ul>

      </div>
    </section>
  );
}
