import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { createI18n } from 'vue-i18n'
import './assets/css/reset.css'
import './assets/font/twicon.css'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'tw',
  messages
})

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app')
