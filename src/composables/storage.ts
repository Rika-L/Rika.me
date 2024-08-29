import {useToggle} from "@vueuse/core";
import {ref} from "vue";

const isDev = ref(false)

const toggleDev = useToggle(isDev)


export {isDev,toggleDev}
