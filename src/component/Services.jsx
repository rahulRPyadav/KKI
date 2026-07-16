import { useState } from "react";
import { Paintbrush, Hammer, Home, Briefcase, Utensils, HeartPulse, RefreshCw, Layers, Award, ShieldCheck, ArrowRight, Sparkles, X } from "lucide-react";

// Aapka Contact Us Component Path
import ContactUs from "./ContactUs"; 

export default function Services() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const serviceList = [
    {
      id: "01",
      icon: <Hammer className="w-5 h-5 stroke-[1.2] text-amber-900" />,
      title: "Building & Construction Works",
      desc: "Complete structural construction including foundations, framing, masonry, and finishing for residential and commercial properties."
    },
    {
      id: "02",
      icon: <Paintbrush className="w-5 h-5 stroke-[1.2] text-amber-900" />,
      title: "Interior Design & Execution",
      desc: "End-to-end interior design encompassing spatial planning, material selection, furniture, lighting, and décor for all typologies."
    },
    {
      id: "03",
      icon: <Home className="w-5 h-5 stroke-[1.2] text-amber-900" />,
      title: "Residential Interiors",
      desc: "Luxury flat and villa interiors tailored to the lifestyle and preferences of individual homeowners, within premier gated communities."
    },
    {
      id: "04",
      icon: <Briefcase className="w-5 h-5 stroke-[1.2] text-amber-900" />,
      title: "Commercial Interiors",
      desc: "Turnkey fit-outs for restaurants, cafés, corporate offices, retail spaces, and kiosks with a strong emphasis on brand identity and experience."
    },
    {
      id: "05",
      icon: <Utensils className="w-5 h-5 stroke-[1.2] text-amber-900" />,
      title: "Hospitality Interiors",
      desc: "Hotel and resort interiors that balance aesthetic luxury with operational practicality, creating memorable guest experiences."
    },
    {
      id: "06",
      icon: <HeartPulse className="w-5 h-5 stroke-[1.2] text-amber-900" />,
      title: "Healthcare Facility Design",
      desc: "Specialised design and execution for clinics and hospitals — clean, functional, and patient-centric environments built to compliance standards."
    }
    // {
    //   id: "07",
    //   icon: <RefreshCw className="w-5 h-5 stroke-[1.2] text-amber-900" />,
    //   title: "Renovation & Refurbishment",
    //   desc: "Sensitive upgrades and transformations of existing spaces, preserving character while modernising function and aesthetics."
    // }
  ];

  return (
    // FIXED: Pure container ko aapke custom rich gold-sand gradient theme me convert kar diya hai
    <div className="bg-gradient-to-b from-[#ffe9a6] via-[#92845a] to-[#ad9a65] mt-[-40px] py-12 px-6 md:px-12 lg:px-24 text-stone-900 space-y-20 font-sans overflow-hidden backface-hidden version-hardware-accelerated relative">
      
      {/* --- HEADER SECTION --- */}
      <section data-aos="fade-up" data-aos-duration="700" className="max-w-5xl mx-auto text-left transform-gpu will-change-transform">
        <p className="text-[10px] tracking-[0.4em] text-stone-900 uppercase mb-2 font-bold">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-stone-950 mb-4 uppercase">Our Services</h2>
        <p className="text-xs md:text-sm text-stone-800 font-light leading-relaxed max-w-2xl">
          R.L. Interior offers a comprehensive suite of architectural and execution services, enabling clients to work with a single trusted partner from groundbreaking to final premium handover.
        </p>
      </section>

      {/* --- SERVICES GRID DISPLAY --- */}
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {serviceList.map((service, index) => (
            <div 
              key={service.id} 
              data-aos="fade-up"
              data-aos-delay={40 * (index % 3)}
              // FIXED: Card white tone se badal kar semi-transparent luxury blend surface ban gayi hai
              className="group border border-stone-950/10 p-5 bg-white/20 backdrop-blur-xs flex flex-col justify-between transition-all duration-300 ease-out hover:bg-stone-950/10 hover:border-amber-900/40 cursor-default transform-gpu will-change-transform rounded"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-serif text-[11px] text-stone-800/60 tracking-wider group-hover:text-amber-950 transition-colors duration-300 font-medium">
                    {service.id}
                  </span>
                  <div className="p-2 bg-white/40 group-hover:bg-[#ffe9a6]/60 transition-colors duration-300 rounded transform-gpu group-hover:scale-105">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-base font-serif font-medium text-stone-950 group-hover:text-amber-950 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-[11px] md:text-xs text-stone-800 font-light leading-relaxed group-hover:text-stone-950 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-950/10 group-hover:border-amber-950/20 flex items-center space-x-2 text-[9px] uppercase tracking-widest text-stone-800 font-semibold group-hover:text-amber-950 transition-colors duration-300 cursor-pointer">
                {/* <span>View Details</span> */}
                {/* <ArrowRight size={10} className="transition-transform duration-300 ease-out group-hover:translate-x-1 transform-gpu" /> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY PARTNERS CHOOSE US --- */}
      <section data-aos="fade-up" data-aos-duration="700" className="max-w-5xl mx-auto border-t border-stone-950/10 pt-14 transform-gpu will-change-transform">
        <p className="text-[10px] tracking-[0.4em] text-stone-900 uppercase mb-2 font-bold">Operational Standards</p>
        <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wide text-stone-950 mb-10 uppercase">Why Partners Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* FIXED: Muted dark box backgrounds to match the theme vibe seamlessly */}
          <div className="p-5 bg-white/25 border border-stone-950/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm hover:border-amber-900/30 group transform-gpu will-change-transform rounded">
            <Layers className="text-amber-950 mb-3 stroke-[1.2] transition-transform duration-300 group-hover:scale-105 transform-gpu" size={22} />
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-stone-950 mb-1.5">Unified Accountability</h4>
            <p className="text-[11px] text-stone-850 font-light leading-relaxed">No scattered sub-vendors. We architect civil engineering frameworks and fine interior cabinetry under one single master contract.</p>
          </div>

          <div className="p-5 bg-white/25 border border-stone-950/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm hover:border-amber-900/30 group transform-gpu will-change-transform rounded">
            <Award className="text-amber-950 mb-3 stroke-[1.2] transition-transform duration-300 group-hover:scale-105 transform-gpu" size={22} />
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-stone-950 mb-1.5">Raw Material Sourcing</h4>
            <p className="text-[11px] text-stone-850 font-light leading-relaxed">Direct relationships with stone quarries and wood seasoning mills allow us to build luxury assets that endure generational life cycles.</p>
          </div>

          <div className="p-5 bg-white/25 border border-stone-950/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm hover:border-amber-900/30 group transform-gpu will-change-transform rounded">
            <ShieldCheck className="text-amber-950 mb-3 stroke-[1.2] transition-transform duration-300 group-hover:scale-105 transform-gpu" size={22} />
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-stone-950 mb-1.5">Absolute Legal Compliance</h4>
            <p className="text-[11px] text-stone-850 font-light leading-relaxed">Strict adherence to complex fire codes, high-grade acoustic metrics, and elite corporate compliance standards within NCR regions.</p>
          </div>
        </div>
      </section>

      {/* --- THE EXECUTION LIFECYCLE --- */}
      <section data-aos="fade-up" data-aos-duration="700" className="max-w-5xl mx-auto border-t border-stone-950/10 pt-14 transform-gpu will-change-transform">
        <p className="text-[10px] tracking-[0.4em] text-stone-900 uppercase mb-2 font-bold">The Blueprint Way</p>
        <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wide text-stone-950 mb-12 uppercase">Our Project Lifecycle</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="relative space-y-2 group">
            <div className="flex items-center space-x-3">
              <span className="font-serif text-2xl font-light text-amber-950/40 group-hover:text-amber-950 transition-colors duration-300">01</span>
              <div className="h-[1px] bg-stone-950/10 flex-grow hidden md:block group-hover:bg-amber-950/30 transition-colors duration-500" />
            </div>
            <h4 className="font-serif text-sm text-stone-950 font-medium">Strategic Architecture Brief</h4>
            <p className="text-[11px] text-stone-900 font-light leading-relaxed">
              Detailed structural analysis, 3D zoning patterns, material budgeting, and technical drawing handshakes before groundbreaking.
            </p>
          </div>

          <div className="relative space-y-2 group">
            <div className="flex items-center space-x-3">
              <span className="font-serif text-2xl font-light text-amber-950/40 group-hover:text-amber-950 transition-colors duration-300">02</span>
              <div className="h-[1px] bg-stone-950/10 flex-grow hidden md:block group-hover:bg-amber-950/30 transition-colors duration-500" />
            </div>
            <h4 className="font-serif text-sm text-stone-950 font-medium">Core Shell & Execution</h4>
            <p className="text-[11px] text-stone-900 font-light leading-relaxed">
              Heavy masonry integration, foundational civil alterations, electrical grid arrays, and plumbing paths directed under veteran safety officers.
            </p>
          </div>

          <div className="relative space-y-2 group">
            <div className="flex items-center space-x-3">
              <span className="font-serif text-2xl font-light text-amber-950/40 group-hover:text-amber-950 transition-colors duration-300">03</span>
            </div>
            <h4 className="font-serif text-sm text-stone-950 font-medium">Bespoke Fitting & Handover</h4>
            <p className="text-[11px] text-stone-900 font-light leading-relaxed">
              Precision panel veneer alignments, calculated mood lighting callouts, fine upholstery integration, and white-glove clean room handover.
            </p>
          </div>
        </div>
      </section>

      {/* --- ATTRACTIVE HOOK FOLD --- */}
      <section data-aos="fade-up" data-aos-duration="700" className="max-w-5xl mx-auto pt-4 transform-gpu will-change-transform">
        <div className="bg-[#1C1613] p-8 md:p-10 text-center relative overflow-hidden group border border-[#2c221e] rounded shadow-lg">
          <div className="absolute inset-0 bg-radial-gradient from-amber-950/20 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center p-2 bg-amber-900/30 rounded-full border border-amber-500/20 text-amber-400 mb-1">
              <Sparkles size={16} className="animate-pulse" />
            </div>
            <h3 className="font-serif text-xl md:text-3xl font-light text-[#F4F1EA] tracking-wide uppercase">
              Ready to Manifest Your Space?
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Let's engineer structural integrity and bespoke aesthetics into a layout built exclusively for your profile metrics.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center space-x-2 bg-amber-800 hover:bg-amber-700 text-[#FAF9F6] text-xs uppercase tracking-widest font-medium py-3 px-6 transition-all duration-300 rounded shadow-md transform-gpu hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Initiate Consultation</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FIXED OVERLAY: NO VISUAL SCROLLBAR & ULTRA-COMPACT SLEEK FIT --- */}
      {isContactOpen && (
        <div 
          onClick={() => setIsContactOpen(false)} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-md p-4 transition-opacity duration-300 ease-out animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl w-full mx-auto shadow-2xl rounded-sm overflow-y-auto max-h-[85vh] transition-all duration-300 transform-gpu scale-85 md:scale-[0.78] origin-center scrollbar-none [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {/* Elegant Minimal Close Button */}
            <button 
              onClick={() => setIsContactOpen(false)} 
              className="absolute top-4 right-4 z-[60] p-1.5 rounded-full bg-stone-900/10 text-stone-400 hover:bg-amber-800 hover:text-white transition-all duration-200 shadow-sm cursor-pointer"
            >
              <X size={14} />
            </button>
            
            <ContactUs />
          </div>
        </div>
      )}
    </div>
  );
}