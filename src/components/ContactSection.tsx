"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import { CheckCircle2 } from "lucide-react";

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
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="bg-offwhite py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-8 uppercase tracking-widest">
            <AnimatedText text="Get In Touch" />
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full mt-4">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full relative group">
                <input 
                  type="text" 
                  placeholder="First Name*" 
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-deepblue placeholder:text-gray-400 text-sm peer"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 peer-focus:w-full"></span>
              </div>
              <div className="w-full relative group">
                <input 
                  type="text" 
                  placeholder="Last Name*" 
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-deepblue placeholder:text-gray-400 text-sm peer"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 peer-focus:w-full"></span>
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
                className="w-full px-0 py-3 bg-transparent border-0 focus:outline-none font-light text-deepblue placeholder:text-gray-400 text-sm peer"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 peer-focus:w-full"></span>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email*" 
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-deepblue placeholder:text-gray-400 text-sm peer"
              />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 peer-focus:w-full"></span>
            </div>

            {/* Select Budget */}
            <div className="relative group">
              <select defaultValue="" className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-gray-400 appearance-none cursor-pointer text-sm peer">
                <option value="" disabled>Select a Budget*</option>
                <option value="1-5cr" className="text-gray-700">₹1 Cr - ₹5 Cr</option>
                <option value="5-10cr" className="text-gray-700">₹5 Cr - ₹10 Cr</option>
                <option value="10cr+" className="text-gray-700">₹10 Cr +</option>
              </select>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 peer-focus:w-full"></span>
            </div>

            {/* Select Unit Type */}
            <div className="relative group">
              <select defaultValue="" className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-gray-400 appearance-none cursor-pointer text-sm peer">
                <option value="" disabled>Select Unit Type*</option>
                <option value="commercial" className="text-gray-700">Commercial Office Space</option>
                <option value="retail" className="text-gray-700">Retail Space</option>
                <option value="residential" className="text-gray-700">Luxury Residential (4BHK+)</option>
              </select>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 peer-focus:w-full"></span>
            </div>

            {/* Purchase Timeline */}
            <div className="relative group">
              <select defaultValue="" className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-gray-400 appearance-none cursor-pointer text-sm peer">
                <option value="" disabled>Purchase Timeline*</option>
                <option value="immediate" className="text-gray-700">Immediate</option>
                <option value="1-3-months" className="text-gray-700">1 to 3 Months</option>
                <option value="3-6-months" className="text-gray-700">3 to 6 Months</option>
                <option value="6-months+" className="text-gray-700">6 Months +</option>
              </select>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 peer-focus:w-full"></span>
            </div>

            {/* Select City/Nationality */}
            <div className="relative group">
              <select defaultValue="" className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gold transition-colors font-light text-gray-400 appearance-none cursor-pointer text-sm peer">
                <option value="" disabled>Select City*</option>
                <option value="pune" className="text-gray-700">Pune</option>
                <option value="mumbai" className="text-gray-700">Mumbai</option>
                <option value="other" className="text-gray-700">Other</option>
              </select>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 peer-focus:w-full"></span>
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
          </form>
        </div>

        {/* Right Side: Image */}
        <div 
          ref={imageRef}
          className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] xl:h-[700px] rounded-sm overflow-hidden"
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        >
          <Image
            src="/images/Services/contact.png"
            alt="Starboard Realtors Premium Properties"
            fill
            quality={100}
            unoptimized
            className="object-cover"
          />
        </div>

      </div>
      </div>
    </section>
  );
}
