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
      <div class="md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid grid-flow-row gap-5 mt-16 code-gird">
        <RouterLink to="/code/1">
          1. patternedGlass
        </RouterLink>
        <RouterLink to="/code/2">
          2. round
        </RouterLink>
        <RouterLink to="/code/3">
          3. focus
        </RouterLink>
        <RouterLink to="/code/4">
          4. minesweeper
        </RouterLink>
        <RouterLink to="/code/5">
          5. filter
        </RouterLink>
        <RouterLink to="/code/6">
          6. audio
        </RouterLink>
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
