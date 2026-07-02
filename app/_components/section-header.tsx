"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  number,
  title,
  className = "",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`mb-16 md:mb-20 ${className}`}>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4"
      >
        {number}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.25, 0.4, 0.25, 1],
        }}
        className="text-3xl md:text-4xl lg:text-[42px] font-medium tracking-tight text-foreground"
      >
        {title}
      </motion.h2>
    </div>
  );
}
