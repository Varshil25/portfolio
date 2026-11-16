import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from https://varshil25.github.io/portfolio/, so every
// asset URL needs the /portfolio/ prefix. Change this if you move to a custom domain.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
