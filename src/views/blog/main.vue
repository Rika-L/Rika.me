<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/07
 */
import BlogBlock from "@/components/BlogBlock.vue";
import {useRouter} from "vue-router";
import blog from "@/pages/blog";
const $router = useRouter()
</script>

<template>
  <div class="text-5xl font-bold">{{$t('bar.blog')}}</div>
  <div class="mt-8">
    <BlogBlock @click="$router.push(`/blog/${item.id}`)" v-for="(item,index) in blog" v-motion-fade :delay="100*index" :message="item" :key="item.id"></BlogBlock>
  </div>
</template>

<style scoped>

</style>
