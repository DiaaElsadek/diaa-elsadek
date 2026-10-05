"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./section-header";
import {
  Terminal,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Code2,
  Database,
  Cloud,
  Wrench,
  LineChart,
} from "lucide-react";
import { SKILL_CATEGORIES, SkillItem } from "@/lib/data/skills";

function getCategoryIcon(catId: string) {
  switch (catId) {
    case "languages":
      return Code2;
    case "frontend":
      return Layers;
    case "backend":
      return Cpu;
    case "databases":
      return Database;
    case "cloud-devops":
      return Cloud;
    case "engineering":
      return ShieldCheck;
    case "product-analysis":
      return LineChart;
    case "tools":
      return Wrench;
    default:
      return Terminal;
  }
}

export default function TechEcosystem() {
  const allSkills = useMemo(() => {
    const map: Record<string, SkillItem> = {};
    SKILL_CATEGORIES.forEach((cat) => {
      cat.skills.forEach((s) => {
        map[s.name] = s;
      });
    });
    return map;
  }, []);

  const [selectedSkillName, setSelectedSkillName] = useState<string>("ASP.NET Core");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");

  const activeSkill = allSkills[selectedSkillName] || allSkills["ASP.NET Core"] || SKILL_CATEGORIES[0].skills[0];

  const filteredCategories = useMemo(() => {
    if (activeCategoryFilter === "all") return SKILL_CATEGORIES;
    return SKILL_CATEGORIES.filter((c) => c.id === activeCategoryFilter);
  }, [activeCategoryFilter]);

  return (
    <section
      id="stack"
      className="section-spacing border-t border-border relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <SectionHeader number="04" title="Technology Ecosystem" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 -mt-8">
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Technologies are tools, not dogmas. Spanning high-throughput compiled .NET enterprise backends to reactive Next.js client architectures.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-secondary/50 border border-border shrink-0 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveCategoryFilter("all")}
              className={`px-3 py-1 text-xs font-mono rounded-lg capitalize transition-all cursor-pointer ${activeCategoryFilter === "all"
                  ? "bg-background text-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              All
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeCategoryFilter === cat.id
                    ? "bg-background text-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tech Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {filteredCategories.map((category) => {
              const CatIcon = getCategoryIcon(category.id);
              return (
                <div key={category.id} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CatIcon size={13} className="text-primary" />
                    <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest font-semibold block">
                      {category.label}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground/60">
                      ({category.skills.length})
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => {
                      const isSelected = activeSkill.name === skill.name;

                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedSkillName(skill.name)}
                          className={`group p-3.5 rounded-xl border cursor-pointer select-none transition-all duration-200 flex flex-col justify-between min-h-[76px] ${isSelected
                              ? "border-primary bg-primary/10 shadow-md shadow-primary/10"
                              : "border-border bg-card/70 hover:border-border-hover hover:bg-card text-muted-foreground"
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-sm font-semibold tracking-tight transition-colors ${isSelected
                                  ? "text-foreground"
                                  : "text-foreground/90 group-hover:text-foreground"
                                }`}
                            >
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                              {skill.experienceLevel}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-muted-foreground mt-1">
                            {skill.note}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Node Telemetry Inspector (5 cols sticky) */}
          <div className="lg:col-span-5 sticky top-24 w-full">
            <div className="border border-border bg-card rounded-2xl p-6 relative overflow-hidden shadow-2xl space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-primary" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-semibold">
                    Skill Node Inspector
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Production Ready
                </span>
              </div>

              {/* Node Specs */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                        Technology / Capability
                      </span>
                      <h4 className="text-2xl font-bold text-foreground mt-0.5">
                        {activeSkill.name}
                      </h4>
                      <span className="text-xs font-mono text-primary font-medium mt-0.5 block">
                        {activeSkill.note}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono text-primary bg-primary/10 border border-primary/20 font-medium">
                      {activeSkill.category}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase block mb-1">
                      Technical Summary
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {activeSkill.summary}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-secondary/50 border border-border/80">
                    <span className="text-[10px] font-mono text-primary uppercase block font-semibold mb-1">
                      Engineering Takeaway
                    </span>
                    <p className="text-xs text-foreground font-medium leading-relaxed">
                      &ldquo;{activeSkill.takeaway}&rdquo;
                    </p>
                  </div>

                  {/* Level & Role Badge */}
                  <div className="p-3 rounded-xl bg-accent/30 border border-border/50 flex items-center justify-between text-xs font-mono">
                    <span className="text-muted-foreground">Proficiency Level:</span>
                    <span className="text-foreground font-semibold">
                      {activeSkill.experienceLevel}
                    </span>
                  </div>

                  {/* Real Production Projects Where Applied */}
                  <div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase block mb-2">
                      Applied In Production Deliverables
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeSkill.usedIn.map((p) => (
                        <span
                          key={p}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-foreground bg-accent border border-border"
                        >
                          <CheckCircle2 size={11} className="text-primary" />
                          <span>{p}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="border-t border-border pt-4 text-[10px] font-mono text-muted-foreground flex justify-between">
                <span>Inspector: Live Scoped</span>
                <span>CV Verified Skill</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
