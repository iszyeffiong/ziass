import { Mail, Phone, MapPin, Send, ChevronDown, X, Twitter, Instagram, Youtube, Music2, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { services } from '../data/services'
import { sendContactEmail } from '../lib/mail'

export function ContactSection({ modalMode = false, onClose }: { modalMode?: boolean, onClose?: () => void } = {}) {
  // Form fields state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  })
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [otherService, setOtherService] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Load saved data on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ziass_contact_form')
      if (saved) {
        const parsed = JSON.parse(saved)
        setFormData(parsed.fields || { fullName: '', phone: '', email: '', message: '' })
        setSelectedServices(parsed.services || [])
        setOtherService(parsed.other || '')
      }
    } catch (e) {
      console.error('Failed to load saved form data')
    }
  }, [])

  // Save data on change
  useEffect(() => {
    if (status === 'success') return
    const timer = setTimeout(() => {
      localStorage.setItem('ziass_contact_form', JSON.stringify({
        fields: formData,
        services: selectedServices,
        other: otherService
      }))
    }, 500)
    return () => clearTimeout(timer)
  }, [formData, selectedServices, otherService, status])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      fullName: formData.get('fullName') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      services: selectedServices.map(id => id === 'other' ? `Other: ${otherService}` : getLabel(id)),
      message: formData.get('message') as string,
    }

    try {
      await sendContactEmail({ data })
      setStatus('success')
      localStorage.removeItem('ziass_contact_form')
      setFormData({ fullName: '', phone: '', email: '', message: '' })
      setSelectedServices([])
      setOtherService('')
    } catch (error: any) {
      setStatus('error')
      setErrorMessage(error.message || 'Something went wrong.')
    }
  }

  const formContent = (
    <div className={modalMode ? '' : 'lg:col-span-3 card p-8 md:p-10'}>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
        Service Enquiry
      </h3>

      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Message Sent!</h4>
          <p className="text-[var(--text-secondary)] max-w-sm mb-8">
            Thank you for reaching out. Our team will review your enquiry and get back to you <strong>within 12 hours</strong>.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="btn btn-secondary text-sm"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[13px] font-semibold text-[var(--text-primary)] mb-1.5">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
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
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
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
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
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
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--cool-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all text-sm resize-none"
              placeholder="Tell us how we can help..."
              required
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium animate-in fade-in slide-in-from-top-2">
              <AlertCircle size={16} />
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn btn-primary w-full text-[15px] py-4 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={16} className="mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Submit Enquiry
                <Send size={16} className="ml-2" />
              </>
            )}
          </button>
        </form>
      )}
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
                  <a href="https://www.x.com/CyberZIASS" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-all" aria-label="X (Twitter)">
                    <Twitter size={14} />
                  </a>
                  <a href="https://www.tiktok.com/@cyberziass" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-all" aria-label="TikTok">
                    <Music2 size={14} />
                  </a>
                  <a href="https://www.instagram.com/cyber_ziass/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-all" aria-label="Instagram">
                    <Instagram size={14} />
                  </a>
                  <a href="https://www.youtube.com/@cyberziass" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-all" aria-label="YouTube">
                    <Youtube size={14} />
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
