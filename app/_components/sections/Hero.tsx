import React from 'react'
import { profile } from '@/app/_data/profile'
import { Button } from '@/app/_components/ui/Button'
import { ArrowDown, FileText, Mail, CheckCircle2, ShieldCheck } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[var(--border)] overflow-hidden">
      {/* Background Subtle Tech Accents */}
      <div className="absolute inset-0 editorial-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--accent-muted)] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-card)] border border-[var(--border)] text-xs font-mono text-[var(--text-secondary)] mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[var(--text-primary)] font-medium">Available for Engineering Roles &amp; Contracts</span>
          <span className="text-[var(--text-tertiary)]">•</span>
          <span>Zagazig, Egypt / Remote</span>
        </div>

        {/* Main Positioning Headline */}
        <h1 className="text-display font-black tracking-tight text-[var(--text-primary)] max-w-4xl">
          Full-Stack Developer building{' '}
          <span className="text-[var(--accent)] underline decoration-[var(--accent-border)] decoration-2 underline-offset-8">
            serious software
          </span>{' '}
          that ships to production.
        </h1>

        {/* Concise Credibility Pitch */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed font-normal">
          I am <strong className="text-[var(--text-primary)] font-semibold">{profile.name}</strong>, a Full-Stack Engineer specializing in{' '}
          <span className="text-[var(--text-primary)] font-medium">React, Next.js</span> and{' '}
          <span className="text-[var(--text-primary)] font-medium">ASP.NET Core</span>. I design and own production products end-to-end — from multi-tenant SaaS architecture and RESTful APIs to high-performance user interfaces.
        </p>

        {/* Evidence Bullets */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--surface-card)] border border-[var(--border)] text-xs">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[var(--text-primary)] block">Multi-Tenant SaaS</span>
              <span className="text-[var(--text-secondary)]">Architected &amp; deployed EduCenter</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--surface-card)] border border-[var(--border)] text-xs">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[var(--text-primary)] block">Dual-Stack Backend</span>
              <span className="text-[var(--text-secondary)]">ASP.NET Core C# &amp; Node.js/Express</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[var(--surface-card)] border border-[var(--border)] text-xs">
            <ShieldCheck className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[var(--text-primary)] block">Competitive Problem Solver</span>
              <span className="text-[var(--text-secondary)]">ICPC ECPC 2024 Hon. Mention</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="#work" variant="primary" size="md">
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </Button>

          <Button
            href={profile.resumeUrl}
            external
            variant="secondary"
            size="md"
          >
            <FileText className="w-4 h-4 text-[var(--accent)]" />
            <span>View Resume (PDF)</span>
          </Button>

          <Button href="#contact" variant="ghost" size="md">
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 pt-8 border-t border-[var(--border)] grid grid-cols-2 md:grid-cols-4 gap-6">
          {profile.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black font-mono text-[var(--text-primary)]">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-[var(--text-secondary)] mt-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] text-[var(--text-tertiary)] font-mono">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
