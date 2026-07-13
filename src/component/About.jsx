import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ShieldCheck, HardHat, Compass } from "lucide-react"; // Naye aesthetic icons
import FounderPic from "../assets/nick wilde.jpg";

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
    <div className="bg-[#F9F6F0] my-[-24px] py-12 px-6 md:px-12 lg:px-24 text-[#2c221e] animate-fadeIn space-y-24 border-b border-[#e6dfd3]">
      
      {/* --- SECTION 1: ABOUT STUDIO --- */}
      <section  data-aos="fade-up" className="max-w-5xl mx-auto text-left pt-6">
        <p className="text-[10px] tracking-[0.4em] text-amber-700 uppercase mb-3 font-semibold font-sans">
          Who We Are
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-[#2c221e] mb-10 uppercase">
          About Our Studio
        </h2>
        <div className="space-y-6 text-sm md:text-base text-[#6b584c] font-light leading-relaxed max-w-4xl">
          <p>
            <span className="font-serif italic text-amber-900 text-xl font-medium">
              R.L. Interior
            </span>{" "}
            is a distinguished sole proprietorship firm specialising in premium building
            works, luxury construction, and high-end interior architecture across residential and
            commercial domains. Founded in 2014, the firm has grown into a
            trusted pioneer in the National Capital Region, with a stellar portfolio
            spanning some of the most prestigious addresses in Gurugram, Delhi, and beyond.
          </p>
          <p>
            What sets R.L. Interior apart is its seamless tactical ability to handle
            projects from the ground up — from foundational civil construction and
            heavy structural works to the ultimate microscopic details of bespoke interior finishing. This
            end-to-end master capability ensures absolute consistency in material quality,
            project timeline, and design vision across every venture undertaken.
          </p>
          <p>
            With an uncompromising commitment to engineering excellence and deep understanding of organic
            aesthetics, R.L. Interior successfully delivers ultra-luxury residences in premier gated
            communities, fine-dining elite spaces, boutique hospitality centers, and corporate global headquarters.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: FOUNDER & PRINCIPAL --- */}
      <section  data-aos="fade-left" className="max-w-5xl mx-auto text-left border-t border-[#e6dfd3] pt-16">
        <p className="text-[10px] tracking-[0.4em] text-amber-700 uppercase mb-3 font-semibold font-sans">
          The Mind Behind The Studio
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-[#2c221e] mb-12 uppercase">
          Founder & Principal
        </h2>

        <div  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1c1613] font-light">
                Mr. Kailash Yadav
              </h3>
              <p className="text-xs italic text-amber-800 font-serif tracking-wider mt-1">
                Founder & Principal Visionary
              </p>
            </div>
            <div className="space-y-4 text-xs md:text-sm text-[#7c695e] font-light leading-relaxed">
              <p>
                With over 26 years of profound, hands-on master experience in the core construction
                and timber interior design industry, Kailash Yadav brings an
                unparalleled depth of technical expertise to every ground. His elite journey
                spans decades of intricate work across super-prime residential layouts, commercial zones,
                and hospitality projects, commanding ultimate respect across the NCR.
              </p>
              <p>
                Mr. Yadav's philosophy is rooted deeply in native craftsmanship — where heavy structural
                integrity meets minimal refined aesthetics. His rare multi-disciplinary capability to direct
                complex engineering structures alongside delicate artisanal interior joinery remains the absolute
                cornerstone of R.L. Interior' generational legacy.
              </p>
            </div>
          </div>

         
          <div className="lg:col-span-5 space-y-12 w-full">
            <div className="w-full h-80 bg-[#f0eae1] p-3 border border-[#e2d9cc] shadow-xl overflow-hidden group">
              <div className="w-full h-full overflow-hidden relative">
                <img  data-aos="zoom-in"
                  src={FounderPic}
                  alt="Founder"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3d2f26]/10 mix-blend-multiply" />
              </div>
            </div>

            <div
              ref={aboutCountRef}
              className="border border-[#e2d9cc] bg-[#fdfcfb] p-6 grid grid-cols-2 gap-4 text-center divide-x divide-[#e6dfd3] shadow-md relative"
            >
              <div>
                <h4 className="text-4xl md:text-5xl font-serif font-light text-[#2c221e]">
                  {aboutCount}<span className="text-amber-700 font-sans text-2xl">+</span>
                </h4>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#7c695e] mt-2 font-medium font-sans">
                  Years of Expertise
                </p>
              </div>
              <div className="pl-4">
                <h4 className="text-4xl md:text-5xl font-serif font-light text-amber-800">
                  2014
                </h4>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#7c695e] mt-2 font-medium font-sans">
                  Est. Year of Studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: OUR ARCHITECTURAL APPROACH --- */}
      <section  data-aos="fade-right" className="max-w-5xl mx-auto text-left border-t border-[#e6dfd3] pt-16">
        <p className="text-[10px] tracking-[0.4em] text-amber-700 uppercase mb-3 font-semibold font-sans">
          The Craft Process
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-[#2c221e] mb-12 uppercase">
          Our Architectural Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start p-6 bg-[#f5efe6] border border-[#e2d9cc]">
            <Compass className="text-amber-800 mb-4 stroke-[1.2]" size={28} />
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2c221e] mb-2">01 / Concept Blueprint</h4>
            <p className="text-[12px] text-[#7c695e] font-light leading-relaxed">Translating conceptual human habits into raw spatial layouts, timber grids, and lighting channels before breaking ground.</p>
          </div>
          <div className="flex flex-col items-start p-6 bg-[#f5efe6] border border-[#e2d9cc]">
            <HardHat className="text-amber-800 mb-4 stroke-[1.2]" size={28} />
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2c221e] mb-2">02 / Solid Engineering</h4>
            <p className="text-[12px] text-[#7c695e] font-light leading-relaxed">Executing structural reinforcement, heavy masonry, and site framework with generational build durability guidelines.</p>
          </div>
          <div className="flex flex-col items-start p-6 bg-[#f5efe6] border border-[#e2d9cc]">
            <ShieldCheck className="text-amber-800 mb-4 stroke-[1.2]" size={28} />
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2c221e] mb-2">03 / Premium Joinery</h4>
            <p className="text-[12px] text-[#7c695e] font-light leading-relaxed">Finishing layouts with exquisite wall panelings, custom acoustic treatments, and hand-selected walnut veneers.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MISSION, VISION & CORE VALUES --- */}
      <section  data-aos="fade-left" className="max-w-5xl mx-auto text-left border-t border-[#e6dfd3] pt-16 pb-4">
        <p className="text-[10px] tracking-[0.4em] text-amber-700 uppercase mb-3 font-semibold font-sans">
          Our Blueprint
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-[#2c221e] mb-12 uppercase">
          Mission, Vision & Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Deep Walnut Card */}
          <div className="bg-[#1c1613] text-[#F4F1EA] p-8 flex flex-col justify-between min-h-[280px] shadow-xl border border-[#2c221e]">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 font-sans">
              Our Mission
            </h4>
            <p className="text-xs font-light text-stone-300/90 leading-relaxed mt-4">
              To deliver superior master-quality construction and organic interior design
              solutions that transform standard spaces into permanent structural expressions of elite
              craftsmanship, utility, and timeless luxury.
            </p>
            <div className="w-8 h-[1px] bg-amber-400/50 mt-6" />
          </div>

          {/* Medium Oak Card */}
          <div className="bg-[#3d2f26] text-[#F4F1EA] p-8 flex flex-col justify-between min-h-[280px] shadow-xl border border-[#524033]">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 font-sans">
              Our Vision
            </h4>
            <p className="text-xs font-light text-stone-200/90 leading-relaxed mt-4">
              To stand as the most trusted integrated asset in heavy construction and
              high-end luxury design across India, celebrated for bespoke structural forms that
              inspire generational lines and client philosophies.
            </p>
            <div className="w-8 h-[1px] bg-amber-400/50 mt-6" />
          </div>

          {/* Deep Forest/Earthy Card */}
          <div className="bg-[#242b26] text-[#F4F1EA] p-8 flex flex-col justify-between min-h-[280px] shadow-xl border border-[#313b34]">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 font-sans">
              Core Values
            </h4>
            <ul className="text-xs font-light text-stone-200/90 space-y-2.5 mt-4 list-none">
              <li className="flex items-center space-x-2.5">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                <span>Excellence in every structural layer.</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                <span>Integrity within financial boundaries.</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                <span>Bespoke micro-engineering details.</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                <span>Accountability from foundation to finish.</span>
              </li>
            </ul>
            <div className="w-8 h-[1px] bg-amber-400/50 mt-4" />
          </div>
        </div>
      </section>
    </div>
  );
}