import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Root-relative paths
  build: {
    outDir: 'dist', // Output directory
  },
  //base: process.env.VITE_BASE_PATH || '/Alsanosei',
})
