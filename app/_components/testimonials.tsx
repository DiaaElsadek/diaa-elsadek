"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Grid, Layers, Sparkles } from "lucide-react";
import { REVIEWS, Review } from "@/lib/data/reviews";
import LogoLoop from "@/components/LogoLoop";
import ReviewCard from "./review-card";

const GridMotion = dynamic(() => import("@/components/GridMotion"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-xs">
      Initializing perspective grid...
    </div>
  ),
});

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState<"loop" | "grid" | "cinematic">("loop");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setReviews(data);
          }
        }
      } catch (error) {
        console.warn("Using offline review data", error);
      }
    }
    fetchReviews();
  }, []);

  const loopRow1 = useMemo(
    () =>
      reviews.slice(0, 3).map((rev) => ({
        node: <ReviewCard review={rev} variant="marquee" />,
        ariaLabel: `${rev.name} peer endorsement`,
      })),
    [reviews]
  );

  const loopRow2 = useMemo(
    () =>
      reviews.slice(3, 6).map((rev) => ({
        node: <ReviewCard review={rev} variant="marquee" />,
        ariaLabel: `${rev.name} peer endorsement`,
      })),
    [reviews]
  );

  return (
    <section id="testimonials" className="relative border-t border-border bg-background overflow-hidden py-24 scroll-mt-16">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-10 dark:opacity-20 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 900px at 50% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        
        {/* Header with View Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              07
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-foreground">
              Peer &amp; Engineering Feedback
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
              Endorsements from fellow software engineers, senior collaborators, and project leads.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-secondary border border-border shrink-0">
            <button
              onClick={() => setViewMode("loop")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                viewMode === "loop"
                  ? "bg-background text-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sparkles size={13} className={viewMode === "loop" ? "text-primary" : ""} />
              <span>Infinite Stream</span>
            </button>

            <button
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-background text-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Grid size={13} />
              <span>Curated Cards</span>
            </button>

            <button
              onClick={() => setViewMode("cinematic")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                viewMode === "cinematic"
                  ? "bg-background text-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Layers size={13} />
              <span>Cinematic Wall</span>
            </button>
          </div>
        </div>

        {/* Content Views */}
        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {viewMode === "loop" && (
              /* Continuous Animated LogoLoop Showcase */
              <motion.div
                key="loop"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 sm:gap-5 overflow-hidden py-2"
              >
                <LogoLoop
                  logos={loopRow1}
                  speed={35}
                  direction="left"
                  gap={20}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="var(--background)"
                  ariaLabel="Peer endorsements stream 1"
                />

                <LogoLoop
                  logos={loopRow2}
                  speed={30}
                  direction="right"
                  gap={20}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="var(--background)"
                  ariaLabel="Peer endorsements stream 2"
                />
              </motion.div>
            )}

            {viewMode === "grid" && (
              /* Curated Responsive Grid */
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {reviews.map((rev) => (
                  <ReviewCard key={rev.id} review={rev} variant="grid" />
                ))}
              </motion.div>
            )}

            {viewMode === "cinematic" && (
              /* Cinematic 3D Perspective Wall */
              <motion.div
                key="cinematic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[650px] relative rounded-3xl overflow-hidden border border-border bg-card/40"
              >
                <div className="w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500">
                  <GridMotion items={reviews as any} gradientColor="rgba(99,102,241,0.1)" />
                </div>

                {/* Soft gradient fades for top and bottom edges */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-10" />
              </motion.div>
            )}
          </AnimatePresence>
        )}

      </div>
    </section>
  );
}
