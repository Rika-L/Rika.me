import { createApp } from 'vue'
import './style/style.css'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from '@/router'
import i18n from '@/language'
import 'virtual:svg-icons-register'
import '@/middleware/nprogress.ts'
// 自定义一个代码高亮指令

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(i18n)
app.mount('#app')
