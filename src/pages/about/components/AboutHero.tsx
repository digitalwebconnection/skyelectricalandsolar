import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT_INFO } from "../../../constants";
import { useInquiryModal } from "../../../context";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutHero() {
  const { openInquiryModal } = useInquiryModal();

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#cae7fd] via-[#e2f1fe] to-[#ffffff] py-12 font-sans-modern"
    >
      {/* ================= BACKGROUND: LANDSCAPE, DOT MATRICES & AMBIENCE ================= */}
      <div className="pointer-events-none absolute inset-0  -z-10 overflow-hidden">
        {/* Landscape Panorama (Solar Homes & Wind Turbine) with subtle fade mask */}
        <div className="absolute right-0 top-0 h-full w-full lg:w-[65%] opacity-75 lg:opacity-85 mix-blend-multiply">
          <img
            src="/assets/banner/hero-landscape-bg.webp"
            alt="Scenic Australian community powered by solar energy"
            className="h-full w-full object-cover object-[65%_40%]"
          />
          {/* Subtle gradient feather to seamlessly blend with left sky */}
          <div className="absolute inset-0 bg-linear-to-r from-[#cae7fd] via-[#cae7fd]/70 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Top-Right Cyan Dot Matrix (6x5 Grid) */}
        <div className="absolute top-8 right-6 sm:right-16 grid grid-cols-6 gap-2.5 opacity-55">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={`tr-dot-${i}`} className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" />
          ))}
        </div>

        {/* Bottom-Left Cyan Dot Matrix (6x5 Grid) */}
        <div className="absolute bottom-16 left-6 sm:left-12 grid grid-cols-6 gap-2.5 opacity-50">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={`bl-dot-${i}`} className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" />
          ))}
        </div>

        {/* Warm Sunlight Ambient Glow */}
        <div className="absolute -top-20 right-1/4 h-128 w-lg rounded-full bg-linear-to-br from-amber-300/30 via-orange-300/20 to-transparent blur-3xl" />
        <div className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-linear-to-tr from-sky-400/25 via-blue-300/15 to-transparent blur-3xl" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* ================= LEFT COLUMN: HERO NARRATIVE & VALUE PROP ================= */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Main Headline with Highlight Words & Graphic Underlines */}
            <motion.h1
              id="about-hero-heading"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-6 font-sans-modern text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-[#0a1d4a] leading-[1.12]"
            >
              Powering Homes With
              {/* Floating Eco Green Leaves */}
              <span className="relative inline-block ml-1 -top-1">
                <svg
                  className="absolute -top-3 left-0 h-6 w-6 text-emerald-500 overflow-visible drop-shadow-[0_2px_4px_rgba(16,185,129,0.4)]"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path d="M 6 22 C 6 15, 14 8, 20 6 C 20 13, 14 20, 6 22 Z" fill="#22c55e" />
                  <path d="M 16 16 C 18 12, 22 8, 26 6 C 24 10, 22 14, 18 16 Z" fill="#4ade80" />
                </svg>
              </span>
              <br />
              Clean, <span className="text-solar-sun relative inline-block">Reliable</span>
              <br />
              Energy You Can{" "}
              <span className="relative inline-block">
                Trust.
                {/* Hand-drawn dynamic orange smile/swoosh curve underline */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full overflow-visible text-solar-sun"
                  height="14"
                  viewBox="0 0 160 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 9 C 45 2, 115 2, 158 9"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-700 font-medium"
            >
              We&apos;re a team of{" "}
              <strong className="font-extrabold text-[#0a1d4a]">
                CEC accredited solar installers
              </strong>{" "}
              and <strong className="font-extrabold text-[#0a1d4a]">master electricians</strong>{" "}
              delivering precision solar, battery storage, and electrical upgrades across Western
              Australia, New South Wales, and Queensland.
            </motion.p>

            {/* Action Buttons: Orange Free Quote & Direct Phone Line */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44, ease }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary: Get a Free Quote Button */}
              <button
                type="button"
                onClick={() => openInquiryModal()}
                className="group relative inline-flex items-center gap-3 rounded-full bg-linear-to-r from-solar-amber via-solar-orange to-solar-orange pl-2.5 pr-6 py-2 text-sm sm:text-base font-bold text-white shadow-[0_12px_28px_rgba(234,88,12,0.38)] hover:shadow-[0_16px_34px_rgba(234,88,12,0.48)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-solar-orange shadow-xs transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4.5 w-4.5 stroke-[2.8]" />
                </span>
                <span className="tracking-wide">Get a Free Quote</span>
              </button>

              {/* Secondary: Phone Hotline Button */}
              <a
                href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                className="group inline-flex items-center gap-3 rounded-full border border-sky-200/90 bg-white/90 backdrop-blur-md pl-2.5 pr-6 py-2 text-sm sm:text-base font-extrabold text-[#0a1d4a] shadow-xs hover:border-orange-400 hover:text-orange-600 hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100/80 text-orange-600 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Phone className="h-4.5 w-4.5 fill-current" />
                </span>
                <span className="tracking-wide">{CONTACT_INFO.phone1}</span>
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: TILTED SOLAR TECHNICIAN CARD & BADGES ================= */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="relative w-full max-w-85 sm:max-w-100 lg:max-w-110 pb-8"
            >
              {/* Ambient Radiant Sky-Blue Flare behind cards */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-linear-to-tr from-sky-400/30 via-blue-400/20 to-transparent blur-3xl pointer-events-none -z-10" />

              {/* ---------------- 1. MAIN TILTED TECHNICIAN CARD ---------------- */}
              <div className="relative rotate-[-4deg] transition-transform duration-500 hover:rotate-0">
                {/* Thick Glossy White Bezel Frame */}
                <div className="relative overflow-hidden rounded-[28px] sm:rounded-[34px] border-[6px] sm:border-8 border-white bg-slate-950 shadow-[0_20px_50px_rgba(2,132,199,0.32)]">
                  {/* Photo Container */}
                  <div className="relative aspect-[3.7/4.4] w-full overflow-hidden">
                    <img
                      src="/assets/banner/hero-technician-portrait.webp"
                      alt="Licensed master electrician inspecting solar array"
                      className="h-full w-full object-cover object-[50%_15%] transition-transform duration-700 hover:scale-105"
                      loading="eager"
                      fetchPriority="high"
                    />

                    {/* Lens Flare in top-left */}
                    <div className="pointer-events-none absolute -top-8 -left-8 h-32 w-32 rounded-full bg-white/70 blur-2xl" />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* ---------------- 2. INSET OVERLAPPING HOUSE CARD (Bottom-Left) ---------------- */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45, ease }}
                  className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-8 z-30 w-44 sm:w-52 -rotate-3 overflow-hidden rounded-2xl sm:rounded-3xl border-4 sm:border-[5px] border-white bg-slate-950 shadow-[0_16px_36px_rgba(15,23,42,0.3)] transition-transform duration-300 hover:scale-105 hover:rotate-0"
                >
                  <div className="relative aspect-16/11 w-full overflow-hidden">
                    <img
                      src="/assets/modern-solar-home-twilight.webp"
                      alt="Modern Australian home powered by solar architecture"
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>

              {/* --------- 3. FLOATING FEATURE PLAQUES (Right Side Stack) --------- */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM 3D FLOWING GRAPHIC WAVES & TROPICAL FOLIAGE ================= */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 sm:h-36 overflow-hidden z-10">
        {/* Sweeping Cyan Glass Wave */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 0,90 C 320,30, 680,120, 1020,40 C 1220,-8, 1360,30, 1440,50 L 1440,160 L 0,160 Z"
            fill="url(#cyanHeroWaveGrad)"
          />
          <path
            d="M 0,90 C 320,30, 680,120, 1020,40 C 1220,-8, 1360,30, 1440,50"
            stroke="#38bdf8"
            strokeWidth="3"
            className="drop-shadow-[0_0_12px_#38bdf8]"
          />
          <defs>
            <linearGradient id="cyanHeroWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dynamic Golden-Orange & Deep Ocean Blue Energy Wing (Bottom-Right) */}
        <div className="absolute -bottom-2 right-0 w-[55%] sm:w-[48%] h-32 sm:h-40">
          <svg
            className="w-full h-full"
            viewBox="0 0 500 160"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="orangeHeroWingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#c2410c" />
              </linearGradient>
              <linearGradient id="oceanDeepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0a1d4a" />
              </linearGradient>
            </defs>

            {/* Outer Radiant Orange Wave */}
            <path
              d="M 0,160 C 110,150, 220,110, 320,60 C 390,25, 450,10, 500,5 L 500,160 Z"
              fill="url(#orangeHeroWingGrad)"
            />
            {/* Golden Highlight Edge */}
            <path
              d="M 0,160 C 110,150, 220,110, 320,60 C 390,25, 450,10, 500,5"
              stroke="#fef08a"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_#fde047]"
            />
            {/* Deep Royal Ocean Base */}
            <path
              d="M 100,160 C 180,155, 270,125, 360,85 C 420,55, 465,40, 500,35 L 500,160 Z"
              fill="url(#oceanDeepGrad)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
