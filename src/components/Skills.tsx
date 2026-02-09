import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import FadeIn from './ui/FadeIn'
import { resume } from '@/data/resume'
import { HiCode, HiServer, HiCog, HiUserGroup } from 'react-icons/hi'
import type { ReactNode } from 'react'

/* ── per-category collage styling ── */
const categories: {
  key: string
  icon: ReactNode
  accent: string        // border / highlight color
  bg: string            // card background
  tagBg: string         // pill background
  rotate: string        // slight tilt
  position: string      // grid placement on desktop
}[] = [
  {
    key: 'Frontend',
    icon: <HiCode />,
    accent: 'border-primary/40',
    bg: 'bg-[#FDF0F0]',
    tagBg: 'bg-primary/8 border-primary/25 hover:bg-primary/18',
    rotate: 'md:-rotate-2',
    position: 'md:col-span-7 md:row-span-1',
  },
  {
    key: 'Backend',
    icon: <HiServer />,
    accent: 'border-morandi-blue/40',
    bg: 'bg-[#F0F4F7]',
    tagBg: 'bg-morandi-blue/10 border-morandi-blue/25 hover:bg-morandi-blue/20',
    rotate: 'md:rotate-1',
    position: 'md:col-span-5 md:row-span-1',
  },
  {
    key: 'Tools',
    icon: <HiCog />,
    accent: 'border-morandi-sage/40',
    bg: 'bg-[#F2F5F0]',
    tagBg: 'bg-morandi-sage/10 border-morandi-sage/25 hover:bg-morandi-sage/20',
    rotate: 'md:rotate-[1.5deg]',
    position: 'md:col-span-5 md:row-span-1',
  },
  {
    key: 'Soft Skills',
    icon: <HiUserGroup />,
    accent: 'border-morandi-mauve/40',
    bg: 'bg-[#F7F0F3]',
    tagBg: 'bg-morandi-mauve/10 border-morandi-mauve/25 hover:bg-morandi-mauve/20',
    rotate: 'md:-rotate-1',
    position: 'md:col-span-7 md:row-span-1',
  },
]

export default function Skills() {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null)

  return (
    <section id="skills" className="bg-cream-dark/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        {/* Collage grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {categories.map((cat, i) => {
            const skill = resume.skills.find((s) => s.category === cat.key)
            if (!skill) return null

            return (
              <FadeIn
                key={cat.key}
                delay={i * 0.12}
                direction="up"
                className={cat.position}
              >
                <motion.div
                  className={`group relative rounded-2xl border-2 ${cat.accent} ${cat.bg} p-5 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5 ${cat.rotate} hover:!rotate-0`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Category header */}
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="text-xl text-text-secondary/70">
                      {cat.icon}
                    </span>
                    <h3 className="font-display text-base font-semibold text-text-primary">
                      {skill.category}
                    </h3>
                  </div>

                  {/* Skill tags — sticker-like pills */}
                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence>
                      {skill.items.map((item, j) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: i * 0.1 + j * 0.04,
                            type: 'spring',
                            stiffness: 400,
                            damping: 15,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onHoverStart={() => setHoveredTag(item)}
                          onHoverEnd={() => setHoveredTag(null)}
                          className={`relative cursor-default rounded-full border px-3 py-1.5 text-sm font-medium text-text-primary/80 transition-colors duration-200 ${cat.tagBg} ${
                            hoveredTag && hoveredTag !== item ? 'opacity-50' : 'opacity-100'
                          }`}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Decorative corner dot */}
                  <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full bg-cream-dark ring-2 ring-white/80" />
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
