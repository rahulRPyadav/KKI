import { useState } from "react";

export default function Faq() {
  // Kis question ko open rakhna hai, uski state (Default pehla open rahega)
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What services does R.L. Interior offer?",
      answer: "We offer comprehensive bespoke design solutions, including residential interior design, commercial space planning, architectural drafting, turnkey execution, and custom timber joinery/furniture design."
    },
    {
      question: "How do we start a project with you?",
      answer: "The process begins with an initial consultation call or visit. We discuss your vision, spatial requirements, budget, and timeline. Post agreement, our architectural design phase and conceptual layout planning begin."
    },
    {
      question: "Do you handle execution and construction management?",
      answer: "Yes, we are a full-service studio. From foundational brickworks and civil structural tasks to final furniture placement, luxury finishes, and lighting layout execution—our internal team handles everything."
    },
    {
      question: "What is the typical timeline for an interior project?",
      answer: "Project timelines depend entirely on the scale and complexity of the structure. A standard 3BHK high-end residential project generally takes between 60 to 90 working days from design sign-off to handover."
    },
    {
      question: "Where is your office located, and do you work outside Gurugram?",
      answer: "Our primary studio is located at 855, Sector 51, Gurugram, Haryana. While our core operations are centered in Delhi NCR, we execute premium turnkey luxury projects across pan-India based on requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#766940] via-[#92845a] to-[#ad9a65] mt-[-110px] min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 select-none font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16" data-aos="fade-up">
          <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-amber-800 bg-amber-800/5 px-3 py-1 rounded-full">
            Queries & Clarifications
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 tracking-wide pt-1">
            Frequently Asked <span className="italic font-light text-amber-800">Questions</span>
          </h2>
          <div className="w-12 h-[1px] bg-amber-800/40 mx-auto mt-4" />
          <p className="text-xs text-stone-500 font-light max-w-md mx-auto pt-2 leading-relaxed">
            Everything you need to know about our architectural precision, timelines, and bespoke interior design process.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="mt-[-40px] space-y-4" data-aos="fade-up" data-aos-delay="100">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border rounded-sm transition-all duration-300 bg-[#ad9a65] ${
                  isOpen ? "border-amber-800/40 shadow-md shadow-stone-800" : "border-stone-200/60 hover:border-stone-400"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none group cursor-pointer"
                >
                  <span className={`text-sm tracking-wide transition-colors duration-200 font-medium ${
                    isOpen ? "text-amber-800 font-semibold" : "text-stone-800 group-hover:text-amber-800"
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Premium Micro-animated Plus/Minus Icon */}
                  <div className="relative w-4 h-4 shrink-0 flex items-center justify-center ml-4">
                    <span className={`absolute block w-3.5 h-[1.5px] bg-current transition-transform duration-300 ${
                      isOpen ? "text-amber-800 rotate-0" : "text-stone-900 group-hover:text-stone-700"
                    }`} />
                    <span className={`absolute block w-3.5 h-[1.5px] bg-current transition-transform duration-300 ${
                      isOpen ? "text-amber-800 rotate-0 scale-0" : "text-stone-900 group-hover:text-stone-700 rotate-90"
                    }`} />
                  </div>
                </button>

                {/* Smooth Collapsible Content Container */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 border-t border-stone-100" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-xs text-stone-900 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Redirect Note */}
        <div className="text-center mt-12 pt-6 border-t border-stone-200/50" data-aos="fade-up">
          <p className="text-xs text-stone-400 font-light">
            Still have an unanswered question? 
            <a 
              href="/contact" 
              className="text-amber-800 hover:text-amber-950 font-medium ml-1.5 underline underline-offset-4 transition-colors"
            >
              Get in touch with our desk
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}