import React, { useEffect } from 'react'
import { GalleryImage } from '../../data/gallery'

interface LightboxProps {
  image: GalleryImage | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export const Lightbox: React.FC<LightboxProps> = ({
  image,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (!image) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [image, onClose, onPrev, onNext])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div
        className="absolute top-4 right-4 flex items-center gap-3 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          title="Close (Esc)"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer z-10"
        title="Previous (Left arrow)"
      >
        <span className="material-symbols-outlined text-3xl">chevron_left</span>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer z-10"
        title="Next (Right arrow)"
      >
        <span className="material-symbols-outlined text-3xl">chevron_right</span>
      </button>

      {/* Content wrapper */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center bg-surface-container-lowest/5 rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.image}
          alt={image.title}
          className="max-h-[70vh] w-auto object-contain rounded"
        />
        <div className="w-full p-4 bg-black/60 text-white text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-label text-primary-fixed-dim uppercase tracking-wider mb-1">
            <span>{image.location}</span>
            <span>•</span>
            <span>{image.date}</span>
          </div>
          <h3 className="font-headline-sm text-lg md:text-xl font-bold mb-1">
            {image.title}
          </h3>
          <p className="font-body-sm text-xs md:text-sm text-gray-300 max-w-2xl mx-auto">
            {image.description}
          </p>
        </div>
      </div>
    </div>
  )
}

