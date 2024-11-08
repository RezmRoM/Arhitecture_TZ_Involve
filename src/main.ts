import { createApp } from 'vue'
import { store } from '@app/store'
import { router } from '@app/router'
import { i18n } from '@/shared/lib/i18n'
import App from '@app/ui/App.vue'
import './shared/styles/main.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n)

app.mount('#app') 