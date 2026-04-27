import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-28 md:py-36 section-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
                  <strong>Nigeria:</strong> 17 Sunday Adigun Street, Alausa,
                  Ikeja
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>Canada:</strong> 108 4625 Varsity Drive NW, Calgary,
                  Alberta T3A 0Z9
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
                <p className="text-sm text-[var(--text-secondary)] mb-1">
                  +234-805-120-0000
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  +1-443-985-3735
                </p>
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
                <p className="text-sm text-[var(--text-secondary)] mb-1">
                  support@ziass.ca
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  kazeem@ziass.ca
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 card p-8 md:p-10">
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
                    placeholder="+234 805 120 0000"
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
        </div>
      </div>
    </section>
  )
}
