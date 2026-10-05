import React from 'react'

export interface CaseStudySectionProps {
  number?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function CaseStudySection({
  number,
  title,
  subtitle,
  children,
  className = '',
}: CaseStudySectionProps) {
  return (
    <section className={`py-8 md:py-12 border-b border-[var(--border)] last:border-b-0 ${className}`}>
      <div className="mb-6">
        {number && (
          <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-wider uppercase block mb-1">
            {number}
          </span>
        )}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-[var(--text-secondary)] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div>{children}</div>
    </section>
  )
}
