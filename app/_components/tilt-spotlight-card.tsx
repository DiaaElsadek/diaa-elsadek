"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useCallback, useEffect, useState } from "react";

interface TiltSpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function TiltSpotlightCard({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.04)",
}: TiltSpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Only enable 3D tilt on devices that support hover (prevents CPU overhead on mobile/touch)
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  // Mouse absolute offsets relative to card boundaries
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Rotation angles for 3D card tilt
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);

  // Springs for smooth fluid micro-animations
  const springX = useSpring(mouseX, { stiffness: 220, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 28 });
  const rotateX = useSpring(rotateXVal, { stiffness: 180, damping: 24 });
  const rotateY = useSpring(rotateYVal, { stiffness: 180, damping: 24 });

  const handleMouseEnter = useCallback(() => {
    if (!canHover) return;
    const card = cardRef.current;
    if (card) {
      rectRef.current = card.getBoundingClientRect();
    }
  }, [canHover]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover) return;
    
    // Use cached rect to prevent layout thrashing on every mousemove
    let rect = rectRef.current;
    if (!rect && cardRef.current) {
      rect = cardRef.current.getBoundingClientRect();
      rectRef.current = rect;
    }
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 7; // Max tilt rotation in degrees

    const rotY = ((x - centerX) / centerX) * maxTilt;
    const rotX = -((y - centerY) / centerY) * maxTilt;

    rotateXVal.set(rotX);
    rotateYVal.set(rotY);
  }, [canHover, mouseX, mouseY, rotateXVal, rotateYVal]);

  const handleMouseLeave = useCallback(() => {
    rectRef.current = null;
    mouseX.set(0);
    mouseY.set(0);
    rotateXVal.set(0);
    rotateYVal.set(0);
  }, [mouseX, mouseY, rotateXVal, rotateYVal]);

  const spotlightBg = useTransform(
    [springX, springY],
    ([x, y]) =>
      x === 0 && y === 0
        ? `radial-gradient(350px circle at 50% 50%, rgba(255,255,255,0.01), transparent 70%)`
        : `radial-gradient(350px circle at ${x}px ${y}px, ${glowColor}, transparent 65%)`
  );

  return (
    <div style={{ perspective: 1200 }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: canHover ? rotateX : 0,
          rotateY: canHover ? rotateY : 0,
          transformStyle: "preserve-3d",
          background: spotlightBg,
        }}
        className={`relative group overflow-hidden rounded-xl border border-border bg-surface/50 transition-colors duration-500 hover:border-border-hover hover:bg-surface ${className}`}
      >
        {/* Dynamic spotlights inside the border/glow track */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
          style={{
            background: useTransform(
              [springX, springY],
              ([x, y]) =>
                `radial-gradient(250px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.05), transparent 70%)`
            ),
          }}
        />

        <div
          className="relative z-10 h-full w-full"
          style={{ transform: canHover ? "translateZ(8px)" : "none" }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
