<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {useDark} from '@vueuse/core'
import {nextTick} from "vue";

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

</script>

<template>
  <div class="fixed top-0 w-full h-16">
    <div class="flex w-full h-full">
      <div class="flex-[0_0_50%]"></div>
      <div class="flex-[0_0_50%] flex justify-center items-center gap-5">
        <a class="cursor-pointer">{{ $t('bar.blog') }}</a>
        <a class="cursor-pointer">{{ $t('bar.about') }}</a>
        <div class="flex justify-center items-center gap-1">
          <button @click="changeLang"
                  class="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-300 hover:dark:bg-gray-700">
            <svg width="24" :fill="!isDark?'#050505':'#fff'">
              <use xlink:href="#icon-language"></use>
            </svg>
          </button>
          <button @click="toggleDark"
                  class="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-300 hover:dark:bg-gray-700">
            <svg width="24" :fill="!isDark?'#050505':'#fff'">
              <use xlink:href="#icon-darkmode"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
