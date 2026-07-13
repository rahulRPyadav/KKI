import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Home({ setActiveTab }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1920",
      title: "Crafting Spaces,",
      subtitle: "Inspiring Everyday Life.",
      tag: "Luxury Interior Architecture"
    },
    {
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920",
      title: "Modern Elegance,",
      subtitle: "Redefining Comfort.",
      tag: "Bespoke Residential Design"
    },
    {
      url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1920",
      title: "Minimalist Touch,",
      subtitle: "Timeless Masterpieces.",
      tag: "Commercial & Retail Spaces"
    }
  ];

  // 10 Seconds Auto-play Logic for Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Scroll Trigger Counter Logic (0 to 26)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = 26;
          const duration = 1500;
          const incrementTime = Math.floor(duration / end);

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
          }, incrementTime);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* --- PREMIUM WOODEN HERO SLIDER --- */}
      <div className="relative h-[80vh] md:h-[90vh] mt-[-24px] w-full overflow-hidden bg-[#1c1613]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
          
            <img   data-aos="zoom-in" src={slide.url} alt={slide.title} className="w-full h-full object-cover scale-105 animate-subtleZoom" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1613]/80 via-[#1c1613]/50 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-24 lg:px-32 text-left">
              <p  className="text-[10px] md:text-xs tracking-[0.4em] text-amber-600 uppercase mb-4 font-semibold font-sans">
                {slide.tag}
              </p>
              <h1 data-aos="zoom-out" className="text-4xl md:text-7xl font-serif font-light text-[#F4F1EA] max-w-4xl leading-[1.15] tracking-wide">
                {slide.title} <br />
                <span className="italic font-light text-amber-100/80 font-serif block mt-2">{slide.subtitle}</span>
              </h1>
              
            
              <button
                onClick={() => setActiveTab('Projects')}
                className="mt-8 bg-[#3d2f26] border border-[#524033] text-[#F4F1EA] text-[10px] md:text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-amber-800 hover:border-amber-700 transition-all duration-300 flex items-center space-x-3 cursor-pointer shadow-xl backdrop-blur-sm"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight size={14} className="text-amber-400" />
              </button>
            </div>
          </div>
        ))}

      
        <div  className="absolute bottom-10 left-6 md:left-24 z-20 flex space-x-4 items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[2px] transition-all duration-500 cursor-pointer ${
                index === currentSlide ? "w-12 bg-amber-600" : "w-6 bg-[#F4F1EA]/30 hover:bg-[#F4F1EA]/60"
              }`}
            />
          ))}
        </div>
      </div>

      <section  data-aos="zoom-in" className="bg-[#F9F6F0] py-16 md:py-28 px-6 md:px-12 lg:px-24 border-b border-[#e6dfd3]">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Block: Warm Accent Live Counter */}
          <div ref={countRef} className="w-full lg:col-span-5 grid grid-cols-2 gap-6 items-start lg:border-r border-[#e6dfd3] lg:pr-12">
            <div>
              <h2 className="text-7xl md:text-9xl font-serif font-extralight text-[#2c221e] tracking-tighter leading-none">
                {count}<span className="text-amber-700 font-sans text-4xl md:text-6xl select-none">+</span>
              </h2>
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#5c4a40] mt-4 leading-relaxed">
                Years Of <br /> Experience
              </p>
            </div>
            <div className="space-y-4 pt-2">
              <p className="text-xs md:text-[13px] text-[#6b584c] font-light leading-relaxed">
                We design environments that marry structural integrity with rich organic elements, turning native spaces into tactile poetry.
              </p>
              <div className="h-[1px] w-12 bg-amber-700/60" />
              <p className="font-serif italic text-xl text-amber-900 tracking-widest font-medium">RL.interior</p>
            </div>
          </div>

          {/* Right Block: 3 Luxurious Oak-Themed Cards */}
          <div className="w-full lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:pl-4">
            
            {/* Card 1 */}
            <div className="flex flex-col items-start space-y-4 group">
              <div className="p-3 bg-[#f0eae1] rounded-xs text-amber-900 border border-[#e2d9cc] group-hover:bg-[#3d2f26] group-hover:text-[#F4F1EA] transition-all duration-300">
                <svg className="w-5 h-5 stroke-[1.1]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 3h18v18H3z" /><path d="M9 3v18M3 9h18" />
                </svg>
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2c221e]">Space Planning</h3>
              <p className="text-[12px] text-[#7c695e] font-light leading-relaxed">Architectural floor layouts optimized for daylight routing and seamless organic circulation.</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start space-y-4 group">
              <div className="p-3 bg-[#f0eae1] rounded-xs text-amber-900 border border-[#e2d9cc] group-hover:bg-[#3d2f26] group-hover:text-[#F4F1EA] transition-all duration-300">
                <svg className="w-5 h-5 stroke-[1.1]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 10V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" /><path d="M2 14h20M4 14V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                </svg>
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2c221e]">Interior Design</h3>
              <p className="text-[12px] text-[#7c695e] font-light leading-relaxed">Curating tactile raw textures, neutral tone schemes, and bespoke wall wood panelling.</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start space-y-4 group sm:col-span-2 lg:col-span-1">
              <div className="p-3 bg-[#f0eae1] rounded-xs text-amber-900 border border-[#e2d9cc] group-hover:bg-[#3d2f26] group-hover:text-[#F4F1EA] transition-all duration-300">
                <svg className="w-5 h-5 stroke-[1.1]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 21h6M12 11v10M8 11h8l-2-7H10z" />
                </svg>
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2c221e]">Furniture Design</h3>
              <p className="text-[12px] text-[#7c695e] font-light leading-relaxed">Handmade joinery and customizable solid walnut elements built for generational durability.</p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}