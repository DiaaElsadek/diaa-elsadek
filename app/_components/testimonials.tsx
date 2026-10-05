"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Star, MessageSquareQuote, CheckCircle2, Grid, Layers, Sparkles } from "lucide-react";
import SectionHeader from "./section-header";

const GridMotion = dynamic(() => import("@/components/GridMotion"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-xs">
      Initializing perspective grid...
    </div>
  ),
});

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "cinematic">("grid");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        if (!res.ok) throw new Error("Failed to fetch reviews");
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, []);

  return (
    <section id="testimonials" className="relative border-t border-border bg-background overflow-hidden py-24">
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              07
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-foreground">
              Peer & Engineering Feedback
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
              Endorsements from fellow software engineers, senior collaborators, and project leads.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-secondary border border-border shrink-0">
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
            {viewMode === "grid" ? (
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
                  <div
                    key={rev.id}
                    className="group rounded-2xl border border-border bg-card p-6 flex flex-col justify-between shadow-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  >
                    <div>
                      {/* Top Header with Avatar & Identity */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={rev.avatar}
                            alt={rev.name}
                            className="w-11 h-11 rounded-full border border-border shrink-0 bg-secondary"
                            loading="lazy"
                          />
                          <div>
                            <h3 className="text-sm font-semibold text-foreground">
                              {rev.name}
                            </h3>
                            <p className="text-[11px] text-muted-foreground font-mono">
                              {rev.role}
                              {rev.company ? ` • ${rev.company}` : ""}
                            </p>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
                          <CheckCircle2 size={10} />
                          <span>Verified</span>
                        </span>
                      </div>

                      {/* Review Quote */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic mb-6">
                        "{rev.review}"
                      </p>
                    </div>

                    {/* Bottom Star Rating */}
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < rev.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-muted-foreground/30"
                            }
                          />
                        ))}
                      </div>

                      <span className="text-[10px] font-mono text-muted-foreground">
                        {rev.rating}.0 / 5.0
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
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
