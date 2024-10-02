<script lang="ts" setup>
import WebSiteCard from '@/components/WebSiteCard.vue'

interface Props {
  name: string
  list: { name: string, url: string }[]
}

defineProps<Props>()
</script>

<template>
  <div class="my-10 text-7xl bg-clip-text text-transparent bg-gradient-to-t from-transparent to-gray-300/50 ml-10 md:-ml-10 -mb-10 font-thin select-none">
    {{ name }}
  </div>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <WebSiteCard v-for="(item, index) in list" :key="index" :name="item.name" :url="item.url" />
    </div>
  </div>
</template>
