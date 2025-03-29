import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
import { imagetools } from 'vite-imagetools'
import { visualizer } from 'rollup-plugin-visualizer'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    compression({
      algorithm: 'gzip',
      threshold: 10240,
      deleteOriginalAssets: false,
      filename: '[path][base].gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      threshold: 10240,
      deleteOriginalAssets: false,
      filename: '[path][base].br',
    }),
    imagetools(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
    }),
  ],
  base: '/lesyayear/',
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'vendor': ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
  },
  server: {
    port: 3000,
    open: true,
  },
}) 