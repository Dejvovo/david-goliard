import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // On GitHub Actions the base is the repo name; locally it's just /
  base: process.env.GITHUB_ACTIONS ? '/david-goliard/' : '/',
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
})
