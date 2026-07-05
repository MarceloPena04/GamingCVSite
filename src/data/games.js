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
    year: '2025',
    role: 'Solo developer',
    duration: '',
    accent: 'cyan', // cyan | magenta | lime
    description: 'What the game is, in two to four sentences.',
    tech: ['Unity', 'C#'],
    sections: [
      { heading: 'How it was built', body: 'Architecture, systems, hard problems solved.' },
      { heading: 'Why I made it', body: 'Motivation and takeaways.' },
    ],
    links: [
      // optional extra links, e.g. { label: 'Source code', url: 'https://github.com/...' }
    ],
  },
  {
    id: 'game-two',
    title: 'EOTM (Employee Of The Month)',
    tagline: 'This game is a 2D topdown-angled singleplayer game where the player has to use their intuition and logic to solve challenges and make as many points as possible.',
    youtube: 'https://youtu.be/Vd_jfKXSKLs',
    year: '2025',
    role: 'Solo developer',
    duration: '3 months', // dev time — "" to hide
    accent: 'magenta',
    description:
      "The game was intended as a fun training course for new employees to learn the company's (Rockwell Automatomation) processes and procedures. " +
      "This project was made to help new employees understand the company's workflows and improve their performance without having to go through the traditional, somewhat tedious training process. " +
      'In the video you can see the player going through the game, solving puzzles and making points. The game is designed to be challenging (there are 3 difficulty levels to choose from) but also fun and engaging, with a focus on problem-solving and investigative thinking.',
    tech: ['Unity', 'C#', 'Pixilart.com'],
    sections: [
      {
        heading: 'How it was built',
        body:
          'Built various systems, some of which were: Quest System, Point System, Difficulty System, Minigame Taxonomy, Interactive Environment. ' +
          "I had to design a lot of 'if' conditions, because almost everything depended on the earlier actions, but this gave the game a natural, enjoyable challenge. " +
          'The important stakeholder request was to make sure we implicitly implemented their processes and procedures, so I had to make sure the game was fun but also a learning experience. '
      },
      {
        heading: 'Why I made it',
        body:
          'It was a school project, but the scope was flexible and the directions were incredibly vague so I had a lot of creative freedom. ' +
          'We were a team of 5, but I was the only one who had experience with Unity and had game development interest, so I took the lead and made the game myself. '
      },
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
