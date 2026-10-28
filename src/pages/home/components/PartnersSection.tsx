import { Zap, Sun } from "lucide-react";
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
}

const INVERTER_BRANDS: BrandItem[] = [
  {
    name: "Fronius",
    logo: froniusLogo,
    desc: "Austrian Precision Inverters & Storage",
  },
  {
    name: "Sungrow",
    logo: sungrowLogo,
    desc: "Global Clean Power & Hybrid Inverters",
  },
  {
    name: "Growatt",
    logo: growattLogo,
    desc: "Smart Energy & Battery Inverters",
  },
  {
    name: "GoodWe",
    logo: goodweLogo,
    desc: "Smart Energy Innovator Inverters",
  },
  {
    name: "Solis",
    logo: solisLogo,
    desc: "Global Commercial & Residential Inverters",
  },
  {
    name: "SolaX Power",
    logo: solaxLogo,
    desc: "High-Efficiency Hybrid Energy Storage",
  },
  { name: "SAJ", logo: sajLogo, desc: "Smart Solar & Storage Solutions" },
];

const SOLAR_PANEL_BRANDS: BrandItem[] = [
  {
    name: "JinkoSolar",
    logo: jinkoLogo,
    desc: "Tier-1 High-Efficiency Tiger Neo N-Type",
  },
  {
    name: "LONGi Solar",
    logo: longiLogo,
    desc: "World Leading Monocrystalline PV Technology",
  },
  {
    name: "Seraphim",
    logo: seraphimLogo,
    desc: "High-Efficiency Multi-Busbar Solar Modules",
  },
  {
    name: "Prime Solar Energy",
    logo: primeLogo,
    desc: "Australian Premium Clean Solar Arrays",
  },
  {
    name: "Mission Green Solar",
    logo: missionLogo,
    desc: "Reliable High-Yield Clean Energy Modules",
  },
  {
    name: "Orbit Solar",
    logo: orbitLogo,
    desc: "Robust High-Efficiency Commercial & Home Panels",
  },
];

export function PartnersSection() {
  return (
    <section
      aria-label="Partner Brand Hardware"
      className="relative overflow-hidden py-16 sm:py-10 bg-white border-y border-slate-100 text-slate-900"
    >
      {/* Subtle Ambient Solar Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 sm:w-237.5 h-112.5 bg-linear-to-tr from-amber-500/5 via-orange-500/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Engineered with World-Class <br />
            <span className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Solar Technology
            </span>
          </h2>
        </div>

        {/* ================= 1. INVERTER BRANDS MARQUEE (LEFT TO RIGHT) ================= */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 border border-amber-200/70 text-amber-600 shadow-xs shrink-0">
                <Zap className="h-4.5 w-4.5" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                  Trusted Inverter Brands
                </h3>
              </div>
            </div>
          </div>

          {/* Marquee Track with Smooth Edge Fades */}
          <div className="relative w-full overflow-hidden ">
            {/* Left Edge Subtle Fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-linear-to-r from-white via-white/80 to-transparent z-10" />
            {/* Right Edge Subtle Fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-linear-to-l from-white via-white/80 to-transparent z-10" />

            <Marquee
              direction="ltr"
              duration={30}
              gap="1.5rem"
              repeat={4}
              pauseOnHover={true}
              className="py-1"
            >
              {INVERTER_BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center h-20 sm:h-24 w-52 sm:w-64 px-6 py-3 hover:-translate-y-1 transition-all duration-300 shrink-0 cursor-pointer group"
                  title={`${brand.name} - ${brand.desc}`}
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-10 sm:h-12 w-auto max-w-[95%] object-contain select-none transition-transform duration-300 group-hover:scale-105"
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 border border-orange-200/70 text-orange-600 shadow-xs shrink-0">
                <Sun className="h-4.5 w-4.5" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                  Leading Solar Panel Brands
                </h3>
              </div>
            </div>
          </div>

          {/* Marquee Track with Smooth Edge Fades */}
          <div className="relative w-full overflow-hidden">
            {/* Left Edge Subtle Fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-linear-to-r from-white via-white/80 to-transparent z-10" />
            {/* Right Edge Subtle Fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-linear-to-l from-white via-white/80 to-transparent z-10" />

            <Marquee
              direction="rtl"
              duration={30}
              gap="1.5rem"
              repeat={4}
              pauseOnHover={true}
              className="py-1"
            >
              {SOLAR_PANEL_BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center h-20 sm:h-24 w-52 sm:w-64 px-6 py-3  hover:-translate-y-1 transition-all duration-300 shrink-0 cursor-pointer group"
                  title={`${brand.name} - ${brand.desc}`}
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-10 sm:h-18 w-auto max-w-[95%] object-contain select-none transition-transform duration-300 group-hover:scale-105"
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
