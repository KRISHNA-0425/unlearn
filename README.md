# Project Unlearn (2026)

> **Reducing Violence and Crime Against Women and Promoting Gender Safety in India.**  
> An educational initiative engaging young boys, men, and incarcerated individuals to dismantle harmful gender norms, toxic masculinity, and rape culture through primary prevention.

---

## 🌟 Overview

Project Unlearn is a grassroots social-impact movement tackling gender-based crime and violence at its root cause through **primary prevention**—stopping the perpetration of violence before it occurs.

Based on 8 years of intensive field research (2017–2025) including baseline studies with over **300+ incarcerated young men charged under Crime Against Women (CAW) in Tihar Jail No. 5**, Project Unlearn deconstructs the negative socializations that fuel gendered crime.

### Key Empirical Findings:
- **86 rape cases** are reported daily in India (NCRB 2021).
- **76% of perpetrators** committed offenses within **4 km of their residence** (24% in public neighborhood spaces), revealing how urban public spaces are heavily gendered.
- **25% recidivism rate** for Crime Against Women in correctional facilities in the absence of structured, empathetic cognitive reformation.
- **52% of women** experience sexual harassment in public spaces (ICRW).
- **98% of cases** of sexual violence go unreported (Livemint).

---

## 🏛️ The Two-Pronged Intervention Model

1. **The Prison Model (Reformation)**: Contextual education sessions for inmates accused of crimes against women in Tihar Jail No. 5. Inmates unpack toxic masculinity, domestic violence, and consent through 45+ hours of structured workshops, training selected inmates as peer facilitators.
2. **The Community Model (Prevention)**: Proactive engagement with adolescent boys and young men in high-crime density neighborhoods across Delhi/NCR to shift attitudes around gender, consent, and non-violence before offenses occur.
3. **The Ripple Effect**: Reformed ex-inmates return to their home communities as certified **Unlearn Leaders**, possessing unmatched moral credibility to mentor younger boys and act as active upstanders.

---

## 🎲 The Pehal Tool Kit

Co-created with prison inmates and community facilitators, **Pehal** is an educational game kit housing **7 Themes covering 20 Core Topics**:

1. **Understanding Gender and Patriarchy** (Gender vs Sex, roles & division of labour, media representation)
2. **Discrimination against Women — Society & Culture** (Types of discrimination, culture of dowry, intersectionality & male privilege)
3. **Unpacking Masculinity** (Toxic vs positive masculinity, peer pressure, Domestic Violence Act)
4. **Sexual Health and Sexual Violence** (Body autonomy, LGBTQ+ orientations, safe practices, sexual consent)
5. **Sexual Violence against Children** (Types of abuse, POCSO Act legal protections, adolescent attraction & accepting 'No')
6. **Code of Conduct in Public & Work Spaces** (Everyday sexism, responsible bystander/upstander intervention, workplace POSH)
7. **Online Violence against Women** (Ethical digital behavior, digital privacy, responding to cybercrimes)

### Physical Game Tools:
- **4 Gender Comics Series**: Relatable vernacular graphic narratives on Domestic Violence, POCSO, Consent, and Dowry.
- **Online Dating Jenga**: Tactile wooden block tower exploring digital boundaries, cyberstalking, and sexting pressure.
- **Consent Snakes & Ladders**: Interactive board/floor game where ladders reward affirmative consent and snakes penalize coercion.
- **Relationship Consent Playing Cards**: 52-card conversation prompt deck for youth breakout circles.
- **Pehal TOT Module**: Comprehensive 45+ hour training handbook certifying facilitators and Unlearn Leaders.

---

## 📐 Monitoring & Evaluation (M&E)

- **Gender Equitable Men (GEM) Scale**: Globally validated psychometric tool measuring shifts in perceptions of gender roles, masculinity, violence, and consent through baseline and endline assessments.
- **Counter-Factual Impact Evaluation**: Rigorous comparative evaluation matching treated participant cohorts with controlled peer groups from the same socioeconomic zones.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with Warm Vanguard Design System tokens
- **Motion & Interactions**:
  - [GSAP 3](https://gsap.com/) + `@gsap/react`
  - [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
  - [Locomotive Scroll v5](https://github.com/locomotivemtl/locomotive-scroll) (smooth scrolling)
  - [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Google Material Symbols Outlined](https://fonts.google.com/icons) + [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/KRISHNA-0425/unlearn.git
cd unlearn

# Install dependencies
npm install

# Start the local development server
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Production Build
```bash
# Typecheck and build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 📂 Project Architecture

```
unlearn/
├── public/
│   ├── assets/
│   │   ├── curated/         # 23 authentic field & product photos
│   │   └── logo.png         # Official transparent brand logo
│   └── favicon.svg
├── src/
│   ├── animations/          # GSAP timelines, ScrollTrigger registration
│   ├── components/
│   │   ├── common/          # Reusable UI (Buttons, Cards, Labels, Modals)
│   │   ├── gallery/         # Lightbox preview modal
│   │   └── layout/          # Sticky Navbar, MobileMenu drawer, Footer
│   ├── data/                # Typed data modules (Curriculum, Stories, Team, Gallery)
│   ├── hooks/               # Smooth scroll & progress hooks
│   ├── pages/               # 10 full-featured application views
│   ├── routes/              # App routing architecture
│   ├── styles/              # Tailwind v4 @theme design tokens
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📬 Contact & Alliances

- **Official Email**: `projectunlearn20@gmail.com`
- **Phone**: `+91 8527571446`
- **Headquarters**: New Delhi, India

---

## 📄 License
This project is licensed under the MIT License.
