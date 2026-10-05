"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Globe,
  Shield,
  Lock,
  Network,
  Gauge,
  FolderTree,
  Database,
  Cpu,
  SlidersHorizontal,
} from "lucide-react";
import SectionHeader from "./section-header";
import TiltSpotlightCard from "./tilt-spotlight-card";

interface SystemItem {
  id: string;
  code: string;
  category: "scalability" | "security" | "architecture" | "data";
  icon: any;
  title: string;
  pattern: string;
  description: string;
  color: string;
}

const SYSTEMS: SystemItem[] = [
  {
    id: "multi-tenancy",
    code: "SYS-01",
    category: "scalability",
    icon: Layers,
    title: "Multi-Tenancy Isolation",
    pattern: "Shared Cluster / Scoped Schema",
    description:
      "Shared infrastructure with tenant-level data isolation. Each tenant operates independently with scoped queries, configurable branding, and isolated permission boundaries.",
    color: "#6366F1",
  },
  {
    id: "subdomain-routing",
    code: "SYS-02",
    category: "architecture",
    icon: Globe,
    title: "Subdomain Edge Routing",
    pattern: "Wildcard DNS + Edge Resolver",
    description:
      "Edge-resolved tenant identification via subdomains. Wildcard DNS with dynamic tenant resolution before requests hit application controllers.",
    color: "#06B6D4",
  },
  {
    id: "authentication",
    code: "SYS-03",
    category: "security",
    icon: Shield,
    title: "Session Authentication",
    pattern: "JWT + Refresh Token Rotation",
    description:
      "JWT-based auth with refresh token rotation and secure HTTP-only cookie storage. Automatic session re-authentication flows with zero client friction.",
    color: "#10B981",
  },
  {
    id: "authorization",
    code: "SYS-04",
    category: "security",
    icon: Lock,
    title: "Granular RBAC Policies",
    pattern: "Role-Based Access Control",
    description:
      "Role-based access control with granular permission matrices across Admin, Instructor, and Student tiers, strictly enforced at the route middleware layer.",
    color: "#EC4899",
  },
  {
    id: "api-architecture",
    code: "SYS-05",
    category: "architecture",
    icon: Network,
    title: "Layered API Middleware",
    pattern: "RESTful + Rate Limiting Pipeline",
    description:
      "RESTful API design with semantic versioning, rate limiting, and structured error responses. Middleware pipelines for auth, tenant context, and validation.",
    color: "#8B5CF6",
  },
  {
    id: "performance",
    code: "SYS-06",
    category: "scalability",
    icon: Gauge,
    title: "Full-Stack Performance",
    pattern: "SSR + Edge CDN Caching",
    description:
      "Server-side rendering, aggressive caching at the CDN perimeter, compound index query optimization, and tree-shaken client JavaScript bundles.",
    color: "#F59E0B",
  },
  {
    id: "clean-architecture",
    code: "SYS-07",
    category: "architecture",
    icon: FolderTree,
    title: "Clean Domain Architecture",
    pattern: "Controller-Service-Repository",
    description:
      "Layered architecture strictly separating core business logic from databases and frameworks. Dependency inversion allows swapping drivers seamlessly.",
    color: "#3B82F6",
  },
  {
    id: "database-design",
    code: "SYS-08",
    category: "data",
    icon: Database,
    title: "Compound Indexing Strategy",
    pattern: "Tenant-Partitioned B-Trees",
    description:
      "Compound indices optimized for multi-tenant access patterns. Aggregation pipelines for cross-tenant platform health analytics without locking rows.",
    color: "#14B8A6",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Systems" },
  { id: "scalability", label: "Scalability" },
  { id: "security", label: "Security & Auth" },
  { id: "architecture", label: "Architecture" },
  { id: "data", label: "Data Layer" },
];

export default function SystemDesign() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSystems =
    activeCategory === "all"
      ? SYSTEMS
      : SYSTEMS.filter((s) => s.category === activeCategory);

  return (
    <section id="systems" className="section-spacing border-t border-border relative overflow-hidden">
      <div className="section-container relative z-10">
        
        <SectionHeader number="03" title="Systems, Scale & Architecture" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 -mt-8">
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            The engineering decisions behind building resilient, production-grade applications. Every architectural choice is a tradeoff — these are the patterns I rely on.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-secondary/50 border border-border shrink-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                  activeCategory === cat.id
                    ? "bg-background text-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of System Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSystems.map((system) => {
              const Icon = system.icon;
              return (
                <motion.div
                  layout
                  key={system.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <TiltSpotlightCard
                    className="p-5 h-full flex flex-col justify-between"
                    glowColor={`${system.color}15`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="p-2.5 rounded-xl border border-border bg-accent"
                          style={{ color: system.color }}
                        >
                          <Icon size={18} />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
                          {system.code}
                        </span>
                      </div>

                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {system.title}
                      </h3>

                      <span className="text-[11px] font-mono text-primary block mb-3 font-medium">
                        {system.pattern}
                      </span>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {system.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                      <span className="uppercase">{system.category}</span>
                      <span className="text-emerald-500 flex items-center gap-1 font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Verified
                      </span>
                    </div>
                  </TiltSpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
