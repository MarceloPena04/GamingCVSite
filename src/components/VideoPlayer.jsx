import { useState } from 'react'
import { getYouTubeId } from '../data/games.js'

export default function VideoPlayer({ youtube, title }) {
  const [playing, setPlaying] = useState(false)
  const videoId = getYouTubeId(youtube)

  if (!videoId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-edge bg-panel accent-glow">
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <p className="font-display text-sm tracking-[0.3em] uppercase accent-text">
              Video slot
            </p>
            <p className="mt-2 text-dim text-sm">
              Paste the YouTube link in <code className="text-ink">src/data/games.js</code>
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border accent-border accent-glow">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-edge bg-panel accent-glow transition-transform duration-300 hover:scale-[1.01]"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        srcSet={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg 1280w, https://i.ytimg.com/vi/${videoId}/hqdefault.jpg 480w`}
        sizes="(min-width: 1024px) 640px, 100vw"
        alt={`${title} gameplay video thumbnail`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full border-2 accent-border bg-void/70 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 accent-text" fill="currentColor" aria-hidden="true">
            <path d="M8 5.14v13.72L19 12 8 5.14z" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-3 left-4 font-display text-[10px] tracking-[0.25em] uppercase text-dim">
        ▶ Watch gameplay
      </span>
    </button>
  )
}
