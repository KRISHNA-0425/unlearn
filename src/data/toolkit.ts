export interface CurriculumTheme {
  themeNumber: number
  themeTitle: string
  icon: string
  topics: string[]
  description: string
}

export interface PehalToolItem {
  id: string
  title: string
  type: string
  description: string
  pedagogicalFocus: string
  imageUrl: string
  badge: string
}

export const TOOLKIT_DATA = {
  hero: {
    headline: "The Pehal Toolkit: Unlocking Honest Conversations",
    eyebrow: "Co-Created in Tihar Prisons & Community Hubs",
    description: "Developed over 8 years of intensive interactions with 300+ incarcerated young men and adolescent boys. Pehal is an educational tool kit conceptualized to create a safe space for men and boys to dismantle harmful gender norms, negative socialisations, and rape culture through interactive games and graphic narratives.",
    boxKitTitle: "Pehal Educational Tool Kit",
    boxKitVolume: "45+ Hours Curriculum",
    boxKitDescription: "Comprises board games, playing cards, comic books, and floor games that weave real-life cases and accessible vocabulary to make difficult conversations non-threatening.",
    heroImage: "/assets/curated/mg_7287.jpg",
  },
  statisticsBanner: [
    { value: "7", label: "Core Themes", sublabel: "Comprehensive gender & safety scope" },
    { value: "20", label: "In-Depth Topics", sublabel: "From POCSO to toxic masculinity" },
    { value: "45+", label: "Training Hours", sublabel: "Full interactive TOT module" },
    { value: "300+", label: "Inmates Involved", sublabel: "Co-created inside Tihar Prison" },
  ],
  urgencyPillars: [
    {
      num: "01",
      tag: "Root Cause",
      title: "Primary Prevention Imperative",
      description: "With 86 rape cases reported every day in India, legal retaliation alone is insufficient. Primary prevention aims to stop the perpetration of violence before it occurs by reshaping male attitudes, behaviors, and relationships.",
      icon: "shield"
    },
    {
      num: "02",
      tag: "The Proximity Reality",
      title: "Addressing Gendered Spaces",
      description: "Our study in Tihar Jail No. 5 revealed that 76% of perpetrators committed crimes within 4 km of their residence, with 24% occurring in public spaces. Pehal tackles the normalization of everyday neighborhood street harassment.",
      icon: "distance"
    },
    {
      num: "03",
      tag: "Reformation to Leadership",
      title: "The Ripple Effect",
      description: "Young men and ex-inmates who experience Pehal are trained as 'Unlearn Leaders', conducting sessions in high-crime neighborhoods to create a sustainable ripple effect against gender-based violence.",
      icon: "sync_alt"
    }
  ],
  quote: {
    text: "In order to reduce Crime Against Women, it is crucial to build a strong gender lens for boys and young men. By educating them about consent, toxic masculinity, and accountability, we transform perpetrators into community advocates.",
    author: "Project Unlearn Core Team",
    role: "8-Year Prison Reformation Study (Jail No. 5, Tihar)"
  },
  // The 7 Themes Covering 20 Topics from Concept Note Page 2 & 3
  themes: [
    {
      themeNumber: 1,
      themeTitle: "Understanding Gender and Patriarchy",
      icon: "diversity_3",
      description: "Deconstructing biological sex versus socially assigned gender, division of labour, and media conditioning.",
      topics: [
        "Gender and Sex, Masculinity and Femininity",
        "Gender roles and stereotypes, division of Labour, emphasis on upbringing",
        "Representation of gender in popular media"
      ]
    },
    {
      themeNumber: 2,
      themeTitle: "Discrimination Against Women — Society & Culture",
      icon: "gavel",
      description: "Examining power hierarchies, dowry pressures, and how male privilege operates within families and castes.",
      topics: [
        "Types of Gender discrimination, its impact, and measures to address it",
        "Culture of Dowry and economic exploitation",
        "Intersectionality: male privilege and power structures (family, caste, class, location, sex)"
      ]
    },
    {
      themeNumber: 3,
      themeTitle: "Unpacking Masculinity",
      icon: "psychology",
      description: "Distinguishing toxic vs positive masculinity, resisting peer pressure, and recognizing domestic violence.",
      topics: [
        "Toxic and Positive Masculinity — concrete ways to unlearn toxic masculine norms",
        "Peer Pressure — psychological impact on self and others",
        "Domestic Violence — impact on self and others, Domestic Violence Act (PWDVA)"
      ]
    },
    {
      themeNumber: 4,
      themeTitle: "Sexual Health & Sexual Violence",
      icon: "health_and_safety",
      description: "Demystifying reproductive anatomy, sexual orientation, safe sexual practices, and enthusiastic consent.",
      topics: [
        "Bodily autonomy: male/female reproductive organs, decision making, LGBTQ & sexual orientation, Menstruation",
        "Family planning; safe sexual practices and taboo (rights and responsibilities)",
        "Sexual consent and sexual violence"
      ]
    },
    {
      themeNumber: 5,
      themeTitle: "Sexual Violence Against Children & POCSO",
      icon: "child_care",
      description: "Understanding child safety legislation, recognizing abuse, healthy young adult attraction, and accepting 'No'.",
      topics: [
        "Types of sexual violence against children",
        "POCSO Act and protections guaranteed by the law",
        "Attraction and relationships among young adults, consent and accepting NO"
      ]
    },
    {
      themeNumber: 6,
      themeTitle: "Code of Conduct & Public Spaces",
      icon: "verified_user",
      description: "Combating everyday sexism, street harassment, workplace POSH policies, and practicing upstander intervention.",
      topics: [
        "Types of harassment and abuse in public spaces, everyday sexism",
        "Responsible bystander and up-stander intervention",
        "Kinds and types of harassment at the workplace (POSH Act)"
      ]
    },
    {
      themeNumber: 7,
      themeTitle: "Online Violence Against Women",
      icon: "devices",
      description: "Navigating digital safety, respectful messaging, online boundaries, consent in cyber spaces, and cyber laws.",
      topics: [
        "Ethical online behaviour and the fundamental concept of digital privacy",
        "Types and psychological effects of online violence, ways to respond to cybercrimes"
      ]
    }
  ],
  // The actual tools inside the Pehal Kit from Concept Note Page 4
  tools: [
    {
      id: "gender-comics",
      title: "4 Gender Comics Series",
      type: "Illustrated Graphic Novels",
      badge: "Real-Life Case Stories",
      description: "A series of 4 illustrated vernacular comic books unpacking Domestic Violence, POCSO (Child Protection), Sexual Consent, and the Culture of Dowry through relatable narratives.",
      pedagogicalFocus: "Replaces clinical intimidation with serialized visual storytelling, helping adolescents identify abuse and understand legal consequences.",
      imageUrl: "/assets/curated/unlearn_comics.jpg"
    },
    {
      id: "dating-jenga",
      title: "Online Dating Jenga",
      type: "Tactile Decision-Making Game",
      badge: "Digital Safety & Boundaries",
      description: "A custom wooden block tower game where every extracted block poses a high-stakes scenario on digital relationships, sexting pressure, boundary crossing, and digital consent.",
      pedagogicalFocus: "Physically embodies how violating consent destabilizes trust, mirroring the collapse of the Jenga tower.",
      imageUrl: "/assets/curated/mg_7120.jpg"
    },
    {
      id: "snakes-ladders",
      title: "Snakes & Ladders on Sexual Consent",
      type: "Interactive Floor & Board Game",
      badge: "Floor/Board Game",
      description: "A giant participatory game board where advancing up ladders represents affirmative consent, respecting rejection, and upstander behavior; snakes represent coercion, entitlement, and harassment.",
      pedagogicalFocus: "Gamifies complex moral decisions into tangible cause-and-effect learning without moralizing lectures.",
      imageUrl: "/assets/curated/snake_ladders.jpg"
    },
    {
      id: "consent-cards",
      title: "Playing Cards on Consent in Relationships",
      type: "Dialogue Prompt Deck",
      badge: "52-Card Dialogue Deck",
      description: "A curated card deck presenting everyday scenarios faced by young men and boys in romantic relationships, friendships, and family settings.",
      pedagogicalFocus: "Designed for small breakout circles to trigger debate on boundary negotiation, peer pressure, and non-violent communication.",
      imageUrl: "/assets/curated/unlearn_cards.jpg"
    },
    {
      id: "tot-module",
      title: "Pehal TOT (Training of Trainers) Module",
      type: "Facilitator Certification Framework",
      badge: "45+ Hours Curriculum",
      description: "The complete facilitator handbook equipping ex-inmates, teachers, and youth changemakers to lead safe participatory circles using trauma-informed frameworks.",
      pedagogicalFocus: "Standardizes facilitation quality across correctional facilities, schools, and basti centers with strict ethical protocols.",
      imageUrl: "/assets/curated/mg_7040.jpg"
    }
  ],
  downloads: [
    {
      title: "Pehal 7-Theme Curriculum Framework (English)",
      format: "PDF • 20 Topics • 8.4 MB",
      badge: "Official Syllabus",
      description: "Complete pedagogical scope covering Patriarchy, Masculinity, Sexual Violence, POCSO, and Online Safety."
    },
    {
      title: "Pehal Gender Comics Collection (4 Issues)",
      format: "PDF • Domestic Violence, POCSO, Consent, Dowry • 16.2 MB",
      badge: "Comic Series",
      description: "Vernacular illustrated narratives co-created with young men in Tihar Prison and community youth."
    },
    {
      title: "Consent Snakes & Ladders & Jenga Activity Guides",
      format: "PDF • Rules & Prompt Cards • 5.1 MB",
      badge: "Game Rules",
      description: "Printable board blueprints, scenario cards, and facilitator instructions for classroom gameplay."
    },
    {
      title: "Pehal 45+ Hour TOT Facilitator Manual",
      format: "PDF • Training Guidebook • 12.0 MB",
      badge: "Facilitator Guide",
      description: "Comprehensive facilitation methodology for conducting primary prevention workshops with young men and boys."
    }
  ]
}
