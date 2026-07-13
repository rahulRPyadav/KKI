import { useState } from "react";
import { ArrowUpRight, Search, Calendar, User, Clock } from "lucide-react";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Timeless Elegance of Solid Walnut in Modern Architecture",
      excerpt: "Deep dive into how natural timber elements bring uncompromised warmth, acoustic balancing, and tactile luxury to high-end residential spaces.",
      category: "Material Craft",
      date: "Oct 12, 2025",
      author: "Kailash Yadav",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800"
    },
    {
      id: 2,
      title: "Mastering Space Circulation: Designing for Daylight and Flow",
      excerpt: "An architectural blueprint guide on optimizing structural masonry and floor layouts to enhance organic circulation and natural light routing.",
      category: "Space Planning",
      date: "Nov 04, 2025",
      author: "Studio Editorial",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"
    },
    {
      id: 3,
      title: "Minimalism vs. Warm Aesthetics: Finding The Perfect Contrast",
      excerpt: "Exploring the delicate intersection where raw industrial concrete meets soft linen textures and customized oak joinery.",
      category: "Interior Design",
      date: "Jan 18, 2026",
      author: "Kailash Yadav",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=800"
    }
  ];

  // Search logic filter
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F9F6F0] my-[-24px] py-12 px-6 md:px-12 lg:px-24 text-[#2c221e] animate-fadeIn space-y-16 border-b border-[#e6dfd3]">
      
      {/* --- HERO HEADER & SEARCH --- */}
      <section className="max-w-5xl mx-auto text-left pt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[10px] tracking-[0.4em] text-amber-700 uppercase mb-3 font-semibold font-sans">
            Our Journal
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-[#2c221e] uppercase">
            Perspectives & Insights
          </h2>
        </div>
        
        {/* Minimal Luxury Search Bar */}
        <div className="relative w-full md:w-72 group">
          <input
            type="text"
            placeholder="Search journal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#fdfcfb] border border-[#e2d9cc] pl-10 pr-4 py-2.5 text-xs tracking-wide focus:outline-none focus:border-amber-800 transition-all duration-300 placeholder-stone-400 font-light"
          />
          <Search size={14} className="absolute left-3 top-3.5 text-stone-400 group-focus-within:text-amber-800 transition-colors" />
        </div>
      </section>

      {/* --- BLOG GRID SECTION --- */}
      <section className="max-w-5xl mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-[#fdfcfb] border border-[#e2d9cc] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Image Container with Amber Tint Overlay */}
                <div className="w-full h-52 overflow-hidden relative border-b border-[#e6dfd3]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#3d2f26]/5 group-hover:bg-transparent transition-all duration-300" />
                  <span className="absolute top-4 left-4 bg-[#1c1613] text-amber-400 text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold font-sans">
                    {post.category}
                  </span>
                </div>

                {/* Article Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-[10px] text-stone-400 font-light font-sans tracking-wide">
                      <span className="flex items-center space-x-1">
                        <Calendar size={10} className="text-amber-700" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock size={10} className="text-amber-700" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-serif font-light text-[#1c1613] group-hover:text-amber-900 transition-colors duration-300 leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[11px] text-[#7c695e] font-light leading-relaxed line-clamp-3 pt-1">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Clickable Indicator */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[10px] uppercase tracking-widest font-semibold text-[#3d2f26] group-hover:text-amber-800 transition-colors">
                    <span className="relative">
                      Read Article
                      <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-amber-800 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </article>
            ))}
          </div>
        ) : (
          /* Empty Search Fallback */
          <div className="text-center py-20 bg-[#f5efe6] border border-[#e2d9cc]">
            <p className="font-serif italic text-lg text-stone-500">No architectural articles match your search.</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-xs tracking-widest uppercase bg-[#3d2f26] text-white px-5 py-2.5 hover:bg-amber-800 transition-all"
            >
              Reset Filter
            </button>
          </div>
        )}
      </section>

    </div>
  );
}