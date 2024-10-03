<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import MobileMenu from './MobileMenu.vue'
import { isDark, toggleDark } from '@/composables'

const $router = useRouter()

const TopBarRef = ref<HTMLDivElement>()

const cls = ref('')

function handleScroll() {
  if (window.scrollY !== 0) {
    if (!cls.value)
      cls.value = 'bg-[#fff8] backdrop-blur-sm dark:bg-[#0008]'
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

const showMobileMenu = ref(false)

function hdlMenuClick() {
  showMobileMenu.value = true
}

const { locale } = useI18n()

function toggleLang() {
  if (locale.value === 'en') {
    locale.value = 'zh'
  }
  else {
    locale.value = 'en'
  }
}

const menuList = [
  { path: '/', name: 'bar.home' },
  { path: '/collections', name: 'bar.collection' },
  { path: '/code', name: 'bar.code' },
  { path: '/about', name: 'bar.about' },
]
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
      <RouterLink
        v-for="item in menuList"
        :key="item.path"
        class="cursor-pointer"
        :to="item.path"
      >
        {{ $t(item.name) }}
      </RouterLink>
      <a class="iconify mdi--language text-xl" @click="toggleLang" />
      <a
        class="iconify text-xl" :class="isDark ? ' mdi--white-balance-sunny' : 'mdi--moon-and-stars'"
        @click="toggleDark"
      />
      <a class="iconify mdi--github text-xl" href="https://github.com/Rika-L" target="_blank" />
      <a class="iconify simple-icons--juejin text-xl" href="https://juejin.cn/user/1660684788040836" target="_blank" />
    </div>
    <div class="flex justify-center items-center h-full mr-10 md:hidden topBar">
      <div
        class="iconify mdi--menu text-xl cursor-pointer text-[#0004] dark:text-[#fff4] hover:text-[#0009] dark:hover:text-[#fff9]"
        @click="hdlMenuClick"
      />
      <MobileMenu v-model="showMobileMenu" :menu-list="menuList" :toggle-lang="toggleLang"/>
    </div>
  </div>
</template>
