import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'mf_categories',
      filename: 'remoteEntry.js',
      exposes: {
        './CategoriesPage': './src/exposes/Categories.tsx',
      },
      shared: ['react', 'react-dom'],
      dts: false,
    }),
  ],
  server: {
    port: 3002,
    strictPort: true 
  }
})
