import { ExperienceItem } from '@/app/_types'

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack Web Developer',
    organization: 'Freelance & Contract Engineering',
    period: 'Feb 2024 – Present',
    type: 'Self-Employed / Remote',
    location: 'Egypt / Remote',
    description:
      'Partnering directly with business owners, founders, and educators to deliver production web applications end-to-end. Responsibilities span requirement discovery, system design, database modeling, RESTful API architecture, frontend implementation, and cloud deployment.',
    deliveries: [
      {
        project: 'EduCenter',
        description:
          'Engineered a multi-tenant SaaS platform enabling instructors to run standalone digital academies with automated WhatsApp grade & attendance alerts.',
        url: 'https://educenter.tech',
      },
      {
        project: 'Al-Anis Healthcare',
        description:
          'Architected a 3-role service marketplace coordinating patient shift bookings, real-time caregiver chat via SignalR, and multi-channel payments.',
        url: 'https://al-anis.vercel.app',
      },
      {
        project: 'Apex Gym',
        description:
          'Delivered a responsive brand and membership web platform for a real commercial gym client, tailored to local customer acquisition.',
        url: 'https://apex-gym-sandy.vercel.app',
      },
      {
        project: 'Z-Sports',
        description:
          'Built a sports facility reservation portal with dynamic court scheduling, multi-sport filters, and an integrated player points program.',
        url: 'https://z-sports-eta.vercel.app',
      },
    ],
    achievements: [
      'Designed and shipped production products from blank repositories to public domains',
      'Developed backend services in both ASP.NET Core (C#) and Node.js/Express (TypeScript)',
      'Implemented clean separation of concerns, repository patterns, and robust role-based access control',
      'Maintained direct client communication, gathering feedback and iterating rapidly on business requirements',
    ],
    skills: [
      'React',
      'Next.js',
      'ASP.NET Core',
      'Node.js',
      'TypeScript',
      'C#',
      'SQL Server',
      'MongoDB',
      'REST APIs',
      'SignalR',
      'Tailwind CSS',
    ],
  },
]

export interface EducationItem {
  degree: string
  institution: string
  period: string
  location: string
  details: string
}

export const education: EducationItem[] = [
  {
    degree: 'B.Sc. in Computer and Information Science',
    institution: 'Higher Technological Institute (HTI)',
    period: '2022 – 2026',
    location: '10th of Ramadan City, Egypt',
    details:
      'Rigorous curriculum covering Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks, Operating Systems, and Distributed Computing.',
  },
]

export interface AchievementItem {
  title: string
  issuer: string
  date: string
  description: string
  badge?: string
}

export const achievementsAndTraining: AchievementItem[] = [
  {
    title: 'ICPC ECPC 2024 Qualifications — Honorable Mention',
    issuer: 'Egyptian Collegiate Programming Contest (ICPC)',
    date: 'Jul 2024',
    description:
      'Demonstrated advanced problem-solving, algorithm optimization, and data structure proficiency under strict competitive contest time constraints.',
    badge: 'Competitive Programming',
  },
  {
    title: 'DEPI Round 3: Full-Stack ASP.NET Web Development',
    issuer: 'Digital Egypt Pioneers Initiative (DEPI)',
    date: 'Jun 2025 – Dec 2025',
    description:
      'Comprehensive professional specialization in enterprise C#, ASP.NET Core, Entity Framework Core, SQL Server, and Clean Architecture standards.',
    badge: 'Enterprise .NET',
  },
  {
    title: 'Algorithms Instructor — Level 0',
    issuer: 'ICPC Community HTI',
    date: 'Jan 2024 – May 2024',
    description:
      'Taught foundational programming logic, algorithmic time complexity, and data structures to junior university students.',
    badge: 'Teaching & Mentorship',
  },
  {
    title: 'Route Academy: Frontend Development with React.js',
    issuer: 'Route IT Training Center',
    date: 'Feb 2024 – Aug 2024',
    description:
      'Deep dive into modern React architecture, state management patterns, SPA routing, API integration, and production UI engineering.',
    badge: 'Frontend Engineering',
  },
  {
    title: 'Problem Solving in Python & C++',
    issuer: 'Kian Academy',
    date: 'Jul 2023 – Sep 2023',
    description:
      'Intensive training in algorithmic techniques including recursion, dynamic programming, graph traversal, and greedy algorithms.',
    badge: 'Algorithms',
  },
]
