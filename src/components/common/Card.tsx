import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  icon?: ReactNode
  children?: ReactNode
}

export function Card({ title, subtitle, icon, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-amber-500/5',
        className
      )}
      {...props}
    >
      {(title || subtitle || icon) && (
        <div className="flex items-start gap-4">
          {icon && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-xl text-amber-400 ring-1 ring-amber-500/20">
              {icon}
            </div>
          )}
          <div className="flex-1">
            {title && <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>}
            {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
          </div>
        </div>
      )}
      {children && <div className={title || subtitle || icon ? 'mt-4' : ''}>{children}</div>}
    </div>
  )
}
