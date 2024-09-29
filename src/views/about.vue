<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/09/01
 */
import { art, artArr, changeArt, isKeep } from '@/composables'
</script>

<template>
  <div class="flex justify-center">
    <div class="w-[1280px]">
      <div class="my-16">
        <div class="font-thin flex items-end text-6xl">
          <span class="">Theme&nbsp;</span>
        </div>
        <div class="text-5xl flex gap-10 mt-5 ml-10 font-thin select-none">
          <span
            v-for="i in artArr" :key="i"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
            :class="i === art ? ' text-gray-700 dark:text-gray-300 italic underline' : ''" @click="changeArt(i)"
          >
            {{ i }}
          </span>
          <span
            class="select-none text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer"
            :class="isKeep ? ' text-gray-700 dark:text-gray-300 font-normal' : ''"
            @click="changeArt(art, { keep: !isKeep })"
          >save</span>
        </div>
      </div>
      <div class="font-thin text-6xl">
        About
      </div>
    </div>
  </div>
</template>

<style scoped></style>
