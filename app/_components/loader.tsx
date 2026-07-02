"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "diaa.elsadek: init v1.0.0",
  "loading core engine components...",
  "mounting system architecture layers...",
  "establishing subdomain routing middleware...",
  "initializing multi-tenant DB scopes...",
  "calibrating adaptive streaming graphs...",
  "tuning DX multiplier and spring dynamics...",
  "system ready. welcome.",
];

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if the user already loaded the page in the current session
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("diaa-portfolio-loaded");
      if (hasLoaded) {
        setTimeout(() => {
          setLoading(false);
        }, 0);
        return;
      }
    }

    // Incremental progress & log revealing sequence
    let currentLogIndex = 0;
    const logInterval = setInterval(() => {
      if (currentLogIndex < BOOT_LOGS.length) {
        setVisibleLogs((prev) => [...prev, BOOT_LOGS[currentLogIndex]]);
        currentLogIndex++;
      }
    }, 250);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(logInterval);
          // Wait slightly after reaching 100% before closing loader
          setTimeout(() => {
            setLoading(false);
            if (typeof window !== "undefined") {
              sessionStorage.setItem("diaa-portfolio-loaded", "true");
            }
          }, 400);
          return 100;
        }
        // Random step increment for realistic loading feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loader-wrapper"
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        exit={{
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
        className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col justify-between p-6 md:p-12 font-mono select-none"
      >
        {/* Terminal Header */}
        <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest border-b border-border pb-4">
          <div>System Initialization</div>
          <div>Diaa Elsadek — portfolio</div>
        </div>

        {/* Logs Area */}
        <div className="flex-1 my-10 overflow-hidden flex flex-col justify-end gap-1.5 max-w-2xl text-xs md:text-sm text-muted-foreground">
          {visibleLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`leading-relaxed ${
                index === BOOT_LOGS.length - 1
                  ? "text-foreground font-semibold flex items-center gap-2"
                  : ""
              }`}
            >
              {index === BOOT_LOGS.length - 1 && (
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              )}
              <span className="text-muted-foreground mr-2">&gt;</span>
              {log}
            </motion.div>
          ))}
        </div>

        {/* Progress & Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1 max-w-md">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>INITIALIZING SYSTEM STATE</span>
              <span>{progress}%</span>
            </div>
            {/* Custom progress track */}
            <div className="h-[2px] bg-accent rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-foreground"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground tracking-wider uppercase text-right">
            Status: READY FOR CONNECT
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
