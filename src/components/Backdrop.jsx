// Fixed full-page ambient layer: neon dust drifting upward plus a few faint
// breathing color glows. Sits behind all content and ignores the mouse.
const PARTICLES = [
  { left: '4%', size: 3, delay: 0, dur: 13, color: 'var(--color-neon-cyan)' },
  { left: '11%', size: 2, delay: 2.5, dur: 9, color: 'var(--color-neon-magenta)' },
  { left: '19%', size: 4, delay: 5, dur: 15, color: 'var(--color-neon-cyan)' },
  { left: '27%', size: 2, delay: 8.1, dur: 11, color: 'var(--color-neon-red)' },
  { left: '34%', size: 2, delay: 1.2, dur: 10, color: 'var(--color-neon-lime)' },
  { left: '42%', size: 3, delay: 9.4, dur: 14, color: 'var(--color-neon-magenta)' },
  { left: '49%', size: 3, delay: 6.3, dur: 13, color: 'var(--color-neon-amber)' },
  { left: '56%', size: 2, delay: 3.4, dur: 8.5, color: 'var(--color-neon-cyan)' },
  { left: '64%', size: 4, delay: 0.8, dur: 16, color: 'var(--color-neon-magenta)' },
  { left: '71%', size: 2, delay: 10.2, dur: 12, color: 'var(--color-neon-lime)' },
  { left: '78%', size: 2, delay: 4.6, dur: 9.5, color: 'var(--color-neon-red)' },
  { left: '85%', size: 3, delay: 2, dur: 12, color: 'var(--color-neon-lime)' },
  { left: '91%', size: 2, delay: 7.2, dur: 10.5, color: 'var(--color-neon-cyan)' },
  { left: '96%', size: 3, delay: 5.8, dur: 14, color: 'var(--color-neon-amber)' },
]

export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* faint breathing color glows spread down the page */}
      <div className="blob-pulse absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-neon-magenta/6 blur-3xl" />
      <div
        className="blob-pulse absolute top-2/3 -right-40 h-96 w-96 rounded-full bg-neon-cyan/6 blur-3xl"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="blob-pulse absolute -bottom-20 left-1/3 h-80 w-80 rounded-full bg-neon-lime/5 blur-3xl"
        style={{ animationDelay: '4s' }}
      />

      {/* neon dust rising through the whole page */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  )
}
