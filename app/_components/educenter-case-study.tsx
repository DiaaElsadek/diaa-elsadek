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
} from "lucide-react";
import TiltSpotlightCard from "./tilt-spotlight-card";
import SubdomainSimulator from "./subdomain-simulator";

const CASE_STUDY_SECTIONS = [
  {
    id: "problem",
    title: "The Problem",
    content:
      "Educators across the region face the same challenge: they have knowledge to share but no scalable way to deliver it. Most rely on scattered tools — WhatsApp groups, manual payment tracking, and shared drives. Building a custom platform costs tens of thousands of dollars and months of development. The result? Talented teachers are stuck, unable to grow beyond a handful of students.",
  },
  {
    id: "vision",
    title: "The Vision",
    content:
      "EduCenter is Shopify for education. Just as Shopify democratized e-commerce by letting anyone launch an online store, EduCenter lets any educator launch a complete educational business. No code. No infrastructure headaches. Each teacher gets their own branded subdomain — teacher.educenter.tech — and a full suite of tools to manage students, courses, payments, and analytics from day one.",
  },
];

const ARCHITECTURE_POINTS = [
  {
    title: "Multi-Tenancy",
    description:
      "Each teacher operates in an isolated tenant with their own data, configuration, and branding. Shared infrastructure, isolated experiences. This allows the platform to scale to thousands of educators while maintaining data separation and security.",
    icon: Layers,
  },
  {
    title: "Subdomain Routing",
    description:
      "teacher.educenter.tech instead of educenter.tech/teacher. Subdomains create professional identity for each educator, improve SEO, and enable independent SSL certificates. The routing layer resolves tenants at the edge for minimal latency.",
    icon: Globe,
  },
  {
    title: "Authentication & Authorization",
    description:
      "Role-based access control across three levels: Admin, Teacher, and Student. JWT-based authentication with refresh token rotation. Each tenant has isolated permission boundaries — a teacher in one tenant cannot access another's data.",
    icon: Shield,
  },
  {
    title: "Database Architecture",
    description:
      "Shared database with tenant-level isolation using compound indexes. Every query is scoped to the active tenant. This approach balances cost efficiency with data isolation, while maintaining the ability to run cross-tenant analytics at the platform level.",
    icon: Database,
  },
];

const FEATURES = [
  { icon: Layers, label: "Courses & Lessons" },
  { icon: Shield, label: "Exams & Assessment" },
  { icon: Wallet, label: "Wallet & Payments" },
  { icon: Users, label: "Student Dashboards" },
  { icon: BarChart3, label: "Analytics & Insights" },
  { icon: Bot, label: "AI Integrations" },
];

const TRADEOFFS = [
  {
    decision: "Shared DB vs. DB-per-tenant",
    reasoning:
      "Shared database reduces infrastructure cost by 80% at early stage. Tenant isolation is enforced at the application layer with strict query scoping. Migration path to dedicated databases exists for high-value tenants.",
  },
  {
    decision: "Subdomains vs. Path-based routing",
    reasoning:
      "Subdomains provide stronger brand identity and SEO isolation. The tradeoff is increased DNS complexity and SSL management, solved with wildcard certificates and edge-level tenant resolution.",
  },
  {
    decision: "Monolith-first vs. Microservices",
    reasoning:
      "Started as a well-structured monolith with clear module boundaries. This accelerates development velocity while maintaining the option to extract services as the platform scales. Premature microservices would have tripled development time without proportional benefit.",
  },
];

const ROADMAP = [
  "Mobile applications (React Native)",
  "AI-powered content generation",
  "Live class streaming integration",
  "Marketplace for educational templates",
  "Advanced analytics with cohort analysis",
  "Payment gateway expansion (regional providers)",
];

export default function EduCenterCaseStudy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section id="educenter" className="section-spacing border-t border-border">
      <div className="section-container">
        {/* Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4"
          >
            Case Study
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground"
          >
            EduCenter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            A SaaS platform that lets educators launch their own educational
            businesses — without writing a single line of code.
          </motion.p>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {["Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "TailwindCSS"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono text-muted-foreground border border-border bg-accent"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* Problem & Vision */}
        <div ref={ref} className="space-y-20 mb-24">
          {CASE_STUDY_SECTIONS.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="max-w-2xl"
            >
              <h3 className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-4">
                {section.title}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Architecture */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-12"
          >
            Architecture Decisions
          </motion.h3>

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
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="h-full"
                >
                  <TiltSpotlightCard className="p-6 md:p-8 h-full" glowColor="rgba(139, 92, 246, 0.05)">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg border border-border bg-accent group-hover:border-border-hover transition-colors duration-300">
                        <Icon size={18} className="text-muted-foreground" />
                      </div>
                      <h4 className="text-base font-medium text-foreground">
                        {point.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </TiltSpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Subdomain Simulator Playground */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-10">
            Interactive DNS & Subdomain Resolver
          </h3>
          <SubdomainSimulator />
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-10"
          >
            Platform Capabilities
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface/50 px-4 py-3.5 hover:border-border-hover transition-colors duration-300"
                >
                  <Icon size={16} className="text-muted shrink-0" />
                  <span className="text-sm text-muted">{feature.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tradeoffs */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-10"
          >
            Engineering Tradeoffs
          </motion.h3>

          <div className="space-y-4">
            {TRADEOFFS.map((tradeoff, index) => (
              <motion.div
                key={tradeoff.decision}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-surface/50 p-6 md:p-8 hover:border-border-hover transition-colors duration-300"
              >
                <h4 className="text-base font-medium text-foreground mb-3">
                  {tradeoff.decision}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tradeoff.reasoning}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-10">
            Future Roadmap
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ROADMAP.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 text-sm text-muted"
              >
                <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
