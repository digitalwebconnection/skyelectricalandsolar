import {
  Clock,
  ArrowRight,
  Calendar,
  User,
  Search,
} from "lucide-react";
import type { BlogPost } from "../data/blogData";
import { AnimatedGridPattern } from "../../../components/common";

interface BlogListSectionProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

export function BlogListSection({
  posts,
  onSelectPost,
}: BlogListSectionProps) {
  // Identify featured post for the top spotlight
  const featuredPost = posts.find((p) => p.featured) || posts[0];

  // Remaining posts for the standard grid
  const gridPosts = featuredPost
    ? posts.filter((p) => p.id !== featuredPost.id)
    : posts;

  return (
    <section className="relative py-16 lg:py-14 bg-[#faf8f5] text-slate-900 overflow-hidden">
      {/* ================= HIGH-TECH BACKGROUND ANIMATION STYLES ================= */}
      <style>{`
        @keyframes blogSectionPulse {
          0%, 100% {
            transform: scale(1) translate(-50%, 0);
            opacity: 0.65;
          }
          50% {
            transform: scale(1.18) translate(-50%, -12px);
            opacity: 0.95;
          }
        }
        @keyframes blogSectionLaser {
          0% {
            top: -5%;
            opacity: 0;
          }
          15% {
            opacity: 0.85;
          }
          85% {
            opacity: 0.85;
          }
          100% {
            top: 105%;
            opacity: 0;
          }
        }
      `}</style>

      {/* ================= RICH HIGH-TECH BACKGROUND EFFECTS (POWERED BY MCP MAGIC UI) ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* 1. MCP Magic UI Animated Grid Pattern with soft radial fade */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 40%, black 40%, rgba(0,0,0,0.15) 80%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 70% at 50% 40%, black 40%, rgba(0,0,0,0.15) 80%, transparent 100%)",
          }}
        >
          <AnimatedGridPattern
            numSquares={48}
            maxOpacity={0.25}
            duration={3.2}
            repeatDelay={0.4}
            className="fill-amber-500/25 stroke-amber-500/20"
          />
        </div>

        {/* 2. Photographic Horizon Depth Layer (Warm Solar Farm with Soft Mask) */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 40%, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 40%, transparent 75%)",
          }}
        >
          <img
            src="/assets/solar-farm-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-top opacity-20 filter brightness-105 contrast-110 saturate-125"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#faf8f5]/85 via-[#faf8f5]/90 to-[#faf8f5]" />
        </div>

        {/* 3. Luminous Radial Solar Ambient Glow Orbs */}
        <div
          className="absolute top-12 left-1/2 w-180 sm:w-240 h-100 bg-linear-to-tr from-amber-400/25 via-orange-400/18 to-yellow-300/12 rounded-full blur-3xl pointer-events-none"
          style={{ animation: "blogSectionPulse 9s ease-in-out infinite" }}
        />
        <div className="absolute top-1/3 -left-28 w-110 h-110 bg-amber-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-28 w-110 h-110 bg-orange-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* 4. Sweeping Horizontal Laser Scan Beam */}
        <div
          className="absolute inset-x-0 h-0.5 bg-linear-to-r from-transparent via-amber-400/60 to-transparent pointer-events-none"
          style={{ animation: "blogSectionLaser 12s linear infinite" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-2 bg-amber-400/35 blur-xs rounded-full" />
        </div>

        {/* 5. Top & Bottom Laser Guide Rules */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-400/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= FEATURED SPOTLIGHT ARTICLE (When on All) ================= */}
        {featuredPost && (
          <div className="mb-14 lg:mb-16">
            <div
              onClick={() => onSelectPost(featuredPost)}
              className="group relative rounded-xl bg-white border border-slate-200/90 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Big Visual Image (7 cols) */}
              <div className="lg:col-span-7 relative overflow-hidden aspect-16/10 lg:aspect-auto min-h-75 lg:min-h-110">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />

             
              </div>

              {/* Right Column: Content Spotlight (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-3">
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-bold uppercase tracking-wider text-[10px]">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-amber-500" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight leading-tight group-hover:text-orange-600 transition-colors mb-3">
                    {featuredPost.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {featuredPost.excerpt}
                  </p>

                  {/* Highlights Pill Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer with Author and CTA */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-full bg-linear-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-extrabold text-slate-900 text-xs block">
                        {featuredPost.author.name}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {featuredPost.date}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-black text-orange-600 group-hover:text-orange-700 group-hover:translate-x-1 transition-all">
                    <span>Read Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 3-COLUMN ARTICLES GRID ================= */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gridPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="group relative rounded-xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Article Thumbnail Image */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 border border-slate-200 font-bold text-[10px] uppercase tracking-wider shadow-xs">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3.5 right-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-xs text-amber-300 font-mono font-bold text-[10px] flex items-center gap-1 shadow-xs">
                        <Clock className="h-3 w-3 text-amber-400" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <Calendar className="h-3 w-3 text-amber-600" />
                      <span>{post.date}</span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black text-slate-950 tracking-tight leading-snug group-hover:text-orange-600 transition-colors mb-2.5">
                      {post.title}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Author and Arrow Link */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[10px]">
                      <User className="h-3 w-3" />
                    </div>
                    <span className="text-slate-700 font-bold text-[11px]">
                      {post.author.name}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-orange-600 font-extrabold group-hover:translate-x-1 transition-transform">
                    <span>Read</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-1">
              No matching articles found
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
              There are currently no articles in this section.
            </p>
          </div>
        )}
      </div>
      {/* ================= COMPREHENSIVE SOLAR GUIDE NEWSLETTER CTA ================= */}
      <div className="mt-16 lg:mt-24  bg-linear-to-br from-[#071d32] to-[#0c243c] p-8 sm:p-8  text-white shadow-2xl relative overflow-hidden">
        <div className="pointer-events-none absolute -right-10 -bottom-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl" />

        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-3">
            Download the 2026 Homeowner&apos;s Solar &amp; Battery Buyer&apos;s
            Blueprint
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
            A 24-page PDF guide explaining inverter string vs microinverters,
            STC rebate calculations, and how to evaluate quotes without falling
            for cowboy installation shortcuts.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you! Your free 2026 Solar & Battery Guide has been sent to your email.",
              );
            }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              className="w-full sm:w-80 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 focus:border-amber-400 text-white placeholder-slate-400 text-xs focus:outline-hidden transition-all shadow-inner"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Download Free PDF</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BlogListSection;
