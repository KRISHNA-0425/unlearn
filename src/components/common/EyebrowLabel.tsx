import React from 'react'

interface EyebrowLabelProps {
  children: React.ReactNode
  variant?: 'orange' | 'blue' | 'white' | 'neutral'
  icon?: string
  dot?: boolean
  className?: string
}

export const EyebrowLabel: React.FC<EyebrowLabelProps> = ({
  children,
  variant = 'blue',
  icon,
  dot = false,
  className = '',
}) => {
  const variantStyles = {
    blue: 'bg-secondary text-surface',
    orange: 'bg-primary-container text-on-surface font-bold',
    white: 'bg-surface-container-lowest text-on-surface-variant shadow-xs',
    neutral: 'bg-surface-container-high text-on-surface',
  }[variant]

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-label-sm font-label-sm uppercase tracking-wider ${variantStyles} ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
      {icon && <span className="material-symbols-outlined text-[14px]">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}

