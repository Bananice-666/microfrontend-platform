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
      name: 'mf_products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsPage': './src/exposes/Products.tsx',
      },
      shared: ['react', 'react-dom'],
      dts: false,
    }),
  ],
  server: {
    port: 3001,
    strictPort: true
  }
})
