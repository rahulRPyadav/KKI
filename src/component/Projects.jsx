import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote, ShieldAlert, Sparkles, Sliders } from "lucide-react";

export default function Projects() {
  const [activeSegment, setActiveSegment] = useState("Residential");

  // --- 100% REAL DATA WITH PREMIUM ASSETS ---
  const projectData = {
    Residential: [
      { 
        name: "The Magnolias, Golf Course Road", 
        category: "Ultra-Luxury Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600"
        ] 
      },
      { 
        name: "Tatvam Villas", 
        category: "Luxury Villa Community", 
        images: [
           "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
          "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=600",
          "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=600",
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600",
          "https://images.unsplash.com/photo-1576941089067-2de3ab9062dd?q=80&w=600"
        ] 
      },
      { 
        name: "Eldeco Manzions", 
        category: "Premium Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600",
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600",
          "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=600",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600"
        ]
      },
      { 
        name: "Unitech The World Spa", 
        category: "Premium Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600",
          "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=600",
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600",
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=600",
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600"
        ] 
      },
      { 
        name: "Park View Spa", 
        category: "Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600",
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600",
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600",
          "https://images.unsplash.com/photo-1600585154526-990dced4e5fd?q=80&w=600",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600"
        ] 
      },
      { 
        name: "Rosewood City", 
        category: "Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=600",
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600",
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600",
          "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=600"
        ] 
      }
    ],
    Commercial: [
      { 
        name: "Corporate Headquarters, Cyber City", 
        category: "Premium Corporate Offices", 
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600",
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600",
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600"
        ] 
      },
      { 
        name: "The Fine-Dining Atelier", 
        category: "Luxury Restaurant & Café Fit-out", 
        images: [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600",
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600",
          "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=600",
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600",
          "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=600"
        ] 
      },
      { 
        name: "Boutique Retail Hub, Horizon Drive", 
        category: "Bespoke Commercial Retail Space", 
        images: [
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600",
          "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=600",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=600",
          "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=600",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600"
        ] 
      },
      { 
        name: "Unitech The World Spa", 
        category: "Premium Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600",
          "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=600",
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600",
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=600",
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600"
        ] 
      },
      { 
        name: "Park View Spa", 
        category: "Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600",
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600",
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600",
          "https://images.unsplash.com/photo-1600585154526-990dced4e5fd?q=80&w=600",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600"
        ] 
      },
      { 
        name: "Rosewood City", 
        category: "Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=600",
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600",
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600",
          "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=600"
        ] 
      }
    ]
  };

  const currentProjects = projectData[activeSegment] || [];

  return (
    // FIXED: Main container integrated with premium gold-stone luxury gradient theme
    <div className="bg-gradient-to-b from-[#ffe9a6] via-[#92845a] to-[#ad9a65] mt-[-68px] my-[-24px] py-16 px-6 md:px-12 lg:px-24 text-stone-950 space-y-24 border-b border-stone-950/10 font-sans overflow-hidden backface-hidden version-hardware-accelerated">
      
      {/* --- FOLD 1: HEADER & CONTROLLERS --- */}
      <section data-aos="fade-up" data-aos-duration="800" className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 pt-6 border-b border-stone-950/10 pb-8 transform-gpu will-change-transform">
        <div className="text-left max-w-2xl">
          <p className="text-[10px] tracking-[0.4em] text-stone-950 uppercase mb-3 font-bold">
            Our Blueprint Masterpieces
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-stone-950 mb-4 uppercase">
            {activeSegment} Architectural Portfolios
          </h2>
          <p className="text-xs md:text-sm text-stone-900 font-light leading-relaxed">
            {activeSegment === "Residential" 
              ? "R.L. Interior holds an elite record of crafting premium turnkey infrastructures across Delhi NCR's most premier coordinates. Every single square foot reflects meticulous spatial planning, heavy foundational work, and client-tailored structural aesthetics." 
              : "A custom showcase of structural capabilities, micro timber installations, and corporate scale executions meticulously optimized for premier commercial, hospitality, and workspace sectors."
            }
          </p>
        </div>

        {/* Premium Capsule Switcher */}
        <div className="flex bg-white/10 p-1.5 rounded border border-stone-950/10 backdrop-blur-xs select-none shadow-inner shrink-0 self-start md:self-end">
          {["Residential", "Commercial"].map((segment) => (
            <button
              key={segment}
              onClick={() => setActiveSegment(segment)}
              className={`text-[10px] uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 font-bold cursor-pointer rounded-sm ${
                activeSegment === segment 
                  ? "bg-stone-950 text-[#ffe9a6] shadow-md font-bold" 
                  : "text-stone-900/70 hover:text-stone-950 hover:bg-white/10"
              }`}
            >
              {segment}
            </button>
          ))}
        </div>
      </section>

      {/* --- FOLD 2: LIVE INTERACTIVE GALLERY GRID --- */}
      <section data-aos="fade-up" className="max-w-6xl mx-auto mt-[-50px] transform-gpu will-change-transform">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <ProjectCard key={`${activeSegment}-${index}`} project={project} />
          ))}
        </div>
      </section>

      {/* --- NEW EXTRA FOLD 3: PROJECT LIFE-CYCLE & QUALITY ASSURANCE METRIC TRACKER --- */}
      <section data-aos="fade-up" data-aos-duration="800" className="max-w-6xl mx-auto border-t border-stone-950/10 pt-16 text-left transform-gpu will-change-transform">
        <p className="text-[10px] tracking-[0.4em] text-stone-950 uppercase mb-3 font-bold">
          From Foundation To Handover
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wide text-stone-950 mb-12 uppercase">
          The Framework Philosophy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Civil Assessment", desc: "Evaluating foundational strengths, architectural alignments, and absolute load calculations prior to custom design implementations." },
            { step: "02", title: "Timber & Veneer Selection", desc: "Sourcing verified A-grade seasoned timber cores and hand-selected natural grain veneers directly from core industrial mills." },
            { step: "03", title: "Micro-Joinery Installation", desc: "Precision structural crafting involving micro-engineered concealed channels, acoustic walls, and bespoke ceiling lines." },
            { step: "04", title: "Turnkey Handover", desc: "Final microscopic validation audits, architectural structural review, and premium absolute surface detailing." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/15 backdrop-blur-md p-6 border border-stone-950/10 rounded transition-all duration-300 hover:bg-white/25 hover:-translate-y-1 transform-gpu shadow-xs group">
              <span className="text-2xl font-serif text-amber-950/60 font-light block mb-4 transition-colors duration-300 group-hover:text-amber-950">{item.step}</span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-950 mb-2">{item.title}</h4>
              <p className="text-[11px] text-stone-900 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEW EXTRA FOLD 4: PREMIUM EMBEDDED SHOWCASE VAULT (TESTIMONIALS) --- */}
      <section data-aos="fade-up" data-aos-duration="800" className="max-w-6xl mx-auto border-t border-stone-950/10 pt-16 text-left transform-gpu will-change-transform">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-4 bg-[#1c1613] text-[#F4F1EA] p-8 flex flex-col justify-between border border-[#2c221e] rounded shadow-md">
            <div className="space-y-4">
              <Sparkles className="text-amber-400 stroke-[1.2]" size={28} />
              <h3 className="font-serif text-2xl font-light tracking-wide uppercase text-amber-400">The Vault Retainer Word</h3>
              <p className="text-[11px] font-light text-stone-400 leading-relaxed">
                Elite clients trust R.L. Interior across multi-crore layouts because of one single value: Absolute execution confidentiality met with micro-structural durability.
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-amber-400/70 pt-6 border-t border-stone-800">
              Validated Execution Reports
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/20 backdrop-blur-md p-6 border border-stone-950/10 rounded flex flex-col justify-between shadow-xs transition-all duration-300 hover:bg-white/25">
              <Quote className="text-amber-950/40 mb-4" size={24} />
              <p className="text-xs italic text-stone-950 leading-relaxed font-serif">
                "Kailash Yadav's structural vision transformed our raw asset in The Magnolias into an architectural layout that balances heavy acoustic engineering with sleek luxury. The custom timber frameworks are flawless."
              </p>
              <div className="mt-6">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-stone-950">High-Profile Resident</h5>
                <span className="text-[9px] text-amber-950 font-medium tracking-wide">The Magnolias, Golf Course Road</span>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-md p-6 border border-stone-950/10 rounded flex flex-col justify-between shadow-xs transition-all duration-300 hover:bg-white/25">
              <Quote className="text-amber-950/40 mb-4" size={24} />
              <p className="text-xs italic text-stone-950 leading-relaxed font-serif">
                "Delivering a premium corporate hub fit-out in Cyber City within timeline guidelines was an impossible task. R.L. Interior managed the civil blueprint framework and macro joinery seamlessly under absolute professional control."
              </p>
              <div className="mt-6">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-stone-950">Managing Director</h5>
                <span className="text-[9px] text-amber-950 font-medium tracking-wide">Cyber City Headquarters Complex</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- BOTTOM RUNNING FOOTER STAMP --- */}
      <div className="text-center pt-8 border-t border-stone-950/10 text-[10px] uppercase tracking-[0.3em] text-stone-950 font-bold">
        Engineering Durability · Crafting Spaces · Gurugram-Delhi NCR
      </div>

    </div>
  );
}

/* ====================================================================
   SUB-COMPONENT: Individual Luxury Project Card (With Translucent Finish)
   ==================================================================== */
function ProjectCard({ project }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  const hoverTimer = useRef(null);
  const intervalTimer = useRef(null);

  const changeImageSmoothly = (nextIndex) => {
    setFadeState(false);
    setTimeout(() => {
      setImgIndex(nextIndex);
      setFadeState(true);
    }, 200);
  };

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => {
      intervalTimer.current = setInterval(() => {
        setImgIndex((prev) => {
          const nextIdx = (prev + 1) % project.images.length;
          setFadeState(false);
          setTimeout(() => { setImgIndex(nextIdx); setFadeState(true); }, 200);
          return prev; 
        });
      }, 1800);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    if (intervalTimer.current) clearInterval(intervalTimer.current);
    changeImageSmoothly(0);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    const prevIdx = imgIndex === 0 ? project.images.length - 1 : imgIndex - 1;
    changeImageSmoothly(prevIdx);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (imgIndex + 1) % project.images.length;
    changeImageSmoothly(nextIdx);
  };

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      if (intervalTimer.current) clearInterval(intervalTimer.current);
    };
  }, []);

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col bg-white/20 backdrop-blur-md border border-stone-950/10 overflow-hidden shadow-xs transition-all duration-500 hover:shadow-md hover:bg-white/25 rounded transform-gpu will-change-transform animate-fadeIn"
    >
      {/* Image Gallery Canvas */}
      <div className="relative aspect-[4/3] bg-stone-950 overflow-hidden select-none">
        <img 
          src={project.images[imgIndex]} 
          alt={project.name} 
          className={`w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-700 ease-out ${
            fadeState ? "opacity-100 filter blur-0" : "opacity-40 filter blur-[2px]"
          }`}
          style={{ transitionProperty: "opacity, filter, transform" }}
        />
        <div className="absolute inset-0 bg-stone-950/5 group-hover:bg-amber-950/20 transition-all duration-500 z-10" />

        {/* Navigation Buttons */}
        <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button 
            onClick={showPrevImage}
            className="p-2 rounded-full bg-white/90 hover:bg-white text-stone-950 transition shadow-sm cursor-pointer backdrop-blur-xs outline-none hover:scale-105 transform-gpu"
          >
            <ChevronLeft size={14} className="stroke-[2.5]" />
          </button>
          <button 
            onClick={showNextImage}
            className="p-2 rounded-full bg-white/90 hover:bg-white text-stone-950 transition shadow-sm cursor-pointer backdrop-blur-xs outline-none hover:scale-105 transform-gpu"
          >
            <ChevronRight size={14} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Custom Progress Pagination Indicators */}
        <div className="absolute bottom-4 right-4 flex space-x-2 z-20 bg-stone-950/40 p-1.5 rounded-full backdrop-blur-xs">
          {project.images.map((_, i) => (
            <span 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === imgIndex ? "w-4 bg-amber-400" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Luxury Typography Container */}
      <div className="p-6 flex flex-col justify-between flex-grow z-20">
        <div className="space-y-2 text-left">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-900 font-bold">
            {project.category}
          </p>
          <h3 className="text-base font-serif text-stone-950 tracking-wide line-clamp-1 group-hover:text-amber-950 transition-colors duration-300">
            {project.name}
          </h3>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-950/10 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-stone-900/60 font-bold group-hover:text-stone-950 transition-colors duration-300">
          <span>Explore Blueprints</span>
          <div className="p-1.5 bg-stone-950/10 group-hover:bg-stone-950 group-hover:text-[#ffe9a6] transition-all duration-300 rounded-sm transform-gpu group-hover:translate-x-0.5">
            <ArrowUpRight size={12} className="stroke-[2]" />
          </div>
        </div>
      </div>
    </div>
  );
}