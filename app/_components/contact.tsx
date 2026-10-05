"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  Phone,
} from "lucide-react";
import MagneticButton from "./magnetic-button";
import { GithubIcon, LinkedinIcon } from "./social-icons";
import { PROFILE } from "@/lib/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [cairoTime, setCairoTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCairoTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      className="relative section-spacing border-t border-border overflow-hidden"
    >
      {/* Soft radial purple glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-15 dark:opacity-25 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 800px at 50% 60%, rgba(99, 102, 241, 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">

        {/* Main Glassmorphic Card Container */}
        <div className="rounded-3xl border border-border bg-card/80 p-8 sm:p-12 md:p-16 shadow-2xl text-center max-w-4xl mx-auto backdrop-blur-xl relative overflow-hidden">

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-primary bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={12} />
            <span>Initiate Collaboration</span>
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-foreground mb-6 leading-[1.15]">
            Let&apos;s Build Something
            <br />
            <span className="text-gradient-primary">Exceptional & Resilient</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Open to engineering opportunities where technical depth meets product ambition. Whether you're architecting a new SaaS platform or scaling an existing system, let's talk.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              <span>Send an Email</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-mono font-medium text-foreground bg-secondary hover:bg-accent border border-border transition-all duration-200 cursor-pointer"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-emerald-500 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-muted-foreground" />
                  <span>Copy: {PROFILE.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Social Channels & Phone */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-muted-foreground hover:text-foreground bg-accent/50 hover:bg-accent border border-border transition-colors"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
              <ArrowUpRight size={11} className="opacity-60" />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-muted-foreground hover:text-foreground bg-accent/50 hover:bg-accent border border-border transition-colors"
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
              <ArrowUpRight size={11} className="opacity-60" />
            </a>

            <a
              href={`tel:${PROFILE.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-muted-foreground hover:text-foreground bg-accent/50 hover:bg-accent border border-border transition-colors"
            >
              <Phone size={14} className="text-emerald-500" />
              <span>{PROFILE.phone}</span>
            </a>
          </div>

          {/* Location & Timezone Live Widget */}
          <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-primary shrink-0" />
              <span>Zagazig, Egypt</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={13} className="text-primary shrink-0" />
              <span>Local Time: {cairoTime || "06:00 PM"} (UTC+3)</span>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-500 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Response within 24h</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
