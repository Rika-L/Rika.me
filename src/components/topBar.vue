<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { isDark, toggleDark } from '@/composables'

const $router = useRouter()

const { locale } = useI18n()

function changeLang() {
  if (locale.value === 'en') {
    locale.value = 'zh'
  }
  else {
    locale.value = 'en'
  }
}

const TopBarRef = ref<HTMLDivElement>()

const cls = ref('')

function handleScroll() {
  if (window.scrollY !== 0) {
    if (!cls.value)
      cls.value = 'bg-[#ffffff88] backdrop-blur-sm dark:bg-[#00000088]'
  }
  else {
    if (cls.value)
      cls.value = ''
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
  <div
    ref="TopBarRef"
    class="fixed top-0 w-full h-16 z-10 leading-loose flex justify-between items-center"
    :class="cls"
  >
    <div class="flex justify-start items-center gap-20 h-full ml-10">
      <div
        class="flex justify-center items-center cursor-pointer text-[#0004] dark:text-[#fff4] hover:text-[#0009] dark:hover:text-[#fff9]"
        @click="$router.push('/')"
      >
        <img v-if="isDark" src="@/assets/svg/icon.svg" class="w-[24px] h-[24px]" alt="">
        <img v-else src="@/assets/svg/icon copy.svg" class="w-[24px] h-[24px]" alt="">
        <span class="ml-2">Rika.me</span>
      </div>
    </div>
    <div class="hidden md:flex justify-center items-center gap-5 topBar h-full mr-10">
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
    <div class="flex justify-center items-center h-full mr-10 md:hidden topBar">
      <div class="iconify mdi--menu text-xl cursor-pointer text-[#0004] dark:text-[#fff4] hover:text-[#0009] dark:hover:text-[#fff9]" />
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
