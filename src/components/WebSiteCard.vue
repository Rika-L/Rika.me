<script lang="ts" setup>
defineProps<{ name: string, url: string }>()
</script>

<template>
  <a :href="url" target="_blank" class="select-none font-bold text-center underline rounded-lg p-2 w-64 text-gray-500 dark:bg-[#fff2] bg-[#0000000f] hover:bg-[#0000001f] dark:hover:bg-[#fff3]">
    {{ name }}
  </a>
</template>
