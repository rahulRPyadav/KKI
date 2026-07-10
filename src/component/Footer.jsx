import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin,    } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pages', path: '/pages' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-[#1c1613] text-[#F4F1EA] pt-16 pb-8 px-6 md:px-12 lg:px-24 border-t border-[#3d2f26] font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-[#3d2f26]/60">
        
        {/* --- COLUMN 1: BRAND LOGO & BIO (4 Cols) --- */}
        <div className="lg:col-span-4 space-y-5">
          <div className="text-xl md:text-2xl font-serif tracking-[0.2em] text-[#F4F1EA]">
            RL<span className="italic text-amber-500 font-light">.interior</span>
          </div>
          <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
            Bespoke architecture and interior design studio crafting timeless spaces. From foundational structures to intricate timber joinery, we execute perfection.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 pt-2">
           
          
           
          </div>
        </div>

        {/* --- COLUMN 2: QUICK NAVIGATION LINKS (2 Cols) --- */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">Navigation</h4>
          <ul className="space-y-2.5 text-xs font-light text-stone-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `hover:text-[#F4F1EA] transition-colors duration-200 block ${isActive ? "text-amber-500 font-medium" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* --- COLUMN 3: CONTACT INFORMATION (3 Cols) --- */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">Get In Touch</h4>
          <ul className="space-y-3.5 text-xs font-light text-stone-400">
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#F4F1EA] transition-colors leading-relaxed"
              >
                855F, Sector-51, Gurugram, Haryana, India
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-amber-500 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-[#F4F1EA] transition-colors">
              +91-9910889575 | +91- 9990395992
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-amber-500 shrink-0" />
              <a href="mailto:info@studioelegance.com" className="hover:text-[#F4F1EA] transition-colors">
                rlinterior2014@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* --- COLUMN 4: GOOGLE MAP EMBED SECTION (3 Cols) --- */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">Our Location</h4>
          <div className="w-full h-32 bg-[#2c221e] border border-[#3d2f26] rounded-xs overflow-hidden relative shadow-md group">
            {/* Real Google Map iFrame (Aap apna src embed link badal sakte hain) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.735235552393!2d77.06889985!3d28.458298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1s0x390d18e3e467d583%3A0x6e9f65342a344d9f!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="w-full h-full opacity-60 group-hover:opacity-90 transition-opacity duration-300 grayscale invert contrast-125"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location Map"
            />
          </div>
        </div>

      </div>

      {/* --- SUB-FOOTER: COPYRIGHT --- */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-500 tracking-wider">
        <p>&copy; {currentYear} STUDIO.ELEGANCE / R.L. Interior. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 font-serif italic text-stone-400">Crafted with architectural precision.</p>
      </div>
    </footer>
  );
}