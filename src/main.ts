import { createApp } from 'vue'
import './style/style.css'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from '@/router'
import i18n from '@/language'
import '@/middleware/nprogress.ts'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(i18n)
app.mount('#app')
