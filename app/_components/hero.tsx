"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import AnimatedText from "./animated-text";
import MagneticButton from "./magnetic-button";
import { ArrowDown, Sparkles, Terminal, Cpu, ShieldCheck } from "lucide-react";

const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });

const HERO_PILLARS = [
  { label: "Multi-Tenancy", icon: Cpu },
  { label: "Subdomain Routing", icon: Terminal },
  { label: "High-Throughput APIs", icon: Sparkles },
  { label: "Clean Architecture", icon: ShieldCheck },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -60]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Subtle radial ambient glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, var(--glow) 0%, transparent 70%)",
        }}
      />

      {/* Interactive Aurora background layer */}
      <div className="absolute inset-0 z-0 opacity-35 mix-blend-screen pointer-events-none dark:opacity-40">
        <Aurora
          colorStops={["#4F46E5", "#818CF8", "#06B6D4"]}
          amplitude={2.5}
          blend={0.5}
        />
      </div>

      <motion.div
        style={{ opacity, y, willChange: "transform, opacity" }}
        className="relative z-10 section-container text-center max-w-4xl mx-auto px-6"
      >
        {/* Availability status line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] text-muted-foreground tracking-widest uppercase">
            Available for contracts & high-impact roles
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="space-y-1">
          <AnimatedText
            text="Building Products,"
            as="h1"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight text-foreground leading-[1.08]"
            delay={0.3}
            staggerChildren={0.015}
          />
          <AnimatedText
            text="Not Just Websites."
            as="h1"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight text-foreground leading-[1.08] text-gradient-primary"
            delay={0.6}
            staggerChildren={0.015}
          />
        </div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          <span className="text-foreground font-semibold">Diaa Elsadek</span> —
          Full-Stack Developer specializing in JavaScript/TypeScript and .NET:
          React, Next.js, and Node.js on one side, ASP.NET Core and SQL Server on the other.
          Owning production platforms end-to-end. Based in Zagazig, Egypt.
        </motion.p>

        {/* Technical Pillars Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-xl mx-auto"
        >
          {HERO_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-muted-foreground border border-border/60 bg-surface/50 backdrop-blur-sm"
              >
                <Icon size={12} className="text-primary" />
                <span>{item.label}</span>
              </span>
            );
          })}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.35 }}
          className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#work" variant="default" showArrow={true}>
            Explore selected work
          </MagneticButton>
          <MagneticButton href="#experience" variant="outline" showArrow={false}>
            Freelance & Experience
          </MagneticButton>
        </motion.div>

        {/* Proof Points Metric Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-12 pt-8 border-t border-border/40 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center"
        >
          <div>
            <span className="block text-lg md:text-xl font-bold text-foreground">
              5 Shipped
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">
              Web Products
            </span>
          </div>
          <div className="border-x border-border/40">
            <span className="block text-lg md:text-xl font-bold text-foreground">
              Freelance
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">
              Active Since 2024
            </span>
          </div>
          <div>
            <span className="block text-lg md:text-xl font-bold text-foreground">
              JS/TS + .NET
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">
              Full-Stack Core
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-primary" />
        </motion.div>
        <ArrowDown size={12} className="text-muted-foreground/60 animate-bounce" />
      </motion.div>
    </section>
  );
}
