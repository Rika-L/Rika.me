<script setup lang="ts">
import { ElCol, ElRow } from 'element-plus'
import LogoCard from '@/components/LogoCard.vue'
</script>

<template>
  <div v-motion-fade class="w-100vw mt-16 leading-loose">
    <ElRow class="leading-loose mt-18">
      <ElCol :xs="1" :sm="1" :md="6" :lg="6" :xl="6" />
      <ElCol :xs="22" :sm="22" :md="12" :lg="12" :xl="12">
        <div class="w-full">
          <div class="text-2xl font-thin">
            {{ $t('index.Subheading') }}
          </div>
          <div class="text-3xl">
            Rika
          </div>
          <div class="mt-4">
            {{ $t('index.motive') }}🔗
          </div>
          <div class="mt-4">
            <span>{{ $t('index.goodAt') }}</span>
            <LogoCard title="Vue.js" url="https://cn.vuejs.org/" logo="logos--vue" />
            <LogoCard title="Tailwind CSS" url="https://tailwindcss.com/" logo="logos--tailwindcss-icon" />
            <LogoCard title="TypeScript" url="https://www.typescriptlang.org/" logo="logos--typescript-icon" />
          </div>
          <div class="mt-4">
            <span>{{ $t('index.little') }}</span>
            <LogoCard title="Nuxt.js" url="https://nuxt.com/" logo="logos--nuxt-icon" />
            <LogoCard title="React" url="https://react.dev/" logo="logos--react" />
            <LogoCard title="Node.js" url="https://nodejs.org/" logo="logos--nodejs-icon-alt" />
          </div>
          <div class="mt-4">
            {{ $t('index.frontend') }}
          </div>
          <div class="mt-4">
            <LogoCard title="@rika_/utils" url="https://rika-utils.netlify.app/" />
            <span>{{ $t('index.myProject') }}</span>
          </div>
          <div class="mt-4">
            <span>{{ $t('index.life') }}</span>
          </div>
        </div>
      </ElCol>
      <ElCol :xs="1" :sm="1" :md="6" :lg="6" :xl="6" />
    </ElRow>
  </div>
</template>

<style scoped>

</style>
