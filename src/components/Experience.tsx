import { motion } from 'framer-motion'
import FadeIn from './ui/FadeIn'
import SectionHeading from './ui/SectionHeading'
import { resume } from '@/data/resume'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-4 top-0 h-full w-0.5 bg-morandi-sand/50 md:left-1/2 md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-12">
            {resume.experience.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className="relative grid grid-cols-[32px_1fr] gap-4 md:grid-cols-2 md:gap-8"
                >
                  {/* Dot */}
                  <FadeIn delay={i * 0.15} direction="none" className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2">
                    <div className="mt-2 h-3 w-3 rounded-full border-2 border-primary bg-cream" />
                  </FadeIn>

                  {/* Card — desktop alternates, mobile always right */}
                  <FadeIn
                    delay={i * 0.15 + 0.1}
                    direction={isLeft ? 'right' : 'left'}
                    className={
                      isLeft
                        ? 'md:col-start-1 md:row-start-1 md:text-right'
                        : 'md:col-start-2 md:row-start-1'
                    }
                  >
                    <div className="rounded-2xl border border-morandi-sand/50 bg-cream-dark/60 p-6">
                      <p className="mb-1 text-sm font-medium text-primary">{exp.period}</p>
                      <h3 className="font-display text-lg font-semibold text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="mb-3 text-sm text-text-secondary">
                        {exp.company} · {exp.type}
                      </p>
                      <ul className={`space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
                        {exp.description.map((bullet, j) => (
                          <li key={j} className="text-sm leading-relaxed text-text-secondary">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>

                  {/* Spacer for alternating layout on desktop */}
                  {isLeft ? (
                    <div className="hidden md:col-start-2 md:row-start-1 md:block" />
                  ) : (
                    <div className="hidden md:col-start-1 md:row-start-1 md:block" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
