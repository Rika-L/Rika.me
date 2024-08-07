<script setup lang="ts">/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/07
 */
import {PropType} from "vue";
import {blogType} from "@/pages/blog";

defineProps({
  message:{
    type:Object as PropType<blogType>
  }
})
</script>

<template>
<div class=" w-full my-3 p-3 dark:bg-[#fff2] bg-[#0000000f] hover:bg-[#0000001f] dark:hover:bg-[#fff3] rounded-2xl">
  <div class="font-bold text-xl">{{message.title}}</div>
  <div>{{message.summary}}</div>
  <div class="text-sm font-thin">{{message.time}}</div>
</div>
</template>

<style scoped>

</style>
