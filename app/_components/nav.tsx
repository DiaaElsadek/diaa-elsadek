"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./theme-toggle";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Systems", href: "#systems" },
  { label: "Stack", href: "#stack" },
  { label: "Principles", href: "#principles" },
  { label: "Identity", href: "#identity" },
];

export default function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
      
      if (latest > lastScrollY.current && latest > 150 && !mobileMenuOpen) {
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
      { rootMargin: "-40% 0px -40% 0px" }
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
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 origin-left z-[60]"
        style={{ scaleX }}
      />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isHidden ? -100 : 0, 
          opacity: isHidden ? 0 : 1 
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        style={{ willChange: "transform, opacity" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hasScrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16 md:h-14">
          <a
            href="#"
            className="font-mono text-sm font-medium text-foreground tracking-tight hover:text-primary transition-colors duration-200 z-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            d.elsadek
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 z-50">
            <ThemeToggle />
            
            <a
              href="#contact"
              className="hidden md:flex text-[13px] font-medium text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-full transition-all duration-200"
            >
              Get in touch
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 -mr-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 items-start">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl font-medium tracking-tight ${
                    activeSection === item.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 + 0.1 }}
                className="w-full pt-8 mt-4 border-t border-border"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center text-base font-medium text-primary-foreground bg-primary py-4 rounded-xl transition-all duration-200"
                >
                  Get in touch
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
