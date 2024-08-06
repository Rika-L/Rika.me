<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {useWindowSize} from "@vueuse/core";

interface Point {
  x: number
  y: number
}

interface Branch {
  start: Point
  length: number
  theta: number
}

// canvas实例
const el = ref<HTMLCanvasElement | null>(null)
// 屏幕大小
const size = reactive(useWindowSize())

function initCanvas(canvas: HTMLCanvasElement, width = 400, height = 400, _dpi?: number) {
  const ctx = canvas.getContext('2d')!

  const dpr = window.devicePixelRatio || 1
  // @ts-expect-error vendor
  const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1

  const dpi = _dpi || dpr / bsr

  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  canvas.width = dpi * width
  canvas.height = dpi * height
  ctx.scale(dpi, dpi)
  return { ctx }
}

onMounted(()=>{
  const canvas = el.value!
  const {ctx} = initCanvas(canvas, size.width, size.height)

  function lineTo(p1: Point, p2: Point) {
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.stroke()
  }

  function init() {
    ctx.strokeStyle = '#88888825'
    pendingTasks.length = 0
    ctx.clearRect(0,0,size.width,size.height)
    step({
      start: {x: size.width / (Math.random() * 10), y: size.height },
      length: 5,
      theta: -Math.PI / 2
    })
    step({
      start: {x: 0, y: size.height/(Math.random() * 10)},
      length: 5,
      theta: 0
    })
    step({
      start: {x: size.width, y: size.height/(Math.random() * 10)},
      length: 5,
      theta: Math.PI
    })
  }

  function getEndPoint({start, length, theta}: Branch) {
    return {
      x: start.x + length * Math.cos(theta),
      y: start.y + length * Math.sin(theta)
    }
  }

  function drawBranch(b: Branch) {
    lineTo(b.start, getEndPoint(b))
  }

  const pendingTasks: Function[] = []

  function step(b: Branch,depth = 0) {

    const end = getEndPoint(b)

    drawBranch(b)

    const rate = depth>6?(depth>100?0.3:0.45):0.7

    if (depth<4||Math.random() < rate) {
      pendingTasks.push(() =>
          step({
            start: end,
            length: b.length * Math.random() + 2,
            theta: b.theta - Math.PI / 12
          },depth + 1))
    }

    if (depth<4||Math.random() < rate) {
      pendingTasks.push(() =>
          step({
            start: end,
            length: b.length + Math.random() * 5 -2.5,
            theta: b.theta + Math.PI / 12
          },depth + 1))
    }
  }

  function frame() {
    const tasks = [...pendingTasks]
    pendingTasks.length = 0
    tasks.forEach(fn => fn())
  }

  let frameCount = 0
  function startFrame() {
    requestAnimationFrame(() => {
      frameCount += 1
      if(frameCount % 5 === 0){
        frame()
      }
      startFrame()
    })
  }
  startFrame()

  init()
})
</script>

<template>
<div class="fixed top-0 bottom-0 left-0 right-0 -z-[1] pointer-events-none print:hidden">
  <canvas width="400" height="400" ref="el"></canvas>
</div>
</template>

<style scoped>

</style>
