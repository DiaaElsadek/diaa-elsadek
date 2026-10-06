export interface ExperienceItem {
  id: string;
  role: string;
  type: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  tagline: string;
  responsibilities: string[];
  technologies: string[];
  deliverables: {
    name: string;
    description: string;
    url?: string;
  }[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "freelance-fullstack",
    role: "Full-Stack Web Developer",
    type: "Freelance, Remote",
    company: "Freelance Engineering",
    location: "Remote",
    period: "Feb 2024 — Present",
    current: true,
    tagline: "Owning production products end to end directly with clients and stakeholders.",
    responsibilities: [
      "Own freelance projects end to end with no dedicated team: requirements, architecture, API and database design, UI, and production deployment on Vercel.",
      "Build backends in Node.js/Express and ASP.NET Core using clean architecture and OOP, exposing REST APIs consumed by React frontends.",
      "Work directly with clients and stakeholders to turn business requirements into shipped products, including Apex Gym, a responsive website delivered to a real gym client and built to run locally per their requirements (apex-gym-sandy.vercel.app).",
    ],
    technologies: [
      "React",
      "Next.js",
      "ASP.NET Core",
      "Node.js",
      "Express.js",
      "SQL Server",
      "MongoDB",
      "TypeScript",
      "C#",
      "REST APIs",
      "Tailwind CSS",
      "Vercel",
    ],
    deliverables: [
      {
        name: "Apex Gym Commercial Platform",
        description: "Responsive website delivered to a real gym client and built to run locally per their requirements.",
        url: "https://apex-gym-sandy.vercel.app",
      },
      {
        name: "EduCenter Multi-Tenant SaaS",
        description: "Multi-tenant platform for educators with tenant data isolation and student management.",
        url: "https://educenter.tech",
      },
      {
        name: "Al-Anis Healthcare Marketplace",
        description: "Healthcare provider marketplace with booking core, shift-based pricing, and ASP.NET Core REST API.",
        url: "https://al-anis.vercel.app",
      },
      {
        name: "Z-Sports Facility Booking",
        description: "Sports facility booking platform with court discovery and scheduling conflict logic.",
        url: "https://z-sports-eta.vercel.app",
      },
      {
        name: "UniStream22 University Platform",
        description: "Academic collaboration hub centralizing course materials, announcements, and schedules.",
        url: "https://uni-stream22.vercel.app",
      },
    ],
  },
];
