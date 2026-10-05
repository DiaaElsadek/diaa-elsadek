import React from 'react'
import { SectionHeading } from '@/app/_components/ui/SectionHeading'
import { FileCode, Database, Layout, Rocket } from 'lucide-react'

const principles = [
  {
    step: '01',
    icon: Database,
    title: 'Domain Modeling & Invariant Design',
    description:
      'Before choosing tools, I model the core domain: entities, user roles, state transitions, and failure modes. In systems like Al-Anis (healthcare shifts) and EduCenter (multi-tenancy), clear boundaries prevent architectural refactoring downstream.',
  },
  {
    step: '02',
    icon: FileCode,
    title: 'Contract-First API & Data Schemas',
    description:
      'I structure explicit API contracts (REST, OpenAPI, typed DTOs) and normalized database schemas (SQL Server or MongoDB). Strict typing across the boundary ensures frontend and backend evolve without contract drift.',
  },
  {
    step: '03',
    icon: Layout,
    title: 'Content-First, Performant Frontend',
    description:
      'Interfaces should be responsive, accessible, and fast. Leveraging Next.js Server Components, minimal client-side JavaScript, and fluid responsive design ensures low First Contentful Paint and zero layout shift on mobile networks.',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Defensive Execution & Continuous Delivery',
    description:
      'Real-world software must gracefully handle timeouts, disconnected clients, and invalid state. I build with defensive validation, optimistic UI states with rollback, and automated CI/CD for repeatable, zero-drama deployments.',
  },
]

export function HowIWork() {
  return (
    <section id="approach" className="py-20 md:py-28 border-b border-[var(--border)] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="03 / APPROACH"
          title="Engineering Process &amp; Technical Mindset"
          subtitle="How I transition business objectives and user requirements into reliable, maintainable production software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="p-6 sm:p-7 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[var(--text-tertiary)]">
                    STAGE {item.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
