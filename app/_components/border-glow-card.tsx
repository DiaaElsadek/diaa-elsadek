"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

interface BorderGlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function BorderGlowCard({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.06)",
}: BorderGlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-300 hover:border-border-hover ${className}`}
      style={{
        background: useTransform(
          [mouseX, mouseY],
          ([x, y]) =>
            `radial-gradient(400px circle at ${x}px ${y}px, ${glowColor}, transparent 60%)`
        ),
      }}
    >
      <div className="relative z-10 bg-surface/80 rounded-lg h-full">
        {children}
      </div>
    </motion.div>
  );
}
