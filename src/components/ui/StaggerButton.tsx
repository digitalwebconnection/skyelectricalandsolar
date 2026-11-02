import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils'

export interface StaggerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  color?: 'solar' | 'blue'
  className?: string
}

export function StaggerButton({
  text,
  color = 'solar',
  className,
  ...props
}: StaggerButtonProps) {
  const letters = text.split('')

  return (
    <button
      data-text={text}
      className={cn(
        'stagger-tactile-btn',
        color === 'blue' && 'stagger-blue',
        className
      )}
      {...props}
    >
      <span className="stagger-letters" aria-hidden="true">
        {letters.map((char, index) => (
          <i
            key={index}
            style={{
              transitionDelay: `${(0.035 * (index + 1)).toFixed(3)}s`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </i>
        ))}
      </span>
    </button>
  )
}

export default StaggerButton
