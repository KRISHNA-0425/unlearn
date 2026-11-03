export interface DonationTier {
  id: string
  amountINR: number
  amountUSD: number
  title: string
  subtitle: string
  description: string
  perk: string
  popular?: boolean
  icon: string
}

export const DONATION_TIERS: DonationTier[] = [
  {
    id: "comic-kit",
    amountINR: 1000,
    amountUSD: 15,
    title: "Pehal Comic Kit Sponsor",
    subtitle: "Supplies 4 Full Printed Sets",
    description: "Directly sponsors 4 physical Pehal Comic Toolkits printed on recycled craft paper for students in rural government high schools.",
    perk: "Includes home-takeout worksheet for sibling peer learning",
    icon: "menu_book"
  },
  {
    id: "classroom-circle",
    amountINR: 2500,
    amountUSD: 30,
    title: "Underserved Classroom Circle",
    subtitle: "2-Hour Facilitated Safe Space",
    description: "Underwrites a complete 2-hour interactive dialogue circle for 35 adolescents led by trained community facilitators, unlearning gender orthodoxies.",
    perk: "Covers facilitator stipends, student snacks & safe-space materials",
    popular: true,
    icon: "groups"
  },
  {
    id: "peer-educator",
    amountINR: 5000,
    amountUSD: 65,
    title: "Youth Peer Educator Training",
    subtitle: "4-Week Leader Certification",
    description: "Full 4-week certification training for 2 youth grassroots leaders, equipping them with trauma-informed facilitation frameworks and civic rights modules.",
    perk: "Includes 6-month continuous mentorship by senior pedagogues",
    icon: "psychology"
  }
]

export const FINANCIAL_BREAKDOWN = [
  { label: "Classroom & Field Programs", percentage: 85, color: "#173B63", description: "On-the-ground facilitators, classroom space rentals, travel to remote schools, and interactive dialogue materials." },
  { label: "Pehal Toolkit Eco-Printing", percentage: 7, color: "#F59E42", description: "Offset eco-printing of illustrated graphic narrative booklets, regional dialect translations, and home activity decks." },
  { label: "Facilitator Mentorship", percentage: 5, color: "#40608A", description: "Clinical psychology supervision, curriculum adaptation for marginalized children, and continuous facilitator welfare." },
  { label: "Audits & Administration", percentage: 3, color: "#695C52", description: "Statutory 80G/12A filings, external KPMG auditing, zero-cost transparency dashboards, and donor receipt infrastructure." }
]

