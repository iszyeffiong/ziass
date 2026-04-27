import {
  ShieldCheck,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-8 dark:border-white/10 dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--brand)] rounded-lg flex items-center justify-center font-bold text-white shadow-sm">
              Z
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              ZIASS Limited
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium">
            Securing your business today for an innovative tomorrow. Global
            expertise in Information Assurance.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand)] hover:border-[var(--brand)] transition-all dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand)] hover:border-[var(--brand)] transition-all dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand)] hover:border-[var(--brand)] transition-all dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand)] hover:border-[var(--brand)] transition-all dark:bg-white/5 dark:border-white/10 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
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
              <Phone size={14} /> +1 (234) 567-890
            </a>
            <a
              href="mailto:ceo@ziass.com"
              className="flex items-center gap-2 text-sm text-[var(--brand)] hover:text-[var(--brand-dark)] font-medium transition-colors"
            >
              <Mail size={14} /> ceo@ziass.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-muted)] font-medium">
          © {new Date().getFullYear()} ZIASS Limited. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-[var(--text-muted)] font-medium">
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
