<script setup lang="ts">


import Miku from '@/assets/Miku2.jpg'
</script>

<template>
<div class="w-full flex justify-center gap-11 mt-8">
  <img :src="Miku" alt="" width="360">
  <div id="img"></div>
</div>


  <svg class="absolute top-0" version="1.1" width="576" height="360" xmlns="http://www.w3.org/2000/svg"
       color-interpolation-filters="sRGB">

    <filter id="fluted" primitiveUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">

      <feImage x="0" y="0" result="image_0" crossorigin="anonymous" :href="Miku" preserveAspectRatio="none"
               width="1" height="1"/>

      <feDisplacementMap
          scale=".08"
          xChannelSelector="R"
          yChannelSelector="G"
          in="image_0"
          in2="SourceGraphic"
          result="displacement_0"/>

    </filter>

  </svg>


</template>

<style scoped>


#img {
  width: 360px;
  height: 564px;
  display: flex;
  filter: url(#fluted);
  animation: shimmer 10s linear infinite;
  background-image: url("@/assets/svg/filter.svg");
  background-size: 40px auto;
  background-repeat: repeat-x;
}

@keyframes shimmer {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

</style>
