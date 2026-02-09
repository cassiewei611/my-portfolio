import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import FadeIn from './FadeIn'

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-3', className)}>
      {children}
    </div>
  )
}

interface BentoCardProps {
  title: string
  icon?: ReactNode
  children: ReactNode
  className?: string
  colSpan?: 1 | 2
  delay?: number
}

export function BentoCard({ title, icon, children, className, colSpan = 1, delay = 0 }: BentoCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <div
        className={cn(
          'group rounded-2xl border border-morandi-sand/50 bg-cream-dark/60 p-6 backdrop-blur-sm',
          'transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1',
          colSpan === 2 && 'md:col-span-2',
          className,
        )}
      >
        <div className="mb-4 flex items-center gap-3">
          {icon && (
            <span className="text-2xl text-primary">{icon}</span>
          )}
          <h3 className="font-display text-lg font-semibold text-text-primary">{title}</h3>
        </div>
        {children}
      </div>
    </FadeIn>
  )
}
