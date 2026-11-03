export interface NavItem {
  label: string
  path: string
  hasDropdown?: boolean
  dropdownItems?: { label: string; path: string; description?: string }[]
}

export const LOGO_URL = "/assets/logo.png"

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Who We Are', path: '/about#who-we-are', description: '8 years of primary prevention & reform' },
      { label: 'Our Journey', path: '/about#journey', description: 'From Tihar Jail No. 5 to community leaders' },
      { label: 'Mission & Vision', path: '/about#mission-vision', description: 'Primary prevention of gender-based violence' },
      { label: 'Two-Pronged Model', path: '/our-work#models', description: 'Prison reformation + community prevention' },
      { label: 'Meet The Team', path: '/team', description: 'Educators, facilitators and Unlearn leaders' },
      { label: 'Our Partners', path: '/about#partners', description: 'Correctional & institutional allies' },
    ],
  },
  { label: 'Pehal Toolkit', path: '/pehal-toolkit' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'The Change Journal', path: '/journal' },
  { label: 'Media', path: '/media' },
]

export const FOOTER_LINKS = {
  initiatives: [
    { label: 'Pehal Kit: 7 Themes & 20 Topics', path: '/pehal-toolkit#curriculum' },
    { label: '4 Gender Comics (POCSO, Dowry, Consent)', path: '/pehal-toolkit#tools' },
    { label: 'Consent Snakes & Ladders Board Game', path: '/pehal-toolkit#tools' },
    { label: 'Online Dating Jenga & Playing Cards', path: '/pehal-toolkit#tools' },
    { label: 'Prison Reformation Model (Tihar Jail No. 5)', path: '/our-work#prison-model' },
    { label: 'Community Prevention & Unlearn Leaders', path: '/our-work#community-model' },
  ],
  organization: [
    { label: 'Who We Are', path: '/about' },
    { label: 'Our Journey (2017 – 2026)', path: '/about#journey' },
    { label: 'Mission & Primary Prevention', path: '/about#mission-vision' },
    { label: 'The GEM Scale M&E Framework', path: '/our-work#evaluation' },
    { label: 'Core Collective & Facilitators', path: '/team' },
    { label: 'News & Press Mentions', path: '/media' },
  ],
  action: [
    { label: 'Donate to Project Unlearn', path: '/donate' },
    { label: 'Sponsor a Pehal Game Kit', path: '/donate' },
    { label: 'Train an Unlearn Youth Leader', path: '/donate' },
    { label: 'Invite Workshop to School or Ward', path: '/our-work#invite' },
  ],
  contact: {
    email: 'projectunlearn20@gmail.com',
    phone: '+91 8527571446',
    website: 'https://www.projectunlearn.in/',
    location: 'New Delhi & NCR, India',
    workingRegions: 'Tihar Prisons (Jail No. 5) • Delhi/NCR High-Crime Neighborhoods • Haryana • Uttar Pradesh',
  },
  social: [
    { name: 'YouTube', href: 'https://youtu.be/r2cnaq5VJdE', icon: 'smart_display' },
    { name: 'Instagram', href: 'https://instagram.com/projectunlearn', icon: 'photo_camera' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/projectunlearn', icon: 'work' },
    { name: 'Twitter/X', href: 'https://x.com/projectunlearn', icon: 'share' },
  ]
}
