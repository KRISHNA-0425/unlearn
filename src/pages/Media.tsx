import React from 'react'
import { SectionHeading } from '../components/common/SectionHeading'
import { EyebrowLabel } from '../components/common/EyebrowLabel'
import { Button } from '../components/common/Button'
import { MEDIA_ITEMS } from '../data/media'

export const Media: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-fixed/40 via-surface to-surface pt-10 pb-16 lg:pb-20 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <EyebrowLabel variant="orange" icon="newspaper">
              Press & Discourse
            </EyebrowLabel>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08]">
              Project Unlearn in the<br />
              <span className="text-primary italic font-serif inline-block">Public Eye.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              External coverage, national features, interviews, and investigative reports exploring our grassroots methodologies in correctional facilities, community bastis, and state classrooms.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Button
                onClick={() => alert('Downloading official Project Unlearn Press Kit & Factsheet (PDF)...')}
                variant="primary"
                size="md"
                icon="download"
              >
                Download Official Press Kit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDIA_ITEMS.map((item) => (
              <article
                key={item.id}
                className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary/90 text-white text-[10px] font-label font-bold uppercase tracking-wider backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs font-label text-primary font-bold">
                      <span>{item.outlet}</span>
                      <span className="text-tertiary font-normal">{item.date}</span>
                    </div>

                    <h3 className="font-headline-sm text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="text-[11px] font-label text-tertiary">
                    {item.readTime}
                  </span>
                  <a
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault()
                      alert(`Opening external article from ${item.outlet}: "${item.title}"`)
                    }}
                    className="inline-flex items-center gap-1 text-xs font-label font-bold text-primary hover:text-secondary"
                  >
                    <span>Read Feature</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

