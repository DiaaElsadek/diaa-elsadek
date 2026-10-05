"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  TrendingUp,
  Sparkles,
  FolderTree,
  Package,
  Brain,
  ChevronDown,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "./section-header";
import TiltSpotlightCard from "./tilt-spotlight-card";

interface Principle {
  number: string;
  icon: any;
  title: string;
  tag: string;
  description: string;
  scenario: string;
  impact: string;
  color: string;
}

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    icon: Wrench,
    title: "Build for Maintainability",
    tag: "Clean Code",
    description:
      "Code is read far more than it is written. Every function signature, module boundary, and data model is engineered for the teammate who debugs it six months from now.",
    scenario:
      "Implemented isolated repository layers within Express services, shielding MongoDB query mutations completely from HTTP controller request handlers.",
    impact: "Zero regression rate when updating database queries.",
    color: "#6366F1",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Scale From Day One",
    tag: "Systems Thinking",
    description:
      "Architecture decisions compound over time. Designing for scale early doesn't mean over-engineering — it means choosing schemas and partition boundaries that avoid future deadlocks.",
    scenario:
      "Engineered edge DNS subdomain lookup caching, keeping database load near zero during high-frequency crawler sweeps across multi-tenant academy domains.",
    impact: "Sub-30ms edge response times under peak load.",
    color: "#06B6D4",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Developer Experience Matters",
    tag: "DX Multiplier",
    description:
      "Fast feedback loops, strict TypeScript contracts, and actionable error logs. When developer ergonomics are painful, product velocity tanks. DX is a direct business multiplier.",
    scenario:
      "Configured custom build-phase terminal diagnostics with exact stack traces and file links, shortening local feedback cycles for team members.",
    impact: "30% faster debugging cycles during sprint releases.",
    color: "#10B981",
  },
  {
    number: "04",
    icon: FolderTree,
    title: "Clean Architecture Over Shortcuts",
    tag: "Architecture",
    description:
      "Shortcuts save hours today and cost weeks tomorrow. Layered architecture, separation of concerns, and dependency inversion build software assets that evolve gracefully.",
    scenario:
      "Enforced domain-driven boundaries between authentication logic, payment gateways, and streaming orchestrators via clean interfaces.",
    impact: "Swapped payment providers without touching core domain models.",
    color: "#8B5CF6",
  },
  {
    number: "05",
    icon: Package,
    title: "Products Before Technologies",
    tag: "Pragmatism",
    description:
      "Technologies are vehicles, not endpoints. The core question is never 'should we adopt the newest framework?' — it's 'does this solve the user's problem with maximum reliability?'",
    scenario:
      "Chose a well-structured modular monolith for rapid MVP release rather than complex microservices, accelerating time-to-market by 4 months.",
    impact: "Launched production platform 4 months ahead of schedule.",
    color: "#F59E0B",
  },
  {
    number: "06",
    icon: Brain,
    title: "Systems Thinking Over Feature Thinking",
    tag: "Resilience",
    description:
      "Features exist within dynamic systems. Understanding how components interact under load, where backpressure builds, and what degrades gracefully matters far more than shipping isolated buttons.",
    scenario:
      "Implemented adaptive video bitrate switching and client-side segment buffer limits rather than adding visual stickers that would inflate chunk downloads.",
    impact: "Smooth video playback on unstable 3G networks.",
    color: "#EC4899",
  },
];

export default function EngineeringPrinciples() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="principles" className="section-spacing border-t border-border relative overflow-hidden">
      <div className="section-container relative z-10">
        
        <SectionHeader number="06" title="Engineering Principles" />

        <div className="max-w-2xl mb-12 -mt-8">
          <p className="text-base md:text-lg text-muted-foreground">
            The guiding engineering tenets that shape how I architect software, organize codebases, and make tradeoffs in production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={principle.number}
                className="h-full cursor-pointer select-none"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <TiltSpotlightCard
                  className="p-6 md:p-7 h-full flex flex-col justify-between"
                  glowColor={`${principle.color}15`}
                >
                  <div className="relative z-10 flex-1">
                    
                    {/* Top line with Icon & Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="p-2.5 rounded-xl border border-border bg-accent"
                        style={{ color: principle.color }}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
                          {principle.tag}
                        </span>
                        <span className="font-mono text-sm font-bold text-muted-foreground/60">
                          #{principle.number}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                      {principle.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>

                  {/* Expand Toggle & Scenario Drawer */}
                  <div className="pt-4 mt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs font-mono text-primary font-medium">
                      <span>{isExpanded ? "Hide Applied Scenario" : "View Applied Scenario"}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden space-y-2 p-3 rounded-xl bg-secondary/50 border border-border/60 text-xs font-mono"
                        >
                          <div>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider block mb-1">
                              Production Scenario
                            </span>
                            <p className="text-foreground leading-relaxed text-[11px]">
                              {principle.scenario}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-border/40 flex items-center gap-1.5 text-[10px] text-emerald-500 font-semibold">
                            <CheckCircle2 size={12} className="shrink-0" />
                            <span>{principle.impact}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </TiltSpotlightCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
