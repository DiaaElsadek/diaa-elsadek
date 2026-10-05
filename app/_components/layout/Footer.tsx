import React from 'react'
import { profile } from '@/app/_data/profile'
import { Mail, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/app/_components/ui/Icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-[var(--text-primary)]">{profile.name}</span>
            <span className="text-[var(--text-tertiary)]">•</span>
            <span className="text-xs text-[var(--text-secondary)]">{profile.title}</span>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1 font-mono">
            Zagazig, Egypt • HTI Computer &amp; Information Science 2026
          </p>
        </div>

        {/* Social / Direct Links */}
        <div className="flex items-center gap-4 text-[var(--text-secondary)]">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-[var(--text-primary)] transition-colors p-2 rounded-md hover:bg-[var(--surface-card)]"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-[var(--text-primary)] transition-colors p-2 rounded-md hover:bg-[var(--surface-card)]"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send Email"
            className="hover:text-[var(--text-primary)] transition-colors p-2 rounded-md hover:bg-[var(--surface-card)]"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume PDF"
            className="hover:text-[var(--text-primary)] transition-colors p-2 rounded-md hover:bg-[var(--surface-card)]"
          >
            <FileText className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[var(--text-tertiary)] font-mono">
        <div>
          © {currentYear} Diaa Elsadek. All rights reserved.
        </div>
        <div>
          Built with Next.js 16 App Router &amp; TypeScript.
        </div>
      </div>
    </footer>
  )
}
