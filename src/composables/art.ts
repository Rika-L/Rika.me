import { useStorage } from '@vueuse/core'
import { computed, ref } from 'vue'

type ArtType = typeof artArr[number]

interface ConfigType {
  keep: boolean
}

const artArr = ['plum', 'ball', 'star', 'aurora'] as const

function getArt(artList: typeof artArr) {
  const randomIndex = Math.floor(Math.random() * artList.length)
  return artList[randomIndex]
}

const localArt = useStorage<null | ArtType>('art', null)

const isKeep = computed(() => !!localArt.value)

const art = ref(localArt.value || getArt(artArr))

// 随机获取
function changeArt(): void
// 根据指定名称获取
function changeArt(artName: ArtType, config?: ConfigType): void
function changeArt(artName?: ArtType, config: ConfigType = { keep: isKeep.value }) {
  if (!artName)
    art.value = getArt(artArr)
  if (artName)
    art.value = artName
  if (config?.keep)
    localArt.value = art.value
  else
    localArt.value = null
}

export { art, isKeep, artArr, changeArt }
