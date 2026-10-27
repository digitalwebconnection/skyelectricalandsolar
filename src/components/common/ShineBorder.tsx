import * as React from 'react'
import { cn } from '../../utils'

export interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: number
  duration?: number
  shineColor?: string | string[]
  className?: string
  children?: React.ReactNode
}

/**
 * ShineBorder Component (Magic UI)
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  borderWidth = 1.5,
  duration = 12,
  shineColor = ['#f59e0b', '#f97316', '#10b981', '#fbbf24'],
  className,
  style,
  children,
  ...props
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          '--border-width': `${borderWidth}px`,
          '--duration': `${duration}s`,
          backgroundImage: `radial-gradient(transparent, transparent, ${
            Array.isArray(shineColor) ? shineColor.join(',') : shineColor
          }, transparent, transparent)`,
          backgroundSize: '300% 300%',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: 'var(--border-width)',
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        'animate-shine pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] z-10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default ShineBorder

