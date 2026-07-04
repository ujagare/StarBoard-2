import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-deepblue text-white pt-24 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            {/* Logo with Text - Same as Navbar */}
            <div className="flex items-center gap-3 cursor-pointer bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md border border-gray-200 w-fit">
              <Image 
                src="/images/New logo.png" 
                alt="Starboard Realtors Logo" 
                width={80} 
                height={80} 
                className="h-12 w-auto object-contain"
              />
              <div className="h-12 w-px bg-gold/60"></div>
              <div className="flex flex-col justify-center -space-y-1">
                <span className="text-3xl tracking-wide leading-none text-deepblue" style={{ fontFamily: "'Microsoft Himalaya', serif" }}>
                  STARBOARD
                </span>
                <span className="text-2xl tracking-wide leading-none text-deepblue" style={{ fontFamily: "'Microsoft Himalaya', serif" }}>
                  REALTORS
                </span>
              </div>
            </div>
            <p className="text-gray-400 font-light text-sm max-w-xs leading-relaxed">
              Curating exceptional spaces. A boutique real estate advisory firm specializing in commercial real estate, retail spaces, investment opportunities, and luxury residential properties across Pune.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://wa.me/message/DSNUILFNWD23N1" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-deepblue hover:bg-gold hover:border-gold transition-all" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.linkedin.com/company/starboard-realtors/" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-deepblue hover:bg-gold hover:border-gold transition-all" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://www.instagram.com/starboardrealtors" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-deepblue hover:bg-gold hover:border-gold transition-all" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com/@starboardrealtors2646" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-deepblue hover:bg-gold hover:border-gold transition-all" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">Commercial Leasing</a></li>
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">Commercial Sales</a></li>
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">Retail Leasing</a></li>
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">Investment Advisory</a></li>
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">Luxury Residential Sales</a></li>
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">Property Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">About Us</a></li>
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">Founder&apos;s Word</a></li>
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">Key Achievements</a></li>
              <li><a href="#" className="hover:text-gold hover:pl-2 transition-all">Featured Properties</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li>201, 2nd Floor, Nandan Aspira</li>
              <li>Opp. Ankura Hospital, Nagras Road</li>
              <li>Aundh, Pune – 411007</li>
              <li className="pt-2 text-white">Mobile: <a href="tel:+919769494723" className="hover:text-gold">+91 9769494723</a></li>
              <li className="text-white">Email: <a href="mailto:connect@starboardrealtors.co.in" className="hover:text-gold">connect@starboardrealtors.co.in</a></li>
              <li className="pt-2">Working Hours: 9:00 AM – 7:00 PM</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 tracking-wider">
          <p>&copy; 2024 Starboard Realtors. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center uppercase">
            <span>MahaRERA: A52100030663</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>GST: 27BUSPR1519J1Z1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
