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
  logo:{
    type:String
  }
})
</script>

<template>
  <a :href="url"
     class="inline-block mx-2 text-gray-500 dark:bg-[#fff2] bg-[#0000000f] hover:bg-[#0000001f] dark:hover:bg-[#fff3] py-1 px-2 rounded cursor-pointer"><span
      class="iconify-color text-xl align-middle"
      :class="logo"
  ></span><span>&nbsp;{{ title }}</span></a>
</template>

<style scoped>

</style>
