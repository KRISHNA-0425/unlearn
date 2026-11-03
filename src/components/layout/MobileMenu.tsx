import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavItem, LOGO_URL } from '../../data/navigation'
import { Button } from '../common/Button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
}) => {
  const location = useLocation()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-surface-container-lowest shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 animate-slideInRight">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 mb-6">
            <Link to="/" onClick={onClose} className="flex items-center focus:outline-none" aria-label="Project Unlearn Home">
              <img src={LOGO_URL} alt="Project Unlearn" className="h-8 w-auto object-contain" />
              <span className="sr-only">Project Unlearn</span>
            </Link>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-surface-container-highest cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="py-1">
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={`block px-3 py-2 rounded-lg font-label text-base font-bold transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary-container text-on-surface'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  {item.label}
                </Link>

                {item.hasDropdown && (
                  <div className="ml-4 pl-3 border-l border-outline-variant/40 mt-1 space-y-1">
                    {item.dropdownItems?.map((drop) => (
                      <Link
                        key={drop.label}
                        to={drop.path}
                        onClick={onClose}
                        className="block py-1.5 px-2 text-xs font-label text-on-surface-variant hover:text-primary transition-colors"
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-outline-variant/30 space-y-3">
          <Button
            to="/donate"
            variant="primary"
            size="md"
            icon="volunteer_activism"
            className="w-full"
            onClick={onClose}
          >
            Donate to Project Unlearn
          </Button>
          <div className="text-center text-xs font-body text-on-surface-variant">
            Section 80G Tax Deductible Non-Profit
          </div>
        </div>
      </div>
    </div>
  )
}

