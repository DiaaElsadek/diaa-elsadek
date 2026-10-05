"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Layers,
  Terminal,
} from "lucide-react";
import SectionHeader from "./section-header";
import TiltSpotlightCard from "./tilt-spotlight-card";
import { EXPERIENCES } from "@/lib/data/experience";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="experience"
      className="relative section-spacing overflow-hidden border-t border-border"
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-15 dark:opacity-25 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 800px at 30% 50%, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeader number="01" title="Professional Experience" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 -mt-8">
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Delivering production software independently from requirement discovery to cloud infrastructure and maintenance.
          </p>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-mono text-muted-foreground shrink-0">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Freelance Since Feb 2024</span>
          </div>
        </div>

        <div ref={ref} className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <TiltSpotlightCard
                className="p-6 sm:p-8 md:p-10"
                glowColor="rgba(14, 165, 233, 0.12)"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Role Details & Responsibilities (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-sky-500/30 bg-sky-500/10 text-sky-400">
                          <Briefcase size={12} />
                          <span>{exp.type}</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-muted-foreground bg-secondary border border-border">
                          <MapPin size={12} className="text-primary" />
                          <span>{exp.location}</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-muted-foreground bg-secondary border border-border">
                          <Calendar size={12} className="text-primary" />
                          <span>{exp.period}</span>
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-foreground/80 mb-6">
                        {exp.tagline}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-3 mb-6">
                        <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest font-semibold block">
                          Key Deliverables &amp; Practice
                        </span>
                        {exp.responsibilities.map((resp, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-primary shrink-0 mt-0.5"
                            />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Pills */}
                    <div className="pt-4 border-t border-border/50">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-semibold block mb-2">
                        Applied Toolchain
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono text-muted-foreground bg-surface border border-border/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Shipped Deliverables Cards (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                    <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest font-semibold block">
                      Shipped Client Deliverables
                    </span>

                    <div className="space-y-3">
                      {exp.deliverables.map((deliv, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-border/70 bg-surface/50 hover:bg-surface/80 hover:border-border transition-all duration-200 space-y-2 group"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                              {deliv.name}
                            </h4>
                            {deliv.url && (
                              <a
                                href={deliv.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                                aria-label={`View ${deliv.name}`}
                              >
                                <ExternalLink size={13} />
                              </a>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {deliv.description}
                          </p>
                          {deliv.url && (
                            <a
                              href={deliv.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-primary hover:underline font-medium pt-1"
                            >
                              <span>Inspect Live Deployment</span>
                              <ArrowUpRight size={12} />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-accent/40 border border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Terminal size={12} className="text-primary" />
                        <span>Direct Stakeholder Engagement</span>
                      </span>
                      <span className="text-emerald-500 font-semibold">100% Shipped</span>
                    </div>
                  </div>
                </div>
              </TiltSpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
