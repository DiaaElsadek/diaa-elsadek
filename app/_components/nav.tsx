"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Systems", href: "#systems" },
  { label: "Stack", href: "#stack" },
  { label: "Principles", href: "#principles" },
  { label: "Vision", href: "#vision" },
];

export default function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const lastScrollY = useRef(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 50);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (latest > lastScrollY.current && latest > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = latest;
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Premium scroll progress tracker */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neutral-600 via-neutral-100 to-neutral-600 origin-left z-[60]"
        style={{ scaleX }}
      />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isHidden ? -100 : 0, 
          opacity: isHidden ? 0 : 1 
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hasScrolled
            ? "bg-background/60 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex items-center justify-between h-14">
          <a
            href="#"
            className="font-mono text-sm text-foreground tracking-tight hover:text-muted transition-colors duration-200"
          >
            d.elsadek
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative text-[13px] tracking-wide transition-colors duration-200 ${
                    activeSection === item.href
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="text-[13px] text-muted hover:text-foreground transition-colors duration-200"
          >
            Get in touch
          </a>
        </nav>
      </motion.header>
    </>
  );
}
