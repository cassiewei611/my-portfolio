import SectionHeading from './ui/SectionHeading'
import { BentoGrid, BentoCard } from './ui/BentoGrid'
import { resume } from '@/data/resume'
import { HiCode, HiServer, HiCog, HiUserGroup } from 'react-icons/hi'
import type { ReactNode } from 'react'

const categoryIcons: Record<string, ReactNode> = {
  Frontend: <HiCode />,
  Backend: <HiServer />,
  'Tools & Platforms': <HiCog />,
  'Soft Skills': <HiUserGroup />,
}

const categorySpan: Record<string, 1 | 2> = {
  Frontend: 2,
  Backend: 1,
  'Tools & Platforms': 1,
  'Soft Skills': 2,
}

export default function Skills() {
  return (
    <section id="skills" className="bg-cream-dark/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        <BentoGrid>
          {resume.skills.map((skill, i) => (
            <BentoCard
              key={skill.category}
              title={skill.category}
              icon={categoryIcons[skill.category]}
              colSpan={categorySpan[skill.category] ?? 1}
              delay={i * 0.1}
            >
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-morandi-sand/60 bg-cream px-3 py-1 text-sm text-text-secondary transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
