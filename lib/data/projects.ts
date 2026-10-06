export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  highlights: string[];
  metrics: ProjectMetric[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  caseStudyHref?: string;
  accentColor: string;
  glowColor: string;
  featured: boolean;
  mockup: "educenter" | "alanis" | "zsports" | "unistream" | "apexgym";
}

export const PROJECTS: Project[] = [
  {
    id: "educenter",
    name: "EduCenter",
    category: "Multi-Tenant SaaS Platform for Educators",
    year: "2026",
    tagline: "Store-builder model for education — independent branded academies on shared infrastructure.",
    description:
      "Architected a multi-tenant SaaS platform that lets individual teachers launch and run independent, branded education businesses on shared infrastructure, similar in model to store-builder platforms but built for education.",
    highlights: [
      "Architected a multi-tenant SaaS platform that lets individual teachers launch and run independent, branded education businesses on shared infrastructure, similar in model to store-builder platforms but built for education.",
      "Designed multi-tenancy and tenant data isolation as core architectural concerns from the start, rather than adapting a single-teacher website.",
      "Built the modules a teacher needs to operate a business: student management, content monetization, and analytics dashboards.",
      "Integrated local payment acceptance and role-based access for teachers and students.",
      "Designed integration points for AI-powered educational tools and deployed the platform to production.",
    ],
    metrics: [
      { label: "Architecture", value: "Multi-Tenant SaaS" },
      { label: "Data Isolation", value: "Tenant Scoped" },
      { label: "Deployment", value: "Production Active" },
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "Multi-Tenancy",
    ],
    liveUrl: "https://educenter.tech",
    caseStudyHref: "#educenter",
    accentColor: "#6366F1",
    glowColor: "rgba(99, 102, 241, 0.14)",
    featured: true,
    mockup: "educenter",
  },
  {
    id: "al-anis",
    name: "Al-Anis",
    category: "Healthcare Service Marketplace & Booking Platform",
    year: "2025",
    tagline: "Healthcare provider marketplace with role-based workflows, scheduling, and ASP.NET Core API.",
    description:
      "Built a marketplace connecting users with healthcare providers (nurses), with role-based workflows for users, providers, and admins, including provider applications and approval and an admin dashboard.",
    highlights: [
      "Built a marketplace connecting users with healthcare providers (nurses), with role-based workflows for users, providers, and admins, including provider applications and approval and an admin dashboard.",
      "Implemented the booking core: provider availability, service requests, and shift-based service pricing.",
      "Developed the ASP.NET Core REST API (OTP-based authentication, payments, chat, reviews), documented with Swagger/OpenAPI, and the React frontend that consumes it.",
    ],
    metrics: [
      { label: "Backend Core", value: "ASP.NET Core & C#" },
      { label: "Database", value: "SQL Server & EF" },
      { label: "Documentation", value: "Swagger / OpenAPI" },
    ],
    tags: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Entity Framework Core",
      "React",
      "REST APIs",
      "Swagger/OpenAPI",
      "Tailwind CSS",
    ],
    liveUrl: "https://al-anis.vercel.app",
    repoUrl: "https://github.com/DiaaElsadek/al-anis",
    accentColor: "#0EA5E9",
    glowColor: "rgba(14, 165, 233, 0.14)",
    featured: true,
    mockup: "alanis",
  },
  {
    id: "z-sports",
    name: "Z-Sports",
    category: "Sports Facility Booking Platform",
    year: "2026",
    tagline: "Discover football and tennis courts with live availability and slot reservation logic.",
    description:
      "Built a booking platform where users and groups discover football and tennis courts and reserve time slots, with availability and scheduling logic.",
    highlights: [
      "Built a booking platform where users and groups discover football and tennis courts and reserve time slots, with availability and scheduling logic.",
      "Implemented the backend and database layer for facilities and reservations, with a responsive interface for the booking flow.",
      "Real-time court availability schedule with slot conflict resolution and instant reservation.",
    ],
    metrics: [
      { label: "Scheduling", value: "Zero-Collision Slots" },
      { label: "Venues", value: "Football & Tennis" },
      { label: "Status", value: "Production Deployed" },
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Booking Engine",
    ],
    liveUrl: "https://z-sports-eta.vercel.app",
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.14)",
    featured: false,
    mockup: "zsports",
  },
  {
    id: "unistream",
    name: "UniStream22",
    category: "University Collaboration Platform",
    year: "2025",
    tagline: "Academic centralization hub organizing course materials, schedules, and cohort discussion.",
    description:
      "Developed and deployed a hub that centralizes course materials, announcements, schedules, and discussion for a university cohort.",
    highlights: [
      "Developed and deployed a hub that centralizes course materials, announcements, schedules, and discussion for a university cohort.",
      "Tailored lecture schedule generator matching individual student lab & section groups.",
      "Single source of truth for course syllabi, assignments, and cohort academic communication.",
    ],
    metrics: [
      { label: "Scope", value: "University Cohort" },
      { label: "Uptime", value: "Production Deployed" },
      { label: "Delivery", value: "Real Student Use" },
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Collaboration",
      "Academic Hub",
    ],
    liveUrl: "https://uni-stream22.vercel.app",
    accentColor: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.14)",
    featured: false,
    mockup: "unistream",
  },
  {
    id: "apex-gym",
    name: "Apex Gym",
    category: "Commercial Client Web Solution",
    year: "2024",
    tagline: "Delivered to a real gym client — built to run locally per client requirements and deployed on Vercel.",
    description:
      "Work directly with clients and stakeholders to turn business requirements into shipped products, including Apex Gym, a responsive website delivered to a real gym client and built to run locally per their requirements.",
    highlights: [
      "Work directly with clients and stakeholders to turn business requirements into shipped products.",
      "Responsive website delivered to a real gym client and built to run locally per their requirements (apex-gym-sandy.vercel.app).",
      "Showcases facilities, membership tiers, trainer profiles, and member onboarding.",
    ],
    metrics: [
      { label: "Engagement", value: "Direct Client Shipped" },
      { label: "Runtime", value: "Local + Vercel" },
      { label: "Status", value: "Delivered Client Work" },
    ],
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Client Shipped",
      "Vercel",
    ],
    liveUrl: "https://apex-gym-sandy.vercel.app",
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.14)",
    featured: false,
    mockup: "apexgym",
  },
];
