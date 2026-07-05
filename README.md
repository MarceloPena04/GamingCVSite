# Gaming CV — Portfolio Site

A static portfolio site showcasing three game projects, each with an embedded
YouTube video, description, tech stack and design write-up. Built with React,
Vite and Tailwind CSS. No backend.

## Add your content (the only two files you edit)

| File | What goes there |
|---|---|
| `src/data/games.js` | The three games: titles, YouTube links, descriptions, tech stacks, write-ups |
| `src/data/profile.js` | Your name, tagline, email, GitHub/LinkedIn links |

Paste YouTube links in any format (`https://www.youtube.com/watch?v=...`,
`https://youtu.be/...`, or the bare video id) — the site extracts the id.

> ⚠️ **Videos must be UNLISTED, not private.** Private YouTube videos cannot
> be embedded or opened by link. Unlisted videos are invisible in search but
> play for anyone with the link — exactly what you want here.

## Run locally

```bash
npm install
npm run dev
```

## Publish on GitHub Pages (automatic)

1. Create a GitHub repo and push this folder to the `main` branch.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Done — every push to `main` auto-deploys via `.github/workflows/deploy.yml`.
   Your site will live at `https://<username>.github.io/<repo-name>/`.

## Publish on Vercel (alternative)

Import the repo at vercel.com — it detects Vite automatically, no config needed.
