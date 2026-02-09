import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  blur?: boolean
  duration?: number
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  blur = true,
  duration = 0.6,
}: FadeInProps) {
  const directionOffset = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {},
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: blur ? 'blur(8px)' : 'blur(0px)',
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
