"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  Languages,
  Sparkles,
  Trophy,
  Users,
  Code2,
} from "lucide-react";
import SectionHeader from "./section-header";
import TiltSpotlightCard from "./tilt-spotlight-card";
import {
  EDUCATION,
  CREDENTIALS,
  SPOKEN_LANGUAGES,
  CredentialKind,
} from "@/lib/data/credentials";

function getCredentialIcon(kind: CredentialKind) {
  switch (kind) {
    case "award":
      return Trophy;
    case "teaching":
      return Users;
    case "certification":
      return Award;
    case "training":
      return Code2;
    default:
      return BookOpen;
  }
}

export default function Credentials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="credentials"
      className="relative section-spacing overflow-hidden border-t border-border"
    >
      {/* Soft ambient radial background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-15 dark:opacity-25 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 800px at 70% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeader number="05" title="Education &amp; Credentials" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 -mt-8">
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Academic computer science grounding reinforced by rigorous competitive programming, specialized government fellowships, and industry certifications.
          </p>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-mono text-muted-foreground shrink-0">
            <Trophy size={14} className="text-amber-400" />
            <span>ECPC ICPC Awarded</span>
          </div>
        </div>

        <div ref={ref} className="space-y-12">
          {/* Top Row: Degree & Spoken Languages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Education Degree Card (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:col-span-7"
            >
              <TiltSpotlightCard
                className="p-6 sm:p-8 h-full flex flex-col justify-between"
                glowColor="rgba(99, 102, 241, 0.12)"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-primary bg-primary/10 border border-primary/20 font-medium">
                      <GraduationCap size={13} />
                      <span>Formal Academic Degree</span>
                    </span>

                    <span className="text-xs font-mono text-emerald-500 font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10">
                      {EDUCATION.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-1">
                    {EDUCATION.degree}
                  </h3>
                  <p className="text-base font-medium text-foreground/90 mb-3">
                    {EDUCATION.field}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <BookOpen size={12} className="text-primary" />
                      {EDUCATION.institution}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-primary" />
                      {EDUCATION.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-primary" />
                      {EDUCATION.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {EDUCATION.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-border/60">
                    {EDUCATION.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-border/50 text-[11px] font-mono text-muted-foreground flex justify-between">
                  <span>Major: Computer &amp; Information Science</span>
                  <span>Class of 2026</span>
                </div>
              </TiltSpotlightCard>
            </motion.div>

            {/* Spoken Languages & Global Readiness (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <div className="border border-border bg-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-xl space-y-6">
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Languages size={15} className="text-primary" />
                      <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest font-semibold">
                        Language Proficiency
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500 font-semibold">
                      Global Remote Ready
                    </span>
                  </div>

                  <div className="space-y-6">
                    {SPOKEN_LANGUAGES.map((lang) => (
                      <div key={lang.language} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-base font-semibold text-foreground">
                              {lang.language}
                            </span>
                            <span className="text-xs font-mono text-muted-foreground block">
                              {lang.level}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                            {lang.proficiency}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${lang.percentage}%` } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/80 text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground block mb-1">
                    Bilingual Engineering Communication
                  </span>
                  Comfortable conducting live architecture reviews, client discovery workshops, and code discussions in both English and Arabic.
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications, Training & Achievements Timeline Grid */}
          <div className="space-y-4">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest font-semibold block mb-4">
              Certifications, Awards &amp; Specialized Training
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CREDENTIALS.map((item, idx) => {
                const Icon = getCredentialIcon(item.kind);
                const isAward = item.kind === "award";

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + idx * 0.08,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className={`rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                      isAward
                        ? "border-amber-500/40 bg-amber-500/5 hover:border-amber-500/60 shadow-lg shadow-amber-500/5"
                        : "border-border bg-card/80 hover:border-border-hover hover:bg-card"
                    }`}
                  >
                    <div>
                      {/* Badge & Period */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                            isAward
                              ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                              : "bg-secondary text-muted-foreground border border-border"
                          }`}
                        >
                          <Icon size={12} className={isAward ? "text-amber-400" : "text-primary"} />
                          <span>{item.badge}</span>
                        </span>

                        <span className="text-[11px] font-mono text-muted-foreground">
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h4 className="text-base sm:text-lg font-semibold text-foreground tracking-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs font-mono text-primary font-medium mb-3">
                        {item.subtitle}
                      </p>
                      <p className="text-[11px] font-mono text-muted-foreground mb-3">
                        {item.issuer}
                      </p>

                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="pt-3 border-t border-border/50">
                      <div className="flex flex-wrap gap-1">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-muted-foreground bg-surface border border-border/50"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
