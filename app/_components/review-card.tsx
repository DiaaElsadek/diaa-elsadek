"use client";

import React, { useState, useMemo } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { Review } from "@/lib/data/reviews";

export interface ReviewCardProps {
  review: Review;
  className?: string;
  variant?: "marquee" | "grid";
}

const MAX_COLLAPSED_CHARS = 120;

export default function ReviewCard({
  review,
  className = "",
  variant = "grid",
}: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMarquee = variant === "marquee";

  const isLong = review.review.length > MAX_COLLAPSED_CHARS;

  // Format truncated text cleanly at word boundaries
  const quoteText = useMemo(() => {
    if (!isLong || isExpanded) {
      return review.review;
    }
    const truncated = review.review.slice(0, MAX_COLLAPSED_CHARS);
    const lastSpace = truncated.lastIndexOf(" ");
    const cleanText = lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated;
    return `${cleanText.trim()}...`;
  }, [review.review, isLong, isExpanded]);

  return (
    <article
      className={`group rounded-2xl border border-border/80 bg-card p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-300 relative overflow-hidden font-sans text-left leading-normal whitespace-normal ${
        isMarquee
          ? "w-[340px] sm:w-[400px] min-h-[220px] h-full shrink-0 select-none"
          : "w-full h-full min-h-[220px]"
      } ${className}`}
    >
      <div>
        {/* Top Header: Avatar, Reviewer Info, Verified Badge */}
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative w-10 h-10 rounded-full border border-border overflow-hidden shrink-0 bg-secondary">
              <img
                src={review.avatar}
                alt={review.name}
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug truncate">
                {review.name}
              </h3>
              <p className="text-[11px] font-mono text-muted-foreground leading-tight truncate">
                {review.role}
                {review.company ? ` • ${review.company}` : ""}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
            <CheckCircle2 size={10} />
            <span>Verified</span>
          </span>
        </div>

        {/* Review Quote */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
          &ldquo;{quoteText}&rdquo;
          {isLong && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded((prev) => !prev);
              }}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? `Show less of review by ${review.name}` : `Read full review by ${review.name}`}
              className="text-primary font-semibold hover:underline ml-1.5 inline cursor-pointer text-xs transition-colors not-italic"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </p>
      </div>

      {/* Bottom Rating Footer */}
      <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs mt-3">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={13}
              className={
                i < review.rating
                  ? "text-amber-400 fill-amber-400"
                  : "text-muted-foreground/30"
              }
            />
          ))}
        </div>

        <span className="text-[10px] font-mono text-muted-foreground">
          {review.rating}.0 / 5.0
        </span>
      </div>
    </article>
  );
}
