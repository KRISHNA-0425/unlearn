export interface MediaItem {
  id: string
  title: string
  outlet: string
  date: string
  category: 'feature' | 'news' | 'interview' | 'editorial'
  summary: string
  url: string
  readTime: string
  image: string
}

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "media-1",
    title: "Unlearning Toxic Masculinity in Youth Detention Homes",
    outlet: "The Hindu",
    date: "September 18, 2024",
    category: "feature",
    summary: "How Project Unlearn's facilitator circles in Delhi correctional facilities are helping incarcerated young men process emotional grief and unlearn violent reflexes.",
    url: "#",
    readTime: "6 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDET4obqItGpAOkvMacTWaNkH3gmk2s7m05TbAt_G7SX3ynh4_CyBxchALrSuNPmoIQUvmOi8Gc9e4jCBWbefwkiwK3XFElBtjvK3NtevUx8BYhOVTEwJCdgsSeBSH-AHC6cS3x6R0UrKM2hIrcS5QltUjivcud4b3-HN0efyljqUCfZ3kv2Dm4aiIqUIbLHkc5aXtt_EbQVB1Si12ygIH1AJ9pkLv5P2L527PEqdwp"
  },
  {
    id: "media-2",
    title: "Why Adolescent Health Needs Graphic Novels Over Moral Lectures",
    outlet: "The Indian Express",
    date: "July 24, 2024",
    category: "editorial",
    summary: "An in-depth look at the Pehal Toolkit: replacing dry textbook diagrams with character-driven indie comics that speak directly to adolescents in their vernacular.",
    url: "#",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcSiNbMgMAZjUEQeRObzUPlQdPYaMPSQPvZrUwUYyuRykkgWzfjxMBWdHRuYwqTIcG0Kn7rD77kra7QtxCWjmPAjg2dOzj6vM6n9GGc1SGWZuXe-9u07HX_DyAhqnWDpx9zdDM7e0ZX2xqWJg6wk2Rg4fxs9-IU4FPg5kR3sy1DPsKzObHaLft8rveBNOYVi7xOk0hOIJyTnHeb1n-iks2A88YwNQJRnibheGEJsdQ"
  },
  {
    id: "media-3",
    title: "Dismantling Menstrual Taboos in Haryana Panchayats",
    outlet: "NDTV Social Impact Spotlight",
    date: "May 12, 2024",
    category: "news",
    summary: "How young girls in Bhiwani used comic books to start open conversations with grandmothers and local village elders under banyan tree circles.",
    url: "#",
    readTime: "4 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFg4aE6qWiedLibpFc0ywIkuDQfEiiRbCq23tbEeEpdT_tk3lZltuQUmYmVoeYdECeAU7cLbL30mUkVyEKFMdoI4A0fhCe2aoQCAIq62RoHOLcuIT85q_lhWuS-FSPSaVviljRAxpHj3NcG0kYciIfErqMGKCJbOrsOEt18QQIG2jhtTkqkx8VwnUz54E012s5ANYGGcWOFvnhiPF0lfYr2ZKPxrIgKv-Pw-h56LNu"
  },
  {
    id: "media-4",
    title: "Inside Project Unlearn's Peer Dialogue Experiment in Delhi Government Schools",
    outlet: "Scroll.in",
    date: "March 30, 2024",
    category: "feature",
    summary: "Replacing awkward assembly lectures with co-ed safe spaces where adolescent boys and girls talk openly about body changes, boundaries, and mutual consent.",
    url: "#",
    readTime: "7 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKslgNI8JJmb42BhBmtjT7d8h9T1Bi0Tgt8NfUcfoZmJXkbt6FZpaXVHdTJ1ZC-7UtG37mSyM6cR4r_NECN6bRCRKvFpnOBmeY7GIv3mkRT5Ftowy2-Mo8ZsKBy9R-Qq7lyKaJQg7jpEzJHIw_FAnhrW6Imq1IbSgmeJ7NFSzvdd7rclpxE4bvR6r0QdaT0b84z_Rc8ptElHuoyXpEQlHOAuAzaotKCczfofQYVcQP"
  },
  {
    id: "media-5",
    title: "From Silence to Solidarity: How Indian Teens are Reimagining Bodily Autonomy",
    outlet: "Youth Ki Awaaz",
    date: "January 15, 2024",
    category: "interview",
    summary: "Interview with Aanya Sharma and Dr. Kabir Mehta on why traditional sex education failed Indian teenagers and how empathy-first pedagogies are succeeding.",
    url: "#",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsmF25apOtVLnnKM-TbkI8QbY4T0gFlKjUCfv5o49BJ1LRKFKWsTo7X7YVQwbaZu_0ht0cWuVSQCLfNQleoCNJxhHw64V4t8RFA6sfcRK7-ZmIIYu1ipU5bbhuj5-JCqS9FW0OcspZwJ3yQR-JW1wmJAaiSFXYjsHAcV4OZOn8Wjh8zeYu-wR9VMDhNsR5JJeMyzuZJsAv_0PrLO9URPNFVkYRtOuIpJ_dvo5J2irB"
  }
]

