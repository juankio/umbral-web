<template>
  <div
    class="relative w-full overflow-hidden select-none py-2 sm:py-3"
    @mouseenter="isPaused = true" @mouseleave="isPaused = false"
    @focusin="isPaused = true" @focusout="isPaused = false"
    @touchstart.passive="isPaused = true" @touchend.passive="isPaused = false"
    @pointerdown="onPointerDown" @pointerup="onPointerUp"
  >
    <!-- Escenario Focal: Prev (Izq) - Activo Central (Focal) - Next (Der) -->
    <div class="relative w-full max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-8 lg:gap-12 xl:gap-16 px-2 sm:px-4 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]" style="perspective: 1200px;">
      <!-- Integrante Anterior (Izquierda) -->
      <button v-if="prevItem" type="button" @click="prev" aria-label="Ver integrante anterior" class="group/prev flex flex-col items-center shrink-0 w-[140px] xs:w-[170px] sm:w-[220px] md:w-[280px] lg:w-[330px] xl:w-[360px] opacity-35 hover:opacity-75 transition-all duration-300 transform scale-80 sm:scale-85 cursor-pointer focus:outline-none">
        <div class="relative w-full aspect-[4/5] flex items-center justify-center transition-transform duration-300 group-hover/prev:scale-105" :style="{ transform: `rotate(${getRotation(prevItem.rotation)})` }">
          <AppImage :src="prevItem.image" :alt="prevItem.name" img-class="w-full h-full object-contain pointer-events-none select-none" wrapper-class="w-full h-full flex items-center justify-center" loading="lazy" />
        </div>
        <span v-if="prevItem.name" class="mt-1.5 font-barlow text-xs sm:text-sm text-neutral-400 font-medium truncate max-w-[120px] sm:max-w-[180px] text-center">{{ prevItem.name }}</span>
      </button>

      <!-- Integrante Activo Central (Focal con Giro Expresivo) -->
      <div v-if="currentItem" class="relative z-10 flex flex-col items-center shrink-0 w-[240px] xs:w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] xl:w-[500px] 2xl:w-[540px]">
        <div ref="cardRef" class="relative w-full aspect-[4/5] max-h-[46vh] flex items-center justify-center will-change-transform drop-shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:drop-shadow-[0_24px_48px_rgba(0,0,0,0.14)] transition-shadow duration-300" :style="{ transform: `rotate(${getRotation(currentItem.rotation)})` }">
          <AppImage :src="currentItem.image" :alt="currentItem.name || 'Stand'" img-class="w-full h-full object-contain pointer-events-none select-none" wrapper-class="w-full h-full flex items-center justify-center" loading="eager" />
        </div>
        <div v-if="currentItem.name" ref="infoRef" class="mt-2 sm:mt-2.5 text-center px-2 sm:px-4 will-change-transform">
          <h3 class="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-[#070707] leading-tight tracking-tight">{{ currentItem.name }}</h3>
          <p v-if="currentItem.role" class="font-barlow font-normal text-xs sm:text-sm text-neutral-500 mt-0.5 tracking-tight">{{ currentItem.role }}</p>
        </div>
      </div>

      <!-- Integrante Siguiente (Derecha) -->
      <button v-if="nextItem" type="button" @click="next" aria-label="Ver integrante siguiente" class="group/next flex flex-col items-center shrink-0 w-[140px] xs:w-[170px] sm:w-[220px] md:w-[280px] lg:w-[330px] xl:w-[360px] opacity-35 hover:opacity-75 transition-all duration-300 transform scale-80 sm:scale-85 cursor-pointer focus:outline-none">
        <div class="relative w-full aspect-[4/5] flex items-center justify-center transition-transform duration-300 group-hover/next:scale-105" :style="{ transform: `rotate(${getRotation(nextItem.rotation)})` }">
          <AppImage :src="nextItem.image" :alt="nextItem.name || 'Stand'" img-class="w-full h-full object-contain pointer-events-none select-none" wrapper-class="w-full h-full flex items-center justify-center" loading="lazy" />
        </div>
        <span v-if="nextItem.name" class="mt-1.5 font-barlow text-xs sm:text-sm text-neutral-400 font-medium truncate max-w-[120px] sm:max-w-[180px] text-center">{{ nextItem.name }}</span>
      </button>
    </div>

    <!-- Controles unificados al pie (Estilo HomeInspiration): Flechas, Contador 01 / 07 y Barras de segmento -->
    <div v-if="items.length > 1" class="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6 mt-5 sm:mt-7">
      <div class="flex items-center gap-2.5">
        <button type="button" @click="prev" aria-label="Anterior" class="w-10 h-10 rounded-full border border-neutral-300 hover:border-black text-neutral-600 hover:text-black hover:bg-neutral-50 flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button type="button" @click="next" aria-label="Siguiente" class="w-10 h-10 rounded-full border border-neutral-300 hover:border-black text-neutral-600 hover:text-black hover:bg-neutral-50 flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <span class="font-mono text-xs sm:text-sm tracking-widest text-neutral-800 select-none">{{ formattedCounter }}</span>
      <div class="flex items-center gap-2" role="tablist" aria-label="Indicadores de diapositiva">
        <button
          v-for="(_, idx) in items.length"
          :key="idx"
          type="button"
          role="tab"
          :aria-selected="activeIndex === idx"
          :aria-label="`Ir a integrante ${idx + 1}`"
          class="h-1.5 rounded-full overflow-hidden transition-all duration-300 relative bg-neutral-200 cursor-pointer focus:outline-none"
          :class="activeIndex === idx ? 'w-10' : 'w-4 hover:bg-neutral-300'"
          @click="goTo(idx, idx > activeIndex ? 1 : -1)"
        >
          <span v-if="activeIndex === idx" class="absolute inset-0 bg-black origin-left transition-all duration-75" :style="{ width: `${progress}%` }" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

export interface CarouselItem {
  name: string; role: string; image: string; rotation?: number | string
}

const props = defineProps<{ items: CarouselItem[] }>()

const activeIndex = ref(0), isPaused = ref(false), progress = ref(0)
const cardRef = ref<HTMLElement | null>(null), infoRef = ref<HTMLElement | null>(null)
let timer: ReturnType<typeof setInterval> | null = null, cardAnim: any = null, infoAnim: any = null, startX = 0, startY = 0
const DURATION = 4500, TICK = 50

const getRotation = (rot?: number | string) => typeof rot === 'number' ? `${rot}deg` : (rot || '0deg')
const getNumericRotation = (rot?: number | string) => typeof rot === 'number' ? rot : (parseFloat(String(rot)) || 0)

const currentItem = computed(() => props.items[activeIndex.value] || null)
const prevIndex = computed(() => props.items.length > 1 ? (activeIndex.value - 1 + props.items.length) % props.items.length : -1)
const nextIndex = computed(() => props.items.length > 1 ? (activeIndex.value + 1) % props.items.length : -1)
const prevItem = computed(() => prevIndex.value >= 0 ? props.items[prevIndex.value] : null)
const nextItem = computed(() => nextIndex.value >= 0 ? props.items[nextIndex.value] : null)
const formattedCounter = computed(() => `${String(activeIndex.value + 1).padStart(2, '0')} / ${String(props.items.length).padStart(2, '0')}`)

const animateTransition = (dir: number) => {
  if (!import.meta.client || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  nextTick(() => {
    if (cardRef.value && currentItem.value) {
      const baseRot = getNumericRotation(currentItem.value.rotation)
      cardAnim?.revert?.()
      cardAnim = animate(cardRef.value, {
        rotate: [`${baseRot - (dir * 20)}deg`, `${baseRot}deg`],
        scale: [0.92, 1],
        opacity: [0.6, 1],
        duration: 650,
        ease: 'outExpo'
      })
    }
    if (infoRef.value) {
      infoAnim?.revert?.()
      infoAnim = animate(infoRef.value, { translateY: [14, 0], opacity: [0, 1], duration: 450, ease: 'outCubic' })
    }
  })
}

const goTo = (index: number, dir = 1) => {
  if (index === activeIndex.value || !props.items.length) return
  progress.value = 0
  activeIndex.value = index
  animateTransition(dir)
}

const next = () => { if (props.items.length) goTo((activeIndex.value + 1) % props.items.length, 1) }
const prev = () => { if (props.items.length) goTo((activeIndex.value - 1 + props.items.length) % props.items.length, -1) }

const onPointerDown = (e: PointerEvent) => { startX = e.clientX; startY = e.clientY }
const onPointerUp = (e: PointerEvent) => {
  const [dx, dy] = [e.clientX - startX, e.clientY - startY]
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev() }
}

onMounted(() => {
  if (import.meta.client && props.items.length > 1) {
    timer = setInterval(() => {
      if (isPaused.value) return
      progress.value += (TICK / DURATION) * 100
      if (progress.value >= 100) next()
    }, TICK)
  }
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
  cardAnim?.revert?.()
  infoAnim?.revert?.()
})
</script>
