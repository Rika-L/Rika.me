<script lang="ts" setup>

</script>

<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 -z-[1]">
    <div class="bg" />
  </div>
</template>

<style scoped>
.bg {
  --transparent: transparent;
  --gradient: repeating-linear-gradient(100deg, var(--c-bg) 0%, var(--c-bg) 7%, var(--transparent) 10%, var(--transparent) 12%, var(--c-bg) 16%);
  --aurora: repeating-linear-gradient(100deg, #3b82f6 10%, #86efac 15%, #93c5fd 20%, #a5f3fc 25%, #60a5fa 30%);
  background-image: var(--gradient), var(--aurora);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;
  filter: blur(10px) invert(1);
  position: absolute;
  inset: -10px;
  opacity: 0.5;
  will-change: transform;
  mask-image: radial-gradient(ellipse at 100% 0%, black 10%, var(--transparent) 70%);
}

.dark .bg {
  filter: invert(0);
}

.bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--gradient), var(--aurora);
  background-size: 200%, 100%;
  background-attachment: fixed;
  mix-blend-mode: difference;
  pointer-events: none;
  animation: aurora 60s linear infinite;
}

@keyframes aurora {
  from {
    background-position: 50% 50%, 50% 50%;
  }

  to {
    background-position: 350% 50%, 350% 50%;
  }
}
</style>
