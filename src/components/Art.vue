<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/20
 */
import { computed, defineAsyncComponent } from 'vue'

import { art } from '@/composables'

const ArtComponent = computed(() => {
  if (typeof window !== 'undefined') {
    if (art.value === 'plum')
      return defineAsyncComponent(() => import('./ArtPlum.vue'))
    else if (art.value === 'aurora')
      return defineAsyncComponent(() => import('./ArtAurora.vue'))
    else if (art.value === 'ball')
      return defineAsyncComponent(() => import('./ArtBall.vue'))
    else if (art.value === 'star')
      return defineAsyncComponent(() => import('./ArtStar.vue'))
  }
  return undefined
})
</script>

<template>
  <component :is="ArtComponent" />
</template>
