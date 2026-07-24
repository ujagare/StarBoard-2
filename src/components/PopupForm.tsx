"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import gsap from "gsap";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState("Commercial");
  
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  // Auto-open after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setIsMounted(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (isOpen && backdropRef.current && modalRef.current) {
      // Open Animation
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.1 }
      );
      document.body.style.overflow = "hidden"; // Prevent scrolling when open
    }
  }, [isOpen]);

  const handleClose = () => {
    if (backdropRef.current && modalRef.current) {
      // Close Animation
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 0.4,
        ease: "power2.in"
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        delay: 0.1,
        onComplete: () => {
          setIsOpen(false);
          setIsMounted(false);
          document.body.style.overflow = ""; // Restore scrolling
        }
      });
    }
  };

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[50000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={handleClose}
      />
      
      {/* Modal Box */}
      <section 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-form-title"
        className="relative w-full max-w-lg bg-[#0F1C2D] border border-[#CFA85F]/30 rounded-xl shadow-2xl overflow-hidden my-auto"
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/50 hover:text-[#CFA85F] transition-colors duration-300 z-10 p-1"
          aria-label="Close form"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          <header className="text-center mb-6">
            <h3 id="popup-form-title" className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-2">Register Interest</h3>
            <p className="text-xs sm:text-sm text-gray-300">Experience premium real estate advisory with Starboard Realtors.</p>
          </header>

          <form className="space-y-5 flex flex-col" onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            fetch("https://formsubmit.co/ajax/connect@starboardrealtors.co.in", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(Object.fromEntries(formData.entries())),
            }).catch(() => {});
            form.reset();
            handleClose();
          }}>
            <fieldset className="space-y-5">
              <legend className="sr-only">Register your interest</legend>
              
              {/* Full Name */}
              <div className="relative group">
                <input 
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#CFA85F] outline-none py-2.5 px-1 text-white placeholder-transparent peer transition-colors duration-300 text-sm"
                  placeholder="Name"
                  id="popup-name"
                />
                <label 
                  htmlFor="popup-name" 
                  className="absolute left-1 top-2.5 text-gray-400 text-xs sm:text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#CFA85F] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-[#CFA85F]"
                >
                  Full Name*
                </label>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#CFA85F] transition-all duration-500 peer-focus:w-full" />
              </div>

              {/* Phone Number */}
              <div className="relative group">
                <input 
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel-national"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#CFA85F] outline-none py-2.5 px-1 text-white placeholder-transparent peer transition-colors duration-300 text-sm"
                  placeholder="Phone"
                  id="popup-phone"
                />
                <label 
                  htmlFor="popup-phone" 
                  className="absolute left-1 top-2.5 text-gray-400 text-xs sm:text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#CFA85F] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-[#CFA85F]"
                >
                  Phone Number*
                </label>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#CFA85F] transition-all duration-500 peer-focus:w-full" />
              </div>

              {/* Email Address */}
              <div className="relative group">
                <input 
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#CFA85F] outline-none py-2.5 px-1 text-white placeholder-transparent peer transition-colors duration-300 text-sm"
                  placeholder="Email"
                  id="popup-email"
                />
                <label 
                  htmlFor="popup-email" 
                  className="absolute left-1 top-2.5 text-gray-400 text-xs sm:text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#CFA85F] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-[#CFA85F]"
                >
                  Email Address*
                </label>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#CFA85F] transition-all duration-500 peer-focus:w-full" />
              </div>

              {/* Requirement / Property Type Selection */}
              <div className="space-y-2 pt-1">
                <label className="text-xs text-[#CFA85F] uppercase tracking-wider font-semibold block">
                  Requirement Type*
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Commercial", "Residential", "Retail", "Advisory"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedRequirement(type)}
                      className={`py-2 px-2 text-xs font-medium rounded transition-all duration-300 border text-center ${
                        selectedRequirement === type
                          ? "bg-[#CFA85F] text-[#0F1C2D] border-[#CFA85F] font-semibold shadow-md"
                          : "bg-transparent text-gray-300 border-gray-700 hover:border-[#CFA85F] hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="requirement" value={selectedRequirement} />
              </div>

              {/* Select Preferred Location */}
              <div className="relative group pt-1">
                <select 
                  name="location"
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#CFA85F] outline-none py-2.5 px-1 text-white text-sm cursor-pointer appearance-none transition-colors duration-300 [&>option]:bg-[#0F1C2D] [&>option]:text-white"
                  id="popup-location"
                >
                  <option value="" disabled>Select Preferred Location*</option>
                  <option value="Baner">Baner</option>
                  <option value="Balewadi">Balewadi</option>
                  <option value="Koregaon Park">Koregaon Park</option>
                  <option value="Kalyani Nagar">Kalyani Nagar</option>
                  <option value="Kharadi">Kharadi</option>
                  <option value="Viman Nagar">Viman Nagar</option>
                  <option value="Aundh">Aundh</option>
                  <option value="Senapati Bapat Road">Senapati Bapat Road</option>
                  <option value="Shivajinagar">Shivajinagar</option>
                  <option value="Magarpatta">Magarpatta</option>
                  <option value="Other Locations">Other Pune Locations</option>
                </select>
                <div className="absolute right-2 top-3 pointer-events-none text-gray-400 text-xs">
                  ▼
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#CFA85F] transition-all duration-500 peer-focus:w-full" />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="mt-4 relative overflow-hidden group border border-[#CFA85F] text-[#CFA85F] hover:text-[#0F1C2D] py-3.5 px-8 w-full uppercase tracking-[0.08em] text-sm font-semibold transition-colors duration-500 rounded-sm"
              >
                <span className="relative z-10">Submit Inquiry</span>
                <div className="absolute inset-0 bg-[#CFA85F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  );
}
