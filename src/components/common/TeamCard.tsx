import React, { useState } from 'react'
import { TeamMember } from '../../data/team'

interface TeamCardProps {
  member: TeamMember
  className?: string
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, className = '' }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-high group">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-2 left-2 right-2">
            <span className="inline-block px-2.5 py-1 rounded bg-secondary/90 text-white text-xs font-label font-semibold backdrop-blur-xs">
              {member.tagline}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="text-xs font-label font-bold text-primary uppercase tracking-wider mb-1">
            {member.role}
          </div>
          <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-2">
            {member.name}
          </h3>
          <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
            {member.bio}
          </p>

          {expanded && (
            <div className="mt-3 pt-3 border-t border-outline-variant/30 text-xs font-body text-on-surface-variant space-y-2 animate-fadeIn">
              <p>{member.extendedBio}</p>
              <div className="font-label font-semibold text-secondary">
                Focus: {member.focusArea}
              </div>
              <div className="text-tertiary">
                Languages: {member.languages}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-5 pb-5 pt-0">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-label font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>{expanded ? 'Show Less' : 'View Full Bio'}</span>
          <span
            className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${
              expanded ? 'rotate-180' : ''
            }`}
          >
            expand_more
          </span>
        </button>
      </div>
    </div>
  )
}

