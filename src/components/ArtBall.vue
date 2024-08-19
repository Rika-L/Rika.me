<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {useDark, useWindowSize} from "@vueuse/core";

const el = ref<HTMLCanvasElement | null>(null)
const size = reactive(useWindowSize())

const isDark = useDark({
  selector: 'html',
  valueDark: 'dark',
})


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

  return {ctx}
}

interface BallProps {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  lineColor: string;
}

// 随机数生成函数
function random(min: number, max: number): number {
  let num = Math.floor(Math.random() * (max - min) + min);
  if (num === 0) num = 1;
  return num;
}

// 小球的工厂函数
function createBall(width: number, height: number): BallProps {
  return {
    x: random(0, width),
    y: random(0, height),
    vx: random(-2, 2) * (1 / 2.0),
    vy: random(-2, 2) * (1 / 2.0),
    size: 3,
    color: "rgb(136,136,136,0.20)",
    lineColor: `rgba(136, 136, 136, 0.20)`
  };
}

// 绘制小球
function drawBall(ball: BallProps, ctx: CanvasRenderingContext2D): void {
  ctx.beginPath();
  ctx.fillStyle = ball.color;
  ctx.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
  ctx.fill();
}


// 绘制线条
function drawLine(ball1: BallProps, ball2: BallProps, ctx: CanvasRenderingContext2D): void {
  const lx = ball2.x - ball1.x;
  const ly = ball2.y - ball1.y;
  const distance = Math.sqrt(lx * lx + ly * ly);

  if (distance <= 180) {
    ctx.beginPath();
    ctx.strokeStyle = `${ball1.lineColor}, ${(180 - distance) / 180})`;
    ctx.moveTo(ball1.x, ball1.y);
    ctx.lineTo(ball2.x, ball2.y);
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

const windowSize = reactive(useWindowSize())

// 更新小球位置
function updateBall(ball: BallProps): BallProps {
  let {x, y, vx, vy, size} = ball;

  if (x + size >= windowSize.width || x - size <= 0) {
    vx = -vx;

  }
  if (y + size >= windowSize.height || y - size <= 0) {
    vy = -vy;
  }

  return {...ball, x: x + vx, y: y + vy, vx, vy};
}

onMounted(async () => {
  const canvas = el.value!
  const {ctx} = initCanvas(canvas, size.width, size.height)
  const {width, height} = canvas


// 创建小球列表
  const balls = Array.from({length: 100}, () => createBall(width, height));

// 主循环函数
  function loop(): void {
    ctx.fillStyle = isDark.value ? "rgb(5,5,5)" : "rgb(255,255,255)"
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        drawLine(balls[i], balls[j], ctx);
      }

      drawBall(balls[i], ctx);
      balls[i] = updateBall(balls[i]);
    }

    requestAnimationFrame(loop);
  }

  loop();
})
</script>

<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 -z-[1] pointer-events-none print:hidden">
    <canvas width="400" height="400" ref="el"></canvas>
  </div>
</template>

<style scoped>

</style>
