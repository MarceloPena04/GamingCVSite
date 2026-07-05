import VideoPlayer from './VideoPlayer.jsx'

const ACCENTS = {
  cyan: 'var(--color-neon-cyan)',
  magenta: 'var(--color-neon-magenta)',
  lime: 'var(--color-neon-lime)',
  amber: 'var(--color-neon-amber)',
  red: 'var(--color-neon-red)',
}

export default function GameSection({ game, index }) {
  const accent = ACCENTS[game.accent] ?? ACCENTS.cyan
  const flip = index % 2 === 1

  return (
    <section
      id={game.id}
      style={{ '--accent': accent }}
      className="scroll-mt-24 border-t border-edge py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* header row */}
        <div className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="font-display text-sm accent-text text-glow">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="font-display text-2xl font-bold tracking-wide sm:text-4xl">
            {game.title}
          </h2>
          <span className="text-dim">{game.year}</span>
        </div>
        <p className="mb-10 max-w-2xl text-lg text-dim">{game.tagline}</p>

        <div
          className={`grid items-start gap-10 lg:grid-cols-2 ${
            flip ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          {/* video */}
          <div>
            <VideoPlayer youtube={game.youtube} title={game.title} />
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-dim">
              <span>
                <span className="accent-text font-semibold">Role</span> {game.role}
              </span>
              {game.duration && (
                <span>
                  <span className="accent-text font-semibold">Dev time</span> {game.duration}
                </span>
              )}
            </div>
          </div>

          {/* write-up */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 font-display text-xs font-bold tracking-[0.25em] uppercase accent-text">
                The game
              </h3>
              <p className="text-base leading-relaxed text-ink/90">{game.description}</p>
            </div>

            {game.sections.map((s) => (
              <div key={s.heading}>
                <h3 className="mb-2 font-display text-xs font-bold tracking-[0.25em] uppercase accent-text">
                  {s.heading}
                </h3>
                <p className="text-base leading-relaxed text-ink/90">{s.body}</p>
              </div>
            ))}

            <div>
              <h3 className="mb-3 font-display text-xs font-bold tracking-[0.25em] uppercase accent-text">
                Tech stack
              </h3>
              <ul className="flex flex-wrap gap-2">
                {game.tech.map((t) => (
                  <li
                    key={t}
                    className="accent-chip rounded-md px-3 py-1 text-sm font-semibold tracking-wide"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {game.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {game.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="accent-text text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
