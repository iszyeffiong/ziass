import {
  ShieldCheck,
  Phone,
  Mail,
  Twitter,
  Instagram,
  Youtube,
  Music2,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export function Footer() {
  const [year, setYear] = useState(2024)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-8 dark:border-white/10 dark:bg-[#0B1120]" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" suppressHydrationWarning>
        <div className="space-y-6" suppressHydrationWarning>
          <div className="flex items-center" suppressHydrationWarning>
            <img
              src="/logo.png"
              alt="ZIASS Limited"
              className="h-8 w-auto object-contain"
              suppressHydrationWarning
            />
          </div>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium">
            Securing your business today for an innovative tomorrow. Global
            expertise in Information Assurance.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.x.com/CyberZIASS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand)] hover:border-[var(--brand)] transition-all dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
              aria-label="X (Twitter)"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@cyberziass"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand)] hover:border-[var(--brand)] transition-all dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
              aria-label="TikTok"
            >
              <Music2 size={18} />
            </a>
            <a
              href="https://www.instagram.com/cyber_ziass/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand)] hover:border-[var(--brand)] transition-all dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@cyberziass"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand)] hover:border-[var(--brand)] transition-all dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[var(--text-primary)] font-bold mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-[var(--text-secondary)] font-medium">
            <li>
              <Link
                // @ts-ignore - Type Checks
                to="/#about"
                className="hover:text-[var(--brand)] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                // @ts-ignore - Type Checks
                to="/#services"
                className="hover:text-[var(--brand)] transition-colors"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                // @ts-ignore - Type Checks
                to="/#leadership"
                className="hover:text-[var(--brand)] transition-colors"
              >
                Leadership Team
              </Link>
            </li>
            <li>
              <Link
                // @ts-ignore - Type Checks
                to="/#contact"
                className="hover:text-[var(--brand)] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[var(--text-primary)] font-bold mb-6">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-[var(--text-secondary)] font-medium">
            <li>Cybersecurity & Data Protection</li>
            <li>CAC & Business Support</li>
            <li>Regulatory Licensing</li>
            <li>Web Application Security</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[var(--border-subtle)] shadow-sm dark:bg-white/5 dark:border-white/10">
          <h3 className="text-[var(--text-primary)] font-bold mb-2 flex items-center gap-2">
            <ShieldCheck size={18} className="text-[var(--brand)]" /> Support
            Guarantee
          </h3>
          <p className="text-xs text-[var(--text-secondary)] font-medium mb-4 pb-4 border-b border-[var(--border-subtle)]">
            High-level escalations direct to CEO
          </p>
          <div className="space-y-3">
            <p className="text-sm font-bold text-[var(--text-primary)]">
              Dr. Kazeem Durodoye
            </p>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-sm text-[var(--brand)] hover:text-[var(--brand-dark)] font-medium transition-colors"
            >
              <Phone size={14} /> +1 (443) 985-3735
            </a>
            <a
              href="mailto:kazeem@ziass.ca"
              className="flex items-center gap-2 text-sm text-[var(--brand)] hover:text-[var(--brand-dark)] font-medium transition-colors"
            >
              <Mail size={14} /> kazeem@ziass.ca
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4" suppressHydrationWarning>
        <p className="text-sm text-[var(--text-muted)] font-medium">
          © {year} ZIASS Limited. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-[var(--text-muted)] font-medium" suppressHydrationWarning>
          <a
            href="#"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
