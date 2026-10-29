import { Zap, Sun, ShieldCheck, Award } from "lucide-react";
import { Marquee } from "../../../components/common/Marquee";

// Real brand logos from user-shared assets in src/assets/Inverter Brands
import froniusLogo from "@/assets/Inverter Brands/fronius.png";
import goodweLogo from "@/assets/Inverter Brands/goodwe.png";
import growattLogo from "@/assets/Inverter Brands/growatt.png";
import sajLogo from "@/assets/Inverter Brands/saj.png";
import solaxLogo from "@/assets/Inverter Brands/solar x.png";
import solisLogo from "@/assets/Inverter Brands/solis.png";
import sungrowLogo from "@/assets/Inverter Brands/sungrow.png";

// Real brand logos from user-shared assets in src/assets/Solar Panels
import jinkoLogo from "@/assets/Solar Panels/jinkosolar.png";
import longiLogo from "@/assets/Solar Panels/longi.png";
import missionLogo from "@/assets/Solar Panels/mission.png";
import orbitLogo from "@/assets/Solar Panels/orbit.png";
import primeLogo from "@/assets/Solar Panels/prime.png";
import seraphimLogo from "@/assets/Solar Panels/seraphim.png";

interface BrandItem {
  name: string;
  logo: string;
  desc: string;
  country?: string;
  efficiency?: string;
}

const INVERTER_BRANDS: BrandItem[] = [
  {
    name: "Fronius",
    logo: froniusLogo,
    desc: "Austrian Precision Inverters & Storage",
    country: "Austria",
    efficiency: "98.2% Eff.",
  },
  {
    name: "Sungrow",
    logo: sungrowLogo,
    desc: "Global Clean Power & Hybrid Inverters",
    country: "Global",
    efficiency: "98.5% Eff.",
  },
  {
    name: "Growatt",
    logo: growattLogo,
    desc: "Smart Energy & Battery Inverters",
    country: "Global",
    efficiency: "98.4% Eff.",
  },
  {
    name: "GoodWe",
    logo: goodweLogo,
    desc: "Smart Energy Innovator Inverters",
    country: "Global",
    efficiency: "98.3% Eff.",
  },
  {
    name: "Solis",
    logo: solisLogo,
    desc: "Global Commercial & Residential Inverters",
    country: "Global",
    efficiency: "98.7% Eff.",
  },
  {
    name: "SolaX Power",
    logo: solaxLogo,
    desc: "High-Efficiency Hybrid Energy Storage",
    country: "Global",
    efficiency: "98.1% Eff.",
  },
  {
    name: "SAJ",
    logo: sajLogo,
    desc: "Smart Solar & Storage Solutions",
    country: "Global",
    efficiency: "98.2% Eff.",
  },
];

const SOLAR_PANEL_BRANDS: BrandItem[] = [
  {
    name: "JinkoSolar",
    logo: jinkoLogo,
    desc: "Tier-1 High-Efficiency Tiger Neo N-Type",
    country: "Tier 1",
    efficiency: "22.8% Eff.",
  },
  {
    name: "LONGi Solar",
    logo: longiLogo,
    desc: "World Leading Monocrystalline PV Technology",
    country: "Tier 1",
    efficiency: "23.0% Eff.",
  },
  {
    name: "Seraphim",
    logo: seraphimLogo,
    desc: "High-Efficiency Multi-Busbar Solar Modules",
    country: "Tier 1",
    efficiency: "22.4% Eff.",
  },
  {
    name: "Prime Solar Energy",
    logo: primeLogo,
    desc: "Australian Premium Clean Solar Arrays",
    country: "Australia",
    efficiency: "22.2% Eff.",
  },
  {
    name: "Mission Green Solar",
    logo: missionLogo,
    desc: "Reliable High-Yield Clean Energy Modules",
    country: "High Yield",
    efficiency: "22.5% Eff.",
  },
  {
    name: "Orbit Solar",
    logo: orbitLogo,
    desc: "Robust High-Efficiency Commercial & Home Panels",
    country: "Commercial",
    efficiency: "22.1% Eff.",
  },
];

export function PartnersSection() {
  return (
    <section
      aria-label="Partner Brand Hardware"
      className="relative overflow-hidden py-8 sm:py-14 bg-linear-to-b from-[#faf8f5] via-white to-[#faf8f5] border-y border-slate-200/70 text-slate-900"
    >
      {/* ================= INLINE ANIMATION STYLES ================= */}
      <style>{`
        @keyframes partnersLaserSweep {
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
        @keyframes partnersPulseGlow {
          0%, 100% {
            transform: scale(1) translate(-50%, -50%);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.15) translate(-48%, -52%);
            opacity: 0.65;
          }
        }
        @keyframes floatParticleSlow {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-16px) scale(1.2);
            opacity: 0.85;
          }
        }
      `}</style>

      {/* ================= ATTRACTIVE HIGH-TECH SOLAR BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
       

        {/* 2. DYNAMIC SOLAR AMBIENT GLOW ORBS */}
        <div
          className="absolute top-1/2 left-1/2 w-175 sm:w-237.5 h-112.5 bg-linear-to-tr from-amber-400/15 via-orange-400/12 to-emerald-400/8 rounded-full blur-3xl pointer-events-none"
          style={{ animation: "partnersPulseGlow 9s ease-in-out infinite" }}
        />
        <div className="absolute top-0 right-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />

        {/* 3. CRISP SOLAR PHOTOVOLTAIC WAFER BLUEPRINT GRID */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 50%, black 35%, rgba(0,0,0,0.2) 75%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 70% at 50% 50%, black 35%, rgba(0,0,0,0.2) 75%, transparent 100%)",
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="partners-solar-grid"
                width="64"
                height="64"
                patternUnits="userSpaceOnUse"
              >
                {/* Silicon cell perimeter */}
                <path
                  d="M 64 0 L 0 0 0 64"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="0.85"
                  strokeOpacity="0.32"
                />
                {/* Micro busbar guideline */}
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
                {/* Corner intersection dots */}
                <circle cx="0" cy="0" r="2.2" fill="#f59e0b" opacity="0.7" />
                <circle cx="64" cy="0" r="2.2" fill="#ea580c" opacity="0.7" />
                <circle cx="0" cy="64" r="2.2" fill="#ea580c" opacity="0.7" />
                <circle cx="64" cy="64" r="2.2" fill="#f59e0b" opacity="0.7" />
                {/* Center silicon cell diode node */}
                <circle cx="32" cy="32" r="1.6" fill="#10b981" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#partners-solar-grid)" />
          </svg>
        </div>

        {/* 4. ANIMATED LASER SCANNING ENERGY GUIDES */}
        <div className="absolute top-12 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent">
          <div
            className="absolute top-0 h-px w-80 bg-linear-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_12px_#f59e0b]"
            style={{ animation: "partnersLaserSweep 8s linear infinite" }}
          />
        </div>
        <div className="absolute bottom-14 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-400/35 to-transparent">
          <div
            className="absolute top-0 h-px w-96 bg-linear-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_12px_#ea580c]"
            style={{ animation: "partnersLaserSweep 10s linear infinite 3s" }}
          />
        </div>

        

        {/* 6. FLOATING SOLAR LUMINOUS PARTICLES */}
        <div
          className="absolute top-24 left-[15%] h-2 w-2 rounded-full bg-amber-400 blur-[1px]"
          style={{ animation: "floatParticleSlow 4s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-28 right-[18%] h-2.5 w-2.5 rounded-full bg-orange-400 blur-[1px]"
          style={{ animation: "floatParticleSlow 5s ease-in-out infinite 1.5s" }}
        />
        <div
          className="absolute top-1/2 left-[8%] h-1.5 w-1.5 rounded-full bg-emerald-400 blur-[1px]"
          style={{ animation: "floatParticleSlow 4.5s ease-in-out infinite 0.8s" }}
        />
        <div
          className="absolute top-1/3 right-[10%] h-2 w-2 rounded-full bg-amber-300 blur-[1px]"
          style={{ animation: "floatParticleSlow 6s ease-in-out infinite 2.2s" }}
        />
      </div>

      {/* ================= CONTENT LAYER ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Section Header with Badge */}
        <div className="text-center max-w-6xl mx-auto mb-12 sm:mb-16">
         

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
            Engineered with World-Class{" "} <br />
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Solar Technology
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-5xl mx-auto font-normal">
            We partner exclusively with globally certified manufacturers
            equipped with direct Australian warranty headquarters, ensuring
            maximum power generation and decades of peace of mind.
          </p>
        </div>

        {/* ================= 1. INVERTER BRANDS MARQUEE (LEFT TO RIGHT) ================= */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 px-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/20 shrink-0">
                <Zap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg sm:text-2xl font-black tracking-tight text-slate-950">
                  Trusted Inverter &amp; Storage Partners
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  High-efficiency string, hybrid &amp; commercial three-phase inverters
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50/90 border border-amber-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
              <Award className="h-3.5 w-3.5 text-amber-600" />
              <span>Up to 10-Year Local Warranty</span>
            </div>
          </div>

          {/* Marquee Track with Elevated Glassmorphic Card Pills & Glowing Energy Rail */}
          <div className="relative w-full overflow-hidden py-3">
            {/* Luminous circuit rail behind cards */}
            <div className="absolute top-1/2 inset-x-0 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-amber-400/35 to-transparent pointer-events-none" />

            {/* Left Edge Smooth Gradient Fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-44 bg-linear-to-r from-[#faf8f5] via-[#faf8f5]/80 to-transparent z-20" />
            {/* Right Edge Smooth Gradient Fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-44 bg-linear-to-l from-[#faf8f5] via-[#faf8f5]/80 to-transparent z-20" />

            <Marquee
              direction="ltr"
              duration={28}
              gap="1.5rem"
              repeat={4}
              pauseOnHover={true}
              className="py-2"
            >
              {INVERTER_BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="group relative flex items-center justify-center h-22 sm:h-26 w-56 sm:w-68 px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 hover:bg-white hover:-translate-y-1 transition-all duration-300 shrink-0 cursor-pointer"
                  title={`${brand.name} - ${brand.desc}`}
                >
                  

                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-10 sm:h-12 w-auto max-w-[90%] object-contain select-none transition-transform duration-300 group-hover:scale-105 filter contrast-[1.05]"
                    loading="lazy"
                    width={280}
                    height={100}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* ================= 2. SOLAR PANEL BRANDS MARQUEE (RIGHT TO LEFT) ================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 px-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20 shrink-0">
                <Sun className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg sm:text-2xl font-black tracking-tight text-slate-950">
                  Leading Tier-1 Solar Panel Brands
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  High-yield N-Type, monocrystalline &amp; multi-busbar modules
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50/90 border border-emerald-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>25-Year Performance Guarantee</span>
            </div>
          </div>

          {/* Marquee Track with Elevated Glassmorphic Card Pills & Glowing Energy Rail */}
          <div className="relative w-full overflow-hidden py-3">
            {/* Luminous circuit rail behind cards */}
            <div className="absolute top-1/2 inset-x-0 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-orange-400/35 to-transparent pointer-events-none" />

            {/* Left Edge Smooth Gradient Fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-44 bg-linear-to-r from-[#faf8f5] via-[#faf8f5]/80 to-transparent z-20" />
            {/* Right Edge Smooth Gradient Fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-44 bg-linear-to-l from-[#faf8f5] via-[#faf8f5]/80 to-transparent z-20" />

            <Marquee
              direction="rtl"
              duration={28}
              gap="1.5rem"
              repeat={4}
              pauseOnHover={true}
              className="py-2"
            >
              {SOLAR_PANEL_BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="group relative flex items-center justify-center h-22 sm:h-26 w-56 sm:w-68 px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-400 hover:bg-white hover:-translate-y-1 transition-all duration-300 shrink-0 cursor-pointer"
                  title={`${brand.name} - ${brand.desc}`}
                >
                 

                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-10 sm:h-14 w-auto max-w-[90%] object-contain select-none transition-transform duration-300 group-hover:scale-105 filter contrast-[1.05]"
                    loading="lazy"
                    width={380}
                    height={130}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default PartnersSection;
