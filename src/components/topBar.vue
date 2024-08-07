<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {locale} = useI18n()

const changeLang = () => {
  locale.value = 'en'
}
</script>

<template>
<div class="fixed top-0 w-full h-16">
  <div class="flex w-full h-full">
    <div class="flex-[0_0_50%]"></div>
    <div class="flex-[0_0_50%] flex justify-center items-center gap-2.5">
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div @click="changeLang"> lang </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
