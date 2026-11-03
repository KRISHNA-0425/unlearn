import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_URL, FOOTER_LINKS } from '../../data/navigation'

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-surface-container-high border-t border-outline-variant/40 pt-16 pb-12 text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-outline-variant/30">
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center group focus:outline-none" aria-label="Project Unlearn Home">
              <img
                src={LOGO_URL}
                alt="Project Unlearn Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="sr-only">Project Unlearn</span>
            </Link>
            <p className="font-body-sm text-sm text-on-surface-variant max-w-sm leading-relaxed">
              An urgent grassroots social-impact initiative committed to unlearning societal orthodoxies, democratizing civic action, and building community solidarity from the ground up across India.
            </p>
            <div className="pt-2">
              <div className="text-xs font-label uppercase tracking-wider text-secondary font-bold mb-1">
                Regional Hubs
              </div>
              <p className="text-xs font-body text-on-surface-variant">
                {FOOTER_LINKS.contact.workingRegions}
              </p>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {FOOTER_LINKS.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-surface-container-lowest hover:bg-primary-container text-secondary flex items-center justify-center transition-colors shadow-2xs"
                  title={s.name}
                >
                  <span className="material-symbols-outlined text-lg">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Initiatives (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-label text-xs font-bold uppercase tracking-wider text-secondary">
              Initiatives & Programs
            </h4>
            <ul className="space-y-2 text-sm font-body text-on-surface-variant">
              {FOOTER_LINKS.initiatives.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-primary hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-label text-xs font-bold uppercase tracking-wider text-secondary">
              Organization
            </h4>
            <ul className="space-y-2 text-sm font-body text-on-surface-variant">
              {FOOTER_LINKS.organization.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-primary hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Change Journal Dispatch / Newsletter (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-label text-xs font-bold uppercase tracking-wider text-secondary">
              The Change Journal Dispatch
            </h4>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Receive weekly dispatches, educational guides, and verified reports directly from ongoing grassroots projects.
            </p>

            {subscribed ? (
              <div className="p-3 bg-primary-container/30 border border-primary-container rounded text-xs font-label text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                <span>Thank you! You are subscribed to dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 text-xs bg-surface-container-lowest border border-outline-variant/50 rounded focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-on-surface"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-secondary text-white text-xs font-label font-bold rounded hover:bg-secondary-alt transition-colors"
                  >
                    Join
                  </button>
                </div>
                <div className="text-[11px] text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  <span>Privacy guaranteed. Unsubscribe anytime.</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-on-surface-variant">
          <div>
            © {new Date().getFullYear()} Project Unlearn Foundation. Licensed under Creative Commons BY-NC 4.0.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-primary transition-colors">
              Financial Transparency
            </Link>
            <span>•</span>
            <Link to="/donate" className="hover:text-primary transition-colors">
              80G Tax Exemption
            </Link>
            <span>•</span>
            <span className="text-secondary font-semibold">
              New Delhi, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

