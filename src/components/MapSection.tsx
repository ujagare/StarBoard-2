"use client";

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { MapPin } from 'lucide-react';

const DynamicMapComponent = dynamic(() => import('@/components/MapComponent'), {
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0F1C2D]">
      <div className="text-gold font-serif text-lg tracking-widest animate-pulse">Loading Map...</div>
    </div>
  ),
  ssr: false,
});

export default function MapSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <section className="w-full py-16 lg:py-24 bg-[#0F1C2D] relative border-t border-white/10 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-125 md:h-150">
        
        {/* The Map itself */}
        <div className="w-full h-full rounded-md overflow-hidden relative shadow-2xl border-2 border-[#CFA85F]">
          
          {/* Deep Blue Tint Overlay */}
          <div className="absolute inset-0 bg-[#0F1C2D] mix-blend-screen pointer-events-none z-[400]" />
          
          <DynamicMapComponent />
          
          {/* Custom Overlay Popup - Guaranteed to show */}
          {isPopupOpen && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2000] w-[260px] sm:w-[300px]">
              <div className="bg-[#FAF8F5] p-4 sm:p-6 rounded-md shadow-2xl relative border border-[#CFA85F]/30 font-sans">
                
                {/* Top Right Small Close Icon */}
                <div 
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 cursor-pointer text-[#0F1C2D]/40 hover:text-[#0F1C2D] transition-colors" 
                  onClick={() => setIsPopupOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="sm:w-[14px] sm:h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </div>
                
                <div className="text-[#0F1C2D] mb-3 sm:mb-4 pr-4">
                  <span className="block text-2xl sm:text-3xl tracking-wide leading-none" style={{ fontFamily: "'Microsoft Himalaya', serif" }}>STARBOARD</span>
                  <span className="block text-xl sm:text-2xl tracking-wide leading-none" style={{ fontFamily: "'Microsoft Himalaya', serif" }}>REALTORS</span>
                </div>
                
                <p className="text-[10px] sm:text-xs text-[#0F1C2D]/80 font-light leading-relaxed mb-4 sm:mb-6">
                  201, Raichandani Galaxy,<br />
                  Beside Croma Store, Baner,<br />
                  Pune - 411045
                </p>
                
                <div className="flex flex-col gap-2 sm:gap-3">
                  <a
                    href="https://maps.app.goo.gl/sSWefgKmva8Z8GBr9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 border border-[#CFA85F]/50 text-[#8C6D31] hover:text-[#0F1C2D] hover:border-[#0F1C2D] py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-sm bg-transparent"
                  >
                    Get Directions (Baner)
                    <MapPin size={12} strokeWidth={2} />
                  </a>
                  
                  <button 
                    onClick={() => setIsPopupOpen(false)}
                    className="w-full flex items-center justify-center border border-[#CFA85F]/50 text-[#8C6D31] hover:text-[#0F1C2D] hover:border-[#0F1C2D] py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-sm bg-transparent"
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
