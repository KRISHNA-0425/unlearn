import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LOGO_URL, NAV_ITEMS } from '../../data/navigation'
import { Button } from '../common/Button'
import { MobileMenu } from './MobileMenu'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false)
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-md shadow-[0_2px_12px_rgba(23,59,99,0.08)] border-b border-outline-variant/30 py-2.5'
            : 'bg-surface/90 backdrop-blur-sm py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center shrink-0 group focus:outline-none" aria-label="Project Unlearn Home">
            <img
              src={LOGO_URL}
              alt="Project Unlearn Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="sr-only">Project Unlearn</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`flex items-center gap-1 px-3 py-1.5 font-label-md text-sm rounded-lg transition-colors cursor-pointer ${
                        isActive(item.path)
                          ? 'text-on-surface bg-surface-container-high font-bold'
                          : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`material-symbols-outlined text-[16px] text-tertiary transition-transform duration-300 ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>

                    {/* Animated Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute left-0 top-full pt-1.5 w-64 z-50 animate-fadeIn">
                        <div className="bg-surface-container-lowest rounded-lg shadow-[0_8px_24px_rgba(23,59,99,0.12)] border border-outline-variant/30 p-2 space-y-1">
                          {item.dropdownItems?.map((drop) => (
                            <Link
                              key={drop.label}
                              to={drop.path}
                              className="block px-3 py-2 rounded text-left hover:bg-surface-container-low transition-colors group"
                            >
                              <div className="font-label-md text-xs font-bold text-on-surface group-hover:text-primary">
                                {drop.label}
                              </div>
                              {drop.description && (
                                <div className="font-body-sm text-[11px] text-on-surface-variant line-clamp-1">
                                  {drop.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-lg font-label-md text-sm transition-all relative ${
                    isActive(item.path)
                      ? 'text-on-surface bg-surface-container-high font-bold shadow-2xs'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              to="/donate"
              variant="primary"
              size="sm"
              icon="volunteer_activism"
              iconPosition="right"
              className="hidden sm:inline-flex"
            >
              Donate Now
            </Button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  )
}

