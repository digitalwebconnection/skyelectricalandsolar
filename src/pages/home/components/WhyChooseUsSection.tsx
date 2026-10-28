import { useState, useEffect } from "react";
import {
  FileSearch,
  Calculator,
  Wrench,
  Zap,
  CheckCircle2,
  Shield,
} from "lucide-react";
import { SkewHoverCard } from "../../../components/common/SkewHoverCard";

export function WhyChooseUsSection() {
  const steps = [
    {
      num: "01",
      icon: FileSearch,
      title: "Free Roof & Energy Audit",
      desc: "We analyze your roof orientation, shading, and historical power bills to design the optimum system size.",
    },
    {
      num: "02",
      icon: Calculator,
      title: "Custom Proposal & Rebate Check",
      desc: "Receive transparent pricing showing upfront government STC rebate discounts and estimated payback timelines.",
    },
    {
      num: "03",
      icon: Wrench,
      title: "Certified Master Installation",
      desc: "Clean Energy Council accredited electricians install your Tier-1 hardware in as little as one day.",
    },
    {
      num: "04",
      icon: Zap,
      title: "Grid Connection & Power Savings",
      desc: "We finalize distributor meter connections and set up live mobile telemetry so you can watch your savings accumulate.",
    },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isUserHovering, setIsUserHovering] = useState<boolean>(false);

  // Auto hover cycle every 9s across each card
  useEffect(() => {
    if (isUserHovering) return;

    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % steps.length);
    }, 9000);

    return () => clearInterval(timer);
  }, [isUserHovering, steps.length]);

  return (
    <section className="relative isolate overflow-hidden pt-10 bg-slate-50 border-y border-amber-200/70">
      {/* ================= BACKGROUND WRAPPER: FULL-BLEED SOLAR BACKDROP ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* 1. FULL PANORAMIC SOLAR ROOFTOP ARCHITECTURE (Properly framed & centered) */}
        <div className="absolute inset-0">
          <img
            src="/assets/residential-solar.jpg"
            alt="Residential Solar Installation"
            className="w-full h-full object-cover object-[center_38%] filter brightness-[1.02] contrast-[1.08] saturate-[1.2]"
          />
          {/* Balanced Soft Glass Overlay: full view of house & solar panels while ensuring perfect text & card contrast */}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/50" />
          <div className="absolute inset-0 bg-linear-to-r from-amber-500/8 via-transparent to-orange-500/8" />
        </div>

        {/* 2. ARCHITECTURAL TECHNICAL BLUEPRINT GRID (Clean, non-distracting) */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 1px, transparent 1px),
              linear-gradient(to bottom, #0f172a 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Warm halo behind Guarantee Box */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-180 h-70 bg-linear-to-t from-amber-400/25 via-orange-400/15 to-transparent blur-3xl" />

        {/* 4. TOP & BOTTOM LUMINOUS ENERGY BEAM LINES */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-linear-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.8)] z-10" />
        <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-linear-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_12px_rgba(16,185,129,0.7)] z-10" />
      </div>

      {/* ================= FOREGROUND CONTENT WRAPPER (z-10: 100% untouched layout & text) ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif leading-[1.15]">
            How Switching to Solar <br />
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Works With Us
            </span>
          </h2>
          <p className="mt-4 text-white text-base sm:text-lg leading-relaxed">
            Zero hassle, zero hidden fees. From the initial satellite roof
            analysis to switching on your system, we handle everything from
            start to finish.
          </p>
        </div>

        {/* 4 Step Timeline Grid with Auto Hover Cycling Every 9s */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 items-start min-h-75">
          {steps.map((step, index) => (
            <SkewHoverCard
              key={index}
              num={step.num}
              icon={step.icon}
              title={step.title}
              desc={step.desc}
              isActive={activeCardIndex === index}
              cycleDuration={9}
              onMouseEnter={() => {
                setIsUserHovering(true);
                setActiveCardIndex(index);
              }}
              onMouseLeave={() => {
                setIsUserHovering(false);
              }}
              onClick={() => {
                setActiveCardIndex(index);
              }}
            />
          ))}
        </div>
      </div>
      {/* Guarantee Seal Box */}
      <div className="mt-10 bg-linear-to-r from-amber-50/95 via-orange-50/90 to-amber-50/95 backdrop-blur-md border border-amber-200/90 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-amber-500/10">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 shrink-0 rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
            <Shield className="h-7 w-7" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              100% Workmanship & Performance Guarantee
            </h4>
            <p className="text-xs text-slate-900 mt-1 max-w-xl">
              All solar panels are backed by a 25-Year Manufacturer Warranty,
              10-Year Inverter Warranty, and 10-Year Workmanship Warranty on all
              electrical labor.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-white/95 border border-emerald-200/90 rounded-full px-4 py-2 shrink-0 shadow-sm">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          <span>Guaranteed CEC Compliance</span>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
