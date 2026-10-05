"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./theme-toggle";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";
import { NAV_ITEMS, PROFILE } from "@/lib/data/profile";

export default function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const lastScrollY = useRef(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 30);

      if (latest > lastScrollY.current && latest > 180 && !mobileMenuOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = latest;
    });
    return () => unsubscribe();
  }, [scrollY, mobileMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Reading Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary via-violet-500 to-cyan-400 origin-left z-[70] shadow-[0_0_12px_rgba(99,102,241,0.5)]"
        style={{ scaleX }}
      />

      {/* Floating Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHidden ? -100 : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none pt-3 md:pt-4 px-4 sm:px-6"
      >
        <div className="section-container flex items-center justify-between pointer-events-auto">
          {/* Brand Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full glass-pill transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-violet-500/20 to-transparent border border-primary/30 group-hover:border-primary transition-colors duration-300">
              <span className="font-mono text-xs font-bold text-foreground">
                DE
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </div>
            <span className="font-mono text-xs font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
              diaa.elsadek
            </span>
          </a>

          {/* Desktop Nav: Floating Capsule */}
          <nav
            aria-label="Main Navigation"
            className={`hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-full glass-pill transition-all duration-500 ${
              hasScrolled
                ? "shadow-lg shadow-black/5 dark:shadow-black/20 border-border/80"
                : "border-border/50"
            }`}
          >
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                const isHovered = hoveredSection === item.href;

                return (
                  <li key={item.href} className="relative">
                    <a
                      href={item.href}
                      onMouseEnter={() => setHoveredSection(item.href)}
                      onMouseLeave={() => setHoveredSection(null)}
                      className={`relative z-10 block px-3.5 py-1.5 text-[12px] font-medium tracking-wide transition-colors duration-200 ${
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </a>

                    {/* Active pill indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-accent border border-border shadow-xs z-0"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover indicator (when not active) */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-full bg-accent/50 z-0"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Actions: Theme Toggle + CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="glass-pill p-1 rounded-full flex items-center justify-center">
              <ThemeToggle />
            </div>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-full shadow-md shadow-primary/25 transition-all duration-300 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 group relative overflow-hidden"
            >
              <span>Get in touch</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden glass-pill p-2 rounded-full text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 pt-24 px-6 md:hidden overflow-y-auto flex flex-col justify-between pb-8"
          >
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                Navigation
              </span>
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2 text-2xl font-medium tracking-tight transition-colors ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      0{i}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="space-y-4 pt-6 border-t border-border"
            >
              <div className="flex items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for contracts & full-time
                </span>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-primary-foreground bg-primary py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300"
              >
                <span>Get in touch</span>
                <ArrowUpRight size={16} />
              </a>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-6 pt-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
