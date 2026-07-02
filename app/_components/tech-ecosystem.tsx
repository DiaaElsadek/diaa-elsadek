"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./section-header";
import { Cpu, Terminal, ArrowRight } from "lucide-react";

interface TechDetails {
  name: string;
  note: string;
  rationale: string;
  metrics: {
    category: string;
    dxMultiplier: string;
    footprint: string;
  };
  projects: string[];
}

const TECH_META: Record<string, TechDetails> = {
  React: {
    name: "React",
    note: "Component architecture",
    rationale: "Core library for building declarative UI components. Utilizes virtual DOM diffing to coordinate state syncs at microsecond latencies.",
    metrics: { category: "Frontend Core", dxMultiplier: "1.2x velocity", footprint: "Moderate (~42kB)" },
    projects: ["EduCenter", "UniStream22"],
  },
  "Next.js": {
    name: "Next.js",
    note: "Full-stack framework",
    rationale: "Primary application foundation. Applied for Server Components, dynamic streaming, middleware headers routing, and static generation.",
    metrics: { category: "Meta Framework", dxMultiplier: "1.5x productivity", footprint: "Server Optimized" },
    projects: ["EduCenter", "UniStream22"],
  },
  TypeScript: {
    name: "TypeScript",
    note: "Type safety",
    rationale: "Ensures type compliance, reducing runtime crashes. Strongly typed APIs, generics, and strict configurations serve as a living spec.",
    metrics: { category: "Languages", dxMultiplier: "1.3x scalability", footprint: "Zero runtime impact" },
    projects: ["EduCenter", "UniStream22"],
  },
  TailwindCSS: {
    name: "TailwindCSS",
    note: "Utility-first styling",
    rationale: "Enables declarative, responsive markup designs. PURGE styles build-phase purges unused tokens, optimizing site load latency.",
    metrics: { category: "Styling", dxMultiplier: "1.4x design loops", footprint: "Ultra Lightweight (~10kB)" },
    projects: ["EduCenter", "UniStream22"],
  },
  "HTML / CSS": {
    name: "HTML / CSS",
    note: "Semantic foundations",
    rationale: "Guarantees proper document layout structure, accessible screen-reader tags (WCAG), and responsive CSS variables styling variables.",
    metrics: { category: "Frontend Core", dxMultiplier: "1.0x baseline", footprint: "Minimal" },
    projects: ["All Applications"],
  },
  JavaScript: {
    name: "JavaScript",
    note: "Core language",
    rationale: "Leverages event-loop microtasks, async-await streams, and V8 optimization structures for real-time web mechanics.",
    metrics: { category: "Languages", dxMultiplier: "1.1x speed", footprint: "Dynamic" },
    projects: ["All Applications"],
  },
  Bootstrap: {
    name: "Bootstrap",
    note: "Rapid prototyping",
    rationale: "Utilized for legacy layout structures and rapid proofs of concept where standard UI primitives are preconfigured.",
    metrics: { category: "Styling", dxMultiplier: "1.0x design loops", footprint: "Standard CSS size" },
    projects: ["Internal Prototypes"],
  },
  "Node.js": {
    name: "Node.js",
    note: "Runtime environment",
    rationale: "Asynchronous runtime for fast event-driven services. Excellent handling of concurrent network sockets and data transactions.",
    metrics: { category: "Backend Core", dxMultiplier: "1.3x velocity", footprint: "V8 engine optimized" },
    projects: ["EduCenter Gateway", "UniStream22 Backend"],
  },
  "Express.js": {
    name: "Express.js",
    note: "API framework",
    rationale: "Robust routing middleware framework. Configured rate-limiting layers, JWT auth filters, and standard JSON parsers.",
    metrics: { category: "Backend Core", dxMultiplier: "1.2x API creation", footprint: "Minimalist / Fast" },
    projects: ["EduCenter API", "UniStream22 API"],
  },
  "ASP.NET Core": {
    name: "ASP.NET Core",
    note: "Enterprise-grade APIs",
    rationale: "Compiled typed web backend. Leverages Kestrel, dependency injection, and compiled C# speed to run highly critical server threads.",
    metrics: { category: "Backend Core", dxMultiplier: "1.4x type safety", footprint: "High throughput" },
    projects: ["Multi-tier SaaS Services"],
  },
  MongoDB: {
    name: "MongoDB",
    note: "Document store",
    rationale: "NoSQL DB storing JSON-like documents. Applied compound indexes and aggregation queries to handle multi-tenant isolation schemas.",
    metrics: { category: "Database Layer", dxMultiplier: "1.3x schema freedom", footprint: "Dynamic Scaling" },
    projects: ["EduCenter Core Data", "UniStream22 Database"],
  },
  "SQL Server": {
    name: "SQL Server",
    note: "Relational data",
    rationale: "Enterprise database handling complex transactional schemas, foreign keys, constraints, triggers, and transactional isolation levels.",
    metrics: { category: "Database Layer", dxMultiplier: "1.2x data integrity", footprint: "Strict Schema" },
    projects: ["Relational SaaS Pipelines"],
  },
  Git: {
    name: "Git",
    note: "Version control",
    rationale: "Maintains code history tree. Employs descriptive committing, feature branching, and rebase strategies for trunk-based integrity.",
    metrics: { category: "Tools", dxMultiplier: "1.1x workflows", footprint: "Local CLI" },
    projects: ["All Projects"],
  },
  GitHub: {
    name: "GitHub",
    note: "Collaboration",
    rationale: "Facilitates pull requests review loops, peer coding runs, automatic actions workflow pipelines, and release distributions.",
    metrics: { category: "Tools", dxMultiplier: "1.3x code health", footprint: "Cloud Platform" },
    projects: ["All Projects"],
  },
  Docker: {
    name: "Docker",
    note: "Containerization",
    rationale: "Isolates application binaries. Guaranteed consistent local vs staging run environments and isolated networking configs.",
    metrics: { category: "Tools", dxMultiplier: "1.4x portability", footprint: "Images optimized" },
    projects: ["EduCenter Sandbox Deployments"],
  },
  Linux: {
    name: "Linux",
    note: "Server environment",
    rationale: "Runs backend runtime services with low overhead. Optimized memory locks, process controls, and standard logging routes.",
    metrics: { category: "Tools", dxMultiplier: "1.2x stability", footprint: "OS Kernel level" },
    projects: ["All VPS deployments"],
  },
};

const ECOSYSTEM = [
  {
    label: "Frontend",
    items: [
      { name: "React", note: "Component architecture" },
      { name: "Next.js", note: "Full-stack framework" },
      { name: "TypeScript", note: "Type safety" },
      { name: "TailwindCSS", note: "Utility-first styling" },
      { name: "HTML / CSS", note: "Semantic foundations" },
      { name: "JavaScript", note: "Core language" },
      { name: "Bootstrap", note: "Rapid prototyping" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", note: "Runtime environment" },
      { name: "Express.js", note: "API framework" },
      { name: "ASP.NET Core", note: "Enterprise-grade APIs" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "MongoDB", note: "Document store" },
      { name: "SQL Server", note: "Relational data" },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "JavaScript", note: "Primary" },
      { name: "TypeScript", note: "Primary" },
      { name: "C#", note: "Backend systems" },
      { name: "C++", note: "Algorithms & DSA" },
      { name: "Python", note: "Scripting & AI" },
      { name: "Dart", note: "Mobile development" },
      { name: "Java", note: "Object-oriented design" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", note: "Version control" },
      { name: "GitHub", note: "Collaboration" },
      { name: "Docker", note: "Containerization" },
      { name: "Linux", note: "Server environment" },
    ],
  },
];

export default function TechEcosystem() {
  const [selectedTech, setSelectedTech] = useState<string | null>("React");

  const activeTech = selectedTech ? TECH_META[selectedTech] : null;

  return (
    <section id="stack" className="section-spacing border-t border-border">
      <div className="section-container">
        <SectionHeader number="03" title="Technology Ecosystem" />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg text-muted max-w-2xl mb-14 -mt-8"
        >
          Technologies are tools, not identities. These are the ones I reach for
          — chosen for specific problems, not hype cycles.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Tag Grid Column */}
          <div className="lg:col-span-2 space-y-10">
            {ECOSYSTEM.map((category, catIndex) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: catIndex * 0.08,
                }}
              >
                <h3 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
                  {category.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {category.items.map((item, itemIndex) => {
                    const isSelected = selectedTech === item.name;
                    return (
                      <motion.div
                        key={`${category.label}-${item.name}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: catIndex * 0.05 + itemIndex * 0.03,
                        }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        onClick={() => {
                          if (TECH_META[item.name]) {
                            setSelectedTech(item.name);
                          }
                        }}
                        className={`group flex flex-col gap-1 rounded-lg border px-4 py-3 cursor-pointer select-none transition-all duration-300 ${
                          isSelected
                            ? "border-foreground bg-accent text-foreground shadow-md"
                            : "border-border bg-surface/50 hover:border-border-hover hover:bg-surface text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="text-sm font-medium">
                          {item.name}
                        </span>
                        <span className="text-[11px] font-mono opacity-80">
                          {item.note}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Node Telemetry Inspector */}
          <div className="sticky top-20 w-full">
            <div className="border border-border bg-surface-raised rounded-xl p-6 relative overflow-hidden min-h-[350px] flex flex-col justify-between">
              
              {/* Subtle background glow mapping active status */}
              <div className="absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-neutral-100 blur-3xl opacity-5 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-muted-foreground" />
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                      Active Node Inspector
                    </span>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <AnimatePresence mode="wait">
                  {activeTech ? (
                    <motion.div
                      key={activeTech.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase">
                          Node Identifier
                        </span>
                        <h4 className="text-xl font-bold text-foreground mt-0.5">
                          {activeTech.name}
                        </h4>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase">
                          Architecture Rationale
                        </span>
                        <p className="text-xs text-muted leading-relaxed mt-1">
                          {activeTech.rationale}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/40">
                        <div>
                          <span className="text-[9px] font-mono text-muted-foreground block">
                            DX Multiplier
                          </span>
                          <span className="text-xs font-mono text-foreground font-semibold">
                            {activeTech.metrics.dxMultiplier}
                          </span>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-muted-foreground block">
                            Performance Footprint
                          </span>
                          <span className="text-xs font-mono text-foreground font-semibold">
                            {activeTech.metrics.footprint}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <span className="text-[10px] font-mono text-muted-foreground block">
                          Applied in Core Repositories
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {activeTech.projects.map((proj) => (
                            <span
                              key={proj}
                              className="px-2 py-0.5 rounded text-[10px] font-mono text-foreground bg-accent border border-border"
                            >
                              {proj}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
                      <Cpu size={32} className="opacity-20 mb-3" />
                      <p className="text-xs font-mono">Select any node tag on the left to inspect architectural details.</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-t border-border pt-4 mt-6 text-[9px] font-mono text-muted-foreground flex justify-between">
                <span>Inspector: Connected</span>
                <span className="flex items-center gap-1">
                  Active <ArrowRight size={10} />
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
