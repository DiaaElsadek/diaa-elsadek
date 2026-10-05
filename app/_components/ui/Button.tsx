import React from 'react'
import Link from 'next/link'
import { cn } from '@/app/_lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-md cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-[var(--accent)] text-[var(--accent-contrast)] hover:bg-[var(--accent-hover)] focus-visible:ring-[var(--accent)] shadow-sm font-semibold',
    secondary:
      'bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] border border-[var(--border)] focus-visible:ring-[var(--border-hover)]',
    outline:
      'bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-card)] focus-visible:ring-[var(--border-hover)]',
    ghost:
      'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-card)] focus-visible:ring-[var(--border-hover)]',
  }

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
