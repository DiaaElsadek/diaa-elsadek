"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "./animated-text";
import MagneticButton from "./magnetic-button";
import Aurora from "@/components/Aurora";

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
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
      />
      
      {/* Interactive Aurora background layer */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <Aurora
          colorStops={["#5227FF","#7cff67","#5227FF"]}
          amplitude={2.8}
          blend={0.5}
        />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 section-container text-center max-w-4xl mx-auto px-6"
      >
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            Available for work
          </span>
        </motion.div>

        {/* Main headline */}
        <AnimatedText
          text="Building Products,"
          as="h1"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1]"
          delay={0.3}
          staggerChildren={0.015}
        />
        <AnimatedText
          text="Not Just Websites."
          as="h1"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.1] mt-1"
          delay={0.6}
          staggerChildren={0.015}
        />

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 text-base md:text-lg text-muted max-w-xl mx-auto leading-relaxed"
        >
          Diaa Elsadek — Full-Stack Software Engineer crafting scalable SaaS
          systems and modern web applications. Based in Egypt.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <MagneticButton href="#work" variant="default" showArrow={true}>
            View selected work
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline" showArrow={false}>
            Get in touch
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
