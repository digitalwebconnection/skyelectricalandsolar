import { type ComponentType, type CSSProperties } from 'react'
import './SkewHoverCard.css'

export interface SkewHoverCardProps {
  num: string
  title: string
  desc: string
  icon: ComponentType<{ className?: string }>
  isActive?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
  cycleDuration?: number
  className?: string
}

export function SkewHoverCard({
  num,
  title,
  desc,
  icon: Icon,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  cycleDuration = 9,
  className = '',
}: SkewHoverCardProps) {
  return (
    <div
      className={`skew-hover-card ${isActive ? 'is-active' : ''} ${className}`.trim()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={
        {
          ['--cycle-duration' as string]: `${cycleDuration}s`,
        } as CSSProperties
      }
    >
      {/* Top Header: Traffic Light Dots + Step Number */}
      <div className="flex items-center justify-between w-full">
        <div className="align">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <span
          className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-all duration-300 ${
            isActive
              ? 'text-amber-950 bg-amber-400 font-extrabold shadow-sm'
              : 'text-amber-400 bg-amber-400/10 border border-amber-400/20'
          }`}
        >
          Step {num}
        </span>
      </div>

      {/* Main Title & Icon */}
      <div className="flex items-center gap-3 mt-4">
        <div
          className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
            isActive
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/30'
              : 'bg-amber-500/15 text-amber-400 border-amber-500/30 shadow-xs'
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm">
          {title}
        </h3>
      </div>

      {/* Hover/Active Revealed Description */}
      <div className="card-desc mt-3 pt-3 border-t border-slate-700/60 text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
        {desc}
      </div>

      {/* Hint visible when collapsed */}
      <div className="card-hint mt-auto pt-2 text-[10px] font-semibold text-amber-400/80 flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        <span>Hover to view details</span>
      </div>

      {/* 9-second Active Timer Progress Indicator */}
      {isActive && <div key={num} className="progress-line" />}
    </div>
  )
}

export default SkewHoverCard
