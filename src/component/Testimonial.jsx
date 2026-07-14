import { useState } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Vikram Malhotra",
      role: "Homeowner",
      project: "4BHK Luxury Apartment, Sector 54",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      review: "R.L. Interior completely transformed our space into a timeless masterpiece. Their attention to detail with timber joinery and the execution of the civil structural layout was absolutely flawless. True architectural precision!",
      rating: 5
    },
    {
      id: 2,
      name: "Ananya Sharma",
      role: "Managing Director",
      project: "Corporate Studio Office, DLF Phase 3",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
      review: "We hired the team for a complete turnkey commercial office project. From the foundational plumbing and electrical layouts to the final bespoke lighting setup, everything was managed under strict timelines. Highly professional service.",
      rating: 5
    },
    {
      id: 3,
      name: "Rajesh Singhania",
      role: "Villa Owner",
      project: "Luxury Duplex Villa, Golf Course Road",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
      review: "The design aesthetics of R.L. Interior are unmatched. They don't just put furniture together; they construct spaces with a perfect balance of utility and luxury. The micro-textures and finish selections are excellent.",
      rating: 5
    },
    {
      id: 4,
      name: "Rajesh Singhania",
      role: "Villa Owner",
      project: "Luxury Duplex Villa, Golf Course Road",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
      review: "The design aesthetics of R.L. Interior are unmatched. They don't just put furniture together; they construct spaces with a perfect balance of utility and luxury. The micro-textures and finish selections are excellent.",
      rating: 5
    },
    {
      id: 5,
      name: "Kamlesh Yadav",
      role: "Developer",
      project: "Luxury Duplex Villa, Golf Course Road",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
      review: "The design aesthetics of R.L. Interior are unmatched. They don't just put furniture together; they construct spaces with a perfect balance of utility and luxury. The micro-textures and finish selections are excellent.",
      rating: 5
    }
  ];

  return (
    <section className="bg-[#FAF9F6] mt-[-90px] min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 select-none font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16" data-aos="fade-up">
          <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-amber-800 bg-amber-800/5 px-3 py-1 rounded-full">
            Client Appreciations
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 tracking-wide pt-1">
            What Our Clients <span className="italic font-light text-amber-800">Say</span>
          </h2>
          <div className="w-12 h-[1px] bg-amber-800/40 mx-auto mt-4" />
          <p className="text-xs text-stone-500 font-light max-w-md mx-auto pt-2 leading-relaxed">
            Read through the experiences of patrons who entrusted us with crafting their luxury spaces and architectural environments.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-stone-200/60 rounded-sm p-8 flex flex-col justify-between transition-all duration-300 hover:border-amber-800/40 hover:shadow-xl hover:shadow-stone-200/50 group relative"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-stone-100 group-hover:text-amber-50/70 transition-colors duration-300 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-40">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Review Text */}
              <div className="space-y-4">
                {/* Stars Rating */}
                <div className="flex space-x-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-xs text-stone-500 leading-relaxed font-light italic">
                  "{item.review}"
                </p>
              </div>

              {/* Client Info Meta Row */}
              <div className="flex items-center space-x-4 pt-8 mt-6 border-t border-stone-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 border border-stone-200"
                />
                <div>
                  <h4 className="text-xs font-semibold tracking-wider text-stone-800 uppercase">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-amber-800 font-light">
                    {item.role} — <span className="text-stone-400 font-sans">{item.project}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Consultation Call Action Trigger Prompt */}
        <div className="text-center mt-16 pt-8 border-t border-stone-200/50" data-aos="fade-up">
          <p className="text-xs text-stone-400 font-light">
            Ready to experience perfection for your own space? 
            <span className="text-amber-800 font-medium ml-1.5 font-serif italic">
              Crafted with premium architectural precision.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}