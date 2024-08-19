<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  logo: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <a :href="url"
     target="_blank"
     class="inline-block my-0.5 mx-2 text-gray-500 dark:bg-[#fff2] bg-[#0000000f] hover:bg-[#0000001f] dark:hover:bg-[#fff3] py-1 px-2 rounded cursor-pointer"><span
      class="iconify-color text-xl align-middle"
      :class="logo" v-if="logo"
  ></span><span>&nbsp;{{ title }}</span></a>
</template>

<style scoped>

</style>
