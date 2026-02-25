import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { resume } from '@/data/resume'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  return (
    <section id="projects" className="bg-cream-dark/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" subtitle="Things I've built" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {resume.projects.map((project, i) => {
            const href = project.github ?? project.live
            const CardWrapper = href ? motion.a : motion.div
            return (
              <CardWrapper
                key={project.title}
                {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group flex h-full flex-col rounded-2xl border border-morandi-sand/50 bg-cream/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5 ${href ? 'cursor-pointer' : ''}`}
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  {project.github && (
                    <FaGithub className="mt-1 shrink-0 text-lg text-text-secondary/50 transition-colors group-hover:text-primary" />
                  )}
                  {!project.github && project.live && (
                    <HiExternalLink className="mt-1 shrink-0 text-lg text-text-secondary/50 transition-colors group-hover:text-primary" />
                  )}
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-cream-dark px-3 py-1 font-mono text-xs text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
