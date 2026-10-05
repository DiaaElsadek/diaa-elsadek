import React from 'react'
import { SectionHeading } from '@/app/_components/ui/SectionHeading'
import { profile } from '@/app/_data/profile'
import { Button } from '@/app/_components/ui/Button'
import { Mail, FileText, ArrowUpRight } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from '@/app/_components/ui/Icons'

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-16 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <SectionHeading
          number="06 / CONTACT"
          title="Let’s Discuss an Engineering Role or Project"
          subtitle="Whether you are an engineering manager looking for a full-stack engineer, a founder seeking to launch an MVP, or an organization needing reliable web architecture — I’d love to connect."
          centered
        />

        {/* Primary Contact Card */}
        <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] shadow-sm max-w-2xl mx-auto mb-10">
          <div className="w-12 h-12 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center mx-auto mb-5">
            <Mail className="w-6 h-6" />
          </div>

          <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-tertiary)] block mb-1">
            Direct Email Address
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="text-lg sm:text-2xl font-bold font-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors block mb-6 break-all"
          >
            {profile.email}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href={`mailto:${profile.email}`}
              variant="primary"
              size="md"
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
            </Button>

            <Button
              href={profile.resumeUrl}
              external
              variant="secondary"
              size="md"
            >
              <FileText className="w-4 h-4 text-[var(--accent)]" />
              <span>Download CV (PDF)</span>
            </Button>
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)] transition-colors flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-3">
              <LinkedinIcon className="w-5 h-5 text-[var(--accent)]" />
              <div>
                <span className="text-xs font-bold text-[var(--text-primary)] block">LinkedIn</span>
                <span className="text-[11px] font-mono text-[var(--text-tertiary)]">/in/diaaelsadek</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)] transition-colors flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-3">
              <GithubIcon className="w-5 h-5 text-[var(--accent)]" />
              <div>
                <span className="text-xs font-bold text-[var(--text-primary)] block">GitHub</span>
                <span className="text-[11px] font-mono text-[var(--text-tertiary)]">/DiaaElsadek</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors" />
          </a>
        </div>
      </div>
    </section>
  )
}
