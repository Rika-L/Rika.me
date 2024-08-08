import {createApp} from 'vue'
import './style/style.css'
import App from './App.vue'
import router from "@/router";
import {MotionPlugin} from '@vueuse/motion'
import i18n from "@/language";
import 'virtual:svg-icons-register'
import hljs from 'highlight.js' //导入代码高亮文件
import '@/style/hljsTheme.css' //导入代码高亮样式

//自定义一个代码高亮指令


const app = createApp(App)
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block)
    })
    const codes = el.querySelectorAll('code');
    codes.forEach((code:any)=>{
        if (!(code.parentNode && code.parentNode.tagName === 'PRE')) {
            code.classList.add('not-in-pre');
        }
    })
})

app.use(router)
app.use(MotionPlugin)
app.use(i18n)
app.mount('#app')
