import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

import vuetify from 'vite-plugin-vuetify'; // Asegúrate de importar este plugin





// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },



  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Configura el plugin de Vuetify para Vite
  ],
})
