import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { services } from '../data/services'

export function ServicesSection() {
  return (
    <section id="services" className="pt-14 pb-4 md:pt-20 md:pb-5 section-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="kicker mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-[3.25rem] font-extrabold text-[var(--text-primary)] tracking-[-0.02em] leading-tight mb-6">
            Enterprise Solutions, <br className="hidden md:block" />Global Reach
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Homegrown solutions tailored to modern enterprise security, operational, and regulatory needs.
          </p>
        </div>

        {/* Alternating Rows */}
        <div className="space-y-28">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Text */}
              <div className="flex-1 max-w-lg">
                <div className="w-14 h-14 bg-[var(--brand-light)] rounded-2xl flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-[var(--brand)]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight leading-snug mb-4">
                  {s.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-6">
                  {s.desc}
                </p>
                
                <div className="flex gap-6">
                  <Link to="/services/$serviceId" params={{ serviceId: s.id }} className="inline-flex items-center gap-2 text-[var(--brand)] font-bold hover:gap-3 transition-all">
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <Link to="/services/$serviceId" params={{ serviceId: s.id }}>
                  <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/3] group shadow-xl shadow-black/5 cursor-pointer">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-black/5 pointer-events-none" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
