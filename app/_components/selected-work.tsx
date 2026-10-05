"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Server,
  Layers,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "./section-header";
import TiltSpotlightCard from "./tilt-spotlight-card";
import { ProjectMockupPreview } from "./project-mockups";
import { GithubIcon } from "./social-icons";
import { PROJECTS, Project } from "@/lib/data/projects";

export default function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="relative section-spacing overflow-hidden border-t border-border"
    >
      {/* Soft Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-15 dark:opacity-30 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 800px at 50% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 80%)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeader number="02" title="Selected Work &amp; Architecture" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 -mt-8">
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Production web platforms built with multi-tenancy, clean architecture, and domain-driven design — engineered for resilience and real business operations.
          </p>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-mono text-muted-foreground shrink-0">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>5 Shipped Platforms</span>
          </div>
        </div>

        {/* FEATURED PROJECTS (Large Flagship Cards) */}
        <div ref={ref} className="space-y-10 mb-14">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <TiltSpotlightCard
                className="p-6 sm:p-8 md:p-10"
                glowColor={project.glowColor}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left info column (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Category Badge & Live / Code Links */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border"
                          style={{
                            borderColor: `${project.accentColor}40`,
                            backgroundColor: `${project.accentColor}10`,
                            color: project.accentColor,
                          }}
                        >
                          {project.category}
                        </span>

                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-muted-foreground bg-secondary border border-border">
                          {project.year}
                        </span>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-foreground bg-accent hover:bg-accent-hover border border-border transition-colors"
                          >
                            <span>Live App</span>
                            <ExternalLink size={10} />
                          </a>
                        )}

                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-muted-foreground hover:text-foreground bg-secondary border border-border transition-colors"
                          >
                            <GithubIcon size={11} />
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                          {project.name}
                        </h3>
                        {project.caseStudyHref && (
                          <a
                            href={project.caseStudyHref}
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                            aria-label={`View ${project.name} case study`}
                          >
                            <ArrowUpRight size={20} />
                          </a>
                        )}
                      </div>

                      <p className="text-sm sm:text-base font-medium text-foreground/90 mb-3">
                        {project.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Architecture Key Metrics */}
                      <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-secondary/40 border border-border/60 mb-6">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-left">
                            <span className="text-[10px] font-mono text-muted-foreground block uppercase">
                              {m.label}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-foreground font-mono truncate block mt-0.5">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags & Action Link */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border/50">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono text-muted-foreground bg-surface border border-border/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.caseStudyHref ? (
                        <a
                          href={project.caseStudyHref}
                          className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline font-medium"
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight size={14} />
                        </a>
                      ) : project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline font-medium"
                        >
                          <span>Open Live Platform</span>
                          <ArrowUpRight size={14} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  {/* Right Mockup Preview Frame (5 cols) */}
                  <div className="lg:col-span-5">
                    <ProjectMockupPreview mockup={project.mockup} />
                  </div>
                </div>
              </TiltSpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* MORE PROJECTS GRID (Z-Sports, UniStream22, Apex Gym) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest font-semibold block">
              Additional Deployed Systems &amp; Client Projects
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              Production Tested
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + idx * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <TiltSpotlightCard
                  className="p-6 h-full flex flex-col justify-between"
                  glowColor={project.glowColor}
                >
                  <div>
                    {/* Header: Category, Year, Live Link */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border"
                        style={{
                          borderColor: `${project.accentColor}40`,
                          backgroundColor: `${project.accentColor}10`,
                          color: project.accentColor,
                        }}
                      >
                        {project.category}
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-muted-foreground">
                          {project.year}
                        </span>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`Open ${project.name}`}
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h4 className="text-xl font-semibold text-foreground tracking-tight mb-1">
                      {project.name}
                    </h4>
                    <p className="text-xs font-medium text-foreground/80 mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-border/50">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                          <CheckCircle2 size={12} className="text-primary shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags & Action Link */}
                  <div>
                    <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-border/50">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-muted-foreground bg-surface border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline font-medium"
                      >
                        <span>Inspect Live Project</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </TiltSpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
