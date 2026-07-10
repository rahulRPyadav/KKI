import { Paintbrush, Hammer, Home, Briefcase, Utensils, HeartPulse, RefreshCw } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      id: "01",
      icon: <Hammer className="w-6 h-6 stroke-[1.2] text-amber-800" />,
      title: "Building & Construction Works",
      desc: "Complete structural construction including foundations, framing, masonry, and finishing for residential and commercial properties."
    },
    {
      id: "02",
      icon: <Paintbrush className="w-6 h-6 stroke-[1.2] text-amber-800" />,
      title: "Interior Design & Execution",
      desc: "End-to-end interior design encompassing spatial planning, material selection, furniture, lighting, and décor for all typologies."
    },
    {
      id: "03",
      icon: <Home className="w-6 h-6 stroke-[1.2] text-amber-800" />,
      title: "Residential Interiors",
      desc: "Luxury flat and villa interiors tailored to the lifestyle and preferences of individual homeowners, within premier gated communities."
    },
    {
      id: "04",
      icon: <Briefcase className="w-6 h-6 stroke-[1.2] text-amber-800" />,
      title: "Commercial Interiors",
      desc: "Turnkey fit-outs for restaurants, cafés, corporate offices, retail spaces, and kiosks with a strong emphasis on brand identity and experience."
    },
    {
      id: "05",
      icon: <Utensils className="w-6 h-6 stroke-[1.2] text-amber-800" />,
      title: "Hospitality Interiors",
      desc: "Hotel and resort interiors that balance aesthetic luxury with operational practicality, creating memorable guest experiences."
    },
    {
      id: "06",
      icon: <HeartPulse className="w-6 h-6 stroke-[1.2] text-amber-800" />,
      title: "Healthcare Facility Design",
      desc: "Specialised design and execution for clinics and hospitals — clean, functional, and patient-centric environments built to compliance standards."
    },
    {
      id: "07",
      icon: <RefreshCw className="w-6 h-6 stroke-[1.2] text-amber-800" />,
      title: "Renovation & Refurbishment",
      desc: "Sensitive upgrades and transformations of existing spaces, preserving character while modernising function and aesthetics."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] mt-[-18px] py-16 px-6 md:px-12 lg:px-24 text-stone-800 animate-fadeIn space-y-16">
      
      {/* --- HEADER SECTION --- */}
      <section className="max-w-5xl mx-auto text-left mt-8">
        <p className="text-[10px] tracking-[0.3em] text-amber-800 uppercase mb-3 font-semibold">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-stone-800 mb-6 uppercase">Our Services</h2>
        <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed max-w-3xl">
          R.L. Interior offers a comprehensive suite of services, enabling clients to work with a single trusted partner from groundbreaking to final handover.
        </p>
      </section>

      {/* --- SERVICES GRID DISPLAY --- */}
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {serviceList.map((service) => (
            <div 
              key={service.id} 
              className="group border-b border-stone-200 pb-8 flex flex-col justify-between transition-all duration-300 hover:border-amber-800"
            >
              <div className="space-y-4">
                {/* Top Metas: Number & Icon */}
                <div className="flex justify-between items-center">
                  <span className="font-serif text-xs text-stone-400 tracking-wider group-hover:text-amber-800 transition-colors duration-300">
                    {service.id}
                  </span>
                  <div className="p-2 bg-stone-100 group-hover:bg-amber-50 transition-colors duration-300 rounded-sm">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-serif font-light text-stone-900 group-hover:text-amber-900 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-stone-500 font-light leading-relaxed group-hover:text-stone-700 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>

              {/* Minimal Interactive Line Arrow Indicator */}
              <div className="mt-6 flex items-center space-x-2 text-[10px] uppercase tracking-widest text-stone-400 font-medium group-hover:text-amber-800 transition-colors duration-300 cursor-pointer">
                <span>View Details</span>
                <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}