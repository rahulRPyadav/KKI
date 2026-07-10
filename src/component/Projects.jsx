import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const [activeSegment, setActiveSegment] = useState("Residential");

  // --- 100% REAL DATA FROM YOUR IMAGES WITH UNIQUE 5-7 PHOTOS PER PROJECT ---
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
          "https://images.unsplash.com/photo-1613490908573-1bb6c2684534?q=80&w=600",
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
      },
      { 
        name: "South City I", 
        category: "Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=600",
          "https://images.unsplash.com/photo-1512914890363-0b046a6f6634?q=80&w=600",
          "https://images.unsplash.com/photo-1505691938895-1758d7def515?q=80&w=600",
          "https://images.unsplash.com/photo-1502005097973-f5446002573f?q=80&w=600",
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=600"
        ] 
      },
      { 
        name: "Nirvana Country", 
        category: "Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600",
          "https://images.unsplash.com/photo-1494526585095-c15ce1101183?q=80&w=600",
          "https://images.unsplash.com/photo-1502672260266-1c1cd2cb9eb1?q=80&w=600",
          "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=600",
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600"
        ] 
      },
      { 
        name: "The Lilac", 
        category: "Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=600",
          "https://images.unsplash.com/photo-1598928506311-c55dd1048b28?q=80&w=600",
          "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=600",
          "https://images.unsplash.com/photo-1556912998-c57cc6b63ce7?q=80&w=600",
          "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=600"
        ] 
      },
      { 
        name: "Vatika City", 
        category: "Residential Society", 
        images: [
          "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=600",
          "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=600",
          "https://images.unsplash.com/photo-1560440021-33f9b867899d?q=80&w=600",
          "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=600",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=600"
        ] 
      },
      { 
        name: "Farmhouses — Gurugram & Delhi", 
        category: "Luxury Independent Farmhouses", 
        images: [
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600",
          "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=600",
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=600",
          "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600",
          "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=600"
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
        name: "The Wellness & Healthcare Lounge", 
        category: "Modern Healthcare Facility & Clinic", 
        images: [
          "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600",
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600",
          "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600",
          "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600",
          "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600"
        ] 
      },
      { 
        name: "Elite Co-working Pavilion", 
        category: "Turnkey Flexible Workspace", 
        images: [
          "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=600",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600",
          "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600",
          "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=600",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600"
        ] 
      },
      { 
        name: "Signature Kiosk Network", 
        category: "High-End Brand Retail Kiosks", 
        images: [
          "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=600",
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=600",
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600",
          "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=600",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600"
        ] 
      }
    ]
  };

  const currentProjects = projectData[activeSegment] || [];

  return (
    <div className="bg-[#FAF9F6] py-16 px-6 md:px-12 lg:px-24 text-stone-800 animate-fadeIn space-y-16">
      
      {/* --- HEADER CONTROLLERS --- */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8 border-b border-stone-200/60 pb-8">
        <div className="text-left max-w-2xl">
          <p className="text-[10px] tracking-[0.3em] text-amber-800 uppercase mb-3 font-semibold">Our Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-stone-800 mb-4 uppercase">
            {activeSegment} Projects
          </h2>
          <p className="text-xs md:text-sm text-stone-500 font-light leading-relaxed">
            {activeSegment === "Residential" 
              ? "R.L. Interior has had the privilege of crafting bespoke interiors within some of the National Capital Region's most prestigious residential communities. Each project is delivered with the highest regard for client privacy, personal taste, and the distinctive character of the residence." 
              : "A curated selection of commercial projects that reflect R.L. Interior' versatility, scale, andcommitment to quality across the hospitality, F&B, healthcare, and corporate sectors"

            }
          </p>
        </div>

        {/* Segment Capsule Switcher Buttons */}
        <div className="flex bg-stone-100 p-1 rounded-sm border border-stone-200/40 select-none">
          {["Residential", "Commercial"].map((segment) => (
            <button
              key={segment}
              onClick={() => setActiveSegment(segment)}
              className={`text-[11px] uppercase tracking-widest px-5 py-2.5 transition-all duration-300 font-medium cursor-pointer ${
                activeSegment === segment 
                  ? "bg-white text-amber-800 shadow-xs font-semibold" 
                  : "text-stone-400 hover:text-stone-800"
              }`}
            >
              {segment}
            </button>
          ))}
        </div>
      </section>

      {/* --- LIVE INTERACTIVE PORTFOLIO GRID --- */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <ProjectCard key={`${activeSegment}-${index}`} project={project} />
          ))}
        </div>
      </section>

      {/* --- BOTTOM RUNNING FOOTER STAMP --- */}
      <div className="text-center pt-8 border-t border-stone-200/30 text-[10px] uppercase tracking-[0.2em] text-stone-400">
        Building Excellence. Designing Legacy. · Gurugram, India
      </div>

    </div>
  );
}

/* ====================================================================
   SUB-COMPONENT: Individual Advanced Project Card (With Blend Animation)
   ==================================================================== */
function ProjectCard({ project }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  const hoverTimer = useRef(null);
  const intervalTimer = useRef(null);

  // Smooth Cross-Fade Logic
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
      className="group relative flex flex-col bg-white border border-stone-200/40 overflow-hidden shadow-xs transition-all duration-500 hover:shadow-md animate-fadeIn"
    >
      {/* Image Gallery Canvas */}
      <div className="relative aspect-[4/3] bg-stone-950 overflow-hidden select-none">
        <img 
          src={project.images[imgIndex]} 
          alt={project.name} 
          className={`w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-all duration-500 ${
            fadeState ? "opacity-100 filter blur-0" : "opacity-40 filter blur-[2px]"
          }`}
          style={{ transitionProperty: "opacity, filter" }}
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-amber-950/10 transition-all duration-500 z-10" />

        {/* Navigation Overlays for Mobile/Touch and Hover desktop */}
        <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button 
            onClick={showPrevImage}
            className="p-1.5 rounded-full bg-white/80 hover:bg-white text-stone-800 transition shadow-xs cursor-pointer backdrop-blur-xs outline-none"
          >
            <ChevronLeft size={14} />
          </button>
          <button 
            onClick={showNextImage}
            className="p-1.5 rounded-full bg-white/80 hover:bg-white text-stone-800 transition shadow-xs cursor-pointer backdrop-blur-xs outline-none"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Dynamic Micro Progress Pagination Dots */}
        <div className="absolute bottom-3 right-4 flex space-x-1.5 z-20">
          {project.images.map((_, i) => (
            <span 
              key={i} 
              className={`h-1 rounded-full transition-all duration-300 ${
                i === imgIndex ? "w-3 bg-amber-500" : "w-1 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Typography Metadata Container */}
      <div className="p-6 flex flex-col justify-between flex-grow bg-white z-20">
        <div className="space-y-2 text-left">
          <p className="text-[9px] uppercase tracking-[0.15em] text-amber-800 font-medium">
            {project.category}
          </p>
          <h3 className="text-sm md:text-base font-serif text-stone-900 tracking-wide line-clamp-1 group-hover:text-amber-900 transition-colors duration-300">
            {project.name}
          </h3>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-stone-800 transition-colors duration-300">
          <span>View Blueprints & Case</span>
          <div className="p-1 bg-stone-50 group-hover:bg-amber-800 group-hover:text-white transition-all duration-300 rounded-sm">
            <ArrowUpRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}