import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { services } from '../../data/services'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { ContactModal } from '../../components/ContactModal'

export const Route = createFileRoute('/services/$serviceId')({
  component: ServiceDetails,
  loader: ({ params }) => {
    const service = services.find((s) => s.id === params.serviceId)
    if (!service) {
      throw notFound()
    }
    return service
  },
})

function ServiceDetails() {
  const service = Route.useLoaderData()
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <Link
            to="/"
            hash="services"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>

        <div className="card p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-20 h-20 bg-[var(--brand-light)] rounded-3xl flex items-center justify-center shrink-0">
              <service.icon className="w-10 h-10 text-[var(--brand)]" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                {service.desc}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              What We Offer
            </h2>
            <ul className="space-y-6">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <CheckCircle2
                    className="w-6 h-6 text-[var(--brand)] shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-[var(--text-primary)] font-medium leading-relaxed">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[var(--shadow-color)] aspect-[4/5] sticky top-32">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need this service?
              </h3>
              <p className="text-white/80 mb-6">
                Get in touch with our experts to discuss how we can help your business grow securely.
              </p>
              <button
                type="button"
                className="btn btn-primary text-[15px] px-8 py-4 self-start"
                onClick={() => setContactOpen(true)}
              >
                Contact Us Today
              </button>
              <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
