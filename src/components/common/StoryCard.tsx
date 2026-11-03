import React from 'react'
import { Link } from 'react-router-dom'
import { CaseStory } from '../../data/stories'

interface StoryCardProps {
  story: CaseStory
  className?: string
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, className = '' }) => {
  return (
    <article
      className={`bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${className}`}
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
          <img
            src={story.image}
            alt={story.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary/90 text-white text-xs font-label uppercase tracking-wider backdrop-blur-xs">
            {story.theme}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-label text-primary font-bold mb-2">
            <span>{story.location}</span>
            <span>•</span>
            <span>{story.role}</span>
          </div>

          <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
            {story.title}
          </h3>

          <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed mb-4">
            {story.excerpt}
          </p>

          <blockquote className="border-l-2 border-primary-container pl-3 py-1 font-body-sm text-xs italic text-secondary bg-surface-container-low/50 rounded-r">
            "{story.quote}"
          </blockquote>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/our-work#${story.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-label font-bold text-primary group-hover:text-secondary uppercase tracking-wider transition-colors"
        >
          <span>Read Full Journey</span>
          <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </Link>
      </div>
    </article>
  )
}

