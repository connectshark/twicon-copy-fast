import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './i18n'
import './assets/css/reset.css'
import './assets/font/twicon.css'

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app')
