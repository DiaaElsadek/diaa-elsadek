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
    type: "Freelance",
    company: "Independent Client Practice",
    location: "Remote",
    period: "Feb 2024 — Present",
    current: true,
    tagline: "Owning production web products end-to-end for real clients and modern platforms.",
    responsibilities: [
      "Own freelance projects end to end with no dedicated team: requirement discovery, architecture planning, database schema design, REST API engineering, responsive UI, and production deployment on Vercel.",
      "Build modular backends in Node.js/Express and ASP.NET Core using clean architecture and OOP principles, exposing robust REST APIs consumed by React frontends.",
      "Work directly with clients and stakeholders to turn ambiguous business requirements into high-performing, delivered software products.",
      "Delivered Apex Gym, a custom responsive web solution built for a real commercial gym client and engineered to operate both locally on-premises and live on Vercel.",
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
      "Tailwind CSS",
      "Vercel",
      "REST APIs",
    ],
    deliverables: [
      {
        name: "Apex Gym Commercial Platform",
        description: "Delivered to a real gym business; supports both offline/local execution and cloud hosting.",
        url: "https://apex-gym-sandy.vercel.app",
      },
      {
        name: "EduCenter SaaS Architecture",
        description: "Multi-tenant sovereign education platform with edge subdomain resolution.",
        url: "https://educenter.tech",
      },
      {
        name: "Al-Anis Healthcare Marketplace",
        description: "Healthcare provider booking and shift pricing engine built with ASP.NET Core and React.",
        url: "https://al-anis.vercel.app",
      },
    ],
  },
];
