"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GridMotion from "@/components/GridMotion";

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
    <section id="testimonials" className="relative border-t border-border bg-[#050505] overflow-hidden">
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4"
        >
          07
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground drop-shadow-2xl"
        >
          Industry Feedback
        </motion.h2>
      </div>

      <div className="w-full h-screen relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-700">
             <GridMotion items={reviews as any} gradientColor="#5227FF" />
          </div>
        )}
      </div>
      
      {/* Soft gradient fades for top and bottom edges of the GridMotion */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
    </section>
  );
}
