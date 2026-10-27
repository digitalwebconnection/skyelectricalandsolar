import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

  const variants = {
    primary:
      'bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-semibold focus:ring-amber-500 shadow-lg shadow-amber-500/20',
    secondary:
      'bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-slate-100 focus:ring-slate-600 border border-slate-700',
    outline:
      'border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 focus:ring-amber-500',
    ghost: 'text-slate-300 hover:bg-slate-800 hover:text-white focus:ring-slate-700',
  }

  const sizes = {
    sm: 'h-8 px-3 text-xs gap-1.5',
    md: 'h-10 px-4 text-sm gap-2',
    lg: 'h-12 px-6 text-base gap-2.5',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
