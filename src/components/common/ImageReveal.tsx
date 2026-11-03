import React, { useRef, useEffect } from 'react'
import { gsap } from '../../animations/gsap'

interface ImageRevealProps {
  src: string
  alt: string
  aspectRatio?: string
  className?: string
  parallax?: boolean
  caption?: string
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectRatio = 'aspect-[4/3]',
  className = '',
  parallax = false,
  caption,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const el = containerRef.current
    const img = imageRef.current
    if (!el || !img) return

    // Scroll reveal clip-path animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: 1.15, filter: 'blur(4px)' },
        {
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      if (parallax) {
        gsap.to(img, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }, el)

    return () => ctx.revert()
  }, [parallax])

  return (
    <figure className={`relative overflow-hidden rounded-lg group ${className}`}>
      <div ref={containerRef} className={`relative overflow-hidden bg-surface-container-high ${aspectRatio}`}>
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs font-label text-on-surface-variant italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

