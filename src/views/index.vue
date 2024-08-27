<script setup lang="ts">
import {ElCol, ElRow} from 'element-plus'
import LogoCard from '@/components/LogoCard.vue'
</script>

<template>
  <div  class="w-100vw mt-16 leading-loose">
    <ElRow class="leading-loose mt-18">
      <ElCol :xs="1" :sm="1" :md="6" :lg="6" :xl="6"/>
      <ElCol :xs="22" :sm="22" :md="12" :lg="12" :xl="12">
        <div class="w-full">
          <div class="text-2xl font-thin" v-motion-fade :delay="100" :duration="1000">
            {{ $t('index.Subheading') }}
          </div>
          <div class="text-3xl"  v-motion-fade :delay="200" :duration="1000">
            Rika
          </div>
          <div class="mt-4" v-motion-fade :delay="300" :duration="1000">
            {{ $t('index.motive') }}🔗
          </div>
          <div class="mt-4" v-motion-fade :delay="400" :duration="1000">
            <span>{{ $t('index.goodAt') }}</span>
            <LogoCard title="Vue.js" url="https://cn.vuejs.org/" logo="logos--vue"/>
            <LogoCard title="Tailwind CSS" url="https://tailwindcss.com/" logo="logos--tailwindcss-icon"/>
            <LogoCard title="TypeScript" url="https://www.typescriptlang.org/" logo="logos--typescript-icon"/>
          </div>
          <div class="mt-4" v-motion-fade :delay="500" :duration="1000">
            <span>{{ $t('index.little') }}</span>
            <LogoCard title="Nuxt.js" url="https://nuxt.com/" logo="logos--nuxt-icon"/>
            <LogoCard title="React" url="https://react.dev/" logo="logos--react"/>
            <LogoCard title="Node.js" url="https://nodejs.org/" logo="logos--nodejs-icon-alt"/>
          </div>
          <div class="mt-4" v-motion-fade :delay="600" :duration="1000">
            {{ $t('index.frontend') }}
          </div>
          <div class="mt-4" v-motion-fade :delay="700" :duration="1000">
            <LogoCard title="@rika_/utils" url="https://rika-utils.netlify.app/"/>
            <span>{{ $t('index.myProject') }}</span>
          </div>
          <div class="mt-4" v-motion-fade :delay="800" :duration="1000">
            <span>{{ $t('index.cli') }}</span>
            <LogoCard title="rika-cli" url="https://rika-utils.netlify.app/"/>
            <span>{{ $t('index.temp') }}</span>
            <span class="mx-2">
              <a href="https://github.com/orgs/rika-template/repositories" class="underline">GITHUB</a>
              &nbsp;
              <a href="https://gitee.com/organizations/rika-template/projects" class="underline">GITEE</a>
            </span>


          </div>
          <div class="mt-4" v-motion-fade :delay="900" :duration="1000">
            <span>{{ $t('index.life') }}</span>
          </div>
        </div>
      </ElCol>
      <ElCol :xs="1" :sm="1" :md="6" :lg="6" :xl="6"/>
    </ElRow>
  </div>
</template>
