export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  category: 'prison' | 'community' | 'ripple' | 'evaluation'
  impactMetrics: string
  description: string
  fullStory: string
  location: string
  image: string
  badge: string
}

export interface CaseStory {
  id: string
  title: string
  protagonist: string
  role: string
  location: string
  excerpt: string
  quote: string
  content: string[]
  theme: string
  image: string
}

export const YOUTUBE_VIDEO = {
  id: "r2cnaq5VJdE",
  title: "Project Unlearn: Unlearning Violence, Transforming Masculinity",
  embedUrl: "https://www.youtube-nocookie.com/embed/r2cnaq5VJdE",
  watchUrl: "https://youtu.be/r2cnaq5VJdE",
  description: "A short documentary capturing Project Unlearn's transformative circles with young men inside Tihar Jail No. 5 and at-risk community bastis in Delhi-NCR, illustrating how primary prevention and empathy break generational cycles of gender-based crime.",
  thumbnail: "/assets/curated/850_4046.jpg"
}

// Verified Problem Statement Statistics from Concept Note Page 1 & 5
export const CONCEPT_STATISTICS = [
  {
    value: "86",
    unit: "Cases / Day",
    label: "Rapes Reported Daily in India",
    source: "NCRB 2021",
    description: "Highlighting the acute urgency for primary prevention before crimes occur."
  },
  {
    value: "76%",
    unit: "Under 4 km",
    label: "Committed Near Residence",
    source: "Project Unlearn Study (Jail No. 5, Tihar)",
    description: "76% of perpetrators committed crimes within 4 km of home; 24% in public neighborhood spaces."
  },
  {
    value: "25%",
    unit: "Recidivism",
    label: "Repeat Offense Rate",
    source: "Tihar Jail Study Baseline",
    description: "Without structured reformation, 1 in 4 offenders repeat offenses against women upon release."
  },
  {
    value: "52%",
    unit: "Public Spaces",
    label: "Women Harassed in Public",
    source: "ICRW Study",
    description: "Over half of Indian women report experiencing sexual harassment in gendered urban spaces."
  },
  {
    value: "98%",
    unit: "Unreported",
    label: "Cases Go Unreported",
    source: "Livemint Report",
    description: "Societal shame and institutional hurdles prevent the vast majority from accessing formal justice."
  },
  {
    value: "31%",
    unit: "Violence",
    label: "Women Face Physical Violence",
    source: "NFHS Survey",
    description: "31% of women experience physical violence and 14% experience sexual violence since age 15."
  }
]

// Two-Pronged Intervention Model + Ripple Effect from Concept Note Page 5 & 6
export const PROJECTS: ProjectItem[] = [
  {
    id: "prison-model",
    title: "The Prison Model (Reformation)",
    subtitle: "Rehabilitating Perpetrators in Tihar Jail No. 5",
    category: "prison",
    badge: "Reformation Arm",
    impactMetrics: "300+ Inmates Engaged • 45+ Hours Curriculum",
    description: "Contextual education sessions for inmates accused of crimes against women, integrated into rehabilitation during their sentence. Focuses on crime, gender, and personal accountability.",
    fullStory: "Our 8 years of groundwork in Tihar Prisons Jail No. 5 began with baseline assessments investigating inmates' socioeconomic backgrounds, lifestyles, and triggers. Through 45+ hours of workshops using the Pehal Kit, inmates unpack toxic masculinity and rape culture. Selected inmates are certified as peer facilitators to sustain change inside the facility.",
    location: "Jail No. 5, Tihar Prisons, New Delhi",
    image: "/assets/curated/850_3594.jpg"
  },
  {
    id: "community-model",
    title: "The Community Model (Prevention)",
    subtitle: "Engaging Boys in At-Risk High-Crime Neighborhoods",
    category: "community",
    badge: "Primary Prevention",
    impactMetrics: "42+ High-Crime Neighborhoods • Delhi/NCR",
    description: "Proactive work with adolescent boys and young men in neighborhoods with high crime density to shift attitudes around gender, consent, and non-violence before crimes can occur.",
    fullStory: "Because 76% of crimes occur within 4 km of residence, urban public spaces are heavily gendered. Project Unlearn deploys interactive tools like Online Dating Jenga, Snakes & Ladders on Consent, and Comic books in neighborhood community centers and schools, building young men into gender ambassadors.",
    location: "High-Crime Neighborhood Clusters across Delhi NCR",
    image: "/assets/curated/850_4321.jpg"
  },
  {
    id: "ripple-effect",
    title: "The Ripple Effect & Unlearn Leaders",
    subtitle: "Ex-Inmates as Community Changemakers",
    category: "ripple",
    badge: "Leadership Pipeline",
    impactMetrics: "Trained Facilitators • Sustained Post-Release Impact",
    description: "Together, both arms create a powerful cycle: reformed inmates post-release step into their home communities as credible, relatable role models mentoring younger boys.",
    fullStory: "Conventional interventions exclude ex-convicts, reinforcing recidivism. Project Unlearn recognizes that reformed inmates possess unparalleled moral credibility when talking to at-risk youth about consequences, grief, and empathy. These Unlearn Leaders conduct ongoing sessions and co-create new contextual learning tools.",
    location: "Pan-Delhi NCR & Northern Region",
    image: "/assets/curated/1_850_5591.jpg"
  },
  {
    id: "evaluation",
    title: "GEM Scale & Counter-Factual Evaluation",
    subtitle: "Rigorous Empirical Monitoring & Evaluation",
    category: "evaluation",
    badge: "M&E Architecture",
    impactMetrics: "Baseline & Endline Assessments • Controlled Groups",
    description: "Deploying the globally recognized Gender Equitable Men (GEM) Scale alongside counter-factual evaluations to empirically measure attitudinal and behavioral shifts.",
    fullStory: "Project Unlearn measures knowledge and attitudinal changes before and after every cohort using the GEM Scale. To validate long-term efficacy, counter-factual evaluations compare treated participant groups against controlled peer groups from the same socioeconomic neighborhoods.",
    location: "Independent Research & Evaluation Framework",
    image: "/assets/curated/unlearn_cards.jpg"
  }
]

export const CASE_STORIES: CaseStory[] = [
  {
    id: "tihar-inmate-journey",
    title: "From Defense to Accountability: A Young Inmate's Journey in Jail No. 5",
    protagonist: "Vikas (Name protected)",
    role: "Former Inmate, Now Certified Unlearn Leader",
    location: "Tihar Jail No. 5, Delhi Prisons",
    excerpt: "Accused under Crime Against Women at age 20, Vikas believed his behavior was justified by traditional entitlement. 45 hours inside the Pehal circle changed his life trajectory.",
    quote: "Until I played the Relationship Consent cards, no one had ever asked me what 'No' meant. In prison, I unlearned the entitlement that destroyed my life.",
    content: [
      "Vikas was one of 300+ inmates who participated in Project Unlearn's baseline assessment in Jail No. 5.",
      "Growing up in an urban resettlement colony, Vikas had never received any formal education regarding gender boundaries, consent, or the legal consequences under POCSO and IPC sections.",
      "Through the 45-hour Pehal curriculum, he engaged with the 'Unpacking Masculinity' theme and facilitated the Snakes & Ladders consent game among cellmates.",
      "Since his release, Vikas has been working with Project Unlearn as an Unlearn Leader, speaking directly to adolescent boys in at-risk neighborhoods about respecting consent and avoiding violent peer pressure."
    ],
    theme: "Prison Reformation & Peer Leadership",
    image: "/assets/curated/1_850_5609.jpg"
  },
  {
    id: "community-upstander",
    title: "Reclaiming the 4 Km Radius: Arjun's Street Intervention in Sangam Vihar",
    protagonist: "Arjun",
    role: "17-Year-Old Youth Ambassador",
    location: "Sangam Vihar, New Delhi",
    excerpt: "When neighborhood boys engaged in daily street harassment at the local bus stop, 17-year-old Arjun utilized Pehal's Upstander Code of Conduct framework to intervene safely.",
    quote: "We used to think eve-teasing was just time-pass. Pehal showed us that street harassment is where the cycle of violent crime begins.",
    content: [
      "Sangam Vihar was identified as one of Delhi's high-crime density hubs where public spaces were predominantly male-dominated and hostile to women.",
      "Arjun attended a 2-day Pehal workshop conducted in his neighborhood learning center, playing Online Dating Jenga and discussing Theme 6 (Code of Conduct in Public Spaces).",
      "When a group of older peers began harassing girls walking to school, Arjun organized a 12-member youth upstander group that accompanied students and reported habitual harassers to community elders.",
      "Today, Arjun coordinates weekly dialogue circles for adolescent boys in his gali."
    ],
    theme: "Primary Prevention & Upstander Action",
    image: "/assets/curated/1_850_5588.jpg"
  },
  {
    id: "parent-counselor-dialogue",
    title: "Dismantling Domestic Violence: Sunita Devi's Family Breakthrough",
    protagonist: "Sunita Devi & Family",
    role: "Community Mother & ASHA Worker",
    location: "Peri-urban Hub, Haryana",
    excerpt: "After reading the Pehal Domestic Violence comic book, Sunita Devi and her teenage son brought the conversation into their own living room, ending years of normalized domestic friction.",
    quote: "My son read the comic and came to me saying, 'Mummy, what papa does when he is angry is an offence under law.' That opened our eyes.",
    content: [
      "In Sunita Devi's household, verbal abuse and physical intimidation had been accepted as customary male behavior for generations.",
      "Project Unlearn's community prevention team distributed the Pehal 4-part comic series to local women and their adolescent sons.",
      "The relatable storytelling enabled her son to articulate how domestic violence affects the emotional development and future attitudes of boys.",
      "Sunita Devi now facilitates mother-son dialogue circles across three villages."
    ],
    theme: "Domestic Violence & Family Dialogue",
    image: "/assets/curated/850_4325.jpg"
  }
]
