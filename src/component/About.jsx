import { useState, useEffect, useRef } from "react";
import { ShieldCheck, HardHat, Compass, Layers, Milestone, Award } from "lucide-react";

export default function AboutUs() {
  const [aboutCount, setAboutCount] = useState(0);
  const aboutCountRef = useRef(null);
  const aboutHasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !aboutHasAnimated.current) {
          aboutHasAnimated.current = true;
          let start = 0;
          const end = 26;
          const duration = 1500;
          const incrementTime = Math.floor(duration / end);

          const timer = setInterval(() => {
            start += 1;
            setAboutCount(start);
            if (start === end) clearInterval(timer);
          }, incrementTime);
        }
      },
      { threshold: 0.2 },
    );

    if (aboutCountRef.current) observer.observe(aboutCountRef.current);
    return () => {
      if (aboutCountRef.current) observer.unobserve(aboutCountRef.current);
    };
  }, []);

  return (
    // FIXED: Main background ko rich luxury gradient me change kiya aur text contrast ko improve kiya
    <div className="bg-gradient-to-b from-[#ffe9a6] via-[#92845a] to-[#ad9a65] mt-[-68px] my-[-24px] py-16 px-6 md:px-12 lg:px-24 text-stone-950 space-y-24 border-b border-stone-950/10 font-sans overflow-hidden backface-hidden version-hardware-accelerated">
      
      {/* --- SECTION 1: ABOUT STUDIO --- */}
      <section data-aos="fade-up" data-aos-duration="800" className="max-w-5xl mx-auto text-left pt-6 transform-gpu will-change-transform">
        <p className="text-[10px] tracking-[0.4em] text-stone-950 uppercase mb-3 font-bold">
          Who We Are
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-stone-950 mb-10 uppercase">
          About Us  
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm md:text-base text-stone-900 font-light leading-relaxed">
          <div className="md:col-span-7 space-y-6">
            <p>
              <span className="font-serif italic text-amber-950 text-xl font-medium">
                R.L. Interior
              </span>{" "}
              is a distinguished sole proprietorship firm specialising in premium building
              works, luxury construction, and high-end interior architecture across residential and
              commercial domains. Founded in 2014, the firm has grown into a
              trusted pioneer in the National Capital Region, with a portfolio
              spanning some of the most prestigious addresses in Gurugram and Delhi.
            </p>
            <p>
              What sets R.L. Interior apart is its seamless tactical ability to handle
              projects from the ground up — from foundational civil construction and
              heavy structural works to the ultimate microscopic details of bespoke interior finishing.
            </p>
          </div>
          
          {/* FIXED: Plain light box ko luxury blurred asset surface me badla */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="150"
            className="md:col-span-5 bg-white/20 backdrop-blur-xs p-6 border border-stone-950/10 flex flex-col justify-center transition-all duration-300 ease-out hover:bg-stone-950/10 hover:border-amber-950/30 group cursor-default transform-gpu will-change-transform rounded"
          >
            <p className="italic font-serif text-stone-950 text-md mb-2 transition-colors duration-300 group-hover:text-amber-950">
              "Architecture is not just about space; it's about structural endurance meeting tailored luxury."
            </p>
            <span className="text-xs text-amber-950 tracking-wider uppercase font-bold transition-transform duration-300 ease-out group-hover:translate-x-1 transform-gpu">
              — Design Directive
            </span>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: FOUNDER & METRICS --- */}
      <section className="max-w-5xl mx-auto text-left border-t border-stone-950/10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div data-aos="fade-up" data-aos-duration="800" className="lg:col-span-6 space-y-6 transform-gpu will-change-transform">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-stone-950 uppercase mb-3 font-bold">
                The Mind Behind The Studio
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-stone-950 mb-6 uppercase">
                Founder & Principal
              </h2>
              <h3 className="text-2xl md:text-3xl font-serif text-stone-950 font-normal mt-4">
                Mr. Kailash Yadav
              </h3>
              <p className="text-xs italic text-amber-950 font-serif tracking-wider mt-1 font-medium">
                Founder & Principal Execution Head
              </p>
            </div>
            <div className="space-y-4 text-xs md:text-sm text-stone-900 font-light leading-relaxed">
              <p>
                With over 26 years of profound, hands-on master experience in the core construction
                and timber interior design industry, Kailash Yadav brings an
                unparalleled depth of technical expertise to every ground. His elite journey
                spans decades of intricate work across super-prime residential layouts.
              </p>
              <p>
                Mr. Yadav's philosophy is rooted deeply in native craftsmanship — where heavy structural
                integrity meets minimal refined aesthetics.
              </p>
            </div>
          </div>

          {/* Metrics Grid with Ambient Transparency */}
          <div className="lg:col-span-6 w-full grid grid-cols-2 gap-4" ref={aboutCountRef}>
            {/* CARD 1 */}
            <div 
              data-aos="fade-up" data-aos-delay="50"
              className="border border-stone-950/10 bg-white/25 backdrop-blur-xs p-6 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-amber-950/40 hover:shadow-md cursor-default group transform-gpu will-change-transform rounded"
            >
              <h4 className="text-4xl font-serif font-light text-stone-950 transition-colors duration-300 group-hover:text-amber-950">
                {aboutCount}<span className="text-amber-950 font-sans text-xl font-bold">+</span>
              </h4>
              <p className="text-[9px] uppercase tracking-[0.2em] text-stone-900 mt-2 font-bold">
                Years of Master Craft
              </p>
            </div>
            
            {/* CARD 2 */}
            <div 
              data-aos="fade-up" data-aos-delay="100"
              className="border border-stone-950/10 bg-white/25 backdrop-blur-xs p-6 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-amber-950/40 hover:shadow-md cursor-default group transform-gpu will-change-transform rounded"
            >
              <h4 className="text-4xl font-serif font-light text-amber-950 transition-colors duration-300 group-hover:text-amber-900">
                2014
              </h4>
              <p className="text-[9px] uppercase tracking-[0.2em] text-stone-900 mt-2 font-bold">
                Established Year
              </p>
            </div>

            {/* CARD 3 */}
            <div 
              data-aos="fade-up" data-aos-delay="150"
              className="border border-stone-950/10 bg-white/25 backdrop-blur-xs p-6 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-amber-950/40 hover:shadow-md cursor-default group transform-gpu will-change-transform rounded"
            >
              <h4 className="text-4xl font-serif font-light text-stone-950 transition-colors duration-300 group-hover:text-amber-950">
                180<span className="text-amber-950 font-sans text-xl font-bold">+</span>
              </h4>
              <p className="text-[9px] uppercase tracking-[0.2em] text-stone-900 mt-2 font-bold">
                Turnkey Deliveries
              </p>
            </div>

            {/* CARD 4 */}
            <div 
              data-aos="fade-up" data-aos-delay="200"
              className="border border-stone-950/10 bg-white/25 backdrop-blur-xs p-6 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-amber-950/40 hover:shadow-md cursor-default group transform-gpu will-change-transform rounded"
            >
              <h4 className="text-4xl font-serif font-light text-amber-950 transition-colors duration-300 group-hover:text-amber-900">
                94<span className="text-amber-950 font-sans text-xl font-bold">%</span>
              </h4>
              <p className="text-[9px] uppercase tracking-[0.2em] text-stone-900 mt-2 font-bold">
                Retainer Client Ratio
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 3: SIGNATURE DOMAINS --- */}
      <section data-aos="fade-up" data-aos-duration="800" className="max-w-5xl mx-auto text-left border-t border-stone-950/10 pt-16 transform-gpu will-change-transform">
        <p className="text-[10px] tracking-[0.4em] text-stone-950 uppercase mb-3 font-bold">
          Areas of Blueprint Elite
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-stone-950 mb-12 uppercase">
          Signature Domains
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm font-light">
          
          <div className="border-l-2 border-stone-950/20 hover:border-amber-950 pl-6 space-y-2 py-2 transition-all duration-300 ease-out cursor-default group transform-gpu will-change-transform hover:translate-x-1">
            <h4 className="font-serif text-base text-stone-950 font-medium transition-colors duration-300 group-hover:text-amber-950">Super Prime Residential</h4>
            <p className="text-stone-900 leading-relaxed">Bespoke luxury duplexes, structural villas, and elite high-rise modifications inside premier gated societies across NCR.</p>
          </div>

          <div className="border-l-2 border-stone-950/20 hover:border-amber-950 pl-6 space-y-2 py-2 transition-all duration-300 ease-out cursor-default group transform-gpu will-change-transform hover:translate-x-1">
            <h4 className="font-serif text-base text-stone-950 font-medium transition-colors duration-300 group-hover:text-amber-950">Corporate Infrastructure</h4>
            <p className="text-stone-900 leading-relaxed">Integrated corporate hubs, global executive boardrooms, and highly calibrated functional office architectures.</p>
          </div>

          <div className="border-l-2 border-stone-950/20 hover:border-amber-950 pl-6 space-y-2 py-2 transition-all duration-300 ease-out cursor-default group transform-gpu will-change-transform hover:translate-x-1">
            <h4 className="font-serif text-base text-stone-950 font-medium transition-colors duration-300 group-hover:text-amber-950">Boutique Hospitality</h4>
            <p className="text-stone-900 leading-relaxed">Aesthetically rich fine dining lounges, premium retail experiences, and bespoke comfort wellness zones.</p>
          </div>

          <div className="border-l-2 border-stone-950/20 hover:border-amber-950 pl-6 space-y-2 py-2 transition-all duration-300 ease-out cursor-default group transform-gpu will-change-transform hover:translate-x-1">
            <h4 className="font-serif text-base text-stone-950 font-medium transition-colors duration-300 group-hover:text-amber-950">Acoustic & Timber Joinery</h4>
            <p className="text-stone-900 leading-relaxed">Precision-engineered home theaters, exotic timber wall panelling systems, and specialized veneer framework ceilings.</p>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: ARCHITECTURAL PILLARS --- */}
      <section className="max-w-5xl mx-auto text-left border-t border-stone-950/10 pt-16">
        <p className="text-[10px] tracking-[0.4em] text-stone-950 uppercase mb-3 font-bold">
          The Craft Process
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-stone-950 mb-12 uppercase">
          Our Architectural Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div 
            data-aos="fade-up" data-aos-delay="50"
            className="flex flex-col items-start p-6 bg-white/20 backdrop-blur-xs border border-stone-950/10 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md hover:border-amber-950/40 group transform-gpu will-change-transform rounded"
          >
            <Compass className="text-amber-950 mb-4 stroke-[1.2] transition-transform duration-500 ease-out group-hover:rotate-45 transform-gpu" size={28} />
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-950 mb-2">01 / Concept Blueprint</h4>
            <p className="text-[12px] text-stone-900 font-light leading-relaxed">Translating conceptual human habits into raw spatial layouts, timber grids, and lighting channels before breaking ground.</p>
          </div>

          <div 
            data-aos="fade-up" data-aos-delay="100"
            className="flex flex-col items-start p-6 bg-white/20 backdrop-blur-xs border border-stone-950/10 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md hover:border-amber-950/40 group transform-gpu will-change-transform rounded"
          >
            <HardHat className="text-amber-950 mb-4 stroke-[1.2] transition-transform duration-500 ease-out group-hover:scale-105 transform-gpu" size={28} />
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-950 mb-2">02 / Solid Engineering</h4>
            <p className="text-[12px] text-stone-900 font-light leading-relaxed">Executing structural reinforcement, heavy masonry, and site framework with generational build durability guidelines.</p>
          </div>

          <div 
            data-aos="fade-up" data-aos-delay="150"
            className="flex flex-col items-start p-6 bg-white/20 backdrop-blur-xs border border-stone-950/10 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md hover:border-amber-950/40 group transform-gpu will-change-transform rounded"
          >
            <ShieldCheck className="text-amber-950 mb-4 stroke-[1.2] transition-transform duration-500 ease-out group-hover:scale-105 transform-gpu" size={28} />
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-950 mb-2">03 / Premium Joinery</h4>
            <p className="text-[12px] text-stone-900 font-light leading-relaxed">Finishing layouts with exquisite wall panelings, custom acoustic treatments, and hand-selected walnut veneers.</p>
          </div>

        </div>
      </section>

      {/* --- SECTION 5: MATERIAL PHILOSOPHY --- */}
      <section data-aos="fade-up" data-aos-duration="800" className="max-w-5xl mx-auto text-left border-t border-stone-950/10 pt-16 transform-gpu will-change-transform">
        <div className="bg-white/25 backdrop-blur-xs border border-stone-950/10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center justify-between shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:border-amber-950/20 rounded">
          <div className="max-w-xl space-y-3">
            <span className="text-[9px] uppercase tracking-[0.2em] text-amber-950 font-bold block">Material Integrity</span>
            <h3 className="font-serif text-2xl font-light text-stone-950">Our Organic Material Philosophy</h3>
            <p className="text-xs text-stone-900 font-light leading-relaxed">
              We eliminate intermediaries. By sourcing natural stones directly from quarries and seasoned structural hardwoods straight from core mills, R.L. Interior guarantees that what is engineered inside your spaces lasts a generation.
            </p>
          </div>
          
          <div className="flex gap-4 shrink-0 text-amber-950">
            <div className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-xs border border-stone-950/10 w-20 text-center transition-all duration-300 ease-out hover:scale-105 hover:border-amber-950 group transform-gpu will-change-transform rounded">
              <Layers size={20} className="stroke-[1.3] mb-1 text-amber-950 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 transform-gpu" />
              <span className="text-[9px] font-bold tracking-tight">Veneers</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-xs border border-stone-950/10 w-20 text-center transition-all duration-300 ease-out hover:scale-105 hover:border-amber-950 group transform-gpu will-change-transform rounded">
              <Milestone size={20} className="stroke-[1.3] mb-1 text-amber-950 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 transform-gpu" />
              <span className="text-[9px] font-bold tracking-tight">Granites</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/40 backdrop-blur-xs border border-stone-950/10 w-20 text-center transition-all duration-300 ease-out hover:scale-105 hover:border-amber-950 group transform-gpu will-change-transform rounded">
              <Award size={20} className="stroke-[1.3] mb-1 text-amber-950 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 transform-gpu" />
              <span className="text-[9px] font-bold tracking-tight">Iron</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 6: MISSION, VISION & CORE VALUES --- */}
      <section data-aos="fade-up" data-aos-duration="800" className="max-w-5xl mx-auto text-left border-t border-stone-950/10 pt-16 pb-4 transform-gpu will-change-transform">
        <p className="text-[10px] tracking-[0.4em] text-stone-950 uppercase mb-3 font-bold">
          Our Blueprint
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-stone-950 mb-12 uppercase">
          Mission, Vision & Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Deep Walnut Card */}
          <div className="bg-[#1c1613] text-[#F4F1EA] p-8 flex flex-col justify-between min-h-[280px] border border-[#2c221e] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-500/30 group transform-gpu will-change-transform rounded">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Our Mission
            </h4>
            <p className="text-xs font-light text-stone-300/90 leading-relaxed mt-4">
              To deliver superior master-quality construction and organic interior design
              solutions that transform standard spaces into permanent structural expressions of elite
              craftsmanship, utility, and timeless luxury.
            </p>
            <div className="w-8 h-[1px] bg-amber-400/50 mt-6 transition-all duration-300 ease-out group-hover:w-16 group-hover:bg-amber-400" />
          </div>

          {/* Medium Oak Card */}
          <div className="bg-[#3d2f26] text-[#F4F1EA] p-8 flex flex-col justify-between min-h-[280px] border border-[#524033] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-500/30 group transform-gpu will-change-transform rounded">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Our Vision
            </h4>
            <p className="text-xs font-light text-stone-200/90 leading-relaxed mt-4">
              To stand as the most trusted integrated asset in heavy construction and
              high-end luxury design across India, celebrated for bespoke structural forms that
              inspire generational lines and client philosophies.
            </p>
            <div className="w-8 h-[1px] bg-amber-400/50 mt-6 transition-all duration-300 ease-out group-hover:w-16 group-hover:bg-amber-400" />
          </div>

          {/* Deep Forest/Earthy Card */}
          <div className="bg-[#242b26] text-[#F4F1EA] p-8 flex flex-col justify-between min-h-[280px] border border-[#313b34] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-500/30 group transform-gpu will-change-transform rounded">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Core Values
            </h4>
            <ul className="text-xs font-light text-stone-200/90 space-y-2.5 mt-4 list-none">
              <li className="flex items-center space-x-2.5 transition-transform duration-300 ease-out hover:translate-x-1 transform-gpu">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                <span>Excellence in every structural layer.</span>
              </li>
              <li className="flex items-center space-x-2.5 transition-transform duration-300 ease-out hover:translate-x-1 transform-gpu">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                <span>Integrity within financial boundaries.</span>
              </li>
              <li className="flex items-center space-x-2.5 transition-transform duration-300 ease-out hover:translate-x-1 transform-gpu">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                <span>Bespoke micro-engineering details.</span>
              </li>
              <li className="flex items-center space-x-2.5 transition-transform duration-300 ease-out hover:translate-x-1 transform-gpu">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                <span>Accountability from foundation to finish.</span>
              </li>
            </ul>
            <div className="w-8 h-[1px] bg-amber-400/50 mt-4 transition-all duration-300 ease-out group-hover:w-16 group-hover:bg-amber-400" />
          </div>

        </div>
      </section>
    </div>
  );
}