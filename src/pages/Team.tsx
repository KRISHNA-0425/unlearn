import React, { useState } from 'react'
import { SectionHeading } from '../components/common/SectionHeading'
import { EyebrowLabel } from '../components/common/EyebrowLabel'
import { TeamCard } from '../components/common/TeamCard'
import { TEAM_MEMBERS } from '../data/team'

export const Team: React.FC = () => {
  const [category, setCategory] = useState<string>('all')

  const filteredMembers =
    category === 'all'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.category === category)

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-fixed/40 via-surface to-surface pt-10 pb-16 lg:pb-20 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <EyebrowLabel variant="blue" icon="groups">
              Human-Centered Leadership
            </EyebrowLabel>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08]">
              The People Anchoring<br />
              <span className="text-primary italic font-serif inline-block">Every Conversation.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              We are community organizers, clinical psychologists, educators, and visual artists dedicated to cultivating trauma-informed, shame-free spaces for learning across India.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              {[
                { label: 'All Collective Members', val: 'all' },
                { label: 'Core Leadership', val: 'core' },
                { label: 'Lead Field Facilitators', val: 'facilitators' },
              ].map((tab) => (
                <button
                  key={tab.val}
                  onClick={() => setCategory(tab.val)}
                  className={`px-4 py-2 rounded-lg text-xs font-label font-bold transition-all cursor-pointer ${
                    category === tab.val
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

      {/* Directory Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

