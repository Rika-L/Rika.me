<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/09/01
 */

// TODO: 切换主题 固定主题 切换主题色

import { art, artArr, changeArt, isKeep } from '@/composables'
</script>

<template>
  <div>当前Art：{{ art }}</div>
  <div>isKeep：{{ isKeep }}</div>
  <button v-for="i in artArr" :key="i" class="block" @click="changeArt(i)">
    {{ i }}
  </button>
  <button class="block" @click="changeArt(art, { keep: !isKeep })">
    keep
  </button>
</template>

<style scoped>

</style>
