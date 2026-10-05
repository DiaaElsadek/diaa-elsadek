"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Globe,
  Shield,
  Database,
  Wallet,
  BarChart3,
  Bot,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  Server,
  KeyRound,
  Cpu,
  Workflow,
} from "lucide-react";
import TiltSpotlightCard from "./tilt-spotlight-card";
import SubdomainSimulator from "./subdomain-simulator";

const ARCHITECTURE_POINTS = [
  {
    title: "Multi-Tenancy",
    tag: "Data Isolation",
    description:
      "Shared infrastructure with tenant-level data isolation using compound indices. Teachers operate in isolated workspaces with dedicated branding and scoped query contexts.",
    icon: Layers,
    color: "#6366F1",
  },
  {
    title: "Subdomain Edge Routing",
    tag: "DNS Layer",
    description:
      "Wildcard DNS resolution (*.educenter.tech) parsed at the edge. Eliminates custom domain setup friction, boosts teacher SEO, and isolates security boundaries.",
    icon: Globe,
    color: "#06B6D4",
  },
  {
    title: "RBAC & Token Rotation",
    tag: "Security",
    description:
      "Role-based access across Admin, Educator, and Student tiers. Employs JWT with short expirations and refresh token rotation stored in HttpOnly cookies.",
    icon: Shield,
    color: "#10B981",
  },
  {
    title: "Scoped Compound Indexes",
    tag: "Database Engine",
    description:
      "Tenant IDs serve as the leading field in compound indices { tenantId, courseId }. Guarantees index-level partition isolation without multi-cluster operational overhead.",
    icon: Database,
    color: "#8B5CF6",
  },
];

const CAPABILITIES = [
  {
    icon: Layers,
    title: "Modular Course Builder",
    description: "Hierarchical curriculum structure supporting video chapters, downloadable assets, and quiz nodes.",
  },
  {
    icon: Shield,
    title: "Automated Assessment & Proctoring",
    description: "Time-locked exam engines, randomised question pools, and automated grading pipelines.",
  },
  {
    icon: Wallet,
    title: "Integrated Student Wallet",
    description: "Regional payment processing (Paymob, Fawry, Vodafone Cash) with split automated payouts.",
  },
  {
    icon: Users,
    title: "Student Portal & Progress",
    description: "Personalized dashboard displaying video watch completion, certificates, and grades.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Cohort Analytics",
    description: "Revenue telemetry, student drop-off curves, and engagement heatmaps per lesson.",
  },
  {
    icon: Bot,
    title: "AI Course Assistant",
    description: "Contextual RAG-driven AI tutor answering student questions based on lecture transcripts.",
  },
];

const TRADEOFFS = [
  {
    decision: "Shared DB with Query Scoping vs. DB-per-Tenant",
    chosen: "Shared Database with Compound Tenant Indexes",
    rejected: "Database-per-Tenant Cluster",
    impact: "Reduced early cloud infrastructure costs by 80% while keeping tenant queries sub-15ms.",
    reasoning:
      "A database-per-tenant architecture introduces massive connection pool saturation and migration operational drag. Scoping every query with compound indices { tenantId: 1, ... } guarantees isolation while maintaining platform-wide schema management.",
  },
  {
    decision: "Subdomain Routing vs. Path-Based Routing",
    chosen: "Subdomains (*.educenter.tech)",
    rejected: "Path-based (educenter.tech/teacher)",
    impact: "Independent SSL certificates, brand ownership, and cleaner edge tenant caching.",
    reasoning:
      "Subdomains give educators a distinct brand identity and isolated cookies. Wildcard SSL management and edge header extraction resolve tenant contexts before requests hit backend controllers.",
  },
  {
    decision: "Structured Modular Monolith vs. Microservices",
    chosen: "Modular Monolith with Clean Boundaries",
    rejected: "Microservices Architecture",
    impact: "3x faster feature velocity without distributed transactions and gRPC network latency overhead.",
    reasoning:
      "Premature microservices would have tripled deployment surface and latency. Strict repository/service layering allows future extraction of high-load services (e.g., video transcode workers) when traffic dictates.",
  },
];

const ROADMAP = [
  { item: "Regional Payment Integrations (Paymob, Fawry)", status: "shipped", label: "Shipped" },
  { item: "Tenant-Scoped Analytics & Cohort Retention", status: "shipped", label: "Shipped" },
  { item: "React Native Mobile Applications for Students", status: "progress", label: "In Development" },
  { item: "AI Automated Lecture Quiz Generator", status: "progress", label: "In Development" },
  { item: "Live WebRTC Class Streaming Integration", status: "planned", label: "Planned" },
  { item: "Educator Digital Asset Template Marketplace", status: "planned", label: "Planned" },
];

export default function EduCenterCaseStudy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section id="educenter" className="section-spacing border-t border-border relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-primary bg-primary/10 border border-primary/20 mb-4"
          >
            <Workflow size={13} />
            <span>Full-Stack SaaS Case Study</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-foreground"
          >
            EduCenter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            A multi-tenant SaaS ecosystem empowering educators to operate independent digital academies with custom subdomains, payment automation, and zero custom infrastructure.
          </motion.p>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {[
              "Next.js 16",
              "Node.js",
              "Express",
              "MongoDB",
              "TypeScript",
              "TailwindCSS",
              "Multi-Tenancy",
              "JWT RBAC",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono text-muted-foreground border border-border bg-accent/60"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Problem vs Vision Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold block mb-3">
              The Problem Space
            </span>
            <h3 className="text-xl font-medium text-foreground mb-3">
              Fragmented Tools & Punitive Agency Costs
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Educators in emerging markets struggle with fragmented workflows — tracking payments in Excel, sharing Google Drive folders, and coordinating via chaotic WhatsApp groups. Bespoke agency software costs upwards of $10,000, creating an insurmountable technological barrier for solo instructors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-primary/30 bg-primary/5 p-8 shadow-sm"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-3">
              The Architecture Thesis
            </span>
            <h3 className="text-xl font-medium text-foreground mb-3">
              Shopify for Education: Sovereign Subdomains
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              EduCenter abstracts database configuration, tenant routing, and video hosting behind a self-service onboarding engine. Each teacher receives a dedicated subdomain (e.g. <span className="font-mono text-foreground font-semibold">teacher.educenter.tech</span>) with localized branding, course gates, student rosters, and payments ready from minute one.
            </p>
          </motion.div>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-4">
            Edge Tenant Resolution Pipeline
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mb-8">
            How requests flow from wild-card subdomains to isolated database partition queries.
          </p>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xl overflow-x-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[650px] text-center">
              
              {/* Step 1 */}
              <div className="flex-1 p-4 rounded-xl bg-accent/40 border border-border/80 text-left">
                <span className="text-[10px] font-mono text-primary block uppercase">Step 01 • Client</span>
                <span className="text-xs font-bold text-foreground font-mono block mt-1">
                  ahmed.educenter.tech
                </span>
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Wildcard CNAME forwards request to Edge Edge Router
                </span>
              </div>

              <ArrowRight size={18} className="text-muted-foreground shrink-0 hidden md:block" />

              {/* Step 2 */}
              <div className="flex-1 p-4 rounded-xl bg-accent/40 border border-border/80 text-left">
                <span className="text-[10px] font-mono text-primary block uppercase">Step 02 • Middleware</span>
                <span className="text-xs font-bold text-foreground font-mono block mt-1">
                  Edge Tenant Resolver
                </span>
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Extracts subdomain host and injects x-tenant-id header
                </span>
              </div>

              <ArrowRight size={18} className="text-muted-foreground shrink-0 hidden md:block" />

              {/* Step 3 */}
              <div className="flex-1 p-4 rounded-xl bg-accent/40 border border-border/80 text-left">
                <span className="text-[10px] font-mono text-primary block uppercase">Step 03 • API Layer</span>
                <span className="text-xs font-bold text-foreground font-mono block mt-1">
                  Express Controller
                </span>
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Enforces JWT RBAC token with tenant scope verification
                </span>
              </div>

              <ArrowRight size={18} className="text-muted-foreground shrink-0 hidden md:block" />

              {/* Step 4 */}
              <div className="flex-1 p-4 rounded-xl bg-accent/40 border border-border/80 text-left">
                <span className="text-[10px] font-mono text-primary block uppercase">Step 04 • Database</span>
                <span className="text-xs font-bold text-foreground font-mono block mt-1">
                  Scoped B-Tree Index
                </span>
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Queries isolated via &#123; tenantId, courseId &#125;
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Architecture Decisions */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                Core Architectural Pillars
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Technical patterns chosen for resilience and horizontal scalability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ARCHITECTURE_POINTS.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="h-full"
                >
                  <TiltSpotlightCard className="p-6 md:p-8 h-full" glowColor={`${point.color}15`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2.5 rounded-xl border border-border bg-accent"
                          style={{ color: point.color }}
                        >
                          <Icon size={20} />
                        </div>
                        <h4 className="text-base font-semibold text-foreground">
                          {point.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
                        {point.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </TiltSpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Interactive Subdomain Simulator Playground */}
        <div className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-2">
              Interactive DevTools Demonstration
            </span>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
              Simulate Subdomain Edge Resolution
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Test how wildcard subdomains resolve dynamically through our edge middleware layer into isolated tenant dashboard payloads.
            </p>
          </div>
          <SubdomainSimulator />
        </div>

        {/* Platform Capabilities Grid */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-8">
            Platform Capabilities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-accent w-fit mb-3 text-primary">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Engineering Tradeoffs Decision Matrix */}
        <div className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-2">
              System Design Analysis
            </span>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
              Architectural Tradeoffs
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Every design decision is a tradeoff. These are the calculated choices made for EduCenter.
            </p>
          </div>

          <div className="space-y-4">
            {TRADEOFFS.map((tradeoff, index) => (
              <motion.div
                key={tradeoff.decision}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 md:p-8 hover:border-border-hover transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h4 className="text-base font-semibold text-foreground">
                    {tradeoff.decision}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-medium border border-emerald-500/20">
                      Chosen: {tradeoff.chosen}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {tradeoff.reasoning}
                </p>

                <div className="pt-3 border-t border-border/60 flex items-center gap-2 text-xs font-mono text-primary">
                  <CheckCircle2 size={13} />
                  <span>Outcome: {tradeoff.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Roadmap */}
        <div>
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-8">
            Production Roadmap
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ROADMAP.map((item, index) => (
              <motion.div
                key={item.item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-card/80 text-xs font-mono"
              >
                <span className="text-foreground font-medium truncate pr-2">
                  {item.item}
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold shrink-0 uppercase ${
                    item.status === "shipped"
                      ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                      : item.status === "progress"
                      ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                      : "bg-secondary text-muted-foreground border border-border"
                  }`}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
