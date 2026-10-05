import React from 'react'
import { SectionHeading } from '@/app/_components/ui/SectionHeading'
import { skillCategories } from '@/app/_data/skills'
import { Badge } from '@/app/_components/ui/Badge'

export function TechnicalExpertise() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[var(--border)] scroll-mt-16 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="04 / EXPERTISE"
          title="Technical Competencies by Domain"
          subtitle="Specific technologies applied in production systems, substantiated with contextual evidence from real repositories and deliveries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
                  {group.category}
                </h3>
                <p className="text-xs text-[var(--text-tertiary)] mb-4 leading-relaxed">
                  {group.description}
                </p>

                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold ${
                            skill.highlight
                              ? 'text-[var(--text-primary)]'
                              : 'text-[var(--text-secondary)]'
                          }`}
                        >
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <Badge variant="accent" size="sm">Core</Badge>
                        )}
                      </div>
                      {skill.context && (
                        <span className="text-[11px] text-[var(--text-tertiary)] leading-tight">
                          {skill.context}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
