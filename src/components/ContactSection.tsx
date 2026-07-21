"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Submit form data
    fetch("https://formsubmit.co/ajax/connect@starboardrealtors.co.in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    }).catch(() => {});

    form.reset();
  };

  return (
    <section id="contact" className="bg-offwhite py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-7xl text-gold mb-8 uppercase tracking-normal leading-tight">
            <AnimatedText text="Get In Touch" />
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full mt-4">
            <fieldset className="space-y-6">
              <legend className="sr-only">Real estate inquiry details</legend>
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full relative group">
                <input 
                  type="text"
                  placeholder="First Name*"
                  required
                  autoComplete="given-name"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-deepblue placeholder:text-gray-400 text-sm peer"
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></span>
              </div>
              <div className="w-full relative group">
                <input 
                  type="text"
                  placeholder="Last Name*"
                  required
                  autoComplete="family-name"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-deepblue placeholder:text-gray-400 text-sm peer"
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></span>
              </div>
            </div>

            {/* Phone Field */}
            <div className="flex items-end border-b border-gray-300 focus-within:border-gold transition-colors relative group">
              <div className="flex items-center pb-3 pr-3 text-gray-500 font-light shrink-0 text-sm border-r border-gray-200 mr-3">
                <span className="mr-2">🇮🇳</span>
                <span>+91</span>
              </div>
              <input 
                type="tel"
                placeholder="Phone Number*"
                required
                autoComplete="tel-national"
                className="w-full px-0 py-3 bg-transparent border-0 focus:outline-none font-light text-deepblue placeholder:text-gray-400 text-sm peer"
              />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></span>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <input 
                type="email"
                placeholder="Email*"
                required
                autoComplete="email"
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-deepblue placeholder:text-gray-400 text-sm peer"
              />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></span>
            </div>

            {/* Select City/Nationality */}
            <div className="relative group">
              <select defaultValue="" className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-gray-400 appearance-none cursor-pointer text-sm peer">
                <option value="" disabled>Select Preferred Location*</option>
                <option value="koregaon-park" className="text-gray-700">Koregaon Park</option>
                <option value="kalyani-nagar" className="text-gray-700">Kalyani Nagar</option>
                <option value="baner" className="text-gray-700">Baner</option>
                <option value="balewadi" className="text-gray-700">Balewadi</option>
                <option value="aundh" className="text-gray-700">Aundh</option>
                <option value="kharadi" className="text-gray-700">Kharadi</option>
                <option value="viman-nagar" className="text-gray-700">Viman Nagar</option>
                <option value="senapati-bapat-road" className="text-gray-700">Senapati Bapat Road</option>
                <option value="shivajinagar" className="text-gray-700">Shivajinagar</option>
                <option value="hadapsar" className="text-gray-700">Hadapsar</option>
                <option value="magarpatta" className="text-gray-700">Magarpatta</option>
                <option value="other" className="text-gray-700">Other</option>
              </select>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-500 peer-focus:w-full"></span>
            </div>

            {/* Disclaimer */}
            <p className="text-[10px] text-gray-400 font-light leading-relaxed mt-4">
              Disclaimer: Starboard Realtors values your privacy and will use the contact information you provide solely for communicating with you about our real estate advisory services. By clicking submit, you consent to our team contacting you via phone calls, emails, and WhatsApp.
            </p>

            {/* Submit Button */}
            <button 
              type="submit"
              className="group relative inline-flex items-center justify-center w-full mt-6 px-8 py-4 bg-transparent border border-gold text-gold font-semibold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:text-white"
            >
              <span className="absolute inset-0 w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10">Submit Inquiry</span>
            </button>
            </fieldset>
          </form>
        </div>

        {/* Right Side: Image */}
        <div 
          ref={imageRef}
          className="w-full lg:w-1/2 relative h-100 lg:h-125 xl:h-175 rounded-sm overflow-hidden"
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        >
          <Image
            src="/images/Services/contact.webp"
            alt="Starboard Realtors premium property consultation"
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
