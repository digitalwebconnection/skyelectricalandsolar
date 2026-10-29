import { motion } from "motion/react";
import {
  Clock,
  Compass,
  FileCheck2,
  Wrench,
  Zap,
  PhoneCall,
  CheckCircle2,
  Building2,
  ArrowRight,
  Sparkles,
  Radio,
} from "lucide-react";
import { CONTACT_INFO } from "../../../constants";
import { useInquiryModal } from "../../../context";
import { BorderBeam } from "../../../components/common/BorderBeam";

const STEPS = [
  {
    step: "01",
    time: "< 15 Minutes",
    title: "Rapid Local Triage",
    desc: "Your inquiry is instantly routed to a licensed Clean Energy Council engineer in your state (WA, NSW, or QLD) for property review.",
    icon: Clock,
    color: "from-amber-500 to-orange-500",
    badgeBg: "bg-amber-50 text-amber-900 border-amber-200",
    glowBg: "bg-amber-400/25",
    hoverShadow: "hover:shadow-[0_22px_45px_-12px_rgba(245,158,11,0.25)] hover:border-amber-400",
    bgImage: "/assets/reviews/smiling-solar-electrician.jpg",
  },
  {
    step: "02",
    time: "Within 2 Hours",
    title: "3D Satellite Solar Modeling",
    desc: "Using high-definition satellite imagery and LIDAR irradiance tools, we simulate panel tilt, shading, and annual kWh generation.",
    icon: Compass,
    color: "from-orange-500 to-amber-600",
    badgeBg: "bg-orange-50 text-orange-900 border-orange-200",
    glowBg: "bg-orange-400/25",
    hoverShadow: "hover:shadow-[0_22px_45px_-12px_rgba(234,88,12,0.25)] hover:border-orange-400",
    bgImage: "/assets/reviews/residential-aerial-array.jpg",
  },
  {
    step: "03",
    time: "Same Day Delivery",
    title: "Itemized Rebate Proposal",
    desc: "We present a transparent fixed-price quote with Federal STC discounts and state incentives subtracted upfront.",
    icon: FileCheck2,
    color: "from-amber-600 to-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-900 border-emerald-200",
    glowBg: "bg-emerald-400/25",
    hoverShadow: "hover:shadow-[0_22px_45px_-12px_rgba(16,185,129,0.25)] hover:border-emerald-400",
    bgImage: "/assets/reviews/family-solar-home.jpg",
  },
  {
    step: "04",
    time: "1-Day Installation",
    title: "Master Electrician Install",
    desc: "Our in-house A-Grade electricians commission your solar array and battery storage, backed by our 10-year workmanship warranty.",
    icon: Wrench,
    color: "from-emerald-600 to-teal-600",
    badgeBg: "bg-teal-50 text-teal-900 border-teal-200",
    glowBg: "bg-teal-400/25",
    hoverShadow: "hover:shadow-[0_22px_45px_-12px_rgba(20,184,166,0.25)] hover:border-teal-400",
    bgImage: "/assets/reviews/rooftop-solar-drill.jpg",
  },
];

export function AssistanceProcessSection() {
  const { openInquiryModal } = useInquiryModal();

  return (
    <section className="relative py-20 lg:py-28 bg-[#faf8f5] text-slate-900 overflow-hidden border-b border-slate-200/80">
      {/* ================= HIGH-TECH BACKGROUND ACCENTS ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* Ambient solar energy radiance */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-180 h-100 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Crisp Solar Wafer SVG Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 50%, black 25%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 50%, black 25%, transparent 80%)",
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="process-wafer-grid"
                width="56"
                height="56"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 56 0 L 0 0 0 56"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="0.7"
                  strokeOpacity="0.25"
                />
                <circle cx="0" cy="0" r="1.5" fill="#f59e0b" opacity="0.4" />
                <circle cx="56" cy="0" r="1.5" fill="#ea580c" opacity="0.4" />
                <circle cx="0" cy="56" r="1.5" fill="#ea580c" opacity="0.4" />
                <circle cx="56" cy="56" r="1.5" fill="#f59e0b" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#process-wafer-grid)" />
          </svg>
        </div>

        {/* Top & Bottom Laser Guide Lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/35 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-400/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs sm:text-sm font-semibold mb-4 shadow-xs"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span className="font-bold">Clear &amp; Rapid Turnaround</span>
            <span className="text-slate-300">•</span>
            <span className="text-amber-700 font-semibold flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              Zero Waiting Game
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight"
          >
            What Happens After{" "}
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              You Contact Us?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            We eliminate the waiting game. From your first call or digital quote
            submission to energizing your solar array, here is our 4-step process.
          </motion.p>
        </div>

        {/* ================= 4-STEP CONNECTED PROCESS ROADMAP ================= */}
        <div className="relative mb-16 lg:mb-20">
          
          {/* Animated Connecting Circuit Line (Desktop) */}
          <div className="hidden lg:block absolute top-20 inset-x-16 h-1 pointer-events-none z-0">
            <svg className="w-full h-4 overflow-visible" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="8%"
                y1="2"
                x2="92%"
                y2="2"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.45"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative rounded-3xl bg-white border border-slate-200/90 p-7 shadow-lg shadow-slate-100 ${item.hoverShadow} hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer`}
                >
                  {/* ================= REAL BACKGROUND IMAGE REVEAL ON HOVER ================= */}
                  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
                    <img
                      src={item.bgImage}
                      alt=""
                      className="w-full h-full object-cover object-center filter brightness-95 contrast-110 opacity-0 scale-100 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Gradient overlay to ensure text stays crystal clear on hover */}
                    <div className="absolute inset-0 bg-linear-to-b from-white/95 via-white/85 to-white/95 group-hover:from-white/75 group-hover:via-white/70 group-hover:to-white/85 transition-all duration-500" />
                  </div>

                  {/* Luminous Radial Flare in Card Background (Expands on Hover) */}
                  <div
                    className={`pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full ${item.glowBg} blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 ease-out z-0`}
                  />

                  {/* Diagonal 45-degree Light Sheen Sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-amber-200/25 to-transparent z-0" />

                  {/* Radiant Top Accent Line that broadens & glows on hover */}
                  <div className="absolute top-0 left-6 right-6 h-1 rounded-t-full bg-linear-to-r from-amber-500 to-orange-500 opacity-70 group-hover:opacity-100 group-hover:left-3 group-hover:right-3 group-hover:h-1.5 transition-all duration-300 z-10" />

                  {/* Card Content Container */}
                  <div className="relative z-10">
                    {/* Top Step Number & Time Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-black text-slate-300 group-hover:text-amber-500 transition-colors font-mono tracking-tight">
                          {item.step}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                      </div>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border shadow-2xs group-hover:scale-105 transition-transform ${item.badgeBg}`}
                      >
                        {item.time}
                      </span>
                    </div>

                    {/* Gradient Icon Badge with Hover Rotation & Scale */}
                    <div
                      className={`h-13 w-13 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-white shadow-md shadow-orange-500/20 mb-5 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2.5 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Guaranteed SLA Footer */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600 group-hover:text-orange-600 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Guaranteed SLA</span>
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= SPECIALIZED CHANNEL CALLOUT SHOWCASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Urgent Electrical Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-3xl border border-amber-300/80 bg-linear-to-br from-amber-50/90 via-orange-50/60 to-white p-8 sm:p-9 flex flex-col justify-between shadow-xl shadow-orange-500/5 hover:border-amber-400 hover:shadow-[0_20px_45px_-12px_rgba(245,158,11,0.22)] hover:-translate-y-1.5 transition-all duration-400 overflow-hidden cursor-pointer"
          >
            {/* Background Image: Electrician Wiring Switchboard Reveal on Hover */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
              <img
                src="/assets/reviews/electrician-wiring-switchboard.jpg"
                alt=""
                className="w-full h-full object-cover object-center filter brightness-95 contrast-110 opacity-0 scale-100 group-hover:opacity-25 group-hover:scale-108 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-br from-amber-50/90 via-orange-50/70 to-white/90 group-hover:from-amber-50/75 group-hover:via-orange-50/60 group-hover:to-white/80 transition-all duration-500" />
            </div>

            {/* Background Hover Radial Flare */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-orange-400/20 blur-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 ease-out z-0" />
            <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/50 to-transparent z-0" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                <Zap className="h-3.5 w-3.5 text-orange-600" />
                <span>Urgent Electrical Callout</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-3">
                Switchboard Fault or Solar Inverter Tripping?
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                Our A-Grade licensed master electricians are on standby for
                emergency repairs, circuit breaker trips, blown isolators, and
                safety switch compliance across WA, NSW, and QLD.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-amber-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-black text-sm shadow-md shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call Emergency Line: {CONTACT_INFO.phone1}</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                <Radio className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
                <span>Fast dispatch available</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Commercial Solar & Microgrids (High-End Dark Tech Container) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative rounded-3xl border border-slate-800 bg-slate-950 text-white p-8 sm:p-9 flex flex-col justify-between shadow-2xl overflow-hidden hover:border-amber-400/60 hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.25)] hover:-translate-y-1.5 transition-all duration-400 cursor-pointer"
          >
            {/* Background Image: Commercial Solar Arrays Reveal on Hover */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
              <img
                src="/assets/commercial-solar.jpg"
                alt=""
                className="w-full h-full object-cover object-center filter brightness-75 contrast-125 opacity-0 scale-100 group-hover:opacity-30 group-hover:scale-108 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95 group-hover:from-slate-950/70 group-hover:via-slate-950/60 group-hover:to-slate-950/80 transition-all duration-500" />
            </div>

            {/* Background Hover Celestial Nebula Glow */}
            <div className="pointer-events-none absolute -top-12 -right-12 w-52 h-52 bg-linear-to-br from-amber-500/20 via-orange-500/15 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-100 group-hover:scale-130 transition-all duration-700 ease-out z-0" />
            <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent z-0" />

            <BorderBeam
              size={220}
              duration={12}
              colorFrom="#f59e0b"
              colorTo="#ea580c"
              borderWidth={1.5}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Building2 className="h-3.5 w-3.5" />
                <span>Commercial &amp; Enterprise</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                Commercial Solar &amp; Microgrids (30kW – 250kW+)
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Looking for industrial rooftop arrays, peak-demand shaving
                batteries, or commercial EV charging hubs? Speak directly with
                our lead commercial electrical engineers.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => openInquiryModal()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-sm shadow-md shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Request Feasibility Study</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Commercial%20Solar%20Tender`}
                className="text-xs text-amber-400 hover:text-amber-300 font-bold underline underline-offset-4 transition-colors"
              >
                Submit RFP / Tender Documents
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default AssistanceProcessSection;
