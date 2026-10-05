import React from 'react'
import { cn } from '@/app/_lib/utils'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'highlight' | 'outline'
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className,
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center font-mono font-medium rounded transition-colors select-none'

  const variants = {
    default:
      'bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]',
    accent:
      'bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)] font-semibold',
    highlight:
      'bg-[var(--surface-elevated)] text-[var(--text-primary)] border border-[var(--border-hover)] font-semibold',
    outline:
      'bg-transparent text-[var(--text-secondary)] border border-[var(--border)]',
  }

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  }

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </span>
  )
}
