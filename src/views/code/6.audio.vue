<script lang="ts" setup>
import { computed, reactive, ref, useTemplateRef } from 'vue'

const audioRef = useTemplateRef('audio')

const { floor } = Math

function seconds2Time(second: number) {
  const _minute = floor(second / 60)
  const _second = floor(second % 60)
  return `${_minute}:${_second < 10 ? `0${_second}` : _second}`
}

const musicInfo = reactive({
  totalSec: 0,
  currentSec: 0,
  bufferedSec: 0,
})

const totalTime = computed(() => seconds2Time(musicInfo.totalSec))
const currentTime = computed(() => seconds2Time(musicInfo.currentSec))

function hdlLoadMeta(e: Event) {
  musicInfo.totalSec = (e.target as HTMLAudioElement).duration
}

const isPlaying = ref(false)

function hdlPlayPause() {
  if (isPlaying.value) {
    audioRef.value!.pause()
    isPlaying.value = false
  }
  else {
    audioRef.value!.play()
    isPlaying.value = true
  }
}

function hdlTimeUpdate(e: Event) {
  musicInfo.currentSec = (e.target as HTMLAudioElement).currentTime
  musicInfo.bufferedSec = (e.target as HTMLAudioElement).buffered.end(0)
}

function hdlChangeTime(e: Event) {
  audioRef.value!.currentTime = Number.parseFloat((e.target as HTMLInputElement).value)
}

function hdlEnd() {
  isPlaying.value = false
  musicInfo.currentSec = 0
}
</script>

<template>
  <div class="flex justify-center mt-24">
    <div class="w-[512px] h-[128px] bg-[#0000001f] dark:bg-[#ffffff1f] rounded-lg flex items-center px-4">
      <img src="@/assets/img/joey.jpg" class="size-24 rounded-lg" alt="joey">
      <div class="w-full">
        <div class="text-center text-sm">
          <div class="font-bold">
            痛愛
          </div>
          <div>容祖兒</div>
          <div class="flex justify-center items-center gap-10">
            <div>{{ currentTime }}</div>
            <div class="text-xl" @click="hdlPlayPause">
              <div v-if="isPlaying" class="iconify mdi--pause" />
              <div v-else class="iconify mdi--play" />
            </div>
            <div>{{ totalTime }}</div>
          </div>

          <div class="w-full">
            <div class="w-1/2 relative my-2">
              <input
                type="range" :max="musicInfo.totalSec" min="0" :value="musicInfo.currentSec"
                class="appearance-none w-full h-0.5 rounded-sm absolute left-1/2" @input="hdlChangeTime"
              >
              <div
                class="absolute h-0.5 bg-gray-500 left-1/2 z-20 rounded-l-sm"
                :style="`width: ${musicInfo.currentSec / musicInfo.totalSec * 100}%;`"
              />
              <div
                class="absolute h-0.5 bg-gray-300 left-1/2 z-10 rounded-sm"
                :style="`width: ${Math.floor(musicInfo.bufferedSec / musicInfo.totalSec * 100)}%;`"
              />
            </div>
          </div>

          <audio
            ref="audio" src="music.flac" preload="auto" @loadedmetadata="hdlLoadMeta" @timeupdate="hdlTimeUpdate"
            @ended="hdlEnd"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply h-4 w-0.5 bg-gray-600 absolute rounded-sm;
  left:v-bind('`${musicInfo.currentSec / musicInfo.totalSec * 100}%`');
  top: -7px;
  z-index: 30;
}
</style>
