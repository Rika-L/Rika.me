<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/07
 */
import { useRouter } from 'vue-router'
import BlogBlock from '@/components/BlogBlock.vue'
import blog from '@/pages/blog'

const $router = useRouter()
</script>

<template>
  <div class="text-5xl font-bold">
    {{ $t('bar.blog') }}
  </div>
  <div class="mt-8">
    <BlogBlock v-for="(item, index) in blog" :key="item.id" v-motion-fade :delay="100 * index" :message="item" @click="$router.push(`/blog/${item.id}`)" />
  </div>
</template>

<style scoped>

</style>
