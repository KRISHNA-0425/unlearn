import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '../../animations/gsap'
import { LOGO_URL } from '../../data/navigation'

interface LoaderProps {
  onComplete?: () => void
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Check if reduced motion or already loaded in this session
    const hasLoaded = sessionStorage.getItem('project_unlearn_loaded')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (hasLoaded || prefersReducedMotion) {
      setVisible(false)
      if (onComplete) onComplete()
      return
    }

    const container = containerRef.current
    const letters = lettersRef.current?.querySelectorAll('.letter')
    const progress = progressBarRef.current
    const tagline = taglineRef.current

    if (!container || !progress) return

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('project_unlearn_loaded', 'true')
        setVisible(false)
        if (onComplete) onComplete()
      },
    })

    // Letter entrance stagger
    if (letters) {
      tl.fromTo(
        letters,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.04, ease: 'power3.out' }
      )
    }

    // Tagline fade
    if (tagline) {
      tl.fromTo(
        tagline,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      )
    }

    // Progress bar fill
    tl.to(progress, {
      width: '100%',
      duration: 0.8,
      ease: 'power2.inOut',
    })

    // Curtain reveal out
    tl.to(container, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 0.7,
      ease: 'power4.inOut',
      delay: 0.1,
    })

    return () => {
      tl.kill()
    }
  }, [onComplete])

  if (!visible) return null

  const word = "PROJECT UNLEARN"

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary-container px-6 select-none"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      <div className="flex flex-col items-center max-w-md w-full text-center">
        {/* Logo Icon */}
        <div className="w-16 h-16 mb-6 rounded-full bg-secondary flex items-center justify-center text-white shadow-md">
          <span className="material-symbols-outlined text-3xl">diversity_3</span>
        </div>

        {/* Wordmark with staggered letters */}
        <div ref={lettersRef} className="flex flex-wrap justify-center overflow-hidden mb-3">
          {word.split('').map((char, index) => (
            <span
              key={index}
              className={`letter font-headline-lg text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider ${
                char === ' ' ? 'w-4' : 'text-on-surface'
              }`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="font-label text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary mb-8"
        >
          Unlearning Today • Transforming Tomorrow
        </p>

        {/* Horizontal Progress Bar */}
        <div className="w-48 sm:w-64 h-1.5 bg-black/15 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-secondary rounded-full w-0"
          />
        </div>
      </div>
    </div>
  )
}

