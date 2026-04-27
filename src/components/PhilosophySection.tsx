import { ShieldCheck, Target, Lightbulb, Users, HeartHandshake } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Creativity',
    desc: 'We resolve the impossible by keeping thinking and utilizing the best industry standards and tools.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Delight',
    desc: 'We will not stop until you are delighted. Our customers say: "We are delighted."',
  },
  {
    icon: Target,
    title: 'Innovation',
    desc: 'We keep striving for new ways with dramatic improvements in cost, quality, time, and risk.',
  },
  {
    icon: Users,
    title: 'Our People',
    desc: 'The brains behind our success — equipped with what it takes to provoke intellectual curiosity.',
  },
]

export function PhilosophySection() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* ── ABOUT HERO ── */}
      <div className="relative bg-[var(--navy)] text-white py-28 md:py-36">
        {/* Background texture */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover opacity-[0.04]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)] via-transparent to-[var(--navy)]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="kicker !text-[var(--brand)] mb-4 block" style={{ color: '#4D9FFF' }}>About Us</span>
          <h2 className="text-4xl md:text-[3.25rem] font-extrabold leading-[1.12] tracking-[-0.02em] mb-8">
            Securing your business today for an{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D9FFF] to-[#38BDF8]">innovative tomorrow.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-4">
            At ZIASS, we place a strong priority on customer service. We know the importance of protecting your information assets today while securing your business for tomorrow.
          </p>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
            With over <strong className="text-white/90">50 years of combined experience</strong> in business advisory, information assurance, and IT security — this is our unique edge.
          </p>
        </div>
      </div>

      {/* ── MISSION / VISION / PHILOSOPHY CARDS ── */}
      <div className="bg-[var(--cool-gray)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 -mt-32 relative z-10 mb-20">
            {[
              { icon: Target, title: 'Our Mission', body: 'It is possible.' },
              { icon: Lightbulb, title: 'Our Vision', body: 'To be the undisputed leader in enterprise security and business innovation across Africa and globally.' },
              { icon: ShieldCheck, title: 'What Drives Us', body: 'Our unflinching belief that "Nothing\'s impossible." We only need to Keep Thinking. Come, challenge us.' },
            ].map((card) => (
              <div
                key={card.title}
                className="card p-8 md:p-10"
              >
                <card.icon className="w-10 h-10 text-[var(--brand)] mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{card.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          {/* ── CORE VALUES ── */}
          <div className="text-center mb-12">
            <span className="kicker mb-3 block">Our Values</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">What We Stand For</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-8 text-center">
                <div className="w-14 h-14 bg-[var(--brand-light)] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-[var(--brand)]" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{v.title}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
