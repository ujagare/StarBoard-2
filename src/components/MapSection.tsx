"use client";

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const MapComponent = useMemo(
    () =>
      dynamic(() => import('@/components/MapComponent'), {
        loading: () => (
          <div className="w-full h-full flex items-center justify-center bg-[#0F1C2D]">
            <div className="text-gold font-serif text-lg tracking-widest animate-pulse">Loading Map...</div>
          </div>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <section className="w-full py-16 lg:py-24 bg-[#0F1C2D] relative border-t border-white/10 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-[500px] md:h-[600px]">
        
        {/* The Map itself */}
        <div className="w-full h-full rounded-md overflow-hidden relative shadow-2xl border-2 border-[#CFA85F]">
          
          {/* Deep Blue Tint Overlay */}
          <div className="absolute inset-0 bg-[#0F1C2D] mix-blend-screen pointer-events-none z-[400]" />
          
          <MapComponent />
          
          {/* Custom Overlay Popup - Guaranteed to show */}
          {isPopupOpen && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2000] w-[300px]">
              <div className="bg-[#FAF8F5] p-6 rounded-md shadow-2xl relative border border-[#CFA85F]/30 font-sans">
                
                {/* Top Right Small Close Icon */}
                <div 
                  className="absolute top-3 right-3 cursor-pointer text-[#0F1C2D]/40 hover:text-[#0F1C2D] transition-colors" 
                  onClick={() => setIsPopupOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </div>
                
                <h3 className="font-serif text-lg text-[#0F1C2D] font-bold uppercase tracking-[0.15em] mb-4 pr-4 leading-snug">
                  Starboard<br/>Realtors
                </h3>
                
                <p className="text-xs text-[#0F1C2D]/80 font-light leading-relaxed mb-6">
                  201, 2nd Floor, Nandan Aspira,<br />
                  Opp. Ankura Hospital, Nagras<br />
                  Road, Aundh, Pune - 411007
                </p>
                
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://www.google.com/maps/place/Block-D,+NANDAN+ASPIRA,+Ward+No.+8,+Aundh,+Pune,+Maharashtra+411067/@18.5657012,73.8052173,267m/data=!3m1!1e3!4m6!3m5!1s0x3bc2bf2de1b6c84b:0x11e5984cfb22dc85!8m2!3d18.5658104!4d73.8053755!16s%2Fg%2F11w7q6c251?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 border border-[#CFA85F]/50 text-[#8C6D31] hover:text-[#0F1C2D] hover:border-[#0F1C2D] py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-sm bg-transparent"
                  >
                    Get Directions
                    <MapPin size={12} strokeWidth={2} />
                  </a>
                  
                  <button 
                    onClick={() => setIsPopupOpen(false)}
                    className="w-full flex items-center justify-center border border-[#CFA85F]/50 text-[#8C6D31] hover:text-[#0F1C2D] hover:border-[#0F1C2D] py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-sm bg-transparent"
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
