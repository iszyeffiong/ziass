export function TrustBar() {
  const certs = [
    {
      abbr: 'CBN',
      full: 'Central Bank of Nigeria',
      icon: '/cbn.png',
      type: 'img',
    },
    {
      abbr: 'NCC',
      full: 'Nigerian Communications Commission',
      icon: '/ncc.png',
      type: 'img',
    },
    {
      abbr: 'NDPC',
      full: 'Nigeria Data Protection Commission',
      icon: '/ndpc.jpg',
      type: 'img',
    },
    {
      abbr: 'CISM',
      full: 'Certified Information Security Manager',
      icon: '/cism.png',
      type: 'img',
    },
    {
      abbr: 'PMP',
      full: 'Project Management Professional',
      icon: '/pmp.jpeg',
      type: 'img',
    },
    {
      abbr: 'CGEIT',
      full: 'Certified in IT Governance',
      icon: '/cgeit.png',
      type: 'img',
    },
  ]

  // Multiple duplicates for a smooth infinite scroll
  const scrollItems = [...certs, ...certs, ...certs, ...certs]

  return (
    <section className="bg-white text-black py-12 overflow-hidden border-y border-black/10 dark:bg-[#0b1220] dark:text-white dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left">
        <p className="text-[12px] font-extrabold text-black/60 uppercase tracking-[0.25em] dark:text-white/80">
          Trusted & Certified By
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* The Animated Wrapper */}
        <div className="animate-scroll flex items-center gap-16 md:gap-32 px-12">
          {scrollItems.map((c, i) => (
            <div
              key={`${c.abbr}-${i}`}
              className="flex items-center gap-5 shrink-0 group/item cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shadow-inner transition-transform duration-300 group-hover/item:scale-110 group-hover/item:bg-white/10 group-hover/item:border-white/20">
                {c.type === 'img' ? (
                  <img
                    src={c.icon}
                    alt={c.full}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-2xl">{c.icon}</span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white/20 tracking-tighter group-hover/item:text-white transition-colors duration-300">
                  {c.abbr}
                </span>
                <span className="text-[10px] text-white/10 group-hover/item:text-white/40 transition-colors duration-300 font-bold uppercase tracking-widest whitespace-nowrap">
                  {c.full}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft edge masks */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none dark:from-[#0b1220]" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none dark:from-[#0b1220]" />
      </div>
    </section>
  )
}
