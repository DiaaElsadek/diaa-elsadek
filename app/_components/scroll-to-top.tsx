"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setScrollPercentage(Math.round(v * 100));
      setIsVisible(v > 0.08);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          onClick={scrollToTop}
          aria-label={`Scroll to top (${scrollPercentage}% read)`}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-2.5 rounded-full glass-pill shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer text-foreground flex items-center justify-center"
        >
          {/* Circular progress ring */}
          <svg className="w-10 h-10 -rotate-90" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="text-border/60"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="text-primary transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowUp className="w-4 h-4 text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
