<script setup lang="ts">
import type {BlockState} from "@/views/code/demo/type.ts";
import {isDev} from "@/composables";

defineProps<{block:BlockState}>()
const numberColors = [
  'text-transparent',
  'text-blue-400',
  'text-green-400',
  'text-yellow-400',
  'text-orange-400',
  'text-red-400',
  'text-purple-400',
  'text-pink-400',
  'text-teal-400',
]

function getBlockClass(block: BlockState) {
  if (block.flagged)
    return 'bg-gray-400/10'
  if (!block.revealed)
    return 'bg-gray-400/10 hover:bg-gray-200/10 '
  return block.mine ? 'bg-red-400/50 text-white' : numberColors[block.adjacentMines]
}

</script>

<template>
  <button
      :class="getBlockClass(block)"
      class="m-0.5 w-10 h-10 border border-solid border-gray-400/50 flex justify-center items-center"
  >
    <template v-if="block.flagged">
      <div class="iconify mdi--flag text-red-400" />
    </template>
    <template v-if="block.revealed || isDev">
      <div v-if="block.mine" class="iconify mdi--mine" />
      <div v-else>
        {{ block.adjacentMines }}
      </div>
    </template>
  </button>

</template>

