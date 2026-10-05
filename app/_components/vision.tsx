"use client";

import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  Sparkles,
  Layers,
  ShieldCheck,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import SectionHeader from "./section-header";

const PILLARS = [
  {
    icon: GraduationCap,
    title: "Democratizing Education",
    description:
      "Great software levels playing fields. One well-architected, accessible platform can empower thousands of educators who would otherwise be stranded by fragmented, costly tools.",
    color: "#6366F1",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Rigor",
    description:
      "Codebases are living artifacts. Clean architectures, explicit schemas, and systems thinking ensure applications remain stable under high concurrency and evolve gracefully.",
    color: "#10B981",
  },
  {
    icon: Sparkles,
    title: "Product Craftsmanship",
    description:
      "Engineering excellence and aesthetic delight are not opposites. The highest leverage products combine rock-solid distributed backends with fluid, cinematic user interfaces.",
    color: "#06B6D4",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="section-spacing border-t border-border relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-10 dark:opacity-20 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 700px at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeader number="07" title="Long-Term Vision" />

        {/* Hero Manifesto Quote */}
        <div className="max-w-3xl mb-16 -mt-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.25]"
          >
            "I don't just write code. I build resilient systems that democratize how people{" "}
            <span className="text-gradient-primary font-semibold">learn, teach, and create</span>."
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            EduCenter isn't just a project — it's a thesis. A demonstration that modern software engineering can unlock agency for independent instructors. My trajectory is dedicated to building scalable products at the intersection of technology and education where technical depth serves a purpose beyond itself.
          </motion.p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-border-hover transition-colors"
              >
                <div>
                  <div
                    className="p-3 rounded-xl border border-border bg-accent w-fit mb-5"
                    style={{ color: pillar.color }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Academic & Professional Track Record Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-secondary/30 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-semibold">
              Academic & Professional Foundation
            </span>
            <h4 className="text-base sm:text-lg font-semibold text-foreground">
              Higher Technological Institute (HTI) — 10th of Ramadan
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Bachelor of Science in Computer and Information Science (2022–2026) • Active full-stack software engineer since 2024.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Graduating 2026
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
