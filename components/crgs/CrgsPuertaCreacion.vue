<template>
  <section
    ref="sectionRef"
    class="relative bg-[#0A0A0A] min-h-[75vh] lg:min-h-[85vh] overflow-hidden flex items-center justify-center select-none py-10 sm:py-16"
  >
    <!-- Resplandor ambiental verde esmeralda -->
    <div
      class="absolute inset-0 pointer-events-none flex items-center justify-center transition-opacity duration-1000"
      :class="isOpen ? 'opacity-60' : 'opacity-20'"
      aria-hidden="true"
    >
      <div class="w-[500px] sm:w-[750px] h-[360px] sm:h-[500px] bg-[#4BA550]/20 blur-[140px] rounded-full" />
    </div>

    <!-- Anotación a la izquierda (exacta de Figma) -->
    <p class="font-barlow italic text-neutral-400 text-xs sm:text-sm max-w-[190px] leading-snug absolute left-6 sm:left-12 lg:left-16 top-1/2 -translate-y-1/2 z-20 text-left pointer-events-none">
      Video + close up del triangulo como la inspo de "close the gap" pero como abriendose
    </p>

    <!-- Escenario Monumental Origami 3D -->
    <div class="relative w-full max-w-[980px] mx-auto px-4 flex items-center justify-center perspective-[1200px]">
      <!-- Cápsula Audiovisual Documental (Nivel Fondo Z-10) -->
      <div
        class="w-full max-w-[760px] aspect-[16/10] sm:aspect-video rounded-sm overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10"
        :class="isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'"
      >
        <img
          src="/images/crgs-building.png"
          alt="Documental Tadao Ando y Centro Roberto Garza Sada"
          class="w-full h-full object-cover grayscale contrast-110 brightness-90 transition-transform duration-1000"
          :class="{ 'scale-105 filter-none': isPlaying }"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-transparent flex flex-col justify-between p-6 sm:p-8">
          <div class="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-300">
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full" :class="isPlaying ? 'bg-red-500 animate-pulse' : 'bg-[#4BA550]'" />
              {{ isPlaying ? 'REPRODUCIENDO · LA REPENTINA' : 'REGISTRO AUDIOVISUAL · CRGS' }}
            </span>
            <span>13,000 m² · TADAO ANDO</span>
          </div>
          <div class="flex items-end justify-between gap-4">
            <div>
              <span class="font-mono text-[11px] text-[#4BA550] uppercase tracking-widest block mb-1">CÁPSULA DOCUMENTAL</span>
              <h3 class="font-barlow font-semibold text-2xl sm:text-3xl text-white uppercase tracking-tight">Talleres &amp; Proceso Creativo</h3>
            </div>
            <button
              type="button"
              class="px-5 py-2.5 rounded-full bg-white text-black font-barlow font-bold text-xs uppercase tracking-widest hover:bg-[#4BA550] hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
              @click.stop="isPlaying = !isPlaying"
            >
              <span>{{ isPlaying ? 'PAUSAR' : 'REPRODUCIR' }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Portal Origami Aperture (Triángulo Monumental Verde Esmeralda) -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-20" style="transform-style: preserve-3d">
        <div
          class="relative w-[340px] sm:w-[440px] lg:w-[480px] aspect-[420/560] cursor-pointer pointer-events-auto transition-transform duration-700"
          :class="isOpen ? 'scale-95' : 'hover:scale-[1.02]'"
          role="button"
          :aria-expanded="isOpen"
          aria-label="Desplegar portal documental de La Puerta de la Creación"
          @click="togglePortal"
        >
          <!-- Faceta Izquierda Origami -->
          <svg
            viewBox="0 0 420 560"
            class="absolute inset-0 w-full h-full origami-facet filter drop-shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            :style="leftFacetStyle"
          >
            <polygon points="170,0 210,490 0,420" fill="#4BA550" />
          </svg>

          <!-- Faceta Derecha Origami -->
          <svg
            viewBox="0 0 420 560"
            class="absolute inset-0 w-full h-full origami-facet filter drop-shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            :style="rightFacetStyle"
          >
            <polygon points="170,0 420,560 210,490" fill="#439A48" />
          </svg>
        </div>
      </div>

      <!-- Titular Monumental Itálico en una sola línea centrado directamente sobre el triángulo -->
      <h2
        class="font-barlow italic font-medium sm:font-semibold text-5xl sm:text-7xl lg:text-8xl text-white text-center whitespace-nowrap select-none drop-shadow-[0_8px_32px_rgba(0,0,0,0.85)] z-20 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
        :class="isOpen ? '-translate-y-[150%] sm:-translate-y-[170%] scale-75 sm:scale-85 text-white/90' : 'scale-100 text-white'"
      >
        La Puerta de la Creación
      </h2>
    </div>

    <!-- Botón de repliegue cuando está desplegado -->
    <button
      v-if="isOpen"
      type="button"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors flex items-center gap-2 border-b border-neutral-700 pb-1 cursor-pointer"
      @click="togglePortal"
    >
      <span>✕ CERRAR UMBRAL ORIGAMI</span>
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const isPlaying = ref(false)
const isReducedMotion = ref(false)
let observer: IntersectionObserver | null = null

const togglePortal = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) isPlaying.value = false
}

const leftFacetStyle = computed(() => isReducedMotion.value
  ? { opacity: isOpen.value ? '0.15' : '1', pointerEvents: isOpen.value ? 'none' : 'auto' }
  : {
    transformOrigin: '15% 50%',
    transform: isOpen.value ? 'rotateY(-78deg) translateX(-90px) translateZ(-20px) scale(0.9)' : 'none',
    opacity: isOpen.value ? '0.2' : '1'
  })

const rightFacetStyle = computed(() => isReducedMotion.value
  ? { opacity: isOpen.value ? '0.15' : '1', pointerEvents: isOpen.value ? 'none' : 'auto' }
  : {
    transformOrigin: '85% 50%',
    transform: isOpen.value ? 'rotateY(78deg) translateX(90px) translateZ(-20px) scale(0.9)' : 'none',
    opacity: isOpen.value ? '0.2' : '1'
  })

onMounted(() => {
  if (!import.meta.client) return
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (sectionRef.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && entry.intersectionRatio > 0.45) isOpen.value = true
    }, { threshold: [0.45] })
    observer.observe(sectionRef.value)
  }
})
onUnmounted(() => { observer?.disconnect() })
</script>

<style scoped>
.origami-facet { backface-visibility: hidden; will-change: transform, opacity; }
@media (prefers-reduced-motion: reduce) {
  .origami-facet { transition: opacity 0.3s ease !important; transform: none !important; }
}
</style>
