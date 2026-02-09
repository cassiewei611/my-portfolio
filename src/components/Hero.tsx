import { motion } from 'framer-motion'
import TypingAnimation from './ui/TypingAnimation'
import { resume } from '@/data/resume'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-float rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 animate-float rounded-full bg-morandi-blue/15 blur-3xl [animation-delay:2s]" />
        <div className="absolute left-1/2 top-2/3 h-64 w-64 animate-float rounded-full bg-morandi-sage/15 blur-3xl [animation-delay:4s]" />
      </div>

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2 text-lg text-text-secondary"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 font-display text-5xl font-semibold text-text-primary md:text-7xl"
        >
          {resume.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8 h-10 text-xl text-text-secondary md:text-2xl"
        >
          <TypingAnimation texts={resume.roles} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-primary px-8 py-3 font-medium text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-morandi-sand px-8 py-3 font-medium text-text-primary transition-all hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary"
      >
        <HiArrowDown className="animate-bounce-slow text-2xl" />
      </motion.a>
    </section>
  )
}
