"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

const properties = [
  {
    name: "Panchshil – 57 Avenue",
    location: "Mundhwa",
    details: "6.5 Acre Parcel | 4 Premium Towers",
    image: "/images/FEATURED OPPORTUNITIES/Panchashil1.webp",
    pdf: "#" // No specific PDF provided
  },
  {
    name: "The Balmoral Hillside",
    location: "Baner",
    details: "5 Acre Development | 2 Exclusive Towers",
    image: "/images/FEATURED OPPORTUNITIES/Kasturi1.webp",
    pdf: "/images/PDF/The Balmoral Hillside Brochure Tower A & B.pdf"
  },
  {
    name: "Malpani R-Ramanujan",
    location: "Main Baner Road",
    details: "Grade A Commercial | 18,000 Sq.Ft. Floor",
    image: "/images/FEATURED OPPORTUNITIES/Malpani.webp",
    pdf: "/images/PDF/M-RAMANUJAN - Brochure.pdf"
  },
  {
    name: "7 Modibaug",
    location: "Shivajinagar",
    details: "Exclusive 4 BHK Residences",
    image: "/images/FEATURED OPPORTUNITIES/Suma Shilpa.webp",
    pdf: "/images/PDF/7 Modibaug Brochure_03 Digital.pdf"
  },
  {
    name: "JAYKA",
    location: "Baner",
    details: "Grade A+ Commercial Icon | 109m Height",
    image: "/images/FEATURED OPPORTUNITIES/Jayaka.webp",
    pdf: "/images/PDF/JST  E brochure.pdf"
  },
  {
    name: "Amar Oasis",
    location: "Baner – Pashan Link Road",
    details: "Ultra Luxury Twin Tower Development",
    image: "/images/FEATURED OPPORTUNITIES/Amar.webp",
    pdf: "/images/PDF/Amar Oasis Digital Brochure (Tower B).pdf"
  }
];

export default function FeaturedProperties() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || cardsRef.current.length === 0) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger && cardsRef.current.includes(trigger.vars.trigger as HTMLElement)) {
        trigger.kill();
      }
    });

    // Animate each card
    const cards = cardsRef.current;

    cards.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger && cards.includes(trigger.vars.trigger as HTMLElement)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="properties" ref={sectionRef} className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-7xl text-deepblue md:whitespace-nowrap leading-tight tracking-normal">
            <AnimatedText text="Featured" /> <span className="text-gold"><AnimatedText text="Properties" /></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <article
              key={index} 
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group"
            >
              <a
                href={property.pdf}
                download={property.pdf !== "#" ? true : undefined}
                target={property.pdf !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                 <div className="relative h-125 md:h-137.5 w-full overflow-hidden rounded-sm mb-6 shadow-md group-hover:shadow-xl transition-shadow duration-500">
                   <Image
                     src={property.image}
                     alt={`${property.name} premium property in ${property.location}`}
                     fill
                     quality={82}
                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                 </div>
                 <div className="border-l-2 border-gold pl-4">
                   <p className="text-[10px] sm:text-xs text-gold uppercase tracking-[0.2em] font-semibold mb-1">
                     {property.location}
                   </p>
                   <h3 className="font-serif text-2xl text-deepblue mb-1 group-hover:text-gold transition-colors">
                     {property.name}
                   </h3>
                   <p className="text-sm tracking-wide text-gray-500 font-light">
                     {property.details}
                   </p>
                 </div>
              </a>
            </article>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}
