import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '../../animations/gsap'

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'orange' | 'blue' | 'white' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  icon?: string
  children: React.ReactNode
  className?: string
  magnetic?: boolean
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'orange',
  size = 'md',
  to,
  href,
  icon = 'arrow_forward',
  children,
  className = '',
  magnetic = true,
  ...props
}) => {
  const btnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!magnetic || !btnRef.current) return
    const el = btnRef.current
    if (window.innerWidth < 1024) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: 'power2.out' })
    }

    const handleMouseLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [magnetic])

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }[size]

  const styles = {
    orange: 'bg-primary-container text-on-surface hover:text-white',
    blue: 'bg-secondary text-white hover:text-on-surface',
    white: 'bg-white text-secondary hover:text-white',
    outline: 'border border-secondary text-secondary hover:text-white',
  }[variant]

  const fillBg = {
    orange: 'bg-secondary',
    blue: 'bg-primary-container',
    white: 'bg-secondary',
    outline: 'bg-secondary',
  }[variant]

  const inner = (
    <div
      ref={btnRef}
      className={`relative inline-flex items-center justify-center font-label font-bold tracking-wider uppercase rounded transition-transform group overflow-hidden cursor-pointer shadow-sm select-none ${sizeClasses} ${styles} ${className}`}
    >
      {/* Animated sliding fill layer */}
      <span
        className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-300 ease-out z-0 pointer-events-none ${fillBg}`}
      />
      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        {icon && (
          <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </div>
  )

  if (to) {
    return <Link to={to}>{inner}</Link>
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  }

  return <button {...props}>{inner}</button>
}

