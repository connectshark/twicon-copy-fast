import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/i18n/**')
    })
  ],
  server: {
    port: 8080
  },
  base: process.env.NODE_ENV === 'production'
    ? '/twicon-copy-fast/'
    : '/',
  
})
