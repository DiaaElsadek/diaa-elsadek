"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./section-header";
import TiltSpotlightCard from "./tilt-spotlight-card";

const PROJECTS = [
  {
    id: "educenter",
    name: "EduCenter",
    tagline: "SaaS platform for educators — Shopify for education.",
    description:
      "Multi-tenant architecture with subdomain routing. Teachers launch their own educational businesses without building custom systems.",
    tags: ["Next.js", "Node.js", "MongoDB", "Multi-Tenancy"],
    href: "#educenter",
    isInternal: true,
  },
  {
    id: "unistream",
    name: "UniStream22",
    tagline: "University streaming & educational content platform.",
    description:
      "Built for scale with modern streaming architecture, real-time features, and optimized content delivery.",
    tags: ["React", "Node.js", "Real-Time"],
    href: "#unistream",
    isInternal: true,
  },
];

export default function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="work" className="relative section-spacing overflow-hidden">
      {/* Soft Purple Ambient Light */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-10 dark:opacity-25 mix-blend-plus-lighter dark:mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 700px at 50% 50%, rgba(139, 92, 246, 0.12) 0%, transparent 80%)",
        }}
      />
      <div className="section-container relative z-10">
        <SectionHeader number="01" title="Selected Work" />

        <div ref={ref} className="space-y-4">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group block"
            >
              <TiltSpotlightCard className="p-8 md:p-10 h-full" glowColor="rgba(139, 92, 246, 0.05)">
                <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-medium text-foreground tracking-tight">
                        {project.name}
                      </h3>
                      <motion.span
                        className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                        whileHover={{ x: 2, y: -2 }}
                      >
                        <ArrowUpRight size={18} />
                      </motion.span>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base mb-4 max-w-lg">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 md:mt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono text-muted-foreground border border-border bg-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltSpotlightCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
