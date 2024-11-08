import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './router'
import { translationPlugin } from '@shared/lib/i18n'
import '@shared/styles/main.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(translationPlugin)

app.mount('#app')