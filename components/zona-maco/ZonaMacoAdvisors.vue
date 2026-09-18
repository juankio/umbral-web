<template>
  <section
    id="asesores"
    class="py-14 sm:py-20 lg:py-28 bg-white select-none border-b border-neutral-200 overflow-hidden"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @touchstart.passive="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- Encabezado de sección -->
    <div class="w-full px-4 sm:px-6 text-center">
      <h2 class="font-barlow font-normal text-4xl sm:text-6xl lg:text-7xl text-[#070707] text-center leading-none tracking-tight">
        Asesores de Proyectos
      </h2>
      <!-- Línea divisoria continua -->
      <div class="h-[2px] sm:h-[3px] bg-[#030303] max-w-[1480px] mx-auto mt-4 mb-10 sm:mb-14" />
    </div>

    <!-- Carrusel Escénico de Asesores (Inspirado en el Carrusel de Home) -->
    <div class="relative w-full max-w-[1480px] mx-auto px-6 sm:px-12 lg:px-16">
      <!-- Escena Central del Asesor Activo -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center min-h-[440px] max-w-5xl mx-auto">
        <!-- Columna Izquierda: Información y Biografía -->
        <div ref="textRef" class="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 order-2 lg:order-1">
          <div class="space-y-1.5">
            <span class="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-[#834384] font-semibold block">
              {{ currentAdvisor.badge }}
            </span>
            <h3 class="font-barlow font-normal text-3xl sm:text-4xl lg:text-5xl text-[#1C1C1C] leading-none tracking-normal">
              {{ currentAdvisor.name }}
            </h3>
            <span class="font-barlow text-sm sm:text-base text-neutral-500 uppercase tracking-wider block">
              {{ currentAdvisor.role }}
            </span>
          </div>

          <p class="font-barlow font-normal text-base sm:text-lg lg:text-[20px] text-[#1C1C1C]/90 leading-relaxed text-left">
            {{ currentAdvisor.bio }}
          </p>
        </div>

        <!-- Columna Derecha: Retrato con Máscara Triangular Activo -->
        <div class="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div
            ref="triangleRef"
            class="relative w-[280px] sm:w-[340px] lg:w-[380px] aspect-[891/982] flex items-center justify-center will-change-transform"
          >
            <img
              :src="currentAdvisor.image"
              :alt="currentAdvisor.name"
              class="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.12)]"
              draggable="false"
            />
          </div>
        </div>
      </div>

      <!-- Controles al Pie: Flechas ( ← ) ( → ), Contador 01 / 03 y Barras de Selección -->
      <div class="mt-10 sm:mt-14 max-w-md mx-auto flex items-center justify-between gap-6 px-4">
        <!-- Botón Anterior -->
        <button
          type="button"
          @click="prevSlide"
          class="w-11 h-11 rounded-full border border-neutral-300 hover:border-black hover:bg-black hover:text-white text-black flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none"
          aria-label="Asesor anterior"
        >
          <span class="font-mono text-base">←</span>
        </button>

        <!-- Indicadores Centrales y Contador -->
        <div class="flex flex-col items-center space-y-2">
          <div class="flex items-center gap-2">
            <button
              v-for="(adv, idx) in advisors"
              :key="adv.id"
              type="button"
              @click="goToSlide(idx)"
              class="h-1.5 transition-all duration-300 rounded-full cursor-pointer focus:outline-none"
              :class="idx === currentIndex ? 'w-8 bg-[#834384]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'"
              :aria-label="`Ir al asesor ${adv.name}`"
            />
          </div>
          <span class="font-mono text-xs tracking-widest text-neutral-400">
            0{{ currentIndex + 1 }} / 0{{ advisors.length }}
          </span>
        </div>

        <!-- Botón Siguiente -->
        <button
          type="button"
          @click="nextSlide"
          class="w-11 h-11 rounded-full border border-neutral-300 hover:border-black hover:bg-black hover:text-white text-black flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none"
          aria-label="Siguiente asesor"
        >
          <span class="font-mono text-base">→</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'
import { useAdvisors } from '~/composables/useAdvisors'

const { advisors } = useAdvisors()
const currentIndex = ref(0)
const textRef = ref<HTMLElement | null>(null)
const triangleRef = ref<HTMLElement | null>(null)

let autoplayTimer: ReturnType<typeof setInterval> | null = null
let touchStartX = 0

const currentAdvisor = computed(() => advisors[currentIndex.value])

const playTransition = (dir: number = 1) => {
  if (!import.meta.client || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  nextTick(() => {
    if (triangleRef.value) {
      animate(triangleRef.value, {
        opacity: [0.3, 1],
        scale: [0.94, 1],
        translateX: [dir * 30, 0],
        duration: 550,
        ease: 'outExpo'
      })
    }
    if (textRef.value) {
      animate(textRef.value, {
        opacity: [0.4, 1],
        translateY: [15, 0],
        duration: 500,
        ease: 'outExpo'
      })
    }
  })
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % advisors.length
  playTransition(1)
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + advisors.length) % advisors.length
  playTransition(-1)
}

const goToSlide = (idx: number) => {
  if (idx === currentIndex.value) return
  const dir = idx > currentIndex.value ? 1 : -1
  currentIndex.value = idx
  playTransition(dir)
}

const pauseAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const resumeAutoplay = () => {
  pauseAutoplay()
  autoplayTimer = setInterval(() => {
    nextSlide()
  }, 6500)
}

const onTouchStart = (e: TouchEvent) => {
  touchStartX = e.touches[0].clientX
}

const onTouchEnd = (e: TouchEvent) => {
  const diff = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(diff) > 40) {
    if (diff > 0) prevSlide()
    else nextSlide()
  }
}

onMounted(() => {
  resumeAutoplay()
})

onUnmounted(() => {
  pauseAutoplay()
})
</script>
