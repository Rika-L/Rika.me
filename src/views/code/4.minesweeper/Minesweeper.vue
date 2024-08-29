<script setup lang="ts">
import MineBlock from "@/components/MineBlock.vue";
import {GamePlay} from "@/composables/logic.ts";
import {computed, watchEffect} from "vue";
import {isDev, toggleDev} from "@/composables";
import Confetti from "@/components/Confetti.vue";

const play = new GamePlay(10, 10, 10)

const state = computed(() => play.block)

const mineCount = computed(() => play.blocks.reduce((a, b) => a + (b.mine ? 1 : 0), 0))

watchEffect(() => {
  play.checkGameState()
})

function newGame(difficulty: 'easy' | 'medium' | 'hard') {
  switch (difficulty) {
    case "easy":
      play.reset(9, 9, 10)
      break
    case "medium":
      play.reset(16, 16, 40)
      break
    case "hard":
      play.reset(30, 16, 99)
      break

  }
}
</script>

<template>
  <div class="font-thin text-sm flex justify-center">
    Try using Dark mode for best viewing
  </div>
  <div class="myA justify-center flex gap-5 font-bold ">
    <button @click="play.reset()">Reset</button>
    <button @click="newGame('easy')">Easy</button>
    <button @click="newGame('medium')">Medium</button>
    <button @click="newGame('hard')">Hard</button>
  </div>
  <div class="flex justify-center font-thin text-xl">
    <span>MineCount: {{ mineCount }}</span>
  </div>
  <div class="flex justify-center">
    <button @click="toggleDev()" class="underline text-[#0004] dark:text-[#fff4] hover:text-[#0009] dark:hover:text-[#fff9]">{{ isDev?"Dev":"Normal" }}</button>
  </div>
  <div class="flex justify-center mt-[5vh]">
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
  <Confetti :passed="play.state.value.gameState === 'won'"/>
</template>

<style scoped>
.myA button{
  @apply text-[#0004] dark:text-[#fff4] hover:text-[#0009] dark:hover:text-[#fff9]
}
</style>
