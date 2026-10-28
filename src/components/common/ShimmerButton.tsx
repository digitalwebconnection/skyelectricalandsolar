import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils'

export interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function ShimmerButton({
  children,
  className,
  glowColor = 'rgba(245, 158, 11, 0.35)',
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer',
        'bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 shadow-lg',
        className
      )}
      style={{
        boxShadow: `0 4px 20px ${glowColor}`,
      }}
      {...props}
    >
      {/* Shimmer sweep effect */}
      <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}

export default ShimmerButton
