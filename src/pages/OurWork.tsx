import React, { useState } from 'react'
import { SectionHeading } from '../components/common/SectionHeading'
import { EyebrowLabel } from '../components/common/EyebrowLabel'
import { Button } from '../components/common/Button'
import { StoryCard } from '../components/common/StoryCard'
import { PROJECTS, CASE_STORIES, YOUTUBE_VIDEO, CONCEPT_STATISTICS } from '../data/stories'

export const OurWork: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-fixed/40 via-surface to-surface pt-10 pb-16 lg:pb-24 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <EyebrowLabel variant="blue" icon="gavel">
                Two-Pronged Intervention
              </EyebrowLabel>
              <EyebrowLabel variant="orange" icon="sync_alt">
                Reformation + Prevention
              </EyebrowLabel>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08]">
              Where Reformation Meets<br />
              <span className="text-primary italic font-serif inline-block">Primary Prevention.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              By involving boys and young men in high-crime neighborhoods in Delhi/NCR and correctional institutions like Tihar Prisons, Project Unlearn addresses both rehabilitation and prevention to deter crime against women and establish gender justice.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={() => setVideoOpen(true)}
                variant="primary"
                size="lg"
                icon="smart_display"
              >
                Watch Unlearn Documentary
              </Button>
              <Button to="#models" variant="outline" size="lg" icon="explore">
                Explore The Models
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Data Grid from Concept Note Page 5 */}
      <section className="py-16 bg-surface border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Data We Confront"
            eyebrowIcon="analytics"
            title="The Problem Statement: By"
            highlight="The Numbers"
            subtitle="Verified national records and findings from our 3-year baseline research with 300+ inmates in Tihar Jail No. 5."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONCEPT_STATISTICS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-2 hover:border-secondary transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="font-display-hero text-4xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <span className="text-[10px] font-label font-bold px-2 py-0.5 rounded bg-secondary text-white uppercase">
                    {stat.source}
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface">
                  {stat.label}
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured YouTube Video Highlight Section */}
      <section className="py-16 lg:py-20 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-10">
              <div
                className="lg:col-span-7 relative aspect-video rounded-xl overflow-hidden bg-black group cursor-pointer"
                onClick={() => setVideoOpen(true)}
              >
                <img
                  src={YOUTUBE_VIDEO.thumbnail}
                  alt={YOUTUBE_VIDEO.title}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary-container text-on-surface flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-black/75 text-white text-xs font-label">
                  Watch Official Mini-Documentary
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-label uppercase tracking-widest text-primary font-bold">
                  Official Mini-Documentary
                </span>
                <h3 className="font-headline-sm text-2xl lg:text-3xl font-bold text-on-surface">
                  {YOUTUBE_VIDEO.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {YOUTUBE_VIDEO.description}
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => setVideoOpen(true)}
                    variant="primary"
                    size="sm"
                    icon="play_circle"
                  >
                    Open Full Player
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 md:p-8 animate-fadeIn"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <iframe
              src={`${YOUTUBE_VIDEO.embedUrl}?autoplay=1`}
              title={YOUTUBE_VIDEO.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* The Two-Pronged Intervention & Ripple Effect (Concept Note Page 5 & 6) */}
      <section id="models" className="py-16 lg:py-24 bg-surface border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Two-Pronged Architecture"
            eyebrowIcon="schema"
            title="Reformation, Prevention &"
            highlight="The Ripple Effect"
            subtitle="How our interconnected intervention model breaks the cycle of recidivism and cultivates new community role models."
            className="mb-14"
          />

          <div className="space-y-12">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                id={project.id}
                className="bg-surface-container-low rounded-2xl border border-outline-variant/40 overflow-hidden shadow-sm"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-10`}
                >
                  <div className="lg:col-span-5 aspect-[16/11] rounded-xl overflow-hidden bg-surface-container-high shadow-md border border-outline-variant/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded bg-secondary text-white text-xs font-label uppercase font-bold tracking-wider">
                        {project.badge}
                      </span>
                      <span className="text-xs font-label text-primary font-bold">
                        {project.impactMetrics}
                      </span>
                    </div>

                    <h3 className="font-headline-sm text-2xl lg:text-3xl font-bold text-on-surface">
                      {project.title}
                    </h3>

                    <div className="text-sm font-label font-semibold text-secondary">
                      Location: {project.location}
                    </div>

                    <p className="font-body-md text-on-surface-variant leading-relaxed">
                      {project.description}
                    </p>

                    <p className="font-body-sm text-sm text-on-surface-variant/90 leading-relaxed border-t border-outline-variant/30 pt-3">
                      {project.fullStory}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring & Evaluation Section from Concept Note Page 6 & 7 */}
      <section id="evaluation" className="py-16 lg:py-24 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Rigorous Research"
            eyebrowIcon="fact_check"
            title="Monitoring, Evaluation &"
            highlight="Impact Validation"
            subtitle="Using globally validated tools to measure attitudinal shifts and long-term behavioral change."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-surface-container-lowest rounded-xl border-t-4 border-primary shadow-sm space-y-4">
              <div className="w-12 h-12 rounded bg-primary-container/30 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">scale</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                Gender Equitable Men (GEM) Scale
              </h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Project Unlearn uses the Gender Equitable Men (GEM) Scale, a globally recognized psychometric tool, to assess shifts in attitudes and behaviors of inmates and young men in high-crime neighborhoods.
              </p>
              <ul className="text-xs font-label text-secondary space-y-2 pt-2 border-t border-outline-variant/30">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  <span>Tracks perceptions around gender roles, masculinity, and consent</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  <span>Baseline (pre-intervention) vs Endline (post-intervention) assessments</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-surface-container-lowest rounded-xl border-t-4 border-secondary shadow-sm space-y-4">
              <div className="w-12 h-12 rounded bg-secondary/15 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">compare_arrows</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                Counter Factual Impact Evaluation
              </h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Comparing outcomes of participants (treated groups) benefited from the Pehal intervention/fellowship with controlled groups from the exact same socioeconomic neighborhoods who have not been exposed.
              </p>
              <ul className="text-xs font-label text-secondary space-y-2 pt-2 border-t border-outline-variant/30">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  <span>Sample group of ex-inmates and community youth beneficiaries</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  <span>Measures long-term recidivism reduction and upstander behavior</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Stories Directory */}
      <section id="case-stories" className="py-16 lg:py-24 bg-surface border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Consented Field Accounts"
            eyebrowIcon="auto_stories"
            title="Voices of"
            highlight="Transformation"
            subtitle="Real experiences of former inmates, youth upstanders, and community mothers who broke cycles of silence."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STORIES.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Inquiry Form */}
      <section id="invite" className="py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-2xl border border-outline-variant/40 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <EyebrowLabel variant="orange" icon="mail">
                Direct Contact
              </EyebrowLabel>
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface">
                Initiate a Partnership or Workshop
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant max-w-xl mx-auto">
                Reach out to our leadership team for correctional facility modules, school workshops, or community circles.
              </p>
              <div className="flex justify-center items-center gap-6 text-xs font-label text-secondary font-bold pt-2">
                <span>Email: projectunlearn20@gmail.com</span>
                <span>•</span>
                <span>Phone: +91 8527571446</span>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you! Your institutional inquiry has been submitted to projectunlearn20@gmail.com. We will respond within 48 hours.')
              }}
              className="space-y-4 pt-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label font-bold text-on-surface mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Anita Roy"
                    className="w-full px-3 py-2.5 text-sm bg-white border border-outline-variant rounded focus:outline-none focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-label font-bold text-on-surface mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="anita@institution.org"
                    className="w-full px-3 py-2.5 text-sm bg-white border border-outline-variant rounded focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label font-bold text-on-surface mb-1">
                    Organization / Prison / School *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Correctional Facility / Community Center"
                    className="w-full px-3 py-2.5 text-sm bg-white border border-outline-variant rounded focus:outline-none focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-label font-bold text-on-surface mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2.5 text-sm bg-white border border-outline-variant rounded focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-label font-bold text-on-surface mb-1">
                  Intervention of Interest
                </label>
                <select className="w-full px-3 py-2.5 text-sm bg-white border border-outline-variant rounded focus:outline-none focus:border-secondary">
                  <option>Prison Reformation Program (Mandatory Inmate Sessions)</option>
                  <option>Community Primary Prevention Circle (High-Crime Neighborhoods)</option>
                  <option>Pehal Toolkit TOT Module Certification (45+ Hours)</option>
                  <option>Academic or Research Collaboration (GEM Scale / M&E)</option>
                </select>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="lg" icon="send" className="w-full">
                  Send Partnership Inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
