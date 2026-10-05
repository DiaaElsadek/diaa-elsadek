import React from 'react'
import { cn } from '@/app/_lib/utils'

export interface SectionHeadingProps {
  number?: string
  title: string
  subtitle?: string
  id?: string
  className?: string
  centered?: boolean
}

export function SectionHeading({
  number,
  title,
  subtitle,
  id,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      id={id}
      className={cn(
        'mb-8 md:mb-12 scroll-mt-24',
        centered ? 'text-center' : 'text-left',
        className
      )}
    >
      {number && (
        <div className="font-mono text-xs font-semibold tracking-wider uppercase text-[var(--accent)] mb-2 flex items-center gap-2">
          <span>{number}</span>
          <span className="w-8 h-px bg-[var(--accent-border)] inline-block" />
        </div>
      )}
      <h2 className="text-heading-2 font-bold text-[var(--text-primary)] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
