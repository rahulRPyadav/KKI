import { useState } from "react";
import { Phone, Mail, MapPin, User, MessageSquare, Smartphone, MessageCircle, X } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showCallModal, setShowCallModal] = useState(false);

  // Form submit par hum user ko direct choices pop karenge
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowCallModal(true);
  };

  // WhatsApp configuration integration code
  const triggerWhatsApp = () => {
    const primaryNumber = "919910889575";
    const customText = encodeURIComponent(
      `Hello R.L. Interior team, I am ${formData.name || "a client"}. I would like to book a luxury consultation. \n\nBrief: ${formData.message || "Interested in your portfolio layouts."}`
    );
    window.open(`https://wa.me/${primaryNumber}?text=${customText}`, "_blank");
    setShowCallModal(false);
  };

  return (
    <div className="bg-[#FAF9F6] py-16 px-6 md:px-12 lg:px-24 text-stone-800 animate-fadeIn min-h-[85vh] flex flex-col justify-between relative">
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-stretch">
        
        {/* --- LEFT SIDE: THE PREMIUM BRAND DETAILS CARD (6 Columns) --- */}
        <div data-aos="fade-left" className="lg:col-span-6 bg-[#1C2D37] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border border-stone-800 shadow-xl rounded-xs">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          <div className="space-y-8 relative z-10 text-left">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-amber-500 uppercase mb-2 font-medium">Connect With Us</p>
              <h2 className="text-3xl md:text-4xl font-serif tracking-wider uppercase font-light">Contact Us</h2>
            </div>

            <div className="pt-6 border-t border-stone-700/50">
              <h3 className="text-xl md:text-2xl font-serif tracking-widest text-stone-100 uppercase">R.L. INTERIOR</h3>
              <p className="text-xs italic tracking-wide text-amber-500 font-light mt-1">Kailash Yadav · Founder & Principal</p>
            </div>

            <div className="space-y-6 pt-6 text-stone-300 text-xs md:text-sm font-light">
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-stone-800/60 text-amber-500 rounded-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Phone size={16} />
                </div>
                <a href="tel:+919910889575" className="hover:text-white transition-colors tracking-wide">
                  +91-9910889575
                </a>
                <span className="text-stone-600">|</span>
                <a href="tel:+919990395992" className="hover:text-white transition-colors tracking-wide">
                  +91-9990395992
                </a>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-stone-800/60 text-amber-500 rounded-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Mail size={16} />
                </div>
                <a href="mailto:rlinterior2014@gmail.com" className="hover:text-white transition-colors tracking-wide">
                  rlinterior2014@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-2 bg-stone-800/60 text-amber-500 rounded-sm group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 mt-0.5">
                  <MapPin size={16} />
                </div>
                <p className="leading-relaxed tracking-wide text-stone-300 group-hover:text-white transition-colors">
                  855F, Sector-51, Gurugram, Haryana, India
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-stone-700/30 text-[9px] uppercase tracking-[0.25em] text-stone-500 text-left">
            Private Consultations By Appointment Only
          </div>
        </div>

        {/* --- RIGHT SIDE: CONSULTATION INTAKE FORM (6 Columns) --- */}
        <div data-aos="fade-right" className="lg:col-span-6 flex flex-col justify-center bg-white p-8 md:p-12 border border-stone-200/60 shadow-xs rounded-xs">
          <div className="text-left mb-8">
            <h3 className="text-xl font-serif text-stone-900 tracking-wide uppercase">Request a Design Consultation</h3>
            <p className="text-xs text-stone-400 font-light mt-1">Let us bring your vision to life. Share your space details below.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
            <div className="space-y-1 relative">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">Full Name</label>
              <div className="relative flex items-center">
                <User size={14} className="absolute left-3 text-stone-400" />
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full bg-stone-50/50 border border-stone-200 pl-10 pr-4 py-3 text-xs tracking-wide rounded-xs focus:outline-none focus:border-amber-800 focus:bg-white transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-1 relative">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">Email Address</label>
              <div className="relative flex items-center">
                <Mail size={14} className="absolute left-3 text-stone-400" />
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="johndoe@example.com"
                  className="w-full bg-stone-50/50 border border-stone-200 pl-10 pr-4 py-3 text-xs tracking-wide rounded-xs focus:outline-none focus:border-amber-800 focus:bg-white transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-1 relative">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">Project Brief / Concept Requirement</label>
              <div className="relative flex items-start">
                <MessageSquare size={14} className="absolute left-3 top-3.5 text-stone-400" />
                <textarea 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your space (Residential / Commercial layout size)..."
                  className="w-full bg-stone-50/50 border border-stone-200 pl-10 pr-4 py-3 text-xs tracking-wide rounded-xs focus:outline-none focus:border-amber-800 focus:bg-white transition-all duration-300 resize-none"
                />
              </div>
            </div>

            {/* Main Interactive Button Trigger */}
            <button 
              type="submit"
              className="w-full bg-[#1C2D37] text-white hover:bg-amber-800 transition-all duration-500 py-3.5 px-4 text-[10px] uppercase tracking-widest font-medium rounded-xs flex items-center justify-center space-x-2 cursor-pointer shadow-xs active:scale-[0.99]"
            >
              <span>Book Consultation Call</span>
              <Phone size={12} />
            </button>
          </form>
        </div>

      </div>

      {/* --- PREMIUM CALL CONTROLLER MODAL OVERLAY --- */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 animate-fadeIn px-4">
          <div className="bg-white max-w-sm w-full border border-stone-200 p-8 text-center relative shadow-2xl rounded-xs scale-100 transition-all duration-300">
            {/* Close Icon Trigger */}
            <button 
              onClick={() => setShowCallModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="mb-6">
              <div className="mx-auto w-10 h-10 bg-amber-50 text-amber-800 rounded-full flex items-center justify-center mb-3">
                <Phone size={18} />
              </div>
              <h4 className="text-base font-serif text-stone-900 uppercase tracking-wider">Select Calling Route</h4>
              <p className="text-xs text-stone-400 font-light mt-1">Choose how you wish to connect with our design desk.</p>
            </div>

            {/* Selection Options Trigger Grid */}
            <div className="space-y-3">
              {/* Option A: WhatsApp Route */}
              <button
                onClick={triggerWhatsApp}
                className="w-full border border-stone-200 hover:border-emerald-600 bg-stone-50/50 hover:bg-emerald-50 text-stone-800 hover:text-emerald-900 transition-all duration-300 py-3 px-4 text-[11px] uppercase tracking-widest font-medium flex items-center justify-between rounded-xs cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  <MessageCircle size={16} className="text-stone-400 group-hover:text-emerald-600" />
                  <span>WhatsApp Message/Call</span>
                </div>
                <span className="text-[9px] text-emerald-600 font-semibold uppercase tracking-wider bg-emerald-100/50 px-2 py-0.5 rounded-xs">Instant</span>
              </button>

              {/* Option B: Standard Cellular Call Route directly using HTML5 protocol anchor links */}
              <a
                href="tel:+919910889575"
                onClick={() => setShowCallModal(false)}
                className="w-full border border-stone-200 hover:border-amber-800 bg-stone-50/50 hover:bg-amber-50 text-stone-800 hover:text-amber-950 transition-all duration-300 py-3 px-4 text-[11px] uppercase tracking-widest font-medium flex items-center justify-between rounded-xs"
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

      {/* --- BRAND FOOTER --- */}
      <div className="text-center pt-12 border-t border-stone-200/30 text-[10px] uppercase tracking-[0.25em] text-stone-400 mt-16">
        Building Excellence. Designing Legacy.
      </div>

    </div>
  );
}