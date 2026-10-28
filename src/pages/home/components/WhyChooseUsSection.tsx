import { useState, useEffect } from "react";
import {
  FileSearch,
  Calculator,
  Wrench,
  Zap,
  ArrowRight,
  Clock,
  Layers,
} from "lucide-react";
import { InfiniteSpiral, type InfiniteSpiralItem } from "../../../components/common/InfiniteSpiral";
import { useInquiryModal } from "../../../context";

interface TimelineStep {
  num: string;
  dayBadge: string;
  phase: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: typeof FileSearch;
  thumbnail: string;
  badge: string;
  highlights: string[];
  ctaText: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    num: "01",
    dayBadge: "Day 1 • 45-Min Survey",
    phase: "Phase 01: Audit & Feasibility",
    title: "Free Roof & Energy Audit",
    subtitle: "3D LiDAR roof pitch modeling & historical bill optimization",
    desc: "Our engineers analyze high-resolution satellite imagery, roof tilt, shading obstructions, and historical quarterly electricity bills. You receive an accurate, tailored assessment of your roof's solar potential with zero obligation.",
    icon: FileSearch,
    thumbnail: "/assets/posters/poster-rooftop.jpg",
    badge: "3D LiDAR Mapping",
    highlights: [
      "3D satellite roof pitch & shading obstruction modeling",
      "Historical power tariff & seasonal energy usage analysis",
      "Custom system capacity sizing (6.6kW - 13.2kW)",
    ],
    ctaText: "Book Free Roof Audit",
  },
  {
    num: "02",
    dayBadge: "Day 2–3 • Rebate Approval",
    phase: "Phase 02: Engineering & Rebates",
    title: "Custom Proposal & STC Rebate Check",
    subtitle: "Point-of-sale government rebate deductions & fixed pricing",
    desc: "We provide an itemized engineering layout matching Bloomberg Tier-1 solar panels and smart hybrid inverters. All eligible federal STC incentives and state subsidies are applied upfront directly on your quote to eliminate out-of-pocket guesswork.",
    icon: Calculator,
    thumbnail: "/assets/banner/banner-6kw-special.jpg",
    badge: "Govt STC Rebates",
    highlights: [
      "Upfront Small-scale Technology Certificate (STC) discount",
      "Tier-1 Bloomberg-rated hardware with 25-year warranty",
      "$0 upfront green energy financing options available",
    ],
    ctaText: "Check Rebate Eligibility",
  },
  {
    num: "03",
    dayBadge: "Day 4–5 • Rapid Commissioning",
    phase: "Phase 03: Precision Installation",
    title: "Certified Master Installation",
    subtitle: "Clean Energy Council accredited electricians on-site",
    desc: "Our licensed Australian master electricians arrive on schedule to mount corrosion-resistant anodized aluminum framing, wire high-efficiency monocrystalline panels, install the hybrid inverter, and route safe DC cabling strictly adhering to AS/NZS 5033 standards.",
    icon: Wrench,
    thumbnail: "/assets/posters/poster-technician.jpg",
    badge: "Master Electricians",
    highlights: [
      "Clean Energy Council accredited solar master electricians",
      "Full structural roof integrity & weatherproofing seal",
      "Complete 1-day installation with comprehensive site cleanup",
    ],
    ctaText: "Schedule Your Install",
  },
  {
    num: "04",
    dayBadge: "Day 7 • System Energized",
    phase: "Phase 04: Grid Tie-In & Savings",
    title: "Grid Connection & Power Savings",
    subtitle: "Bi-directional meter activated & live phone telemetry",
    desc: "We coordinate end-to-end network connection approvals with your local distributor (AusNet, Powercor, Jemena, etc.), energize your bi-directional meter, and configure your mobile smartphone telemetry app so you can watch your savings accumulate from day one.",
    icon: Zap,
    thumbnail: "/assets/banner/banner-solar-mansion.jpg",
    badge: "Live Telemetry Active",
    highlights: [
      "Official distribution network connection & bi-directional meter",
      "24/7 smartphone telemetry app for solar & battery monitoring",
      "Instant feed-in tariff export credits and up to 80% bill cuts",
    ],
    ctaText: "Start Saving Clean Power",
  },
];

const SPIRAL_ITEMS: InfiniteSpiralItem[] = [
  {
    src: "/assets/posters/poster-rooftop.jpg",
    alt: "3D Satellite Roof & Shading Audit",
    badge: "Phase 01",
    step: "Day 1",
    title: "Free Roof & Energy Audit",
  },
  {
    src: "/assets/banner/banner-6kw-special.jpg",
    alt: "Government STC Rebate Clearance",
    badge: "Phase 02",
    step: "Day 2-3",
    title: "Custom Proposal & STC Rebate",
  },
  {
    src: "/assets/posters/poster-technician.jpg",
    alt: "CEC Accredited Master Electrician",
    badge: "Phase 03",
    step: "Day 4-5",
    title: "Certified Master Installation",
  },
  {
    src: "/assets/banner/banner-solar-mansion.jpg",
    alt: "Grid Connection & Clean Power Output",
    badge: "Phase 04",
    step: "Day 7",
    title: "Grid Infeed & Power Savings",
  },
  {
    src: "/assets/banner/banner-10kw-battery.png",
    alt: "10kWh Blackout Proof Battery Storage",
    badge: "Storage",
    step: "Battery",
    title: "10kWh Hybrid Battery Backup",
  },
  {
    src: "/assets/posters/poster-inverter.jpg",
    alt: "Intelligent Hybrid Inverter System",
    badge: "Hardware",
    step: "Inverter",
    title: "Tier-1 Hybrid Solar Inverters",
  },
  {
    src: "/assets/banner/banner-electrical-technician.jpg",
    alt: "Licensed Australian Electricians",
    badge: "Safety",
    step: "CEC Pro",
    title: "AS/NZS 5033 Compliance",
  },
  {
    src: "/assets/residential-solar.jpg",
    alt: "High Yield Monocrystalline Panels",
    badge: "25-Yr Cover",
    step: "Tier-1",
    title: "Monocrystalline Solar Panels",
  },
  {
    src: "/assets/commercial-solar.jpg",
    alt: "Commercial Solar Power Installation",
    badge: "Commercial",
    step: "30kW - 100kW",
    title: "Commercial Solar Systems",
  },
  {
    src: "/assets/solar-farm-bg.jpg",
    alt: "Australian Clean Energy Grid",
    badge: "Zero Carbon",
    step: "Clean Power",
    title: "Sustainable Australian Energy",
  },
];

export function WhyChooseUsSection() {
  const { openInquiryModal } = useInquiryModal();
  const [activeStep, setActiveStep] = useState<number>(0);
  const spiralDirection: "up" | "down" = "up";

  // Synchronize active step as the right side timeline cards scroll into viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    TIMELINE_STEPS.forEach((_, index) => {
      const el = document.getElementById(`timeline-card-${index}`);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        { threshold: 0.45, rootMargin: "-10% 0px -20% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section className="relative isolate overflow-visible py-10 sm:py-16 bg-white text-slate-900 border-y border-amber-200/80">
      {/* ================= LIGHT AMBIENT SUNLIGHT BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* Soft Warm Solar Gradients */}
        <div className="absolute inset-0 bg-linear-to-b from-amber-50/50 via-white to-orange-50/30" />

        {/* Architectural Silicon Wafer Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #f59e0b 1px, transparent 1px),
              linear-gradient(to bottom, #f59e0b 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />

        {/* Ambient Warm Golden Aura Blobs */}
        <div className="absolute -top-32 right-1/4 w-140 h-140 rounded-full bg-linear-to-bl from-amber-400/15 via-orange-300/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-120 h-120 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-32 right-10 w-130 h-130 rounded-full bg-emerald-400/10 blur-3xl" />

        {/* Top & Bottom Accent Lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/60 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-400/60 to-transparent" />
      </div>

      {/* ================= FOREGROUND CONTENT CONTAINER (z-10) ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-6xl mx-auto mb-10 sm:mb-14">
          

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-serif leading-[1.15]">
            How Switching to Solar <br />
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Works With Skye Electrical & Solar
            </span>
          </h2>

          <p className="mt-3.5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-6xl mx-auto font-normal">
            Zero hassle, zero hidden fees. As you scroll through our 4-step
            installation timeline on the right, watch our 3D interactive hardware
            spiral on the left navigate through real Australian installations.
          </p>
        </div>

        {/* ================= DUAL SHOWCASE: FIXED LEFT 3D SPIRAL + SCROLLING RIGHT TIMELINE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ================= LEFT COLUMN: FIXED (STICKY) 3D SPIRAL BOX (lg:col-span-5) ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start z-20">
            <div className="w-full rounded-xl border-2 border-amber-200/90 bg-white/95 backdrop-blur-xl  shadow-xl shadow-amber-500/10 overflow-hidden relative">
              

              

              {/* The 3D Infinite Spiral Stage Container */}
              <div
                className="relative w-full rounded-2xl overflow-hidden shadow-inner"
                style={{ height: "460px" }}
              >
                {/* Embedded Infinite Spiral */}
                <InfiniteSpiral
                  items={SPIRAL_ITEMS}
                  animationMode="all"
                  direction={spiralDirection}
                  speed={0.52}
                  radius={175}
                  cardWidth={155}
                  cardHeight={125}
                  verticalSpacing={62}
                  perspective={1000}
                  cardRadius={14}
                  centerScale={1.22}
                  edgeBlur={3}
                  cardsPerTurn={7}
                  pauseOnHover={true}
                  className="w-full h-full"
                />

                {/* Soft Vignette Shadows at Top & Bottom */}
                <div className="pointer-events-none absolute top-0 inset-x-0 h-12 bg-linear-to-b from-white via-white/70 to-transparent z-10" />
                <div className="pointer-events-none absolute bottom-0 inset-x-0 h-12 bg-linear-to-t from-white via-white/70 to-transparent z-10" />
              </div>

              {/* Active Milestone Synchronizer Card */}
              <div className="mt-4 p-3 rounded-2xl bg-linear-to-r from-amber-50/90 to-orange-50/70 border border-amber-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Current Active Phase
                  </span>
                  <span className="text-xs font-mono font-black text-amber-600">
                    STEP {TIMELINE_STEPS[activeStep].num} / 04
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900 truncate">
                  {TIMELINE_STEPS[activeStep].title}
                </div>
                <div className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                  {TIMELINE_STEPS[activeStep].subtitle}
                </div>

              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SCROLLING TIMELINE STREAM (lg:col-span-7) ================= */}
          <div className="lg:col-span-7 flex flex-col space-y-8 z-10">
            {/* Timeline Process Cards with Left Glowing Track */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-300 space-y-8">
              {TIMELINE_STEPS.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = activeStep === index;

                return (
                  <div
                    key={index}
                    id={`timeline-card-${index}`}
                    className={`relative rounded-xl border transition-all duration-300 p-6 sm:p-4 bg-white ${
                      isActive
                        ? "border-amber-400 shadow-2xl shadow-amber-500/12 ring-2 ring-amber-400/25"
                        : "border-slate-200/90 shadow-sm hover:border-amber-300 hover:shadow-md"
                    }`}
                  >
                    {/* Node on Vertical Timeline Line */}
                    <div
                      className={`absolute -left-9.25 sm:-left-13.5 top-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "border-amber-500 bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/35 scale-110"
                          : "border-amber-300 bg-white text-slate-600"
                      }`}
                    >
                      <StepIcon className="h-4 w-4" />
                    </div>

                    {/* Step Card Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-800 border border-amber-500/30">
                          <Clock className="h-3 w-3 text-amber-600" />
                          <span>{step.dayBadge}</span>
                        </span>
                     
                      </div>
                      
                    </div>

                    <div className="mt-1">
                      <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-amber-600 mt-1">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Generous Step Image Showcase */}
                    <div className="group/cardimg relative w-full h-52 sm:h-64  overflow-hidden border border-slate-200 my-4 shadow-xs">
                      <img
                        src={step.thumbnail}
                        alt={step.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/cardimg:scale-105"
                      />
                      {/* Gradient Vignette */}
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                    

                      {/* Bottom Image Telemetry Bar */}
                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs font-semibold px-1">
                        <span className="flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5 text-amber-400" />
                          <span>Verified Installation Progress</span>
                        </span>
                    
                      </div>
                    </div>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>


                    {/* CTA Button */}
                    <div className=" flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                      <button
                        onClick={() =>
                          openInquiryModal("Residential Rooftop Solar")
                        }
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs sm:text-sm font-bold shadow-sm shadow-orange-500/25 transition-all duration-200 active:scale-98 cursor-pointer"
                      >
                        <span>{step.ctaText}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>

                     
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
