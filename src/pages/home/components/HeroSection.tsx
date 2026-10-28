import { PhoneCall, Star, ShieldCheck, Zap } from "lucide-react";
import { CONTACT_INFO } from "../../../constants";
import { StaggerButton } from "../../../components/common/StaggerButton";
import { StrokeText } from "../../../components/common/StrokeText";
import { useInquiryModal } from "../../../context";

// Fountain of energy particle presets for the "Funtara" background effect
const FOUNTAIN_PARTICLES = [
  {
    id: 1,
    left: "48%",
    bottom: "18%",
    size: 7,
    delay: "0s",
    duration: "3.2s",
    anim: "solarFountainCenter",
    color: "bg-amber-400",
  },
  {
    id: 2,
    left: "52%",
    bottom: "15%",
    size: 9,
    delay: "0.4s",
    duration: "3.6s",
    anim: "solarFountainRight",
    color: "bg-orange-400",
  },
  {
    id: 3,
    left: "46%",
    bottom: "16%",
    size: 6,
    delay: "0.8s",
    duration: "2.9s",
    anim: "solarFountainLeft",
    color: "bg-yellow-300",
  },
  {
    id: 4,
    left: "54%",
    bottom: "20%",
    size: 10,
    delay: "1.2s",
    duration: "4.0s",
    anim: "solarFountainCenter",
    color: "bg-amber-300",
  },
  {
    id: 5,
    left: "44%",
    bottom: "14%",
    size: 5,
    delay: "1.5s",
    duration: "3.1s",
    anim: "solarFountainLeft",
    color: "bg-orange-300",
  },
  {
    id: 6,
    left: "56%",
    bottom: "17%",
    size: 8,
    delay: "1.9s",
    duration: "3.4s",
    anim: "solarFountainRight",
    color: "bg-amber-400",
  },
  {
    id: 7,
    left: "49%",
    bottom: "19%",
    size: 11,
    delay: "2.2s",
    duration: "3.8s",
    anim: "solarFountainCenter",
    color: "bg-yellow-400",
  },
  {
    id: 8,
    left: "43%",
    bottom: "13%",
    size: 6,
    delay: "2.5s",
    duration: "2.8s",
    anim: "solarFountainLeft",
    color: "bg-emerald-400",
  },
  {
    id: 9,
    left: "57%",
    bottom: "15%",
    size: 7,
    delay: "2.8s",
    duration: "3.5s",
    anim: "solarFountainRight",
    color: "bg-orange-400",
  },
  {
    id: 10,
    left: "51%",
    bottom: "17%",
    size: 9,
    delay: "3.1s",
    duration: "3.3s",
    anim: "solarFountainCenter",
    color: "bg-amber-400",
  },
  {
    id: 11,
    left: "47%",
    bottom: "21%",
    size: 6,
    delay: "0.6s",
    duration: "3.7s",
    anim: "solarFountainLeft",
    color: "bg-yellow-300",
  },
  {
    id: 12,
    left: "53%",
    bottom: "14%",
    size: 8,
    delay: "1.7s",
    duration: "3.0s",
    anim: "solarFountainRight",
    color: "bg-amber-300",
  },
];

export function HeroSection() {
  const { openInquiryModal } = useInquiryModal();

  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-amber-50/70 via-white to-orange-50/50 pt-6 sm:pt-8 lg:pt-10 pb-16 lg:pb-24 border-b border-amber-200/70">
      {/* CSS Keyframes for Grid Beams, Solar Rays & Fountain Effects */}
      <style>{`
        @keyframes solarFountainCenter {
          0% {
            transform: translate(0, 0) scale(0.4);
            opacity: 0;
          }
          15% {
            opacity: 0.95;
          }
          50% {
            opacity: 0.85;
            transform: translate(calc(-5px + 10px * var(--r, 0.5)), -180px) scale(1.15);
          }
          100% {
            transform: translate(calc(-15px + 30px * var(--r, 0.5)), -380px) scale(0.2);
            opacity: 0;
          }
        }
        @keyframes solarFountainLeft {
          0% {
            transform: translate(0, 0) scale(0.4);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          60% {
            opacity: 0.8;
            transform: translate(-100px, -200px) scale(1.1);
          }
          100% {
            transform: translate(-220px, -360px) scale(0.2);
            opacity: 0;
          }
        }
        @keyframes solarFountainRight {
          0% {
            transform: translate(0, 0) scale(0.4);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          60% {
            opacity: 0.8;
            transform: translate(100px, -200px) scale(1.1);
          }
          100% {
            transform: translate(220px, -360px) scale(0.2);
            opacity: 0;
          }
        }
        @keyframes fountainGlowPulse {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.18) translateY(-25px);
            opacity: 0.85;
          }
        }
        @keyframes gridBeamH {
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
        @keyframes gridBeamV {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        @keyframes solarPulseRing {
          0% {
            transform: scale(0.88);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.18);
            opacity: 0.18;
          }
          100% {
            transform: scale(0.88);
            opacity: 0.6;
          }
        }
        @keyframes solarRayRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes solarCircuitFlow {
          to {
            stroke-dashoffset: -48;
          }
        }
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.45;
          }
          50% {
            transform: translateY(-22px) scale(1.2);
            opacity: 0.95;
          }
        }
      `}</style>

      {/* ================= BACKGROUND WRAPPER (z-0: cleanly behind z-10 interactive content) ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        {/* ================= 1. ARCHITECTURAL SOLAR PHOTO HORIZON BACKDROP ================= */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 65%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 65%, transparent 100%)",
          }}
        >
          <img
            src="/assets/solar-farm-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-top opacity-30 filter brightness-[1.05] contrast-[1.12] saturate-[1.25]"
          />
          {/* Contrast-preserving gradient masks */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-amber-500/10 via-transparent to-orange-500/10" />
        </div>

        {/* ================= 3. HIGH-TECH SOLAR WAFER GRID (Crisp SVG Blueprint) ================= */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 92% 76% at 50% 48%, black 45%, rgba(0, 0, 0, 0.4) 80%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 92% 76% at 50% 48%, black 45%, rgba(0, 0, 0, 0.4) 80%, transparent 100%)",
          }}
        >
          <svg
            className="w-full h-full opacity-55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-solar-wafer-grid"
                width="56"
                height="56"
                patternUnits="userSpaceOnUse"
              >
                {/* Silicon cell perimeter boundary */}
                <path
                  d="M 56 0 L 0 0 0 56"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="0.9"
                  strokeOpacity="0.35"
                />
                {/* Internal busbar guidelines */}
                <line
                  x1="28"
                  y1="0"
                  x2="28"
                  y2="56"
                  stroke="#f59e0b"
                  strokeWidth="0.6"
                  strokeDasharray="2,3"
                  strokeOpacity="0.22"
                />
                <line
                  x1="0"
                  y1="28"
                  x2="56"
                  y2="28"
                  stroke="#f59e0b"
                  strokeWidth="0.6"
                  strokeDasharray="2,3"
                  strokeOpacity="0.22"
                />
                {/* Micro Junction Intersect Points */}
                <circle cx="0" cy="0" r="2.2" fill="#f59e0b" opacity="0.75" />
                <circle cx="56" cy="0" r="2.2" fill="#ea580c" opacity="0.75" />
                <circle cx="0" cy="56" r="2.2" fill="#ea580c" opacity="0.75" />
                <circle cx="56" cy="56" r="2.2" fill="#f59e0b" opacity="0.75" />
                {/* Center cell node */}
                <circle cx="28" cy="28" r="1.6" fill="#10b981" opacity="0.65" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#hero-solar-wafer-grid)"
            />
          </svg>
        </div>

        {/* ================= 4. ARCHITECTURAL GUIDE LINES & CROSSHAIR METRICS ("gide") ================= */}
        {/* Top Horizontal Alignment Guide with Scanning Laser Beam */}
        <div className="absolute top-14 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent">
          <div
            className="absolute top-0 h-px w-72 bg-linear-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_10px_#f59e0b]"
            style={{ animation: "gridBeamH 9s linear infinite" }}
          />
        </div>

        {/* Lower Horizontal Alignment Guide with Scanning Laser Beam */}
        <div className="absolute bottom-20 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-400/35 to-transparent">
          <div
            className="absolute top-0 h-px w-80 bg-linear-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_10px_#ea580c]"
            style={{
              animation: "gridBeamH 12s linear infinite",
              animationDelay: "3.5s",
            }}
          />
        </div>

        {/* Left Vertical Guide with Vertical Energy Scanner */}
        <div className="absolute top-0 bottom-0 left-[8%] sm:left-[14%] w-px bg-linear-to-b from-transparent via-amber-400/30 to-transparent">
          <div
            className="absolute left-0 w-px h-48 bg-linear-to-b from-transparent via-amber-400 to-transparent shadow-[0_0_8px_#f59e0b]"
            style={{
              animation: "gridBeamV 10s ease-in-out infinite",
              animationDelay: "1s",
            }}
          />
        </div>

        {/* ================= 5. DYNAMIC ANIMATED SOLAR CIRCUIT TRACES ================= */}
        <svg
          className="absolute inset-0 w-full h-full opacity-45"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated Circuit Line 1 (Left to mid-lower) */}
          <path
            d="M 60 160 H 260 L 320 220 H 520"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.4"
            strokeDasharray="6 6"
            style={{ animation: "solarCircuitFlow 2.8s linear infinite" }}
          />
          <circle cx="260" cy="160" r="3" fill="#f59e0b" />
          <circle cx="320" cy="220" r="3.5" fill="#ea580c" />

          {/* Animated Circuit Line 2 (Right to mid-upper) */}
          <path
            d="M 1280 180 H 1080 L 1020 240 H 840"
            fill="none"
            stroke="#ea580c"
            strokeWidth="1.4"
            strokeDasharray="6 6"
            style={{ animation: "solarCircuitFlow 3.2s linear infinite" }}
          />
          <circle cx="1080" cy="180" r="3" fill="#ea580c" />
          <circle cx="1020" cy="240" r="3.5" fill="#f59e0b" />

          {/* Animated Circuit Line 3 (Bottom clean green inverter tie) */}
          <path
            d="M 220 540 H 420 L 480 480 H 700"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.2"
            strokeDasharray="5 5"
            style={{ animation: "solarCircuitFlow 3s linear infinite" }}
          />
          <circle cx="420" cy="540" r="2.8" fill="#10b981" />
          <circle cx="480" cy="480" r="3" fill="#10b981" />
        </svg>

        {/* ================= 6. RADIANT SUNBURST & CONCENTRIC PULSE RINGS ================= */}
        <div className="absolute -top-36 -right-20 sm:right-[2%] w-170 h-170">
          {/* Rotating Conic Sunrays */}
          <div
            className="absolute inset-0 opacity-45"
            style={{
              background:
                "conic-gradient(from 185deg at 50% 50%, transparent 0deg, rgba(245, 158, 11, 0.3) 25deg, transparent 50deg, rgba(234, 88, 12, 0.25) 80deg, transparent 110deg, rgba(251, 191, 36, 0.32) 140deg, transparent 170deg, rgba(245, 158, 11, 0.25) 205deg, transparent 240deg, rgba(234, 88, 12, 0.22) 280deg, transparent 320deg, rgba(251, 191, 36, 0.28) 345deg, transparent 360deg)",
              filter: "blur(24px)",
              animation: "solarRayRotate 80s linear infinite",
            }}
          />

          {/* Breathing Concentric Solar Energy Rings */}
          <div
            className="absolute inset-[14%] rounded-full border border-amber-400/40"
            style={{ animation: "solarPulseRing 6.5s ease-in-out infinite" }}
          />
          <div
            className="absolute inset-[28%] rounded-full border border-orange-400/35"
            style={{
              animation: "solarPulseRing 6.5s ease-in-out infinite",
              animationDelay: "2.1s",
            }}
          />
          <div
            className="absolute inset-[42%] rounded-full border border-amber-300/45"
            style={{
              animation: "solarPulseRing 6.5s ease-in-out infinite",
              animationDelay: "4.3s",
            }}
          />

          {/* Luminous Central Solar Core Bloom */}
          <div className="absolute inset-[32%] rounded-full bg-radial from-amber-400/45 via-orange-400/25 to-transparent blur-2xl" />
        </div>

        {/* Floating Ambient Solar Sparks */}
        <div className="absolute inset-0">
          <span
            className="absolute top-[28%] left-[22%] w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_#f59e0b]"
            style={{ animation: "floatParticle 4.8s ease-in-out infinite" }}
          />
          <span
            className="absolute top-[68%] left-[12%] w-2 h-2 rounded-full bg-orange-200 shadow-[0_0_10px_#ea580c]"
            style={{
              animation: "floatParticle 5.6s ease-in-out infinite",
              animationDelay: "1.2s",
            }}
          />
          <span
            className="absolute top-[22%] right-[32%] w-3 h-3 rounded-full bg-yellow-300 shadow-[0_0_14px_#fde047]"
            style={{
              animation: "floatParticle 4.2s ease-in-out infinite",
              animationDelay: "2.1s",
            }}
          />
          <span
            className="absolute top-[72%] right-[18%] w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981]"
            style={{
              animation: "floatParticle 5.1s ease-in-out infinite",
              animationDelay: "0.8s",
            }}
          />
        </div>

        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-r from-amber-400/15 via-orange-400/20 to-emerald-400/15 blur-3xl" />

        {/* Fountain of Particles (Shooting upward and arching out) */}
        <div className="absolute inset-0 overflow-hidden select-none">
          {FOUNTAIN_PARTICLES.map((p) => (
            <span
              key={p.id}
              className={`absolute rounded-full ${p.color} shadow-[0_0_14px_currentColor]`}
              style={{
                left: p.left,
                bottom: p.bottom,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animation: `${p.anim} ${p.duration} ease-out infinite`,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* ================= FOREGROUND CONTENT CONTAINER (z-10) ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ================= LEFT SIDE: Content & Conversion ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Main Headline with Animated StrokeText */}
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-5xl font-bold font-serif text-slate-900 leading-[1.04]">
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
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Slash up to{" "}
              <strong className="text-slate-900 font-semibold">
                80% off electricity bills
              </strong>{" "}
              with Tier-1 Bloomberg-rated solar panels, intelligent hybrid
              inverters, and blackout-proof battery storage installed by
              licensed Australian master electricians.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <StaggerButton
                text="Get Free Solar Assessment"
                onClick={() => openInquiryModal("Residential Rooftop Solar")}
              />

              <a
                href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-slate-300/90 bg-white px-6 text-sm font-bold text-slate-800 shadow-xs transition-all duration-200 hover:border-orange-500 hover:text-orange-600 hover:shadow-md active:scale-98 cursor-pointer"
              >
                <PhoneCall className="h-4 w-4 text-orange-500" />
                <span>Call {CONTACT_INFO.phone1}</span>
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="mt-8 sm:mt-9 w-full max-w-xl">
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
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
                <div className="flex flex-col items-start px-2 sm:px-4 border-x border-slate-200/80">
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

          {/* ================= RIGHT SIDE: Clean Designed Hero Visual Showcase ================= */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            {/* Luminous Glow Halo behind the Showcase */}
            <div className="absolute -inset-3 bg-linear-to-tr from-amber-500/25 via-orange-500/20 to-emerald-500/20 rounded-3xl blur-2xl transform scale-95 -z-10" />

            {/* The Main Designed Showcase Card */}
            <div
              onClick={() => openInquiryModal("Residential Rooftop Solar")}
              className="group relative w-full overflow-hidden rounded-xl border-4 border-white/95 bg-slate-900 shadow-2xl shadow-slate-900/25 cursor-pointer transition-all duration-500 hover:shadow-amber-500/20 hover:-translate-y-1"
            >
              {/* High-Resolution Solar Rooftop Image */}
              <img
                src="/assets/residential-solar.jpg"
                alt="High-Efficiency Residential Rooftop Solar Installation in Australia"
                className="w-full h-115 sm:h-125 lg:h-135 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/assets/posters/poster-rooftop.jpg";
                }}
              />

              {/* Elegant Solar Glass Sheen & Dark Vignettes */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-slate-950/20" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-amber-500/10 via-transparent to-orange-500/10" />

              {/* FLOATING DESIGNED BADGE 3: Bottom Live Telemetry Dashboard */}
              <div className="absolute bottom-4 inset-x-4 z-10 p-4  bg-slate-950/85 backdrop-blur-xl border border-white/15 shadow-2xl text-white flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-500/40">
                    <Zap className="h-6 w-6 fill-current text-white" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-300">
                        Live Solar Output
                      </span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Generating
                      </span>
                    </div>
                    <div className="text-lg font-black text-white tracking-tight mt-0.5">
                      6.84 kW{" "}
                      <span className="text-xs font-semibold text-amber-400">
                        / Clean Power
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden xs:flex flex-col items-end text-right">
                  <span className="text-[11px] font-medium text-slate-400">
                    Australian Standard
                  </span>
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    AS/NZS 5033
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
