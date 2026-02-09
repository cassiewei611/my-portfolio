import FadeIn from './FadeIn'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <FadeIn className={cn('mb-12 text-center md:mb-16', className)}>
      <h2 className="font-display text-3xl font-semibold text-text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
    </FadeIn>
  )
}
