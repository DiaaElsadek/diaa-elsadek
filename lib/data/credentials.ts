export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export type CredentialKind = "award" | "certification" | "teaching" | "training";

export interface CredentialItem {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  period: string;
  kind: CredentialKind;
  badge?: string;
  description: string;
  skills: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: string;
  percentage: number;
}

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Science (B.Sc.)",
  field: "Computer and Information Science",
  institution: "Higher Technological Institute (HTI)",
  location: "10th of Ramadan City, Egypt",
  period: "2022 — 2026",
  status: "Senior Year",
  description:
    "Comprehensive academic curriculum focusing on computing foundations, data structures, algorithms, computer architecture, database management systems, software engineering, and distributed systems.",
  highlights: [
    "Rigorous coursework in computational complexity, database design, and object-oriented modeling.",
    "Active participant and student instructor in the HTI ICPC competitive programming community.",
  ],
};

export const CREDENTIALS: CredentialItem[] = [
  {
    id: "depi-aspnet",
    title: "Full-Stack ASP.NET Web Development",
    subtitle: "Digital Egypt Pioneers Program (DEPI), Round 3",
    issuer: "Ministry of Communications and Information Technology (MCIT)",
    period: "Jun 2025 — Dec 2025",
    kind: "certification",
    badge: "Official Government Program",
    description:
      "Intensive 6-month specialized program covering enterprise ASP.NET Core web development, clean architecture, Entity Framework Core, SQL Server optimization, CI/CD, and agile project delivery.",
    skills: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework Core", "Clean Architecture", "REST APIs"],
  },
  {
    id: "icpc-award-2024",
    title: "Honorable Mention Award",
    subtitle: "The 2024 ICPC ECPC Qualifications",
    issuer: "International Collegiate Programming Contest (ICPC)",
    period: "Jul 2024",
    kind: "award",
    badge: "Competitive Honor",
    description:
      "Awarded Honorable Mention in the Egyptian Collegiate Programming Contest (ECPC) Qualifications, solving complex algorithmic, dynamic programming, graph, and number theory problems under time pressure.",
    skills: ["C++", "Algorithms", "Data Structures", "Dynamic Programming", "Time Complexity Optimization"],
  },
  {
    id: "route-react",
    title: "Frontend Development with React.js",
    subtitle: "Professional Frontend Track",
    issuer: "Route Academy",
    period: "Feb 2024 — Aug 2024",
    kind: "certification",
    badge: "Industry Certified",
    description:
      "Comprehensive training in modern frontend engineering: React 18/19, component lifecycles, custom hooks, state management, Next.js fundamentals, and Tailwind CSS responsive design systems.",
    skills: ["React", "JavaScript (ESNext)", "Tailwind CSS", "REST Integration", "Responsive Design"],
  },
  {
    id: "icpc-instructor",
    title: "ICPC Community Instructor (Level 0) & Trainee",
    subtitle: "Levels 0 & 1 Completed; Instructor for Level 0",
    issuer: "Higher Technological Institute (HTI) ICPC Community",
    period: "Jan 2024 — May 2024",
    kind: "teaching",
    badge: "Community Leadership",
    description:
      "Completed intensive Levels 0 and 1 algorithmic training. Selected as an Instructor to teach junior students foundational data structures, complexity analysis, and problem-solving methodologies in C++.",
    skills: ["C++", "Mentorship", "Algorithms", "Data Structures", "Technical Communication"],
  },
  {
    id: "kian-problem-solving",
    title: "Problem Solving with Python & C++",
    subtitle: "Foundations of Algorithmic Thinking",
    issuer: "Kian Academy",
    period: "Jul 2023 — Sep 2023",
    kind: "training",
    badge: "Foundational Track",
    description:
      "Structured problem solving covering computational logic, control flows, recursion, asymptotic notation, and algorithm design using both Python and C++.",
    skills: ["Python", "C++", "Algorithmic Foundations", "Recursion", "Complexity Analysis"],
  },
];

export const SPOKEN_LANGUAGES: LanguageItem[] = [
  {
    language: "Arabic",
    proficiency: "Native",
    level: "Native Speaker",
    percentage: 100,
  },
  {
    language: "English",
    proficiency: "Very Good",
    level: "Professional Working Proficiency",
    percentage: 85,
  },
];
