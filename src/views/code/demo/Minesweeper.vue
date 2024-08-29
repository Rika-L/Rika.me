<script setup lang="ts">
import type {BlockState} from '@/views/code/demo/type.ts'
import MineBlock from "@/components/MineBlock.vue";
import {watchEffect} from "vue";

const WIDTH = 5
const HEIGHT = 5
const state = $ref(
    Array.from({length: HEIGHT}, (_, y) =>
        Array.from({length: WIDTH}, (_, x): BlockState => ({x, y, adjacentMines: 0, revealed: false}))),
)

function generateMines(initial: BlockState) {
  for (const row of state) {
    for (const block of row) {
      if (Math.abs(initial.x - block.x) <= 1)
        continue
      block.mine = Math.random() < 0.1
    }
  }
}

let mineGenerated = false

function onClick(block: BlockState) {
  if (!mineGenerated) {
    generateMines(block)
    updateNumbers()
    mineGenerated = true
  }
  block.revealed = true
  if (block.mine)
    alert('BOOM!')
  expendZero(block)
}

function onRightClick(block: BlockState) {
  if (block.revealed)
    return
  block.flagged = true
}

const directions = [
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
]



function getSiblings(block: BlockState) {
  return directions.map(([dx, dy]) => {
    const x2 = block.x + dx
    const y2 = block.y + dy
    if (x2 < 0 || x2 >= WIDTH || y2 < 0 || y2 >= HEIGHT)
      return undefined
    return state[y2][x2]
  }).filter(Boolean) as BlockState[]
}

function updateNumbers() {
  state.forEach((row, oy) => {
    row.forEach((block, ox) => {
      if (block.mine)
        return
      getSiblings(block).forEach((b) => {
        if (b.mine)
          block.adjacentMines++
      })
    })
  })
}


function expendZero(block: BlockState) {
  if (block.adjacentMines)
    return
  getSiblings(block).forEach((s) => {
    if (!s.revealed) {
      s.revealed = true
      expendZero(s)
    }
  })
}

watchEffect(checkGameState)

function checkGameState() {
  if (!mineGenerated)
    return
  const blocks = state.flat()

  if (blocks.every(block => block.revealed || block.flagged)) {
    if (blocks.some(block => block.flagged && !block.mine))
      alert('cheat')
    else
      alert('win')
  }
}
</script>

<template>
  <div class="flex justify-center mt-[20vh]">
    <div>
      <div v-for="(row, y) in state" :key="y" class="flex justify-center items-center">
        <mine-block
            v-for="(block, x) in row"
            :key="x"
            :block="block"
            @click="onClick(block)"
            @contextmenu.prevent="onRightClick(block)"
        />
      </div>
    </div>
  </div>
</template>
