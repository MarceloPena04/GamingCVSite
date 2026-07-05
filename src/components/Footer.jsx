import { profile } from '../data/profile.js'

export default function Footer() {
  const links = [
    profile.email && { label: 'Email', href: `mailto:${profile.email}` },
    profile.github && { label: 'GitHub', href: profile.github },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin },
    profile.cvUrl && { label: 'Full CV', href: profile.cvUrl },
  ].filter(Boolean)

  return (
    <footer id="contact" className="border-t border-edge py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-xl font-bold tracking-wide sm:text-2xl">
          We can build something together...
        </h2>
        <p className="mt-2 max-w-md text-dim">
          Reach out if you'd like to talk about these projects, or the next one.
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="inline-block rounded-lg border border-edge bg-panel px-5 py-2.5 font-display text-xs font-bold tracking-[0.2em] uppercase text-neon-cyan transition-colors hover:border-neon-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm text-dim">
          © {new Date().getFullYear()} {profile.name} · Built with React + Tailwind
        </p>
      </div>
    </footer>
  )
}
