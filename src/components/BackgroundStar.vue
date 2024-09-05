<script setup lang="ts">

import {useTemplateRef, watchEffect} from "vue";

interface props {
  top: number | string;
  left: number | string;
  pageX: number | null;
  pageY: number | null;
  size: number;
}

const {pageX, pageY, size} = defineProps<props>()

let transformX = $ref<number>(0)
let transformY = $ref<number>(0)

const starRef = useTemplateRef<HTMLDivElement>('ref')

watchEffect(() => {
  if (starRef.value) {
    const {x, y} = starRef.value!.getBoundingClientRect();
    if (pageX && pageY) {
      const distanceX = pageX - x;
      const distanceY = pageY - y;
      if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
        transformX = distanceX;
        transformY = distanceY;
      } else {
        transformX = 0;
        transformY = 0;
      }
    }
  }
})
</script>

<template>
  <div
    ref="ref"
    class="backgroundStarContainer"
    :style="`top: ${top};left: ${left}`"
  >
    <svg
      class="backgroundStar"
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      role="img"
      aria-label="star"
      :style="`width: ${size}; height: ${size}; transform: translate(${transformX}px, ${transformY}px)`"
    >
      <title/>
      <circle cx="4" cy="4.5" r="4" fill="url(#paint0_radial_2202_5618)"/>
      <defs>
        <radialGradient
          id="paint0_radial_2202_5618"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4 4.49998) scale(3.77871 4.29149)"
        >
          <stop offset="0%" stop-color="#4FC08D"/>
          <stop offset="30%" stop-color="#7ED5A6"/>
          <stop offset="50%" stop-color="#A9DFBF"/>
          <stop offset="70%" stop-color="#7ED5A6"/>
          <stop offset="100%" stop-color="#4FC08D"/>
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.backgroundStarContainer {
  @apply absolute top-0 left-0 -z-[1] pointer-events-none select-none
}

.backgroundStar {
  @apply pointer-events-none select-none blur-[2px] transition-all duration-200;
}

</style>
