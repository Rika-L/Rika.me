<script setup lang="ts">
import ArtPlum from "@/components/ArtPlum.vue";
import LogoCard from "@/components/LogoCard.vue";

</script>

<template>
  <div class="flex w-100vw mt-16 leading-loose" v-motion-fade >
    <div class="flex-[0_0_25%]"></div>
    <div class="flex-[0_0_50%]">
      <div class="text-2xl font-thin">{{$t('index.Subheading')}}</div>
      <div class="text-3xl">Rika</div>
      <div class="mt-2">{{$t('index.motive')}}🔗</div>
      <div class="mt-4">
        <span>{{$t('index.goodAt')}}</span>
        <logo-card title="Vue.js" url="https://cn.vuejs.org/" logo="logos--vue"/>
        <logo-card title="Tailwind CSS" url="https://tailwindcss.com/" logo="logos--tailwindcss-icon"/>
        <logo-card title="TypeScript" url="https://www.typescriptlang.org/" logo="logos--typescript-icon"/>
      </div>
      <div class="mt-2">
        <span>{{$t('index.little')}}</span>
        <logo-card title="Nuxt.js" url="https://nuxt.com/" logo="logos--nuxt-icon"/>
        <logo-card title="React" url="https://react.dev/" logo="logos--react"/>
        <logo-card title="Node.js" url="https://nodejs.org/" logo="logos--nodejs-icon-alt"/>
      </div>
    </div>
    <div class="flex-[0_0_25%]"></div>
  </div>
</template>

<style scoped>

</style>
