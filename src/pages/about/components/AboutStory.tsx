import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { FadeContent } from "../../../components/common/FadeContent";
import { useInquiryModal } from "../../../context";

export function AboutStory() {
  const { openInquiryModal } = useInquiryModal();

  return (
    <section
      aria-labelledby="about-story-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#ebf5ff] via-[#f7fbff] to-[#e8f1fc] py-8 lg:py-14 font-sans-modern"
    >
      {/* Global SVG Definitions for Exact Reference Image Geometry */}
      <svg className="absolute h-0 w-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="referenceImageClip" clipPathUnits="objectBoundingBox">
            <path
              d="
              M 0.24,0.00
              L 0.93,0.00
              C 0.97,0.00 1.00,0.04 1.00,0.09
              L 1.00,0.91
              C 1.00,0.96 0.97,1.00 0.93,1.00
              L 0.07,1.00
              C 0.03,1.00 0.00,0.96 0.00,0.91
              L 0.00,0.32
              C 0.00,0.27 0.017,0.24 0.043,0.22
              L 0.18,0.06
              C 0.21,0.02 0.22,0.00 0.24,0.00
              Z
            "
            />
          </clipPath>
        </defs>
      </svg>

      {/* ================= BACKGROUND AMBIENCE, CITY SILHOUETTE & SOLAR CELL PATTERN ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* City Skyline Silhouette on the Left */}
        <svg
          className="absolute left-0 bottom-40 h-56 w-96 text-sky-300/30"
          viewBox="0 0 400 200"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="80" width="22" height="120" rx="1" />
          <polygon points="21,50 18,80 24,80" />
          <rect x="36" y="110" width="18" height="90" />
          <rect x="58" y="70" width="28" height="130" rx="2" />
          <polygon points="72,40 68,70 76,70" />
          <rect x="90" y="95" width="20" height="105" />
          <rect x="114" y="60" width="34" height="140" rx="2" />
          <rect x="152" y="120" width="16" height="80" />
          <rect x="172" y="85" width="26" height="115" rx="1" />
          <rect x="202" y="105" width="22" height="95" />
          <rect x="228" y="75" width="30" height="125" rx="2" />
          <polygon points="243,30 240,75 246,75" />
          <rect x="262" y="115" width="24" height="85" />
          <rect x="290" y="90" width="26" height="110" />
          <rect x="320" y="130" width="20" height="70" />
          <rect x="344" y="100" width="28" height="100" />
        </svg>

        {/* Radiant Ambient Sky & Solar Lighting Glows */}
        <div className="absolute -top-32 left-1/4 h-[36rem] w-[52rem] rounded-full bg-gradient-to-br from-sky-200/40 via-blue-100/30 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-[30rem] w-[30rem] rounded-full bg-gradient-to-bl from-amber-200/25 via-orange-100/20 to-transparent blur-3xl" />

        {/* 3D Perspective Rooftop Solar Cell Grid Texture Across Bottom */}
        <div
          className="absolute -bottom-16 inset-x-0 h-80 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0284c7 1.5px, transparent 1.5px),
              linear-gradient(to bottom, #0284c7 1.5px, transparent 1.5px),
              radial-gradient(circle, rgba(14, 165, 233, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "75px 48px, 75px 48px, 15px 12px",
            transform: "perspective(600px) rotateX(55deg)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div id="about-story-heading" className="text-center">
          {/* Eyebrow Badge Pill */}
          <FadeContent effect="fade" duration={0.6} delay={0.05}></FadeContent>

          {/* Main Headline with Hand-Drawn Orange Swoosh Underline */}
          <FadeContent effect="focus" blur={6} duration={0.8} delay={0.1}>
            <h2 className="font-sans-modern text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-[52px] lg:leading-[1.12]">
              Born on Australian{" "}
              <span className="relative inline-block text-[#ea580c]">
                Rooftops.
                {/* Hand-drawn dynamic orange swoosh curve underline */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full overflow-visible text-[#ea580c]"
                  height="14"
                  viewBox="0 0 220 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 9 C 50 1.5, 140 1.5, 205 7 C 212 7.8, 218 9, 219 10"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              Sky Electrical & Solar was founded on an uncompromising principle: every solar system
              should be engineered and delivered by licensed master electricians—not sales brokers.
            </p>
          </FadeContent>
        </div>

        {/* ================= TIER 1: EDITORIAL STORY & ARCHITECTURAL VISUAL ================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left: Exact Futuristic Chamfered Polygon Image Deck */}
          <FadeContent effect="fade" duration={0.8} delay={0.15} className="flex">
            <div className="relative w-full flex flex-col justify-between">
              {/* Outer Glowing Cyan Shadow Silhouette */}
              <div
                className="absolute inset-0 bg-sky-400/35 blur-xl pointer-events-none -z-10"
                style={{
                  clipPath: "url(#referenceImageClip)",
                  WebkitClipPath: "url(#referenceImageClip)",
                }}
              />

              {/* Exact Chamfered Futuristic Image Container */}
              <div
                className="relative w-full h-full min-h-[420px] bg-slate-950 overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  clipPath: "url(#referenceImageClip)",
                  WebkitClipPath: "url(#referenceImageClip)",
                }}
              >
                {/* Hero Rooftop Solar Architecture Image */}
                <img
                  src="/assets/modern-solar-home-twilight.webp"
                  alt="Modern luxury home with high efficiency rooftop solar architecture"
                  className="h-full w-full object-cover object-[50%_60%] transition-transform duration-700 hover:scale-105 contrast-[1.05] saturate-[1.1]"
                  loading="lazy"
                />

                {/* Visual Glass Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/35 via-transparent to-transparent pointer-events-none" />

                {/* "Clean Energy Brighter Future" Authentic Handwritten Script Overlay */}
                <div className="absolute top-10 left-16 sm:left-20 lg:left-24 z-20 -rotate-2 select-none">
                  <div className="font-script leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                    <div className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-wide text-white">
                      Clean Energy
                    </div>
                    {/* Orange handwritten underline curve under Clean Energy */}
                    <div className="w-36 h-2 -mt-1 ml-1">
                      <svg
                        viewBox="0 0 160 10"
                        className="w-full h-full overflow-visible"
                        fill="none"
                      >
                        <path
                          d="M 2 7 C 45 2, 110 2, 155 6"
                          stroke="#ea580c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          className="drop-shadow-[0_0_6px_rgba(234,88,12,0.8)]"
                        />
                      </svg>
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-wide text-amber-100 ml-8 mt-0.5 drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]">
                      Brighter Future
                    </div>
                  </div>
                </div>

                {/* Glowing 3D Cyan Glass Wave Along Bottom Edge */}
                <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10">
                  <svg className="h-full w-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="cyanWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0284c7" stopOpacity="0.45" />
                        <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,60 C 120,30 260,70 500,20 L 500,100 L 0,100 Z"
                      fill="url(#cyanWaveGrad)"
                    />
                    <path
                      d="M 0,60 C 120,30 260,70 500,20"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      className="drop-shadow-[0_0_10px_#38bdf8]"
                    />
                  </svg>
                </div>

                {/* Dynamic Aerodynamic Orange & Navy Energy Wedge (Integrated in Bottom-Right Corner) */}
                <div className="absolute bottom-0 right-0 w-[52%] max-w-[280px] h-36 z-20 pointer-events-none">
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 240 130"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="solarSweepGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="45%" stopColor="#ea580c" />
                        <stop offset="100%" stopColor="#c2410c" />
                      </linearGradient>
                    </defs>

                    {/* Outer Sweeping Radiant Orange Arc */}
                    <path
                      d="M 0 130 C 50 125, 95 90, 140 55 C 175 28, 205 10, 240 5 L 240 130 Z"
                      fill="url(#solarSweepGrad)"
                    />

                    {/* Golden Highlight Stroke Along Wave Crest */}
                    <path
                      d="M 0 130 C 50 125, 95 90, 140 55 C 175 28, 205 10, 240 5"
                      stroke="#fef08a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="drop-shadow-[0_0_8px_#fde047]"
                    />

                    {/* Inner High-Contrast Midnight Cockpit Panel */}
                    <path
                      d="M 50 130 C 85 126, 120 100, 160 75 C 190 56, 215 45, 240 40 L 240 130 Z"
                      fill="#0c1933"
                    />
                  </svg>

                  {/* Slider Pagination Indicator Dots (Inside Cockpit) */}
                  <div className="absolute bottom-3.5 right-5 flex items-center gap-2 z-30">
                    {/* Active Dot with Radiant Glow */}
                    <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                    {/* Inactive Dots */}
                    <span className="h-2 w-2 rounded-full border border-white/70 bg-white/20" />
                    <span className="h-2 w-2 rounded-full border border-white/70 bg-white/20" />
                  </div>
                </div>
              </div>

              {/* Exact Dual-Stroke Glowing Neon Border Matching Shape */}
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none drop-shadow-[0_0_14px_rgba(56,189,248,0.8)] z-30"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Outer Glowing Cyan Neon Stroke */}
                <path
                  d="M 24,0 L 93,0 C 97,0 100,4 100,9 L 100,91 C 100,96 97,100 93,100 L 7,100 C 3,100 0,96 0,91 L 0,32 C 0,27 1.7,24 4.3,22 L 18,6 C 21,2 22,0 24,0 Z"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Inner Crisp White Accent Stroke */}
                <path
                  d="M 24,0 L 93,0 C 97,0 100,4 100,9 L 100,91 C 100,96 97,100 93,100 L 7,100 C 3,100 0,96 0,91 L 0,32 C 0,27 1.7,24 4.3,22 L 18,6 C 21,2 22,0 24,0 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeOpacity="0.9"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Futuristic Blue Glass Runner / Fin at Bottom Left (Connecting Seam) */}
              <div className="absolute -bottom-2 -left-8 w-28 h-8 -z-10 pointer-events-none hidden sm:block">
                <svg viewBox="0 0 140 40" className="w-full h-full" fill="none">
                  <path d="M 0 35 L 25 10 L 140 10 L 120 35 Z" fill="url(#runnerGrad)" />
                  <path
                    d="M 0 35 L 25 10 L 140 10"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    className="drop-shadow-[0_0_6px_#38bdf8]"
                  />
                  <defs>
                    <linearGradient id="runnerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#0284c7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0369a1" stopOpacity="0.7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating Australian Trusted Circular Badge (Top Right) */}
              <div className="absolute -top-3 -right-3 z-40 sm:-top-4 sm:-right-4">
                <div className="flex h-18 w-18 sm:h-20 sm:w-20 flex-col items-center justify-center rounded-full bg-white border-2 border-blue-600/40 shadow-[0_12px_28px_rgba(30,58,138,0.35)] p-1 text-center transition-transform hover:scale-105 select-none">
                  {/* Kangaroo Silhouette */}
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6 text-blue-950"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.5 14.5c-.8-.8-2-1.2-3.2-1.2-1.3 0-2.4.5-3.3 1.3l-2.5-3.5c.8-.8 1.3-1.8 1.5-2.9.2-.9.1-1.8-.4-2.6l1.2-1.2c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.5 1.5c-.7-.3-1.5-.4-2.4-.2-1.4.3-2.5 1.4-2.8 2.8-.2.9-.1 1.8.3 2.6L4.5 12c-.4.3-.6.8-.5 1.3.1.5.5.9 1 1l4.5.9-1.8 2.7c-.3.4-.3.9-.1 1.4.2.4.6.7 1.1.7h.5l4-1 3.5 2.5c.4.3.9.4 1.4.2.5-.2.8-.6.9-1.1l1-5c.1-.4 0-.8-.2-1.1z" />
                  </svg>
                  <span className="text-[8px] sm:text-[8.5px] font-black uppercase tracking-tight text-blue-950 leading-none mt-0.5">
                    AUSTRALIAN
                  </span>
                  <span className="text-[7px] sm:text-[7.5px] font-bold uppercase tracking-tight text-blue-800 leading-none">
                    TRUSTED
                  </span>
                  <div className="flex gap-0.5 text-amber-500 text-[8px] mt-0.5">★ ★ ★</div>
                </div>
              </div>
            </div>
          </FadeContent>

          {/* Right: Narrative Editorial Philosophy Card */}
          <FadeContent effect="fade" duration={0.8} delay={0.2} className="flex">
            <div className="relative flex flex-col justify-between rounded-[36px] border border-sky-200/90 bg-white/95 backdrop-blur-xl p-6 sm:p-8 shadow-lg shadow-sky-900/5 hover:shadow-xl transition-all duration-300 w-full">
              {/* Subtle top-right ambient warmth */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-amber-100/40 via-orange-50/20 to-transparent blur-2xl" />

              <div className="relative z-10">
                {/* Category Tag with Orange Vertical Pip */}
                <div className="flex items-center gap-2.5">
                  <span className="h-4.5 w-1.5 rounded-full bg-orange-500 inline-block" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#2563eb]">
                    Founded in 2019 • Multi-State Solar &amp; Electrical Hubs
                  </span>
                </div>

                {/* Lead Headline */}
                <p className="mt-5 text-lg sm:text-xl lg:text-[22px] font-black leading-snug text-slate-950">
                  Founded in 2019, our team has grown into a trusted leader in clean energy and
                  master electrical craftsmanship, delivering high-efficiency solar arrays,
                  commercial engineering, and battery storage across Western Australia, New South
                  Wales, and Queensland.
                </p>

                {/* Golden Rule Quote Box */}
                <div className="mt-6 flex items-start gap-3.5 rounded-2xl border border-slate-100 border-l-[4px] border-l-orange-500 bg-slate-50/80 p-4 sm:p-5 shadow-2xs">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f97316] text-white shadow-sm font-serif font-black text-base select-none">
                    “
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-700">
                    &ldquo;When sales offices began auctioning installations to the cheapest
                    subcontractors, we set our rule:{" "}
                    <span className="font-bold text-[#ea580c]">
                      the master electrician who guarantees your safety is the one who designs your
                      system.
                    </span>
                    &rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Licensing Strip & Orange CTA Button */}
              <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5">
                {/* License Sign-Off */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/90 shadow-2xs">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500 leading-tight">
                      ABN: 89 632 094 190 • CEC Accredited Contractor
                    </div>
                  </div>
                </div>

                {/* CTA Button with Dark Circle Arrow */}
                <button
                  type="button"
                  onClick={() => openInquiryModal()}
                  className="group shrink-0 inline-flex items-center justify-between gap-2.5 rounded-full bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 pl-4 pr-1.5 py-1.5 text-xs font-bold text-white shadow-md shadow-orange-500/30 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Request Engineering Consultation</span>
                  <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-orange-700/60 text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
            </div>
          </FadeContent>
        </div>

        {/* ================= TIER 2: 3 CORE ENGINEERING PRINCIPLES (HORIZONTAL SHOWCASE) ================= */}
        <FadeContent effect="fade" duration={0.8} delay={0.25}>
          <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* Card 1: 100% In-House Master Electricians */}
            <div className="group relative flex flex-col justify-between rounded-[28px] border border-sky-100/90 bg-white/95 backdrop-blur-md p-6 pt-9 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Overlapping 3D Hexagonal Shield Badge (Deep Royal Blue) */}
              <div className="absolute -top-7 left-6 h-14 w-14 drop-shadow-[0_8px_16px_rgba(37,99,235,0.35)] transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 100 115" className="h-full w-full">
                  <defs>
                    <linearGradient id="badgeBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                  </defs>
                  {/* Rounded Hexagon Path */}
                  <path
                    d="M 50 5 Q 54 5 57 7 L 90 26 Q 93 28 95 31 Q 97 35 97 38 L 97 76 Q 97 80 95 83 Q 93 86 90 88 L 57 107 Q 54 109 50 109 Q 46 109 43 107 L 10 88 Q 7 86 5 83 Q 3 80 3 76 L 3 38 Q 3 35 5 31 Q 7 28 10 26 L 43 7 Q 46 5 50 5 Z"
                    fill="url(#badgeBlue1)"
                    stroke="#93c5fd"
                    strokeWidth="3.5"
                  />
                </svg>
                {/* House with Lightning Bolt Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="relative">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                    <Zap className="absolute inset-0 m-auto h-3 w-3 fill-amber-400 text-amber-400 translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 transition-colors group-hover:text-blue-600">
                  100% In-House Master Electricians
                </h3>
                <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                  Directly employed tradespeople on every roof. Zero sales brokers or third party
                  sub crews.
                </p>
              </div>

              {/* Bottom Right Blue Arrow Button */}
              <div className="mt-6 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => openInquiryModal()}
                  aria-label="Learn more about 100% In-House Master Electricians"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-700 active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Precision Electrical Engineering */}
            <div className="group relative flex flex-col justify-between rounded-[28px] border border-sky-100/90 bg-white/95 backdrop-blur-md p-6 pt-9 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Overlapping 3D Hexagonal Badge (Radiant Solar Amber/Orange) */}
              <div className="absolute -top-7 left-6 h-14 w-14 drop-shadow-[0_8px_16px_rgba(249,115,22,0.35)] transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 100 115" className="h-full w-full">
                  <defs>
                    <linearGradient id="badgeOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                  {/* Rounded Hexagon Path */}
                  <path
                    d="M 50 5 Q 54 5 57 7 L 90 26 Q 93 28 95 31 Q 97 35 97 38 L 97 76 Q 97 80 95 83 Q 93 86 90 88 L 57 107 Q 54 109 50 109 Q 46 109 43 107 L 10 88 Q 7 86 5 83 Q 3 80 3 76 L 3 38 Q 3 35 5 31 Q 7 28 10 26 L 43 7 Q 46 5 50 5 Z"
                    fill="url(#badgeOrange)"
                    stroke="#fed7aa"
                    strokeWidth="3.5"
                  />
                </svg>
                {/* Gear with Lightning Bolt */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="relative">
                    <svg
                      className="h-6 w-6 animate-[spin_12s_linear_infinite]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    </svg>
                    <Zap className="absolute inset-0 m-auto h-3 w-3 fill-white text-white" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 transition-colors group-hover:text-orange-600">
                  Precision Electrical Engineering
                </h3>
                <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                  Switchboard audits, thermal safety clearances, and cable runs built to AS/NZS 3000
                  standards.
                </p>
              </div>

              {/* Bottom Right Orange Arrow Button */}
              <div className="mt-6 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => openInquiryModal()}
                  aria-label="Learn more about Precision Electrical Engineering"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f97316] text-white shadow-sm transition-transform duration-300 hover:scale-110 hover:bg-orange-600 active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Dual-State Licensed Contractor */}
            <div className="group relative flex flex-col justify-between rounded-[28px] border border-sky-100/90 bg-white/95 backdrop-blur-md p-6 pt-9 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Overlapping 3D Hexagonal Badge (Glossy Cyan/Blue Shield) */}
              <div className="absolute -top-7 left-6 h-14 w-14 drop-shadow-[0_8px_16px_rgba(2,132,199,0.35)] transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 100 115" className="h-full w-full">
                  <defs>
                    <linearGradient id="badgeBlue2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                  </defs>
                  {/* Rounded Hexagon Path */}
                  <path
                    d="M 50 5 Q 54 5 57 7 L 90 26 Q 93 28 95 31 Q 97 35 97 38 L 97 76 Q 97 80 95 83 Q 93 86 90 88 L 57 107 Q 54 109 50 109 Q 46 109 43 107 L 10 88 Q 7 86 5 83 Q 3 80 3 76 L 3 38 Q 3 35 5 31 Q 7 28 10 26 L 43 7 Q 46 5 50 5 Z"
                    fill="url(#badgeBlue2)"
                    stroke="#bae6fd"
                    strokeWidth="3.5"
                  />
                </svg>
                {/* Shield with Checkmark Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              </div>

              {/* Card Content */}
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 transition-colors group-hover:text-sky-600">
                  Multi-State Licensed Contractor
                </h3>
                <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-medium">
                  Fully accredited, licensed, and insured across Western Australia, New South Wales,
                  and Queensland.
                </p>
              </div>

              {/* Bottom Right Blue Arrow Button */}
              <div className="mt-6 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => openInquiryModal()}
                  aria-label="Learn more about Multi-State Licensed Contractor"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition-transform duration-300 hover:scale-110 hover:bg-blue-700 active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}

export default AboutStory;
