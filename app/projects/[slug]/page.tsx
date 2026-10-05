import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/app/_data/projects'
import { Badge } from '@/app/_components/ui/Badge'
import { Button } from '@/app/_components/ui/Button'
import { CaseStudySection } from '@/app/_components/projects/CaseStudySection'
import {
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
} from 'lucide-react'
import { GithubIcon } from '@/app/_components/ui/Icons'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy !== undefined)
    .map((p) => ({
      slug: p.slug,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project || !project.caseStudy) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} — Architectural Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} Case Study | Diaa Elsadek`,
      description: project.summary,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 675,
          alt: `${project.title} Architectural Blueprint`,
        },
      ],
    },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project || !project.caseStudy) {
    notFound()
  }

  const { caseStudy } = project
  const otherProjects = projects.filter(
    (p) => p.slug !== slug && p.caseStudy !== undefined
  )

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[var(--bg-primary)]">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-8 border-b border-[var(--border)]">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Work</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)]">
            {project.status}
          </span>
          <span className="font-mono text-xs text-[var(--text-tertiary)]">
            {project.period}
          </span>
          <span className="text-[var(--text-tertiary)]">•</span>
          <span className="font-mono text-xs text-[var(--text-tertiary)]">
            Tier {project.tier} Architectural Case Study
          </span>
        </div>

        <h1 className="text-heading-1 font-black text-[var(--text-primary)] tracking-tight">
          {project.title}
        </h1>
        <p className="mt-2 text-base sm:text-lg text-[var(--accent)] font-medium">
          {project.subtitle}
        </p>

        <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <Button href={project.liveUrl} external variant="primary" size="md">
              <span>Visit Live Platform</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}

          {project.githubUrl && (
            <Button href={project.githubUrl} external variant="secondary" size="md">
              <GithubIcon className="w-4 h-4" />
              <span>Explore Source Repository</span>
            </Button>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Cover Preview Image */}
        <div className="my-8 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-card)] shadow-sm">
          <div className="relative aspect-video w-full">
            <Image
              src={project.coverImage}
              alt={`${project.title} platform architectural preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] mb-12">
          <div>
            <span className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider block">
              Role
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mt-1 block">
              {project.role}
            </span>
          </div>

          <div>
            <span className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider block">
              Timeline
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mt-1 block">
              {project.period}
            </span>
          </div>

          <div>
            <span className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider block">
              Domain Architecture
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mt-1 block">
              {project.title === 'EduCenter' ? 'Multi-Tenant SaaS' : 'Healthcare Marketplace'}
            </span>
          </div>

          <div>
            <span className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider block">
              Deployment
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mt-1 block">
              Public Production
            </span>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-12">
          <span className="font-mono text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider block mb-2">
            Technology Stack &amp; Dependencies
          </span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="default" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Metrics Overview if present */}
        {caseStudy.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {caseStudy.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-center"
              >
                <span className="text-base sm:text-lg font-bold font-mono text-[var(--accent)] block">
                  {metric.value}
                </span>
                <span className="text-[11px] text-[var(--text-tertiary)] mt-1 block">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* 1. Context & Overview */}
        <CaseStudySection
          number="01 / CONTEXT &amp; OVERVIEW"
          title="Project Scope &amp; Target Domain"
        >
          <div className="prose prose-invert max-w-none text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            <p>{caseStudy.overview}</p>
          </div>
        </CaseStudySection>

        {/* 2. The Core Problem */}
        <CaseStudySection
          number="02 / THE CHALLENGE"
          title="The Core Problem &amp; Market Friction"
        >
          <div className="p-5 sm:p-6 rounded-xl border border-amber-500/20 bg-amber-500/5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p>{caseStudy.problem}</p>
          </div>
        </CaseStudySection>

        {/* 3. Architecture & System Design */}
        <CaseStudySection
          number="03 / ARCHITECTURE"
          title="System Architecture &amp; Data Flow"
          subtitle="How the application components, network layers, and state boundaries were structured."
        >
          <div className="space-y-6">
            {caseStudy.architectureDetails.map((detail, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-[var(--accent)]" />
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {detail.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {detail.description}
                </p>
                <ul className="space-y-2">
                  {detail.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-primary)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* 4. Key Architectural Decisions */}
        <CaseStudySection
          number="04 / TRADE-OFFS"
          title="Key Engineering Decisions &amp; Trade-Offs"
          subtitle="Deliberate architectural choices where alternatives were considered and evaluated."
        >
          <div className="space-y-4">
            {caseStudy.keyDecisions.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Lightbulb className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                      {item.decision}
                    </h3>
                  </div>
                </div>

                <div className="mt-3 pl-8 space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-[var(--accent)]">Rationale: </span>
                    <span className="text-[var(--text-secondary)]">{item.why}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--text-tertiary)]">
                      Alternative Evaluated:{' '}
                    </span>
                    <span className="text-[var(--text-tertiary)] font-mono text-xs">
                      {item.alternativeConsidered}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* 5. Difficult Engineering Challenges */}
        <CaseStudySection
          number="05 / RESOLUTIONS"
          title="Technical Challenges &amp; Solutions"
          subtitle="Non-trivial implementation obstacles encountered during development."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.challengesAndSolutions.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--text-tertiary)] block mb-1">
                    CHALLENGE #{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-3">
                    {item.challenge}
                  </p>
                </div>
                <div className="pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
                  <span className="font-bold text-[var(--accent)] block mb-1">Solution:</span>
                  <p className="leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* 6. Measurable Impact */}
        <CaseStudySection
          number="06 / OUTCOMES"
          title="Outcomes &amp; Production Impact"
        >
          <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]">
            <ul className="space-y-3">
              {caseStudy.impact.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </CaseStudySection>

        {/* Next Case Study Navigation */}
        <div className="my-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#work"
            className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Projects</span>
          </Link>

          {otherProjects.length > 0 && (
            <Link
              href={`/projects/${otherProjects[0].slug}`}
              className="text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] inline-flex items-center gap-1"
            >
              <span>Next Case Study: {otherProjects[0].title}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
