const management = [
  {
    name: 'Dr. Kazeem Durodoye',
    title: 'Chief Executive Officer',
    bio: 'Over 30 years of ICT experience. Former Group Executive Director at LEADERSHIP Newspapers. Ph.D. in Information Systems. Certified CISM, CGEIT, MCP, PMP.',
    image: 'https://www.cybernovr.com/_next/static/media/kazeem.a2c81ac6.png',
  },
  {
    name: 'Mr. Ibrahim Oladeji',
    title: 'Chief Technology Officer',
    bio: 'IT professional with over a decade of experience building solutions across sectors. Extensive experience leading IT teams toward efficiency and client satisfaction.',
    image:
      'https://www.cybernovr.com/_next/static/media/ibrahimnew.50be8322.jpg',
  },
  {
    name: 'Dr. Tunde Ali',
    title: 'Non-Executive Director',
    bio: 'First-class medical professional with over 17 years of practice globally. Consultant in Anesthesia & Family Practice, specializing in medical IT.',
    image: 'https://www.cybernovr.com/_next/static/media/drakin.1a9e3e83.jpg',
  },
  {
    name: 'Israel Effiong',
    title: 'Product Manager',
    bio: 'Driving product strategy and delivery across ZIASS web application and cybersecurity service lines.',
    image: '/israel-effiong.jpg',
  },
]

const board = [
  {
    name: 'Prof. Mutawakilu Tiamiyu',
    title: 'Chairman',
    bio: 'Distinguished academic and industry leader with extensive experience in corporate governance, strategic oversight, and information systems.',
  },
  {
    name: 'Dr. Kazeem Durodoye',
    title: 'CEO',
    bio: 'Over 30 years of ICT experience. CEO of ZIASS Nigeria Limited. Ph.D. in Information Systems. Certified CISM, CGEIT, MCP, PMP.',
  },
  {
    name: 'Dr. Tunde Ali',
    title: 'Non-Executive Director',
    bio: 'Medical professional with 17+ years of global practice. Consultant in Anesthesia & Family Practice, specializing in medical IT.',
  },
  {
    name: 'Eng. Gbolahan Oshonubi',
    title: 'Non-Executive Director',
    bio: 'Seasoned engineering professional with vast experience in technology infrastructure, project management, and corporate governance.',
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-28 md:py-36 bg-[var(--cool-gray)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="kicker mb-4 block">Our Team</span>
          <h2 className="text-4xl md:text-[3.25rem] font-extrabold text-[var(--text-primary)] tracking-[-0.02em] leading-tight mb-6">
            Meet the Minds Behind ZIASS
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            A diverse team of industry veterans dedicated to securing your
            enterprise's future.
          </p>
        </div>

        {/* Board of Directors */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px flex-1 max-w-[60px] bg-[var(--border-subtle)]" />
            <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-[0.15em]">
              Board of Directors
            </h3>
            <div className="h-px flex-1 max-w-[60px] bg-[var(--border-subtle)]" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 overflow-visible pb-40">
            {board.map((m, i) => (
              <div
                key={i}
                className="relative group/board card px-6 py-4 flex items-center gap-3.5 !rounded-full cursor-default overflow-visible"
              >
                <div className="w-10 h-10 bg-[var(--brand-light)] text-[var(--brand)] rounded-full flex items-center justify-center font-bold text-sm group-hover/board:bg-[var(--brand)] group-hover/board:text-white transition-colors duration-300 shrink-0">
                  {m.name.split(' ').pop()?.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[var(--text-primary)] text-sm leading-tight">
                    {m.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] font-medium">
                    {m.title}
                  </p>
                </div>

                {/* Hover Tooltip */}
                {m.bio && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-[var(--navy)] text-white text-[13px] rounded-xl opacity-0 invisible group-hover/board:opacity-100 group-hover/board:visible transition-all duration-300 z-50 shadow-xl shadow-black/10 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-[var(--navy)]" />
                    <p className="leading-relaxed">{m.bio}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px flex-1 max-w-[60px] bg-[var(--border-subtle)]" />
            <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-[0.15em]">
              Management Team
            </h3>
            <div className="h-px flex-1 max-w-[60px] bg-[var(--border-subtle)]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {management.map((m, i) => (
              <div key={i} className="card p-5 group">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-5 bg-[var(--cool-gray)] flex items-center justify-center">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-5xl font-extrabold text-[var(--border-subtle)]">
                      {m.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-0.5">
                  {m.name}
                </h4>
                <p className="text-[13px] font-bold text-[var(--brand)] mb-3">
                  {m.title}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
