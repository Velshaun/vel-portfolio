import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for the development and build process.
// This setup enables React support through the official plugin.
export default defineConfig({
  plugins: [react()],
})
