<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/20
 */
import {computed, defineAsyncComponent} from 'vue'

function getArt(): string {
  if (Math.random() < 0.3) return 'ball'
  if (Math.random() < 0.5) return 'plum'
  return 'star'
}

const ArtComponent = computed(() => {
  const art = getArt()
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

