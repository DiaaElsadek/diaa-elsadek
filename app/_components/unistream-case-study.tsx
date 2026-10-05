"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Radio,
  Users,
  Zap,
  Globe,
  Video,
  Server,
  Workflow,
  Sparkles,
  PlayCircle,
  Cpu,
} from "lucide-react";
import TiltSpotlightCard from "./tilt-spotlight-card";
import StreamingSimulator from "./streaming-simulator";

const DETAILS = [
  {
    icon: Radio,
    title: "Adaptive Bitrate Streaming (ABR)",
    metric: "1080p -> 720p -> 480p",
    description:
      "Dynamically matches video chunk resolutions to client bandwidth drops in real time, preventing playback stall cycles across unstable campus cellular networks.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "High-Concurrency Architecture",
    metric: "Lecture Hour Scale",
    description:
      "Engineered to withstand sudden traffic bursts during university lecture releases and exam seasons. Static catalog assets cached at the CDN perimeter.",
    color: "#6366F1",
  },
  {
    icon: Zap,
    title: "Core Web Vitals & Caching",
    metric: "LCP < 1.1s",
    description:
      "Server-side rendering for catalog indexes, aggressive browser HTTP caching headers, and optimized video thumbnail sprites for instant browsing.",
    color: "#F59E0B",
  },
  {
    icon: Globe,
    title: "Accessible & Responsive Architecture",
    metric: "WCAG 2.1 AA",
    description:
      "Fully responsive video container with keyboard navigation, screen reader ARIA hooks, high-contrast subtitles, and low-power hardware acceleration.",
    color: "#06B6D4",
  },
];

export default function UniStreamCaseStudy() {
  return (
    <section id="unistream" className="section-spacing border-t border-border relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 mb-4"
          >
            <Video size={13} />
            <span>Streaming & Media Platform Case Study</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-foreground"
          >
            UniStream22
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            A high-performance university educational video streaming platform designed to provide a frictionless, Netflix-quality learning experience for higher education students.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2 mt-6"
          >
            {["React", "Node.js", "Express", "MongoDB", "HLS / DASH", "Adaptive Bitrate"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono text-muted-foreground border border-border bg-accent/60"
                >
                  {tag}
                </span>
              )
            )}
            <a
              href="https://uni-stream22.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-medium text-foreground bg-accent hover:bg-accent-hover border border-primary/40 hover:border-primary transition-all duration-200"
            >
              <span>Live Production App</span>
              <ArrowUpRight size={12} className="text-primary" />
            </a>
          </motion.div>
        </div>

        {/* Problem → Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold block mb-3">
              The Problem Space
            </span>
            <h3 className="text-xl font-medium text-foreground mb-3">
              Scattered Folders & Video Buffering Chaos
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              University students lose dozens of hours every semester hunting for lecture links scattered across temporary Google Drive quotas, unlisted YouTube playlists, and pirated Telegram chats. Lack of standardized video players results in stuttering video on slower 3G/4G campus networks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 shadow-sm"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-bold block mb-3">
              The Architecture Solution
            </span>
            <h3 className="text-xl font-medium text-foreground mb-3">
              Centralized Taxonomy & Segmented Chunk Ingestion
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              UniStream22 delivers an organized catalog indexed by university department, semester, and professor. Media assets are chunked into standardized video playlists, enabling adaptive streaming, instant scrubbing, and zero-stutter lecture playback.
            </p>
          </motion.div>
        </div>

        {/* Media Pipeline Schematic */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-4">
            Adaptive Streaming Pipeline Architecture
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl mb-8">
            How lecture footage is transcoded into multi-quality HLS segments and distributed to thousands of concurrent student devices.
          </p>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xl overflow-x-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[650px] text-center">
              
              <div className="flex-1 p-4 rounded-xl bg-accent/40 border border-border/80 text-left">
                <span className="text-[10px] font-mono text-emerald-500 block uppercase">Step 01 • Upload</span>
                <span className="text-xs font-bold text-foreground font-mono block mt-1">
                  Raw Lecture MP4
                </span>
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Chunked multi-part upload to temporary staging bucket
                </span>
              </div>

              <div className="text-muted-foreground shrink-0 hidden md:block">→</div>

              <div className="flex-1 p-4 rounded-xl bg-accent/40 border border-border/80 text-left">
                <span className="text-[10px] font-mono text-emerald-500 block uppercase">Step 02 • Transcode</span>
                <span className="text-xs font-bold text-foreground font-mono block mt-1">
                  FFmpeg / ABR Worker
                </span>
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Encodes to 1080p, 720p, 480p H.264 video ladders
                </span>
              </div>

              <div className="text-muted-foreground shrink-0 hidden md:block">→</div>

              <div className="flex-1 p-4 rounded-xl bg-accent/40 border border-border/80 text-left">
                <span className="text-[10px] font-mono text-emerald-500 block uppercase">Step 03 • Manifest</span>
                <span className="text-xs font-bold text-foreground font-mono block mt-1">
                  HLS Playlist (.m3u8)
                </span>
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Generates 2-second .ts segment files and master index
                </span>
              </div>

              <div className="text-muted-foreground shrink-0 hidden md:block">→</div>

              <div className="flex-1 p-4 rounded-xl bg-accent/40 border border-border/80 text-left">
                <span className="text-[10px] font-mono text-emerald-500 block uppercase">Step 04 • Playback</span>
                <span className="text-xs font-bold text-foreground font-mono block mt-1">
                  Client Video Engine
                </span>
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Dynamic quality adaptation according to real-time bandwidth
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Interactive Streaming Simulator Playground */}
        <div className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-semibold block mb-2">
              Interactive Media Telemetry
            </span>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
              Interactive Adaptive Bitrate Simulator
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Toggle between network profiles to observe how the player adapts bitrate, buffer headroom, and chunk download intervals on the fly.
            </p>
          </div>
          <StreamingSimulator />
        </div>

        {/* Architectural Details Grid */}
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
                <TiltSpotlightCard className="p-6 md:p-8 h-full" glowColor={`${detail.color}15`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2.5 rounded-xl border border-border bg-accent"
                        style={{ color: detail.color }}
                      >
                        <Icon size={18} />
                      </div>
                      <h4 className="text-base font-semibold text-foreground">
                        {detail.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
                      {detail.metric}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
