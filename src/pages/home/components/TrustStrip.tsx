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
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    iconBg: 'bg-amber-500/10 text-amber-600 border border-amber-500/20',
  },
  {
    icon: TrendingDown,
    title: 'Up to 80% Bill Cut',
    desc: 'Guaranteed solar system yield',
    badge: 'Top Savings',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    iconBg: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
  },
  {
    icon: ShieldCheck,
    title: '25-Year Warranty',
    desc: 'Hardware, inverter & labor cover',
    badge: 'Full Cover',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    iconBg: 'bg-orange-500/10 text-orange-600 border border-orange-500/20',
  },
  {
    icon: Battery,
    title: 'Blackout-Proof Battery',
    desc: 'Seamless 24/7 emergency storage',
    badge: '24/7 Backup',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    iconBg: 'bg-blue-500/10 text-blue-600 border border-blue-500/20',
  },
  {
    icon: Award,
    title: 'CEC Approved Retailer',
    desc: 'Clean Energy Council master installers',
    badge: 'Certified',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    iconBg: 'bg-purple-500/10 text-purple-600 border border-purple-500/20',
  },
  {
    icon: Zap,
    title: '$0 Upfront Solar Plans',
    desc: 'Australian STC rebates pre-applied',
    badge: 'Govt Rebate',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    iconBg: 'bg-amber-500/10 text-amber-600 border border-amber-500/20',
  },
  {
    icon: CheckCircle2,
    title: '1-Day Master Install',
    desc: 'Licensed Australian electricians',
    badge: 'Turnkey',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    iconBg: 'bg-teal-500/10 text-teal-600 border border-teal-500/20',
  },
  {
    icon: Smartphone,
    title: 'Live Mobile Monitoring',
    desc: '24/7 real-time yield & grid telemetry',
    badge: 'Smart App',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    iconBg: 'bg-indigo-500/10 text-indigo-600 border border-indigo-500/20',
  },
]

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-slate-50/70 py-1 sm:py-2">
      {/* Edge gradient fade masks on left and right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10" />

      {/* Decorative ambient subtle background glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-16 bg-amber-400/10 blur-3xl rounded-full -z-1" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-16 bg-orange-400/10 blur-3xl rounded-full -z-1" />

  
      {/* The Continuous Sliding Marquee Track */}
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
              className="flex items-center gap-3.5 px-5 py-3.5  bg-white shover:shadow-md hover:border-amber-400/80 hover:-translate-y-1 transition-all duration-300 shrink-0 cursor-default group/card"
            >
              <div
                className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} transition-transform duration-300 group-hover/card:scale-110 shadow-2xs`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-900 group-hover/card:text-amber-600 transition-colors">
                    {item.title}
                  </h4>
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.badgeColor}`}
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
