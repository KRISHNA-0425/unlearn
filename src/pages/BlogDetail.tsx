import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { JOURNAL_ARTICLES } from '../data/journal'
import { Button } from '../components/common/Button'

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    return <Navigate to="/journal" replace />
  }

  return (
    <article className="w-full bg-surface pb-20">
      {/* Header & Meta */}
      <section className="bg-gradient-to-b from-primary-fixed/40 via-surface to-surface pt-10 pb-12 border-b border-outline-variant/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/journal"
            className="inline-flex items-center gap-1.5 text-xs font-label font-bold text-secondary hover:text-primary mb-6 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back to The Change Journal</span>
          </Link>

          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded bg-secondary text-white text-xs font-label uppercase font-bold tracking-wider">
              {article.category}
            </span>

            <h1 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
              {article.subtitle}
            </p>

            {/* Author bar */}
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-outline-variant/30">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-surface shadow-2xs"
                />
                <div>
                  <div className="font-label text-sm font-bold text-on-surface">
                    {article.author.name}
                  </div>
                  <div className="font-body text-xs text-on-surface-variant">
                    {article.author.role}
                  </div>
                </div>
              </div>

              <div className="text-right text-xs font-label text-tertiary">
                <div>{article.date}</div>
                <div className="font-semibold text-secondary">{article.readTime}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-surface-container-high border border-outline-variant/30">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Prose Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        {article.content.map((block, idx) => {
          if (block.type === 'paragraph') {
            return (
              <p
                key={idx}
                className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed"
              >
                {block.text}
              </p>
            )
          }
          if (block.type === 'heading') {
            return (
              <h2
                key={idx}
                className="font-headline-sm text-2xl sm:text-3xl font-bold text-on-surface pt-6 pb-2"
              >
                {block.text}
              </h2>
            )
          }
          if (block.type === 'quote') {
            return (
              <div
                key={idx}
                className="my-8 p-6 lg:p-8 bg-surface-container-low rounded-xl border-l-4 border-primary shadow-xs"
              >
                <blockquote className="font-headline-sm text-lg sm:text-xl font-semibold text-on-surface italic leading-relaxed mb-2">
                  "{block.text}"
                </blockquote>
                {block.attribution && (
                  <div className="text-xs font-label uppercase font-bold text-secondary">
                    — {block.attribution}
                  </div>
                )}
              </div>
            )
          }
          return null
        })}

        {/* Tags */}
        <div className="pt-8 border-t border-outline-variant/30 flex flex-wrap items-center gap-2">
          <span className="text-xs font-label font-bold text-secondary mr-2">Tags:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded bg-surface-container-high text-xs font-label font-semibold text-on-surface"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA to explore toolkit */}
        <div className="my-12 p-8 bg-primary-container/20 rounded-2xl border border-primary-container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-headline-sm text-xl font-bold text-on-surface">
              Bring Pehal To Your Classroom
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant">
              Download our open-source comic modules and facilitator dialogue prompt deck.
            </p>
          </div>
          <Button to="/pehal-toolkit" variant="primary" size="md" icon="download">
            Explore Toolkit
          </Button>
        </div>
      </div>
    </article>
  )
}

