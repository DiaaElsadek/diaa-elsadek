'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Sun, Moon, Menu, X, FileText } from 'lucide-react'

const navLinks = [
  { name: 'Work', href: '/#work' },
  { name: 'About', href: '/#about' },
  { name: 'Approach', href: '/#approach' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border)] py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
        >
          <div className="w-8 h-8 rounded-md bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center font-mono text-xs text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
            DE
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-none">Diaa Elsadek</span>
            <span className="text-[10px] font-mono text-[var(--text-tertiary)] leading-tight mt-0.5">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions: Resume + Theme Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/me/Diaa%20Elsadek%20-%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-[var(--surface-card)] text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)] transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Resume</span>
          </a>

          <button
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-8 h-8 rounded-md bg-[var(--surface-card)] border border-[var(--border)] hover:border-[var(--border-hover)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[var(--accent)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--accent)]" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden w-8 h-8 rounded-md bg-[var(--surface-card)] border border-[var(--border)] flex items-center justify-center text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--bg-primary)] px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-[var(--border)] mt-2">
              <a
                href="/me/Diaa%20Elsadek%20-%20CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-xs font-semibold py-2.5 rounded-md bg-[var(--surface-card)] text-[var(--text-primary)] border border-[var(--border)]"
              >
                <FileText className="w-4 h-4 text-[var(--accent)]" />
                <span>View Full Resume (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
