export interface JournalArticle {
  slug: string
  title: string
  subtitle: string
  author: {
    name: string
    role: string
    avatar: string
  }
  date: string
  readTime: string
  category: string
  featured?: boolean
  excerpt: string
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'callout'
    text: string
    attribution?: string
  }[]
  tags: string[]
  coverImage: string
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "myth-of-chapter-8",
    title: "The Myth of Chapter 8: Why Indian Classrooms Skip Adolescence",
    subtitle: "When educators skip reproductive biology, they don't prevent curiosity—they outsource it to shame and misinformation.",
    author: {
      name: "Aanya Sharma",
      role: "Lead Founder, Project Unlearn",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTiINMlebptKcminP2xPEJsCMcfkCzHx4Y8bxOVkhUc2VxV0KdEibyiNSuxQPiYNnWRHKtpNEfkRYNnmwabUbK6grdE-c9C8mdLoosbFVT6cOVm26Y_6Pqy1NOOcKZxz-dvS0T1fBRPxOdoL55r3os84SZg8CZySHbWgvgwO_bAxIQjP2s15u7KSCNCDQXblU6X5C1ziX_jAb6JWcIgOXw04Dbc6IzxDKJWzxaanao"
    },
    date: "October 14, 2024",
    readTime: "6 min read",
    category: "Pedagogy & Education",
    featured: true,
    excerpt: "Every year across tens of thousands of Indian classrooms, teachers turn to Chapter 8 of the Class 10 Science textbook and utter the familiar phrase: 'Read this at home.' What begins as an awkward giggle in an assembly room calcifies into a lifetime of taboo.",
    tags: ["Pedagogy", "Adolescence", "Classroom Reform", "Pehal"],
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKslgNI8JJmb42BhBmtjT7d8h9T1Bi0Tgt8NfUcfoZmJXkbt6FZpaXVHdTJ1ZC-7UtG37mSyM6cR4r_NECN6bRCRKvFpnOBmeY7GIv3mkRT5Ftowy2-Mo8ZsKBy9R-Qq7lyKaJQg7jpEzJHIw_FAnhrW6Imq1IbSgmeJ7NFSzvdd7rclpxE4bvR6r0QdaT0b84z_Rc8ptElHuoyXpEQlHOAuAzaotKCczfofQYVcQP",
    content: [
      {
        type: "paragraph",
        text: "Across schools in semi-urban and rural India, Chapter 8—which covers human reproduction, hormonal shifts, and cellular biology—occupies a surreal cultural status. It is technically printed in syllabus books mandated by state and central boards, yet culturally redacted by the unspoken terror of conservative backlash."
      },
      {
        type: "heading",
        text: "The Consequence of Silence"
      },
      {
        type: "paragraph",
        text: "When institutions abdicate their duty to provide factual, empathetic guidance, adolescents do not stop developing. Instead, their natural questions are answered by locker room rumors, unregulated internet searches, and patriarchal myths passed down as folklore."
      },
      {
        type: "quote",
        text: "Shame is not an inherent adolescent emotion; it is an adult invention taught through terrified silences.",
        attribution: "Project Unlearn Field Monograph, 2023"
      },
      {
        type: "paragraph",
        text: "In our field surveys conducted across 34 state schools, over 78% of adolescent girls reported believing their first menstrual cycle was a fatal illness or punishment for wrongdoing. Among boys of the same age, nocturnal emissions were accompanied by acute psychological guilt and fear of irreversible weakness."
      },
      {
        type: "heading",
        text: "How Comic Pedagogy Dissolves the Freeze"
      },
      {
        type: "paragraph",
        text: "This is precisely why we created Pehal. When you hand a student an illustrated comic rather than a dense clinical biology textbook, their posture transforms. They see fictional characters experiencing the exact anxieties they thought they suffered alone. The moment a child realizes their struggle is shared, the taboo dissolves into collective relief."
      }
    ]
  },
  {
    slug: "de-escalating-machismo",
    title: "De-escalating Machismo: What Incarcerated Youth Taught Us About Vulnerability",
    subtitle: "Behind the aggressive armor of youth detention wards lies a profound hunger for non-violent emotional expression.",
    author: {
      name: "Dr. Kabir Mehta",
      role: "Curriculum & Research Lead",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKJE0SdmWTcjI1gLnWKQ7sPQciNJzAyvWVcNr-w4552M16NKnjvYip9gn0fUiVbuXz_I-4Ye_P7gKLsANot9vLLkFUqrLj8mlb9LHz5aeWnome5fWF6INStgi9_JRyywSUL4Y4LCUD8M4LyTEx7XDucsFtyOHEe9xgBsB5gCwBBe4tIVrmiOl_mdv0Iml4viMVqs9PuOuFhBkOLhpeBwVlYbHMh-MSFydZsJ7zMbka"
    },
    date: "September 28, 2024",
    readTime: "8 min read",
    category: "Rehabilitation & Justice",
    featured: false,
    excerpt: "In correctional facilities across North India, showing vulnerability is treated as a fatal sign of weakness. Yet over two years of weekly circles, we watched young men trade hardened silences for transformative self-awareness.",
    tags: ["Incarcerated Youth", "Toxic Masculinity", "Mental Health", "Correctional Reform"],
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDET4obqItGpAOkvMacTWaNkH3gmk2s7m05TbAt_G7SX3ynh4_CyBxchALrSuNPmoIQUvmOi8Gc9e4jCBWbefwkiwK3XFElBtjvK3NtevUx8BYhOVTEwJCdgsSeBSH-AHC6cS3x6R0UrKM2hIrcS5QltUjivcud4b3-HN0efyljqUCfZ3kv2Dm4aiIqUIbLHkc5aXtt_EbQVB1Si12ygIH1AJ9pkLv5P2L527PEqdwp",
    content: [
      {
        type: "paragraph",
        text: "The young men in our correctional programs have grown up in worlds where physical aggression was not just celebrated—it was the only recognized currency of survival. For them, toxic masculinity was not an abstract academic concept; it was an armor worn to prevent total annihilation."
      },
      {
        type: "heading",
        text: "The Circle of Truth"
      },
      {
        type: "paragraph",
        text: "When we begin a circle in a detention ward, facilitators do not start with lectures on morals or legal culpability. We start with physical sensation: 'Where do you feel anger in your body? What happens to your breathing right before you strike?'"
      },
      {
        type: "quote",
        text: "Violence is frequently the only language a young man has been permitted to speak when grieving.",
        attribution: "Dr. Kabir Mehta, Workshop Dispatch"
      },
      {
        type: "paragraph",
        text: "Once participants connect physical tension with suppressed sorrow, abandonment, and humiliation, the dynamic shifts. Over 2,500 young men have now passed through these 12-week cohorts, showing marked reductions in internal facility friction and cultivating peer mediation."
      }
    ]
  },
  {
    slug: "secret-question-box",
    title: "The Secret Question Box: What 10,000 Anonymous Slips Reveal About Indian Teens",
    subtitle: "When you give students an anonymous megaphone, you discover the burning questions society was too frightened to answer.",
    author: {
      name: "Sunita Patel",
      role: "Grassroots Coordinator",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFIfUmU3ICL6R9__B0_pLWTM_6xfox9sd8HzqAAKOFEnBaCuSFZSwInMECHcr2H1-flKd06iPcl-sw-yplzowlMt-j4h8pWN8AIn8MC5HetKgrUR2DQzTsHS9nJsmDg7GlwRIqpCjClMCgu1TuA4kPmgUClk55P0ObSlBgu970-n-cGhAH2pqhAAwriLRSVvawv445OmVpBHInk_vc4VomBnx9NdCG8Frlx0OWCoYC"
    },
    date: "August 19, 2024",
    readTime: "5 min read",
    category: "Field Research",
    featured: false,
    excerpt: "Every Pehal workshop includes a cardboard box with a slit in the top, wrapped in craft paper. What goes into that box tells the unvarnished truth about growing up in contemporary India.",
    tags: ["Field Insights", "Adolescent Queries", "Safe Spaces", "ASHA Workers"],
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCZk582me4birBTE9qmWquEMQO69UvgLzkmAdEZ5ILVWJlFiZFvBsEEqrvUydz7O8bTTCBp8NTwwD04cTgMFYeYRlD0dFq0R64OZOS7q7-wsA4m3DVnIYhHdNwsfZ_IwtAFDhihgK6PDVjeHLxUlqEhzlkjw-yohTBgFL33-D1qLaFSHadDMsJDwt-bfhaa1m2Wuos-Qrn-WbP6NkLL4FpNvxwhPjYC7WoPFF9d06Y",
    content: [
      {
        type: "paragraph",
        text: "The cardboard box is placed at the back of the room. No names. No roll numbers. No handwriting samples required. During workshop breaks, students slip folded notes into the aperture."
      },
      {
        type: "heading",
        text: "Themes That Dominate the Slips"
      },
      {
        type: "paragraph",
        text: "Across 10,000 documented slips collected over 18 months, three recurring anxieties accounted for over 70% of entries: anxiety over body changes and perceived abnormal development, fear of being judged by family if asking health questions, and severe confusion regarding online boundaries and consent."
      },
      {
        type: "paragraph",
        text: "By reading these slips aloud without attribution, facilitators normalize the universal nature of adolescent queries. Students realize their deepest private anxieties are identical to those of the peer sitting next to them."
      }
    ]
  },
  {
    slug: "the-4km-radius-tihar-study",
    title: "The 4 Km Radius: Lessons from 300+ Incarcerated Men in Tihar Jail No. 5",
    subtitle: "Why 76% of offenses occur within neighborhood proximity, and how primary prevention breaks the cycle before prison walls are built.",
    author: {
      name: "Project Unlearn Research Collective",
      role: "Field Monitoring & Evaluation Unit",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKJE0SdmWTcjI1gLnWKQ7sPQciNJzAyvWVcNr-w4552M16NKnjvYip9gn0fUiVbuXz_I-4Ye_P7gKLsANot9vLLkFUqrLj8mlb9LHz5aeWnome5fWF6INStgi9_JRyywSUL4Y4LCUD8M4LyTEx7XDucsFtyOHEe9xgBsB5gCwBBe4tIVrmiOl_mdv0Iml4viMVqs9PuOuFhBkOLhpeBwVlYbHMh-MSFydZsJ7zMbka"
    },
    date: "November 2, 2024",
    readTime: "7 min read",
    category: "Rehabilitation & Justice",
    featured: false,
    excerpt: "Over 8 years of intensive interactions inside Jail No. 5, Tihar Prisons, our baseline study with 300+ perpetrators revealed a stark truth: 76% of crimes against women occurred less than 4 km from the offender's residence.",
    tags: ["Tihar Jail No. 5", "Primary Prevention", "Recidivism", "Concept Note 2026", "GEM Scale"],
    coverImage: "/assets/curated/snake_ladders.jpg",
    content: [
      {
        type: "paragraph",
        text: "National discussions on gender-based violence often focus on sensational street attacks by strangers. However, Project Unlearn's 8-year baseline study with over 300 young men incarcerated under Crime Against Women (CAW) in Delhi's Tihar Jail No. 5 revealed that 76% committed offenses within 4 km of their home, with 24% occurring in routine public places such as neighborhood bus stops, market corners, and galis."
      },
      {
        type: "heading",
        text: "The Reality of Recidivism & Why Moral Lecturing Fails"
      },
      {
        type: "paragraph",
        text: "In the absence of dedicated gender-focused cognitive rehabilitation, the recidivism rate for Crime Against Women in correctional facilities hovers around 25%. Inmates often leave prison with intensified feelings of persecution and grievance rather than an understanding of consent, boundaries, or gender justice."
      },
      {
        type: "quote",
        text: "Traditional moral lecturing causes inmates to shut down in defense. Game-based pedagogy opens dialogue where honest unlearning can finally begin.",
        attribution: "Tihar Prison Reformation Baseline Report"
      },
      {
        type: "heading",
        text: "The Two-Pronged Response: Reformation Inside, Prevention Outside"
      },
      {
        type: "paragraph",
        text: "Through the Pehal Kit's 7 Themes and 20 Topics, we engage young men in 45+ hours of structured workshops. Board games like Consent Snakes & Ladders, tactile exercises like Online Dating Jenga, and character-driven comics allow men to deconstruct toxic peer pressure and male entitlement without feeling trapped in an interrogation."
      },
      {
        type: "paragraph",
        text: "Crucially, the 'Ripple Effect' enlists reformed ex-inmates and community youth as certified Unlearn Leaders. Returning to their home neighborhoods, these leaders serve as authentic upstanders who can talk to adolescent boys with unmatched moral credibility, stopping violence before it takes root."
      }
    ]
  }
]

