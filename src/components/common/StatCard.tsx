import React, { useRef, useEffect } from 'react'
import { gsap } from '../../animations/gsap'

interface StatCardProps {
  value: string
  label: string
  sublabel?: string
  icon?: string
  theme?: 'orange' | 'blue' | 'white' | 'dark'
  className?: string
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  sublabel,
  icon,
  theme = 'white',
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  const themeClasses = {
    white: 'bg-surface-container-lowest text-on-surface border border-outline-variant/30',
    orange: 'bg-primary-container text-on-surface border-none',
    blue: 'bg-secondary text-white border-none',
    dark: 'bg-on-surface text-surface border-none',
  }[theme]

  return (
    <div
      ref={cardRef}
      className={`p-space-md lg:p-space-lg rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-1 ${themeClasses} ${className}`}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        {icon && (
          <span className="material-symbols-outlined text-2xl opacity-80">{icon}</span>
        )}
      </div>
      <div className="font-display-hero text-4xl lg:text-5xl font-extrabold tracking-tight mb-1">
        {value}
      </div>
      <div className="font-headline-sm text-base lg:text-lg font-bold tracking-tight">
        {label}
      </div>
      {sublabel && (
        <div className="font-body-sm text-xs mt-1 opacity-75">
          {sublabel}
        </div>
      )}
    </div>
  )
}

