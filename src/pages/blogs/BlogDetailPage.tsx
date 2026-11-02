import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  CheckCircle2,
  Phone,
  Sparkles,
  Tag,
  BookOpen,
  FileText,
  Check,
  ShieldCheck,
  Share2,
  Zap,
  Award,
  Bookmark,
  ThumbsUp,
  Sliders,
  ChevronRight,
} from "lucide-react";
import { BLOG_POSTS, type BlogPost } from "./data/blogData";
import { CONTACT_INFO, COMPANY_LEGAL_NAME } from "../../constants";
import { useInquiryModal, useNavigation } from "../../context";
import { AnimatedGridPattern, BorderBeam, MagicCard, ShineBorder } from "../../components/ui";

interface BlogDetailPageProps {
  slug: string;
}

export function BlogDetailPage({ slug }: BlogDetailPageProps) {
  const { navigate } = useNavigation();
  const { openInquiryModal } = useInquiryModal();
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(42);
  const [hasVotedHelpful, setHasVotedHelpful] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [showStickyNav, setShowStickyNav] = useState(false);

  // Interactive In-Article System Estimator State
  const [selectedSystem, setSelectedSystem] = useState<"6.6kw" | "10kw" | "13.2kw">("10kw");

  // Find post by slug or id
  const post = BLOG_POSTS.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase(),
  );

  // Scroll spy & reading progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100)));
      }

      // Show floating top navigation bar after scrolling past 400px
      setShowStickyNav(currentScroll > 420);

      // Section spy
      if (post?.content?.sections) {
        const offsets = post.content.sections.map((_, idx) => {
          const el = document.getElementById(`section-${idx}`);
          return el ? el.getBoundingClientRect().top : Infinity;
        });

        const activeIdx = offsets.findIndex((top, idx) => {
          const nextTop = offsets[idx + 1] ?? Infinity;
          return top <= 190 && nextTop > 190;
        });

        if (activeIdx !== -1) {
          setActiveSection(activeIdx);
        } else if (offsets[0] > 190) {
          setActiveSection(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  // Fallback if post not found
  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 bg-[#faf8f5] text-center">
        <div className="h-16 w-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 shadow-sm">
          <BookOpen className="h-8 w-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Article Not Found</h1>
        <p className="text-slate-600 text-sm max-w-md mb-8">
          The clean energy guide you are looking for may have been updated or moved.
        </p>
        <button
          type="button"
          onClick={() => navigate("/blogs")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to All Blogs</span>
        </button>
      </div>
    );
  }

  // Related articles (same category first, then others)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id)
    .sort((a, _b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  // Previous and Next post navigation
  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id);
  const prevPost: BlogPost | null = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost: BlogPost | null =
    currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleVoteHelpful = () => {
    if (!hasVotedHelpful) {
      setHelpfulCount((prev) => prev + 1);
      setHasVotedHelpful(true);
    }
  };

  const scrollToSection = (idx: number) => {
    const el = document.getElementById(`section-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Estimator Calculations for the Interactive Mid-Article Widget
  const ESTIMATES = {
    "6.6kw": {
      title: "6.6kW Essential Solar Array",
      savings: "$1,600 – $2,100 / year",
      stc: "~$2,450 Upfront Federal Rebate",
      payback: "2.8 – 3.4 Years Payback",
      idealFor: "3–4 Bedroom Family Homes with Standard Daytime Usage",
    },
    "10kw": {
      title: "10kW High-Efficiency System",
      savings: "$2,600 – $3,400 / year",
      stc: "~$3,700 Upfront Federal Rebate",
      payback: "3.1 – 3.8 Years Payback",
      idealFor: "Larger Homes, Ducted A/C, Swimming Pools & Work-From-Home",
    },
    "13.2kw": {
      title: "13.2kW Solar + 10kWh Battery Bundle",
      savings: "$3,800 – $4,900 / year",
      stc: "~$4,900 Federal + Battery Incentives",
      payback: "4.2 – 5.0 Years Payback (Zero Peak Grid Draw)",
      idealFor: "All-Electric Homes, EV Charging & Blackout Protection",
    },
  };

  return (
    <article className="relative w-full bg-[#faf8f5] text-slate-900 overflow-x-clip selection:bg-orange-500/20 selection:text-orange-600">
      {/* ================= 2. SMART STICKY HEADER PILL (ACTIVATES ON SCROLL) ================= */}
      <AnimatePresence>
        {showStickyNav && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 inset-x-0 z-40 px-4 pointer-events-none"
          >
            <div className="mx-auto max-w-4xl bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xl p-2.5 px-4 sm:px-6 flex items-center justify-between pointer-events-auto gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  type="button"
                  onClick={() => navigate("/blogs")}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer shrink-0"
                  title="Back to all articles"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-orange-600 block leading-tight truncate">
                    {post.category} • {post.readTime}
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">
                    {post.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <span className="hidden sm:inline-flex items-center text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {Math.round(scrollProgress)}% read
                </span>
                <button
                  type="button"
                  onClick={() => openInquiryModal()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Zap className="h-3 w-3 fill-current" />
                  <span>Free Quote</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= 3. CINEMATIC BACKGROUND AMBIENCE ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 85% 65% at 50% 25%, black 40%, rgba(0,0,0,0.12) 80%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 65% at 50% 25%, black 40%, rgba(0,0,0,0.12) 80%, transparent 100%)",
          }}
        >
          <AnimatedGridPattern
            numSquares={48}
            maxOpacity={0.18}
            duration={3.2}
            repeatDelay={0.4}
            className="fill-amber-500/20 stroke-amber-500/15"
          />
        </div>

        {/* Photographic Solar Depth Mask */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.05) 50%, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.05) 50%, transparent 80%)",
          }}
        >
          <img
            src="/assets/solar-farm-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-top opacity-16 filter brightness-105 contrast-110 saturate-125"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#faf8f5]/80 via-[#faf8f5]/90 to-[#faf8f5]" />
        </div>

        {/* Ambient Warm Solar Radiance Halos */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-200 h-96 bg-linear-to-tr from-amber-400/20 via-orange-400/15 to-yellow-300/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-28 w-110 h-110 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 -right-28 w-110 h-110 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      {/* ================= 4. ARTICLE HERO SHOWCASE ================= */}
      <section className="relative pt-8 sm:pt-12 pb-12 lg:pb-16">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation & Accreditation Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 mb-6">
            <button
              type="button"
              onClick={() => navigate("/blogs")}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-orange-600 font-bold transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to clean energy guides</span>
            </button>

            <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/90 font-bold text-[11px] shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
              <span>Clean Energy Council Accredited Analysis</span>
            </span>
          </div>

          {/* Badges Strip */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="px-3.5 py-1.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xs">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white px-3.5 py-1 rounded-full border border-slate-200/90 shadow-2xs">
              <Clock className="h-3.5 w-3.5 text-amber-500" />
              <span>{post.readTime}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white px-3.5 py-1 rounded-full border border-slate-200/90 shadow-2xs">
              <Calendar className="h-3.5 w-3.5 text-orange-500" />
              <span>{post.date}</span>
            </span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-serif  text-slate-950 tracking-tight leading-[1.12] mb-7">
            {post.title}
          </h1>

          {/* Author Accreditation Strip & Quick Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-8 border-y border-slate-200/80 text-xs">
            <div className="flex items-center gap-3.5">
              <div className="h-13 w-13 rounded-2xl overflow-hidden border-2 border-orange-500 bg-slate-100 shadow-sm shrink-0">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-950 text-sm sm:text-base">
                    {post.author.name}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                    Lead Engineer
                  </span>
                </div>
                <span className="text-slate-500 text-xs font-medium block">
                  {post.author.role} • {COMPANY_LEGAL_NAME}
                </span>
              </div>
            </div>

            {/* Quick Actions (Share, Bookmark, Quote) */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5 text-amber-500" />
                    <span>Share Guide</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setBookmarked((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all shadow-2xs cursor-pointer ${
                  bookmarked
                    ? "bg-amber-50 border-amber-300 text-amber-800"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                }`}
                title="Save for reference"
              >
                <Bookmark
                  className={`h-3.5 w-3.5 ${
                    bookmarked ? "text-amber-600 fill-amber-500" : "text-slate-400"
                  }`}
                />
                <span>{bookmarked ? "Saved" : "Save"}</span>
              </button>

              <button
                type="button"
                onClick={() => openInquiryModal()}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                <span>Ask an Engineer</span>
              </button>
            </div>
          </div>

          {/* ================= 5. FEATURED HERO IMAGE WITH SHINE BORDER ================= */}
          <div className="relative mb-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-video max-h-160 bg-slate-100 group">
            <ShineBorder
              borderWidth={2}
              duration={12}
              shineColor={["#f59e0b", "#ea580c", "#fbbf24"]}
            />
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
            {/* Glassmorphism Verified Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-lg z-30">
              <div className="p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-white shadow-xl">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                  <Award className="h-3.5 w-3.5" />
                  <span>Technical Assessment &amp; Regulatory Guide • 2026 Standards</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-200 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>

          {/* ================= 6. EXECUTIVE BENTO SUMMARY (3 PILLARS) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <MagicCard className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Zap className="h-4 w-4" />
              </div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                Core Value
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                High-efficiency solar &amp; battery technology tailored to combat rising Australian
                peak network tariffs.
              </p>
            </MagicCard>

            <MagicCard className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                Network Compliance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Engineered to meet strict Western Power (WA), Ausgrid (NSW), and Energex (QLD)
                inverter regulations.
              </p>
            </MagicCard>

            <MagicCard className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                <Sparkles className="h-4 w-4" />
              </div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                Rebate Maximization
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Direct upfront deduction of federal STC discounts plus local battery storage
                incentives.
              </p>
            </MagicCard>
          </div>

          {/* ================= 7. TWO-COLUMN MAIN ARTICLE WORKSPACE ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT COLUMN: Main Editorial Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12 text-slate-800">
              {/* Introduction Pull-Quote */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-600">
                  <Sparkles className="h-4 w-4" />
                  <span>Executive Overview</span>
                </div>
                <div className="p-4 sm:p-5 rounded-xl bg-orange-50/60 border-l-4 border-l-orange-500 text-base sm:text-lg leading-relaxed text-slate-800 font-medium italic">
                  &ldquo;{post.content.introduction}&rdquo;
                </div>
              </div>

              {/* Numbered Article Chapters */}
              <div className="space-y-12">
                {post.content.sections.map((section, idx) => (
                  <section key={idx} id={`section-${idx}`} className="scroll-mt-28 space-y-5">
                    {/* Chapter Title Badge */}
                    <div className="flex items-start gap-3.5 pb-2 border-b border-slate-200/80">
                      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 text-white font-mono text-sm font-black flex items-center justify-center shrink-0 shadow-xs">
                        0{idx + 1}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug pt-1">
                        {section.heading}
                      </h2>
                    </div>

                    {/* Paragraph Content with generous line height */}
                    <div className="space-y-4 text-base sm:text-lg leading-[1.8] text-slate-700 font-normal">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Key Technical Takeaways Box */}
                    {section.keyPoints && section.keyPoints.length > 0 && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-linear-to-br from-emerald-50/90 to-teal-50/50 border border-emerald-200/90 space-y-3 mt-5 shadow-2xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          <span className="text-xs font-black uppercase tracking-wider text-emerald-950">
                            Key Technical Takeaways &amp; Compliance:
                          </span>
                        </div>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
                          {section.keyPoints.map((point, kIdx) => (
                            <li key={kIdx} className="flex items-start gap-2.5 leading-snug">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                              <span className="font-medium">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* INTERACTIVE MID-ARTICLE MINI-CALCULATOR (After Section 1) */}
                    {idx === 0 && (
                      <div className="my-8 rounded-2xl sm:rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
                        <BorderBeam
                          size={260}
                          duration={12}
                          colorFrom="#f59e0b"
                          colorTo="#ea580c"
                        />
                        <div className="relative z-10 space-y-5">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-400/30">
                              <Sliders className="h-3 w-3" />
                              <span>Interactive Estimator</span>
                            </span>
                            <span className="text-xs text-slate-400 font-medium">
                              Estimated 2026 Rates
                            </span>
                          </div>

                          <div>
                            <h3 className="text-lg sm:text-xl font-black text-white">
                              Which Solar Package Matches Your Property?
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 mt-1">
                              Tap a system tier to compare annual savings, federal STC deductions,
                              and payback periods.
                            </p>
                          </div>

                          {/* 3 Tier Selector Buttons */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            {(["6.6kw", "10kw", "13.2kw"] as const).map((tier) => (
                              <button
                                key={tier}
                                type="button"
                                onClick={() => setSelectedSystem(tier)}
                                className={`py-3 px-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                                  selectedSystem === tier
                                    ? "bg-linear-to-r from-amber-500 to-orange-500 text-slate-950 font-black shadow-md scale-[1.02]"
                                    : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                                }`}
                              >
                                {tier === "6.6kw"
                                  ? "6.6kW Essential"
                                  : tier === "10kw"
                                    ? "10kW High-Output"
                                    : "13.2kW + Battery"}
                              </button>
                            ))}
                          </div>

                          {/* Selected Tier Metrics Card */}
                          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="text-slate-400">System Tier:</span>
                              <span className="font-extrabold text-amber-400 text-sm">
                                {ESTIMATES[selectedSystem].title}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-400">Est. Annual Savings:</span>
                              <span className="font-extrabold text-emerald-400 text-sm">
                                {ESTIMATES[selectedSystem].savings}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-400">Government Rebate:</span>
                              <span className="font-bold text-slate-200">
                                {ESTIMATES[selectedSystem].stc}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-slate-400">Ideal For:</span>
                              <span className="font-medium text-slate-300">
                                {ESTIMATES[selectedSystem].idealFor}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                            <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                              Zero obligation • Satellite roof layout provided free
                            </span>
                            <button
                              type="button"
                              onClick={() => openInquiryModal()}
                              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-orange-50 text-slate-950 font-black text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                            >
                              <span>Claim This Proposal</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Master Electrician Recommendation Card */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-linear-to-br from-amber-50 to-orange-50/60 border border-amber-200/90 shadow-sm space-y-3 relative overflow-hidden">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-amber-600" />
                  <h3 className="text-sm font-black text-amber-950 uppercase tracking-wider">
                    Clean Energy Council Engineering Recommendation
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {post.content.conclusion}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-900">
                  <Award className="h-4 w-4 text-amber-600" />
                  <span>Licensed Master Electrician Verified • 10-Year Workmanship Guarantee</span>
                </div>
              </div>

              {/* Helpful Feedback Voting Box */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-bold text-slate-700 text-center sm:text-left">
                  Did you find this clean energy guide informative?
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleVoteHelpful}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      hasVotedHelpful
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-300 font-black"
                        : "bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700"
                    }`}
                  >
                    <ThumbsUp className="h-3.5 w-3.5" />
                    <span>{hasVotedHelpful ? "Thank you!" : `Helpful (${helpfulCount})`}</span>
                  </button>
                </div>
              </div>

              {/* Topic Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-slate-400" />
                <span className="text-xs text-slate-500 font-bold">Topics:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs hover:border-orange-300 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Accreditation Profile Card */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="h-20 w-20 rounded-2xl overflow-hidden border-2 border-orange-500 shrink-0 shadow-md">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700">
                      CEC Certified Master Electrician
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-semibold">
                    {post.author.role} • {COMPANY_LEGAL_NAME}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                    Specializing in high-efficiency residential solar design, Tesla Powerwall &amp;
                    Sungrow battery integration, commercial grid connection compliance, and
                    Australian federal STC rebates across WA, NSW &amp; QLD.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => openInquiryModal()}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
                    >
                      <span>Request Consultation with {post.author.name.split(" ")[0]}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Next / Previous Article Navigation */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <button
                    type="button"
                    onClick={() => navigate(`/blogs/${prevPost.slug}`)}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-md transition-all text-left group cursor-pointer"
                  >
                    <span className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1 mb-1">
                      <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
                      <span>Previous Guide</span>
                    </span>
                    <h5 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {prevPost.title}
                    </h5>
                  </button>
                ) : (
                  <div />
                )}

                {nextPost && (
                  <button
                    type="button"
                    onClick={() => navigate(`/blogs/${nextPost.slug}`)}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-md transition-all text-right group cursor-pointer"
                  >
                    <span className="text-[10px] text-slate-400 uppercase font-bold flex items-center justify-end gap-1 mb-1">
                      <span>Next Guide</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <h5 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {nextPost.title}
                    </h5>
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Fixed Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-24 lg:self-start z-20">
              {/* Interactive Table of Contents with Scroll Spy */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-orange-500" />
                    <span>On This Page</span>
                  </h4>
                  <span className="text-[10px] font-bold text-slate-400">
                    {post.content.sections.length} Chapters
                  </span>
                </div>

                <nav className="space-y-1.5 text-xs">
                  {post.content.sections.map((sec, idx) => {
                    const isActive = activeSection === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => scrollToSection(idx)}
                        className={`w-full text-left py-2 px-3 rounded-xl transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                          isActive
                            ? "bg-orange-50 text-orange-700 font-bold border-l-3 border-orange-500 shadow-2xs"
                            : "text-slate-600 hover:text-orange-600 hover:bg-slate-50 font-medium"
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                            isActive
                              ? "bg-orange-500 text-white font-bold"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="truncate">{sec.heading}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Free 3D Solar Proposal Card with BorderBeam */}
              <div className="rounded-2xl bg-linear-to-br from-[#071d32] to-[#0c243c] p-6 text-white shadow-xl space-y-4 relative overflow-hidden border border-white/10">
                <BorderBeam size={220} duration={10} colorFrom="#f59e0b" colorTo="#ea580c" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-400/30">
                  <Sparkles className="h-3 w-3" />
                  <span>Instant Feasibility</span>
                </div>

                <h4 className="text-base font-black text-white leading-snug">
                  Get a Free Satellite Solar &amp; Battery Calculation
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Find out how much solar generation your roof can produce and calculate your
                  upfront STC &amp; state rebate discount.
                </p>

                <button
                  type="button"
                  onClick={() => openInquiryModal()}
                  className="w-full py-3 px-4 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <Zap className="h-3.5 w-3.5 fill-current" />
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Direct Branch Helpline Contact */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-5 shadow-sm space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Questions About This Guide?
                </span>
                <div className="space-y-2 text-xs">
                  <a
                    href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50 text-slate-900 hover:text-orange-600 font-bold transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-500" />
                    <span>Perth Hub: {CONTACT_INFO.phone1}</span>
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50 text-slate-900 hover:text-orange-600 font-bold transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-orange-500" />
                    <span>Sydney Hub: {CONTACT_INFO.phone2}</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= 8. MORE RELATED ARTICLES SECTION ================= */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200/80">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Keep Exploring
                </span>
                <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                  Related Engineering Guides
                </h3>
              </div>
              <button
                type="button"
                onClick={() => navigate("/blogs")}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-orange-600 transition-colors cursor-pointer"
              >
                <span>View all articles</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.id}
                  onClick={() => navigate(`/blogs/${related.slug}`)}
                  className="group rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all overflow-hidden flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-white/95 text-slate-900 border border-slate-200 font-bold text-[10px] uppercase">
                          {related.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1.5">
                        <Clock className="h-3 w-3 text-amber-500" />
                        <span>{related.readTime}</span>
                        <span>•</span>
                        <span>{related.date}</span>
                      </div>

                      <h4 className="text-sm font-black text-slate-950 group-hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h4>

                      <p className="text-xs text-slate-600 line-clamp-2">{related.excerpt}</p>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600">
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

export default BlogDetailPage;
