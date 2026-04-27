import { Mail, Phone, MapPin, Send, ChevronDown, X, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { services } from '../data/services'

export function ContactSection({ modalMode = false, onClose }: { modalMode?: boolean, onClose?: () => void } = {}) {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [otherService, setOtherService] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
    setDropdownOpen(false)
  }

  const removeService = (id: string) => {
    setSelectedServices((prev) => prev.filter((s) => s !== id))
    if (id === 'other') setOtherService('')
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const allOptions = [
    ...services.map((s) => ({ id: s.id, label: s.title })),
    { id: 'other', label: 'Other' },
  ]

  const getLabel = (id: string) => allOptions.find((o) => o.id === id)?.label ?? id

  const formContent = (
    <div className={modalMode ? '' : 'lg:col-span-3 card p-8 md:p-10'}>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
        Service Enquiry
      </h3>
      <form className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-[13px] font-semibold text-[var(--text-primary)] mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--cool-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all text-sm"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-[var(--text-primary)] mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--cool-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all text-sm"
              placeholder="+1 (443) 985-3735"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-[var(--text-primary)] mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--cool-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all text-sm"
            placeholder="john@example.com"
            required
          />
        </div>

        {/* Service(s) Multi-select Dropdown */}
        <div>
          <label className="block text-[13px] font-semibold text-[var(--text-primary)] mb-1.5">
            Service(s) Interested In
          </label>
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--cool-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all text-sm text-left flex items-center justify-between gap-2"
            >
              <span className={selectedServices.length === 0 ? 'text-[var(--text-muted)]' : 'text-[var(--text-primary)]'}>
                {selectedServices.length === 0
                  ? 'Select service(s)'
                  : `${selectedServices.length} selected`}
              </span>
              <ChevronDown
                size={16}
                className={`text-[var(--text-muted)] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Selected tags */}
            {selectedServices.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedServices.map((id) => (
                  <span
                    key={id}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--brand-light)] text-[var(--brand)] text-xs font-semibold"
                  >
                    {getLabel(id)}
                    <button
                      type="button"
                      onClick={() => removeService(id)}
                      className="hover:text-red-500 transition-colors"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div className="absolute z-20 mt-2 w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)] shadow-lg max-h-56 overflow-y-auto">
                {allOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-[var(--bg-muted)] cursor-pointer transition-colors text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(opt.id)}
                      onChange={() => toggleService(opt.id)}
                      className="accent-[var(--brand)] w-4 h-4"
                    />
                    <span className="text-[var(--text-primary)]">{opt.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {selectedServices.includes('other') && (
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--cool-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all text-sm mt-3"
              placeholder="Please specify the service"
              value={otherService}
              onChange={e => setOtherService(e.target.value)}
              required
            />
          )}
        </div>

        <div>
          <label className="block text-[13px] font-semibold text-[var(--text-primary)] mb-1.5">
            Your Request
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--cool-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all text-sm resize-none"
            placeholder="Tell us how we can help..."
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full text-[15px] py-4"
        >
          Submit Enquiry
          <Send size={16} className="ml-2" />
        </button>
      </form>
    </div>
  )

  // ── Modal mode: form only, no contact info cards ──
  if (modalMode) {
    return formContent
  }

  // ── Homepage: full layout with contact info + form ──
  return (
    <section id="contact" className="pt-7 pb-14 md:pt-10 md:pb-20 section-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="kicker mb-4 block">Contact Us</span>
          <h2 className="text-4xl md:text-[3.25rem] font-extrabold text-[var(--text-primary)] tracking-[-0.02em] leading-tight mb-6">
            Let's Secure Your Future Together
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Reach out for enquiries about our services, regulatory licensing, or
            cybersecurity solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="card p-6 flex items-start gap-4">
              <div className="w-11 h-11 bg-[var(--brand-light)] rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] text-sm mb-2">
                  Our Offices
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mb-1.5">
                  <strong>Canada:</strong> 108 4625 Varsity Drive NW, Calgary,
                  Alberta T3A 0Z9
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>Nigeria:</strong> 17 Sunday Adigun Street, Alausa,
                  Ikeja
                </p>
              </div>
            </div>

            <div className="card p-6 flex items-start gap-4">
              <div className="w-11 h-11 bg-[var(--brand-light)] rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] text-sm mb-2">
                  Phone
                </h4>
                <a href="tel:+14439853735" className="block text-sm text-[var(--text-secondary)] mb-1 hover:text-[var(--brand)] transition-colors">
                  +1 (443) 985-3735
                </a>
                <a href="tel:+2348051200000" className="block text-sm text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors">
                  +234 805 120 0000
                </a>
              </div>
            </div>

            <div className="card p-6 flex items-start gap-4">
              <div className="w-11 h-11 bg-[var(--brand-light)] rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[var(--brand)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] text-sm mb-2">
                  Email
                </h4>
                <a href="mailto:support@ziass.ca" className="block text-sm text-[var(--text-secondary)] mb-1 hover:text-[var(--brand)] transition-colors">
                  support@ziass.ca
                </a>
                <a href="mailto:kazeem@ziass.ca" className="block text-sm text-[var(--text-secondary)] mb-3 hover:text-[var(--brand)] transition-colors">
                  kazeem@ziass.ca
                </a>
                <div className="flex gap-3 pt-2 border-t border-[var(--border-subtle)]">
                  <a href="#" className="w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-all">
                    <Twitter size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-all">
                    <Facebook size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-all">
                    <Instagram size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-all">
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          {formContent}
        </div>
      </div>
    </section>
  )
}
