<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/26
 */
</script>

<template>
  <div class="flex justify-center mt-72">
    <div class="focus" />
  </div>
</template>

<style scoped>
.focus {
  @apply text-7xl font-thin;
  width: fit-content;
  background: radial-gradient(circle closest-side, #374151 94%, #37415100) right/calc(200% - 1em) 100%;
  /* animation: focusing 1s infinite alternate linear; */
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: running;
  animation-name: focusing;
}

.dark .focus{
  background: radial-gradient(circle closest-side, #fff 94%, #fff0) right/calc(200% - 1em) 100%;
}

.focus::before {
  content: "Hello World";
  line-height: 1em;
  color: #0000;
  background: inherit;
  background-image: radial-gradient(circle closest-side, #fff 94%, #374151FF);
  -webkit-background-clip: text;
  background-clip: text;
}

.dark .focus::before {
  background-image: radial-gradient(circle closest-side, #374151FF 94%, #fff);
}

@keyframes focusing {
  100% {
    background-position: left
  }
}
</style>
