import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from '../../animations/gsap'

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation()
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)

    const overlay = overlayRef.current
    const content = contentRef.current

    if (!overlay || !content) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const tl = gsap.timeline()

    // Smooth page entrance
    tl.set(overlay, { scaleY: 1, transformOrigin: 'bottom' })
      .to(overlay, {
        scaleY: 0,
        duration: 0.5,
        ease: 'power3.inOut',
      })
      .fromTo(
        content,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      )

    return () => {
      tl.kill()
    }
  }, [location.pathname])

  return (
    <div className="relative w-full">
      {/* Orange overlay curtain */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-primary-container pointer-events-none origin-bottom scale-y-0"
        aria-hidden="true"
      />
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </div>
  )
}

