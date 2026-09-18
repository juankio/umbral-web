<template>
  <div
    v-if="triangleOpacity > 0"
    ref="containerRef"
    class="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4 overflow-hidden select-none pointer-events-none"
    :style="{ opacity: triangleOpacity }"
    style="perspective: 1200px"
  >
    <!-- Monumental Tadao Ando Arch Triangle (Group 38 Figma w:840 h:981) -->
    <div
      ref="triangleRef"
      class="relative w-[320px] sm:w-[500px] md:w-[680px] lg:w-[800px] xl:w-[840px] h-[340px] sm:h-[530px] md:h-[720px] lg:h-[850px] xl:h-[890px] max-h-[72vh] will-change-transform flex items-center justify-center"
      :style="triangleTransform"
    >
      <svg
        viewBox="0 0 702 726"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full drop-shadow-2xl select-none pointer-events-none"
      >
        <!-- Triángulo negro monumental Tadao Ando (Vector 1 Figma id:325:26) -->
        <path d="M0 552.98L236.16 0L702 725.64L0 552.98Z" fill="#1C1C1C" />
        <path d="M80 320L702 725.64" stroke="#2A2A2A" stroke-width="1.5" stroke-linecap="round" />
        <path d="M380 280L160 590" stroke="#262626" stroke-width="1.2" stroke-linecap="round" />
      </svg>

      <!-- Logo Umbral 2 en el centro de la masa monumental (Figma id:325:52 w:298 h:45 / Capa_2) -->
      <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">
        <img
          src="/images/logo-umbral.png"
          alt="UMBRAL"
          class="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[298px] h-auto object-contain brightness-0 invert opacity-95 drop-shadow select-none"
          draggable="false"
        />
        <span class="font-barlow font-normal text-xs sm:text-sm tracking-[0.3em] uppercase text-neutral-400 mt-2">
          CRGS · ZONA MACO 2026
        </span>
      </div>

      <h1 class="sr-only">UMBRAL \ CRGS - Zona Maco</h1>
    </div>

    <!-- Enlaces a las 4 categorías o expositores de la feria (Figma ZM) -->
    <div
      class="absolute bottom-20 sm:bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 z-30 transition-opacity duration-300 pointer-events-auto flex flex-col items-center gap-3 sm:gap-4 max-w-2xl px-4 text-center"
      :style="{ opacity: indicatorOpacity }"
    >
      <nav aria-label="Categorías Zona Maco" class="flex flex-wrap items-center justify-center gap-2 sm:gap-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-200/80 shadow-sm">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="font-barlow font-medium text-xs sm:text-sm tracking-[0.18em] uppercase text-neutral-700 hover:text-black hover:scale-105 active:scale-95 transition-all px-2 py-1 cursor-pointer focus:outline-none focus:ring-1 focus:ring-black"
          @click="handleCategorySelect(cat)"
        >
          {{ cat }}
        </button>
      </nav>

      <!-- Botón deslizador de apertura (Cápsula interactiva) -->
      <button
        type="button"
        class="group bg-neutral-950 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18)] ring-1 ring-white/10 hover:ring-white/30 border border-neutral-800 flex items-center gap-2.5 cursor-pointer pointer-events-auto hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30"
        :class="{ 'animate-breathing': !isReducedMotion }"
        aria-label="Desliza para abrir origami o haz click para explorar"
        @click="triggerScroll"
      >
        <span class="relative flex items-center justify-center w-3 h-4.5 border-[1.5px] border-neutral-400 group-hover:border-white rounded-full transition-colors duration-300" aria-hidden="true">
          <span class="w-1 h-1.2 bg-white rounded-full" :class="{ 'animate-scroll-wheel': !isReducedMotion }" />
        </span>
        <span class="font-barlow font-bold text-xs sm:text-xs tracking-[0.2em] uppercase text-white whitespace-nowrap select-none">
          DESLIZA PARA ABRIR
        </span>
        <svg
          class="w-3 h-3 text-neutral-400 group-hover:text-white transition-all duration-300"
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

const emit = defineEmits<{ (e: 'select', category: string): void }>()

const categories = ['Arte Contemporáneo', 'Arte Moderno', 'Diseño Emergente', 'Diseño']

const handleCategorySelect = (category: string) => {
  emit('select', category)
  if (typeof document !== 'undefined') {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
  }
}

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
  if (typeof window !== 'undefined') window.scrollTo({ top: 450, behavior: 'smooth' })
}

// Sincronizado para reaparecer nítido al regresar a 250px (progress ~0.21 -> ~0.70 opacidad)
// y disolverse suavemente hacia 0.34 para que a 400px emerja la constelación
const triangleOpacity = computed(() => {
  if (isReducedMotion.value) return props.progress > 0.34 ? 0 : 1
  if (props.progress <= 0.16) return 1
  if (props.progress >= 0.34) return 0
  return 1 - (props.progress - 0.16) / 0.18
})

const normalizedProgress = computed(() => Math.min(Math.max((props.progress - 0.08) / 0.24, 0), 1))
const indicatorOpacity = computed(() => (1 - Math.min(Math.max(props.progress / 0.09, 0), 1)).toFixed(2))

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
  0%, 100% { box-shadow: 0 10px 30px rgba(0,0,0,0.18); border-color: rgba(255,255,255,0.14); }
  50% { box-shadow: 0 14px 34px rgba(0,0,0,0.28); border-color: rgba(255,255,255,0.32); }
}
@keyframes scroll-wheel {
  0% { transform: translateY(-2px); opacity: 0; }
  50% { transform: translateY(3.5px); opacity: 0.85; }
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
