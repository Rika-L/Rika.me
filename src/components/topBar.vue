<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {useDark} from '@vueuse/core'
import {nextTick, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
const $router = useRouter()
const isDark = useDark({
  selector: 'html',
  valueDark: 'dark',
})

const {locale} = useI18n()

const changeLang = () => {
  if (locale.value === 'en') {
    locale.value = 'zh'
  } else {
    locale.value = 'en'
  }
}

function toggleDark(event: MouseEvent) {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready
      .then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ]
        document.documentElement.animate(
            {
              clipPath: isDark.value
                  ? [...clipPath].reverse()
                  : clipPath,
            },
            {
              duration: 400,
              easing: 'ease-out',
              pseudoElement: isDark.value
                  ? '::view-transition-old(root)'
                  : '::view-transition-new(root)',
            },
        )
      })
}

const TopBarRef  = ref<HTMLDivElement>()

function handleScroll() {
  if (window.scrollY !== 0){
    TopBarRef.value!.className = "transition fixed top-0 w-full h-16 bg-[#ffffff88] backdrop-blur-sm dark:bg-[#00000088]"
  }else {
    TopBarRef.value!.className = "transition fixed top-0 w-full h-16"
  }
}

onMounted(()=>{
  window.addEventListener('scroll',handleScroll)
})

</script>

<script lang="ts">
export default {
  name:'bar'
}
</script>

<template>
  <div ref="TopBarRef" class="fixed top-0 w-full h-16">
    <div class="flex w-full h-full">
      <div class="flex-[0_0_50%]"></div>
      <div class="flex-[0_0_50%] flex justify-center items-center gap-5 topBar">
        <a @click="$router.push('/')" class="cursor-pointer">{{ $t('bar.home') }}</a>
        <a @click="$router.push('/blog')" class="cursor-pointer">{{ $t('bar.blog') }}</a>
        <a class="cursor-pointer">{{ $t('bar.code') }}</a>
        <a class="cursor-pointer">{{ $t('bar.about') }}</a>
        <a @click="changeLang" class="iconify mdi--language text-xl"></a>
        <a @click="toggleDark" class="iconify text-xl" :class="isDark?' mdi--white-balance-sunny':'mdi--moon-and-stars'"></a>
        <a class="iconify mdi--github text-xl"></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topBar > a {
  color: #0004;
}

.dark .topBar > a {
  color: #fff4;
}

.topBar > a:hover {
  color: #0009;
}

.dark .topBar > a:hover {
  color: #fff9;
}
</style>
