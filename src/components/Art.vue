<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/20
 */
import { computed, defineAsyncComponent } from 'vue'

const ArtComponent = computed(() => {
  const art = Math.random() > 0.3 ? Math.random() > 0.5?"star":"plum" : 'ball'
  if (typeof window !== 'undefined') {
    if (art === 'plum')
      return defineAsyncComponent(() => import('./ArtStar.vue'))
    else if (art === 'ball')
      return defineAsyncComponent(() => import('./ArtStar.vue'))
    else if (art === 'star')
      return defineAsyncComponent(() => import('./ArtStar.vue'))
  }
  return undefined
})
</script>

<template>
  <component :is="ArtComponent" />
</template>

<style scoped>

</style>
