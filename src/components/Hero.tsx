import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import TypingAnimation from './ui/TypingAnimation'
import { resume } from '@/data/resume'
import { HiArrowDown, HiArrowRight, HiLocationMarker, HiTerminal } from 'react-icons/hi'

type Phase = 'hello' | 'name' | 'done'

/* ── Bubbles: evenly around photo like a clock, avoid bottom-left (title) ── */
const bubbles = [
  // 12 o'clock — above head
  { label: 'Web Dev',         x: '28%',  y: '-22%', size: 148, color: '#D98E8E', bg: '#D98E8E', delay: 0.1,  float: 'animate-float-slow' },
  // 2 o'clock — upper right
  { label: 'AI Agent',        x: '82%',  y: '12%',  size: 138, color: '#7E9BAA', bg: '#7E9BAA', delay: 0.2,  float: 'animate-float-slower' },
  // 4 o'clock — lower right
  { label: 'Cloud Services',  x: '78%',  y: '62%',  size: 140, color: '#8A9E82', bg: '#8A9E82', delay: 0.15, float: 'animate-float-slow' },
  // 5 o'clock — bottom right
  { label: 'Data Analytics',  x: '50%',  y: '88%',  size: 134, color: '#7E9BAA', bg: '#7E9BAA', delay: 0.25, float: 'animate-float-slower' },
  // 10 o'clock — upper left
  { label: 'UI / UX',         x: '-22%', y: '18%',  size: 128, color: '#B08E98', bg: '#B08E98', delay: 0.3,  float: 'animate-float' },
]

/* Bubble style */
function bubbleStyle(size: number, bg: string) {
  return {
    width: size,
    height: size,
    background: `
      radial-gradient(circle at 30% 22%, rgba(255,255,255,0.65) 0%, transparent 35%),
      radial-gradient(circle at 50% 50%, ${bg}55 0%, ${bg}30 100%)
    `,
    border: `1.5px solid ${bg}55`,
    boxShadow: `
      inset 0 -8px 20px ${bg}22,
      inset 0 2px 8px rgba(255,255,255,0.35),
      0 6px 24px ${bg}18
    `,
  }
}

/* Hover overlay style — deepens the fill */
function bubbleHoverOverlay(bg: string) {
  return {
    background: `radial-gradient(circle at 50% 50%, ${bg}44 0%, ${bg}22 100%)`,
  }
}

/* ── Left-side decorative clouds ── */
const clouds = [
  { x: '-8%',  y: '5%',  w: 120, h: 50, delay: 0.4 },
  { x: '70%',  y: '15%', w: 90,  h: 38, delay: 0.6 },
  { x: '10%',  y: '82%', w: 100, h: 42, delay: 0.8 },
]

/* Stagger animation for text elements */
const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const [phase, setPhase] = useState<Phase>('hello')
  const [helloText, setHelloText] = useState('')
  const [nameText, setNameText] = useState('')

  /* Mouse-follow for clouds */
  const leftRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = leftRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.04)
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.04)
    },
    [mouseX, mouseY]
  )

  const helloFull = 'Hej :)'
  const nameFull = `I'm ${resume.name}`

  const typeText = useCallback(
    (
      fullText: string,
      setter: React.Dispatch<React.SetStateAction<string>>,
      onDone: () => void,
      speed = 100
    ) => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setter(fullText.slice(0, i))
        if (i >= fullText.length) {
          clearInterval(interval)
          setTimeout(onDone, 300)
        }
      }, speed)
      return () => clearInterval(interval)
    },
    []
  )

  useEffect(() => {
    if (phase === 'hello') {
      return typeText(helloFull, setHelloText, () => setPhase('name'), 120)
    }
    if (phase === 'name') {
      return typeText(nameFull, setNameText, () => setPhase('done'), 80)
    }
  }, [phase, typeText, helloFull, nameFull])

  const showCursor = (target: Phase) =>
    phase === target ? (
      <span className="cursor-blink text-primary">|</span>
    ) : null

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* ─── Background blobs ─── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[500px] w-[500px] animate-float-slow rounded-full bg-gradient-to-br from-primary/8 to-primary-light/12 blur-3xl" />
        <div className="absolute -bottom-32 right-[10%] h-[400px] w-[400px] animate-float-slower rounded-full bg-gradient-to-tl from-morandi-blue/10 to-morandi-sage/8 blur-3xl [animation-delay:3s]" />
        <div className="absolute right-[30%] top-[15%] h-[300px] w-[300px] animate-float-slow rounded-full bg-gradient-to-br from-morandi-mauve/8 to-primary/5 blur-3xl [animation-delay:5s]" />
        <div className="absolute bottom-[25%] left-[25%] h-[250px] w-[250px] animate-float-slower rounded-full bg-gradient-to-tr from-morandi-sage/8 to-morandi-blue/6 blur-3xl [animation-delay:7s]" />
      </div>

      {/* ─── Main grid: 55 / 45 ─── */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 py-24 md:grid-cols-[1.22fr_1fr] md:gap-16 lg:gap-24">

        {/* ═══ LEFT: Text + decorative clouds ═══ */}
        <motion.div
          ref={leftRef}
          className="relative order-2 md:order-1"
          variants={stagger}
          initial="hidden"
          animate={phase === 'done' ? 'show' : 'hidden'}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
        >
          {/* Floating clouds — follow cursor gently */}
          {clouds.map((c, i) => (
            <motion.div
              key={i}
              className="pointer-events-none absolute hidden md:block"
              style={{
                left: c.x,
                top: c.y,
                width: c.w,
                height: c.h,
                x: springX,
                y: springY,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={phase === 'done' ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: c.delay, duration: 0.6 }}
            >
              {/* Cloud shape: overlapping rounded pills */}
              <div className="relative h-full w-full">
                <div
                  className="absolute bottom-0 left-[10%] rounded-full bg-primary/[0.06]"
                  style={{ width: c.w * 0.7, height: c.h * 0.7 }}
                />
                <div
                  className="absolute bottom-[15%] left-[28%] rounded-full bg-morandi-mauve/[0.05]"
                  style={{ width: c.w * 0.5, height: c.h * 0.8 }}
                />
                <div
                  className="absolute bottom-0 left-[5%] rounded-full bg-morandi-sand/[0.06]"
                  style={{ width: c.w * 0.9, height: c.h * 0.55 }}
                />
              </div>
            </motion.div>
          ))}

          {/* Hej :) — typewriter, light italic */}
          <div className="mb-2">
            <span className="text-fluid-hello font-display font-light italic text-text-primary">
              {helloText}
              {showCursor('hello')}
            </span>
          </div>

          {/* I'm Cassie Wei — bigger, semibold */}
          <div className="mb-6 min-h-[2.5rem]">
            {(phase === 'name' || phase === 'done') && (
              <span className="text-fluid-name font-display font-semibold text-text-primary">
                {nameText}
                {showCursor('name')}
              </span>
            )}
          </div>

          {/* Role — tag style with icon */}
          <motion.div variants={fadeLeft} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
              <HiTerminal className="text-sm text-primary" />
              <span className="text-fluid-role font-mono text-text-secondary">
                <TypingAnimation texts={resume.roles} />
              </span>
            </span>
          </motion.div>

          {/* Bio — lead line + short body */}
          <motion.div variants={fadeLeft} className="mb-6 space-y-2">
            <p className="text-sm font-medium text-text-primary md:text-[0.938rem]">
              {resume.aboutLead}
            </p>
            <p className="text-sm leading-[1.75] text-text-secondary md:text-[0.938rem]">
              {resume.aboutBody}
            </p>
          </motion.div>

          {/* Location */}
          <motion.div variants={fadeLeft} className="mb-8 flex items-center gap-1.5 text-sm text-text-secondary">
            <HiLocationMarker className="text-primary" />
            {resume.location}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={fadeLeft} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#E08585] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/30"
            >
              View Projects
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-morandi-sand bg-transparent px-7 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* ═══ RIGHT: Portrait + bubbles ═══ */}
        <motion.div
          className="relative order-1 flex items-center justify-center md:order-2"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
        >
          {/* Blob shapes behind photo */}
          <div className="absolute -right-8 -top-8 h-[80%] w-[80%] animate-float-slow rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-gradient-to-br from-primary/12 to-primary-light/8 blur-sm" />
          <div className="absolute -bottom-6 -left-6 h-[45%] w-[45%] animate-float-slower rounded-[60%_40%_45%_55%/45%_55%_40%_60%] bg-gradient-to-tr from-morandi-sage/15 to-morandi-blue/10 blur-sm [animation-delay:2s]" />
          <div className="absolute -right-4 bottom-[15%] h-[25%] w-[25%] animate-float-slow rounded-[45%_55%_60%_40%/55%_45%_40%_60%] bg-gradient-to-br from-morandi-mauve/12 to-primary/8 blur-sm [animation-delay:4s]" />

          {/* Photo — organic blob shape */}
          <div className="relative z-10 mx-auto w-60 md:w-72 lg:w-80">
            <div
              className="overflow-hidden shadow-2xl shadow-primary/10"
              style={{ borderRadius: '60% 40% 45% 55% / 55% 50% 50% 45%' }}
            >
              <img
                src="/portrait.png"
                alt={resume.name}
                className="h-auto w-full scale-105 object-cover"
                loading="eager"
                draggable={false}
              />
            </div>

            {/* Bubbles — wrapper floats, inner handles hover */}
            {bubbles.map((b) => (
              <div
                key={b.label}
                className={`absolute z-20 hidden md:block ${b.float}`}
                style={{ left: b.x, top: b.y, width: b.size, height: b.size }}
              >
                <motion.div
                  className="group relative flex h-full w-full items-center justify-center rounded-full transition-transform duration-300 ease-out hover:scale-110"
                  style={bubbleStyle(b.size, b.bg)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 16,
                    delay: 0.8 + b.delay,
                  }}
                >
                  {/* Hover overlay — deepens color */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={bubbleHoverOverlay(b.bg)}
                  />
                  <span
                    className="relative select-none text-[0.938rem] font-bold transition-transform duration-300 group-hover:scale-105"
                    style={{ color: b.color }}
                  >
                    {b.label}
                  </span>
                </motion.div>
              </div>
            ))}

            {/* Title sticker */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
              animate={phase === 'done' ? { opacity: 1, rotate: -4, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.6 }}
              className="absolute -bottom-5 -left-4 z-30 rounded-xl border border-white/50 bg-white/85 px-4 py-2.5 shadow-lg backdrop-blur-md md:-bottom-6 md:-left-8"
            >
              <p className="font-display text-sm font-semibold text-text-primary">{resume.title}</p>
              <p className="font-mono text-[0.688rem] text-morandi-blue">@ {resume.location.split(',')[0]}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={phase === 'done' ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <HiArrowDown className="animate-bounce-slow text-2xl" />
      </motion.a>
    </section>
  )
}
