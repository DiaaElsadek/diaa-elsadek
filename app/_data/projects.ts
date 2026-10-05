import { Project } from '@/app/_types'

export const projects: Project[] = [
  {
    slug: 'educenter',
    title: 'EduCenter',
    subtitle: 'Multi-Tenant SaaS Platform for Digital Academies',
    summary:
      'A multi-tenant SaaS platform empowering educators to launch independent digital academies, manage student cohorts, publish structured courses and exams, and automate communication via WhatsApp.',
    role: 'Full-Stack Architecture & Implementation',
    period: '2024 – Present',
    status: 'Live in Production',
    tier: 1,
    featured: true,
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'PostgreSQL / MongoDB'],
    architecture:
      'Multi-tenant architecture with tenant domain resolution, isolated instructor workspaces, student progress tracking, automated webhook-driven messaging pipelines, and Arabic-first RTL responsive typography.',
    liveUrl: 'https://educenter.tech',
    coverImage: '/projects/educenter-cover.svg',
    highlights: [
      'Multi-tenant academy engine allowing instructors to operate custom-branded educational spaces',
      'Automated messaging integration sending attendance confirmations, exam grades, and alerts via WhatsApp',
      'Unified course curriculum builder, digital quiz grading, and student cohort performance analytics',
      'Server-Side Rendered on Next.js for high performance and low-latency mobile delivery across regional networks',
    ],
    caseStudy: {
      overview:
        'EduCenter is a production-grade multi-tenant educational SaaS platform engineered to solve the administrative fragmentation faced by independent educators and private learning centers. The platform consolidates course delivery, attendance logging, assignment tracking, and automated parent communication into one seamless ecosystem.',
      problem:
        'Independent educators and academy operators frequently manage hundreds of students using disjointed consumer tools: Facebook and Telegram for file sharing, manual spreadsheets for tracking grades, and individual phone messages to notify parents. This leads to administrative overhead, missed attendance follow-ups, and zero visibility into student retention or course completion rates.',
      architectureDetails: [
        {
          title: 'Multi-Tenant Isolation & Workspace Architecture',
          description:
            'Engineered tenant-aware routing where instructor academies operate with distinct visual identities, isolated course rosters, and independent student registries while sharing unified core services.',
          items: [
            'Clean tenant context extraction on incoming requests to route to teacher-specific data domains',
            'Role-Based Access Control separating platform super-admins, academy teachers, assistants, and enrolled students',
            'Isolated asset namespaces and course material access tokens preventing cross-academy data leakage',
          ],
        },
        {
          title: 'Automated Event-Driven Messaging Pipeline',
          description:
            'Replaced manual parent phone calls with an automated background notification system triggered by key educational events.',
          items: [
            'Event hooks triggered upon session attendance logging, quiz grade submission, or schedule updates',
            'WhatsApp messaging gateway integration delivering immediate transactional notifications directly to parents',
            'Retry queues with rate-limiting backoff to respect messaging provider quotas and handle intermittent connection drops',
          ],
        },
        {
          title: 'Performance & Localized RTL Architecture',
          description:
            'Constructed an Arabic-first user experience designed for low-friction mobile access across diverse Egyptian mobile networks.',
          items: [
            'Next.js SSR and dynamic image optimization keeping First Contentful Paint under 1.2s on 4G connections',
            'Comprehensive RTL design tokens using Tailwind CSS and the Tajawal typographic hierarchy',
            'Accessible modal flows for quick attendance scanning and grade recording in fast-paced classroom settings',
          ],
        },
      ],
      keyDecisions: [
        {
          decision: 'WhatsApp API Integration over Traditional SMS',
          why: 'In the Egyptian educational market, SMS open rates and deliverability lag far behind WhatsApp, which is universally checked by students and parents. WhatsApp messages achieve over 95% engagement and require zero subscriber app installations.',
          alternativeConsidered: 'Standard SMS gateways or push notifications via mobile app.',
        },
        {
          decision: 'Shared Multi-Tenant Database with Logical Separation',
          why: 'Provides efficient resource utilization and simple updates across academies while maintaining strict logical query scoping by tenant ID at the ORM layer.',
          alternativeConsidered: 'Database-per-tenant architecture, which would dramatically inflate hosting and migration complexity for hundreds of teachers.',
        },
        {
          decision: 'Next.js Server Components for Public Academy Catalogs',
          why: 'Ensures optimal SEO discovery for teacher academies, fast social link previews (OpenGraph cards), and instant initial page loads without client hydration waterfalls.',
          alternativeConsidered: 'Pure client-side Single Page Application (SPA).',
        },
      ],
      challengesAndSolutions: [
        {
          challenge: 'Managing high-concurrency quiz submissions at the end of timed tests without database bottlenecks.',
          solution: 'Implemented bulk payload ingestion with optimistic client UI feedback and deferred score aggregation, preventing database write spikes during peak test submission windows.',
        },
        {
          challenge: 'Ensuring seamless responsive usability for instructors updating rosters from smartphone browsers.',
          solution: 'Designed compact touch-friendly table cards with swipeable action drawers, replacing cumbersome desktop data tables for mobile viewports.',
        },
      ],
      impact: [
        'Transformed fragmented manual paper-and-chat tracking into an automated, single-dashboard system',
        'Drastically reduced instructor time spent sending parent reports through automated attendance and grade broadcasts',
        'Delivered rock-solid uptime and smooth mobile responsiveness across all deployed academy storefronts',
      ],
      metrics: [
        { label: 'Platform Model', value: 'Multi-Tenant SaaS' },
        { label: 'Target Audience', value: 'Educators & Academies' },
        { label: 'Primary Market', value: 'Egypt / MENA' },
        { label: 'Status', value: 'Production Active' },
      ],
    },
  },
  {
    slug: 'al-anis',
    title: 'Al-Anis (الأنيس)',
    subtitle: 'Healthcare & Companionship Service Marketplace',
    summary:
      'A multi-role healthcare marketplace connecting families with certified home nurses, elderly companions, and specialized caregivers, featuring custom shift configuration, live status tracking, and SignalR real-time chat.',
    role: 'Full-Stack Architecture & Frontend Engineering',
    period: '2024',
    status: 'Live in Production',
    tier: 1,
    featured: true,
    stack: ['React', 'Vite', 'Tailwind CSS', 'ASP.NET Core', 'C#', 'SQL Server', 'SignalR', 'REST APIs', 'Stripe'],
    architecture:
      '3-tier marketplace platform featuring deterministic booking state machines, custom shift calculation logic (8h, 12h, 24h), SignalR bidirectional messaging hubs, and multi-gateway checkout processing.',
    liveUrl: 'https://al-anis.vercel.app',
    githubUrl: 'https://github.com/DiaaElsadek/al-anis',
    coverImage: '/projects/alanis-cover.svg',
    highlights: [
      'Strict three-role state machine managing booking lifecycle: Pending → Reviewed → Accepted → Paid → Active → Completed',
      'Configurable shift pricing matrix supporting daytime, overnight, and continuous 24-hour caregiver scheduling',
      'SignalR bidirectional real-time messaging hub between caregivers and family members',
      'Dual payment architecture supporting Stripe card checkout alongside regional direct payment confirmation flows',
    ],
    caseStudy: {
      overview:
        'Al-Anis (الأنيس) is a specialized healthcare and companionship service marketplace designed to connect individuals and families with certified nursing professionals, elderly companions, and child healthcare assistants. The platform eliminates informal, unverified caregiver arrangements through structured vetting, transparent shift-based pricing, and real-time communication.',
      problem:
        'Finding qualified home healthcare or elderly companionship in Egypt is historically fraught with uncertainty: patients rely on word-of-mouth recommendations, shift rates are opaque and frequently disputed, and coordinating daily schedules or patient needs requires constant unorganized messaging. Healthcare providers struggle with delayed payments and lack of verified client profiles.',
      architectureDetails: [
        {
          title: 'Deterministic Booking Lifecycle State Machine',
          description:
            'Caregiver bookings carry strict financial and medical responsibilities. Designed a state machine that coordinates user requests, provider confirmations, and financial clearance.',
          items: [
            'States: Draft → Submitted → ProviderAssigned → PriceConfirmed → PaymentCaptured → InProgress → Fulfilled',
            'Prevents invalid state transitions (e.g. attempting to pay before caregiver accepts availability)',
            'Automatic timeout and status rollbacks if a provider does not accept a request within designated SLA windows',
          ],
        },
        {
          title: 'Dynamic Shift Calculation & Pricing Engine',
          description:
            'Healthcare caregiving cannot be priced as a simple flat product. Built a flexible pricing module that accommodates multi-tier shift parameters.',
          items: [
            'Support for 8-hour day shifts, 12-hour overnight rotations, and comprehensive 24-hour live-in care',
            'Multi-day booking multipliers with automated breakdown of service fees, insurance, and provider compensation',
            'Upfront itemized quotes displayed in real-time before booking confirmation',
          ],
        },
        {
          title: 'Real-Time Communication via SignalR Hubs',
          description:
            'Implemented instant, low-latency bidirectional messaging between family members and assigned caregivers.',
          items: [
            'SignalR WebSocket hubs with automatic HTTP long-polling fallback for degraded mobile connections',
            'Message read receipts, typing indicators, and immediate notification badges across active sessions',
            'Persistent chat histories scoped strictly to authorized booking participants and system administrators',
          ],
        },
      ],
      keyDecisions: [
        {
          decision: 'ASP.NET Core REST APIs with Clean Architecture on Backend',
          why: 'Healthcare services demand strict type-safety, robust transaction handling, and proven security patterns. ASP.NET Core with Entity Framework Core and SQL Server provides enterprise-grade data integrity and audit logging.',
          alternativeConsidered: 'Unstructured Node/Express setup without static typing.',
        },
        {
          decision: 'SignalR over Third-Party Hosted Chat SDKs',
          why: 'Hosting our own SignalR hub within the .NET backend avoided costly per-seat monthly SaaS subscription fees while keeping patient health conversations securely within our own database.',
          alternativeConsidered: 'Commercial hosted chat widgets (Stream Chat / Pusher).',
        },
        {
          decision: 'Hybrid Payment Gateway Architecture',
          why: 'Integrated Stripe for international card payments while maintaining endpoints for local payment providers and cash-on-visit confirmation, addressing Egyptian user payment habits.',
          alternativeConsidered: 'Card-only checkout, which would exclude a significant portion of local families.',
        },
      ],
      challengesAndSolutions: [
        {
          challenge: 'Managing simultaneous shift requests for in-demand caregivers without scheduling conflicts.',
          solution: 'Implemented optimistic locking on caregiver availability calendars in SQL Server, instantly marking time slots as locked upon booking submission.',
        },
        {
          challenge: 'Providing instant visual clarity for three distinct user personas (Client, Caregiver, Admin) within a unified design system.',
          solution: 'Created dedicated role-specific layout shells with tailored navigation menus, status chips, and contextual action buttons matching each user’s permissions.',
        },
      ],
      impact: [
        'Built an end-to-end trusted ecosystem for in-home patient care with complete accountability',
        'Standardized shift pricing calculation, eliminating disputes between caregivers and clients',
        'Public open-source frontend repository with comprehensive architectural documentation',
      ],
      metrics: [
        { label: 'User Roles', value: '3 (Client, Provider, Admin)' },
        { label: 'Real-Time Tech', value: 'SignalR WebSockets' },
        { label: 'Backend Stack', value: 'ASP.NET Core & SQL Server' },
        { label: 'Codebase', value: 'Public GitHub Repository' },
      ],
    },
  },
  {
    slug: 'z-sports',
    title: 'Z-Sports',
    subtitle: 'Sports Facility Booking & Venue Management Platform',
    summary:
      'A sports facility discovery and instant booking platform enabling athletes to browse venues, view live court availability schedules, and reserve football, padel, basketball, and tennis courts in seconds.',
    role: 'Full-Stack Engineer',
    period: '2024',
    status: 'Live in Production',
    tier: 2,
    featured: false,
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    architecture:
      'Real-time court availability schedule with slot conflict resolution, multi-sport search & filtering pipeline, loyalty rewards system, and friction-free mobile checkout.',
    liveUrl: 'https://z-sports-eta.vercel.app',
    coverImage: '/projects/zsports-cover.svg',
    highlights: [
      'Interactive court availability calendar with instant slot booking in under 30 seconds',
      'Multi-sport taxonomy covering Football, Padel, Basketball, and Tennis venues',
      'Gamified loyalty points and rewards engine (10,000 Pt tier)',
      'Verified facility directory with rating reviews, amenities, and transparent pricing',
    ],
  },
  {
    slug: 'uni-stream22',
    title: 'UniStream22',
    subtitle: 'Academic Centralization & Productivity Portal for HTI CS',
    summary:
      'A dedicated academic platform for senior Computer & Information Science students at HTI, delivering personalized weekly timetables, group-filtered course feeds, and distraction-free study utilities.',
    role: 'Lead Creator & Full-Stack Developer',
    period: '2024 – Present',
    status: 'Live in Production',
    tier: 2,
    featured: false,
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PWA'],
    architecture:
      'Progressive Web App (PWA) with offline-ready service worker caching, academic 8-digit ID authentication, dynamic section/lab group schedule mapping, and priority announcement categorization.',
    liveUrl: 'https://uni-stream22.vercel.app',
    coverImage: '/projects/unistream-cover.svg',
    highlights: [
      'Tailored lecture schedule generator matching individual student lab & section groups (1 to 6)',
      'Centralized academic feed sorting lecture slides, assignment deadlines, and weekly announcements',
      'PWA installation support enabling fast native-like access even during campus network slowdowns',
      'Built specifically to serve and support the HTI Computer Science graduating class of 2026',
    ],
  },
  {
    slug: 'apex-gym',
    title: 'Apex Gym',
    subtitle: 'Commercial Gym Client Web Solution',
    summary:
      'A custom responsive web application delivered for a commercial gym business client, designed to showcase facilities, membership plans, trainer profiles, and facilitate direct member onboarding.',
    role: 'Freelance Frontend Developer',
    period: '2024',
    status: 'Delivered Client Project',
    tier: 3,
    featured: false,
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
    architecture:
      'Client-commissioned responsive marketing and membership showcase built to strict business requirements and client specifications.',
    liveUrl: 'https://apex-gym-sandy.vercel.app',
    coverImage: '/projects/apexgym-cover.svg',
    highlights: [
      'Delivered under direct freelance client engagement to commercial specifications',
      'High-contrast athletic visual branding optimized for local member conversion',
      'Lightweight, responsive single-page architecture built with Vite and Tailwind',
    ],
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getSelectedProjects(): Project[] {
  return projects.filter((p) => !p.featured && p.tier === 2)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
