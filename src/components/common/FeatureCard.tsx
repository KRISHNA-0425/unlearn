import React from 'react'
import { Link } from 'react-router-dom'

interface FeatureCardProps {
  number?: string
  badge?: string
  title: string
  description: string
  icon?: string
  image?: string
  linkText?: string
  linkTo?: string
  className?: string
  theme?: 'white' | 'orange' | 'blue'
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  badge,
  title,
  description,
  icon,
  image,
  linkText = 'Explore Details',
  linkTo,
  className = '',
  theme = 'white',
}) => {
  const themeClasses = {
    white: 'bg-surface-container-lowest text-on-surface border border-outline-variant/30 hover:shadow-md',
    orange: 'bg-primary-container text-on-surface hover:shadow-md',
    blue: 'bg-secondary text-white hover:shadow-md',
  }[theme]

  return (
    <div
      className={`rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${themeClasses} ${className}`}
    >
      {image && (
        <div className="relative h-48 sm:h-52 overflow-hidden bg-surface-container-high">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary/90 text-white text-label-sm font-label-sm uppercase tracking-wider backdrop-blur-xs">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            {number && (
              <span className="text-label-sm font-label-sm font-bold tracking-widest text-primary opacity-80">
                {number}
              </span>
            )}
            {icon && !image && (
              <span className="material-symbols-outlined text-2xl text-secondary">{icon}</span>
            )}
            {badge && !image && (
              <span className="px-2.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed text-label-sm font-label-sm">
                {badge}
              </span>
            )}
          </div>

          <h3 className="font-headline-sm text-xl font-bold mb-2 tracking-tight">
            {title}
          </h3>
          <p className="font-body-md text-sm opacity-80 leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {linkTo && (
          <Link
            to={linkTo}
            className="inline-flex items-center gap-1.5 font-label-md text-sm font-bold tracking-wide text-primary hover:text-secondary group pt-2 border-t border-outline-variant/20"
          >
            <span>{linkText}</span>
            <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}

