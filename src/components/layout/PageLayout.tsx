import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollProgress } from '../common/ScrollProgress'
import { PageTransition } from '../common/PageTransition'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 pt-20">
        <PageTransition>{children}</PageTransition>
      </main>

      <Footer />

      {/* Back to top floating button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-secondary text-white shadow-lg hover:bg-secondary-alt flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fadeIn"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-2xl">arrow_upward</span>
        </button>
      )}
    </div>
  )
}

