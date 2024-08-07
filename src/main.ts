import {createApp} from 'vue'
import './style/style.css'
import App from './App.vue'
import router from "@/router";
import {MotionPlugin} from '@vueuse/motion'
import i18n from "@/language";


const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.use(i18n)
app.mount('#app')
