import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // User ke click karne ke liye original link
  const myGoogleMapLink = "https://www.google.com/maps/place/855,+Sector+51,+Gurugram,+Haryana+122018/@28.432401,77.06171,614m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d188442b0dcc9:0x642bc5a1d851954d!8m2!3d28.4323963!4d77.0642849!16s%2Fg%2F11vyx818lx?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";

  // Iframe ke andar real map show karne ke liye official EMBED URL
  const iframeEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3496081515254!2d77.06171007632688!3d28.432400975774304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d188442b0dcc9%3A0x642bc5a1d851954d!2s855%2C%20Sector%2051%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pages', path: '/pages' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/your_username",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/your_page",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/your_profile",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      )
    }
  ];

  return (
    <footer className="bg-[#1c1613] text-[#F4F1EA] pt-16 pb-8 px-6 md:px-12 lg:px-24 border-t border-[#3d2f26] font-sans select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-[#3d2f26]/60">
        
        {/* Brand Column */}
        <div data-aos="fade-right" className="lg:col-span-4 space-y-5">
          <div className="text-xl md:text-2xl font-serif tracking-[0.2em] text-[#F4F1EA]">
            RL<span className="italic text-amber-500 font-light">.interior</span>
          </div>
          <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
            Bespoke architecture and interior design studio crafting timeless spaces. From foundational structures to intricate timber joinery, we execute perfection.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-3 pt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2.5 bg-[#2c221e] border border-[#3d2f26] text-amber-500/80 rounded-full transition-all duration-300 hover:bg-amber-600 hover:text-[#1c1613] hover:border-amber-500 hover:scale-110 cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links Column */}
        <div data-aos="fade-up" className="lg:col-span-2 space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">Navigation</h4>
          <ul className="space-y-3 text-xs font-light text-stone-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `transition-all duration-300 relative py-0.5 block hover:text-[#F4F1EA] group ${
                      isActive ? "text-amber-500 font-medium" : ""
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500/60 transition-all duration-300 group-hover:w-16" />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Get In Touch Column */}
        <div data-aos="fade-up" className="lg:col-span-3 space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">Get In Touch</h4>
          <ul className="space-y-4 text-xs font-light text-stone-400">
            <li className="flex items-start space-x-3 group">
              <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <a 
                href={myGoogleMapLink} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-amber-400 transition-colors leading-relaxed cursor-pointer"
              >
                855, Sector-51, Gurugram, Haryana, India
              </a>
            </li>
            <li className="flex items-center space-x-3 group">
              <Phone size={16} className="text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col space-y-1">
                <a href="tel:+919910889575" className="hover:text-amber-400 transition-colors cursor-pointer">
                  +91-9910889575
                </a>
                <a href="tel:+919990395992" className="hover:text-amber-400 transition-colors cursor-pointer">
                  +91-9990395992
                </a>
              </div>
            </li>
            <li className="flex items-center space-x-3 group">
              <Mail size={16} className="text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
              <a href="mailto:rlinterior2014@gmail.com" className="hover:text-amber-400 transition-colors cursor-pointer">
                rlinterior2014@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Fixed Live Location Map Column */}
        <div data-aos="fade-left" className="lg:col-span-3 space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">Our Location</h4>
          <a 
            href={myGoogleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-32 bg-[#2c221e] border border-[#3d2f26] rounded-sm overflow-hidden relative shadow-lg group block cursor-pointer"
          >
            <iframe
              src={iframeEmbedSrc}
              className="w-full h-full opacity-50 group-hover:opacity-100 transition-all duration-500 grayscale invert contrast-125 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100 pointer-events-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location Map"
            />
            <div className="absolute inset-0 border border-amber-600/0 group-hover:border-amber-600/20 pointer-events-none transition-all duration-500" />
          </a>
        </div>

      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-500 tracking-wider">
        <p>© {currentYear} R.L. Interior. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 font-serif italic text-stone-400">Made With ❤️ By RP Yadav</p>
      </div>
    </footer>
  );
}