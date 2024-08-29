<script setup lang="ts">
interface BlockState {
  x: number
  y: number
  revealed: boolean
  mine?: boolean
  flagged?: boolean
  adjacentMines: number
}

const WIDTH = 10
const HEIGHT = 10
let state = $ref(
    Array.from({length: HEIGHT}, (_, y) =>
        Array.from({length: WIDTH}, (_, x) => <BlockState>{x, y, adjacentMines: 0, revealed: false})))

function generateMines(initial: BlockState) {
  for (const row of state) {
    for (const block of row) {
      if (Math.abs(initial.x - block.x) <= 1) continue
      block.mine = Math.random() < 0.1
    }
  }
}

let mineGenerated = false
let dev = true

function onClick(block: BlockState) {
  if (!mineGenerated) {
    generateMines(block)
    updateNumbers()
    mineGenerated = true
  }
  block.revealed = true
  if (block.mine) alert('BOOM!')
  expendZero(block)
}


const directions = [
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1]
]

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

function getSiblings(block: BlockState) {
  return directions.map(([dx, dy]) => {
    const x2 = block.x + dx
    const y2 = block.y + dy
    if (x2 < 0 || x2 >= WIDTH || y2 < 0 || y2 >= HEIGHT) return undefined
    return state[y2][x2]
  }).filter(Boolean) as BlockState[]
}

function updateNumbers() {
  state.forEach((row, oy) => {
    row.forEach((block, ox) => {
      if (block.mine) return
      getSiblings(block).forEach(b => {
        if (b.mine)
          block.adjacentMines++
      })
    })
  })
}


function getBlockClass(block: BlockState) {
  if (!block.revealed) return 'bg-gray-400/10'
  return block.mine ? 'bg-red-400/50 text-white' : numberColors[block.adjacentMines]
}

function expendZero(block: BlockState) {
  if (block.adjacentMines) return
  getSiblings(block).forEach(s => {
    if (!s.revealed) {
      s.revealed = true
      expendZero(s)
    }
  })
}
</script>

<template>
  <div class="flex justify-center mt-[20vh]">
    <div>
      <div v-for="(row, y) in state" :key="y" class="flex justify-center items-center">
        <button
            :class="getBlockClass(block)"
            class="m-0.5 w-10 h-10 border border-solid border-gray-400/50 hover:bg-gray-200/10 flex justify-center items-center"
            @click="onClick(block)"
            v-for="(block,x) in row"
            :key="x">
          <template v-if="block.revealed||dev">
            <div v-if="block.mine" class="iconify mdi--mine"/>
            <div v-else>
              {{ block.adjacentMines }}
            </div>
          </template>
        </button>
      </div>

    </div>
  </div>
</template>

