import { useState, useEffect, useRef } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { Phone, MessageCircle, Smartphone } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from "./assets/rl-logo.png";

import Home from './component/Home';
import AboutUs from './component/About';
import Footer from './component/Footer';
import Services from "./component/Services";
import Projects from "./component/Projects";
import ContactUs from "./component/ContactUs";
import Blog from "./component/Blog";
import Faq from "./component/Faq";
import Testimonial from "./component/Testimonial";



import ScrollToTop from './component/ScrollToTop';
import "./App.css";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  
  const [globalCallModal, setGlobalCallModal] = useState(false);
  
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPagesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const pageSubItems = [
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Testimonials', path: '/testimonial' }
  ];

  const triggerGlobalWhatsApp = () => {
    const primaryNumber = "919910889575";
    const message = encodeURIComponent("Hello R.L. Interior team, I would like to book a luxury interior design consultation call.");
    window.open(`https://wa.me/${primaryNumber}?text=${message}`, "_blank");
    setGlobalCallModal(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#FAF9F6] z-[9999] flex flex-col justify-center items-center">
        <div className="w-12 h-12 border border-stone-300 border-t-amber-800 rounded-full animate-spin mb-6"></div>
        <div className="text-center animate-pulse">
          <p className="text-xl font-serif tracking-[0.3em] text-stone-800 ">
            RL<span className="italic text-amber-800 font-light">.interior</span>
          </p>
          <p className="text-[10px] tracking-[0.2em] text-stone-600 uppercase mt-2">
            Building Works | Construction | Interior Design
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-amber-100 selection:text-amber-900">
      <ScrollToTop />
      
      {/* --- PREMIUM NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full bg-[#FAF9F6]/80 backdrop-blur-md z-50 border-b border-stone-200/40 px-6 py-5 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-xl md:text-2xl font-serif tracking-[0.2em] text-stone-800 cursor-pointer" onClick={() => navigate('/')}>
          <img 
            data-aos="zoom-in"
            src={Logo}
            alt="Founder"
            className="w-[90px] h-[50px] object-cover object-center"
          />
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.15em] font-medium">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) => 
                `transition-all duration-300 relative py-1 ${
                  isActive ? 'text-amber-800 font-semibold' : 'text-stone-500 hover:text-stone-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {tab.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-800 animate-pulse" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Fixed Pages Dropdown Container */}
          <div 
            ref={dropdownRef}
            className="relative py-2 cursor-pointer group"
            onMouseEnter={() => setPagesDropdownOpen(true)}
            onMouseLeave={() => setPagesDropdownOpen(false)}
          >
            <span className="text-stone-500 hover:text-stone-900 transition-colors duration-200 flex items-center space-x-1">
              <span>Pages</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`transition-transform duration-300 ${pagesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>

            {/* Dropdown Menu Overlay (With padding bridge to prevent hover loss) */}
            <div 
              className={`absolute top-full left-0 w-44 pt-2 transition-all duration-300 origin-top z-50 ${
                pagesDropdownOpen 
                  ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                  : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
              }`}
            >
              {/* Actual Visual Box */}
              <div className="bg-[#FAF9F6] border border-stone-200/60 shadow-xl rounded-sm p-2 flex flex-col space-y-1">
                {pageSubItems.map((subItem) => (
                  <NavLink
                    key={subItem.name}
                    to={subItem.path}
                    onClick={() => setPagesDropdownOpen(false)}
                    className={({ isActive }) => 
                      `px-3 py-2 text-[10px] tracking-widest text-left uppercase transition-all duration-200 rounded-xs hover:bg-[#1c1613] hover:text-[#FAF9F6] ${
                        isActive ? 'bg-amber-800/10 text-amber-800 font-semibold' : 'text-stone-600'
                      }`
                    }
                  >
                    {subItem.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Action CTA (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={() => setGlobalCallModal(true)} 
            className="border border-stone-800 text-stone-800 text-[10px] tracking-widest uppercase px-5 py-2.5 hover:bg-stone-900 hover:text-white transition duration-300 cursor-pointer"
          >
            Book Call
          </button>
        </div>

        {/* --- MOBILE MENU BUTTON --- */}
        <button 
          className="lg:hidden text-stone-800 p-2 focus:outline-none z-50 relative cursor-pointer" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FAF9F6] z-40 pt-24 px-6 flex flex-col justify-between pb-12 lg:hidden overflow-y-auto animate-fadeIn">
          <div className="flex flex-col space-y-5">
            {tabs.map((tab) => (
              <NavLink
                key={tab.name}
                to={tab.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `text-left text-lg font-serif tracking-wide ${
                    isActive ? 'text-amber-800' : 'text-stone-600'
                  }`
                }
              >
                {tab.name}
              </NavLink>
            ))}

            {/* Mobile "Pages" Accordion Dropdown */}
            <div className="flex flex-col">
              <button 
                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                className="text-left text-lg font-serif tracking-wide text-stone-600 flex items-center justify-between py-1 focus:outline-none"
              >
                <span>Pages</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`transition-transform duration-300 ${mobilePagesOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <div 
                className={`pl-4 flex flex-col space-y-3 transition-all duration-300 overflow-hidden ${
                  mobilePagesOpen ? 'max-h-48 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {pageSubItems.map((subItem) => (
                  <NavLink
                    key={subItem.name}
                    to={subItem.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobilePagesOpen(false);
                    }}
                    className={({ isActive }) => 
                      `text-left text-[14px] font-sans tracking-wider ${
                        isActive ? 'text-amber-800 font-semibold' : 'text-stone-500'
                      }`
                    }
                  >
                    • {subItem.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full pt-6 border-t border-stone-200 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setGlobalCallModal(true);
              }}
              className="w-full bg-[#1C2D37] text-white text-xs tracking-widest uppercase py-4 rounded-xs text-center font-medium flex items-center justify-center space-x-2"
            >
              <Phone size={14} />
              <span>Book Consultation Call</span>
            </button>
          </div>
        </div>
      )}

      {/* --- MAIN CONTENT AREA --- */}
      <main className="pt-24 flex-grow">
        <Routes>
          <Route path="/" element={<Home navigate={navigate} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      {/* --- GLOBAL CALL CONTROLLER MODAL OVERLAY --- */}
      {globalCallModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-[9999] px-4 animate-fadeIn">
          <div className="bg-[#FAF9F6] max-w-sm w-full border border-stone-200 p-8 text-center relative shadow-2xl rounded-xs">
            <button 
              onClick={() => setGlobalCallModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="mb-6">
              <div className="mx-auto w-10 h-10 bg-amber-50 text-amber-800 rounded-full flex items-center justify-center mb-3">
                <Phone size={18} />
              </div>
              <h4 className="text-base font-serif text-stone-900 uppercase tracking-wider">Select Route Protocol</h4>
              <p className="text-xs text-stone-400 font-light mt-1">Connect instantly with R.L. Interior desk.</p>
            </div>

            <div className="space-y-3 text-left">
              <button
                onClick={triggerGlobalWhatsApp}
                className="w-full border border-stone-200 hover:border-emerald-600 bg-white hover:bg-emerald-50 text-stone-800 hover:text-emerald-900 transition-all duration-300 py-3 px-4 text-[11px] uppercase tracking-widest font-medium flex items-center justify-between rounded-xs cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  <MessageCircle size={16} className="text-stone-400 group-hover:text-emerald-600" />
                  <span>WhatsApp Chat & Call</span>
                </div>
                <span className="text-[9px] text-emerald-600 font-semibold uppercase tracking-wider bg-emerald-100/50 px-2 py-0.5 rounded-xs">Online</span>
              </button>

              <a
                href="tel:+919910889575"
                onClick={() => setGlobalCallModal(false)}
                className="w-full border border-stone-200 hover:border-amber-800 bg-white hover:bg-amber-50 text-stone-800 hover:text-amber-950 transition-all duration-300 py-3 px-4 text-[11px] uppercase tracking-widest font-medium flex items-center justify-between rounded-xs block text-center"
              >
                <div className="flex items-center space-x-3">
                  <Smartphone size={16} className="text-stone-400" />
                  <span>Regular Cellular Call</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* --- MINIMAL FOOTER --- */}
      <Footer />
    </div>
  );
}