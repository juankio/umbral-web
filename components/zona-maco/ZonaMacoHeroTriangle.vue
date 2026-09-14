<template>
  <div
    v-if="triangleOpacity > 0"
    ref="containerRef"
    class="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4 overflow-hidden select-none pointer-events-none"
    :style="{ opacity: triangleOpacity }"
    style="perspective: 1200px"
  >
    <!-- Monumental Tadao Ando Arch Triangle -->
    <div
      ref="triangleRef"
      class="relative w-[320px] sm:w-[380px] lg:w-[410px] h-[430px] sm:h-[510px] lg:h-[550px] will-change-transform"
      :style="triangleTransform"
    >
      <svg
        viewBox="0 0 367 501"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full drop-shadow-2xl select-none pointer-events-none"
      >
        <path d="M0 349.44L90.38 0L364.67 499.56L0 349.44Z" fill="#0A0A0A" />
        <path d="M40.28 206.07L365.84 500.63" stroke="#262626" stroke-width="1.2" stroke-linecap="round" />
        <path d="M197.31 195.57L75.29 380.11" stroke="#222222" stroke-width="1.2" stroke-linecap="round" />

        <!-- Tipografía UMBRAL \ CRGS centrada en la mitad de la masa negra del triángulo como en Figma -->
        <text
          x="132" y="288" text-anchor="middle" dominant-baseline="central" fill="#FFFFFF" font-size="25" letter-spacing="0.14em"
          class="font-barlow font-bold uppercase select-none pointer-events-none" style="font-family: 'Barlow Condensed', sans-serif; font-weight: 700;"
        >UMBRAL \ CRGS</text>
      </svg>
      <h1 class="sr-only">UMBRAL \ CRGS</h1>
    </div>

    <!-- Indicador interactivo de scroll de apertura (Cápsula de alto contraste) -->
    <div
      class="absolute bottom-24 sm:bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 z-30 transition-opacity duration-300 pointer-events-auto"
      :style="{ opacity: indicatorOpacity }"
    >
      <button
        type="button"
        class="group bg-neutral-950 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18)] ring-1 ring-white/10 hover:ring-white/30 border border-neutral-800 flex items-center gap-3 cursor-pointer pointer-events-auto hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30"
        :class="{ 'animate-breathing': !isReducedMotion }"
        aria-label="Desliza para abrir origami o haz click para desplegar"
        @click="triggerScroll"
      >
        <!-- Icono de ratón con scroll wheel animado -->
        <span class="relative flex items-center justify-center w-3.5 h-5 border-[1.5px] border-neutral-400 group-hover:border-white rounded-full transition-colors duration-300" aria-hidden="true">
          <span class="w-1 h-1.5 bg-white rounded-full" :class="{ 'animate-scroll-wheel': !isReducedMotion }" />
        </span>
        <span class="font-barlow font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-white whitespace-nowrap select-none">
          DESLIZA PARA ABRIR
        </span>
        <!-- Chevron sutil hacia abajo -->
        <svg
          class="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-all duration-300"
          :class="{ 'animate-chevron-nudge': !isReducedMotion }"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M3.5 5.25L7 8.75L10.5 5.25" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  progress?: number
}

const props = withDefaults(defineProps<Props>(), {
  progress: 0
})

const containerRef = ref<HTMLElement | null>(null)
const triangleRef = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)
const isReducedMotion = ref(false)

const onWindowMouseMove = (e: MouseEvent) => {
  if (isReducedMotion.value || triangleOpacity.value <= 0) return
  mouseX.value = (e.clientX / window.innerWidth - 0.5) * 2
  mouseY.value = (e.clientY / window.innerHeight - 0.5) * 2
}

const triggerScroll = () => {
  if (typeof window === 'undefined') return
  window.scrollTo({ top: 450, behavior: 'smooth' })
}

// Sincronizado para reaparecer nítido al regresar a 250px (progress ~0.21 -> ~0.70 opacidad)
// y disolverse suavemente hacia 0.34 para que a 400px emerja la constelación
const triangleOpacity = computed(() => {
  if (isReducedMotion.value) return props.progress > 0.34 ? 0 : 1
  if (props.progress <= 0.16) return 1
  if (props.progress >= 0.34) return 0
  return 1 - (props.progress - 0.16) / 0.18
})

const normalizedProgress = computed(() => {
  return Math.min(Math.max((props.progress - 0.08) / 0.24, 0), 1)
})

const indicatorOpacity = computed(() => {
  const p = Math.min(Math.max(props.progress / 0.09, 0), 1)
  return (1 - p).toFixed(2)
})

const triangleTransform = computed(() => {
  if (isReducedMotion.value) return {}
  const tiltX = -mouseY.value * 6
  const tiltY = mouseX.value * 8
  const p = normalizedProgress.value
  const scale = 1 + p * 0.36
  const translateY = p * 32
  const rotateZ = p * 3

  return {
    transform: `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) rotateZ(${rotateZ.toFixed(2)}deg) scale(${scale.toFixed(3)}) translateY(${translateY.toFixed(1)}px)`,
    transition: 'transform 0.20s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    isReducedMotion.value = mq.matches
    mq.addEventListener?.('change', (e) => { isReducedMotion.value = e.matches })
    window.addEventListener('mousemove', onWindowMouseMove, { passive: true })
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', onWindowMouseMove)
  }
})
</script>

<style scoped>
@keyframes breathing {
  0%, 100% {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18), 0 0 10px rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.14);
  }
  50% {
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28), 0 0 20px rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.32);
  }
}
@keyframes scroll-wheel {
  0% { transform: translateY(-2px); opacity: 0; }
  25% { opacity: 1; }
  70% { transform: translateY(3.5px); opacity: 0.85; }
  100% { transform: translateY(5px); opacity: 0; }
}
@keyframes chevron-nudge {
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(3px); opacity: 1; }
}
.animate-breathing { animation: breathing 3.2s ease-in-out infinite; }
.animate-scroll-wheel { animation: scroll-wheel 1.8s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
.animate-chevron-nudge { animation: chevron-nudge 1.8s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .animate-breathing, .animate-scroll-wheel, .animate-chevron-nudge { animation: none !important; }
}
</style>
