import { type CSSProperties } from 'react'
import './RotatingCards.css'

export interface RotatingCardItem {
  id: string
  image: string
  badge: string
  title: string
  desc: string
  badgeColor?: string
}

export interface RotatingCardsProps {
  className?: string
  items?: RotatingCardItem[]
  style?: CSSProperties
}

const DEFAULT_ITEMS: RotatingCardItem[] = [
  {
    id: 'solar',
    image: '/assets/posters/poster-rooftop.jpg',
    badge: 'Solar Power',
    title: 'Tier-1 Rooftop Solar',
    desc: 'High-efficiency Bloomberg solar panels with up to 80% power bill cuts.',
    badgeColor: 'bg-amber-500 text-white',
  },
  {
    id: 'battery',
    image: '/assets/posters/poster-battery.jpg',
    badge: 'Battery Storage',
    title: 'Intelligent Battery Backup',
    desc: 'Blackout-proof home energy storage with seamless 24/7 backup.',
    badgeColor: 'bg-orange-500 text-white',
  },
  {
    id: 'electrical',
    image: '/assets/posters/poster-technician.jpg',
    badge: 'Master Electricians',
    title: 'Certified Electrical Work',
    desc: 'Licensed Australian electrical installations, switchboards & maintenance.',
    badgeColor: 'bg-emerald-600 text-white',
  },
]

export function RotatingCards({
  className = '',
  items = DEFAULT_ITEMS,
  style = {},
}: RotatingCardsProps) {
  return (
    <div
      className={`rotating-cards-wrapper ${className}`.trim()}
      style={style}
    >
      <div className="wrap_card">
        {items.slice(0, 3).map((item) => (
          <div className="card" key={item.id}>
            {/* Background Solar / Electrical Photo */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              loading="lazy"
            />

            {/* Contrast Gradient Overlay for Typography Readability */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

            {/* Top Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-md backdrop-blur-md ${
                  item.badgeColor || 'bg-amber-500 text-white'
                }`}
              >
                {item.badge}
              </span>
            </div>

            {/* Bottom Content - properly visible with no cutoffs */}
            <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col items-start text-left pointer-events-none">
              <h4 className="text-base sm:text-lg font-extrabold text-white leading-tight drop-shadow-md">
                {item.title}
              </h4>
              <p className="mt-1.5 text-xs text-slate-200 leading-snug drop-shadow-xs line-clamp-2 font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RotatingCards
