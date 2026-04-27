import { BadgeCheck } from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center bg-white text-black dark:bg-[#0b1220] dark:text-white"
    >
      <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[var(--shadow-color)] group bg-[var(--surface)]">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none" />
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
          alt="ZIASS Team"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/95 dark:bg-[var(--surface)]/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[var(--border-subtle)]">
          <p className="text-3xl font-bold text-black dark:text-white mb-1">50+</p>
          <p className="text-sm text-sky-600 font-bold uppercase tracking-wider">
            Years Combined Experience
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-sky-600 font-semibold tracking-wider uppercase text-sm mb-3">
            About Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight">
            Theory meets <br />
            <span className="text-sky-500">Industry Practice.</span>
          </h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          At ZIASS Limited, we bridge the gap between academic research and
          real-world security operations. Our unique approach ensures that your
          business is not just compliant, but genuinely resilient against
          evolving digital threats.
        </p>
        <ul className="space-y-4 pt-2">
          {[
            'Elite talent drawn from regulatory and corporate sectors.',
            'Bespoke strategies tailored to your operational reality.',
            'Uncompromising focus on integrity and data protection.',
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-slate-700 dark:text-slate-200 font-medium"
            >
              <div className="mt-1 bg-sky-100 dark:bg-sky-900 p-1.5 rounded-full flex-shrink-0 shadow-sm border border-sky-200 dark:border-sky-800">
                <BadgeCheck className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              </div>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
