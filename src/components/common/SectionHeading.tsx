import React from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  eyebrowIcon?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  theme?: 'light' | 'dark'
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowIcon,
  title,
  highlight,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align]

  const isDark = theme === 'dark'

  return (
    <div className={`flex flex-col space-y-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-label-sm font-label-sm uppercase tracking-wider ${
            isDark ? 'bg-primary-container text-on-surface' : 'bg-secondary text-surface'
          }`}
        >
          {eyebrowIcon && <span className="material-symbols-outlined text-[14px]">{eyebrowIcon}</span>}
          <span>{eyebrow}</span>
        </span>
      )}
      <h2
        className={`font-headline-lg text-headline-lg font-bold tracking-tight max-w-3xl ${
          isDark ? 'text-white' : 'text-on-surface'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="text-primary italic font-serif inline-block">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`font-body-lg text-body-lg max-w-2xl ${
            isDark ? 'text-surface-dim' : 'text-on-surface-variant'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

