import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, MoonStar, SunMedium, X } from 'lucide-react'

type ThemeMode = 'light' | 'dark'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const location = useLocation()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState<ThemeMode>('light')

  useEffect(() => {
    setMounted(true)
    try {
      const stored = window.localStorage.getItem('ziass-theme')
      const nextTheme: ThemeMode =
        stored === 'light' || stored === 'dark'
          ? stored
          : 'light'

      setTheme(nextTheme)
      document.documentElement.classList.toggle('dark', nextTheme === 'dark')
      document.documentElement.style.colorScheme = nextTheme
    } catch {
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme: ThemeMode = current === 'dark' ? 'light' : 'dark'

      try {
        window.localStorage.setItem('ziass-theme', nextTheme)
      } catch {
        // Ignore storage failures.
      }

      document.documentElement.classList.toggle('dark', nextTheme === 'dark')
      document.documentElement.style.colorScheme = nextTheme

      return nextTheme
    })
  }

  const activePath = useMemo(() => location.pathname, [location.pathname])

  const isActive = (href: string) => {
    if (href === '/') {
      return activePath === '/'
    }

    return activePath === href || activePath.startsWith(`${href}/`)
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0B1120]/85" suppressHydrationWarning>
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-6" suppressHydrationWarning>
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="ZIASS Limited" 
            className="h-24 w-auto object-contain"
            suppressHydrationWarning
          />
        </Link>

        <div className="hidden items-center gap-9 lg:flex" suppressHydrationWarning>
          {navLinks.map((link) => {
            const active = isActive(link.href)

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`nav-link text-[13.5px] font-semibold transition-colors ${
                  active ? 'is-active' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3" suppressHydrationWarning>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="btn btn-secondary flex items-center gap-2 px-4 py-2.5 text-[13px] shadow-sm dark:bg-white/10 dark:text-white dark:border-white/10 dark:hover:border-white/20"
          >
            {!mounted ? (
              <div className="w-4 h-4" /> // Placeholder to avoid mismatch
            ) : theme === 'dark' ? (
              <SunMedium size={16} />
            ) : (
              <MoonStar size={16} />
            )}
            <span className="hidden sm:inline">
              {!mounted ? 'Theme' : theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>

          <Link
            // @ts-ignore - Type Checks
            to="/#contact"
            className="!hidden lg:inline-flex btn btn-dark px-6 py-2.5 text-[13.5px]"
          >
            Contact Us
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[var(--text-primary)] transition-colors hover:bg-slate-50 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-6 shadow-lg lg:hidden dark:border-white/10 dark:bg-[#0B1120]"
        >
          <div className="mx-auto max-w-7xl space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors ${
                    active
                      ? 'bg-[var(--brand-light)] text-[var(--brand)]'
                      : 'text-[var(--text-secondary)] hover:bg-slate-50 hover:text-[var(--text-primary)] dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <Link
              to="/#contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary mt-4 w-full px-6 py-3.5 text-[15px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
