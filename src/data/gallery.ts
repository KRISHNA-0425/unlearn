export interface GalleryImage {
  id: string
  title: string
  location: string
  category: 'community' | 'schools' | 'correctional' | 'toolkit'
  description: string
  image: string
  date: string
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // Toolkit Products
  {
    id: "g-pehal-box",
    title: "Official Pehal Educational Kit Box",
    location: "Project Unlearn Design Studio, New Delhi",
    category: "toolkit",
    description: "The complete physical Pehal Tool Kit housing 7 themes, 20 topics, board games, card decks, and comic series co-developed with inmates from Tihar Jail No. 5.",
    image: "/assets/curated/mg_7287.jpg",
    date: "Concept Note Archive"
  },
  {
    id: "g-pehal-comics",
    title: "4 Pehal Gender Comics: Domestic Violence, POCSO, Consent & Dowry",
    location: "Curriculum Design Lab & Community Circles",
    category: "toolkit",
    description: "Relatable illustrated comics addressing Domestic Violence, POCSO legal protections, affirmative sexual consent, and anti-dowry social change.",
    image: "/assets/curated/unlearn_comics.jpg",
    date: "Concept Note Archive"
  },
  {
    id: "g-pehal-jenga",
    title: "Online Dating Jenga Tactile Game",
    location: "Youth Dialogue Centers, Delhi NCR",
    category: "toolkit",
    description: "Physical wooden tower game featuring prompts on digital boundaries, sexting pressure, cyberstalking, and online privacy.",
    image: "/assets/curated/mg_7120.jpg",
    date: "Concept Note Archive"
  },
  {
    id: "g-pehal-snakes",
    title: "Consent Snakes & Ladders Interactive Board Game",
    location: "Community Centers & Correctional Facilities",
    category: "toolkit",
    description: "Pedagogical floor board game where ladders reward active bystander intervention and affirmative consent while snakes penalize toxic entitlement.",
    image: "/assets/curated/snake_ladders.jpg",
    date: "Concept Note Archive"
  },
  {
    id: "g-pehal-cards",
    title: "Relationship Consent Playing Card Deck",
    location: "Adolescent Boys' Peer Circles",
    category: "toolkit",
    description: "52-card conversation prompt deck exploring relationship dynamics, boundaries, emotional safety, and recognizing non-verbal cues.",
    image: "/assets/curated/unlearn_cards.jpg",
    date: "Concept Note Archive"
  },
  {
    id: "g-pehal-tot",
    title: "Pehal 45+ Hours TOT Facilitator Curriculum Module",
    location: "Unlearn Leaders Training Academy",
    category: "toolkit",
    description: "Comprehensive 45+ hour training manual certifying ex-inmates and community youth to facilitate Pehal circles in at-risk zones.",
    image: "/assets/curated/mg_7040.jpg",
    date: "Concept Note Archive"
  },

  // Workshops & Circles
  {
    id: "g-ws-coolie-1",
    title: "Workshop Discussion Circle in Coolie Camp",
    location: "Coolie Camp, New Delhi",
    category: "schools",
    description: "Adolescent boys sitting in a participatory dialogue circle exploring healthy masculinity and gender norms.",
    image: "/assets/curated/850_3193.jpg",
    date: "Fieldwork Documentation"
  },
  {
    id: "g-ws-coolie-2",
    title: "Facilitator Dialogue with Adolescent Boys",
    location: "Coolie Camp, New Delhi",
    category: "schools",
    description: "Project Unlearn facilitator engaging young participants in candid reflections on peer pressure and consent.",
    image: "/assets/curated/850_3213.jpg",
    date: "Fieldwork Documentation"
  },
  {
    id: "g-ws-shiva-1",
    title: "Participatory Dialogue Session in Shiva Camp",
    location: "Shiva Camp, New Delhi",
    category: "schools",
    description: "Youth cohort engaged in structured circle dialogue deconstructing everyday sexism and public safety.",
    image: "/assets/curated/850_3594.jpg",
    date: "Fieldwork Documentation"
  },
  {
    id: "g-ws-shiva-2",
    title: "Youth Group Interactive Activity with Facilitators",
    location: "Shiva Camp, New Delhi",
    category: "schools",
    description: "Small breakout group working through case scenarios and boundary negotiation exercises.",
    image: "/assets/curated/850_3606.jpg",
    date: "Fieldwork Documentation"
  },
  {
    id: "g-ws-motilal-1",
    title: "Youth Dialogue Circle on Mats in Motilal Nehru Camp",
    location: "Motilal Nehru Camp, New Delhi",
    category: "schools",
    description: "Adolescent boys seated together in an open circle holding discussions on respecting consent and rejecting violence.",
    image: "/assets/curated/850_4046.jpg",
    date: "Fieldwork Documentation"
  },
  {
    id: "g-ws-motilal-2",
    title: "Group Reflection & Empathy Circle",
    location: "Motilal Nehru Camp, New Delhi",
    category: "schools",
    description: "Facilitators and youth sharing personal experiences and identifying ways to act as active upstanders in their gali.",
    image: "/assets/curated/850_4050.jpg",
    date: "Fieldwork Documentation"
  },

  // Community Life
  {
    id: "g-comm-motilal-1",
    title: "Motilal Nehru Camp Neighborhood Life & Streets",
    location: "Motilal Nehru Camp, New Delhi",
    category: "community",
    description: "Documentary streetscape illustrating the urban density and neighborhood reality within the 4 km radius.",
    image: "/assets/curated/850_4321.jpg",
    date: "Fieldwork Documentation"
  },
  {
    id: "g-comm-motilal-2",
    title: "Community Streetscape & Shared Spaces",
    location: "Motilal Nehru Camp, New Delhi",
    category: "community",
    description: "Everyday street environment where young men navigate peer dynamics and gendered public spaces.",
    image: "/assets/curated/850_4325.jpg",
    date: "Fieldwork Documentation"
  },
  {
    id: "g-comm-motilal-3",
    title: "Community Gathering & Informal Exchange",
    location: "Motilal Nehru Camp, New Delhi",
    category: "community",
    description: "Local neighborhood residents and youth gathering outside community learning spaces.",
    image: "/assets/curated/1_850_4345.jpg",
    date: "Fieldwork Documentation"
  },
  {
    id: "g-comm-coolie-1",
    title: "Coolie Camp Neighborhood Basti Reality",
    location: "Coolie Camp, New Delhi",
    category: "community",
    description: "Community perspective highlighting why primary prevention must be embedded in local basti corridors.",
    image: "/assets/curated/1_850_3285.jpg",
    date: "Fieldwork Documentation"
  },
  {
    id: "g-comm-sunny",
    title: "Sunny — Youth Leader & Changemaker",
    location: "Coolie Camp, New Delhi",
    category: "community",
    description: "Community profile of Sunny, an active youth leader advocating for gender equality in his neighborhood.",
    image: "/assets/curated/850_4921.jpg",
    date: "Fieldwork Documentation"
  },

  // Reformation & Unlearn Leaders
  {
    id: "g-lead-final-1",
    title: "Final Day Celebration Group Portrait",
    location: "Project Unlearn Field Graduation",
    category: "correctional",
    description: "Participants, facilitators, and mentors celebrating the successful completion of the Pehal intensive training cohort.",
    image: "/assets/curated/1_850_5589.jpg",
    date: "Cohort Graduation"
  },
  {
    id: "g-lead-final-2",
    title: "Unlearn Leaders Receiving Certification",
    location: "Project Unlearn Field Graduation",
    category: "correctional",
    description: "Young men awarded completion certificates, formally stepping into their roles as peer leaders and upstanders.",
    image: "/assets/curated/1_850_5591.jpg",
    date: "Cohort Graduation"
  },
  {
    id: "g-lead-final-3",
    title: "Certified Peer Leader Portrait",
    location: "Project Unlearn Field Graduation",
    category: "correctional",
    description: "Portrait of a dedicated youth graduate committed to conducting Pehal dialogue circles for younger peers.",
    image: "/assets/curated/1_850_5609.jpg",
    date: "Cohort Graduation"
  },
  {
    id: "g-lead-final-4",
    title: "Community Pride & Camaraderie",
    location: "Project Unlearn Field Graduation",
    category: "correctional",
    description: "Graduates and community facilitators standing in solidarity after weeks of intensive unlearning and dialogue.",
    image: "/assets/curated/1_850_5614.jpg",
    date: "Cohort Graduation"
  },
  {
    id: "g-lead-final-5",
    title: "Youth Participant — Standing Proud",
    location: "Project Unlearn Field Graduation",
    category: "correctional",
    description: "Empowered young participant who transformed defensive attitudes into active gender justice advocacy.",
    image: "/assets/curated/1_850_5588.jpg",
    date: "Cohort Graduation"
  },
  {
    id: "g-lead-final-6",
    title: "Adolescent Boy Portrait — Unlearn Graduate",
    location: "Project Unlearn Field Graduation",
    category: "correctional",
    description: "Youth graduate embodying the shift toward non-violent, empathetic, and equitable masculinity.",
    image: "/assets/curated/1_850_5607.jpg",
    date: "Cohort Graduation"
  }
]


