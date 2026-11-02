import { useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";

interface StandardCard {
  id: number;
  number: string;
  badge: string;
  title: string;
  desc: string;
  side: "left" | "right";
  color: {
    numBg: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    borderAccent: string;
    lineColor: string;
    glow: string;
  };
}

const STANDARDS_LEFT: StandardCard[] = [
  {
    id: 1,
    number: "1",
    badge: "CEC APPROVED RETAILER",
    title: "Clean Energy Council Accreditation",
    desc: "Fully accredited by the Clean Energy Council. Guarantees top-tier installation compliance and direct eligibility for Australian Federal STC rebates and State solar grants.",
    side: "left",
    color: {
      numBg: "bg-amber-500",
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-800",
      badgeBorder: "border-amber-200/80",
      borderAccent: "border-l-4 border-l-amber-500",
      lineColor: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.25)",
    },
  },
  {
    id: 2,
    number: "2",
    badge: "CEC ACCREDITED • LICENSED CONTRACTOR",
    title: "Registered Electrical Contractor",
    desc: "Fully licensed Australian electrical contractor operating across Western Australia, New South Wales, and Queensland. Every system design and final sign-off is completed by master electricians.",
    side: "left",
    color: {
      numBg: "bg-teal-600",
      badgeBg: "bg-teal-50",
      badgeText: "text-teal-800",
      badgeBorder: "border-teal-200/80",
      borderAccent: "border-l-4 border-l-teal-600",
      lineColor: "#0d9488",
      glow: "rgba(13, 148, 136, 0.25)",
    },
  },
  {
    id: 3,
    number: "3",
    badge: "AS/NZS 3000:2018 COMPLIANT",
    title: "Australian Electrical Wiring Rules",
    desc: "Zero compromised cable runs. All wiring is enclosed in UV-stabilised heavy-duty conduits with compliant thermal dissipation, circuit breaker protection, and earthing.",
    side: "left",
    color: {
      numBg: "bg-blue-600",
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-800",
      badgeBorder: "border-blue-200/80",
      borderAccent: "border-l-4 border-l-blue-600",
      lineColor: "#2563eb",
      glow: "rgba(37, 99, 235, 0.25)",
    },
  },
];

const STANDARDS_RIGHT: StandardCard[] = [
  {
    id: 4,
    number: "4",
    badge: "AS/NZS 5033:2021 CERTIFIED",
    title: "PV Array Safety & Wind Engineering",
    desc: "Rigorous rooftop engineering tested against Australian wind zones A & B. High-grade anodized aluminum clamping protects roof tiles and withstands 45°C heatwaves.",
    side: "right",
    color: {
      numBg: "bg-orange-600",
      badgeBg: "bg-orange-50",
      badgeText: "text-orange-800",
      badgeBorder: "border-orange-200/80",
      borderAccent: "border-r-4 border-r-orange-600",
      lineColor: "#ea580c",
      glow: "rgba(234, 88, 12, 0.25)",
    },
  },
  {
    id: 5,
    number: "5",
    badge: "CLEAN ENERGY REGULATOR",
    title: "Upfront Government STC Rebates",
    desc: "Registered with the Clean Energy Regulator. We handle all STC creation and rebate paperwork upfront, deducting thousands directly off your quote invoice.",
    side: "right",
    color: {
      numBg: "bg-emerald-600",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-800",
      badgeBorder: "border-emerald-200/80",
      borderAccent: "border-r-4 border-r-emerald-600",
      lineColor: "#16a34a",
      glow: "rgba(22, 163, 74, 0.25)",
    },
  },
  {
    id: 6,
    number: "6",
    badge: "AS/NZS 5139:2019 COMPLIANT",
    title: "Battery Energy Storage Safety",
    desc: "Certified home battery storage installation. Comprehensive fire separation clearances, emergency isolators, and smart islanding transfer switches installed to code.",
    side: "right",
    color: {
      numBg: "bg-purple-600",
      badgeBg: "bg-purple-50",
      badgeText: "text-purple-800",
      badgeBorder: "border-purple-200/80",
      borderAccent: "border-r-4 border-r-purple-600",
      lineColor: "#9333ea",
      glow: "rgba(147, 51, 234, 0.25)",
    },
  },
];

/** SVG Rosette / Scalloped Seal Component for the Accreditation Strip */
function RosetteSeal({
  color,
  type,
  text,
}: {
  color: "orange" | "teal" | "emerald" | "purple";
  type: "text" | "check";
  text?: string;
}) {
  const colorMap = {
    orange: { bg: "#ea580c" },
    teal: { bg: "#0d9488" },
    emerald: { bg: "#16a34a" },
    purple: { bg: "#7e22ce" },
  };
  const c = colorMap[color];

  // 48-point scalloped circle
  const points = Array.from({ length: 48 }, (_, i) => {
    const r = i % 2 === 0 ? 27 : 24;
    const a = (i * Math.PI) / 24;
    return `${(30 + r * Math.cos(a)).toFixed(1)},${(30 + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      className="h-11 w-11 sm:h-13 sm:w-13 shrink-0 drop-shadow-sm select-none"
      viewBox="0 0 60 60"
      aria-hidden="true"
    >
      <polygon points={points} fill={c.bg} />
      <circle
        cx="30"
        cy="30"
        r="21.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeDasharray="2.5 2"
      />
      {type === "check" ? (
        <path
          d="M 23 30 L 28 35 L 38 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : text === "25 YEARS" ? (
        <g textAnchor="middle" fill="#ffffff" fontWeight="900">
          <text x="30" y="27" fontSize="12" letterSpacing="0.02em">
            25
          </text>
          <text x="30" y="37" fontSize="6.5" letterSpacing="0.08em">
            YEARS
          </text>
        </g>
      ) : (
        <text
          x="30"
          y="34"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="10"
          fontWeight="900"
          letterSpacing="0.05em"
        >
          {text}
        </text>
      )}
    </svg>
  );
}

export function AboutStandards() {
  const [activePin, setActivePin] = useState<number | null>(null);

  return (
    <section
      id="about-standards"
      aria-labelledby="about-standards-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-[#cae7fd] via-[#e5f1fb] to-[#daf1e4] py-8 lg:py-14 font-sans-modern"
    >
      {/* Background Soft Green Rolling Hill at Bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 -z-10 overflow-hidden">
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-56"
          viewBox="0 0 1440 220"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0 110 C 380 180 720 50 1100 130 C 1280 170 1380 120 1440 110 L 1440 220 L 0 220 Z"
            fill="#c0ebd2"
            fillOpacity="0.8"
          />
          <path
            d="M 0 140 C 420 200 800 100 1180 160 C 1320 180 1400 150 1440 140 L 1440 220 L 0 220 Z"
            fill="#a5dfbc"
            fillOpacity="0.75"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2
            id="about-standards-heading"
            className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.14] text-[#0f2347]"
          >
            Engineered to Surpass{" "}
            <span className="text-solar-orange font-serif">Australian Energy Standards.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-700 font-normal max-w-5xl mx-auto">
            Australia has some of the harshest UV, heat, and storm conditions in the world. Our
            accreditations guarantee your system is engineered for thirty years of reliable power.
          </p>
        </div>

        {/* ================= INFOGRAPHIC DIAGRAM & 6 CARDS ================= */}
        {/* Responsive Grid: Wide, spacious cards + Heroic central house with exact connecting lines */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-[380px_1fr_380px] xl:grid-cols-[410px_1fr_410px] items-stretch gap-6 lg:gap-3 xl:gap-6">
          {/* LEFT 3 WIDE CARDS (Equal 3-row distribution) */}
          <div className="flex flex-col justify-between gap-4 order-2 lg:order-1 h-full">
            {STANDARDS_LEFT.map((card) => {
              const isHovered = activePin === card.id;
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActivePin(card.id)}
                  onMouseLeave={() => setActivePin(null)}
                  className={`relative flex flex-col justify-between rounded-2xl bg-white/95 p-4 sm:p-5 shadow-[0_6px_22px_rgba(15,35,71,0.06)] border border-slate-100 transition-all duration-300 ${card.color.borderAccent} ${
                    isHovered
                      ? "scale-[1.02] shadow-[0_14px_30px_rgba(15,35,71,0.12)] -translate-y-0.5"
                      : "hover:shadow-[0_10px_24px_rgba(15,35,71,0.08)]"
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? `0 14px 30px ${card.color.glow}, 0 2px 6px rgba(0,0,0,0.04)`
                      : undefined,
                  }}
                >
                  <div>
                    {/* Top Bar: Number Badge + Status Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white text-[11px] font-black shadow-xs ${card.color.numBg}`}
                      >
                        {card.number}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${card.color.badgeBg} ${card.color.badgeText} ${card.color.badgeBorder}`}
                      >
                        <Check className="h-2.5 w-2.5 stroke-3" />
                        <span>{card.badge}</span>
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="mt-2.5 font-sans-modern text-[14px] sm:text-[15px] font-extrabold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* Footer Verification */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>100% Certified Compliance</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER SOLAR HOUSE ILLUSTRATION - BIGGER & PRECISELY ALIGNED */}
          <div className="flex items-center justify-center order-1 lg:order-2 my-1 lg:my-0 px-1 sm:px-2 h-full">
            <div className="relative w-full max-w-140 lg:max-w-155 xl:max-w-165">
              <svg
                viewBox="0 0 540 540"
                className="w-full h-auto drop-shadow-md select-none"
                aria-label="Solar House Accreditation Diagram"
              >
                <defs>
                  {/* Radiant Sun Gradient */}
                  <radialGradient id="sunAura" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
                    <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="sunDisk" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fde047" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>

                  {/* Solar Panel Deep Blue Gradient */}
                  <linearGradient id="solarCellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="40%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>

                  {/* Cloud Subtle Shadow Filter */}
                  <filter id="cloudShadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow
                      dx="0"
                      dy="3"
                      stdDeviation="4"
                      floodColor="#0f2347"
                      floodOpacity="0.08"
                    />
                  </filter>
                </defs>

                {/* 1. THE RADIANT SUN */}
                <circle cx="270" cy="80" r="58" fill="url(#sunAura)" />
                {/* 16 Radiant Sun Rays */}
                <g stroke="#f59e0b" strokeWidth="3" strokeLinecap="round">
                  {Array.from({ length: 16 }).map((_, i) => {
                    const angle = (i * Math.PI) / 8;
                    const x1 = 270 + 38 * Math.cos(angle);
                    const y1 = 80 + 38 * Math.sin(angle);
                    const x2 = 270 + 52 * Math.cos(angle);
                    const y2 = 80 + 52 * Math.sin(angle);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
                  })}
                </g>
                <circle cx="270" cy="80" r="32" fill="url(#sunDisk)" />

                {/* Sunbeams Radiating Downward to PV Array */}
                <g stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="3 3">
                  <line x1="240" y1="118" x2="205" y2="190" opacity="0.8" />
                  <line x1="258" y1="120" x2="242" y2="190" opacity="0.85" />
                  <line x1="270" y1="122" x2="270" y2="190" opacity="0.9" />
                  <line x1="282" y1="120" x2="298" y2="190" opacity="0.85" />
                  <line x1="300" y1="118" x2="335" y2="190" opacity="0.8" />
                </g>

                {/* 2. CUTE CLOUDS */}
                {/* Left Cloud */}
                <g filter="url(#cloudShadow)">
                  <path
                    d="M 120 95 C 120 86 129 78 139 78 C 145 69 156 61 168 61 C 182 61 194 71 197 84 C 205 84 212 91 212 99 C 212 107 205 113 197 113 L 131 113 C 123 113 120 105 120 95 Z"
                    fill="#ffffff"
                  />
                </g>
                {/* Right Cloud */}
                <g filter="url(#cloudShadow)">
                  <path
                    d="M 330 95 C 330 86 339 78 349 78 C 355 69 366 61 378 61 C 392 61 404 71 407 84 C 415 84 422 91 422 99 C 422 107 415 113 407 113 L 341 113 C 333 113 330 105 330 95 Z"
                    fill="#ffffff"
                  />
                </g>

                {/* 3. DOTTED CONNECTOR CURVES - MATHEMATICALLY ALIGNED TO CARDS */}
                {/* Curve 1 (Orange) -> Terminates at (0, 90) Center of Card 1 */}
                <path
                  d="M 220 242 C 140 242 70 120 0 90"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth={activePin === 1 ? "3.5" : "2.2"}
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
                {/* Curve 2 (Teal) -> Terminates at (0, 270) Center of Card 2 */}
                <path
                  d="M 179 348 C 120 348 60 285 0 270"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth={activePin === 2 ? "3.5" : "2.2"}
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
                {/* Curve 3 (Blue) -> Terminates at (0, 450) Center of Card 3 */}
                <path
                  d="M 179 440 C 120 440 60 448 0 450"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth={activePin === 3 ? "3.5" : "2.2"}
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* Curve 4 (Orange-Red) -> Terminates at (540, 90) Center of Card 4 */}
                <path
                  d="M 320 242 C 400 242 470 120 540 90"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth={activePin === 4 ? "3.5" : "2.2"}
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
                {/* Curve 5 (Green) -> Terminates at (540, 270) Center of Card 5 */}
                <path
                  d="M 445 275 C 475 275 510 270 540 270"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth={activePin === 5 ? "3.5" : "2.2"}
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
                {/* Curve 6 (Purple) -> Terminates at (540, 450) Center of Card 6 */}
                <path
                  d="M 388 385 C 435 385 480 435 540 450"
                  fill="none"
                  stroke="#9333ea"
                  strokeWidth={activePin === 6 ? "3.5" : "2.2"}
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* 4. EXPANDED SOLAR HOUSE - GRAND SIZE */}
                {/* Roof Base Eaves */}
                <polygon points="110,285 430,285 380,195 160,195" fill="#1b365d" />
                {/* Top Ridge Trim */}
                <rect x="154" y="190" width="232" height="6" rx="3" fill="#0e1f3d" />
                {/* Bottom Eave Overhang Trim */}
                <rect x="100" y="281" width="340" height="9.5" rx="3.5" fill="#0e1f3d" />

                {/* PV Solar Array (4 Large High-Definition Panels) */}
                {/* Panel 1 Top-Left */}
                <polygon
                  points="175,240 264,240 262,202 185,202"
                  fill="url(#solarCellGrad)"
                  stroke="#93c5fd"
                  strokeWidth="1.5"
                />
                {/* Panel 2 Top-Right */}
                <polygon
                  points="276,240 365,240 355,202 278,202"
                  fill="url(#solarCellGrad)"
                  stroke="#93c5fd"
                  strokeWidth="1.5"
                />
                {/* Panel 3 Bottom-Left */}
                <polygon
                  points="164,280 265,280 265,244 174,244"
                  fill="url(#solarCellGrad)"
                  stroke="#93c5fd"
                  strokeWidth="1.5"
                />
                {/* Panel 4 Bottom-Right */}
                <polygon
                  points="275,280 376,280 366,244 275,244"
                  fill="url(#solarCellGrad)"
                  stroke="#93c5fd"
                  strokeWidth="1.5"
                />

                {/* Panel Sub-cell Grid Lines */}
                <line
                  x1="220"
                  y1="202"
                  x2="216"
                  y2="280"
                  stroke="#60a5fa"
                  strokeWidth="1"
                  opacity="0.65"
                />
                <line
                  x1="320"
                  y1="202"
                  x2="324"
                  y2="280"
                  stroke="#60a5fa"
                  strokeWidth="1"
                  opacity="0.65"
                />

                {/* Diagonal Specular Highlight on Solar Glass */}
                <polygon points="184,202 208,202 165,280 145,280" fill="#ffffff" opacity="0.22" />

                {/* HOUSE BODY WALL */}
                <rect
                  x="140"
                  y="290"
                  width="260"
                  height="155"
                  fill="#ffffff"
                  stroke="#e2e8f0"
                  strokeWidth="3"
                />

                {/* Front Door */}
                <rect x="250" y="328" width="40" height="117" rx="4.5" fill="#ea580c" />
                <circle cx="258" cy="386" r="3" fill="#ffffff" />

                {/* 4-Pane Window */}
                <rect
                  x="312"
                  y="328"
                  width="48"
                  height="48"
                  rx="4.5"
                  fill="#fef08a"
                  stroke="#e2e8f0"
                  strokeWidth="2.5"
                />
                <line x1="336" y1="328" x2="336" y2="376" stroke="#ffffff" strokeWidth="3" />
                <line x1="312" y1="352" x2="360" y2="352" stroke="#ffffff" strokeWidth="3" />

                {/* Solar Inverter (Left Wall) */}
                <rect
                  x="160"
                  y="328"
                  width="38"
                  height="54"
                  rx="5"
                  fill="#ffffff"
                  stroke="#0d9488"
                  strokeWidth="2.4"
                />
                <circle cx="179" cy="348" r="6" fill="#0d9488" />
                {/* Conduit / Cable Run down to Meter */}
                <line x1="179" y1="382" x2="179" y2="445" stroke="#0284c7" strokeWidth="3.5" />

                {/* Battery Energy Storage System (Right Wall) */}
                <rect
                  x="370"
                  y="324"
                  width="36"
                  height="96"
                  rx="6"
                  fill="#ffffff"
                  stroke="#9333ea"
                  strokeWidth="2.4"
                />
                <line
                  x1="378"
                  y1="342"
                  x2="398"
                  y2="342"
                  stroke="#9333ea"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="378"
                  y1="352"
                  x2="398"
                  y2="352"
                  stroke="#9333ea"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="388" cy="385" r="4.5" fill="#22c55e" />

                {/* STC Rebate Gold Coin Badge */}
                <g transform="translate(445, 290)">
                  <circle
                    r="20"
                    fill="#f59e0b"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    filter="url(#cloudShadow)"
                  />
                  <text
                    x="0"
                    y="7"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="18"
                    fontWeight="bold"
                  >
                    $
                  </text>
                  <rect
                    x="-16"
                    y="14"
                    width="32"
                    height="13"
                    rx="4.5"
                    fill="#fef3c7"
                    stroke="#f59e0b"
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="24"
                    textAnchor="middle"
                    fill="#b45309"
                    fontSize="9"
                    fontWeight="900"
                  >
                    STC
                  </text>
                </g>

                {/* 5. INTERACTIVE NUMBERED PINS (1 TO 6) */}
                {/* Pin 1: CEC Solar Panels */}
                <g
                  className="cursor-pointer transition-transform duration-300"
                  onMouseEnter={() => setActivePin(1)}
                  onMouseLeave={() => setActivePin(null)}
                >
                  {activePin === 1 && (
                    <circle
                      cx="220"
                      cy="242"
                      r="20"
                      fill="#f59e0b"
                      opacity="0.3"
                      className="animate-ping"
                    />
                  )}
                  <circle
                    cx="220"
                    cy="242"
                    r="13.5"
                    fill="#f59e0b"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  <text
                    x="220"
                    y="247"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12.5"
                    fontWeight="900"
                  >
                    1
                  </text>
                </g>

                {/* Pin 2: Inverter / REC Contractor */}
                <g
                  className="cursor-pointer transition-transform duration-300"
                  onMouseEnter={() => setActivePin(2)}
                  onMouseLeave={() => setActivePin(null)}
                >
                  {activePin === 2 && (
                    <circle
                      cx="179"
                      cy="348"
                      r="20"
                      fill="#0d9488"
                      opacity="0.3"
                      className="animate-ping"
                    />
                  )}
                  <circle
                    cx="179"
                    cy="348"
                    r="13.5"
                    fill="#0d9488"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  <text
                    x="179"
                    y="353"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12.5"
                    fontWeight="900"
                  >
                    2
                  </text>
                </g>

                {/* Pin 3: AS/NZS 3000 Grounding / Meter */}
                <g
                  className="cursor-pointer transition-transform duration-300"
                  onMouseEnter={() => setActivePin(3)}
                  onMouseLeave={() => setActivePin(null)}
                >
                  {activePin === 3 && (
                    <circle
                      cx="179"
                      cy="440"
                      r="20"
                      fill="#2563eb"
                      opacity="0.3"
                      className="animate-ping"
                    />
                  )}
                  <circle
                    cx="179"
                    cy="440"
                    r="13.5"
                    fill="#2563eb"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  <text
                    x="179"
                    y="445"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12.5"
                    fontWeight="900"
                  >
                    3
                  </text>
                </g>

                {/* Pin 4: AS/NZS 5033 PV Clamping Clamps */}
                <g
                  className="cursor-pointer transition-transform duration-300"
                  onMouseEnter={() => setActivePin(4)}
                  onMouseLeave={() => setActivePin(null)}
                >
                  {activePin === 4 && (
                    <circle
                      cx="320"
                      cy="242"
                      r="20"
                      fill="#ea580c"
                      opacity="0.3"
                      className="animate-ping"
                    />
                  )}
                  <circle
                    cx="320"
                    cy="242"
                    r="13.5"
                    fill="#ea580c"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  <text
                    x="320"
                    y="247"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12.5"
                    fontWeight="900"
                  >
                    4
                  </text>
                </g>

                {/* Pin 5: Clean Energy Regulator STC Coin */}
                <g
                  className="cursor-pointer transition-transform duration-300"
                  onMouseEnter={() => setActivePin(5)}
                  onMouseLeave={() => setActivePin(null)}
                >
                  {activePin === 5 && (
                    <circle
                      cx="445"
                      cy="275"
                      r="20"
                      fill="#16a34a"
                      opacity="0.3"
                      className="animate-ping"
                    />
                  )}
                  <circle
                    cx="445"
                    cy="275"
                    r="13.5"
                    fill="#16a34a"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  <text
                    x="445"
                    y="280"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12.5"
                    fontWeight="900"
                  >
                    5
                  </text>
                </g>

                {/* Pin 6: AS/NZS 5139 Home Battery Storage */}
                <g
                  className="cursor-pointer transition-transform duration-300"
                  onMouseEnter={() => setActivePin(6)}
                  onMouseLeave={() => setActivePin(null)}
                >
                  {activePin === 6 && (
                    <circle
                      cx="388"
                      cy="385"
                      r="20"
                      fill="#9333ea"
                      opacity="0.3"
                      className="animate-ping"
                    />
                  )}
                  <circle
                    cx="388"
                    cy="385"
                    r="13.5"
                    fill="#9333ea"
                    stroke="#ffffff"
                    strokeWidth="3"
                  />
                  <text
                    x="388"
                    y="390"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12.5"
                    fontWeight="900"
                  >
                    6
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* RIGHT 3 WIDE CARDS (Equal 3-row distribution) */}
          <div className="flex flex-col justify-between gap-4 order-3 h-full">
            {STANDARDS_RIGHT.map((card) => {
              const isHovered = activePin === card.id;
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActivePin(card.id)}
                  onMouseLeave={() => setActivePin(null)}
                  className={`relative flex flex-col justify-between rounded-2xl bg-white/95 p-4 sm:p-5 shadow-[0_6px_22px_rgba(15,35,71,0.06)] border border-slate-100 transition-all duration-300 ${card.color.borderAccent} ${
                    isHovered
                      ? "scale-[1.02] shadow-[0_14px_30px_rgba(15,35,71,0.12)] -translate-y-0.5"
                      : "hover:shadow-[0_10px_24px_rgba(15,35,71,0.08)]"
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? `0 14px 30px ${card.color.glow}, 0 2px 6px rgba(0,0,0,0.04)`
                      : undefined,
                  }}
                >
                  <div>
                    {/* Top Bar: Number Badge + Status Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white text-[11px] font-black shadow-xs ${card.color.numBg}`}
                      >
                        {card.number}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${card.color.badgeBg} ${card.color.badgeText} ${card.color.badgeBorder}`}
                      >
                        <Check className="h-2.5 w-2.5 stroke-3" />
                        <span>{card.badge}</span>
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="mt-2.5 font-sans-modern text-[14px] sm:text-[15px] font-extrabold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* Footer Verification */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>100% Certified Compliance</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM ACCREDITATION BADGES STRIP ================= */}
        <div className="mt-10 sm:mt-14 rounded-3xl bg-white shadow-[0_10px_30px_rgba(15,35,71,0.07)] border border-slate-200/90 p-4 sm:p-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Stat 1: VIC Registered Contractor */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:px-4">
              <RosetteSeal color="orange" type="text" text="VIC" />
              <div>
                <div className="font-serif text-lg sm:text-2xl font-black text-solar-orange leading-tight">
                  REC 16234
                </div>
                <div className="mt-0.5 text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  VIC Registered Contractor
                </div>
              </div>
            </div>

            {/* Stat 2: NSW Electrical Licence */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:px-4 pt-4 sm:pt-2">
              <RosetteSeal color="teal" type="text" text="NSW" />
              <div>
                <div className="font-serif text-lg sm:text-2xl font-black text-[#0052cc] leading-tight">
                  EW 205626
                </div>
                <div className="mt-0.5 text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  NSW Electrical Licence
                </div>
              </div>
            </div>

            {/* Stat 3: 100% In-House Master Electricians */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:px-4 pt-4 sm:pt-2">
              <RosetteSeal color="emerald" type="check" />
              <div>
                <div className="font-serif text-lg sm:text-2xl font-black text-[#16a34a] leading-tight">
                  100% In-House
                </div>
                <div className="mt-0.5 text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Zero Subcontractors
                </div>
              </div>
            </div>

            {/* Stat 4: 25 Years Workmanship Warranty */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:px-4 pt-4 sm:pt-2">
              <RosetteSeal color="purple" type="text" text="25 YEARS" />
              <div>
                <div className="font-serif text-lg sm:text-2xl font-black text-[#7e22ce] leading-tight">
                  25 Years
                </div>
                <div className="mt-0.5 text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Workmanship Warranty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStandards;
