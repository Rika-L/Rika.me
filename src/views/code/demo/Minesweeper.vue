<script setup lang="ts">
import MineBlock from "@/components/MineBlock.vue";
import {GamePlay} from "@/composables/logic.ts";
import {computed, watchEffect} from "vue";
import {isDev, toggleDev} from "@/composables";

const play = new GamePlay(10, 10, 10)

const state = computed(() => play.block)

const mineCount = computed(() => play.blocks.reduce((a, b) => a + (b.mine ? 1 : 0), 0))

watchEffect(() => {
  play.checkGameState()
})
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
            @dblclick="play.onDblClick(block)"
            @contextmenu.prevent="play.onRightClick(block)"
        />
      </div>
    </div>
  </div>
  <div class="flex justify-center gap-5">
    {{ mineCount }}
    <button @click="toggleDev()">{{ isDev }}</button>
    <button @click="play.reset">reset</button>
  </div>
</template>
