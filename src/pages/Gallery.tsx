import React, { useState } from 'react'
import { SectionHeading } from '../components/common/SectionHeading'
import { EyebrowLabel } from '../components/common/EyebrowLabel'
import { Lightbox } from '../components/gallery/Lightbox'
import { GALLERY_IMAGES, GalleryImage } from '../data/gallery'

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all')
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null)

  const filteredImages =
    filter === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter)

  const openLightbox = (image: GalleryImage) => {
    const idx = GALLERY_IMAGES.findIndex((i) => i.id === image.id)
    setLightboxImageIndex(idx >= 0 ? idx : 0)
  }

  const closeLightbox = () => {
    setLightboxImageIndex(null)
  }

  const prevImage = () => {
    if (lightboxImageIndex === null) return
    setLightboxImageIndex((prev) =>
      prev! > 0 ? prev! - 1 : GALLERY_IMAGES.length - 1
    )
  }

  const nextImage = () => {
    if (lightboxImageIndex === null) return
    setLightboxImageIndex((prev) =>
      prev! < GALLERY_IMAGES.length - 1 ? prev! + 1 : 0
    )
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-fixed/40 via-surface to-surface pt-10 pb-16 lg:pb-20 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <EyebrowLabel variant="orange" icon="photo_library">
              Visual Field Documentation
            </EyebrowLabel>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08]">
              Moments of Truth,<br />
              <span className="text-primary italic font-serif inline-block">Captured on the Ground.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Unfiltered documentary frames from our participatory workshops, reading circles, and peer exchanges across government classrooms, basti centers, and correctional institutions in India.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              {[
                { label: 'All Photographs', val: 'all' },
                { label: 'Workshops & Circles', val: 'schools' },
                { label: 'Community Basti Life', val: 'community' },
                { label: 'Reformation & Leaders', val: 'correctional' },
                { label: 'Pehal Toolkit & Products', val: 'toolkit' },
              ].map((tab) => (
                <button
                  key={tab.val}
                  onClick={() => setFilter(tab.val)}
                  className={`px-4 py-2 rounded-lg text-xs font-label font-bold transition-all cursor-pointer ${
                    filter === tab.val
                      ? 'bg-secondary text-white shadow-xs'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image)}
                className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-high">
                    <img
                      src={image.image}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-white/90 text-secondary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg">
                        <span className="material-symbols-outlined text-2xl">fullscreen</span>
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary/90 text-white text-[10px] font-label uppercase font-bold tracking-wider backdrop-blur-xs">
                      {image.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-label text-primary font-bold">
                      <span>{image.location}</span>
                      <span>{image.date}</span>
                    </div>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                      {image.title}
                    </h3>
                    <p className="font-body-sm text-xs text-on-surface-variant line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-1 flex items-center justify-between text-xs font-label text-secondary font-bold border-t border-outline-variant/20">
                  <span>View High-Res Photo</span>
                  <span className="material-symbols-outlined text-base">zoom_in</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox component */}
      <Lightbox
        image={lightboxImageIndex !== null ? GALLERY_IMAGES[lightboxImageIndex] : null}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  )
}

