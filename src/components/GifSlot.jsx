export default function GifSlot({ gif, title }) {
  const hasGif = gif && !gif.includes('PATH_')

  if (!hasGif) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-edge bg-panel accent-glow">
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <p className="font-display text-sm tracking-[0.3em] uppercase accent-text">
              GIF slot
            </p>
            <p className="mt-2 text-dim text-sm">
              Add a GIF path/URL in <code className="text-ink">src/data/games.js</code>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border accent-border accent-glow">
      <img
        src={gif}
        alt={`${title} animated preview`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}
