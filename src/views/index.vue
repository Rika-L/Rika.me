<script setup lang="ts">
import LogoCard from '@/components/LogoCard.vue'
</script>

<template>
  <div class="mt-16 leading-loose flex justify-center">
    <div class="w-full px-4 md:w-1/2 md:px-0">
      <div v-motion-fade class="text-2xl font-thin" :delay="100" :duration="1000">
        {{ $t('index.Subheading') }}
      </div>
      <div v-motion-fade class="text-3xl" :delay="200" :duration="1000">
        Rika
      </div>
      <div v-motion-fade class="mt-4" :delay="300" :duration="1000">
        {{ $t('index.motive') }}🔗
      </div>
      <div v-motion-fade class="mt-4" :delay="400" :duration="1000">
        <span>{{ $t('index.goodAt') }}</span>
        <LogoCard title="Vue.js" url="https://cn.vuejs.org/" logo="logos--vue" />
        <LogoCard title="Tailwind CSS" url="https://tailwindcss.com/" logo="logos--tailwindcss-icon" />
        <LogoCard title="TypeScript" url="https://www.typescriptlang.org/" logo="logos--typescript-icon" />
      </div>
      <div v-motion-fade class="mt-4" :delay="500" :duration="1000">
        <span>{{ $t('index.little') }}</span>
        <LogoCard title="Nuxt.js" url="https://nuxt.com/" logo="logos--nuxt-icon" />
        <LogoCard title="React" url="https://react.dev/" logo="logos--react" />
        <LogoCard title="Node.js" url="https://nodejs.org/" logo="logos--nodejs-icon-alt" />
      </div>
      <div v-motion-fade class="mt-4" :delay="600" :duration="1000">
        {{ $t('index.frontend') }}
      </div>
      <div v-motion-fade class="mt-4" :delay="700" :duration="1000">
        <LogoCard title="@rika_/utils" url="https://rika-utils.netlify.app/" />
        <span>{{ $t('index.myProject') }}</span>
      </div>
      <div v-motion-fade class="mt-4" :delay="800" :duration="1000">
        <span>{{ $t('index.cli') }}</span>
        <LogoCard title="rika-cli" url="https://www.npmjs.com/package/rika-cli" />
        <span>{{ $t('index.temp') }}</span>
        <span class="mx-2">
          <a href="https://github.com/orgs/rika-template/repositories" class="underline">GITHUB</a>
              &nbsp;
          <a href="https://gitee.com/organizations/rika-template/projects" class="underline">GITEE</a>
        </span>
      </div>
      <div v-motion-fade class="mt-4" :delay="900" :duration="1000">
        <span>{{ $t('index.life') }}</span>
      </div>
    </div>
  </div>
</template>
