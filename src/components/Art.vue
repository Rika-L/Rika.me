<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/20
 */
import {computed, defineAsyncComponent} from 'vue'
import random from "@/utils/random.ts";

const artArr = ['plum', 'ball', 'star']

function getArt(arr: string[]): string {
  return arr[random(0, arr.length)]
}

const ArtComponent = computed(() => {
  const art = getArt(artArr)
  if (typeof window !== 'undefined') {
    if (art === 'plum')
      return defineAsyncComponent(() => import('./ArtPlum.vue'))
    else if (art === 'ball')
      return defineAsyncComponent(() => import('./ArtBall.vue'))
    else if (art === 'star')
      return defineAsyncComponent(() => import('./ArtStar.vue'))
  }
  return undefined
})
</script>

<template>
  <component :is="ArtComponent"/>
</template>

