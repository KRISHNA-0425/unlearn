import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { ScrollTrigger } from '../animations/gsap'

export function useSmoothScroll() {
  const scrollRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    // Check for reduced motion preference or small mobile devices
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768

    if (prefersReducedMotion || isMobile) {
      // Use native scrolling for reduced motion or mobile
      return
    }

    try {
      scrollRef.current = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.1,
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 1.0,
        },
      })

      // Sync with GSAP ScrollTrigger
      const handleScroll = () => {
        ScrollTrigger.update()
      }

      window.addEventListener('scroll', handleScroll, { passive: true })

      // Handle resize & layout changes
      const handleResize = () => {
        ScrollTrigger.refresh()
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
        if (scrollRef.current) {
          scrollRef.current.destroy()
          scrollRef.current = null
        }
      }
    } catch (err) {
      console.warn('Locomotive scroll fallback:', err)
    }
  }, [])

  return scrollRef
}

