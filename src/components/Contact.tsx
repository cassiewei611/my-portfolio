import { useState, type FormEvent } from 'react'
import FadeIn from './ui/FadeIn'
import SectionHeading from './ui/SectionHeading'
import { resume } from '@/data/resume'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // For now, just show success state
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-xl">
        <SectionHeading title="Get in Touch" subtitle="I'd love to hear from you" />

        <FadeIn>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-xl border border-morandi-sand/60 bg-cream-dark/40 px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-secondary/50 focus:border-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-xl border border-morandi-sand/60 bg-cream-dark/40 px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-secondary/50 focus:border-primary"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-morandi-sand/60 bg-cream-dark/40 px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-secondary/50 focus:border-primary"
                placeholder="Say hello..."
              />
            </div>

            <button
              type="submit"
              className="relative w-full overflow-hidden rounded-xl bg-primary py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%]" />
              <span className="relative">
                {submitted ? 'Message Sent!' : 'Send Message'}
              </span>
            </button>
          </form>
        </FadeIn>

        {/* Social links */}
        <FadeIn delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-text-secondary transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-text-secondary transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${resume.email}`}
              className="text-2xl text-text-secondary transition-colors hover:text-primary"
              aria-label="Email"
            >
              <HiMail />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
