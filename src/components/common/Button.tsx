import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'blue'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  icon?: string
  iconPosition?: 'left' | 'right'
  children: React.ReactNode
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-label-sm font-label-sm gap-1.5',
    md: 'px-5 py-2.5 text-label-md font-label-md gap-2',
    lg: 'px-7 py-3.5 text-label-lg font-label-lg gap-2.5',
  }[size]

  const variantClasses = {
    primary:
      'bg-primary-container text-on-surface hover:text-white font-semibold rounded shadow-sm relative overflow-hidden transition-all duration-300 group',
    secondary:
      'bg-secondary text-white hover:bg-secondary-alt font-semibold rounded shadow-sm relative overflow-hidden transition-all duration-300 group',
    blue:
      'bg-brand-blue text-white hover:bg-brand-blue-dark font-semibold rounded shadow-sm relative overflow-hidden transition-all duration-300 group',
    outline:
      'border-1.5 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold rounded transition-all duration-300 group',
    ghost:
      'text-secondary hover:bg-surface-container-high font-semibold rounded transition-all duration-300',
  }[variant]

  const content = (
    <>
      {/* Sliding fill background effect for primary and secondary buttons */}
      {(variant === 'primary' || variant === 'secondary' || variant === 'blue') && (
        <span
          className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-300 ease-out z-0 pointer-events-none ${
            variant === 'primary' ? 'bg-secondary' : 'bg-primary-container'
          }`}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === 'left' && (
          <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </>
  )

  const combinedClasses = `inline-flex items-center justify-center cursor-pointer select-none text-center active:scale-[0.98] ${sizeClasses} ${variantClasses} ${className}`

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {content}
      </a>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  )
}

