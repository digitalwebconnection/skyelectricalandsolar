import {
  Sun,
  TrendingDown,
  ShieldCheck,
  Battery,
  Award,
  Zap,
  CheckCircle2,
  Smartphone,
} from 'lucide-react'
import { Marquee } from '../../../components/common/Marquee'

const TRUST_ITEMS = [
  {
    icon: Sun,
    title: 'Tier-1 Solar Panels',
    desc: 'Bloomberg NEF Monocrystalline',
    badge: 'Tier-1 Rated',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-300/90',
    iconBg: 'bg-gradient-to-br from-amber-500/20 to-orange-500/15 text-amber-600 border border-amber-500/30',
  },
  {
    icon: TrendingDown,
    title: 'Up to 80% Bill Cut',
    desc: 'Guaranteed solar system yield',
    badge: 'Top Savings',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300/90',
    iconBg: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/15 text-emerald-600 border border-emerald-500/30',
  },
  {
    icon: ShieldCheck,
    title: '25-Year Warranty',
    desc: 'Hardware, inverter & labor cover',
    badge: 'Full Cover',
    badgeColor: 'bg-orange-50 text-orange-800 border-orange-300/90',
    iconBg: 'bg-gradient-to-br from-orange-500/20 to-amber-500/15 text-orange-600 border border-orange-500/30',
  },
  {
    icon: Battery,
    title: 'Blackout-Proof Battery',
    desc: 'Seamless 24/7 emergency storage',
    badge: '24/7 Backup',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-300/90',
    iconBg: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/15 text-blue-600 border border-blue-500/30',
  },
  {
    icon: Award,
    title: 'CEC Approved Retailer',
    desc: 'Clean Energy Council master installers',
    badge: 'Certified',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-300/90',
    iconBg: 'bg-gradient-to-br from-purple-500/20 to-pink-500/15 text-purple-600 border border-purple-500/30',
  },
  {
    icon: Zap,
    title: '$0 Upfront Solar Plans',
    desc: 'Australian STC rebates pre-applied',
    badge: 'Govt Rebate',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-300/90',
    iconBg: 'bg-gradient-to-br from-amber-500/20 to-yellow-500/15 text-amber-600 border border-amber-500/30',
  },
  {
    icon: CheckCircle2,
    title: '1-Day Master Install',
    desc: 'Licensed Australian electricians',
    badge: 'Turnkey',
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-300/90',
    iconBg: 'bg-gradient-to-br from-teal-500/20 to-emerald-500/15 text-teal-600 border border-teal-500/30',
  },
  {
    icon: Smartphone,
    title: 'Live Mobile Monitoring',
    desc: '24/7 real-time yield & grid telemetry',
    badge: 'Smart App',
    badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-300/90',
    iconBg: 'bg-gradient-to-br from-indigo-500/20 to-violet-500/15 text-indigo-600 border border-indigo-500/30',
  },
]

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-y border-amber-500/30 bg-slate-950 py-1 sm:py-2 text-slate-900 shadow-2xl">
      
      {/* ================= 1. CINEMATIC SOLAR PHOTO BACKGROUND ================= */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none">
        <img
          src="/assets/solar-farm-bg.jpg"
          alt="Solar farm background"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15] saturate-[1.3] scale-105"
        />
        {/* Deep tech ambient gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-transparent to-slate-950/80" />
      </div>

      {/* ================= 2. HIGH-TECH SOLAR SILICON WAFER GRID ================= */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-20 -z-10 mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="solar-trust-wafer-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />
            <circle cx="0" cy="0" r="2.5" fill="#f59e0b" />
            <circle cx="56" cy="0" r="2.5" fill="#ea580c" />
            <circle cx="0" cy="56" r="2.5" fill="#f59e0b" />
            <circle cx="28" cy="28" r="2" fill="#10b981" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#solar-trust-wafer-grid)" />
      </svg>

      {/* ================= 3. LUMINOUS SOLAR ENERGY FLARES ================= */}
      <div
        className="pointer-events-none absolute -top-16 left-1/4 w-125 h-36 bg-amber-400/25 blur-3xl rounded-full -z-10 animate-pulse"
        style={{ animationDuration: '5s' }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 right-1/4 w-125 h-36 bg-orange-500/25 blur-3xl rounded-full -z-10 animate-pulse"
        style={{ animationDuration: '7s' }}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-28 bg-linear-to-r from-amber-500/20 via-emerald-500/20 to-amber-500/20 blur-2xl -z-10" />

      {/* ================= 4. FLOATING CLEAN ENERGY WATERMARK ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-around opacity-15 select-none text-amber-200 font-black text-3xl sm:text-4xl tracking-[0.35em] uppercase whitespace-nowrap overflow-hidden -z-10"
      >
        <span>CLEAN POWER</span>
        <span>•</span>
        <span>CEC APPROVED</span>
        <span>•</span>
        <span>TIER-1 PANELS</span>
        <span>•</span>
        <span>ZERO EMISSIONS</span>
        <span>•</span>
        <span>SMART BATTERY</span>
      </div>

      {/* ================= 5. TOP & BOTTOM NEON POWER FLOW BEAMS ================= */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-orange-400 to-transparent shadow-[0_0_14px_rgba(245,158,11,0.9)]" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_14px_rgba(16,185,129,0.8)]" />

      {/* ================= 6. SEAMLESS EDGE FADE MASKS ================= */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 bg-linear-to-r from-slate-950 via-slate-950/90 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 bg-linear-to-l from-slate-950 via-slate-950/90 to-transparent z-10" />

      {/* ================= 7. CONTINUOUS SLIDING MARQUEE TRACK ================= */}
      <Marquee
        duration={32}
        gap="1.25rem"
        repeat={4}
        pauseOnHover={true}
        className="py-1"
      >
        {TRUST_ITEMS.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-xl shadow-black/25 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 shrink-0 cursor-default group/card ring-1 ring-black/5"
            >
              <div
                className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} transition-transform duration-300 group-hover/card:scale-110 shadow-xs`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-900 group-hover/card:text-amber-600 transition-colors">
                    {item.title}
                  </h4>
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border shadow-2xs ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          )
        })}
      </Marquee>
    </section>
  )
}

export default TrustStrip
