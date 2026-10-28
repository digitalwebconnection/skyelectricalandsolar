import { useState } from "react";
import { PhoneCall, Star, ShieldCheck, Zap } from "lucide-react";
import { CONTACT_INFO } from "../../../constants";
import { StaggerButton } from "../../../components/common/StaggerButton";
import {
  FlyingPosters,
  type FlyingPostersItem,
} from "../../../components/common/FlyingPosters";
import { StrokeText } from "../../../components/common/StrokeText";
import { useInquiryModal } from "../../../context";

const POSTER_ITEMS: FlyingPostersItem[] = [
  {
    image: "/assets/posters/poster-rooftop.jpg",
    alt: "High-Efficiency Residential Solar System",
  },
  {
    image: "/assets/posters/poster-battery.jpg",
    alt: "Smart Wall-Mounted Home Battery Storage",
  },
  {
    image: "/assets/posters/poster-technician.jpg",
    alt: "CEC Accredited Master Electrician & Installer",
  },
  {
    image: "/assets/posters/poster-sunset.jpg",
    alt: "Tier-1 Monocrystalline Photovoltaic Array",
  },
  {
    image: "/assets/posters/poster-ev.jpg",
    alt: "Solar-Powered Smart EV Charging Hub",
  },
  {
    image: "/assets/posters/poster-inverter.jpg",
    alt: "Intelligent Hybrid Inverter & Live Monitoring",
  },
];

export function HeroSection() {
  const { openInquiryModal } = useInquiryModal();
  const [, setSelectedPoster] = useState<{
    alt?: string;
    image?: string;
  } | null>(null);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-amber-50/30 pt-6 sm:pt-8 lg:pt-10 pb-16 lg:pb-24">
      {/* Decorative ambient background radial lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-r from-amber-400/10 via-orange-400/15 to-emerald-400/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-orange-300/15 blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-10 -left-48 w-96 h-96 rounded-full bg-amber-300/15 blur-3xl -z-10" />

      {/* Grid Pattern overlay for clean engineering feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] -z-10"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          {/* ================= LEFT SIDE: Content & Conversion ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Main Headline with Animated StrokeText */}
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-5xl font-bold font-serif  text-slate-900 leading-[1.04]">
              <span>Powering Your Future With</span>
              <span className="block mt-1 sm:mt-2 text-amber-500">
                <StrokeText
                  text="Smart Solar."
                  strokeColor="#f59e0b"
                  fillColor="#ea580c"
                  strokeStyle="solid"
                  strokeWidth={2}
                  dashLength={10}
                  drawDuration={1.5}
                  fillDelay={0.2}
                  stagger={0.04}
                  ease="power2.out"
                  trigger="loop"
                  loopInterval={5}
                  fillMode="wipe"
                  wipeFrom="left"
                  fontSize={64}
                  fontWeight={800}
                  letterSpacing={-2}
                  align="left"
                  marching={false}
                  hoverRedraw={true}
                  shadow={false}
                  className="w-full"
                />
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Slash up to{" "}
              <strong className="text-slate-900 font-semibold">
                80% off electricity bills
              </strong>{" "}
              with Tier-1 Bloomberg-rated solar panels, intelligent hybrid
              inverters, and blackout-proof battery storage installed by
              licensed Australian electricians.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <StaggerButton
                text="Get Free Solar Assessment"
                onClick={() => openInquiryModal("Residential Rooftop Solar")}
              />

              <a
                href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-slate-300/90 bg-white px-6 text-sm font-bold text-slate-800 shadow-xs transition-all duration-200 hover:border-orange-500 hover:text-orange-600 hover:shadow-md active:scale-98"
              >
                <PhoneCall className="h-4 w-4 text-orange-500" />
                <span>Call {CONTACT_INFO.phone1}</span>
              </a>
            </div>

            {/* Normal Small Highlights Container to Balance Left Side */}
            <div className="mt-8 sm:mt-10 w-full max-w-xl ">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 ">
                {/* 1. Rating */}
                <div className="flex flex-col items-start pr-1 sm:pr-2">
                  <div className="flex items-center gap-0.5 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    4.9/5.0 Rated
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500">
                    500+ Happy Homes
                  </span>
                </div>

                {/* 2. Finance / Rebate */}
                <div className="flex flex-col items-start px-2 sm:px-4">
                  <div className="flex items-center gap-1 text-emerald-600 font-bold text-xs sm:text-sm mb-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>$0 Upfront</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    Govt Rebates
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500">
                    Fast STC Approval
                  </span>
                </div>

                {/* 3. Warranty */}
                <div className="flex flex-col items-start pl-2 sm:pl-4">
                  <div className="flex items-center gap-1 text-orange-600 font-bold text-xs sm:text-sm mb-1">
                    <Zap className="h-4 w-4 text-orange-500 shrink-0" />
                    <span>25-Yr Cover</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    Tier-1 Hardware
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-500">
                    Licensed Techs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: 3D FlyingPosters Animation ================= */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-linear-to-tr from-orange-400/20 via-amber-300/15 to-emerald-400/10 rounded-3xl blur-2xl transform scale-95 -z-10" />

            {/* Visual Canvas Container */}
            <div className="relative w-full h-120 sm:h-130 lg:h-145 overflow-hidden backdrop-blur-xs">
              {/* The 3D FlyingPosters Component from React Bits */}
              <FlyingPosters
                items={POSTER_ITEMS}
                planeWidth={410}
                planeHeight={410}
                gap={130}
                distortion={1.2}
                scrollEase={0.015}
                cameraFov={44}
                cameraZ={21}
                rotation={190}
                radius={20}
                speed={100} /* Gentle automatic drift when untouched */
                columns={1}
                lean={0.25}
                shading={0.25}
                fade={0.12}
                drag={true}
                wheel={true}
                pageScroll={0.05}
                onItemClick={(item) => {
                  setSelectedPoster(item);
                }}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
