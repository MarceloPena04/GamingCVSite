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
    title: 'Sostek Office',
    tagline: 'A 3D online-multiplayer party game (3–4 players) where a committee governs a struggling city, each round players propose policy cards and a rotating Judge decides which one the city has to live with.',
    youtube: '', // add your gameplay video link here
    year: '2026',
    role: 'Lead Developer & Gameplay Programmer',
    duration: '5 months', // dev time — "" to hide
    accent: 'cyan', // cyan | magenta | lime | amber
    description:
      'Sostek Office is a real-time multiplayer card game set in a toon-shaded courtroom. The players form a city committee: each round the Committee Members secretly pick a policy proposal from their hand, argue their case over live voice, and a rotating Judge picks the winning card. ' +
      "The twist is that every card hides its real environmental, social and economic effects until after the Judge has already committed, so you have to persuade and read the room. " +
      "The city runs on three stats that decay a little every round, drive any of them to zero and the city collapses and everyone loses, push one to the top or survive the total rounds and the city triumphs. ",
    tech: ['Unity', 'C#', 'Netcode for GameObjects', 'Unity Gaming Services (Relay / Lobby / Auth)', 'Vivox Voice Chat', 'Cinemachine', 'URP + Toon Shader', 'Blender'],
    sections: [
      {
        heading: 'How it was built',
        body:
          'The whole match is server-authoritative on top of Unity Netcode for GameObjects, the host owns all the truth (city stats, scores, whose turn it is) and clients just read the replicated state and send their actions through RPCs. ' +
          "At the core is a 7-phase round state machine (deterioration → card selection → justification → judgment → resolution → visual update → role rotation) that also drives the Vivox voice layer. " +
          "Players join through Unity Gaming Services (authentication, a Relay-backed lobby, and a handoff into the courtroom scene), and I leaned on ParrelSync to run several synced clients on my machine while testing."
      },
      {
        heading: 'Why I made it',
        body:
          "I got hired by Sostek (internship) to build this game for them whilst leading a small team of 5 (2 programers and 3 artists). The game's purpose is so that teachers in Tecnológico de Monterrey can help engineering students learn important concepts about sustainable development in a fun and engaging way. " +
          'I also wanted to push past single-player and build a fully networked, voice-enabled multiplayer game end to end, matchmaking, authority model, state sync, etc. '
      },
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
    accent: 'red',
    description:
      "The game was intended as a fun training course for new employees to learn the company's processes and procedures. " +
      "This project was made to help new employees understand the company's workflows and improve their performance without having to go through the traditional, somewhat tedious training process. " +
      'In the video you can see the player going through the game, solving puzzles and making points. The game is designed to be challenging (there are 3 difficulty levels to choose from) but also fun and engaging, with a focus on problem-solving and investigative thinking.',
    tech: ['Unity', 'C#', 'Pixilart'],
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
          'It was a school project, for the American smart manufacturing company called "Rockwell Automation", but the scope was flexible and the directions were incredibly vague so I had a lot of creative freedom. ' +
          'We were a team of 5, but I was the only one who had experience with Unity and had game development interest, so I took the lead and made the game myself. '
      },
    ],
    links: [],
  },
  {
    id: 'game-three',
    title: 'Vehicle-Actuated Adaptive Traffic Control System',
    tagline: 'A Unity simulation where traffic lights never make you wait at an empty intersection. It is a rules-based heuristic controller that realistically reads real-time lane demand and dynamically adjusts green-light durations to keep traffic flowing and prevent gridlock.',
    youtube: '', // add your demo/gameplay video link here
    year: '2025',
    role: 'Solo developer',
    duration: '3 months', // dev time — fill in or leave "" to hide
    accent: 'lime', // cyan | magenta | lime | amber | red
    description:
      'This is an intelligent, reactive traffic-management simulation built in Unity. The intersection runs on a rules-based heuristic that reads real-time sensor data and scales green-light durations to match actual lane demand, so traffic keeps flowing and never piles up at an empty crossing. ' +
      'The project is the engineering evolution of three control algorithms. It started as a plain Sequential/Normal model, a standard finite state machine on rigid timers that ignores demand completely. The next version, Quickly-Reactive, skipped empty lanes instantly with 0-second thresholds, but that is aggressive switching which causes cars to collide. ' +
      'The final version is a hybrid Sequential/Reactive algorithm that keeps the deterministic fairness of a sequential cycle so no lane ever starves, but adds temporal hysteresis, a "patience" buffer that holds each green for a minimum stability window and only cuts a phase short once the sensors confirm a lane has been continuously empty for a set duration.',
    tech: ['Unity', 'C#', 'Pixilart'],
    sections: [
      {
        heading: 'How it was built',
        body:
          "The intersection is run by a deterministic finite state machine that cycles the lanes A → B → C → D to guarantee fairness and stop any lane from starving. Then, we have the adaptive hysteresis, instead of switching the instant a lane looks empty, the algorithm waits for a sustained stretch of zero traffic before ending a green phase, which is what kills the strobe-lighting and keeps things stable. " +
          "The hardest problems were spatial and physics-based. Leaning purely on triggers for the intersection logic kept causing state conflicts, so I built proper spatial awareness with vector math: taking the Vector3.Dot product between the traffic-flow direction and a car's position to work out mathematically whether it's still approaching or has already crossed the stop line, no heavy frame-by-frame collision checks needed. " +
          "For performance I cache component arrays on startup and only query specific tags during state transitions instead of running expensive GameObject.Find calls every frame."
      },
      {
        heading: 'Why I made it',
        body:
          'It was for a school project, for the Mexican road technology company called "SEMEX". The goal was to build a traffic light controller that could adapt to real-time traffic conditions and improve traffic flow at specific intersections near Tecnológico de Monterrey. Again, we were a team of 5, but I was the only one with Unity experience and a drive to learn more about game development, so I did it by myself. ' },
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
