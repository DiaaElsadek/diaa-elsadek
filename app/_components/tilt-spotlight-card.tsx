"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

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

  // Mouse absolute offsets relative to card boundaries
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Rotation angles for 3D card tilt
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);

  // Springs for smooth fluid micro-animations
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });
  const rotateX = useSpring(rotateXVal, { stiffness: 150, damping: 22 });
  const rotateY = useSpring(rotateYVal, { stiffness: 150, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 8; // Max tilt rotation in degrees

    const rotY = ((x - centerX) / centerX) * maxTilt;
    const rotX = -((y - centerY) / centerY) * maxTilt;

    rotateXVal.set(rotX);
    rotateYVal.set(rotY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    rotateXVal.set(0);
    rotateYVal.set(0);
  };

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
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
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
          style={{ transform: "translateZ(8px)" }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
