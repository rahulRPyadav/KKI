import { useState } from "react";
import { ChevronDown, Quote, Star, User } from "lucide-react";

export default function Pages() {
  // State for FAQ Dropdowns
  const [openFaq, setOpenFaq] = useState(null);
  
  // State for Testimonial Selector
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const faqs = [
    {
      question: "What is R.L. Interior's core project execution timeline?",
      answer: "Depending on the scale, high-end residential architectural structural setups combined with custom interior joinery take between 4 to 6 months. We maintain strict milestone schedules to ensure execution stays on time, every time."
    },
    {
      question: "Do you handle civil construction along with interior styling?",
      answer: "Yes, our primary competitive edge is integrated execution. Mr. Kailash Yadav oversees everything from raw foundational concrete masonry and structural steel setups to micro-level timber veneer detailing and lighting channels."
    },
    {
      question: "Can we source our own premium finishing materials?",
      answer: "We absolute respect our clients' custom vision. While we provide global grade sourcing for luxury walnuts, premium marbles, and acoustic materials, you are always free to provide specific artisanal elements."
    },
    {
      question: "What geographical locations does your design studio cover?",
      answer: "Currently, our base network actively services premium residential gated schemes, high-end hospitality hubs, and corporate spaces across the National Capital Region (NCR), including Gurugram, Delhi, Noida, and adjoining luxury sectors."
    }
  ];

  const testimonials = [
    {
      name: "Vikram Malhotra",
      role: "Managing Director, Alpha Retail",
      project: "Luxury Corporate HQ, Gurugram",
      rating: 5,
      review: "R.L. Interior completely turned our office architecture around. The spatial flow and custom solid oak wall panels reflect true corporate luxury. The structural capability of handling civil layout with micro interior adjustments saved us months of coordinate delays."
    },
    {
      name: "Ananya Sharma",
      role: "Homeowner",
      project: "Ultra-Luxury Villa, DLF Phase 5",
      rating: 5,
      review: "Working with Mr. Kailash Yadav was an absolute masterclass. His 26 years of construction wisdom show in the microscopic alignment of natural lights and premium walnut fittings. They converted our empty residential slab into an organic art piece."
    },
    {
      name: "Rohan Mehra",
      role: "Founder, The Oak Bistro",
      project: "Fine-Dining Restaurant, New Delhi",
      rating: 5,
      review: "Aesthetic integrity meets tough engineering stability. R.L. Interior handled the complex plumbing, high-load ceiling frameworks, and luxurious ambient lighting profiles flawlessly. Highly recommended for commercial elite scale architecture."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#F9F6F0] my-[-24px] py-12 px-6 md:px-12 lg:px-24 text-[#2c221e] animate-fadeIn space-y-24 border-b border-[#e6dfd3]">
      
      {/* --- PAGE HEADER --- */}
      <section className="max-w-4xl mx-auto text-center pt-6 space-y-3">
        <p className="text-[10px] tracking-[0.4em] text-amber-700 uppercase font-semibold font-sans">
          Studio Archive
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-[#2c221e] uppercase">
          Resources & Reviews
        </h2>
        <div className="w-12 h-[1px] bg-amber-800/40 mx-auto mt-4" />
      </section>

      {/* --- SECTION 1: PREMIUM INTERACTIVE FAQS --- */}
      <section className="max-w-3xl mx-auto space-y-8">
        <div className="text-left border-b border-[#e6dfd3] pb-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 font-sans">
            01 / Frequently Asked Queries
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className="border border-[#e2d9cc] bg-[#fdfcfb] shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-[#f5efe6]/40 transition-colors group"
                >
                  <span className="font-serif text-sm md:text-base text-[#1c1613] font-light group-hover:text-amber-900 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={`text-amber-800 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
                  />
                </button>
                
                {/* Collapsible Content Area */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 border-t border-[#e6dfd3]/60 py-4 px-6 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-xs md:text-sm text-[#7c695e] font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SECTION 2: CLIENT TESTIMONIAL DROPDOWN / SELECTOR --- */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="text-left border-b border-[#e6dfd3] pb-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 font-sans">
            02 / Client Testimonials & Verdicts
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Menu Selection Panel (Dropdown Navigation Style) */}
          <div className="lg:col-span-4 space-y-2.5">
            <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400 font-medium font-sans mb-1 pl-1">Select Case Study</p>
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-full p-4 text-left text-xs uppercase tracking-wider font-sans border transition-all duration-300 flex items-center justify-between ${
                  activeTestimonial === idx
                    ? "bg-[#3d2f26] text-[#F4F1EA] border-[#3d2f26] shadow-md"
                    : "bg-[#fdfcfb] text-[#7c695e] border-[#e2d9cc] hover:bg-[#f5efe6]"
                }`}
              >
                <span className="truncate pr-2 font-medium">{t.name}</span>
                <span className={`text-[9px] font-serif italic ${activeTestimonial === idx ? "text-amber-400" : "text-stone-400"}`}>
                  View Card
                </span>
              </button>
            ))}
          </div>

          {/* Right Selected Display Card */}
          <div className="lg:col-span-8 bg-[#1c1613] text-[#F4F1EA] p-8 md:p-10 border border-[#2c221e] shadow-xl flex flex-col justify-between min-h-[320px] relative overflow-hidden">
            
            {/* Background Decorative Large Quote */}
            <Quote className="absolute right-6 top-6 text-[#3d2f26]/40 stroke-[1.2]" size={90} />

            <div className="space-y-6 relative z-10">
              {/* Stars & Project tag */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#3d2f26]/80 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold font-sans">
                  {testimonials[activeTestimonial].project}
                </span>
                <div className="flex space-x-0.5">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="font-serif italic text-sm md:text-base text-stone-200/90 font-light leading-relaxed">
                "{testimonials[activeTestimonial].review}"
              </p>
            </div>

            {/* Profile Info */}
            <div className="pt-6 border-t border-[#3d2f26]/80 flex items-center space-x-3 mt-6">
              <div className="w-9 h-9 bg-[#3d2f26] border border-[#524033] rounded-full flex items-center justify-center text-amber-400">
                <User size={14} className="stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F4F1EA]">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-[10px] text-stone-400 font-light font-sans mt-0.5">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}