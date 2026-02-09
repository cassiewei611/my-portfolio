import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TypingAnimationProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export default function TypingAnimation({
  texts,
  className,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[textIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={cn(className)}>
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  )
}
