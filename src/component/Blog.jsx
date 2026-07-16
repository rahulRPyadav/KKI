import { useState } from "react";
import { ArrowUpRight, Search, Calendar, Clock, Sparkles } from "lucide-react";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Premium Interior & Architecture Categories
  const categories = ["All", "Material Craft", "Space Planning", "Interior Design", "Luxury Lighting"];

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
    },
    {
      id: 4,
      title: "The Symphony of Lumens: Layering Ambient and Accent Lighting",
      excerpt: "How architectural concealed profiles and hand-blown glass pendants interact to redefine premium residential scales at dusk.",
      category: "Luxury Lighting",
      date: "Mar 02, 2026",
      author: "Studio Editorial",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1565538810844-1e119de867c8?q=80&w=800"
    },
    {
      id: 5,
      title: "Veneer vs Laminates: Making the High-End Joinery Decision",
      excerpt: "A comprehensive material case study detailing tone depth, matching logs, grains, and long-term durability metrics for custom premium wardrobes.",
      category: "Material Craft",
      date: "Apr 19, 2026",
      author: "Kailash Yadav",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800"
    },
    {
      id: 6,
      title: "Foyer Transformations: Creating Striking First Impressions",
      excerpt: "Utilizing Italian statuario marble accents, bespoke consoles, and curated geometry to establish high-end spatial identity from entryways.",
      category: "Interior Design",
      date: "May 24, 2026",
      author: "Studio Editorial",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800"
    }
  ];

  // Combined Category + Search Filtering Logic
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    /* Pure Canvas Base Ground with Required Premium Gradient */
    <div className="min-h-screen bg-gradient-to-b from-[#766940] via-[#92845a] to-[#ad9a65] my-[-24px] animate-fadeIn text-white">
      
      {/* ========================================== */}
      {/* --- 1. HERO HEADER FOLD --- */}
     

      {/* ========================================== */}
      {/* --- 2. CATEGORY TABS FILTER FOLD --- */}
      <section className="pt-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto border-b border-white/10 pb-5 overflow-x-auto no-scrollbar flex space-x-6 md:space-x-8 text-xs tracking-[0.15em] uppercase font-sans font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`pb-4 transition-all relative cursor-pointer whitespace-nowrap tracking-widest ${
                selectedCategory === cat ? "text-[#ffe9a6] font-bold scale-102" : "text-white/60 hover:text-white"
              }`}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffe9a6] animate-slideIn" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* --- 3. DYNAMIC ARTICLES GRID --- */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-black/10 backdrop-blur-md border border-white/10 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl hover:border-[#ffe9a6]/40 transition-all duration-500 group cursor-pointer rounded-xs"
                >
                  {/* Image Container with Amber/Dark Overlay */}
                  <div className="w-full h-52 overflow-hidden relative border-b border-white/5">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />
                    <span className="absolute top-4 left-4 bg-[#1c1613] text-[#ffe9a6] text-[9px] uppercase tracking-widest px-2.5 py-1 font-semibold font-sans rounded-xs">
                      {post.category}
                    </span>
                  </div>

                  {/* Glassmorphic Article Box */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      {/* Meta Info */}
                      <div className="flex items-center space-x-4 text-[10px] text-white/50 font-light font-sans tracking-wide">
                        <span className="flex items-center space-x-1">
                          <Calendar size={11} className="text-[#ffe9a6]" />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock size={11} className="text-[#ffe9a6]" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-serif font-light text-white group-hover:text-[#ffe9a6] transition-colors duration-300 leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[11px] text-white/70 font-light leading-relaxed line-clamp-3 pt-1">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer Trigger */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest font-semibold text-white/80 group-hover:text-[#ffe9a6] transition-colors">
                      <span className="relative">
                        Read Article
                        <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-[#ffe9a6] transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Reset State */
            <div className="text-center py-20 bg-black/5 border border-white/10 rounded-xs">
              <p className="font-serif italic text-lg text-white/60">No architectural articles match your filters.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-4 text-[10px] tracking-widest uppercase bg-white/10 text-white border border-white/20 px-5 py-3 hover:bg-[#ffe9a6] hover:text-amber-950 transition-all cursor-pointer rounded-xs"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================== */}
      {/* --- 4. LUXURY NEWSLETTER SUBSCRIBE FOLD --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/10 bg-black/5">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-[10px] tracking-[0.3em] text-[#ffe9a6] uppercase font-semibold font-sans">
            Subscribe To Luxury Trends
          </p>
          <h3 className="text-2xl md:text-3xl font-serif font-light text-white">
            Get Design Briefings Directly In Your Inbox
          </h3>
          <p className="text-xs text-white/60 font-light max-w-md mx-auto leading-relaxed">
            Sign up to receive structural insights, material studies, and early case access on high-end spaces. Unsubscribe anytime.
          </p>
          
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 pt-2">
            <input 
              type="email" 
              placeholder="Your professional email"
              required
              className="flex-grow bg-black/10 border border-white/10 text-xs px-4 py-3 rounded-xs text-white placeholder-white/40 focus:outline-none focus:border-[#ffe9a6] transition-colors"
            />
            <button 
              type="submit"
              className="bg-[#ffe9a6] text-amber-950 text-[10px] font-bold tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-amber-950 transition-all rounded-xs cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}