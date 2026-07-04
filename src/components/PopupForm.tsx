"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import gsap from "gsap";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed inset-0 z-[50000] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={handleClose}
      />
      
      {/* Modal Box */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#0F1C2D] border border-[#CFA85F]/30 rounded-xl shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/50 hover:text-[#CFA85F] transition-colors duration-300 z-10"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8 sm:p-10">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">Register Interest</h3>
            <p className="text-sm md:text-base text-gray-300">Experience premium living with Starboard Realtors.</p>
          </div>

          <form className="space-y-6 flex flex-col">
            <div className="relative group">
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#CFA85F] outline-none py-3 px-1 text-white placeholder-transparent peer transition-colors duration-300"
                placeholder="Name"
                id="popup-name"
              />
              <label 
                htmlFor="popup-name" 
                className="absolute left-1 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#CFA85F] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-[#CFA85F]"
              >
                Full Name
              </label>
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#CFA85F] transition-all duration-500 peer-focus:w-full" />
            </div>

            <div className="relative group">
              <input 
                type="tel" 
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#CFA85F] outline-none py-3 px-1 text-white placeholder-transparent peer transition-colors duration-300"
                placeholder="Phone"
                id="popup-phone"
              />
              <label 
                htmlFor="popup-phone" 
                className="absolute left-1 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#CFA85F] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-[#CFA85F]"
              >
                Phone Number
              </label>
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#CFA85F] transition-all duration-500 peer-focus:w-full" />
            </div>

            <div className="relative group">
              <input 
                type="email" 
                required
                className="w-full bg-transparent border-b border-gray-600 focus:border-[#CFA85F] outline-none py-3 px-1 text-white placeholder-transparent peer transition-colors duration-300"
                placeholder="Email"
                id="popup-email"
              />
              <label 
                htmlFor="popup-email" 
                className="absolute left-1 top-3 text-gray-400 text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#CFA85F] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-[#CFA85F]"
              >
                Email Address
              </label>
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#CFA85F] transition-all duration-500 peer-focus:w-full" />
            </div>

            <button 
              type="submit" 
              className="mt-4 relative overflow-hidden group border border-[#CFA85F] text-[#CFA85F] hover:text-[#0F1C2D] py-4 px-8 w-full uppercase tracking-[0.2em] text-sm font-semibold transition-colors duration-500"
            >
              <span className="relative z-10">Submit Inquiry</span>
              <div className="absolute inset-0 bg-[#CFA85F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
