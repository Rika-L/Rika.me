<script lang="ts" setup>
import vueList from '@/collection/vue.json'
import reactList from '@/collection/react.json'
import javaScriptList from '@/collection/javaScript.json'
import otherList from '@/collection/other.json'
import WebSiteItem from '@/components/WebSiteItem.vue'
/**
 * @Author Rika
 * @Description WebSite Collection Page
 */
</script>

<template>
  <div class="flex w-full justify-center mt-[5vh]">
    <div>
      <div class="text-5xl font-thin text-center mb-10">
        Some WebSite Collection
      </div>
      <div class="flex flex-col justify-center">
        <WebSiteItem v-motion-fade :delay="160 * 1" :duration="1000" during name="VueJS" :list="vueList" />
        <WebSiteItem v-motion-fade :delay="160 * 2" :duration="1000" during name="ReactJS" :list="reactList" />
        <WebSiteItem v-motion-fade :delay="160 * 3" :duration="1000" during name="JavaScript" :list="javaScriptList" />
        <WebSiteItem v-motion-fade :delay="160 * 4" :duration="1000" during name="Other" :list="otherList" />
      </div>
    </div>
  </div>
</template>
