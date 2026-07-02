"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-container py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Diaa Elsadek
          </span>
          <span className="text-xs text-muted-foreground">
            Crafted with intention.
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
