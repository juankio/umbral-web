<template>
  <div
    class="relative w-full overflow-hidden select-none py-2 sm:py-3"
    @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay"
    @touchstart.passive="pauseAutoplay" @touchend.passive="resumeAutoplay"
    @pointerdown="onPointerDown" @pointerup="onPointerUp"
  >
    <!-- Escenario Focal con Perspectiva 3D: Prev (Izq) - Activo Central (Focal) - Next (Der) -->
    <div
      class="relative w-full max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-8 lg:gap-12 xl:gap-16 px-2 sm:px-4 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]"
      style="perspective: 1200px;"
    >
      <!-- Integrante Anterior (Izquierda) -->
      <button
        v-if="prevItem" type="button" @click="prev" aria-label="Ver integrante anterior"
        class="group/prev flex flex-col items-center shrink-0 w-[140px] xs:w-[170px] sm:w-[220px] md:w-[280px] lg:w-[330px] xl:w-[360px] opacity-35 hover:opacity-75 transition-all duration-300 transform scale-80 sm:scale-85 cursor-pointer focus:outline-none"
      >
        <div class="relative w-full aspect-[4/5] flex items-center justify-center transition-transform duration-300 group-hover/prev:scale-105" :style="{ transform: `rotate(${getRotation(prevItem.rotation)})` }">
          <AppImage :src="prevItem.image" :alt="prevItem.name" img-class="w-full h-full object-contain pointer-events-none select-none" wrapper-class="w-full h-full flex items-center justify-center" loading="lazy" />
        </div>
        <span class="mt-1.5 font-barlow text-xs sm:text-sm text-neutral-400 font-medium truncate max-w-[120px] sm:max-w-[180px] text-center">{{ prevItem.name }}</span>
      </button>

      <!-- Integrante Activo Central (Focal con Giro Cinematográfico) -->
      <div v-if="currentItem" class="relative z-10 flex flex-col items-center shrink-0 w-[240px] xs:w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] xl:w-[500px] 2xl:w-[540px]">
        <div
          ref="cardRef"
          class="relative w-full aspect-[4/5] max-h-[46vh] flex items-center justify-center will-change-transform drop-shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:drop-shadow-[0_24px_48px_rgba(0,0,0,0.14)] transition-shadow duration-300"
          :style="{ transform: `rotate(${getRotation(currentItem.rotation)})` }"
        >
          <AppImage :src="currentItem.image" :alt="currentItem.name" img-class="w-full h-full object-contain pointer-events-none select-none" wrapper-class="w-full h-full flex items-center justify-center" loading="eager" />
        </div>
        <div ref="infoRef" class="mt-2 sm:mt-2.5 text-center px-2 sm:px-4 will-change-transform">
          <h3 class="font-barlow font-medium text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-[#070707] leading-tight tracking-tight">{{ currentItem.name }}</h3>
          <p class="font-barlow font-normal text-xs sm:text-sm text-neutral-500 mt-0.5 tracking-tight">{{ currentItem.role }}</p>
        </div>
      </div>

      <!-- Integrante Siguiente (Derecha) -->
      <button
        v-if="nextItem" type="button" @click="next" aria-label="Ver integrante siguiente"
        class="group/next flex flex-col items-center shrink-0 w-[140px] xs:w-[170px] sm:w-[220px] md:w-[280px] lg:w-[330px] xl:w-[360px] opacity-35 hover:opacity-75 transition-all duration-300 transform scale-80 sm:scale-85 cursor-pointer focus:outline-none"
      >
        <div class="relative w-full aspect-[4/5] flex items-center justify-center transition-transform duration-300 group-hover/next:scale-105" :style="{ transform: `rotate(${getRotation(nextItem.rotation)})` }">
          <AppImage :src="nextItem.image" :alt="nextItem.name" img-class="w-full h-full object-contain pointer-events-none select-none" wrapper-class="w-full h-full flex items-center justify-center" loading="lazy" />
        </div>
        <span class="mt-1.5 font-barlow text-xs sm:text-sm text-neutral-400 font-medium truncate max-w-[120px] sm:max-w-[180px] text-center">{{ nextItem.name }}</span>
      </button>
    </div>

    <!-- Controles minimalistas: ( ← ) [ 01 / 07 ] ( → ) -->
    <div class="flex items-center justify-center gap-4 sm:gap-6 mt-2.5 sm:mt-3">
      <button type="button" @click="prev" aria-label="Anterior" class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none">
        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <span class="font-mono text-xs sm:text-sm text-neutral-600 tracking-widest uppercase">{{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(items.length).padStart(2, '0') }}</span>
      <button type="button" @click="next" aria-label="Siguiente" class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none">
        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>

    <!-- Indicadores de puntos para salto directo -->
    <div v-if="items.length > 1" class="flex items-center justify-center gap-2 mt-1 sm:mt-1.5">
      <button
        v-for="(_, idx) in items" :key="`dot-${idx}`" type="button" @click="goTo(idx, idx > activeIndex ? 1 : -1)" :aria-label="`Ir a integrante ${idx + 1}`"
        class="h-1.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none" :class="idx === activeIndex ? 'w-5 bg-black' : 'w-1.5 bg-neutral-300 hover:bg-neutral-500'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

export interface CarouselItem {
  name: string
  role: string
  image: string
  rotation?: number | string
}

const props = defineProps<{ items: CarouselItem[] }>()

const activeIndex = ref(0), isPaused = ref(false)
const cardRef = ref<HTMLElement | null>(null), infoRef = ref<HTMLElement | null>(null)
let autoplayTimer: ReturnType<typeof setInterval> | null = null, cardAnim: any = null, infoAnim: any = null, startX = 0, startY = 0

const getRotation = (rot?: number | string) => typeof rot === 'number' ? `${rot}deg` : (rot || '0deg')
const getNumericRotation = (rot?: number | string) => typeof rot === 'number' ? rot : (parseFloat(String(rot)) || 0)

const currentItem = computed(() => props.items[activeIndex.value] || null)
const prevIndex = computed(() => props.items.length > 1 ? (activeIndex.value - 1 + props.items.length) % props.items.length : -1)
const nextIndex = computed(() => props.items.length > 1 ? (activeIndex.value + 1) % props.items.length : -1)
const prevItem = computed(() => prevIndex.value >= 0 ? props.items[prevIndex.value] : null)
const nextItem = computed(() => nextIndex.value >= 0 ? props.items[nextIndex.value] : null)

const animateTransition = (dir: number) => {
  if (!import.meta.client || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  nextTick(() => {
    if (cardRef.value && currentItem.value) {
      const baseRot = getNumericRotation(currentItem.value.rotation)
      cardAnim?.revert?.()
      cardAnim = animate(cardRef.value, {
        rotateY: [dir >= 0 ? 80 : -80, 0],
        rotateZ: [dir >= 0 ? baseRot - 35 : baseRot + 35, baseRot],
        scale: [0.72, 1],
        opacity: [0.35, 1],
        duration: 720,
        ease: 'outBack(1.4)'
      })
    }
    if (infoRef.value) {
      infoAnim?.revert?.()
      infoAnim = animate(infoRef.value, { translateY: [16, 0], opacity: [0, 1], duration: 480, ease: 'outCubic' })
    }
  })
}

const goTo = (index: number, dir = 1) => {
  if (index === activeIndex.value || !props.items.length) return
  activeIndex.value = index
  animateTransition(dir)
  startAutoplay()
}

const next = () => props.items.length && goTo((activeIndex.value + 1) % props.items.length, 1)
const prev = () => props.items.length && goTo((activeIndex.value - 1 + props.items.length) % props.items.length, -1)
const pauseAutoplay = () => { isPaused.value = true }, resumeAutoplay = () => { isPaused.value = false }

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(() => { if (!isPaused.value && props.items.length > 1) next() }, 3100)
}
const stopAutoplay = () => { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null } }

const onPointerDown = (e: PointerEvent) => { startX = e.clientX; startY = e.clientY }
const onPointerUp = (e: PointerEvent) => {
  const [dx, dy] = [e.clientX - startX, e.clientY - startY]
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev() }
}

onMounted(() => startAutoplay())
onUnmounted(() => { stopAutoplay(); cardAnim?.revert?.(); infoAnim?.revert?.() })
</script>

<style scoped>
/* Scoped carousel container styles */
</style>
