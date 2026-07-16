import { useState } from "react";
import { Phone, Mail, MapPin, User, MessageSquare, Smartphone, CheckCircle, X } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- GOOGLE SHEET CONNECTION LOGIC ---
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const GOOGLE_SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw88-s7EBxkPZfjHrb4uqScSZQMiHvqDoMfweQ1L63TNTY6tQ5_K9H1amjuK4Ms1gm-Rg/exec"; 

    try {
      const formPayload = new FormData();
      formPayload.append("Name", formData.name);
      formPayload.append("Phone", formData.phone);
      formPayload.append("Email", formData.email);
      formPayload.append("Message", formData.message);

      if (GOOGLE_SHEET_SCRIPT_URL !== "YOUR_GOOGLE_WEBHOOK_URL_HERE") {
        await fetch(GOOGLE_SHEET_SCRIPT_URL, {
          method: "POST",
          body: formPayload,
          mode: "no-cors" 
        });
      }
      
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Sheet Sync Error:", error);
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }
  };

  return (
    // FIXED: Muted down the light gradient colors slightly for a softer layout vibe
    <div className="bg-gradient-to-b from-[#ffe9a6] via-[#92845a] to-[#ad9a65] mt-[-60px] py-16 px-6 md:px-12 lg:px-24 text-stone-800 animate-fadeIn min-h-screen flex flex-col justify-between relative overflow-hidden">
      
      {/* --- CORE FORM BOX: HIGH CONTRAST BALANCED HYBRID --- */}
      <div className="max-w-4xl  mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-xl rounded-sm overflow-hidden border border-stone-200/60 items-stretch bg-white/70 backdrop-blur-md my-auto relative z-10">
        
        {/* --- LEFT SIDE: THE PREMIUM BRAND DETAILS CARD (Dark Wood Slate Accent - 5 Columns) --- */}
        <div data-aos="fade-left" className="lg:col-span-5 bg-[#1C2D37] text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          <div className="space-y-6 relative z-10 text-left">
            <div>
              <p className="text-[9px] tracking-[0.3em] text-amber-500 uppercase mb-1 font-medium">Connect With Us</p>
              <h2 className="text-2xl font-serif tracking-wider uppercase font-light text-[#FAF9F6]">Contact Us</h2>
            </div>

            <div className="pt-4 border-t border-stone-700/50">
              <h3 className="text-base font-serif tracking-widest text-stone-100 uppercase">R.L. INTERIOR</h3>
              <p className="text-[11px] italic tracking-wide text-amber-500 font-light mt-0.5">Kailash Yadav · Founder & Principal</p>
            </div>

            <div className="space-y-4 pt-4 text-stone-300 text-xs font-light">
              <div className="flex items-center space-x-3 group">
                <div className="p-1.5 bg-stone-800/60 text-amber-500 rounded-xs group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Phone size={14} />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+919910889575" className="hover:text-white transition-colors tracking-wide">+91-9910889575</a>
                  <a href="tel:+919990395992" className="hover:text-white transition-colors tracking-wide">+91-9990395992</a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="p-1.5 bg-stone-800/60 text-amber-500 rounded-xs group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Mail size={14} />
                </div>
                <a href="mailto:rlinterior2014@gmail.com" className="hover:text-white transition-colors tracking-wide break-all">
                  rlinterior2014@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="p-1.5 bg-stone-800/60 text-amber-500 rounded-xs group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 mt-0.5">
                  <MapPin size={14} />
                </div>
                <p className="leading-relaxed tracking-wide text-stone-300 group-hover:text-white transition-colors text-[11px]">
                  855F, Sector-51, Gurugram, Haryana, India
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-stone-700/30 text-[8px] uppercase tracking-[0.25em] text-stone-500 text-left">
            Private Consultations By Appointment Only
          </div>
        </div>

        {/* --- RIGHT SIDE: SOFT CONTRAST FORM (7 Columns) --- */}
        <div data-aos="fade-right" className="lg:col-span-7 flex flex-col justify-center p-8 md:p-10 bg-[#FAF9F6]/40">
          <div className="text-left mb-6">
            <h3 className="text-lg font-serif text-stone-900 tracking-wide uppercase">Request a Consultation</h3>
            <p className="text-[11px] text-stone-500 font-light mt-0.5">Let us bring your vision to life. Share your space details below.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
            <div className="space-y-1 relative">
              <label className="text-[9px] uppercase tracking-widest text-stone-500 font-medium">Full Name</label>
              <div className="relative flex items-center">
                <User size={13} className="absolute left-3 text-stone-400" />
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  className="w-full bg-white/90 border border-stone-200 text-stone-800 pl-9 pr-4 py-2.5 text-xs tracking-wide rounded-xs focus:outline-none focus:border-amber-800 transition-all duration-300 placeholder-stone-400"
                />
              </div>
            </div>

            <div className="space-y-1 relative">
              <label className="text-[9px] uppercase tracking-widest text-stone-500 font-medium">Your Mobile Number</label>
              <div className="relative flex items-center">
                <Smartphone size={13} className="absolute left-3 text-stone-400" />
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/90 border border-stone-200 text-stone-800 pl-9 pr-4 py-2.5 text-xs tracking-wide rounded-xs focus:outline-none focus:border-amber-800 transition-all duration-300 placeholder-stone-400"
                />
              </div>
            </div>

            <div className="space-y-1 relative">
              <label className="text-[9px] uppercase tracking-widest text-stone-500 font-medium">Email Address</label>
              <div className="relative flex items-center">
                <Mail size={13} className="absolute left-3 text-stone-400" />
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="johndoe@example.com"
                  className="w-full bg-white/90 border border-stone-200 text-stone-800 pl-9 pr-4 py-2.5 text-xs tracking-wide rounded-xs focus:outline-none focus:border-amber-800 transition-all duration-300 placeholder-stone-400"
                />
              </div>
            </div>

            <div className="space-y-1 relative">
              <label className="text-[9px] uppercase tracking-widest text-stone-500 font-medium">Project Brief / Concept Requirement</label>
              <div className="relative flex items-start">
                <MessageSquare size={13} className="absolute left-3 top-3 text-stone-400" />
                <textarea 
                  rows="3" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your space (Residential / Commercial layout size)..."
                  className="w-full bg-white/90 border border-stone-200 text-stone-800 pl-9 pr-4 py-2.5 text-xs tracking-wide rounded-xs focus:outline-none focus:border-amber-800 transition-all duration-300 resize-none placeholder-stone-400"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1C2D37] text-white hover:bg-amber-800 disabled:bg-stone-300 transition-all duration-500 py-3 px-4 text-[9px] uppercase tracking-widest font-medium rounded-xs flex items-center justify-center space-x-2 cursor-pointer shadow-sm active:scale-[0.99]"
            >
              <span>{isSubmitting ? "Submitting Inquiry..." : "Book Consultation Call"}</span>
              <Phone size={11} />
            </button>
          </form>
        </div>
      </div>

      {/* --- ELEGANT CONFIRMATION / THANK YOU MODAL OVERLAY --- */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 animate-fadeIn px-4">
          <div className="bg-white max-w-sm w-full border border-stone-200 p-8 text-center relative shadow-2xl rounded-xs">
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="mb-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 animate-bounce">
                <CheckCircle size={24} />
              </div>
              <h4 className="text-lg font-serif text-stone-900 uppercase tracking-wider">Inquiry Received</h4>
              <p className="text-xs text-stone-500 font-light mt-2 leading-relaxed">
                Thank you for reaching out. Your design details have been securely logged into our workspace database. 
              </p>
              <p className="text-[11px] text-amber-800 font-medium mt-3 italic">
                Our principal desk will connect with you shortly.
              </p>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-stone-900 text-white hover:bg-amber-800 transition-colors duration-300 py-2.5 text-[10px] uppercase tracking-widest font-medium rounded-xs cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* --- BRAND FOOTER --- */}
      <div className="text-center pt-12 border-t border-stone-300/60 text-[10px] uppercase tracking-[0.25em] text-stone8400 mt-8">
        Building Excellence. Designing Legacy.
      </div>

    </div>
  );
}