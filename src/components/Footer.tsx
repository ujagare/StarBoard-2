import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-deepblue text-white pt-24 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="space-y-6">
            {/* Logo with Text - Same as Navbar */}
            <div className="flex items-center">
              <Image
                src="/images/SR_Blue BG_logo.jpg (1).png"
                alt="Starboard Realtors Logo"
                width={160}
                height={160}
                className="h-20 md:h-24 w-auto object-contain"
              />
              <div className="-ml-3 flex items-center" style={{ transform: 'translateX(-5px)' }}>
                <div className="h-12 md:h-14 w-px bg-gold/60"></div>
              </div>
              <div className="flex flex-col justify-center space-y-0.5 md:space-y-0 md:-space-y-1 lg:-space-y-1.5">
                <span className="text-xl md:text-2xl lg:text-3xl tracking-wide leading-none text-white" style={{ fontFamily: "'Microsoft Himalaya', serif" }}>
                  STARBOARD
                </span>
                <span className="text-lg md:text-xl lg:text-2xl tracking-wide leading-none text-white" style={{ fontFamily: "'Microsoft Himalaya', serif" }}>
                  REALTORS
                </span>
              </div>
            </div>
            <p className="text-gray-400 font-light text-sm max-w-xs leading-relaxed">
              Curating exceptional spaces. A boutique real estate advisory firm specializing in commercial real estate, retail spaces, investment opportunities, and luxury residential properties across Pune.
            </p>
            <nav aria-label="Footer social links">
            <ul className="flex gap-4 pt-2">
              <li><a href="https://wa.me/message/DSNUILFNWD23N1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-deepblue hover:bg-gold hover:border-gold transition-all" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a></li>
              <li><a href="https://www.linkedin.com/company/starboard-realtors/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-deepblue hover:bg-gold hover:border-gold transition-all" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a></li>
              <li><a href="https://www.instagram.com/starboardrealtors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-deepblue hover:bg-gold hover:border-gold transition-all" aria-label="Instagram">
                <FaInstagram size={20} />
              </a></li>
              <li><a href="https://youtube.com/@starboardrealtors2646" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-deepblue hover:bg-gold hover:border-gold transition-all" aria-label="YouTube">
                <FaYoutube size={20} />
              </a></li>
            </ul>
            </nav>
          </div>

          <nav aria-label="Footer services">
            <p className="font-serif text-xl mb-6 text-gold">Services</p>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#services" className="hover:text-gold hover:pl-2 transition-all">Luxury Residential Sales</a></li>
              <li><a href="#services" className="hover:text-gold hover:pl-2 transition-all">Commercial Sales</a></li>
              <li><a href="#services" className="hover:text-gold hover:pl-2 transition-all">Commercial Leasing</a></li>
              <li><a href="#services" className="hover:text-gold hover:pl-2 transition-all">Retail Leasing</a></li>
              <li><a href="#services" className="hover:text-gold hover:pl-2 transition-all">Investment Advisory</a></li>
              <li><a href="#services" className="hover:text-gold hover:pl-2 transition-all">Property Consulting</a></li>
            </ul>
          </nav>

          <nav aria-label="Footer quick links">
            <p className="font-serif text-xl mb-6 text-gold">Quick Links</p>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#about" className="hover:text-gold hover:pl-2 transition-all">About Us</a></li>
              <li><a href="#founder" className="hover:text-gold hover:pl-2 transition-all">Founder&apos;s Word</a></li>
              <li><a href="#why-choose-us" className="hover:text-gold hover:pl-2 transition-all">Why Choose Us</a></li>
              <li><a href="#achievements" className="hover:text-gold hover:pl-2 transition-all">Key Achievements</a></li>
              <li><a href="#properties" className="hover:text-gold hover:pl-2 transition-all">Featured Properties</a></li>
            </ul>
          </nav>

          <address className="not-italic">
            <p className="font-serif text-xl mb-6 text-gold">Contact</p>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li>201, Raichandani Galaxy</li>
              <li>Beside Croma Store, Baner</li>
              <li>Pune – 411045</li>
              <li className="pt-2 text-white">Mobile: <a href="tel:+919769494723" className="hover:text-gold">+91 9769494723</a></li>
              <li className="text-white">Email: <a href="mailto:connect@starboardrealtors.co.in" className="hover:text-gold">connect@starboardrealtors.co.in</a></li>
              <li className="pt-2">Working Hours: 9:00 AM – 7:00 PM</li>
            </ul>
          </address>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 tracking-wider">
          <p>&copy; 2026 Starboard Realtors. All rights reserved.</p>
          <ul className="flex flex-col sm:flex-row gap-4 items-center uppercase">
            <li>MahaRERA: A52100030663</li>
            <li aria-hidden="true" className="hidden sm:inline text-white/20">|</li>
            <li>GST: 27BUSPR1519J1Z1</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
