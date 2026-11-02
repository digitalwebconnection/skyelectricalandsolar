import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  ShieldCheck,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ServiceItem } from "../data/servicesData";
import { useInquiryModal } from "../../../context";
import { CONTACT_INFO } from "../../../constants";

interface ServiceBenefitsSectionProps {
  service: ServiceItem;
}

function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Warm Sunlight Glows */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-120 w-120 rounded-full bg-orange-400/18 blur-[90px] -z-10" />
      <div className="pointer-events-none absolute -bottom-36 -right-24 h-110 w-110 rounded-full bg-amber-300/22 blur-[90px] -z-10" />

      {/* Floating Ambient Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/4 right-1/6 h-52 w-52 rounded-full bg-orange-500/12 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 18, 0], x: [0, -14, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-1/5 left-1/12 h-44 w-44 rounded-full bg-amber-400/12 blur-2xl"
      />

      {/* Decorative Golden & Orange SVG Flowing Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-80 180 C200 380 340 120 620 280 S1080 360 1520 180"
          stroke="#F97316"
          strokeWidth="2"
          opacity=".35"
        />
        <path
          d="M-80 200 C220 410 380 150 660 300 S1180 390 1520 210"
          stroke="#FDBA74"
          strokeWidth="1.2"
          opacity=".3"
        />
        <path
          d="M-80 840 C220 680 440 960 760 820 S1200 700 1520 890"
          stroke="#F97316"
          strokeWidth="1.5"
          opacity=".22"
        />
        <circle cx="620" cy="280" r="4.5" fill="#F97316" />
        <circle cx="1080" cy="360" r="4" fill="#FDBA74" />
        <circle cx="760" cy="820" r="4" fill="#F97316" />
      </svg>

      {/* Subtle Dotted Pattern in Top Right Corner */}
      <div
        className="pointer-events-none absolute top-8 right-10 w-28 h-28 opacity-35 select-none z-0"
        style={{
          backgroundImage: "radial-gradient(#f59e0b 1.3px, transparent 1.3px)",
          backgroundSize: "11px 11px",
        }}
      />

      {/* Soft Foliage Leaf Sparkles */}
      <div className="pointer-events-none absolute -top-4 -right-4 text-emerald-900/12 text-8xl blur-[3px] select-none rotate-12">
        ✦
      </div>
      <div className="pointer-events-none absolute -bottom-4 -left-4 text-emerald-900/12 text-8xl blur-[3px] select-none -rotate-24">
        ✦
      </div>
    </div>
  );
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  }),
};

export function ServiceBenefitsSection({ service }: ServiceBenefitsSectionProps) {
  const { openInquiryModal } = useInquiryModal();
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const totalBenefits = service.benefits.length;
  const ServiceIcon = service.icon;

  const goToSlide = useCallback(
    (newIdx: number, newDir?: number) => {
      const dir = newDir !== undefined ? newDir : newIdx > activeIdx ? 1 : -1;
      setDirection(dir);
      setActiveIdx(newIdx);
    },
    [activeIdx],
  );

  const nextSlide = useCallback(() => {
    goToSlide((activeIdx + 1) % totalBenefits, 1);
  }, [activeIdx, goToSlide, totalBenefits]);

  const prevSlide = useCallback(() => {
    goToSlide((activeIdx - 1 + totalBenefits) % totalBenefits, -1);
  }, [activeIdx, goToSlide, totalBenefits]);

  // Auto-advance sliding effect every 5 seconds (pause on user hover)
  useEffect(() => {
    if (isPaused || totalBenefits <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, totalBenefits]);

  const currentBenefit = service.benefits[activeIdx] || service.benefits[0];

  return (
    <section className="relative isolate py-16 sm:py-10 lg:py-14 text-[#101d3b] bg-linear-to-br from-[#fffdf8] via-[#ffffff] to-[#fff9ee]">
      <BackgroundEffects />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= SECTION HEADER (ORGANIC, NO BOX) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#101d3b] tracking-tight leading-[1.15]">
            {service.benefitsTitle || `Benefits of ${service.title}`}
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#485875] leading-relaxed font-normal max-w-2xl mx-auto">
            {service.benefitsSubtitle ||
              `Discover why Australian property owners choose Sky Electrical & Solar for precision engineered, high-yield solutions.`}
          </p>
        </motion.div>

        {/* ================= 2-COLUMN: FIXED LEFT SIDE + SLIDING ANIMATION RIGHT SIDE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ================= FIXED LEFT COLUMN (5 COLS, PINNED TO VIEWPORT BELOW HEADER) ================= */}
          <div className="lg:col-span-5 self-start lg:sticky lg:top-32 z-20 space-y-4">
            {/* Organic Curved Image Visual Frame */}
            <div className="relative">
              {/* Warm Ambient Sunlight Glow behind frame */}
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-linear-to-tr from-amber-400/30 to-orange-500/25 blur-3xl -z-10" />

              {/* Organic Curved Photo Container (Zero boxy borders, uncluttered) */}
              <div className="relative w-full h-56 sm:h-64 lg:h-68 overflow-hidden rounded-4xl lg:rounded-[44px_120px_32px_80px] shadow-xl shadow-orange-950/10 border-2 border-white/80 bg-orange-100/30">
                <img
                  src={service.cardImage || service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.04]"
                />

                {/* Soft sunlight gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-orange-500/15 via-transparent to-amber-200/20" />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/92 backdrop-blur-md text-[#101d3b] text-xs font-black border border-amber-300 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{service.badge || "CEC Accredited Quality"}</span>
                  </span>
                </div>

                {/* Sleek Bottom Spec Tag */}
                <div className="absolute bottom-3.5 left-3.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>AS/NZS 3000 Guaranteed</span>
                  </div>
                </div>

                {/* Floating Circular Orange Badge cleanly anchored in bottom-right corner */}
                <div className="absolute bottom-3.5 right-3.5 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-[#ff9d00] to-[#ff5900] text-white p-2 flex items-center justify-center text-center shadow-lg shadow-orange-500/35 border-2 border-white pointer-events-none">
                  <ServiceIcon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.4} />
                </div>
              </div>
            </div>

            {/* Dynamic Live Spotlight Pill Synced with Right Sliding Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="p-3 sm:p-3.5 rounded-2xl bg-linear-to-r from-orange-500/10 via-amber-400/8 to-white/70 border border-orange-200/70 backdrop-blur-sm shadow-xs"
              >
                <div className="flex items-center justify-between text-[11px] font-black text-[#f45b0a] uppercase tracking-wider mb-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f45b0a] animate-ping" />
                    <span>
                      Active Focus 0{activeIdx + 1} / 0{totalBenefits}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500">Live Sync</span>
                </div>
                <div className="text-xs sm:text-sm font-black text-[#101d3b] truncate">
                  {currentBenefit?.title}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Stats Ribbon (Fluid Glass, NO BOX) */}
            <div className="grid grid-cols-3 gap-2 p-2.5 sm:p-3 rounded-2xl bg-white/80 border border-orange-200/60 shadow-sm backdrop-blur-md text-center">
              <div className="px-1 py-0.5">
                <div className="text-sm sm:text-base font-black text-[#f45b0a] leading-tight">
                  {service.stats.stat1Value}
                </div>
                <div className="text-[10px] font-semibold text-[#5a6b88] mt-0.5 leading-snug truncate">
                  {service.stats.stat1Label}
                </div>
              </div>

              <div className="px-1 py-0.5 border-x border-orange-200/60">
                <div className="text-sm sm:text-base font-black text-[#101d3b] leading-tight">
                  {service.stats.stat2Value}
                </div>
                <div className="text-[10px] font-semibold text-[#5a6b88] mt-0.5 leading-snug truncate">
                  {service.stats.stat2Label}
                </div>
              </div>

              <div className="px-1 py-0.5">
                <div className="text-sm sm:text-base font-black text-[#16864c] leading-tight">
                  {service.stats.stat3Value}
                </div>
                <div className="text-[10px] font-semibold text-[#5a6b88] mt-0.5 leading-snug truncate">
                  {service.stats.stat3Label}
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="space-y-2 pt-0.5">
              <button
                type="button"
                onClick={() => openInquiryModal(service.title)}
                className="relative group overflow-hidden w-full py-3 px-4 rounded-xl bg-linear-to-r from-[#ff9700] to-[#ff5900] hover:from-[#ff8800] hover:to-[#ea5000] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                <Sparkles className="w-3.5 h-3.5" />
                <span>Request Custom {service.title} Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                className="w-full py-2.5 px-4 rounded-xl bg-white/85 hover:bg-white border border-[#efc49d] hover:border-[#f47712] text-[#182541] font-extrabold text-xs transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#f47712]" />
                <span>Call Helpline: {CONTACT_INFO.phone1}</span>
              </a>
            </div>

            {/* Trust Highlights Strip (Zero box) */}
            <div className="pt-2 border-t border-orange-200/50 space-y-1 text-[11px] text-[#485875] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>10-Year Comprehensive Workmanship &amp; $20M Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% In-House A-Grade Master Electricians</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f47712] shrink-0" />
                <span>Direct State Dispatch Across WA, NSW &amp; QLD</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE SLIDING ANIMATION SHOWCASE (7 COLS) ================= */}
          <div
            className="lg:col-span-7 min-w-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Navigation & Status Controls */}
            <div className="flex items-center justify-between gap-4 mb-4 px-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/10 text-[#f45b0a]">
                  <Zap className="w-4 h-4" />
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#101d3b]">
                  Sliding Benefit Showcase
                </span>
              </div>

              {/* Slider Prev / Next Controls & Slide Indicator */}
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black text-[#f45b0a] bg-orange-100/70 border border-orange-200/80 px-2.5 py-1 rounded-full">
                  0{activeIdx + 1} / 0{totalBenefits}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous Benefit"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-orange-500 text-[#101d3b] hover:text-white border border-orange-200/80 shadow-xs flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next Benefit"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-orange-500 text-[#101d3b] hover:text-white border border-orange-200/80 shadow-xs flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* The Main Sliding Card Stage (NO BOX: Organic rounded curves & warm glow) */}
            <div className="relative overflow-hidden min-h-75 sm:min-h-80 rounded-[36px] bg-linear-to-br from-white via-white/95 to-[#fff8ee] border border-orange-200/70 shadow-xl shadow-orange-950/5 p-6 sm:p-8 flex flex-col justify-between">
              {/* Soft ambient inner sunlight aura */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-orange-400/15 blur-2xl -z-10" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIdx}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-4"
                >
                  {/* Slide Eyebrow Row */}
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-2xl bg-linear-to-br from-[#ff9d00] to-[#ff5900] text-white font-black text-sm flex items-center justify-center shadow-lg shadow-orange-500/30">
                      0{activeIdx + 1}
                    </span>

                    <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#f45b0a] text-[11px] font-extrabold uppercase tracking-wide">
                      Key Client Advantage
                    </span>
                  </div>

                  {/* Benefit Main Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] font-black text-[#101d3b] tracking-tight leading-[1.2]">
                    {currentBenefit?.title}
                  </h3>

                  {/* Benefit Detailed Description */}
                  <p className="text-sm sm:text-base text-[#485875] leading-relaxed font-normal">
                    {currentBenefit?.desc}
                  </p>

                  {/* Core Value Takeaway Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#101d3b]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Verified Australian ROI Standard</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#101d3b]">
                      <CheckCircle2 className="w-4 h-4 text-[#f45b0a] shrink-0" />
                      <span>Clean Energy Council Engineered</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Progress Timer Bar */}
              <div className="pt-5">
                <div className="h-1.5 w-full rounded-full bg-orange-100 overflow-hidden">
                  <motion.div
                    key={activeIdx}
                    initial={{ width: "0%" }}
                    animate={{ width: isPaused ? "100%" : "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-linear-to-r from-[#ff9d00] to-[#ff5900] rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Quick Interactive Slide Selector Pills (All Benefits) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3.5">
              {service.benefits.map((benefit, idx) => {
                const isCurrent = idx === activeIdx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`group p-2.5 sm:p-3 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                      isCurrent
                        ? "bg-linear-to-r from-[#ff9d00] to-[#ff5900] text-white shadow-md shadow-orange-500/25 scale-[1.02]"
                        : "bg-white/75 hover:bg-white text-[#101d3b] border border-orange-200/60 hover:border-orange-400 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-[10px] font-mono font-black ${
                          isCurrent ? "text-white" : "text-[#f45b0a]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-black truncate">{benefit.title}</span>
                    </div>
                    <p
                      className={`text-[10px] truncate ${
                        isCurrent ? "text-white/85" : "text-[#5a6b88]"
                      }`}
                    >
                      {benefit.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceBenefitsSection;
