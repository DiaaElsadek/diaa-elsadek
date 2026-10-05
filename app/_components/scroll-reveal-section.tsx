"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles } from "lucide-react";

export default function ScrollRevealSection() {
  return (
    <section className="py-24 sm:py-32 border-t border-border overflow-hidden bg-background relative">
      {/* Soft ambient background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-15 dark:opacity-25 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 800px at 50% 50%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 max-w-4xl mx-auto text-center px-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-primary bg-primary/10 border border-primary/20 mb-8">
          <Sparkles size={12} />
          <span>Core Engineering Philosophy</span>
        </span>

        <ScrollReveal
          baseOpacity={0.12}
          enableBlur={true}
          baseRotation={2.5}
          blurStrength={5}
          containerClassName="my-2"
          textClassName="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-snug"
        >
          Building software is not about writing more code. It is about architecting resilient systems, enforcing clean boundaries, and delivering products that solve real-world problems.
        </ScrollReveal>

        <p className="mt-8 text-xs sm:text-sm font-mono text-muted-foreground uppercase tracking-widest">
          — Diaa Elsadek · Full-Stack Developer
        </p>
      </div>
    </section>
  );
}
