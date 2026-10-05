import React from 'react'
import Image from 'next/image'
import { SectionHeading } from '@/app/_components/ui/SectionHeading'
import { profile } from '@/app/_data/profile'
import { Badge } from '@/app/_components/ui/Badge'
import { MapPin, GraduationCap, Code2, Terminal } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[var(--border)] scroll-mt-16 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="02 / ABOUT"
          title="Background &amp; Engineering Focus"
          subtitle="A disciplined full-stack engineer who values reliability, clean system boundaries, and business impact over framework hype."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Photo & Key Profile Facts */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[var(--border)] shadow-md bg-[var(--surface-elevated)] mb-5">
              <Image
                src="/me/my_pic.jpg"
                alt="Diaa Elsadek"
                fill
                sizes="(max-width: 768px) 176px, 176px"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="w-full space-y-2.5 font-mono text-xs text-[var(--text-secondary)]">
              <div className="flex items-center gap-2 p-2.5 rounded-md bg-[var(--surface-card)] border border-[var(--border)]">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-md bg-[var(--surface-card)] border border-[var(--border)]">
                <GraduationCap className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span>B.Sc. Computer Science (2022–2026)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-md bg-[var(--surface-card)] border border-[var(--border)]">
                <Code2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span>Freelance Full-Stack (Feb 2024 – Present)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Storytelling */}
          <div className="lg:col-span-8 space-y-5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {profile.aboutParagraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            {/* Core Competencies Box */}
            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider mb-3">
                <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Primary Production Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="accent" size="md">React / Next.js</Badge>
                <Badge variant="accent" size="md">TypeScript</Badge>
                <Badge variant="accent" size="md">ASP.NET Core (C#)</Badge>
                <Badge variant="accent" size="md">Node.js / Express</Badge>
                <Badge variant="highlight" size="md">SQL Server / EF Core</Badge>
                <Badge variant="highlight" size="md">MongoDB</Badge>
                <Badge variant="highlight" size="md">RESTful APIs</Badge>
                <Badge variant="highlight" size="md">SignalR WebSockets</Badge>
                <Badge variant="default" size="md">Tailwind CSS</Badge>
                <Badge variant="default" size="md">Docker</Badge>
                <Badge variant="default" size="md">CI/CD</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
