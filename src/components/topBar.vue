<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDark } from '@vueuse/core'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElCol, ElRow } from 'element-plus'

const $router = useRouter()
const isDark = useDark({
  selector: 'html',
  valueDark: 'dark',
})

const { locale } = useI18n()

function changeLang() {
  if (locale.value === 'en') {
    locale.value = 'zh'
  }
  else {
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

const TopBarRef = ref<HTMLDivElement>()

function handleScroll() {
  if (window.scrollY !== 0) {
    TopBarRef.value!.className = 'z-10 transition fixed top-0 w-full h-16 bg-[#ffffff88] backdrop-blur-sm dark:bg-[#00000088]'
  }
  else {
    TopBarRef.value!.className = 'transition fixed top-0 w-full h-16 z-10'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div ref="TopBarRef" class="fixed top-0 w-full h-16 z-10">
    <ElRow class="leading-loose mt-18 w-full h-full">
      <ElCol :xs="0" :sm="0" :md="12" :lg="12" :xl="12">
        <div class="flex justify-start items-center gap-20 h-full">
          <div
            class="flex justify-center items-center cursor-pointer ml-20 text-[#0004] dark:text-[#fff4] hover:text-[#0009] dark:hover:text-[#fff9]"
            @click="$router.push('/')"
          >
            <img src="@/assets/svg/icon.svg" class="w-[24px] h-[24px]" alt="">
            <span class="ml-2">Rika.me</span>
          </div>
        </div>
      </ElCol>
      <ElCol :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="flex justify-center items-center gap-5 topBar h-full">
          <a class="cursor-pointer" @click="$router.push('/')">{{ $t('bar.home') }}</a>
          <a class="cursor-pointer" @click="$router.push('/collections')">{{ $t('bar.collection') }}</a>
          <a class="cursor-pointer" @click="$router.push('/code')">{{ $t('bar.code') }}</a>
          <a class="cursor-pointer" @click="$router.push('/about')">{{ $t('bar.about') }}</a>
          <a class="iconify mdi--language text-xl" @click="changeLang" />
          <a
            class="iconify text-xl" :class="isDark ? ' mdi--white-balance-sunny' : 'mdi--moon-and-stars'"
            @click="toggleDark"
          />
          <a class="iconify mdi--github text-xl" href="https://github.com/Rika-L" target="_blank" />
          <a class="iconify simple-icons--juejin text-xl" href="https://juejin.cn/user/1660684788040836" target="_blank" />
        </div>
      </ElCol>
    </ElRow>
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
