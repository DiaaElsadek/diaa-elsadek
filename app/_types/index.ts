export interface Metric {
  label: string
  value: string
}

export interface ArchitectureItem {
  title: string
  description: string
  items: string[]
}

export interface KeyDecision {
  decision: string
  why: string
  alternativeConsidered: string
}

export interface ChallengeSolution {
  challenge: string
  solution: string
}

export interface GalleryItem {
  src: string
  caption: string
}

export interface CaseStudy {
  overview: string
  problem: string
  architectureDetails: ArchitectureItem[]
  keyDecisions: KeyDecision[]
  challengesAndSolutions: ChallengeSolution[]
  impact: string[]
  metrics?: Metric[]
  gallery?: GalleryItem[]
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  summary: string
  role: string
  period: string
  status: string
  tier: 1 | 2 | 3
  stack: string[]
  architecture: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  coverImage: string
  highlights: string[]
  caseStudy?: CaseStudy
}

export interface ExperienceDelivery {
  project: string
  description: string
  url?: string
}

export interface ExperienceItem {
  role: string
  organization: string
  period: string
  type: string
  location: string
  description: string
  achievements: string[]
  deliveries?: ExperienceDelivery[]
  skills: string[]
}

export interface SkillItem {
  name: string
  highlight?: boolean
  context?: string
}

export interface SkillCategory {
  category: string
  description: string
  skills: SkillItem[]
}

export interface ProfileStat {
  label: string
  value: string
  detail: string
}

export interface Profile {
  name: string
  legalName: string
  title: string
  subtitle: string
  location: string
  email: string
  github: string
  linkedin: string
  resumeUrl: string
  positioningStatement: string
  aboutParagraphs: string[]
  stats: ProfileStat[]
}
