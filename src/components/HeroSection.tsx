import { ShieldCheck, ArrowRight } from 'lucide-react'

const avatars = [
  { src: '/avatars/avatar1.png', size: 'w-[140px] h-[140px] md:w-[180px] md:h-[180px]', pos: 'top-[5%] left-[5%]', z: 'z-20' },
  { src: '/avatars/avatar2.png', size: 'w-[180px] h-[180px] md:w-[220px] md:h-[220px]', pos: 'top-[15%] right-[0%]', z: 'z-30' },
  { src: '/avatars/avatar3.png', size: 'w-[120px] h-[120px] md:w-[150px] md:h-[150px]', pos: 'top-[0%] right-[35%]', z: 'z-10' },
  { src: '/avatars/avatar4.png', size: 'w-[130px] h-[130px] md:w-[160px] md:h-[160px]', pos: 'bottom-[8%] left-[18%]', z: 'z-20' },
  { src: '/avatars/avatar5.png', size: 'w-[110px] h-[110px] md:w-[140px] md:h-[140px]', pos: 'bottom-[5%] right-[10%]', z: 'z-10' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg)]" suppressHydrationWarning>
      {/* Soft ambient blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--brand)]/[0.04] rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" suppressHydrationWarning />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#38BDF8]/[0.05] rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" suppressHydrationWarning />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8 md:pt-16 md:pb-12 w-full" suppressHydrationWarning>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center" suppressHydrationWarning>

          {/* ── TEXT ── */}
          <div className="max-w-xl relative z-10" suppressHydrationWarning>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-light)] text-[var(--brand)] text-[13px] font-bold mb-8" suppressHydrationWarning>
              <ShieldCheck size={15} />
              Enterprise Information Assurance
            </div>

            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold tracking-[-0.025em] text-[var(--text-primary)] leading-[1.08] mb-6">
              Nothing's Impossible.{' '}
              <span className="text-[var(--brand)]">Just Keep Thinking.</span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10 max-w-md">
              Securing your business today for an innovative tomorrow — global expertise in cybersecurity, data protection, and IT advisory.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#about" className="btn btn-primary text-[15px] px-8 py-4">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className="btn btn-secondary text-[15px] px-8 py-4">
                Our Services
              </a>
            </div>
          </div>

          {/* ── AVATAR CLUSTER ── */}
          <div className="absolute inset-0 lg:relative lg:inset-auto flex items-center justify-center h-full lg:h-[520px] opacity-[0.08] lg:opacity-100 pointer-events-none lg:pointer-events-auto" suppressHydrationWarning>
            {avatars.map((a, i) => (
              <div
                key={i}
                className={`absolute ${a.pos} ${a.size} ${a.z} rounded-full overflow-hidden ring-[6px] ring-[var(--bg)] shadow-xl hover:scale-110 transition-transform duration-500`}
              >
                <img src={a.src} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
            ))}

            {/* Floating badge */}
            <div className="absolute top-[2%] left-[40%] z-50 w-12 h-12 bg-[var(--surface)] rounded-full flex items-center justify-center shadow-lg shadow-black/5 text-2xl animate-bounce" style={{ animationDuration: '4s' }}>
              🛡️
            </div>
            <div className="absolute bottom-[25%] left-[8%] z-50 w-14 h-14 bg-[var(--brand)] rounded-2xl flex items-center justify-center shadow-lg shadow-[var(--brand)]/30 rotate-12 animate-bounce" style={{ animationDuration: '5s' }}>
              <ShieldCheck size={24} className="text-white -rotate-12" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
