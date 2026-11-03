import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { SectionHeading } from '../components/common/SectionHeading'
import { EyebrowLabel } from '../components/common/EyebrowLabel'
import { StatCard } from '../components/common/StatCard'
import { QuoteCard } from '../components/common/QuoteCard'
import { FeatureCard } from '../components/common/FeatureCard'
import { gsap } from '../animations/gsap'
import { CONCEPT_STATISTICS, CASE_STORIES } from '../data/stories'

const DISPATCHES = [
  {
    num: "Dispatch 01 • Primary Prevention Mandate",
    quote: "With 86 rapes reported every day in India, legal punishment alone is insufficient. We must stop violence before it occurs.",
    context: "Engaging boys and men in 45+ hours of structured workshops on consent, toxic masculinity, and gender justice.",
    linkText: "Explore Primary Prevention",
    linkTo: "/about#mission-vision"
  },
  {
    num: "Dispatch 02 • Tihar Prison Reformation",
    quote: "8 years of intensive interactions with 300+ incarcerated young men charged under Crime Against Women in Jail No. 5.",
    context: "Co-creating the Pehal Kit with inmates to dismantle negative gender socializations and rape culture.",
    linkText: "Read The Prison Model",
    linkTo: "/our-work#prison-model"
  },
  {
    num: "Dispatch 03 • The Ripple Effect",
    quote: "Reformed ex-inmates return to high-crime neighborhoods as certified Unlearn Leaders and credible ambassadors.",
    context: "Addressing gendered urban public spaces where 76% of offenses occurred within 4 km of residence.",
    linkText: "Explore Community Model",
    linkTo: "/our-work#community-model"
  }
]

export const Home: React.FC = () => {
  const [currentDispatch, setCurrentDispatch] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        y: -15,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.hero-headline', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.from('.hero-p', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.35,
        ease: 'power3.out',
      })

      gsap.from('.hero-cta', {
        y: 15,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, el)

    return () => ctx.revert()
  }, [])

  const nextDispatch = () => {
    setCurrentDispatch((prev) => (prev + 1) % DISPATCHES.length)
  }

  const prevDispatch = () => {
    setCurrentDispatch((prev) => (prev - 1 + DISPATCHES.length) % DISPATCHES.length)
  }

  const tiharStory = CASE_STORIES[0]

  return (
    <div className="w-full">
      {/* 5.1 Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-8 pb-16 lg:pb-24 border-b border-outline-variant/30 bg-surface"
      >
        {/* Real Field Workshop Background Image with Fitting Editorial Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/curated/850_4050.jpg"
            alt="Project Unlearn Workshop Circle in Motilal Nehru Camp"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Multi-layered gradient overlay: Guarantees 100% text readability while keeping the authentic field photo clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/92 to-surface/45 lg:from-surface lg:via-surface/85 lg:to-surface/35 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-fixed/25 via-transparent to-surface" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="hero-badge inline-flex items-center gap-1.5 px-3 py-1 rounded bg-secondary text-surface text-label-sm font-label-sm uppercase tracking-wider shadow-2xs">
                  <span className="material-symbols-outlined text-xs">gavel</span>
                  Gender Safety & Justice
                </span>
                <span className="hero-badge inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container-lowest text-on-surface-variant text-label-sm font-label-sm uppercase tracking-wider shadow-2xs border border-outline-variant/30">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  8 Years of Fieldwork (2017 – 2025)
                </span>
              </div>

              <h1 className="hero-headline font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08] max-w-2xl">
                Unlearning Today.<br />
                <span className="text-primary italic font-serif inline-block">Transforming</span> Tomorrow.
              </h1>

              <p className="hero-p font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Reducing violence and crime against women by educating young boys and men about consent, toxic masculinity, and gender equality in communities, juvenile homes, and prisons across India.
              </p>

              <div className="hero-cta flex flex-wrap items-center gap-4 pt-2">
                <Button
                  to="/our-work"
                  variant="primary"
                  size="lg"
                  icon="arrow_forward"
                >
                  Explore Our Work
                </Button>
                <Button
                  to="/donate"
                  variant="secondary"
                  size="lg"
                  icon="volunteer_activism"
                >
                  Support Our Mission
                </Button>
              </div>

              {/* Verified Baseline Stat Badge */}
              <div className="hero-cta flex items-center gap-4 pt-4 border-t border-outline-variant/40 w-full max-w-md">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-2xl">verified</span>
                </div>
                <div>
                  <div className="font-label-md text-xs font-bold text-on-surface">
                    300+ Incarcerated Young Men Engaged
                  </div>
                  <div className="font-body-sm text-[11px] text-on-surface-variant">
                    Pioneering reformation in Jail No. 5, Tihar Prisons & high-crime hubs
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 Cols): The Pehal Kit Photo from Real DSLR Product Shoot */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-surface-container-low group border border-outline-variant/40">
                <img
                  src="/assets/curated/mg_7287.jpg"
                  alt="Pehal Educational Tool Kit box and games"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Editorial Story Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 bg-surface-container-lowest/95 backdrop-blur-md rounded-lg shadow-lg border border-white/40">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-label-sm text-[11px] text-primary uppercase font-bold tracking-wider block mb-1">
                        Pioneering Tool Kit • 7 Themes & 20 Topics
                      </span>
                      <p className="font-headline-sm text-sm sm:text-base text-on-surface font-bold leading-snug">
                        "Consent, healthy masculinity, and legal safety gamified for young men."
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded bg-primary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-xl">casino</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.2 Featured Grassroots Dispatch Stream */}
      <section className="bg-surface-container-low py-6 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-secondary">
                Concept Note Dispatch Stream
              </span>
            </div>
            {/* Carousel navigation controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={prevDispatch}
                className="w-8 h-8 rounded bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Dispatch"
              >
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <div className="flex items-center gap-1.5 px-2">
                {DISPATCHES.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentDispatch(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      currentDispatch === i ? 'w-6 bg-primary' : 'w-2 bg-surface-container-high'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextDispatch}
                className="w-8 h-8 rounded bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Dispatch"
              >
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Active Dispatch Content */}
          <div className="py-2 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-9">
                <span className="font-label-sm text-xs text-primary font-bold">
                  {DISPATCHES[currentDispatch].num}
                </span>
                <blockquote className="font-headline-md text-base sm:text-lg md:text-xl font-bold text-on-surface mt-1 leading-snug">
                  "{DISPATCHES[currentDispatch].quote}"
                </blockquote>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                  {DISPATCHES[currentDispatch].context}
                </p>
              </div>
              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <Link
                  to={DISPATCHES[currentDispatch].linkTo}
                  className="inline-flex items-center gap-1 text-xs font-label-md font-bold text-primary hover:text-secondary group"
                >
                  <span>{DISPATCHES[currentDispatch].linkText}</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 Problem Statement & Why We Need to Unlearn */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Empirical Reality"
            eyebrowIcon="analytics"
            title="Why We Need to"
            highlight="Unlearn."
            subtitle="Groundbreaking research from Tihar Prison Jail No. 5 and national records reveal that gender-based violence is deeply rooted in socialized entitlement and unaddressed male upbringing."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {CONCEPT_STATISTICS.slice(0, 3).map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-2 hover:border-secondary transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="font-display-hero text-4xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <span className="text-[10px] font-label font-bold px-2 py-0.5 rounded bg-surface-container-highest text-secondary uppercase">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (5 Cols) with Authentic Workshop Dialogue Circle Photo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-surface-container-high border border-outline-variant/40 group">
                <img
                  src="/assets/curated/850_4046.jpg"
                  alt="Adolescent boys in an Unlearn workshop dialogue circle"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-black/70 text-white text-[11px] font-label">
                  Motilal Nehru Camp • Youth Dialogue
                </div>
              </div>

              <QuoteCard
                quote="In order to reduce Crime Against Women, it is crucial to build a strong gender lens of boys and young men through 45+ hours of dialogue."
                author="Project Unlearn Research Team"
                role="Jail No. 5 Tihar Prison Study (300+ Inmates)"
                location="New Delhi"
                variant="light"
              />
            </div>

            {/* Right Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface">
                Primary Prevention: Stopping Violence Before It Starts
              </h3>

              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Despite the existence of strict laws, implementation remains uneven and over 98% of cases go unreported. Project Unlearn tackles the root cause by engaging boys and young men in at-risk neighborhoods and correctional facilities to shift attitudes before offenses happen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/30 space-y-2">
                  <div className="font-label text-xs font-bold text-primary uppercase tracking-wider">
                    01 / Prison Reformation
                  </div>
                  <h4 className="font-headline-sm text-base font-bold text-on-surface">
                    Rehabilitating Perpetrators
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    Contextual education for inmates accused of crimes against women, addressing toxic masculinity and 25% recidivism.
                  </p>
                </div>

                <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/30 space-y-2">
                  <div className="font-label text-xs font-bold text-primary uppercase tracking-wider">
                    02 / Community Leadership
                  </div>
                  <h4 className="font-headline-sm text-base font-bold text-on-surface">
                    The Ripple Effect
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                    Trained ex-inmates and local youth act as credible Unlearn Leaders, transforming gendered street culture into safe spaces.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-2 font-label text-sm font-bold text-secondary hover:text-primary transition-colors"
                >
                  <span>Explore The Two-Pronged Intervention Model</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 Core Pillars & Interventions: Pehal Kit Showcase */}
      <section className="py-16 lg:py-24 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Pedagogical Architecture"
              eyebrowIcon="sports_esports"
              title="The Pehal Kit &"
              highlight="Tools"
              subtitle="7 Themes covering 20 topics, delivered through games, comics, and interactive prompts co-designed with prison inmates."
            />
            <Button to="/pehal-toolkit" variant="outline" size="sm" icon="grid_view">
              All 7 Themes & 20 Topics
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              number="01"
              badge="4 Comic Series"
              title="Gender Comics"
              description="Illustrated narratives unpacking Domestic Violence, POCSO, Sexual Consent, and Dowry using relatable vernacular storytelling."
              image="/assets/curated/unlearn_comics.jpg"
              linkText="Explore Comics"
              linkTo="/pehal-toolkit#tools"
              theme="white"
            />

            <FeatureCard
              number="02"
              badge="Tactile Game"
              title="Online Dating Jenga"
              description="A custom wooden block tower testing digital boundaries, sexting pressure, cyberstalking, and online privacy."
              image="/assets/curated/mg_7120.jpg"
              linkText="Explore Game"
              linkTo="/pehal-toolkit#tools"
              theme="white"
            />

            <FeatureCard
              number="03"
              badge="Board & Floor Game"
              title="Consent Snakes & Ladders"
              description="Giant interactive game where ladders reward affirmative consent and upstander behavior; snakes penalize coercion."
              image="/assets/curated/snake_ladders.jpg"
              linkText="Explore Game"
              linkTo="/pehal-toolkit#tools"
              theme="white"
            />

            <FeatureCard
              number="04"
              badge="45+ Hours TOT"
              title="Pehal Training Module"
              description="Comprehensive facilitator curriculum training young men, ex-inmates, and teachers in trauma-informed dialogue."
              image="/assets/curated/mg_7040.jpg"
              linkText="View Module"
              linkTo="/pehal-toolkit#tools"
              theme="white"
            />
          </div>
        </div>
      </section>

      {/* 5.5 Quantitative Impact & Tihar Inmate Story Spotlight */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Documented Reformation"
            eyebrowIcon="verified"
            title="Our Collective"
            highlight="Impact"
            subtitle="Verified metrics monitored through the Gender Equitable Men (GEM) Scale and Counter-Factual evaluations."
            align="center"
            className="mb-12 text-center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <StatCard
              value="8"
              label="Years Experience"
              sublabel="2017 – 2025 continuous field study"
              icon="calendar_month"
              theme="orange"
            />
            <StatCard
              value="300+"
              label="Prison Inmates"
              sublabel="Engaged in Jail No. 5, Tihar"
              icon="gavel"
              theme="blue"
            />
            <StatCard
              value="45+"
              label="Training Hours"
              sublabel="Per Pehal TOT cohort"
              icon="timer"
              theme="white"
            />
            <StatCard
              value="42+"
              label="High-Crime Hubs"
              sublabel="At-risk community clusters in Delhi NCR"
              icon="location_on"
              theme="white"
            />
          </div>

          {/* Spotlight Story Card: Tihar Inmate Journey */}
          <div className="bg-surface-container-low rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 lg:p-8">
              <div className="lg:col-span-5 aspect-[16/11] rounded-lg overflow-hidden bg-surface-container-high border border-outline-variant/30">
                <img
                  src={tiharStory.image}
                  alt={tiharStory.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-primary-container text-on-surface text-xs font-label font-bold uppercase tracking-wider">
                    Reformation Spotlight
                  </span>
                  <span className="text-xs font-label text-on-surface-variant font-bold">
                    {tiharStory.location}
                  </span>
                </div>

                <h3 className="font-headline-sm text-2xl font-bold text-on-surface">
                  {tiharStory.title}
                </h3>

                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  "{tiharStory.excerpt}"
                </p>

                <blockquote className="border-l-3 border-secondary pl-4 py-1 italic font-body text-sm text-secondary bg-surface-container-lowest/60 rounded-r">
                  "{tiharStory.quote}"
                </blockquote>

                <div className="pt-2">
                  <Button
                    to={`/our-work#${tiharStory.id}`}
                    variant="primary"
                    size="sm"
                    icon="arrow_forward"
                  >
                    Read Full Journey
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.6 Call to Action Banner */}
      <section className="py-16 lg:py-20 bg-secondary text-white relative overflow-hidden">
        {/* Subtle community celebration background photo with controlled opacity */}
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity pointer-events-none">
          <img
            src="/assets/curated/1_850_5589.jpg"
            alt="Project Unlearn Community Gathering"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/70" />
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <EyebrowLabel variant="orange" icon="campaign">
              Support Primary Prevention
            </EyebrowLabel>

            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to break the cycle of gender-based violence?
            </h2>

            <p className="font-body-lg text-base sm:text-lg text-surface-container-high leading-relaxed">
              Help us expand the Pehal Kit to more correctional institutions, juvenile homes, and at-risk neighborhood centers across Delhi-NCR and India.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                to="/pehal-toolkit"
                variant="primary"
                size="lg"
                icon="menu_book"
              >
                Explore Pehal 7 Themes
              </Button>
              <Button
                to="/donate"
                variant="outline"
                size="lg"
                icon="volunteer_activism"
                className="border-white text-white hover:bg-white hover:text-secondary"
              >
                Sponsor a Pehal Game Kit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
