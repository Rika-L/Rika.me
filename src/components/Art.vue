<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/20
 */
import { computed, defineAsyncComponent } from 'vue'

const artArr = ['plum', 'ball', 'star']

function getArt(arr: string[]): string {
  return Math.random() > 0.3
    ? arr[0]
    : Math.random() > 0.5 ? arr[1] : arr[2]
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
  <component :is="ArtComponent" />
</template>
