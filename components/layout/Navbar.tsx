'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/publications', label: 'Publications' },
  { href: '/team', label: 'Team' },
  { href: '/courses', label: 'Courses' },
  { href: '/opportunities', label: 'Opportunities' },
]

function isActive(pathname: string, href: string) {
  if (href === '/portfolio') return pathname === '/portfolio' || pathname.startsWith('/projects/')
  return pathname === href
}

const ACTIVE_CLASS = 'text-[#0A0A0A] dark:text-[#FAFAF8] font-bold'
const INACTIVE_CLASS = 'text-[#6B6B6B] dark:text-gray-500 hover:text-[#0A0A0A] dark:hover:text-[#FAFAF8]'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, [])

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          '--navbar-height',
          `${navRef.current.offsetHeight}px`
        )
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8] dark:bg-[#0A0A0A] border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-content mx-auto px-10">
        {/* Row 1: name + controls */}
        <div className="flex items-center justify-between py-3">
          <Link href="/about" className="text-display font-bold font-serif leading-none text-[#0A0A0A] dark:text-[#FAFAF8]">
            Professor Name
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className={`font-body text-meta ${INACTIVE_CLASS}`}
            >
              {dark ? '☀' : '🌙'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`md:hidden font-body text-meta ${INACTIVE_CLASS}`}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Row 2: nav links (desktop) */}
        <nav className="hidden md:flex justify-end pb-2 gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-body text-meta uppercase tracking-wider ${
                isActive(pathname, href) ? ACTIVE_CLASS : INACTIVE_CLASS
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <nav className="md:hidden fixed inset-0 z-[100] bg-[#FAFAF8] dark:bg-[#0A0A0A] flex flex-col p-10 gap-8">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className={`self-end font-body text-h3 ${INACTIVE_CLASS}`}
          >
            ✕
          </button>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-body text-h3 uppercase tracking-wider ${
                isActive(pathname, href) ? ACTIVE_CLASS : INACTIVE_CLASS
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
