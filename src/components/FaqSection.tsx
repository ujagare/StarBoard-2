"use client";

import { useState, useRef } from "react";
import { Plus } from "lucide-react";
import AnimatedText from "./AnimatedText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What areas in Pune do you specialize in?",
    answer: "We focus on Pune's most sought-after and premium micro-markets, including Aundh, Baner, Balewadi, Kalyani Nagar, Koregaon Park, and Kharadi. Our deep local expertise ensures you get access to the finest properties in these prime locations."
  },
  {
    question: "Do you only handle commercial properties?",
    answer: "While we have a very strong foothold in commercial leasing and office space acquisitions, our portfolio is diverse. We also specialize in premium retail spaces and ultra-luxury residential properties (4BHK and above) tailored for HNIs and corporate executives."
  },
  {
    question: "What makes Starboard Realtors different from other brokers?",
    answer: "We position ourselves as real estate advisors rather than traditional brokers. Our approach is rooted in transparency, ethical practices, and long-term value creation. We prioritize your strategic goals, offering unbiased market insights and end-to-end support throughout your real estate journey."
  },
  {
    question: "Do you assist with legal and compliance documentation?",
    answer: "Yes, we provide comprehensive end-to-end advisory. We work closely with trusted legal and financial partners to ensure that all due diligence, compliance, and documentation processes are handled seamlessly and securely."
  },
  {
    question: "How do you source off-market premium properties?",
    answer: "With over 6 years of deep-rooted relationships with Grade-A developers, landlords, and investors, we often gain exclusive access to off-market mandates and pre-launch opportunities before they reach the broader market."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const items = containerRef.current.querySelectorAll(".faq-item");
    gsap.from(items, {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      }
    });
  }, { scope: containerRef });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0F1C2D] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 md:mb-6">
            <AnimatedText text="Frequently Asked" /> <span className="text-gold italic"><AnimatedText text="Questions" /></span>
          </h2>
          <p className="text-sm md:text-base text-white font-light tracking-wide max-w-2xl mx-auto">
            Everything you need to know about our services, expertise, and how we deliver value.
          </p>
        </div>

        <ul className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            
            return (
              <li 
                key={index} 
                className={`faq-item border transition-all duration-500 bg-transparent ${
                  isOpen ? 'border-gold shadow-[0_4px_20px_rgba(197,160,60,0.15)]' : 'border-gold/50 hover:border-gold'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-8 text-left focus:outline-none group"
                >
                  <h3 className={`font-serif text-base sm:text-lg md:text-xl lg:text-2xl transition-colors duration-300 pr-4 sm:pr-6 md:pr-8 ${
                    isOpen ? 'text-gold' : 'text-white group-hover:text-gold'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-50                    isOpen ? 'border-gold bg-gold text-[#0F1C2D] rotate-45' : 'border-white/20 text-white group-hover:border-gold group-hover:text-gold'
                  }`}>
                    <Plus size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
                  </div>
                </button>
                
                <div 
                  id={answerId}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 sm:p-5 md:p-8 pt-0 text-white font-light leading-relaxed text-sm sm:text-base md:text-lg">
                    {faq.answer}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        
      </div>
    </section>
  );
}
