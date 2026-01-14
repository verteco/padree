import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are linked relatively for index.php compatibility
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
