import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sun,
  BatteryCharging,
  CarFront,
  Wrench,
  ShieldCheck,
  ClipboardCheck,
  Settings,
  MapPin,
  Clock3,
  Phone,
  Leaf,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { useInquiryModal } from "../../../context";

interface ServiceData {
  id: string;
  name: string;
  icon: typeof Wrench;
  heading: string;
  subheading: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  spec1: {
    icon: typeof ShieldCheck;
    label: string;
    title: string;
    desc: string;
  };
  spec2: {
    icon: typeof ClipboardCheck;
    label: string;
    title: string;
    desc: string;
  };
  spec3: {
    icon: typeof Settings;
    label: string;
    title: string;
    desc: string;
  };
  checks: string[];
  ctaLabel: string;
}

const SERVICES: ServiceData[] = [
  {
    id: "rooftop-solar",
    name: "Rooftop Solar",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=90",
    fallbackImage: "/assets/residential-solar.jpg",
    imageAlt: "Rooftop solar panel installation on Australian home",
    heading: "Rooftop Solar Assessment",
    subheading: "CEC-Accredited High-Yield Tier-1 Solar Solutions",
    spec1: {
      icon: ShieldCheck,
      label: "Government Rebate",
      title: "Federal STC Deduction",
      desc: "Save up to $2,400+ upfront on your quote",
    },
    spec2: {
      icon: ClipboardCheck,
      label: "Installation SLA",
      title: "1-Day Turnkey Installation",
      desc: "Fast-track network operator export approval",
    },
    spec3: {
      icon: Settings,
      label: "Recommended Engineering Specification",
      title: "Tier-1 N-Type TOPCon Panels + Smart Hybrid Inverter",
      desc: "Output Target: 42 – 55 kWh Daily Clean Generation",
    },
    checks: [
      "Zero-export limit mitigation & smart export management",
      "25-Year BloombergNEF Tier-1 panel performance warranty",
      "Real-time smartphone generation & consumption tracking",
    ],
    ctaLabel: "Request Custom Solar System Proposal",
  },
  {
    id: "solar-battery",
    name: "Solar Battery",
    icon: BatteryCharging,
    image:
      "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1200&q=90",
    fallbackImage: "/assets/posters/poster-battery.jpg",
    imageAlt: "Home battery storage backup system",
    heading: "Solar Battery Storage Assessment",
    subheading: "Total Blackout Protection & Overnight Zero-Grid Independence",
    spec1: {
      icon: ShieldCheck,
      label: "State Subsidies",
      title: "Battery Incentive Eligible",
      desc: "Displace peak grid rates with 100% stored sunshine",
    },
    spec2: {
      icon: ClipboardCheck,
      label: "Installation SLA",
      title: "48h Rapid Dispatch & Fitment",
      desc: "Certified Tesla Powerwall 3 & Sungrow master installers",
    },
    spec3: {
      icon: Settings,
      label: "Recommended Engineering Specification",
      title: "High-Voltage LiFePO4 Storage with Automated Islanding",
      desc: "Output Target: 100% Evening & Overnight Solar Coverage",
    },
    checks: [
      "Instant 10ms microsecond blackout EPS backup switch",
      "VPP (Virtual Power Plant) grid-trading & arbitrage ready",
      "10-Year unlimited-cycle manufacturer warranty",
    ],
    ctaLabel: "Request Custom Solar Battery Proposal",
  },
  {
    id: "ev-car-chargers",
    name: "EV Car Chargers",
    icon: CarFront,
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=90",
    fallbackImage: "/assets/posters/poster-ev.jpg",
    imageAlt: "Electric vehicle smart charger installation",
    heading: "EV Fast Charger Assessment",
    subheading: "Smart Level-2 Fast Charging for Home & Commercial Fleets",
    spec1: {
      icon: ShieldCheck,
      label: "Clean Transport Grants",
      title: "Tax Write-Off Eligible",
      desc: "Charge on 100% excess daytime solar generation",
    },
    spec2: {
      icon: ClipboardCheck,
      label: "Installation SLA",
      title: "Express 3-Hour Installation",
      desc: "Dedicated circuit protection with complete COES safety certificate",
    },
    spec3: {
      icon: Settings,
      label: "Recommended Engineering Specification",
      title: "7.4kW – 22kW Universal Type-2 Smart Solar Charger",
      desc: "Output Target: Up to 100km Driving Range Per Hour",
    },
    checks: [
      "Solar-only eco-charging modes (charge 100% on free sunshine)",
      "Universal compatibility: Tesla, BYD, Hyundai, MG, BMW",
      "Dynamic load-balancing to protect your main electrical fuse",
    ],
    ctaLabel: "Request Custom EV Charger Proposal",
  },
  {
    id: "switchboard-upgrade",
    name: "Switchboard Upgrade",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=90",
    fallbackImage: "/assets/reviews/electrician-wiring-switchboard.jpg",
    imageAlt: "Professional electrician working on a switchboard",
    heading: "Switchboard Upgrade Assessment",
    subheading: "AS/NZS 3000 Compliant RCBO & Modern Safety Switch Protection",
    spec1: {
      icon: ShieldCheck,
      label: "Insurance Approved",
      title: "Safety Standard Certified",
      desc: "Applied instantly off your upfront quote",
    },
    spec2: {
      icon: ClipboardCheck,
      label: "Installation SLA",
      title: "Same-Day Power Restoration",
      desc: "Fast-track local council & grid approval",
    },
    spec3: {
      icon: Settings,
      label: "Recommended Engineering Specification",
      title: "Weatherproof Enclosure + Type-A RCBO Breakers",
      desc: "Output Target: Zero Fire & Electrical Hazard Risk",
    },
    checks: [
      "Individual RCBO safety switches on every sub-circuit",
      "Certified ceramic asbestos panel remediation & safe disposal",
      "Mandatory Certificate of Electrical Safety (COES) issued",
    ],
    ctaLabel: "Request Custom Switchboard Upgrade Proposal",
  },
];

const HUBS = [
  {
    name: "Perth & WA Hub",
    address: "Caversham WA 6055",
    phone: "0430 015 017",
    tag: "HQ",
  },
  {
    name: "Sydney & NSW Hub",
    address: "Kalyville NSW 2155",
    phone: "0430 015 658",
  },
  {
    name: "Brisbane & QLD Hub",
    address: "Chermside QLD 4032",
    phone: "0430 015 017",
  },
];

const AUTO_ROTATE_DELAY_MS = 5000;

function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Sunlight Glows */}
      <div className="pointer-events-none absolute -top-36 right-[5%] -z-10 h-120 w-120 rounded-full bg-orange-400/20 blur-[85px]" />
      <div className="pointer-events-none absolute -bottom-44 -left-32 -z-10 h-105 w-105 rounded-full bg-amber-300/25 blur-[85px]" />

      {/* Floating Ambient Orbs */}
      <motion.div
        animate={{ y: [0, -22, 0], x: [0, 14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-orange-500/15 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-[12%] right-[4%] h-44 w-44 rounded-full bg-amber-400/15 blur-2xl"
      />

      {/* Golden & Orange Flowing Wave Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
        viewBox="0 0 1440 1100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-100 280 C160 540 300 280 560 440 S1000 540 1500 300"
          stroke="#F97316"
          strokeWidth="2"
          opacity=".45"
        />
        <path
          d="M-100 300 C180 570 350 320 600 465 S1100 570 1500 330"
          stroke="#FDBA74"
          strokeWidth="1"
          opacity=".4"
        />
        <path
          d="M-100 930 C180 780 400 1050 700 940 S1150 820 1500 1030"
          stroke="#F97316"
          strokeWidth="1.5"
          opacity=".25"
        />
        <path
          d="M750 -100 C650 150 850 250 900 400"
          stroke="#FDBA74"
          strokeWidth="2"
          opacity=".3"
        />
        <circle cx="760" cy="442" r="5" fill="#F97316" />
        <circle cx="1120" cy="390" r="4" fill="#FDBA74" />
        <circle cx="350" cy="950" r="4" fill="#F97316" />
      </svg>

      {/* Decorative Dotted Pattern in Top Right */}
      <div
        className="pointer-events-none absolute top-12 right-12 w-28 h-28 opacity-40 select-none z-10"
        style={{
          backgroundImage: "radial-gradient(#f59e0b 1.3px, transparent 1.3px)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* Soft Foliage Leaf Sparkles */}
      <div className="pointer-events-none absolute -top-6 -left-6 text-emerald-900/15 text-8xl blur-[3px] select-none rotate-[-30deg]">
        ✦
      </div>
      <div className="pointer-events-none absolute -bottom-2 -right-4 text-emerald-900/15 text-8xl blur-[3px] select-none rotate-40">
        ✦
      </div>
    </div>
  );
}

export function ServicesCtaSection() {
  const { openInquiryModal } = useInquiryModal();
  // Default to Switchboard Upgrade to match reference photo
  const [activeServiceId, setActiveServiceId] = useState<string>("switchboard-upgrade");

  // Auto-change timer: advance to next service in sequence
  const advanceToNext = useCallback(() => {
    setActiveServiceId((prevId) => {
      const idx = SERVICES.findIndex((s) => s.id === prevId);
      const nextIdx = (idx + 1) % SERVICES.length;
      return SERVICES[nextIdx].id;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      advanceToNext();
    }, AUTO_ROTATE_DELAY_MS);

    return () => clearInterval(timer);
  }, [advanceToNext, activeServiceId]);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[3];
  const MainIcon = activeService.icon;

  return (
    <section
      id="contact-blueprint"
      className="relative isolate overflow-hidden py-14 sm:py-18 lg:py-20 text-[#101d3b] bg-linear-to-br from-[#fffdf8] via-[#ffffff] to-[#fff9ee]"
    >
      <BackgroundEffects />

      {/* ================= AUTO-CHANGING TOP-RIGHT BACKGROUND IMAGE ================= */}
      <div className="pointer-events-none absolute top-0 right-0 w-full sm:w-[65%] md:w-[54%] lg:w-[46%] xl:w-[45%] max-w-185 h-90 sm:h-102.5 lg:h-115 z-0 overflow-hidden select-none opacity-25 sm:opacity-45 lg:opacity-100 transition-opacity">
        {/* Ambient Sunlight Glow behind image */}
        <div className="absolute top-1/3 -left-12 w-64 h-64 rounded-full bg-linear-to-tr from-amber-400/30 to-orange-500/25 blur-3xl -z-10" />

        {/* Organic curved frame with soft gradient fade on left */}
        <div
          className="relative w-full h-full overflow-hidden rounded-bl-[140px] sm:rounded-bl-[180px] lg:rounded-bl-[220px]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, black 28%), linear-gradient(to top, transparent 0%, black 14%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, black 28%), linear-gradient(to top, transparent 0%, black 14%)",
          }}
        >
          <AnimatePresence>
            <motion.img
              key={activeService.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              src={activeService.image}
              alt={activeService.imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-[center_25%] filter brightness-[1.02] contrast-[1.04]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = activeService.fallbackImage;
              }}
            />
          </AnimatePresence>

          {/* Warm sunlight gradient highlights to blend into the warm page background */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#fffdf8] via-[#fffdf8]/25 to-transparent opacity-60 lg:opacity-40" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#fffdf8] via-transparent to-transparent opacity-50" />
        </div>
      </div>

      {/* ================= HERO CONTAINER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top Hero Layout: Text on Left with Guaranteed Margin from Background Image */}
        <div className="min-h-72.5 sm:min-h-82.5 lg:min-h-50 flex flex-col justify-center">
          <div className="max-w-xl lg:max-w-120 xl:max-w-5xl py-4 lg:py-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black text-[#101d3b] tracking-tight leading-[1.12]">
              Ready to Cut Power Bills with{" "}
              <span className="block text-[#f45b0a]">Engineered Clean Energy?</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#485875] leading-relaxed max-w-lg font-normal">
              Select a service below to preview technical specifications, government rebate
              deductions, and rapid installation timeframes tailored to your Australian property.
            </p>
          </div>
        </div>

        {/* ================= 4 SERVICE TABS NAVIGATION WITH LIVE AUTO-CHANGE TIMER ================= */}
        <nav
          className="grid grid-cols-2 lg:grid-cols-4 items-center gap-2 sm:gap-0 my-8 sm:my-10 py-2 sm:py-2.5 px-2 rounded-2xl lg:rounded-full border border-orange-300/30 bg-white/45 backdrop-blur-md relative z-20 shadow-xs"
          aria-label="Service Selector"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isActive = service.id === activeServiceId;
            const nextIsActive = SERVICES[index + 1]?.id === activeServiceId;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveServiceId(service.id)}
                className={`group relative flex items-center justify-center gap-2.5 min-h-13.5 px-4 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? "bg-linear-to-r from-[#ff9d00] to-[#ff6200] text-white shadow-[0_8px_24px_rgba(255,111,0,0.28)]"
                    : "text-[#17233e] hover:text-[#f45c0a] bg-transparent"
                }`}
              >
                <Icon
                  className={`w-5 h-5 shrink-0 transition-transform group-hover:-translate-y-0.5 ${
                    isActive ? "text-white" : "text-[#f45c0a]"
                  }`}
                  strokeWidth={2.4}
                />
                <span>{service.name}</span>

                {/* Live animated auto-cycle indicator line inside active tab */}
                {isActive && (
                  <motion.div
                    key={activeServiceId}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: AUTO_ROTATE_DELAY_MS / 1000,
                      ease: "linear",
                    }}
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-white/60 rounded-full"
                  />
                )}

                {/* Inactive tab vertical divider on desktop */}
                {!isActive && !nextIsActive && index < SERVICES.length - 1 && (
                  <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-7 w-px bg-[#d9c5b1]/80 pointer-events-none" />
                )}
              </button>
            );
          })}
        </nav>

        {/* ================= MAIN SPLIT CONTENT LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-start relative z-10">
          {/* LEFT: Dynamic Service Assessment Area (7 cols) */}
          <main className="lg:col-span-7 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {/* Heading with circular icon badge */}
                <div className="flex items-center gap-4 sm:gap-5 mb-5">
                  <div className="w-16 h-16 sm:w-18.5 sm:h-18.5 min-w-16 sm:min-w-18.5 rounded-full flex items-center justify-center text-[#f45c0a] bg-linear-to-br from-white to-[#fff0dc] border border-[#ffc17b] shadow-[0_6px_20px_rgba(255,129,25,0.14)]">
                    <MainIcon className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={2.5} />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-[27px] font-black text-[#101d3b] tracking-tight leading-snug">
                      {activeService.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#f05b14] font-semibold mt-0.5">
                      {activeService.subheading}
                    </p>
                  </div>
                </div>

                {/* 3 Technical Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Spec 1: Orange */}
                  <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-[22px] bg-linear-to-br from-[#fff5eb]/95 to-white/60 border border-orange-200/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-[#f45c0a] flex items-center justify-center shrink-0">
                      <activeService.spec1.icon className="w-6 h-6" strokeWidth={2.3} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-extrabold text-[#ed5c14] flex items-center gap-1.5 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{activeService.spec1.label}</span>
                      </div>
                      <h4 className="text-base font-black text-[#101d3b] leading-tight">
                        {activeService.spec1.title}
                      </h4>
                      <p className="text-xs text-[#59677f] mt-1 leading-normal">
                        {activeService.spec1.desc}
                      </p>
                    </div>
                  </div>

                  {/* Spec 2: Green */}
                  <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-[22px] bg-linear-to-br from-[#e8faf0]/90 to-white/60 border border-emerald-200/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-emerald-600/10 text-[#16864c] flex items-center justify-center shrink-0">
                      <activeService.spec2.icon className="w-6 h-6" strokeWidth={2.3} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-extrabold text-[#16864c] flex items-center gap-1.5 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{activeService.spec2.label}</span>
                      </div>
                      <h4 className="text-base font-black text-[#101d3b] leading-tight">
                        {activeService.spec2.title}
                      </h4>
                      <p className="text-xs text-[#59677f] mt-1 leading-normal">
                        {activeService.spec2.desc}
                      </p>
                    </div>
                  </div>

                  {/* Spec 3: Blue Full Width */}
                  <div className="sm:col-span-2 flex items-start gap-3.5 p-4 sm:p-5 rounded-[22px] bg-linear-to-br from-[#eff6fd]/95 to-white/65 border border-sky-200/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-sky-600/15 text-[#30629e] flex items-center justify-center shrink-0">
                      <activeService.spec3.icon className="w-6 h-6" strokeWidth={2.3} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-extrabold text-[#305d96] flex items-center gap-1.5 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{activeService.spec3.label}</span>
                      </div>
                      <h4 className="text-base font-black text-[#101d3b] leading-tight">
                        {activeService.spec3.title}
                      </h4>
                      <p className="text-xs text-[#59677f] mt-1 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <span>{activeService.spec3.desc}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Orange Checkmark Bullets */}
                <div className="flex flex-col gap-3 py-5 sm:py-6 px-1">
                  {activeService.checks.map((checkText, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-[13.5px] font-medium text-[#465875]"
                    >
                      <svg
                        className="w-4.5 h-4.5 min-w-4.5 text-[#f47712] shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{checkText}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => openInquiryModal(activeService.name)}
                    className="inline-flex items-center justify-center gap-2.5 min-h-13 px-6 sm:px-7 rounded-2xl bg-linear-to-r from-[#ff9700] to-[#ff5900] hover:from-[#ff8800] hover:to-[#ea5000] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    <MainIcon className="w-4 h-4" />
                    <span>{activeService.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:0430015017"
                    className="inline-flex items-center justify-center gap-2 min-h-13 px-5 sm:px-6 rounded-2xl bg-white/80 hover:bg-white text-[#182541] border border-[#efc49d] hover:border-[#f47712] text-xs sm:text-sm font-extrabold hover:-translate-y-0.5 active:translate-y-0 transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#f47712]" />
                    <span>Call 0430 015 017</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>

          {/* RIGHT: Direct State Dispatch Hubs (5 cols) */}
          <aside className="lg:col-span-5 relative p-6 sm:p-7 rounded-4xl bg-linear-to-br from-[#fffaf1]/95 via-white/80 to-[#fff8ee]/90 border border-[#efbb83]/30 shadow-lg shadow-orange-950/5 backdrop-blur-xl">
            {/* Hubs Header */}
            <div className="flex items-center justify-between gap-3 mb-5 pb-1">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#f47712]" />
                <h3 className="text-xs font-black uppercase tracking-wider text-[#101d3b]">
                  DIRECT STATE DISPATCH HUBS
                </h3>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8fff2] border border-[#7fe9b0] text-[10px] sm:text-[11px] font-extrabold text-[#079d58]">
                <Clock3 className="w-3.5 h-3.5" />
                <span>&lt; 15m Triage</span>
              </span>
            </div>

            {/* Hub List */}
            <div className="flex flex-col gap-3">
              {HUBS.map((hub) => (
                <div
                  key={hub.name}
                  className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-[20px] bg-white/85 border border-[#daccb9]/70 hover:border-orange-400 hover:shadow-sm hover:translate-x-1 transition-all duration-300"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#17233d]">
                        {hub.name}
                      </h4>
                      {hub.tag && (
                        <span className="px-1.5 py-0.5 rounded-md bg-[#fff1dc] text-[#e45b10] border border-[#ffd8a8] text-[10px] font-extrabold">
                          {hub.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#65748e] mt-0.5">{hub.address}</p>
                  </div>

                  <a
                    href={`tel:${hub.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#fff9ed] hover:bg-orange-500 border border-[#ffbd62] hover:border-orange-500 text-[#ec690a] hover:text-white text-xs font-mono font-extrabold transition-all duration-200 shrink-0 shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{hub.phone}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Certified Guarantees */}
            <div className="flex flex-col gap-3.5 border-t border-[#d4c5ae]/45 mt-5 pt-5 text-xs text-[#40516b] font-medium">
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-green-600 shrink-0" />
                <span>Clean Energy Council (CEC) Accredited Designers &amp; Installers</span>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-blue-600 shrink-0" />
                <span>10-Year Comprehensive Workmanship &amp; $20M Public Liability Insured</span>
              </div>

              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-orange-500 shrink-0" />
                <span>100% In-House A-Grade Master Electricians (Zero Subcontractors)</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ServicesCtaSection;
