
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Replace 'your-repo-name' with your actual repository name
  base: '/my_portfolio_website/',
  build: {
    outDir: 'dist'
  }
})