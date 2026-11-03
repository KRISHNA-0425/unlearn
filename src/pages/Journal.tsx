import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/common/SectionHeading'
import { EyebrowLabel } from '../components/common/EyebrowLabel'
import { JOURNAL_ARTICLES, JournalArticle } from '../data/journal'

export const Journal: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const featured = JOURNAL_ARTICLES.find((a) => a.featured) || JOURNAL_ARTICLES[0]
  const otherArticles = JOURNAL_ARTICLES.filter((a) => a.slug !== featured.slug)

  const categories = [
    { label: 'All Essays & Dispatches', val: 'all' },
    { label: 'Pedagogy & Education', val: 'Pedagogy & Education' },
    { label: 'Rehabilitation & Justice', val: 'Rehabilitation & Justice' },
    { label: 'Field Research', val: 'Field Research' },
  ]

  const filteredArticles =
    activeCategory === 'all'
      ? otherArticles
      : otherArticles.filter((a) => a.category === activeCategory)

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-fixed/40 via-surface to-surface pt-10 pb-16 lg:pb-20 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <EyebrowLabel variant="blue" icon="auto_stories">
              Grassroots Monograph & Field Essays
            </EyebrowLabel>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08]">
              The Change Journal:<br />
              <span className="text-primary italic font-serif inline-block">Dispatches from the Field.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Critical essays, pedagogical frameworks, and first-person observations on unlearning societal taboos from our educators and researchers.
            </p>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              {categories.map((c) => (
                <button
                  key={c.val}
                  onClick={() => setActiveCategory(c.val)}
                  className={`px-4 py-2 rounded-lg text-xs font-label font-bold transition-all cursor-pointer ${
                    activeCategory === c.val
                      ? 'bg-secondary text-white shadow-xs'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Banner */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-container-low rounded-2xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-10">
              <div className="lg:col-span-6 aspect-[16/10] rounded-xl overflow-hidden bg-surface-container-high">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-0.5 rounded bg-primary text-white text-xs font-label font-bold uppercase tracking-wider">
                    Featured Dispatch
                  </span>
                  <span className="text-xs font-label text-secondary font-bold">
                    {featured.category}
                  </span>
                </div>

                <h2 className="font-headline-sm text-2xl lg:text-3xl font-bold text-on-surface hover:text-primary transition-colors">
                  <Link to={`/journal/${featured.slug}`}>{featured.title}</Link>
                </h2>

                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {featured.excerpt}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-surface"
                  />
                  <div>
                    <div className="font-label text-xs font-bold text-on-surface">
                      {featured.author.name}
                    </div>
                    <div className="font-body text-[11px] text-on-surface-variant">
                      {featured.date} • {featured.readTime}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/journal/${featured.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary-container text-on-surface hover:text-white hover:bg-secondary text-xs font-label font-bold uppercase tracking-wider transition-colors shadow-2xs"
                  >
                    <span>Read Complete Dispatch</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Articles Grid */}
      <section className="py-12 lg:py-16 bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recent Writings"
            title="Field Notes &"
            highlight="Perspectives"
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary/90 text-white text-[10px] font-label font-bold uppercase tracking-wider backdrop-blur-xs">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      <Link to={`/journal/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <div className="text-[11px] font-label font-bold text-on-surface">
                      {article.author.name}
                    </div>
                  </div>
                  <span className="text-[11px] font-label text-tertiary">
                    {article.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

