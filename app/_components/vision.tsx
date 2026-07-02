"use client";

import { motion } from "framer-motion";
import SectionHeader from "./section-header";

export default function Vision() {
  return (
    <section id="vision" className="section-spacing border-t border-border">
      <div className="section-narrow">
        <SectionHeader number="05" title="Long-Term Vision" />

        <div className="space-y-8 -mt-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-base md:text-lg text-muted leading-[1.85]"
          >
            I don&apos;t want to be an engineer who writes code. I want to be an
            engineer who builds systems that change how people learn, work, and
            create.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-muted leading-[1.85]"
          >
            EduCenter isn&apos;t just a project — it&apos;s a thesis.
            A belief that technology should democratize access to education,
            that great software can level playing fields, and that one
            well-architected platform can empower thousands of educators who
            would otherwise be stuck with fragmented tools.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted leading-[1.85]"
          >
            My long-term trajectory is clear: build products at the intersection
            of education and technology. Products that scale. Products that
            matter. Products where engineering excellence serves a purpose
            beyond itself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6 border-t border-border"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              Currently completing a Bachelor&apos;s in Computer and Information
              Science at HTI — 10th of Ramadan (2022–2026). Working as a
              freelance full-stack developer since 2024, building real products
              for real users.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
