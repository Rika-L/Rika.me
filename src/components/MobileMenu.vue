<script lang="ts" setup>
import { watch } from 'vue'
import { isDark, toggleDark } from '@/composables'

defineProps<Props>()

const model = defineModel<boolean>()

interface Props {
  menuList: { name: string, path: string }[]
  toggleLang: () => void
}

watch(model, () => {
  if (model.value)
    document.documentElement.classList.add('overflow-hidden')
  else
    document.documentElement.classList.remove('overflow-hidden')
})
</script>

<template>
  <Teleport to="body">
    <div
      v-show="model" v-motion-fade-visible
      class="fixed top-0 left-0 w-full h-full bg-transparent z-50 backdrop-blur overflow-hidden"
    >
      <div class="h-16 flex items-center justify-end">
        <div
          class="iconify mdi--cancel-bold cursor-pointer mr-10 text-2xl text-[#0004] dark:text-[#fff4] hover:text-[#0009] dark:hover:text-[#fff9]"
          @click="model = false"
        />
      </div>
      <div class="topBar flex flex-col items-center justify-center gap-5 text-xl">
        <RouterLink v-for="item in menuList" :key="item.path" :to="item.path" @click="model = false">
          {{ $t(item.name) }}
        </RouterLink>
        <div class="h-[1px] bg-gray-400/50 w-1/2" />
        <div class="flex items-center gap-5">
          <a
            class="iconify text-2xl" :class="isDark ? ' mdi--white-balance-sunny' : 'mdi--moon-and-stars'"
            @click="toggleDark"
          />
          <a class="iconify mdi--language text-2xl" @click="toggleLang" />
        </div>
        <div class="h-[1px] bg-gray-400/50 w-1/2" />
        <div class="flex items-center gap-5">
          <a class="iconify mdi--github text-2xl" href="https://github.com/Rika-L" target="_blank" />
          <a class="iconify simple-icons--juejin text-2xl" href="https://juejin.cn/user/1660684788040836" target="_blank" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
