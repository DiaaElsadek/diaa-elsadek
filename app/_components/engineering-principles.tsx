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
} from "lucide-react";
import SectionHeader from "./section-header";
import TiltSpotlightCard from "./tilt-spotlight-card";

const PRINCIPLES = [
  {
    icon: Wrench,
    title: "Build for maintainability",
    description:
      "Code is read far more than it is written. Every function name, every module boundary, every abstraction is designed for the engineer who reads it six months from now.",
    scenario: "Applied decoupled repository patterns inside my Node.js APIs, isolating MongoDB database query logic entirely from controller request boundaries.",
  },
  {
    icon: TrendingUp,
    title: "Scale from day one",
    description:
      "Architecture decisions compound. Building with scalability in mind from the start doesn't mean over-engineering — it means making choices that don't become bottlenecks.",
    scenario: "Engineered edge subdomain tenant resolution lookup caches, keeping database loads at zero during peak crawler sweeps on multi-tenant DNS nodes.",
  },
  {
    icon: Sparkles,
    title: "Developer experience matters",
    description:
      "Fast feedback loops, clear error messages, intuitive APIs. If the developer experience is painful, the product velocity suffers. DX is a multiplier.",
    scenario: "Developed custom build configuration logs parsing hooks to instantly print compile errors with exact line context references.",
  },
  {
    icon: FolderTree,
    title: "Clean architecture over shortcuts",
    description:
      "Shortcuts save hours today and cost weeks tomorrow. Layered architecture, separation of concerns, and dependency inversion create systems that evolve gracefully.",
    scenario: "Strictly separated business logic models from framework infrastructure hooks using interfaces to decouple database choices.",
  },
  {
    icon: Package,
    title: "Products before technologies",
    description:
      "Technologies are means, not ends. The question is never 'should we use X?' — it's 'does this solve the user's problem better than the alternative?'",
    scenario: "Chose structured monolithic layouts for rapid product cycles before extracting microservices dynamically upon reaching high traffic bounds.",
  },
  {
    icon: Brain,
    title: "Systems thinking over feature thinking",
    description:
      "Features exist within systems. Understanding how components interact, where data flows, and what fails under pressure matters more than shipping the next feature.",
    scenario: "Mapped client queue latency limits on streaming segments rather than adding visual stickers which would degrade media loading graphs.",
  },
];

export default function EngineeringPrinciples() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="principles" className="section-spacing border-t border-border">
      <div className="section-container">
        <SectionHeader number="04" title="Engineering Principles" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="h-full cursor-pointer"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <TiltSpotlightCard className="p-6 md:p-7 h-full flex flex-col justify-between">
                  <div className="relative z-10 flex-1">
                    <div className="p-2.5 rounded-lg border border-border bg-accent w-fit mb-5 transition-colors duration-300">
                      <Icon
                        size={18}
                        className="text-muted group-hover:text-foreground transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-base font-medium text-foreground mb-2.5 tracking-tight flex items-center justify-between">
                      <span>{principle.title}</span>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                        {isExpanded ? "Collapse" : "Expand"}
                      </span>
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative z-10 border-t border-border/40 pt-4 text-xs font-mono text-foreground leading-relaxed"
                      >
                        <span className="text-[10px] text-muted-foreground uppercase block mb-1">
                          Applied Scenario
                        </span>
                        {principle.scenario}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </TiltSpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
