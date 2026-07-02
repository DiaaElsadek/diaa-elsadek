"use client";

import { motion } from "framer-motion";
import { GitBranch, Mail } from "lucide-react";
import MagneticButton from "./magnetic-button";
import FloatingLines from "@/components/FloatingLines";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative section-spacing border-t border-border overflow-hidden"
    >
      {/* FloatingLines interactive background */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40 mix-blend-plus-lighter dark:mix-blend-screen pointer-events-none">
        <FloatingLines
          linesGradient={["#E945F5","#2F4BC0","#E945F5"]}
          animationSpeed={1.4}
          interactive
          bendRadius={8}
          bendStrength={-0.1}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
          topWavePosition={{ x: 1.0, y: 0.5, rotate: 0 }}
          middleWavePosition={{ x: -1.0, y: 0.0, rotate: 1 }}
        />
      </div>

      <div className="section-container text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4"
        >
          06
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6"
        >
          Let&apos;s Build Something
          <br />
          Meaningful
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-10"
        >
          Open to opportunities where engineering depth meets product ambition.
          If you&apos;re building something that matters, I&apos;d like to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="mailto:diaaelsadek@outlook.com"
            variant="default"
            showArrow={true}
          >
            <span className="flex items-center gap-2">
              <Mail size={16} />
              <span>diaaelsadek@outlook.com</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="https://github.com/diaaelsadek"
            variant="outline"
            showArrow={true}
          >
            <span className="flex items-center gap-2">
              <GitBranch size={16} />
              <span>GitHub</span>
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
