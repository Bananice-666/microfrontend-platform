import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      federation({
        name: 'shell',
        remotes: {
          mf_products: {
            type: 'module',
            name: 'mf_products',
            entry:
              env.VITE_PRODUCTS_REMOTE_URL ??
              'http://localhost:3001/remoteEntry.js',
          },
          mf_categories: {
            type: 'module',
            name: 'mf_categories',
            entry:
              env.VITE_CATEGORIES_REMOTE_URL ??
              'http://localhost:3002/remoteEntry.js',
          },
        },
        shared: ['react', 'react-dom'],
        dts: false,
      }),
    ],
    server: {
      port: 3000,
      strictPort: true,
    },
  }
})
