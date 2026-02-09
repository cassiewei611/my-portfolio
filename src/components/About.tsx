import FadeIn from './ui/FadeIn'
import SectionHeading from './ui/SectionHeading'
import { resume } from '@/data/resume'
import { HiAcademicCap, HiGlobeAlt, HiSparkles } from 'react-icons/hi'

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="About Me" subtitle="Education and background" />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Left — Education */}
          <FadeIn direction="up" delay={0}>
            <div className="h-full rounded-2xl border border-morandi-sand/50 bg-cream-dark/60 p-6">
              <div className="mb-4 flex items-center gap-2 text-primary">
                <HiAcademicCap className="text-xl" />
                <h3 className="font-display text-lg font-semibold text-text-primary">Education</h3>
              </div>
              <div className="space-y-5">
                {resume.education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-medium text-text-primary">{edu.degree}</p>
                    <p className="text-sm text-text-secondary">{edu.school}</p>
                    <p className="text-sm text-morandi-blue">{edu.period}</p>
                    {edu.gpa && (
                      <p className="mt-1 text-sm text-text-secondary">GPA: {edu.gpa}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — Hobbies + Languages stacked */}
          <div className="flex flex-col gap-6">
            {/* Hobbies */}
            <FadeIn direction="up" delay={0.1}>
              <div className="rounded-2xl border border-morandi-sand/50 bg-cream-dark/60 p-6">
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <HiSparkles className="text-xl" />
                  <h3 className="font-display text-lg font-semibold text-text-primary">Hobbies</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {resume.hobbies.map((hobby) => (
                    <span
                      key={hobby.name}
                      className="rounded-full border border-morandi-sand/60 bg-cream px-4 py-1.5 text-sm text-text-secondary transition-colors hover:border-primary hover:text-primary"
                    >
                      <span className="mr-1.5">{hobby.emoji}</span>
                      {hobby.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Languages */}
            <FadeIn direction="up" delay={0.2}>
              <div className="rounded-2xl border border-morandi-sand/50 bg-cream-dark/60 p-6">
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <HiGlobeAlt className="text-xl" />
                  <h3 className="font-display text-lg font-semibold text-text-primary">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {resume.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="rounded-full bg-cream px-4 py-1.5 text-sm text-text-secondary"
                    >
                      <span className="font-medium text-text-primary">{lang.name}</span>
                      {' — '}
                      {lang.level}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
