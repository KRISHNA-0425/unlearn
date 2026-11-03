import React from 'react'

interface SectionDividerProps {
  className?: string
  symbol?: string
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  symbol = 'spa',
}) => {
  return (
    <div className={`flex items-center justify-center my-8 lg:my-12 ${className}`}>
      <div className="h-px bg-outline-variant/40 flex-1 max-w-xs" />
      <span className="material-symbols-outlined mx-4 text-primary text-xl opacity-60">
        {symbol}
      </span>
      <div className="h-px bg-outline-variant/40 flex-1 max-w-xs" />
    </div>
  )
}

