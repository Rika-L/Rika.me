<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/22
 */
</script>

<template>
  <div class="fixed top-0 left-0 w-screen h-screen flex justify-center">
    <div class="mt-[20vh]">
      <div class="text-4xl font-thin text-center">
        Just Some Code Snippet
      </div>
      <div class="grid-cols-3 grid grid-flow-row gap-5 mt-16 code-gird">
        <a href="/code/1">1. patternedGlass</a>
        <a href="/code/2">2. round</a>
        <a href="/code/3">3. focus</a>
        <a href="/code/4">4. minesweeper</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-gird > a {
  color: #0004;
}

.dark .code-gird > a {
  color: #fff4;
}

.code-gird > a:hover {
  color: #0009;
}

.dark .code-gird > a:hover {
  color: #fff9;
}
</style>
