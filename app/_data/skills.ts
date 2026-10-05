import { SkillCategory } from '@/app/_types'

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    description: 'Building accessible, fast, and maintainable user interfaces with modern React paradigms.',
    skills: [
      { name: 'React', highlight: true, context: 'Modern hooks, state machines, component lifecycles' },
      { name: 'Next.js', highlight: true, context: 'App Router, Server Components, SSR & SEO' },
      { name: 'TypeScript', highlight: true, context: 'Strict typing, domain models, generic APIs' },
      { name: 'Tailwind CSS', context: 'Design token systems, responsive fluid layouts' },
      { name: 'HTML5 & Semantic Web', context: 'Accessible DOM hierarchy, SEO optimization' },
      { name: 'Bi-directional (RTL/LTR)', context: 'Native Arabic and English typography handling' },
    ],
  },
  {
    category: 'Backend Architecture',
    description: 'Designing reliable server backends, scalable REST APIs, and real-time communication layers.',
    skills: [
      { name: 'ASP.NET Core', highlight: true, context: 'C#, Clean Architecture, Dependency Injection' },
      { name: 'Node.js & Express', highlight: true, context: 'Asynchronous event loop, modular middleware' },
      { name: 'RESTful API Design', highlight: true, context: 'Resource modeling, status codes, contract integrity' },
      { name: 'SignalR (WebSockets)', highlight: true, context: 'Bidirectional real-time hub communication' },
      { name: 'Swagger / OpenAPI', context: 'Interactive documentation and contract testing' },
      { name: 'Authentication & RBAC', context: 'JWT tokens, role guards, tenant session scoping' },
    ],
  },
  {
    category: 'Databases & Persistence',
    description: 'Relational data integrity alongside high-flexibility document stores.',
    skills: [
      { name: 'Microsoft SQL Server', highlight: true, context: 'Relational schemas, constraints, indexing' },
      { name: 'Entity Framework Core', highlight: true, context: 'Code-First migrations, optimized LINQ queries' },
      { name: 'MongoDB', context: 'Document modeling, nested collections, aggregation' },
      { name: 'Database Normalization', context: '3NF principles, foreign keys, transaction safety' },
    ],
  },
  {
    category: 'System Design & Methods',
    description: 'Principles guiding maintainable codebases that can evolve without painful rewrites.',
    skills: [
      { name: 'Clean Architecture & OOP', highlight: true, context: 'Decoupled domain layers, SOLID design' },
      { name: 'Multi-Tenant SaaS Design', highlight: true, context: 'Tenant isolation, workspace routing' },
      { name: 'Competitive Programming', highlight: true, context: 'ICPC ECPC Hon. Mention, efficient algorithms' },
      { name: 'Requirement Analysis', context: 'Translating client business needs into technical specs' },
    ],
  },
  {
    category: 'DevOps & Tooling',
    description: 'Tools supporting reproducible development workflows and automated deployments.',
    skills: [
      { name: 'Git & GitHub', highlight: true, context: 'Version control, atomic commits, pull requests' },
      { name: 'Docker', context: 'Containerized environments for consistent execution' },
      { name: 'CI/CD & GitHub Actions', context: 'Automated test and build verification pipelines' },
      { name: 'Vercel Deployment', context: 'Edge routing, environment variable management' },
      { name: 'Postman & API Testing', context: 'Endpoint profiling, payload validation' },
    ],
  },
]
