import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/common/SectionHeading'
import { EyebrowLabel } from '../components/common/EyebrowLabel'
import { Button } from '../components/common/Button'
import { TeamCard } from '../components/common/TeamCard'
import { TEAM_MEMBERS } from '../data/team'

const MILESTONES = [
  {
    year: "2017 – 2019",
    period: "Initial 3 Years",
    tag: "Tihar Jail No. 5 Inception",
    title: "The Baseline Study: 300+ Incarcerated Men",
    description: "Project Unlearn began its foundational work inside Jail No. 5, Tihar Prisons (Delhi), engaging around 300+ young men charged under Crime Against Women (CAW). Through extensive baseline assessments, focused group discussions, and one-on-one sessions, our team investigated inmates' socioeconomic backgrounds, lifestyles, attitudes, and the root causes behind their offenses.",
    metric: "300+ Inmates • 76% Crime Under 4km Finding",
    location: "Jail No. 5, Tihar Prisons, New Delhi"
  },
  {
    year: "2020 – 2022",
    period: "Pedagogy Co-Creation",
    tag: "Pehal Kit Design",
    title: "Designing the Pehal Tool Kit with Inmates",
    description: "Learnings from Tihar Prison revealed that traditional moral lectures fail. With direct input and storytelling from inmates, our team developed the 'Pehal' curriculum: 7 Themes covering 20 Topics. We engineered board games (Snakes & Ladders on Consent), tactile games (Online Dating Jenga), 52-card dialogue decks, and 4 Gender Comics addressing domestic violence, POCSO, dowry, and consent.",
    metric: "45+ Hours TOT Curriculum • 4 Gender Comics",
    location: "Curriculum Design Labs & Prison Workshops"
  },
  {
    year: "2023 – 2024",
    period: "Community Expansion",
    tag: "The Community Model",
    title: "Primary Prevention in High-Crime Neighborhoods",
    description: "Armed with the finding that 76% of offenses occurred within 4 km of residence, Project Unlearn expanded into Delhi-NCR's at-risk urban communities. We initiated the 'Ripple Effect' model: training reformed ex-inmates and local youth as certified 'Unlearn Leaders' who conduct Pehal circles for adolescent boys to prevent violence before it happens.",
    metric: "42+ High-Crime Neighborhood Hubs",
    location: "Delhi NCR, Haryana & Western UP"
  },
  {
    year: "2025 – 2026",
    period: "Systemic Advocacy",
    tag: "Policy & Scaling",
    title: "Institutional Reformation & GEM Scale Evaluation",
    description: "Deploying the globally validated Gender Equitable Men (GEM) Scale and counter-factual impact evaluations to rigorously assess attitudinal shifts. Advocating with state prison authorities to make gender-based violence education a mandatory part of rehabilitation while serving prison sentences.",
    metric: "Mandatory Prison Reformation Policy Advocacy",
    location: "Pan-India Correctional & Civic Networks"
  }
]

const PARTNERS = [
  { name: "Delhi Prisons (Tihar Jail No. 5)", role: "Foundational Reformation Hub", icon: "gavel" },
  { name: "Delhi Public Learning Trust", role: "School Curriculum Partner", icon: "school" },
  { name: "Arogya Collective", role: "Clinical & Psychological Vetting", icon: "health_and_safety" },
  { name: "Saarthi Foundation", role: "At-Risk Basti Community Circles", icon: "diversity_1" },
  { name: "Manas Mental Health", role: "Trauma Counseling Partner", icon: "psychology" },
  { name: "Open Pedagogy Lab", role: "Open Source Tool Host", icon: "menu_book" }
]

export const About: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState(0)
  const coreTeam = TEAM_MEMBERS.filter((m) => m.category === 'core')

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-fixed/40 via-surface to-surface pt-10 pb-16 lg:pb-24 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <EyebrowLabel variant="blue" icon="gavel">
                  8 Years of Fieldwork (2017–2025)
                </EyebrowLabel>
                <EyebrowLabel variant="orange" icon="shield">
                  Primary Prevention Mandate
                </EyebrowLabel>
                <EyebrowLabel variant="neutral">
                  Tihar Jail No. 5 to Communities
                </EyebrowLabel>
              </div>

              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08]">
                Rooted in Community.<br />
                <span className="text-primary italic font-serif inline-block">Driven by Truth.</span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Project Unlearn is an educational initiative reducing violence and crime against women by engaging boys and young men in prisons, juvenile homes, and high-crime communities to dismantle harmful gender norms and rape culture.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button to="#journey" variant="primary" size="md" icon="arrow_downward">
                  Our 8-Year Journey
                </Button>
                <Button to="/our-work" variant="outline" size="md" icon="explore">
                  Explore Two-Pronged Model
                </Button>
              </div>
            </div>

            {/* Right Col (5 cols): Authentic Field Facilitator Circle Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] bg-surface-container-high group border border-outline-variant/30">
                <img
                  src="/assets/curated/850_3213.jpg"
                  alt="Project Unlearn field facilitator engaging young boys in a dialogue circle"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-label uppercase tracking-wider text-primary-fixed-dim font-bold block mb-1">
                    Grassroots Fieldwork
                  </span>
                  <p className="text-sm font-headline font-semibold">
                    Peer dialogue circle with adolescent boys in Coolie Camp, Delhi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Objectives from Concept Note */}
      <section id="mission-vision" className="py-16 lg:py-24 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Foundational Charter"
            eyebrowIcon="gavel"
            title="Reducing Violence &"
            highlight="Promoting Gender Safety"
            subtitle="Engaging men and boys through primary prevention and prison reformation to dismantle negative gender socializations."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission Card: Warm White Surface with Orange Accents */}
            <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-xl border-t-4 border-primary-container shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-primary-container/30 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">shield</span>
                </div>
                <span className="font-label text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                  Our Mission
                </span>
                <h3 className="font-headline-sm text-2xl font-bold text-on-surface mb-4">
                  To stop the perpetration of violence before it occurs by shifting harmful masculine attitudes and behaviors.
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
                  Through 45+ hours of workshops using contextually designed games and comics (Pehal Kit), we develop young men into gender advocates and ambassadors who work to lessen violence and crime against women in their communities and families.
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/30 space-y-2 text-xs font-label text-secondary font-bold">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Mandatory prison reformation sessions for CAW offenders</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Primary prevention circles in high-crime neighborhoods</span>
                </div>
              </div>
            </div>

            {/* Vision Card: Deep Blue Background with White Typography */}
            <div className="bg-secondary text-white p-8 lg:p-10 rounded-xl border-t-4 border-primary-fixed-dim shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center text-primary-fixed-dim mb-6">
                  <span className="material-symbols-outlined text-2xl">visibility</span>
                </div>
                <span className="font-label text-xs font-bold uppercase tracking-wider text-primary-fixed-dim block mb-2">
                  Our Vision
                </span>
                <h3 className="font-headline-sm text-2xl font-bold text-white mb-4">
                  A society free from gender-based crime where ex-inmates and youth become active champions of gender justice.
                </h3>
                <p className="font-body-md text-surface-container-high leading-relaxed mb-6">
                  Building an inclusive, equitable society that dismantles rape culture, eliminates urban gendered space hostility, and achieves zero recidivism through sustained peer leadership.
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 text-xs font-label text-primary-fixed-dim font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-base">sync_alt</span>
                <span>The Ripple Effect: Reformed offenders leading neighborhood prevention</span>
              </div>
            </div>
          </div>

          {/* Three Core Objectives from Concept Note Page 5 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/30 space-y-2">
              <span className="text-xs font-label uppercase tracking-wider text-primary font-bold">Objective 01</span>
              <h4 className="font-headline-sm text-lg font-bold text-on-surface">
                Mandatory Prison Reformation
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Deliver structured sessions on crime, gender, and accountability for inmates accused of CAW, making it a mandatory rehabilitation component while serving time.
              </p>
            </div>

            <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/30 space-y-2">
              <span className="text-xs font-label uppercase tracking-wider text-primary font-bold">Objective 02</span>
              <h4 className="font-headline-sm text-lg font-bold text-on-surface">
                Prevention in Communities
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Engage boys and young men in at-risk neighborhoods to understand gender, consent, and non-violence, helping them act as changemakers and upstanders.
              </p>
            </div>

            <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/30 space-y-2">
              <span className="text-xs font-label uppercase tracking-wider text-primary font-bold">Objective 03</span>
              <h4 className="font-headline-sm text-lg font-bold text-on-surface">
                Leadership & Ripple Effect
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Build a movement of ex-inmates and youth as community Unlearn Leaders who train and sensitize peers, creating a sustained barrier against violence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey: The Real 8-Year Evolution (2017 – 2026) */}
      <section id="journey" className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Documented Evolution"
            eyebrowIcon="timeline"
            title="Our Journey: From Tihar Prison to"
            highlight="Community Leadership"
            subtitle="Explore how 8 years of intensive interactions inside Jail No. 5 transformed into a scalable national prevention model."
            className="mb-12"
          />

          {/* Year Switcher Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-outline-variant/30">
            {MILESTONES.map((m, index) => (
              <button
                key={m.year}
                onClick={() => setActiveMilestone(index)}
                className={`px-5 py-2.5 rounded-lg font-label font-bold text-sm transition-all cursor-pointer ${
                  activeMilestone === index
                    ? 'bg-secondary text-white shadow-sm'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
              >
                <span>{m.year}</span>
                <span className="ml-2 text-xs opacity-75 font-normal">({m.tag})</span>
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div className="bg-surface-container-low rounded-xl border border-outline-variant/40 p-8 lg:p-12 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3 text-xs font-label text-primary font-bold uppercase tracking-wider">
                  <span>{MILESTONES[activeMilestone].period}</span>
                  <span>•</span>
                  <span>{MILESTONES[activeMilestone].tag}</span>
                </div>

                <h3 className="font-headline-sm text-2xl lg:text-3xl font-bold text-on-surface">
                  {MILESTONES[activeMilestone].title}
                </h3>

                <p className="font-body-lg text-base lg:text-lg text-on-surface-variant leading-relaxed">
                  {MILESTONES[activeMilestone].description}
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-label">
                  <span className="px-3 py-1.5 rounded bg-primary-container text-on-surface font-bold">
                    {MILESTONES[activeMilestone].metric}
                  </span>
                  <span className="text-secondary font-semibold">
                    Location: {MILESTONES[activeMilestone].location}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 bg-surface-container-lowest rounded-lg border border-outline-variant/30 space-y-3">
                <div className="text-xs font-label uppercase tracking-wider text-secondary font-bold">
                  Documented Era
                </div>
                <div className="font-display-hero text-2xl font-extrabold text-primary">
                  {MILESTONES[activeMilestone].year}
                </div>
                <p className="text-xs font-body text-on-surface-variant leading-relaxed">
                  Recorded in Project Unlearn Concept Note & Baseline Assessment Reports.
                </p>
                <div className="pt-2">
                  <Link
                    to="/our-work"
                    className="inline-flex items-center gap-1 text-xs font-label font-bold text-primary hover:text-secondary"
                  >
                    <span>Read The Full Model</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Collective */}
      <section id="who-we-are" className="py-16 lg:py-24 bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="People Behind The Mission"
              eyebrowIcon="groups"
              title="The Core"
              highlight="Collective"
              subtitle="The team of educators, researchers, psychologists, and facilitators driving reformation in prisons and communities."
            />
            <Button to="/team" variant="outline" size="sm" icon="arrow_forward">
              Full Team Directory
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Coalition */}
      <section id="partners" className="py-16 lg:py-24 bg-surface border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Institutional Coalition"
            eyebrowIcon="handshake"
            title="Partners in"
            highlight="Reformation & Justice"
            subtitle="Working alongside prison authorities, legal protection networks, and grassroots basti centers."
            className="mb-12"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="p-5 bg-surface-container-low rounded-lg border border-outline-variant/30 flex flex-col items-center text-center justify-center space-y-2 hover:border-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-3xl text-secondary">{partner.icon}</span>
                <span className="font-headline-sm text-xs font-bold text-on-surface line-clamp-2">
                  {partner.name}
                </span>
                <span className="text-[11px] font-label text-primary font-semibold">
                  {partner.role}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Details Banner from Concept Note Page 7 */}
          <div className="bg-secondary text-white p-8 lg:p-12 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-label uppercase tracking-wider text-primary-fixed-dim font-bold">
                  Official Communication Channel
                </span>
                <h3 className="font-headline-sm text-2xl lg:text-3xl font-bold">
                  Connect with Project Unlearn
                </h3>
                <p className="font-body-md text-surface-container-high leading-relaxed max-w-2xl">
                  For institutional prison partnerships, community workshop requests, research inquiries, or philanthropic alliances:
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-6 text-sm font-label text-white">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed-dim">mail</span>
                    <span>projectunlearn20@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed-dim">call</span>
                    <span>+91 8527571446</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Button
                  to="/our-work#invite"
                  variant="primary"
                  size="lg"
                  icon="outgoing_mail"
                >
                  Initiate Partnership
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
