import React from 'react'
import { SectionHeading } from '@/app/_components/ui/SectionHeading'
import { FeaturedProjectCard } from '@/app/_components/projects/FeaturedProjectCard'
import { ProjectCard } from '@/app/_components/projects/ProjectCard'
import { getFeaturedProjects, getSelectedProjects } from '@/app/_data/projects'
import Link from 'next/link'
import { ArrowRight, Layers } from 'lucide-react'

export function SelectedWork() {
  const featured = getFeaturedProjects()
  const selected = getSelectedProjects()

  const eduCenter = featured.find((p) => p.slug === 'educenter')
  const alAnis = featured.find((p) => p.slug === 'al-anis')

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[var(--border)] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="01 / SELECTED WORK"
          title="Engineered Products & Architectural Case Studies"
          subtitle="Every project listed here is an active, deployed web system. Explore the deep-dive case studies to examine architectural decisions, state modeling, and engineering trade-offs."
        />

        {/* TIER 1: FEATURED PROJECTS */}
        <div className="space-y-10 mb-16">
          {eduCenter && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Tier 1 Flagship • Multi-Tenant SaaS</span>
              </div>
              <FeaturedProjectCard project={eduCenter} priority dominant />
            </div>
          )}

          {alAnis && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Tier 1 Flagship • Service Marketplace &amp; Real-Time Chat</span>
              </div>
              <FeaturedProjectCard project={alAnis} />
            </div>
          )}
        </div>

        {/* TIER 2: SELECTED WORK GRID */}
        <div>
          <div className="mb-6">
            <span className="font-mono text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-1">
              Tier 2 • Selected Platforms
            </span>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Additional Production Platforms
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selected.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* Callout to Client Delivery in Experience section */}
        <div className="mt-12 p-4 sm:p-5 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)] font-semibold">Commercial Client Work:</strong> Looking for freelance business deliveries like{' '}
            <span className="text-[var(--text-primary)] font-medium">Apex Gym</span>? See the client delivery timeline in the Experience section.
          </div>
          <Link
            href="#experience"
            className="text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] inline-flex items-center gap-1 shrink-0"
          >
            <span>View Freelance History</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
