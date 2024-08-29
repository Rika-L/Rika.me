<script setup lang="ts">
import MineBlock from "@/components/MineBlock.vue";
import {isDev, toggleDev} from "@/composables";
import {GamePlay} from "@/composables/logic.ts";
import {computed} from "vue";

const play = new GamePlay(12, 12)

const state = computed(() => play.board)
</script>

<template>
  <div class="flex justify-center mt-[15vh]">
    <div>
      <div v-for="(row, y) in state" :key="y" class="flex justify-center items-center">
        <mine-block
            v-for="(block, x) in row"
            :key="x"
            :block="block"
            @click="play.onClick(block)"
            @contextmenu.prevent="play.onRightClick(block)"
        />
      </div>
    </div>
  </div>
</template>
