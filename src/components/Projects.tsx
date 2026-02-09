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

        {/* Horizontal scroll container */}
        <div className="-mx-6 px-6">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin md:grid md:grid-cols-2 md:overflow-visible">
            {resume.projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="min-w-[300px] shrink-0 snap-center md:min-w-0 md:shrink"
              >
                <div className="group flex h-full flex-col rounded-2xl border border-morandi-sand/50 bg-cream/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="mb-2 font-display text-xl font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-cream-dark px-3 py-1 font-mono text-xs text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-primary"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-primary"
                      >
                        <HiExternalLink /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
