import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/app/_types'
import { Badge } from '@/app/_components/ui/Badge'
import { Button } from '@/app/_components/ui/Button'
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from '@/app/_components/ui/Icons'

export interface FeaturedProjectCardProps {
  project: Project
  priority?: boolean
  dominant?: boolean
}

export function FeaturedProjectCard({
  project,
  priority = false,
  dominant = false,
}: FeaturedProjectCardProps) {
  return (
    <article
      className={`group relative rounded-xl border transition-all duration-200 overflow-hidden bg-[var(--surface-card)] hover:border-[var(--border-hover)] ${
        dominant
          ? 'border-[var(--accent-border)] ring-1 ring-[var(--accent-border)] shadow-md'
          : 'border-[var(--border)]'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Visual Cover Preview Area */}
        <div className="lg:col-span-7 relative bg-[var(--bg-secondary)] border-b lg:border-b-0 lg:border-r border-[var(--border)] overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <Link
            href={`/projects/${project.slug}`}
            className="block w-full overflow-hidden rounded-lg border border-[var(--border)] hover:border-[var(--accent-border)] transition-colors shadow-sm"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-[var(--surface-elevated)]">
              <Image
                src={project.coverImage}
                alt={`${project.title} platform architectural preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority={priority}
                className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </Link>
        </div>

        {/* Technical Specification & Context Area */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Meta Row: Status & Tier */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                {project.status}
              </span>
              <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
                {project.period}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              <Link
                href={`/projects/${project.slug}`}
                className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
              >
                <span>{project.title}</span>
              </Link>
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] mt-1 mb-3">
              {project.subtitle}
            </p>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              {project.summary}
            </p>

            {/* Key Engineering Highlights */}
            <div className="space-y-2 mb-5">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2 text-xs text-[var(--text-primary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="default" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action CTAs: Deep Dive, Live Site, GitHub */}
          <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[var(--border)]">
            <Button
              href={`/projects/${project.slug}`}
              variant="primary"
              size="sm"
            >
              <span>Read Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>

            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                external
                variant="outline"
                size="sm"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            )}

            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                external
                variant="ghost"
                size="sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
