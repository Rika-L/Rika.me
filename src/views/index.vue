<script setup lang="ts">
import LogoCard from "@/components/LogoCard.vue";
import {ElCol, ElRow} from "element-plus";
</script>

<template>
  <div class="flex w-100vw mt-16 leading-loose" v-motion-fade>
    <ElRow class="leading-loose mt-18">
      <ElCol :xs="1" :sm="1" :md="6" :lg="6" :xl="6"></ElCol>
      <ElCol :xs="22" :sm="22" :md="12" :lg="12" :xl="12">
        <div class="text-2xl font-thin">{{ $t('index.Subheading') }}</div>
        <div class="text-3xl">Rika</div>
        <div class="mt-2">{{ $t('index.motive') }}🔗</div>
        <div class="mt-4">
          <span>{{ $t('index.goodAt') }}</span>
          <logo-card title="Vue.js" url="https://cn.vuejs.org/" logo="logos--vue"/>
          <logo-card title="Tailwind CSS" url="https://tailwindcss.com/" logo="logos--tailwindcss-icon"/>
          <logo-card title="TypeScript" url="https://www.typescriptlang.org/" logo="logos--typescript-icon"/>
        </div>
        <div class="mt-2">
          <span>{{ $t('index.little') }}</span>
          <logo-card title="Nuxt.js" url="https://nuxt.com/" logo="logos--nuxt-icon"/>
          <logo-card title="React" url="https://react.dev/" logo="logos--react"/>
          <logo-card title="Node.js" url="https://nodejs.org/" logo="logos--nodejs-icon-alt"/>
        </div>
      </ElCol>
      <ElCol :xs="1" :sm="1" :md="6" :lg="6" :xl="6"></ElCol>
    </ElRow>
  </div>
</template>

<style scoped>

</style>
