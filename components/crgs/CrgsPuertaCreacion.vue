<template>
  <section ref="sectionRef" class="relative bg-[#0A0A0A] py-20 lg:py-32 overflow-hidden text-white select-none">
    <!-- Resplandor ambiental verde esmeralda arquitectónico -->
    <div
      class="absolute inset-0 pointer-events-none flex items-center justify-center transition-opacity duration-1000"
      :class="isOpen ? 'opacity-75' : 'opacity-25'"
      aria-hidden="true"
    >
      <div class="w-[520px] sm:w-[780px] h-[360px] sm:h-[520px] bg-[#3E9B44]/20 blur-[130px] rounded-full" />
    </div>

    <div class="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-12 flex flex-col items-center">
      <div class="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-[#4BA550] mb-8 sm:mb-12">
        <span class="w-2 h-2 rounded-full bg-[#4BA550] animate-pulse" />
        <span>CRGS · Hito Tadao Ando · Archivo Audiovisual</span>
      </div>

      <!-- Escenario Monumental 3D -->
      <div class="relative w-full max-w-[960px] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center perspective-[1400px]">
        <!-- Cápsula Audiovisual Documental (Nivel Fondo Z-0) -->
        <div
          class="absolute inset-0 w-full h-full rounded-sm overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl transition-all duration-700 ease-out"
          :class="isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-20 pointer-events-none'"
        >
          <img
            src="/images/crgs-building.png"
            alt="Documental de la repentina y talleres del CRGS"
            class="w-full h-full object-cover grayscale contrast-115 brightness-90 transition-transform duration-1000"
            :class="{ 'scale-105 filter-none': isPlaying }"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-transparent flex flex-col justify-between p-6 sm:p-10">
            <div class="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full" :class="isPlaying ? 'bg-red-500 animate-pulse' : 'bg-[#4BA550]'" />
                {{ isPlaying ? 'REPRODUCIENDO · LA REPENTINA' : 'REGISTRO AUDIOVISUAL · CRGS' }}
              </span>
              <span>13,000 m² · TADAO ANDO</span>
            </div>
            <div class="flex items-end justify-between gap-4">
              <div>
                <span class="font-mono text-[11px] text-[#4BA550] uppercase tracking-widest block mb-1">CÁPSULA DOCUMENTAL</span>
                <h3 class="font-barlow font-semibold text-2xl sm:text-4xl text-white uppercase tracking-tight">Talleres & Proceso Creativo</h3>
              </div>
              <button
                type="button"
                class="px-5 py-2.5 rounded-full bg-white text-black font-barlow font-bold text-xs uppercase tracking-widest hover:bg-[#4BA550] hover:text-white transition-all duration-300 shadow-lg flex items-center gap-2 cursor-pointer pointer-events-auto"
                @click.stop="isPlaying = !isPlaying"
              >
                <span>{{ isPlaying ? 'PAUSAR' : 'REPRODUCIR' }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Portal Origami Aperture 3D (Nivel Frontal Z-10) -->
        <div class="absolute inset-0 flex items-center justify-center will-change-transform drop-shadow-[0_0_40px_rgba(75,165,80,0.35)]" style="transform-style: preserve-3d">
          <div class="origami-facet facet-left absolute inset-0 bg-gradient-to-br from-[#4BA550] via-[#3E9B44] to-[#256B29] transition-all duration-700 ease-out" :style="leftFacetStyle" />
          <div class="origami-facet facet-right absolute inset-0 bg-gradient-to-bl from-[#4BA550] via-[#3E9B44] to-[#1e5821] transition-all duration-700 ease-out" :style="rightFacetStyle" />

          <!-- Titular Monumental Itálico y Botón Apertura -->
          <div
            class="relative z-20 flex flex-col items-center justify-center p-6 text-center transition-all duration-500"
            :class="isOpen ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0 pointer-events-auto'"
          >
            <h2 class="font-barlow italic font-medium sm:font-semibold text-4xl sm:text-6xl lg:text-7xl text-white text-center select-none tracking-tight drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)]">
              La Puerta de la Creación
            </h2>
            <button
              type="button"
              class="mt-6 sm:mt-8 px-6 sm:px-8 py-3 rounded-full bg-neutral-950/90 text-white border border-[#4BA550]/50 font-barlow font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase hover:border-[#4BA550] hover:shadow-[0_0_30px_rgba(75,165,80,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              @click="togglePortal"
            >
              [ DESPLEGAR PORTAL DOCUMENTAL ]
            </button>
          </div>
        </div>
      </div>

      <button
        v-if="isOpen"
        type="button"
        class="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors flex items-center gap-2 border-b border-neutral-700 pb-1 cursor-pointer"
        @click="togglePortal"
      >
        <span>✕ CERRAR UMBRAL ORIGAMI</span>
      </button>
    </div>
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

const leftFacetStyle = computed(() => {
  if (isReducedMotion.value) return { opacity: isOpen.value ? '0' : '1', pointerEvents: isOpen.value ? 'none' : 'auto' }
  return {
    transformOrigin: '0% 50%',
    transform: isOpen.value ? 'rotateY(-88deg) scale(0.92) translateX(-20px)' : 'rotateY(0deg) scale(1) translateX(0)',
    opacity: isOpen.value ? '0.1' : '1',
    pointerEvents: isOpen.value ? 'none' : 'auto'
  }
})

const rightFacetStyle = computed(() => {
  if (isReducedMotion.value) return { opacity: isOpen.value ? '0' : '1', pointerEvents: isOpen.value ? 'none' : 'auto' }
  return {
    transformOrigin: '100% 50%',
    transform: isOpen.value ? 'rotateY(88deg) scale(0.92) translateX(20px)' : 'rotateY(0deg) scale(1) translateX(0)',
    opacity: isOpen.value ? '0.1' : '1',
    pointerEvents: isOpen.value ? 'none' : 'auto'
  }
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
.facet-left { clip-path: polygon(50% 6%, 50% 94%, 8% 94%); }
.facet-right { clip-path: polygon(50% 6%, 92% 94%, 50% 94%); }
@media (prefers-reduced-motion: reduce) {
  .origami-facet { transition: opacity 0.3s ease !important; transform: none !important; }
}
</style>
