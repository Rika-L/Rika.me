<script lang="ts" setup>
import WebSiteCard from '@/components/WebSiteCard.vue'
import WebSiteList from '@/collectionWebSite.json'
/**
 * @Author Rika
 * @Description WebSite Collection Page
 */
</script>

<template>
  <div class="flex justify-center mt-[5vh]">
    <div>
      <div class="text-5xl font-thin text-center">
        Some WebSite Collection
      </div>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <WebSiteCard v-for="({ name, url }, i) in WebSiteList" :key="i" :name="name" :url="url" />
      </div>
    </div>
  </div>
</template>
