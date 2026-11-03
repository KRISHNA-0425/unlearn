import React from 'react'

interface QuoteCardProps {
  quote: string
  author: string
  role?: string
  location?: string
  variant?: 'light' | 'orange' | 'blue'
  className?: string
}

export const QuoteCard: React.FC<QuoteCardProps> = ({
  quote,
  author,
  role,
  location,
  variant = 'light',
  className = '',
}) => {
  const styles = {
    light: 'bg-surface-container-lowest text-on-surface border-l-4 border-primary-container shadow-sm',
    orange: 'bg-primary-container text-on-surface border-l-4 border-secondary shadow-sm',
    blue: 'bg-secondary text-white border-l-4 border-primary-fixed-dim shadow-md',
  }[variant]

  return (
    <div className={`p-6 lg:p-8 rounded-r-lg ${styles} ${className}`}>
      <span className="material-symbols-outlined text-3xl mb-3 opacity-60">format_quote</span>
      <blockquote className="font-headline-sm text-lg lg:text-xl font-medium leading-relaxed italic mb-4">
        "{quote}"
      </blockquote>
      <div className="font-label-md text-sm font-bold tracking-wide">
        {author}
      </div>
      {(role || location) && (
        <div className="font-body-sm text-xs opacity-80 mt-0.5">
          {role} {location && `• ${location}`}
        </div>
      )}
    </div>
  )
}

