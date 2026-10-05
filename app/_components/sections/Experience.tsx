import React from 'react'
import { SectionHeading } from '@/app/_components/ui/SectionHeading'
import { experience, education, achievementsAndTraining } from '@/app/_data/experience'
import { Badge } from '@/app/_components/ui/Badge'
import { Briefcase, GraduationCap, Award, ExternalLink, CheckCircle2 } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[var(--border)] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="05 / EXPERIENCE &amp; MILESTONES"
          title="Professional Experience &amp; Deliveries"
          subtitle="Operating as an end-to-end engineer: requirements discovery, architecture, database schemas, full-stack implementation, and client delivery."
        />

        {/* WORK EXPERIENCE */}
        <div className="space-y-8 mb-16">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[var(--accent)]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                      {item.role}
                    </h3>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[var(--accent)] mt-0.5 block">
                    {item.organization} • {item.type}
                  </span>
                </div>
                <div className="font-mono text-xs text-[var(--text-tertiary)] bg-[var(--surface-elevated)] px-3 py-1 rounded border border-[var(--border)] w-fit">
                  {item.period}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Shipped Deliveries Highlight */}
              {item.deliveries && (
                <div className="mb-6">
                  <span className="font-mono text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-3">
                    Shipped Product Deliveries
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.deliveries.map((deliv, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between font-bold text-[var(--text-primary)] mb-1">
                            <span>{deliv.project}</span>
                            {deliv.url && (
                              <a
                                href={deliv.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--accent)] hover:text-[var(--accent-hover)] inline-flex items-center gap-0.5 text-[11px]"
                              >
                                <span>Live</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                          <p className="text-[11px] text-[var(--text-secondary)] leading-normal">
                            {deliv.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Core Engineering Achievements */}
              <div className="space-y-2 mb-6">
                {item.achievements.map((achieve, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-primary)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{achieve}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
                {item.skills.map((skill) => (
                  <Badge key={skill} variant="default" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TWO-COLUMN: EDUCATION & ACHIEVEMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]">
            <div className="flex items-center gap-2 mb-4 text-[var(--text-primary)] font-bold text-base">
              <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
              <span>Formal Education</span>
            </div>
            {education.map((edu, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">
                    {edu.degree}
                  </h4>
                  <span className="font-mono text-xs text-[var(--text-tertiary)] shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs font-medium text-[var(--accent)]">
                  {edu.institution} — {edu.location}
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]">
            <div className="flex items-center gap-2 mb-4 text-[var(--text-primary)] font-bold text-base">
              <Award className="w-4 h-4 text-[var(--accent)]" />
              <span>Competitive Problem Solving &amp; Training</span>
            </div>
            <div className="space-y-4">
              {achievementsAndTraining.map((ach, i) => (
                <div key={i} className="pb-3 border-b border-[var(--border-subtle)] last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-[var(--text-primary)]">
                      {ach.title}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--text-tertiary)] shrink-0">
                      {ach.date}
                    </span>
                  </div>
                  <span className="text-[11px] text-[var(--accent)] block mt-0.5">
                    {ach.issuer}
                  </span>
                  <p className="text-[11px] text-[var(--text-secondary)] mt-1 leading-normal">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
