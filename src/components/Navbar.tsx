"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        suppressHydrationWarning
        aria-label="Primary navigation"
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b ${
          menuOpen 
            ? "bg-transparent border-transparent text-white" 
            : scrolled
              ? "bg-white backdrop-blur-lg shadow-xl text-deepblue border-gray-200"
              : "bg-white/95 backdrop-blur-sm text-deepblue border-gray-200 shadow-md"
        }`}
      >
        <div className="w-full px-3 sm:px-6 md:px-8 flex justify-between items-center py-4">
          
          {/* Left: Logo with Text */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link href="/" className="flex items-center group z-50">
              <Image 
                src="/images/New logo.webp" 
                alt="Starboard Realtors Logo" 
                width={80} 
                height={80} 
                preload
                className={`h-10 md:h-12 w-auto object-contain transition-all duration-500 ${
                  scrolled && !menuOpen ? 'scale-90' : 'scale-100'
                } ${menuOpen ? 'brightness-0 invert' : ''}`}
              />
            </Link>
            <div className={`h-10 md:h-12 w-px transition-colors duration-500 ${menuOpen ? 'bg-gold/40' : 'bg-gold/60'}`}></div>
            <div className="flex flex-col justify-center space-y-0.5 md:space-y-0 md:-space-y-1 lg:-space-y-1.5 z-50">
              <span className={`text-xl md:text-2xl lg:text-3xl tracking-wide leading-none transition-colors duration-500 ${menuOpen ? 'text-white' : 'text-deepblue'}`} style={{ fontFamily: "'Microsoft Himalaya', serif" }}>
                STARBOARD
              </span>
              <span className={`text-lg md:text-xl lg:text-2xl tracking-wide leading-none transition-colors duration-500 ${menuOpen ? 'text-white' : 'text-deepblue'}`} style={{ fontFamily: "'Microsoft Himalaya', serif" }}>
                REALTORS
              </span>
            </div>
          </div>

          {/* Right: WhatsApp Icon & Hamburger Menu */}
          <div className="flex items-center gap-4 md:gap-8 z-50 flex-shrink-0">
            {/* WhatsApp Icon - Hidden on Mobile */}
            <a
              href="https://wa.me/919769494723"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 group ${
                menuOpen 
                  ? 'border-white/30 hover:border-white hover:bg-white' 
                  : 'border-deepblue hover:bg-deepblue'
              }`}
              aria-label="WhatsApp"
            >
              <svg
                className={`w-5 h-5 transition-colors duration-300 ${
                  menuOpen 
                    ? 'fill-white group-hover:fill-deepblue' 
                    : 'fill-deepblue group-hover:fill-white'
                }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center w-12 h-12 hover:opacity-70 transition-opacity z-50 relative flex-shrink-0"
              aria-label="Toggle Menu"
            >
              <span className={`w-8 h-[2px] absolute transition-all duration-300 ${
                menuOpen ? 'bg-white rotate-45' : 'bg-deepblue translate-y-[-3px]'
              }`}></span>
              <span className={`w-8 h-[2px] absolute transition-all duration-300 ${
                menuOpen ? 'bg-white -rotate-45' : 'bg-deepblue translate-y-[3px]'
              }`}></span>
            </button>
          </div>

        </div>
      </nav>

      {/* Premium Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0F1C2D] z-40 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Background glow for luxury feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(207,168,95,0.05)_0%,transparent_70%)] pointer-events-none" />

        <nav aria-label="Expanded navigation" className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 pt-12 md:pt-0">
        <ul className="flex flex-col items-start space-y-4 sm:space-y-6 md:space-y-8">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "#about" },
            { name: "Premium Services", href: "#services" },
            { name: "Featured Properties", href: "#properties" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Contact", href: "#contact" }
          ].map((item, i) => (
            <li key={i} className={`overflow-hidden w-full`}>
              <a 
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white hover:text-gold transition-all duration-500 uppercase tracking-[0.1em] relative group ${
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: `${menuOpen ? 300 + (i * 100) : 0}ms` }}
              >
                <span className="w-0 h-[2px] bg-gold mr-0 transition-all duration-500 group-hover:w-8 sm:group-hover:w-12 group-hover:mr-4 sm:group-hover:mr-6 ease-out"></span>
                <span className="leading-tight">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
        </nav>

        {/* Social Media Icons Footer in Menu */}
        <div 
          className={`absolute bottom-8 md:bottom-12 left-0 w-full px-8 md:px-16 flex justify-center items-center border-t border-white/10 pt-6 transition-all duration-1000 ${
            menuOpen ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-10'
          }`}
        >
          <nav aria-label="Social links">
          <ul className="flex gap-4">
            <li><a href="https://wa.me/message/DSNUILFNWD23N1" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold hover:border-gold transition-all" aria-label="WhatsApp">
              <FaWhatsapp size={18} />
            </a></li>
            <li><a href="https://www.linkedin.com/company/starboard-realtors/" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold hover:border-gold transition-all" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a></li>
            <li><a href="https://www.instagram.com/starboardrealtors" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold hover:border-gold transition-all" aria-label="Instagram">
              <FaInstagram size={18} />
            </a></li>
            <li><a href="https://youtube.com/@starboardrealtors2646" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold hover:border-gold transition-all" aria-label="YouTube">
              <FaYoutube size={18} />
            </a></li>
          </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
