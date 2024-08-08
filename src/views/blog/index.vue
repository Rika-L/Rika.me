<script setup lang="ts">
/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/07
 */
import { ElRow,ElCol } from 'element-plus'
</script>

<template>
  <ElRow class="leading-loose mt-18">
    <ElCol :xs="1" :sm="1" :md="6" :lg="6" :xl="6"></ElCol>
    <ElCol :xs="22" :sm="22" :md="12" :lg="12" :xl="12">
        <router-view v-highlight/>
    </ElCol>
    <ElCol :xs="1" :sm="1" :md="6" :lg="6" :xl="6"></ElCol>
  </ElRow>
</template>

<style scoped>

</style>
