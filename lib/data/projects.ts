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
    tagline: "Store-builder model for education — launch sovereign, branded academies on shared infrastructure.",
    description:
      "Architected a multi-tenant SaaS platform that lets individual educators run independent teaching businesses. Designed multi-tenancy and data isolation as core architectural concerns from the start, featuring tenant-scoped MongoDB queries, edge wildcard subdomain resolution, local payment gateways, and AI integration points.",
    highlights: [
      "Edge subdomain resolution (*.educenter.tech) with tenant-isolated database scoping.",
      "Complete educator business engine: student management, content monetization, and analytics dashboards.",
      "Integrated regional payment acceptance (Paymob, Fawry, wallets) with role-based access for teachers and students.",
      "Designed extensible integration hooks for AI-driven pedagogical tools; deployed to production.",
    ],
    metrics: [
      { label: "Tenant Model", value: "Edge Wildcard DNS" },
      { label: "Data Isolation", value: "Compound Scoped Keys" },
      { label: "Infra Efficiency", value: "80% Cost Reduction" },
    ],
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "Multi-Tenancy",
      "Paymob",
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
    category: "Healthcare Service Marketplace & Booking",
    year: "2025",
    tagline: "Bridging patients with verified healthcare nurses through role-based workflows and scheduling.",
    description:
      "Engineered an on-demand healthcare marketplace connecting patients with qualified home-care nurses. Implemented strict role-based workflows across patients, care providers, and administrators, backed by a high-performance ASP.NET Core REST API with OTP verification, shift pricing, and real-time scheduling.",
    highlights: [
      "Role-based workflows for users, providers, and admins with provider credential validation and admin dashboard.",
      "Booking engine managing provider availability matrices, service requests, and shift-based pricing models.",
      "Robust ASP.NET Core REST API featuring OTP authentication, payment workflows, reviews, and interactive chat.",
      "Clean architecture with Entity Framework Core, SQL Server, and full Swagger/OpenAPI documentation.",
    ],
    metrics: [
      { label: "Backend Core", value: "ASP.NET Core & EF" },
      { label: "Auth Flow", value: "OTP Phone Verification" },
      { label: "Architecture", value: "Clean Onion Pattern" },
    ],
    tags: [
      "ASP.NET Core",
      "React",
      "C#",
      "SQL Server",
      "Entity Framework",
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
    tagline: "Frictionless discovery and time-slot reservation for football and tennis courts.",
    description:
      "Built a sports venue booking platform where athletes and groups discover nearby courts, view interactive real-time availability slots, and confirm reservations with conflict-free scheduling logic.",
    highlights: [
      "Dynamic calendar engine handling concurrent court slots, buffer times, and group bookings.",
      "Relational scheduling and facility catalog backend with instant conflict detection.",
      "Highly responsive mobile-first booking interface tailored for fast on-the-go reservations.",
    ],
    metrics: [
      { label: "Scheduling", value: "Zero-Collision Slots" },
      { label: "Venues", value: "Football & Tennis" },
      { label: "UI Flow", value: "Mobile Optimized" },
    ],
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Booking System",
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
    tagline: "Centralized academic hub organizing course materials, schedules, and cohort discussions.",
    description:
      "Developed and deployed an academic collaboration platform designed to eliminate scattered study resources. Serves as a single source of truth for course syllabi, announcements, schedules, and peer discussions for a university cohort.",
    highlights: [
      "Unified repository for lecture archives, syllabus downloads, and cohort announcements.",
      "Integrated academic schedule and exam calendar with real-time updates.",
      "Categorized discussion boards facilitating peer-to-peer technical problem solving.",
    ],
    metrics: [
      { label: "Scope", value: "University Cohort" },
      { label: "Uptime", value: "Production Deployed" },
      { label: "Speed", value: "Edge Cached" },
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
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
    category: "Client Commercial Website",
    year: "2024",
    tagline: "Delivered to a real gym client — engineered for local operation and production deployment.",
    description:
      "Designed, developed, and delivered a responsive web solution directly to a fitness gym business client. Customized to run both locally on client machines per their operational requirements and in production on Vercel.",
    highlights: [
      "Collaborated directly with business stakeholders to convert gym operational needs into an interactive UI.",
      "Delivered offline/local runtime capability alongside cloud production hosting on Vercel.",
      "Showcases training tiers, trainer credentials, scheduling, and membership onboarding.",
    ],
    metrics: [
      { label: "Delivery", value: "Direct Client Shipped" },
      { label: "Flexibility", value: "Local + Cloud Host" },
      { label: "Design", value: "High-Contrast Fitness UI" },
    ],
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Client Shipped",
      "Vercel",
      "Responsive",
    ],
    liveUrl: "https://apex-gym-sandy.vercel.app",
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.14)",
    featured: false,
    mockup: "apexgym",
  },
];
