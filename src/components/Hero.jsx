import { profile } from '../data/profile.js'
import { games } from '../data/games.js'

const ACCENT_TEXT = {
  cyan: 'text-neon-cyan',
  magenta: 'text-neon-magenta',
  lime: 'text-neon-lime',
}

export default function Hero() {
  return (
    <header className="relative min-h-[92vh] overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      {/* glow blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-neon-cyan/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-neon-magenta/10 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
        <p className="float-in font-display text-xs tracking-[0.4em] uppercase text-neon-cyan">
          {profile.role}
          {profile.location && <span className="text-dim"> · {profile.location}</span>}
        </p>

        <h1
          className="float-in flicker mt-4 font-display text-4xl font-black tracking-wide text-glow sm:text-6xl lg:text-7xl"
          style={{ '--accent': 'var(--color-neon-cyan)', animationDelay: '0.1s' }}
        >
          {profile.name}
        </h1>

        <p
          className="float-in mt-6 max-w-xl text-lg leading-relaxed text-dim sm:text-xl"
          style={{ animationDelay: '0.2s' }}
        >
          {profile.tagline}
        </p>

        {/* quick nav to the three games */}
        <nav
          aria-label="Projects"
          className="float-in mt-12 flex flex-wrap gap-3"
          style={{ animationDelay: '0.3s' }}
        >
          {games.map((g, i) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className={`group rounded-lg border border-edge bg-panel/60 px-4 py-3 backdrop-blur-sm transition-colors hover:border-current ${ACCENT_TEXT[g.accent] ?? 'text-neon-cyan'}`}
            >
              <span className="font-display text-[10px] tracking-[0.3em] text-dim group-hover:text-current">
                0{i + 1}
              </span>
              <span className="ml-3 font-semibold tracking-wide text-ink group-hover:text-current">
                {g.title}
              </span>
            </a>
          ))}
        </nav>

        <a
          href={`#${games[0].id}`}
          aria-label="Scroll to first project"
          className="pulse-down absolute bottom-8 left-1/2 -translate-x-1/2 text-dim hover:text-neon-cyan"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  )
}
