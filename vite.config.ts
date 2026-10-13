import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repository from /humanities-web-portfolio/.
// Local development still uses the root path for a smoother experience.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/humanities-web-portfolio/' : '/',
})
