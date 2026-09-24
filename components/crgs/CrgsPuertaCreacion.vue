<template>
  <section
    id="puerta-creacion"
    class="relative w-full min-h-[95vh] lg:min-h-screen bg-[#1C1C1C] flex flex-col items-center justify-center overflow-hidden py-20 sm:py-28 px-4 select-text"
  >
    <div class="relative flex items-center justify-center w-full max-w-5xl my-auto">
      <!-- Monolito Central: Triángulo Verde Oficial CRGS #4BA550 -->
      <div
        ref="triangleBoxRef"
        role="button"
        :aria-expanded="isSplit"
        aria-label="La Puerta de la Creación de Tadao Ando. Haz clic para abrir el vano."
        tabindex="0"
        class="relative w-[300px] sm:w-[380px] md:w-[440px] lg:w-[490px] xl:w-[520px] aspect-[650/890] max-h-[64vh] select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BA550] rounded-xs"
        :class="isSplit ? 'cursor-default pointer-events-none' : 'cursor-pointer'"
        @click="!isSplit && toggleSplit()"
        @keydown.enter.space.prevent="!isSplit && toggleSplit()"
      >
        <!-- Ala Izquierda (se fractura y desliza cinemáticamente a la izquierda) -->
        <div ref="leftWingRef" class="absolute inset-0 pointer-events-none will-change-transform" style="clip-path: inset(0 50% 0 0);">
          <img
            src="/images/crgs-puerta-creacion.svg"
            alt="La Puerta de la Creación - Ala izquierda"
            class="w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            draggable="false"
          />
        </div>

        <!-- Ala Derecha (se fractura y desliza cinemáticamente a la derecha) -->
        <div ref="rightWingRef" class="absolute inset-0 pointer-events-none will-change-transform" style="clip-path: inset(0 0 0 50%);">
          <img
            src="/images/crgs-puerta-creacion.svg"
            alt="La Puerta de la Creación - Ala derecha"
            class="w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            draggable="false"
          />
        </div>
      </div>

      <!-- Vano Central con Video Documental -->
      <div
        ref="videoBoxRef"
        class="absolute inset-0 z-30 flex items-center justify-center opacity-0 scale-90"
        :class="isSplit ? 'pointer-events-auto' : 'pointer-events-none'"
      >
        <div class="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl aspect-video bg-black border border-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden rounded-xs">
          <button
            type="button"
            @click="toggleSplit"
            class="absolute top-3 right-3 z-40 bg-black/85 hover:bg-white text-white hover:text-black border border-white/30 px-3.5 py-1 text-xs font-barlow uppercase tracking-wider rounded-full flex items-center gap-1.5 transition-all cursor-pointer shadow-lg focus:outline-none"
            aria-label="Cerrar vano y unir triángulo"
          >
            <span>✕</span>
            <span>Cerrar vano</span>
          </button>

          <iframe
            v-if="showIframe"
            class="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/Ro-pZcZIuPQ?autoplay=1&rel=0"
            title="Centro Roberto Garza Sada: La Puerta de la Creación (Tadao Ando)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>

      <!-- Título Monumental Cursivo (se eleva elegantemente sobre el reproductor) -->
      <div ref="titleRef" class="absolute inset-x-0 z-20 flex items-center justify-center pointer-events-none px-4 will-change-transform">
        <h2 class="font-barlow font-medium italic text-4xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[115px] text-white leading-none tracking-tight text-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] select-none">
          La Puerta de la Creación
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

const isSplit = ref(false)
const showIframe = ref(false)

const triangleBoxRef = ref<HTMLElement | null>(null)
const leftWingRef = ref<HTMLElement | null>(null)
const rightWingRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const videoBoxRef = ref<HTMLElement | null>(null)

let idleAnim: any = null
const activeAnims: any[] = []

const toggleSplit = () => {
  if (!import.meta.client) return
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isSplit.value) {
    isSplit.value = true
    showIframe.value = true
    idleAnim?.pause()

    const isMobile = window.innerWidth < 640
    const isTablet = window.innerWidth < 1024
    const offset = isMobile ? 120 : (isTablet ? 200 : 290)
    const titleY = isMobile ? -210 : (isTablet ? -260 : -305)

    if (leftWingRef.value) activeAnims.push(animate(leftWingRef.value, { translateX: -offset, rotate: -2, opacity: 0.65, duration: isReduced ? 0 : 950, ease: 'outExpo' }))
    if (rightWingRef.value) activeAnims.push(animate(rightWingRef.value, { translateX: offset, rotate: 2, opacity: 0.65, duration: isReduced ? 0 : 950, ease: 'outExpo' }))
    if (titleRef.value) activeAnims.push(animate(titleRef.value, { translateY: titleY, scale: isMobile ? 0.72 : 0.8, duration: isReduced ? 0 : 900, ease: 'outExpo' }))
    if (videoBoxRef.value) activeAnims.push(animate(videoBoxRef.value, { opacity: [0, 1], scale: [0.88, 1], duration: isReduced ? 0 : 850, delay: isReduced ? 0 : 120, ease: 'outExpo' }))
  } else {
    isSplit.value = false
    if (videoBoxRef.value) {
      activeAnims.push(animate(videoBoxRef.value, { opacity: 0, scale: 0.9, duration: isReduced ? 0 : 350, ease: 'outQuad', onComplete: () => { showIframe.value = false } }))
    }
    if (leftWingRef.value) activeAnims.push(animate(leftWingRef.value, { translateX: 0, rotate: 0, opacity: 1, duration: isReduced ? 0 : 800, ease: 'outExpo' }))
    if (rightWingRef.value) activeAnims.push(animate(rightWingRef.value, { translateX: 0, rotate: 0, opacity: 1, duration: isReduced ? 0 : 800, ease: 'outExpo' }))
    if (titleRef.value) {
      activeAnims.push(animate(titleRef.value, {
        translateY: 0, scale: 1, duration: isReduced ? 0 : 800, ease: 'outExpo',
        onComplete: () => {
          if (!isSplit.value && !isReduced) {
            idleAnim?.restart?.() || idleAnim?.play?.()
          }
        }
      }))
    }
  }
}

onMounted(() => {
  if (!import.meta.client || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (triangleBoxRef.value) {
    idleAnim = animate(triangleBoxRef.value, { scale: [1, 1.018], translateY: [0, -5], duration: 3000, direction: 'alternate', loop: true, ease: 'inOutSine' })
  }
})

onUnmounted(() => {
  idleAnim?.revert?.() || idleAnim?.pause?.()
  activeAnims.forEach(anim => anim?.revert?.() || anim?.pause?.())
})
</script>
