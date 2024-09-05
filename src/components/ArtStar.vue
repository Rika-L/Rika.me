<script setup lang="ts">

import {onMounted, onUnmounted} from "vue";
import BackgroundStar from "@/components/BackgroundStar.vue";
import random from "@/utils/random.ts";

let pX = $ref<null | number>(null)
let pY = $ref<null | number>(null)

const positions = Array.from({length: 100}, () => [random(0,100), random(0,100)]);

function handleMove({pageX, pageY}: { pageX: number, pageY: number }) {
  pX = pageX
  pY = pageY
}

onMounted(() => {
  console.log(positions);
  document.body.addEventListener('mousemove', handleMove)
})

onUnmounted(() => {
  document.body.removeEventListener('mousemove', handleMove)
})
</script>

<template>
  <section class="absolute w-screen h-screen">
    <background-star v-for="(item,index) in positions" :key="index" :pageX="pX" :pageY="pY" :size="index/20 + 4"
                     :top="`${item[0]}%`" :left="`${item[1]}%`"/>
  </section>
</template>
