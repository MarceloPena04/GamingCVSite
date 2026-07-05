// ─────────────────────────────────────────────────────────────
//  YOUR GAMES — this is the only file you need to edit to add
//  your real content.
//
//  youtube: paste the FULL YouTube link (any format works:
//  watch?v=..., youtu.be/..., or just the 11-char video id).
//  ⚠ The video must be UNLISTED, not private — private videos
//  cannot be embedded or watched by link.
// ─────────────────────────────────────────────────────────────

export const games = [
  {
    id: 'game-one',
    title: 'Game One',
    tagline: 'One-line hook that sells the game in a sentence.',
    youtube: 'PASTE_YOUTUBE_LINK_HERE',
    year: '2026',
    role: 'Solo developer',
    duration: '3 months', // dev time — "" to hide
    accent: 'cyan', // cyan | magenta | lime
    description:
      'What the game is: genre, core loop, what the player actually does. ' +
      'Two to four sentences that let someone who will never install it ' +
      'understand what they are watching in the video.',
    tech: ['Unity', 'C#', 'Blender', 'Netcode for GameObjects'],
    sections: [
      {
        heading: 'How it was built',
        body:
          'The interesting engineering: architecture decisions, systems you ' +
          'wrote from scratch, problems you solved. This is the part a hiring ' +
          'manager reads closely — be specific.',
      },
      {
        heading: 'Why I made it',
        body:
          'The motivation and what you learned. School project? Jam? ' +
          'Wanted to learn multiplayer networking? Say it plainly.',
      },
    ],
    links: [
      // optional extra links, e.g. { label: 'Source code', url: 'https://github.com/...' }
    ],
  },
  {
    id: 'game-two',
    title: 'Game Two',
    tagline: 'One-line hook that sells the game in a sentence.',
    youtube: 'PASTE_YOUTUBE_LINK_HERE',
    year: '2025',
    role: 'Solo developer',
    duration: '',
    accent: 'magenta',
    description: 'What the game is, in two to four sentences.',
    tech: ['Unity', 'C#'],
    sections: [
      { heading: 'How it was built', body: 'Architecture, systems, hard problems solved.' },
      { heading: 'Why I made it', body: 'Motivation and takeaways.' },
    ],
    links: [],
  },
  {
    id: 'game-three',
    title: 'Game Three',
    tagline: 'One-line hook that sells the game in a sentence.',
    youtube: 'PASTE_YOUTUBE_LINK_HERE',
    year: '2024',
    role: 'Solo developer',
    duration: '',
    accent: 'lime',
    description: 'What the game is, in two to four sentences.',
    tech: ['Unity', 'C#'],
    sections: [
      { heading: 'How it was built', body: 'Architecture, systems, hard problems solved.' },
      { heading: 'Why I made it', body: 'Motivation and takeaways.' },
    ],
    links: [],
  },
]

/** Extracts the 11-char video id from any YouTube URL format (or returns the raw id). */
export function getYouTubeId(input) {
  if (!input || input.includes('PASTE_')) return null
  const trimmed = input.trim()
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed
  const match = trimmed.match(
    /(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/
  )
  return match ? match[1] : null
}
