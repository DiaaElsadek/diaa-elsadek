"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to avoid layout shift
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 flex items-center justify-center rounded-full bg-surface-raised border border-border/50 text-foreground hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : -90,
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-[18px] h-[18px]" strokeWidth={1.5} />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 90 : 0,
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-[18px] h-[18px]" strokeWidth={1.5} />
        </motion.div>
      </div>
    </motion.button>
  );
}
