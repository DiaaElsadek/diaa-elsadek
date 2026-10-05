import React from 'react'
import Image from 'next/image'
import { Project } from '@/app/_types'
import { Badge } from '@/app/_components/ui/Badge'
import { ExternalLink, Check } from 'lucide-react'
import { GithubIcon } from '@/app/_components/ui/Icons'

export interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-[var(--border-hover)] transition-all duration-200 overflow-hidden">
      <div>
        {/* Cover Preview */}
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <Image
            src={project.coverImage}
            alt={`${project.title} interface preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <div className="p-5 sm:p-6">
          {/* Header & Meta */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">
              {project.status}
            </span>
            <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
              {project.period}
            </span>
          </div>

          <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-[var(--text-tertiary)] mt-0.5 mb-2 font-medium">
            {project.subtitle}
          </p>

          <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
            {project.summary}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 mb-4">
            {project.highlights.slice(0, 2).map((highlight, index) => (
              <div key={index} className="flex items-start gap-1.5 text-[11px] text-[var(--text-secondary)]">
                <Check className="w-3 h-3 text-[var(--accent)] shrink-0 mt-0.5" />
                <span className="leading-snug">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 sm:px-6 py-3.5 border-t border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-between text-xs">
        <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
          {project.role}
        </span>
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
