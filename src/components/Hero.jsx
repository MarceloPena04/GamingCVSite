import { useRef } from 'react'
import { profile } from '../data/profile.js'
import { games } from '../data/games.js'

const ACCENT_TEXT = {
  cyan: 'text-neon-cyan',
  magenta: 'text-neon-magenta',
  lime: 'text-neon-lime',
  amber: 'text-neon-amber',
  red: 'text-neon-red',
}

export default function Hero() {
  const glowRef = useRef(null)

  // glow layer gently trails the cursor (skipped for reduced-motion users)
  const handleMouseMove = (e) => {
    const el = glowRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `translate3d(${x * 70}px, ${y * 45}px, 0)`
  }

  // intro line split into stagger-animated letters (role cyan, location dim)
  const introSegments = [
    { text: profile.role, cls: '' },
    ...(profile.location ? [{ text: ` · ${profile.location}`, cls: 'text-dim' }] : []),
  ]
  let letterIndex = 0

  return (
    <header onMouseMove={handleMouseMove} className="relative min-h-[92vh] overflow-hidden">
      <div className="grid-bg grid-anim absolute inset-0" aria-hidden="true" />

      {/* glow layer — breathes, and drifts with the cursor */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out"
      >
        <div className="blob-pulse absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-neon-cyan/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
        <p
          className="font-display text-xs tracking-[0.4em] uppercase text-neon-cyan"
          aria-label={`${profile.role}${profile.location ? ` · ${profile.location}` : ''}`}
        >
          <span aria-hidden="true">
            {introSegments.map((seg, s) => (
              <span key={s} className={seg.cls}>
                {seg.text.split('').map((ch) => {
                  const d = 0.35 + letterIndex++ * 0.035
                  return (
                    <span key={letterIndex} className="letter-in" style={{ animationDelay: `${d}s` }}>
                      {ch === ' ' ? ' ' : ch}
                    </span>
                  )
                })}
              </span>
            ))}
            <span className="cursor-blink ml-2 text-neon-cyan">▍</span>
          </span>
        </p>

        <h1
          data-text={profile.name}
          className="hero-title sheen relative mt-4 font-display text-4xl font-black tracking-wide text-glow sm:text-6xl lg:text-7xl"
          style={{ '--accent': 'var(--color-neon-cyan)' }}
        >
          {profile.name}
        </h1>

        <p
          className="float-in mt-6 max-w-xl text-lg leading-relaxed text-dim sm:text-xl"
          style={{ animationDelay: '0.9s' }}
        >
          {profile.tagline}
        </p>

        {/* quick nav to the three games */}
        <nav aria-label="Projects" className="mt-12 flex flex-wrap gap-3">
          {games.map((g, i) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className={`float-in chip-shine group rounded-lg border border-edge bg-panel/60 px-4 py-3 backdrop-blur-sm hover:border-current ${ACCENT_TEXT[g.accent] ?? 'text-neon-cyan'}`}
              style={{ animationDelay: `${1.1 + i * 0.15}s` }}
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-dim hover:text-neon-cyan"
        >
          <span className="font-display block text-[9px] tracking-[0.35em] uppercase">Scroll</span>
          <svg
            viewBox="0 0 24 24"
            className="pulse-down mx-auto h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  )
}
