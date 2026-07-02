"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Radio, Users, Zap, Globe } from "lucide-react";
import TiltSpotlightCard from "./tilt-spotlight-card";
import StreamingSimulator from "./streaming-simulator";

const DETAILS = [
  {
    icon: Radio,
    title: "Real-Time Streaming",
    description:
      "Optimized content delivery with adaptive streaming quality. Built for low-latency educational experiences across varying network conditions.",
  },
  {
    icon: Users,
    title: "University-Scale",
    description:
      "Designed to handle concurrent access patterns typical of university environments — peak loads during lecture hours, exam periods, and content releases.",
  },
  {
    icon: Zap,
    title: "Performance-First",
    description:
      "Aggressive caching strategies, optimized asset delivery, and server-side rendering for instant page loads. Core Web Vitals optimized from day one.",
  },
  {
    icon: Globe,
    title: "Accessible & Responsive",
    description:
      "Fully responsive across all devices with accessibility built into the component architecture. WCAG-compliant interactive elements.",
  },
];

export default function UniStreamCaseStudy() {
  return (
    <section id="unistream" className="section-spacing border-t border-border">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4"
          >
            Case Study
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground"
          >
            UniStream22
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-muted max-w-2xl"
          >
            A university streaming and educational content platform built for
            modern learning environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mt-6"
          >
            {["React", "Node.js", "Express", "MongoDB"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono text-muted-foreground border border-border bg-accent"
                >
                  {tag}
                </span>
              )
            )}
            <a
              href="https://uni-stream22.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-foreground border border-border-hover bg-accent hover:bg-accent-hover transition-colors duration-300"
            >
              Live Production
              <ArrowUpRight size={12} />
            </a>
          </motion.div>
        </div>

        {/* Problem → Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-4">
              The Problem
            </h3>
            <p className="text-base text-muted leading-[1.8]">
              University students often struggle to access lecture recordings and
              educational content in a centralized, organized way. Scattered
              across Google Drive links, WhatsApp groups, and email threads —
              content becomes impossible to discover and navigate.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-4">
              The Solution
            </h3>
            <p className="text-base text-muted leading-[1.8]">
              UniStream22 provides a single, well-organized platform for
              streaming and accessing educational content. Organized by course,
              semester, and instructor — with optimized streaming, search, and a
              modern UI that makes learning content as accessible as Netflix.
            </p>
          </motion.div>
        </div>

        {/* Streaming Simulator Playground */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-10">
            Interactive Adaptive Bitrate Simulator
          </h3>
          <StreamingSimulator />
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DETAILS.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="h-full"
              >
                <TiltSpotlightCard className="p-6 h-full" glowColor="rgba(139, 92, 246, 0.05)">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg border border-border bg-accent group-hover:border-border-hover transition-colors duration-300">
                      <Icon size={16} className="text-muted" />
                    </div>
                    <h4 className="text-sm font-medium text-foreground">
                      {detail.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {detail.description}
                  </p>
                </TiltSpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
