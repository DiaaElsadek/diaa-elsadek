"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Globe,
  Shield,
  Lock,
  Network,
  Gauge,
  FolderTree,
  Database,
} from "lucide-react";
import SectionHeader from "./section-header";

const SYSTEMS = [
  {
    icon: Layers,
    title: "Multi-Tenancy",
    description:
      "Shared infrastructure with tenant-level data isolation. Each tenant operates independently with scoped queries, configurable branding, and isolated permission boundaries.",
  },
  {
    icon: Globe,
    title: "Subdomain Routing",
    description:
      "Edge-resolved tenant identification via subdomains. Wildcard DNS with dynamic tenant resolution before requests hit the application layer.",
  },
  {
    icon: Shield,
    title: "Authentication",
    description:
      "JWT-based auth with refresh token rotation and secure HTTP-only cookie storage. Session management with automatic expiration and re-authentication flows.",
  },
  {
    icon: Lock,
    title: "Authorization",
    description:
      "Role-based access control (RBAC) with granular permissions. Admin, Teacher, and Student roles with tenant-scoped permission boundaries.",
  },
  {
    icon: Network,
    title: "API Architecture",
    description:
      "RESTful API design with versioning, rate limiting, and comprehensive error handling. Middleware pipeline for auth, tenant resolution, and request validation.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Server-side rendering, aggressive caching at CDN and application layers, database query optimization with compound indexes, and lazy loading for client bundles.",
  },
  {
    icon: FolderTree,
    title: "Clean Architecture",
    description:
      "Layered architecture separating business logic from infrastructure. Domain-driven boundaries with dependency inversion. Controllers, services, repositories pattern.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Schema design optimized for multi-tenant access patterns. Compound indexes for tenant-scoped queries. Aggregation pipelines for analytics across tenants.",
  },
];

export default function SystemDesign() {
  return (
    <section id="systems" className="section-spacing border-t border-border">
      <div className="section-container">
        <SectionHeader number="02" title="Systems, Scale & Architecture" />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg text-muted max-w-2xl mb-14 -mt-8"
        >
          The engineering decisions behind building scalable, maintainable
          systems. Every architectural choice is a tradeoff — these are the ones
          I&apos;ve navigated.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {SYSTEMS.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="group relative rounded-xl border border-border bg-surface/50 p-5 transition-all duration-300 hover:border-border-hover hover:bg-surface"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(300px circle at 50% 30%, rgba(255,255,255,0.02), transparent 60%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="p-2 rounded-lg border border-border bg-accent w-fit mb-4 group-hover:border-border-hover transition-colors duration-300">
                    <Icon size={16} className="text-muted" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    {system.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {system.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
