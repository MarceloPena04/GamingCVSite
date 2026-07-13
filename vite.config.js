import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'GamingCVSite'
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  base: isGithubActions ? `/${repoName}/` : '/',
  plugins: [react(), tailwindcss()],
})
