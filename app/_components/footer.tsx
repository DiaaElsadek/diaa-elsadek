"use client";

import { Mail, ArrowUpRight, ArrowUp, Sparkles, Terminal, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";
import { NAV_ITEMS, PROFILE } from "@/lib/data/profile";

const SOCIALS = [
  { label: "GitHub", href: PROFILE.github, icon: GithubIcon },
  { label: "LinkedIn", href: PROFILE.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: Mail },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border bg-card/40 pt-16 pb-12 relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Bio (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/20 font-mono text-xs font-bold text-primary">
                DE
              </div>
              <span className="font-mono text-xl font-bold tracking-tight text-foreground">
                diaa.elsadek
              </span>
            </div>

            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Full-Stack Developer specializing in JavaScript/TypeScript and .NET (React, Next.js, ASP.NET Core). Architecting and shipping production SaaS, healthcare marketplaces, and booking platforms.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for high-impact contracts & full-time roles</span>
            </div>
          </div>

          {/* Quick Nav (1 col) */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect (1 col) */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Icon size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>{social.label}</span>
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Status & Back to Top (1 col) */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold mb-4">
              Environment
            </h3>

            <div className="p-3 rounded-xl bg-secondary/50 border border-border/80 text-[11px] font-mono space-y-1.5 text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Next.js</span>
                <span className="text-foreground font-semibold">16.2 (App Router)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>React</span>
                <span className="text-foreground font-semibold">19.2</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Status</span>
                <span className="text-emerald-500 font-semibold">Online (Edge)</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-accent text-xs font-mono text-foreground transition-all duration-200 cursor-pointer"
            >
              <ArrowUp size={13} className="text-primary" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/60 text-xs font-mono text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Diaa Elsadek. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5">
            Crafted with intention &amp; code in Egypt
          </span>
        </div>

      </div>
    </footer>
  );
}
