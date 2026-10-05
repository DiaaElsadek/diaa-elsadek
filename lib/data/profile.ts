export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  username?: string;
}

export const PROFILE = {
  name: "Diaa Samir Abdelazeem Elsadek",
  shortName: "Diaa Elsadek",
  role: "Full-Stack Developer",
  specialization: "React, Next.js, ASP.NET Core",
  tagline: "Building Products, Not Just Websites.",
  location: "Zagazig, Egypt",
  timezone: "Africa/Cairo",
  phone: "+201117244172",
  email: "diaaelsadek1@gmail.com",
  website: "https://diaaelsadek.me",
  github: "https://github.com/DiaaElsadek",
  linkedin: "https://linkedin.com/in/diaaelsadek",
  summary:
    "Full-Stack Developer specializing in JavaScript/TypeScript and .NET: React, Next.js, Node.js, Express, and MongoDB on one side, ASP.NET Core and SQL Server on the other. Owns production products end to end, from architecture and REST API design to deployment, including a multi-tenant SaaS platform for educators, a healthcare service marketplace with role-based workflows, and a facility booking system. Freelance since February 2024, working directly with clients and stakeholders.",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Identity", href: "#identity" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Systems", href: "#systems" },
  { label: "Stack", href: "#stack" },
  { label: "Credentials", href: "#credentials" },
  { label: "Principles", href: "#principles" },
  { label: "Reviews", href: "#testimonials" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: PROFILE.github, username: "DiaaElsadek" },
  { label: "LinkedIn", href: PROFILE.linkedin, username: "diaaelsadek" },
  { label: "Email", href: `mailto:${PROFILE.email}`, username: PROFILE.email },
];
