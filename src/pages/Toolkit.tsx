import React, { useState } from 'react'
import { SectionHeading } from '../components/common/SectionHeading'
import { EyebrowLabel } from '../components/common/EyebrowLabel'
import { Button } from '../components/common/Button'
import { TOOLKIT_DATA } from '../data/toolkit'

export const Toolkit: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<number>(1)
  const [downloadModal, setDownloadModal] = useState<string | null>(null)

  const currentTheme = TOOLKIT_DATA.themes.find((t) => t.themeNumber === activeTheme) || TOOLKIT_DATA.themes[0]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-fixed/40 via-surface to-surface pt-10 pb-16 lg:pb-24 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <EyebrowLabel variant="orange" icon="verified">
                {TOOLKIT_DATA.hero.eyebrow}
              </EyebrowLabel>

              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08]">
                The Pehal Toolkit:<br />
                <span className="text-primary italic font-serif inline-block">7 Themes • 20 Topics • 45+ Hours</span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                {TOOLKIT_DATA.hero.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button to="#curriculum" variant="primary" size="lg" icon="menu_book">
                  Explore 7-Theme Syllabus
                </Button>
                <Button to="#tools" variant="secondary" size="lg" icon="sports_esports">
                  View Interactive Games
                </Button>
              </div>

              {/* Kit Statistics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-outline-variant/30">
                {TOOLKIT_DATA.statisticsBanner.map((stat, i) => (
                  <div key={i} className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/30">
                    <div className="font-display-hero text-2xl font-extrabold text-primary">
                      {stat.value}
                    </div>
                    <div className="font-label text-xs font-bold text-on-surface">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-on-surface-variant line-clamp-1">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col (5 cols): Real Kit Image from Concept Note */}
            <div className="lg:col-span-5">
              <div className="bg-surface-container-low rounded-xl border border-outline-variant/40 p-6 lg:p-8 shadow-xl">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded bg-secondary text-white text-xs font-label font-bold uppercase tracking-wider">
                    {TOOLKIT_DATA.hero.boxKitVolume}
                  </span>
                  <span className="text-xs font-label text-primary font-bold">
                    Official Kit Box
                  </span>
                </div>

                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-surface-container-high group border border-outline-variant/30">
                  <img
                    src={TOOLKIT_DATA.hero.heroImage}
                    alt={TOOLKIT_DATA.hero.boxKitTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-2">
                  {TOOLKIT_DATA.hero.boxKitTitle}
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mb-4">
                  {TOOLKIT_DATA.hero.boxKitDescription}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-outline-variant/30 text-xs font-label text-secondary font-bold">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-sm">casino</span>
                    <span>Board & Card Games</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-sm">auto_stories</span>
                    <span>4 Comic Books</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency & Foundation */}
      <section className="py-16 lg:py-24 bg-surface border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Empirical Rationale"
            eyebrowIcon="report"
            title="Taboos breed silence."
            highlight="Silence breeds vulnerability."
            subtitle="Based on 3 years of baseline data from Tihar Prison Jail No. 5 with 300+ perpetrators of Crime Against Women."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {TOOLKIT_DATA.urgencyPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-4 hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-label font-bold text-primary">
                    {pillar.num} / {pillar.tag}
                  </span>
                  <span className="material-symbols-outlined text-2xl text-secondary">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                  {pillar.title}
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Research Quote */}
          <div className="p-8 lg:p-10 rounded-xl bg-surface-container-lowest border-l-4 border-primary-container shadow-sm">
            <blockquote className="font-headline-sm text-xl lg:text-2xl font-semibold text-on-surface leading-relaxed italic mb-4">
              "{TOOLKIT_DATA.quote.text}"
            </blockquote>
            <div className="font-label text-xs uppercase tracking-wider font-bold text-secondary">
              {TOOLKIT_DATA.quote.author} • {TOOLKIT_DATA.quote.role}
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Themes Covering 20 Topics (Complete Concept Note Syllabus) */}
      <section id="curriculum" className="py-16 lg:py-24 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Comprehensive Syllabus"
            eyebrowIcon="school"
            title="The 7 Themes Covering"
            highlight="20 Core Topics"
            subtitle="The complete modular scope designed to build a strong gender lens, deconstruct rape culture, and teach consent."
            className="mb-12"
          />

          {/* Theme selector tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {TOOLKIT_DATA.themes.map((t) => (
              <button
                key={t.themeNumber}
                onClick={() => setActiveTheme(t.themeNumber)}
                className={`p-3 rounded-lg text-left transition-all cursor-pointer flex flex-col justify-between border ${
                  activeTheme === t.themeNumber
                    ? 'bg-secondary text-white border-secondary shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface border-outline-variant/40 hover:bg-surface-container'
                }`}
              >
                <div className="text-[10px] font-label font-bold uppercase opacity-80 mb-1">
                  Theme 0{t.themeNumber}
                </div>
                <div className="font-headline text-xs font-bold line-clamp-2">
                  {t.themeTitle}
                </div>
              </button>
            ))}
          </div>

          {/* Active Theme Focus Card */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-8 lg:p-10 shadow-sm transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded bg-primary-container text-on-surface text-xs font-label font-bold uppercase tracking-wider">
                    Theme 0{currentTheme.themeNumber} of 07
                  </span>
                  <span className="text-xs font-label text-secondary font-bold">
                    {currentTheme.topics.length} In-Depth Modules
                  </span>
                </div>

                <h3 className="font-headline-sm text-2xl lg:text-3xl font-bold text-on-surface">
                  {currentTheme.themeTitle}
                </h3>

                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {currentTheme.description}
                </p>

                <div className="pt-4 space-y-3">
                  <div className="text-xs font-label uppercase tracking-wider text-secondary font-bold">
                    Topics Explored in this Theme:
                  </div>
                  <div className="space-y-2">
                    {currentTheme.topics.map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg border border-outline-variant/30"
                      >
                        <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-label font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="font-body-sm text-sm font-semibold text-on-surface">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-4">
                <span className="text-xs font-label uppercase tracking-wider text-primary font-bold">
                  Syllabus Context
                </span>
                <h4 className="font-headline-sm text-lg font-bold text-on-surface">
                  How This Module Operates in Prisons & Neighborhoods
                </h4>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  Every topic combines real-life incident analysis, role-play debriefs, and accessible vernacular vocabulary to ensure participants connect theoretical concepts to their daily neighborhood conduct.
                </p>
                <div className="pt-2">
                  <Button to="#tools" variant="primary" size="sm" icon="sports_esports">
                    See Games Used in This Theme
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Pehal Kit: The 5 Physical & Interactive Tools */}
      <section id="tools" className="py-16 lg:py-24 bg-surface border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Inside The Kit"
            eyebrowIcon="interests"
            title="A Look Inside The"
            highlight="Pehal Kit"
            subtitle="The concrete interactive elements co-designed with inmates and community facilitators to make unlearning engaging and memorable."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOOLKIT_DATA.tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-surface-container-high relative border-b border-outline-variant/30">
                    <img
                      src={tool.imageUrl}
                      alt={tool.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded bg-secondary text-white text-[11px] font-label font-bold uppercase tracking-wider backdrop-blur-xs">
                      {tool.badge}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs font-label text-primary font-bold uppercase tracking-wider">
                      {tool.type}
                    </div>
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {tool.title}
                    </h3>
                    <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/30 text-[11px] font-body text-secondary">
                    <strong>Pedagogical Purpose:</strong> {tool.pedagogicalFocus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section id="downloads" className="py-16 lg:py-24 bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open Access Repository"
            eyebrowIcon="download_done"
            title="Download Pehal"
            highlight="Curriculum Materials"
            subtitle="Request and download official Project Unlearn curriculum guidelines, comic collections, and game blueprints."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {TOOLKIT_DATA.downloads.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-primary-fixed text-on-primary-fixed text-xs font-label font-bold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-label text-tertiary">
                      {item.format}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setDownloadModal(item.title)}
                    className="w-full py-2.5 px-4 rounded bg-secondary text-white hover:bg-secondary-alt text-xs font-label font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">download</span>
                    <span>Download Resource Package</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Download Simulation Modal */}
          {downloadModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn"
              onClick={() => setDownloadModal(null)}
            >
              <div
                className="bg-surface-container-lowest p-8 rounded-xl max-w-md w-full shadow-2xl space-y-4 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-14 h-14 rounded-full bg-primary-container/30 text-primary mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">download_done</span>
                </div>
                <h3 className="font-headline-sm text-xl font-bold">
                  Resource Ready for Download
                </h3>
                <p className="text-xs font-body text-on-surface-variant leading-relaxed">
                  You are downloading: <strong>{downloadModal}</strong>.
                  Co-created by Project Unlearn for educational, primary prevention, and prison reformation programs.
                </p>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <Button
                    onClick={() => {
                      alert(`Initiated simulated download for: ${downloadModal}`)
                      setDownloadModal(null)
                    }}
                    variant="primary"
                    size="sm"
                    icon="check"
                  >
                    Start Download
                  </Button>
                  <Button
                    onClick={() => setDownloadModal(null)}
                    variant="outline"
                    size="sm"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
