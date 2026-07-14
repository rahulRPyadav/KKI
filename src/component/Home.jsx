import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowUpRight,
  Trophy,
  Smile,
  Calculator,
  DollarSign,
  Handshake,
  Wrench,
  Upload,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

export default function Home({ setActiveTab }) {
  // --- SLIDER STATES ---
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1920",
      title: "Crafting Spaces,",
      subtitle: "Inspiring Everyday Life.",
      tag: "Luxury Interior Architecture",
    },
    {
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920",
      title: "Modern Elegance,",
      subtitle: "Redefining Comfort.",
      tag: "Bespoke Residential Design",
    },
    {
      url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1920",
      title: "Minimalist Touch,",
      subtitle: "Timeless Masterpieces.",
      tag: "Commercial & Retail Spaces",
    },
  ];

  // Mouse coordinates state for the 50px blur spot
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Handler to capture absolute cursor position relative to slider container
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // --- LIVE COUNTER STATES ---
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);
  const navigate = useNavigate();

  // --- CONTACT FORM STATES ---
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    serviceType: "Designing",
    projectType: "Residential Interior",
    floorPlan: "2 BHK Interior Design",
    projectAddress: "",
    requirements: "",
    agreeToTerms: false,
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);


    // User ke click karne ke liye original link
  const myGoogleMapLink = "https://www.google.com/maps/place/855,+Sector+51,+Gurugram,+Haryana+122018/@28.432401,77.06171,614m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390d188442b0dcc9:0x642bc5a1d851954d!8m2!3d28.4323963!4d77.0642849!16s%2Fg%2F11vyx818lx?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";

  // Iframe ke andar real map show karne ke liye official EMBED URL
  const iframeEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3496081515254!2d77.06171007632688!3d28.432400975774304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d188442b0dcc9%3A0x642bc5a1d851954d!2s855%2C%20Sector%2051%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";




  // // --- WHY WORK WITH US FEATURES DATA ---
  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-amber-600 stroke-[1.5]" />,
      title: "Award-Winning Team",
      desc: "Recognized locally for excellence in design & delivery.",
    },
    {
      icon: <Smile className="w-8 h-8 text-amber-600 stroke-[1.5]" />,
      title: "100% Customer Satisfaction",
      desc: "Focused on customer satisfaction through teamwork and dedication.",
    },
    {
      icon: <Calculator className="w-8 h-8 text-amber-600 stroke-[1.5]" />,
      title: "Smart Budget Planning",
      desc: "Transparent & accurate estimates before execution.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-amber-600 stroke-[1.5]" />,
      title: "Cost-Effective Execution",
      desc: "Quality, aesthetics, and budget in perfect harmony.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-amber-600 stroke-[1.5]" />,
      title: "Personal Involvement",
      desc: "Each project is overseen with top-tier attention & dedication.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-amber-600 stroke-[1.5]" />,
      title: "Post-Project Support",
      desc: "We continue to care even after handover with dedicated after-service.",
    },
  ];

  // --- GALLERY IMAGES (20 Images for 5 Rows × 4 Cols Layout) ---
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600",
      title: "Luxury Bedroom",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600",
      title: "Modern TV Unit",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=600",
      title: "Elegant Lounge",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600",
      title: "Minimalist Kitchen",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600",
      title: "Premium Dining",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600",
      title: "Classic Living",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600",
      title: "Kids Room",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600",
      title: "Wooden Ceilings",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600",
      title: "Studio Flat",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600",
      title: "Master Bed Suite",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600",
      title: "Cozy Corner",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600",
      title: "Luxury Wardrobe",
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600",
      title: "Bright Foyer",
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600",
      title: "Bespoke Sofa Setup",
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600",
      title: "Contemporary Bath",
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=600",
      title: "Wooden Paneling",
    },
    {
      id: 17,
      url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600",
      title: "Office Cabin",
    },
    {
      id: 18,
      url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600",
      title: "Aesthetic Wall decor",
    },
    {
      id: 19,
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600",
      title: "Luxury Villa Hall",
    },
    {
      id: 20,
      url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600",
      title: "Open Kitchen Plan",
    },
  ];

  // 10 Seconds Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
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
      { threshold: 0.2 },
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, []);

  // --- FORM HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("File:", uploadedFile);
    alert("Thank you! Your consultation request has been sent.");
  };

  // --- SOCIAL MEDIA LINKS DATA ---
  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber-700"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      url: "https://www.instagram.com/your_username",
      handle: "@rl.interior",
      bgColor: "hover:bg-pink-50 hover:border-pink-200",
    },
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber-700"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
      url: "https://www.facebook.com/your_page",
      handle: "RL Interior",
      bgColor: "hover:bg-blue-50 hover:border-blue-200",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber-700"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: "https://www.linkedin.com/in/your_profile",
      handle: "RL Interior",
      bgColor: "hover:bg-indigo-50 hover:border-indigo-200",
    },
  ];

  return (
    <div className="animate-fadeIn">
      {/* ========================================== */}
      {/* --- 1. PREMIUM WOODEN HERO SLIDER ---      */}

      {/* --- CINEMATIC HERO SLIDER WITH DYNAMIC CURSOR MOUSE BLUR --- */}
      <div
        className="relative h-[80vh] md:h-[90vh] mt-[-24px] w-full overflow-hidden bg-[#1c1613] select-none cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Base Premium Photo Layer */}
              <img
                src={slide.url}
                alt={slide.title}
                className={`w-full h-full object-cover ${
                  isActive ? "premium-fade-zoom" : "scale-100"
                }`}
              />

              {/* Dynamic 50px Glass Blur Spot Layer following the cursor */}
              {isActive && isHovered && (
                <div
                  className="absolute inset-0 pointer-events-none backdrop-blur-md z-20"
                  style={{
                    maskImage: `radial-gradient(50px circle at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(50px circle at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`,
                  }}
                />
              )}

              {/* Luxury dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c1613]/85 via-[#1c1613]/40 to-transparent z-30" />

              {/* Slider Text Contents */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-24 lg:px-32 text-left z-40 pointer-events-auto">
                <p className="text-[10px] md:text-xs tracking-[0.4em] text-amber-500 uppercase mb-4 font-semibold font-sans">
                  {slide.tag}
                </p>
                <h1 className="text-4xl md:text-7xl font-serif font-light text-[#F4F1EA] max-w-4xl leading-[1.15] tracking-wide">
                  {slide.title} <br />
                  <span className="italic font-light text-amber-200/80 font-serif block mt-2">
                    {slide.subtitle}
                  </span>
                </h1>

                {/* Explore Portfolio Action */}
                <button
                  onClick={() => navigate("/projects")}
                  className="mt-8 bg-[#3d2f26]/95 border border-[#524033] text-[#F4F1EA] text-[10px] md:text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-amber-800 hover:border-amber-700 transition-all duration-300 flex items-center space-x-3 cursor-pointer shadow-xl rounded-sm"
                >
                  <span>Explore Portfolio</span>
                  <ArrowUpRight size={14} className="text-amber-400" />
                </button>
              </div>
            </div>
          );
        })}

        {/* Simple Premium Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full z-40 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[30px] md:h-[50px] fill-[#FAF9F6]"
          >
            <path d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        {/* Slider Navigation Indicators */}
        <div className="absolute bottom-12 left-6 md:left-24 z-50 flex space-x-3 items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="h-[2px] transition-all duration-500 cursor-pointer w-6 bg-[#F4F1EA]/30 hover:bg-[#F4F1EA]/60"
              style={{
                width: index === currentSlide ? "40px" : "20px",
                backgroundColor: index === currentSlide ? "#f59e0b" : "",
              }}
            />
          ))}
        </div>
      </div>

      {/* ========================================== */}
      {/* --- 2. EXPERTISE & LIVE COUNTER SECTION --- */}
      {/* ========================================== */}
      <section
        data-aos="zoom-in"
        className="bg-[#F9F6F0] py-16 md:py-28 px-6 md:px-12 lg:px-24 border-b border-[#e6dfd3]"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* Left Block: Warm Accent Live Counter */}
          <div
            ref={countRef}
            className="w-full lg:col-span-5 grid grid-cols-2 gap-6 items-start lg:border-r border-[#e6dfd3] lg:pr-12"
          >
            <div>
              <h2 className="text-7xl md:text-9xl font-serif font-extralight text-[#2c221e] tracking-tighter leading-none">
                {count}
                <span className="text-amber-700 font-sans text-4xl md:text-6xl select-none">
                  +
                </span>
              </h2>
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#5c4a40] mt-4 leading-relaxed">
                Years Of <br /> Experience
              </p>
            </div>
            <div className="space-y-4 pt-2">
              <p className="text-xs md:text-[13px] text-[#6b584c] font-light leading-relaxed">
                We design environments that marry structural integrity with rich
                organic elements, turning native spaces into tactile poetry.
              </p>
              <div className="h-[1px] w-12 bg-amber-700/60" />
              <p className="font-serif italic text-xl text-amber-900 tracking-widest font-medium">
                RL.interior
              </p>
            </div>
          </div>

          {/* Right Block: 3 Luxurious Oak-Themed Cards */}
          <div className="w-full lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:pl-4">
            <div className="flex flex-col items-start space-y-4 group">
              <div className="p-3 bg-[#f0eae1] rounded-xs text-amber-900 border border-[#e2d9cc] group-hover:bg-[#3d2f26] group-hover:text-[#F4F1EA] transition-all duration-300">
                <svg
                  className="w-5 h-5 stroke-[1.1]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M3 3h18v18H3z" />
                  <path d="M9 3v18M3 9h18" />
                </svg>
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2c221e]">
                Space Planning
              </h3>
              <p className="text-[12px] text-[#7c695e] font-light leading-relaxed">
                Architectural floor layouts optimized for daylight routing and
                seamless organic circulation.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-4 group">
              <div className="p-3 bg-[#f0eae1] rounded-xs text-amber-900 border border-[#e2d9cc] group-hover:bg-[#3d2f26] group-hover:text-[#F4F1EA] transition-all duration-300">
                <svg
                  className="w-5 h-5 stroke-[1.1]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M4 10V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
                  <path d="M2 14h20M4 14V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
                </svg>
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2c221e]">
                Interior Design
              </h3>
              <p className="text-[12px] text-[#7c695e] font-light leading-relaxed">
                Curating tactile raw textures, neutral tone schemes, and bespoke
                wall wood panelling.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-4 group sm:col-span-2 lg:col-span-1">
              <div className="p-3 bg-[#f0eae1] rounded-xs text-amber-900 border border-[#e2d9cc] group-hover:bg-[#3d2f26] group-hover:text-[#F4F1EA] transition-all duration-300">
                <svg
                  className="w-5 h-5 stroke-[1.1]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M9 21h6M12 11v10M8 11h8l-2-7H10z" />
                </svg>
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2c221e]">
                Furniture Design
              </h3>
              <p className="text-[12px] text-[#7c695e] font-light leading-relaxed">
                Handmade joinery and customizable solid walnut elements built
                for generational durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* --- 3. WHY CHOOSE US GRID SECTION ---      */}
      {/* ========================================== */}
      <section className="bg-[#FFFDF9] py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-amber-600 uppercase mb-3 font-semibold font-sans">
              Our Values
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#2c221e]">
              Why Work With Us
            </h2>
          </div>

          {/* Cards Grid with Scroll Reveal and Premium Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                // Scroll animation triggers card-by-card on scroll
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-[#F9F6F0]/40 border border-[#e6dfd3]/60 rounded-lg p-8 flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-amber-950/[0.02] hover:border-amber-600/30 group relative overflow-hidden cursor-pointer"
              >
                {/* Circular Icon Container shifting background on hover */}
                <div className="mb-5 p-4 bg-[#f0eae1] rounded-full transition-all duration-500 group-hover:bg-amber-50 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                  {item.icon}
                </div>

                {/* Title with color shift on hover */}
                <h3 className="text-lg font-serif font-medium text-[#2c221e] mb-3 transition-colors duration-300 group-hover:text-amber-800">
                  {item.title}
                </h3>

                <p className="text-xs md:text-[13px] text-[#7c695e] font-light leading-relaxed max-w-sm">
                  {item.desc}
                </p>

                {/* Premium Bottom Accent Line (Grows on hover) */}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-amber-600 transition-all duration-500 ease-out group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* --- 4. CONTACT & CONSULTATION SECTION ---  */}
      {/* ========================================== */}
      <section className="bg-[#FBF9F6] py-20 px-6 md:px-12 lg:px-24 border-t border-[#e6dfd3]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-amber-600 uppercase mb-3 font-semibold font-sans">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#2c221e]">
              Ready To Build Your Dream Home?
            </h2>
            <p className="text-xs md:text-sm text-[#7c695e] font-light mt-3">
              Let's design your space into something extraordinary.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Consultation Form (Left) */}
            <div className="bg-white border border-[#e6dfd3]/70 rounded-xl p-6 md:p-10 shadow-sm lg:col-span-7">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber-600 block mb-2">
                Your Dream Space Awaits
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-[#2c221e] mb-2">
                Let's Build Something Beautiful
              </h3>
              <p className="text-xs text-[#7c695e] font-light mb-8">
                Get in touch today and experience professional interior design
                that's creative, detailed, and built around you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your name here"
                    className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 font-light"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your contact number"
                      className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 font-light"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your email id here"
                      className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 text-[#4a3b32] font-light"
                    >
                      <option>Designing</option>
                      <option>Turnkey Execution</option>
                      <option>Consultation Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 text-[#4a3b32] font-light"
                    >
                      <option>Residential Interior</option>
                      <option>Commercial Space</option>
                      <option>Bespoke Villa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">
                    Choose Floor Plan *
                  </label>
                  <select
                    name="floorPlan"
                    value={formData.floorPlan}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 text-[#4a3b32] font-light"
                  >
                    <option>1 BHK / Studio Apartment</option>
                    <option>2 BHK Interior Design</option>
                    <option>3 BHK Interior Design</option>
                    <option>4 BHK / Duplex</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">
                    Project Site Address
                  </label>
                  <input
                    type="text"
                    name="projectAddress"
                    value={formData.projectAddress}
                    onChange={handleInputChange}
                    placeholder="Write site address to visit"
                    className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 font-light"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">
                    Brief About Your Requirement
                  </label>
                  <textarea
                    rows={3}
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your space or expectations"
                    className="w-full bg-[#FAF8F5] border border-[#e6dfd3] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-amber-600 font-light resize-none"
                  />
                </div>

                {/* --- DRAG & DROP SYSTEM FIELD --- */}
                <div>
                  <label className="text-xs font-medium text-[#4a3b32] block mb-1.5">
                    Upload your site layout{" "}
                    <span className="text-[#7c695e] font-light">
                      (png, jpeg or pdf format)
                    </span>
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                    className={`border-2 border-dashed rounded-lg p-5 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center ${
                      isDragging
                        ? "border-amber-600 bg-amber-50/30"
                        : "border-[#e6dfd3] bg-[#FAF8F5] hover:bg-[#f3eee6]"
                    }`}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".png,.jpg,.jpeg,.pdf"
                      className="hidden"
                    />
                    {!uploadedFile ? (
                      <>
                        <Upload className="w-6 h-6 text-amber-700/70 mb-2" />
                        <p className="text-xs text-[#5c4a40]">
                          <span className="font-semibold text-amber-700">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                      </>
                    ) : (
                      <div className="flex items-center space-x-3 w-full max-w-xs bg-white border border-[#e6dfd3] p-2 rounded shadow-sm justify-between">
                        <div className="flex items-center space-x-2 overflow-hidden">
                          <Upload className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="text-xs text-[#4a3b32] truncate">
                            {uploadedFile.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile();
                          }}
                          className="text-[10px] uppercase font-bold text-red-500 hover:text-red-700 px-1"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <input
                    type="checkbox"
                    required
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 accent-amber-700 cursor-pointer"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-[11px] text-[#7c695e] leading-tight cursor-pointer"
                  >
                    By submitting this form, you agree to the privacy policy &
                    terms and conditions.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3d2f26] border border-[#524033] text-[#F4F1EA] text-xs tracking-[0.25em] uppercase py-4 rounded-md hover:bg-amber-800 hover:border-amber-700 transition-all duration-300 font-medium cursor-pointer mt-4 shadow-md"
                >
                  Request Free Consultation
                </button>
              </form>
            </div>

            {/* Map & Quick Contacts (Right) */}
            <div className="space-y-8 lg:col-span-5 w-full">
              {/* Google Map */}
              <div data-aos="fade-left" className="lg:col-span-3 space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-500">Our Location</h4>
          <a 
            href={myGoogleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-32 bg-[#2c221e] border border-[#3d2f26] rounded-sm overflow-hidden relative shadow-lg group block cursor-pointer"
          >
            <iframe
              src={iframeEmbedSrc}
              className="w-full h-full opacity-50 group-hover:opacity-100 transition-all duration-500 grayscale invert contrast-125 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100 pointer-events-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location Map"
            />
            <div className="absolute inset-0 border border-amber-600/0 group-hover:border-amber-600/20 pointer-events-none transition-all duration-500" />
          </a>
        </div>

              {/* Social Media Links */}
              <div className="bg-white border border-[#e6dfd3]/70 rounded-xl p-6 shadow-sm">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2c221e] mb-5">
                  Follow Us on Social Media
                </h4>

                {/* Social Items List */}
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-3 border border-[#e6dfd3]/40 rounded-lg bg-[#FAF9F6]/30 transition-all duration-300 group cursor-pointer ${social.bgColor}`}
                    >
                      <div className="flex items-center space-x-3">
                        {/* Circular Icon Container */}
                        <div className="p-2 bg-[#f0eae1] rounded-full transition-transform duration-300 group-hover:scale-110">
                          {social.icon}
                        </div>
                        <div>
                          <p className="text-[10px] text-[#7c695e] uppercase tracking-wider font-medium">
                            {social.name}
                          </p>
                          <p className="text-xs font-serif text-[#2c221e] transition-colors group-hover:text-amber-800">
                            {social.handle}
                          </p>
                        </div>
                      </div>

                      {/* Micro-arrow indicator */}
                      <ArrowUpRight className="w-4 h-4 text-stone-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Cards */}
              <div className="bg-white border border-[#e6dfd3]/70 rounded-xl p-6 shadow-sm space-y-4 hover:border-amber-600 transition-all duration-300">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2c221e] border-b border-[#e6dfd3] pb-2">
                  Quick Support
                </h4>

                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="p-2 bg-amber-50 text-amber-700 rounded">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#7c695e] uppercase tracking-wider font-medium">
                      Phone Support
                    </p>
                    <p className="text-sm font-serif text-[#2c221e] group-hover:text-amber-700 transition-colors">
                      {" "}
                      <a
                        href="tel:+919876543210"
                        className="hover:text-[#f9af02] transition-colors"
                      >
                        +91-9910889575 | +91- 9990395992
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="p-2 bg-amber-50 text-amber-700 rounded">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#7c695e] uppercase tracking-wider font-medium">
                      Email Support
                    </p>
                    <p className="text-sm font-serif text-[#2c221e] group-hover:text-amber-700 transition-colors">
                      <a
                        href="mailto:info@studioelegance.com"
                        className="hover:text-[#f0ae12] transition-colors"
                      >
                        rlinterior2014@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="p-2 bg-amber-50 text-amber-700 rounded">
                    <MessageSquare size={16} />
                  </div>
                  <div
                    onClick={() => {
                      const phoneNumber = "919910889575"; // Aapka WhatsApp Number (Country code '91' ke sath)
                      const message = encodeURIComponent(
                        "Hello RL.Interior team, I would like to consult with a designer regarding my interior project.",
                      );
                      window.open(
                        `https://wa.me/${phoneNumber}?text=${message}`,
                        "_blank",
                      );
                    }}
                    className="cursor-pointer group select-none"
                  >
                    <p className="text-[10px] text-[#7c695e] uppercase tracking-wider font-medium">
                      WhatsApp Connect
                    </p>
                    <p className="text-sm font-serif text-[#2c221e] group-hover:text-amber-700 transition-colors">
                      Chat with Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* --- 5. NEW ADDITION: OUR WORK GALLERY ---   */}
      {/* ========================================== */}
      <section className="bg-[#FFFDF9] py-20 px-6 md:px-12 lg:px-24 border-t border-[#e6dfd3]">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Header Row */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
            <div>
              <p className="text-[10px] md:text-xs tracking-[0.4em] text-amber-600 uppercase mb-3 font-semibold font-sans">
                Portfolio Showcase
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-[#2c221e]">
                Our Work Gallery
              </h2>
              <p className="text-xs md:text-sm text-[#7c695e] font-light mt-3 max-w-xl">
                Explore some of our standout interior design projects work
                gallery in Jaipur and across India.
              </p>
            </div>

            {/* View All Projects Button Linking to Navigation State */}
            <div>
              <button
                onClick={() => navigate("/projects")}
                className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-800 transition duration-300"
              >
                View All Projects Images
              </button>
            </div>
          </div>

          {/* Gallery Grid (Laptop: 4 Columns | Mobile: 2 Columns | Total 5 Rows) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={img.id}
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 100}
                className="group relative overflow-hidden rounded-xl bg-[#FAF8F5] border border-[#e6dfd3]/60 aspect-[4/3] shadow-xs cursor-pointer"
              >
                {/* Image Component with Hover Subtle Zoom */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* On-Hover Dark Elegant Overlay & Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1613]/90 via-[#1c1613]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-[10px] tracking-widest text-amber-400 uppercase font-sans mb-1">
                      RL.Interior
                    </p>
                    <h4 className="text-sm font-serif text-[#F4F1EA] font-light">
                      {img.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
