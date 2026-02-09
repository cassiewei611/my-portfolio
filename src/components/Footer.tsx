import { resume } from '@/data/resume'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="border-t border-morandi-sand/30 bg-cream-dark/40 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="font-display text-sm text-text-secondary">
          {resume.name} &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={resume.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-text-secondary transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-text-secondary transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${resume.email}`}
            className="text-lg text-text-secondary transition-colors hover:text-primary"
            aria-label="Email"
          >
            <HiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
