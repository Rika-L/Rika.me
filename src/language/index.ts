/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/07
 */

import en from "@/language/en.ts";
import zh from "@/language/zh.ts";
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    messages: {
        en,
        zh
    },
    locale: 'zh'
})

export default i18n
