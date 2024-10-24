import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer' // Asegúrate de usar llaves aquí
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    visualizer({
      open: true, // Abre la visualización en el navegador
      filename: './dist/stats.html', // Ubicación del archivo visualizador
      template: 'sunburst', // Cambia a 'treemap' si prefieres
    }),
  ],
})
