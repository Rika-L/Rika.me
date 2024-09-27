<script lang="ts" setup>

</script>

<template>
  <div class="flex justify-center items-center mt-36 gap-10">
    <div class="size-64  relative">
      <div class="text-center text-wrap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eligendi!
        <img class="mx-auto" src="@/assets/avatar.jpg" alt="" width="175px">
      </div>
    </div>
    <div class="iconify mdi--keyboard-arrow-right size-32" />
    <div>
      <div class="size-64 relative my-12">
        <div class="size-64 absolute top-0 left-0 backdrop-blur-[4px] saturate-50" />
        <div class="text-center text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eligendi!
          <img class="mx-auto" src="@/assets/avatar.jpg" alt="" width="175px">
        </div>
      </div>
      <div class="size-64 relative my-12">
        <div class="size-64 absolute top-0 left-0 bg" />
        <div class="text-center text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eligendi!
          <img class="mx-auto" src="@/assets/avatar.jpg" alt="" width="175px">
        </div>
      </div>
    </div>

    <div class="iconify mdi--keyboard-arrow-right size-32" />
    <div class="size-64 relative">
      <div class="size-64 absolute top-0 left-0 backdrop-blur-[4px] saturate-50 bg" />
      <div class="text-center text-wrap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eligendi!
        <img class="mx-auto" src="@/assets/avatar.jpg" alt="" width="175px">
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg{
  background-size: 4px 4px;
  background-image: radial-gradient(transparent 1px, var(--c-bg) 1px);
}
</style>
