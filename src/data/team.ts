export interface TeamMember {
  id: string
  name: string
  role: string
  tagline: string
  bio: string
  extendedBio: string
  focusArea: string
  languages: string
  image: string
  category: 'core' | 'facilitators' | 'advisors'
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "aanya-sharma",
    name: "Aanya Sharma",
    role: "Lead Founder & Director",
    tagline: "Speaks Hindi, English & Maithili",
    bio: "Public health educator and community organizer with a decade of grassroots leadership across maternal-adolescent health sectors.",
    extendedBio: "Previously headed field evaluation programs for adolescent health collectives in Bihar and Haryana. Holds a Masters in Public Health from TISS Mumbai. She drives policy engagement, institutional partnerships, and community accountability.",
    focusArea: "Policy engagement & district partnerships",
    languages: "Hindi, English, Maithili",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTiINMlebptKcminP2xPEJsCMcfkCzHx4Y8bxOVkhUc2VxV0KdEibyiNSuxQPiYNnWRHKtpNEfkRYNnmwabUbK6grdE-c9C8mdLoosbFVT6cOVm26Y_6Pqy1NOOcKZxz-dvS0T1fBRPxOdoL55r3os84SZg8CZySHbWgvgwO_bAxIQjP2s15u7KSCNCDQXblU6X5C1ziX_jAb6JWcIgOXw04Dbc6IzxDKJWzxaanao",
    category: "core"
  },
  {
    id: "kabir-mehta",
    name: "Dr. Kabir Mehta",
    role: "Curriculum & Research Lead",
    tagline: "Published Author on Youth Anxiety",
    bio: "Child psychologist and pedagogy researcher specializing in cognitive resilience and developmental anxiety in young learners.",
    extendedBio: "Ph.D. in Developmental Psychology from Delhi University. Conducts evidence-based research on reducing peer bullying, toxic masculinity, and body stigma in state schools.",
    focusArea: "Empirical impact assessment & trauma-informed curriculum",
    languages: "Hindi, English, Punjabi",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKJE0SdmWTcjI1gLnWKQ7sPQciNJzAyvWVcNr-w4552M16NKnjvYip9gn0fUiVbuXz_I-4Ye_P7gKLsANot9vLLkFUqrLj8mlb9LHz5aeWnome5fWF6INStgi9_JRyywSUL4Y4LCUD8M4LyTEx7XDucsFtyOHEe9xgBsB5gCwBBe4tIVrmiOl_mdv0Iml4viMVqs9PuOuFhBkOLhpeBwVlYbHMh-MSFydZsJ7zMbka",
    category: "core"
  },
  {
    id: "sunita-patel",
    name: "Sunita Patel",
    role: "Grassroots Program Coordinator",
    tagline: "Trained 1,200+ ASHA & Anganwadi Workers",
    bio: "Community advocate and field trainer mobilizing mothers' collectives, Anganwadi networks, and rural youth peer circles.",
    extendedBio: "With 15+ years in frontline civic leadership across western Gujarat and Rajasthan, Sunita mediates critical trust dialogues with conservative local panchayats and village elders.",
    focusArea: "Village councils & local stakeholder buy-in",
    languages: "Hindi, Gujarati, Marwari",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFIfUmU3ICL6R9__B0_pLWTM_6xfox9sd8HzqAAKOFEnBaCuSFZSwInMECHcr2H1-flKd06iPcl-sw-yplzowlMt-j4h8pWN8AIn8MC5HetKgrUR2DQzTsHS9nJsmDg7GlwRIqpCjClMCgu1TuA4kPmgUClk55P0ObSlBgu970-n-cGhAH2pqhAAwriLRSVvawv445OmVpBHInk_vc4VomBnx9NdCG8Frlx0OWCoYC",
    category: "core"
  },
  {
    id: "rohan-varma",
    name: "Rohan Varma",
    role: "Visual Storyteller & Comic Designer",
    tagline: "Creator of the Pehal Comic Universe",
    bio: "Illustrator and graphic novelist behind the visual architecture of Pehal, translating complex health concepts into accessible storytelling.",
    extendedBio: "National Institute of Design (NID) alumnus whose graphic works have been exhibited at comic arts festivals in India and Berlin. Passionate about de-stigmatizing medical illustration through indie comics.",
    focusArea: "Visual pedagogy & accessible indie comics",
    languages: "Hindi, English, Bengali",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsmF25apOtVLnnKM-TbkI8QbY4T0gFlKjUCfv5o49BJ1LRKFKWsTo7X7YVQwbaZu_0ht0cWuVSQCLfNQleoCNJxhHw64V4t8RFA6sfcRK7-ZmIIYu1ipU5bbhuj5-JCqS9FW0OcspZwJ3yQR-JW1wmJAaiSFXYjsHAcV4OZOn8Wjh8zeYu-wR9VMDhNsR5JJeMyzuZJsAv_0PrLO9URPNFVkYRtOuIpJ_dvo5J2irB",
    category: "core"
  },
  {
    id: "kavita-verma",
    name: "Kavita Verma",
    role: "Lead Field Educator, Gurugram Hub",
    tagline: "500+ Co-ed Classroom Circles",
    bio: "Pioneering participatory workshops breaking gender barriers between adolescent boys and girls in state government schools.",
    extendedBio: "Specialist in de-escalating classroom tension and fostering empathy between adolescent boys and girls during sensitive puberty discussions.",
    focusArea: "Co-ed youth circles & empathy training",
    languages: "Hindi, Haryanvi, English",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZwcoFJqz3ItquD56mGOBdDVWFa65Zky3DrgqhfdXRolAe4429k93Pbn0bQ3EydABGPTgxAlFMeDK_w3_iKxdjLTKfaUN4D-t0vZB4JzYsumkXo_JFo5kfZpqSAiSRDVdS7JkjE7G4X7wqB_nm5EtYjoJrj5Ov_J_Z7iW7I-2M0rQCeJZ3fO5N0LnwU3yBPrxIUr0yAmoiO2eJTJlflGnRDGQz5NiDS30bpQIpIa7g",
    category: "facilitators"
  },
  {
    id: "mohammad-zaid",
    name: "Mohammad Zaid",
    role: "Correctional Facilities Program Lead",
    tagline: "2,500+ Young Incarcerated Men Reached",
    bio: "Leading transformative dialogue circles inside juvenile justice facilities and correctional institutions across Delhi-NCR and UP.",
    extendedBio: "Focuses on addressing emotional repression, toxic masculinity, rehabilitation, and resolving intergenerational cycles of violence.",
    focusArea: "Correctional facilities & reformatory interventions",
    languages: "Hindi, Urdu, English",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUo7Vv7JzPsFf1mqj32J7miwu41gHPNPZSbZSjR73KYxNhB68SElZSRygdHSSmUAq-mR2XUo2u0s-L9T3q7LpTj3E7n36sJ2m7wZ1d4",
    category: "facilitators"
  }
]

