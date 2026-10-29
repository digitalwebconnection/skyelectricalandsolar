import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";
import { FadeContent } from "../../../components/common/FadeContent";
import { BorderBeam } from "../../../components/common/BorderBeam";
import { CONTACT_INFO } from "../../../constants";
import { useInquiryModal } from "../../../context";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "all" | "solar-battery" | "rebates-savings" | "install-warranty";
  highlights?: string[];
  thumbnail?: string;
  badge?: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "rebates-savings",
    question: "How much can I realistically save on my power bills with solar?",
    answer:
      "Most Australian homeowners reduce their electricity bills by 70% to 90% after installing a tailored solar system. With escalating grid tariffs, a properly sized 6.6kW system typically delivers $1,200 to $2,200 in annual power savings, paying for itself within 3 to 4 years.",
    thumbnail: "/assets/reviews/family-solar-home.jpg",
    badge: "Estimated 3-4 Year Payback",
    highlights: [
      "Average 70%–90% reduction in quarterly electricity bills",
      "Rapid 3–4 year return on investment (ROI)",
      "Protection against future utility price hikes",
    ],
  },
  {
    id: "faq-2",
    category: "rebates-savings",
    question: "Am I eligible for Australian federal and state solar rebates?",
    answer:
      "Yes! Most residential and small commercial installations qualify for federal Small-scale Technology Certificates (STCs), which provide an upfront discount of up to several thousand dollars directly on your quote. We handle all network approvals and rebate applications on your behalf across WA, NSW, and QLD.",
    thumbnail: "/assets/banner/banner-6kw-special.jpg",
    badge: "Direct Upfront Deduction",
    highlights: [
      "Federal STC point-of-sale discount applied upfront",
      "State-specific battery incentive schemes and rebates",
      "Zero paperwork hassle — we manage network approvals end-to-end",
    ],
  },
  {
    id: "faq-3",
    category: "solar-battery",
    question:
      "Do solar panels still produce electricity on cloudy or rainy days?",
    answer:
      "Yes. Solar panels generate power using light photons, not heat. While solar output decreases during thick overcast skies or heavy rain (producing roughly 20% to 40% of their peak capacity), our premium Tier-1 monocrystalline panels with bifacial N-Type cell technology capture diffused ambient light efficiently throughout all seasons.",
    thumbnail: "/assets/residential-solar.jpg",
    badge: "N-Type TOPCon Cells",
    highlights: [
      "Generates clean power in rain, winter, and diffused daylight",
      "High-efficiency monocrystalline N-Type TOPCon solar cell technology",
      "Real-time mobile app to track live production in any weather",
    ],
  },
  {
    id: "faq-4",
    category: "solar-battery",
    question:
      "How does adding a battery storage system (Tesla / Alpha ESS) benefit me?",
    answer:
      "A solar battery stores the surplus energy generated during peak daytime sun so you can power your household during expensive evening peak tariff hours and overnight. It also provides automatic emergency blackout protection, keeping essential appliances running when the street grid goes down.",
    thumbnail: "/assets/reviews/battery-storage-garage.jpg",
    badge: "Automatic Islanding Backup",
    highlights: [
      "Achieve up to 90%–95% independence from the power grid",
      "Instant blackout and emergency backup power supply",
      "Store cheap daytime solar instead of exporting for minimal feed-in tariffs",
    ],
  },
  {
    id: "faq-5",
    category: "install-warranty",
    question:
      "What warranties and guarantees come with Skye Electrical & Solar installations?",
    answer:
      "We only supply CEC-approved Tier-1 hardware backed by Australia’s most comprehensive warranty packages. Every installation comes with complete peace of mind.",
    thumbnail: "/assets/banner/banner-electrical-technician.jpg",
    badge: "Comprehensive 25-Yr & 10-Yr Warranties",
    highlights: [
      "25-Year Performance & Hardware Warranty on solar panels",
      "10-Year Comprehensive Warranty on inverters and storage batteries",
      "10-Year Skye Electrical & Solar Workmanship & Installation Guarantee by licensed electricians",
    ],
  },
  {
    id: "faq-6",
    category: "install-warranty",
    question: "How long does the installation take, and who will do the work?",
    answer:
      "Once grid connection pre-approval is granted by your electricity distributor, the physical rooftop installation for a residential home is completed in just 1 business day. All work is executed exclusively by our in-house, licensed, and Clean Energy Council accredited A-grade electricians — we never use unlicensed third-party subcontractors.",
    thumbnail: "/assets/reviews/smiling-solar-electrician.jpg",
    badge: "100% In-House Master Electricians",
    highlights: [
      "Completed in 1 day with minimal disruption to your home",
      "Strictly in-house, CEC-accredited licensed electricians",
      "Post-installation commissioning and Wi-Fi monitoring setup included",
    ],
  },
];

export function FaqSection() {
  useInquiryModal();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true,
    "faq-2": false,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative py-8 sm:py-14` bg-linear-to-b from-[#faf8f5] via-white to-[#faf8f5] border-t border-slate-200/80 overflow-hidden text-slate-900"
    >
      {/* ================= INLINE ANIMATION STYLES ================= */}
      <style>{`
        @keyframes faqLaserSweep {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        @keyframes faqAmbientPulse {
          0%, 100% {
            transform: scale(1) translate(-50%, -50%);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.15) translate(-48%, -52%);
            opacity: 0.65;
          }
        }
      `}</style>

      {/* ================= ATTRACTIVE HIGH-TECH BACKGROUND LAYER ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* 1. MASKED ARCHITECTURAL SOLAR HORIZON BACKDROP */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, rgba(0,0,0,0.25) 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, rgba(0,0,0,0.25) 60%, transparent 100%)",
          }}
        >
          <img
            src="/assets/solar-farm-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-15 filter brightness-110 contrast-125 saturate-125"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/80 to-white/95" />
        </div>

        {/* 2. DYNAMIC SOLAR AMBIENT GLOW ORBS */}
        <div
          className="absolute top-1/3 left-1/2 w-187.5 sm:w-237.5 h-112.5 bg-linear-to-tr from-amber-400/15 via-orange-400/10 to-emerald-400/10 rounded-full blur-3xl pointer-events-none"
          style={{ animation: "faqAmbientPulse 10s ease-in-out infinite" }}
        />
        <div className="absolute top-0 right-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl" />

        {/* 3. CRISP SOLAR PHOTOVOLTAIC SILICON WAFER GRID PATTERN */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            maskImage:
              "radial-gradient(ellipse 85% 75% at 50% 45%, black 35%, rgba(0,0,0,0.2) 75%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 75% at 50% 45%, black 35%, rgba(0,0,0,0.2) 75%, transparent 100%)",
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="faq-solar-grid"
                width="64"
                height="64"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 64 0 L 0 0 0 64"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="0.85"
                  strokeOpacity="0.32"
                />
                <line
                  x1="32"
                  y1="0"
                  x2="32"
                  y2="64"
                  stroke="#f59e0b"
                  strokeWidth="0.5"
                  strokeDasharray="2,3"
                  strokeOpacity="0.2"
                />
                <line
                  x1="0"
                  y1="32"
                  x2="64"
                  y2="32"
                  stroke="#f59e0b"
                  strokeWidth="0.5"
                  strokeDasharray="2,3"
                  strokeOpacity="0.2"
                />
                <circle cx="0" cy="0" r="2.2" fill="#f59e0b" opacity="0.7" />
                <circle cx="64" cy="0" r="2.2" fill="#ea580c" opacity="0.7" />
                <circle cx="0" cy="64" r="2.2" fill="#ea580c" opacity="0.7" />
                <circle cx="64" cy="64" r="2.2" fill="#f59e0b" opacity="0.7" />
                <circle cx="32" cy="32" r="1.6" fill="#10b981" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faq-solar-grid)" />
          </svg>
        </div>

        {/* 4. ANIMATED LASER SCANNING GUIDELINES */}
        <div className="absolute top-16 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent">
          <div
            className="absolute top-0 h-px w-80 bg-linear-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_12px_#f59e0b]"
            style={{ animation: "faqLaserSweep 9s linear infinite" }}
          />
        </div>

        <div className="absolute bottom-20 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-400/35 to-transparent">
          <div
            className="absolute top-0 h-px w-96 bg-linear-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_#ea580c]"
            style={{ animation: "faqLaserSweep 11s linear infinite 4s" }}
          />
        </div>
      </div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <FadeContent
          effect="focus"
          blur={8}
          duration={1.2}
          threshold={0.15}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
            Frequently Asked <br />
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Questions &amp; Answers
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-900 leading-relaxed font-normal max-w-5xl mx-auto">
            Clear, honest answers about solar savings, government rebates,
            hardware warranties, and what to expect during your installation.
          </p>
        </FadeContent>

        {/* ================= MAIN ACCORDION + RIGHT VISUAL HERO ASIDE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-7xl mx-auto items-start">
          {/* Left Column (7 cols): Interactive Accordion with Embedded Real Site Thumbnails */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_DATA.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden bg-white border ${
                    isOpen
                      ? "border-amber-400 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/30"
                      : "border-slate-200/90 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  {/* Accordion Question Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors hover:bg-slate-50/60"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-600 font-bold text-xs shrink-0 border border-amber-200">
                        ?
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`shrink-0 flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-amber-500 text-white shadow-md shadow-amber-500/30"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  {/* Accordion Answer Content with Real Site Image Preview */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                          <p className="font-normal text-slate-700">
                            {faq.answer}
                          </p>

                          {/* Real Installation Image & Highlight Block */}
                          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4 bg-slate-50 p-3.5 rounded-xl border">
                            {faq.thumbnail && (
                              <div className="relative h-24 w-full sm:w-36 rounded-lg overflow-hidden shrink-0 shadow-xs bg-slate-900">
                                <img
                                  src={faq.thumbnail}
                                  alt="Real installation reference"
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 to-transparent pointer-events-none" />
                                <span className="absolute bottom-1 left-1.5 text-[9px] font-bold text-emerald-300 flex items-center gap-0.5">
                                  <CheckCircle2 className="h-2.5 w-2.5" />
                                  <span>Site Photo</span>
                                </span>
                              </div>
                            )}

                            <div className="flex-1 w-full">
                              {faq.badge && (
                                <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                                  {faq.badge}
                                </span>
                              )}

                              {faq.highlights && faq.highlights.length > 0 && (
                                <ul className="space-y-1">
                                  {faq.highlights.map((highlight, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-1.5 text-xs text-slate-700 font-medium"
                                    >
                                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column (5 cols): Visual Real-World Solar Showcase Cards */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            {/* Visual Card 1: Electrician on Site + Direct Help Hotline */}
            <div className="rounded-xl bg-slate-950 text-white shadow-2xl relative overflow-hidden border border-slate-800 group">
              <BorderBeam
                size={260}
                duration={12}
                colorFrom="#f59e0b"
                colorTo="#ea580c"
              />

              {/* Real Photograph Banner on top */}
              <div className="relative h-50 w-full overflow-hidden bg-slate-900">
                <img
                  src="/assets/banner/banner-electrical-technician.jpg"
                  alt="Skye Electrical Master Technician"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300">
                    <Sparkles className="h-3 w-3 text-amber-400" />
                    <span>In-House CEC Engineers</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold flex items-center gap-1 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Engineers Active Today
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-4">
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Have a Question About Your Specific Roof?
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Speak directly with a licensed Clean Energy Council solar
                  specialist. We review your switchboard, roof tilt, and current
                  power bills with zero obligation.
                </p>

                <div className="mt-5 space-y-2.5">
                  <a
                    href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                    className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all duration-200 active:scale-95"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Call Priority Line: {CONTACT_INFO.phone1}</span>
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`}
                    className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all duration-200"
                  >
                    <Zap className="h-4 w-4 text-amber-400" />
                    <span>Technical Desk: {CONTACT_INFO.phone2}</span>
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 font-bold text-slate-200">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    Clean Energy Council
                  </span>
                  <span>A-Grade Licensed Electricians</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
