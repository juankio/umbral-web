<template>
  <div
    class="relative w-full h-full overflow-hidden bg-[#0A0A0A] select-none"
    style="perspective: 1200px"
  >
    <!-- Vacío Arquitectónico Revelado (#0A0A0A) / Slot de Contenido -->
    <div class="absolute inset-0 w-full h-full bg-[#0A0A0A] flex items-center justify-center z-0">
      <slot>
        <div class="text-center px-6 pointer-events-none opacity-90 transition-opacity duration-500">
          <span class="font-mono text-[10px] tracking-[0.3em] text-neutral-500 uppercase block mb-2">CRGS · ARQUITECTURA DEL VACÍO</span>
          <h2 class="font-barlow font-bold text-2xl sm:text-4xl text-white tracking-widest uppercase">UMBRAL \ PLIEGUE</h2>
        </div>
      </slot>
    </div>

    <!-- Base Blanca Pura en Reposo (#FFFFFF) -->
    <div
      v-if="baseWhiteOpacity > 0"
      class="absolute inset-0 w-full h-full bg-[#FFFFFF] pointer-events-none z-30 transition-opacity duration-150"
      :style="{ opacity: baseWhiteOpacity }"
    />

    <!-- Escenario 3D Origami: Hojas de Papel de Arte de Alto Gramaje -->
    <div
      v-if="paperOpacity > 0"
      class="absolute inset-0 w-full h-full pointer-events-none will-change-transform z-20"
      :style="{ opacity: paperOpacity, transformStyle: 'preserve-3d' }"
    >
      <!-- Facetas Poligonales Origami 3D: #FFFFFF puro en reposo -->
      <div
        v-for="facet in facetList"
        :key="facet.id"
        :class="['origami-facet bg-[#FFFFFF]', facet.clipClass]"
        :style="isReducedMotion ? {} : facet.style"
      >
        <div :class="['absolute inset-0 pointer-events-none transition-opacity duration-200', facet.bgGradient]" :style="{ opacity: facetShadeOpacity }" />
        <div class="paper-texture absolute inset-0 pointer-events-none transition-opacity duration-200" :style="{ opacity: facetShadeOpacity }" />
        <div :class="['absolute inset-0 pointer-events-none transition-opacity duration-200', facet.shadingClass]" :style="{ opacity: easedProgress * 0.85 }" />
      </div>

      <!-- Líneas de Hendido y Bisel en los Cantos de Corte (visibles solo al desplegar) -->
      <svg
        v-if="linesOpacity > 0"
        class="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-200"
        :style="{ opacity: linesOpacity }"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="48" y2="42" stroke="rgba(0,0,0,0.16)" stroke-width="0.45" />
        <line x1="100" y1="0" x2="48" y2="42" stroke="rgba(0,0,0,0.16)" stroke-width="0.45" />
        <line x1="100" y1="100" x2="48" y2="42" stroke="rgba(0,0,0,0.16)" stroke-width="0.45" />
        <line x1="0" y1="100" x2="48" y2="42" stroke="rgba(0,0,0,0.16)" stroke-width="0.45" />
        <line x1="0" y1="0.3" x2="48" y2="42.3" stroke="rgba(255,255,255,0.75)" stroke-width="0.3" />
        <line x1="100" y1="0.3" x2="48" y2="42.3" stroke="rgba(255,255,255,0.75)" stroke-width="0.3" />
        <line x1="100" y1="99.7" x2="48" y2="41.7" stroke="rgba(255,255,255,0.75)" stroke-width="0.3" />
        <line x1="0" y1="99.7" x2="48" y2="41.7" stroke="rgba(255,255,255,0.75)" stroke-width="0.3" />
        <circle cx="48" cy="42" r="0.75" fill="rgba(0,0,0,0.22)" />
        <circle cx="48" cy="42" r="0.35" fill="rgba(255,255,255,0.6)" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Props {
  progress?: number
}

const props = withDefaults(defineProps<Props>(), {
  progress: 0
})

const isReducedMotion = ref(false)

const FACETS = [
  { id: 'top', clip: 'facet-top', bg: 'bg-gradient-to-b from-[#FFFFFF] via-[#F7F6F2] to-[#E9E5DC]', shade: 'bg-gradient-to-b from-transparent via-black/5 to-black/50', origin: '50% 0%', rx: -118, ry: 0, rz: 0, tz: 45, dx: 0, dy: 20 },
  { id: 'right', clip: 'facet-right', bg: 'bg-gradient-to-l from-[#F5F3ED] via-[#EAE6DC] to-[#D5CEC2]', shade: 'bg-gradient-to-l from-transparent via-black/10 to-black/55', origin: '100% 50%', rx: 0, ry: 118, rz: 6, tz: 40, dx: -20, dy: 0 },
  { id: 'bottom', clip: 'facet-bottom', bg: 'bg-gradient-to-t from-[#EDE8DF] via-[#DFDACD] to-[#C9C1B2]', shade: 'bg-gradient-to-t from-transparent via-black/10 to-black/60', origin: '50% 100%', rx: 118, ry: 0, rz: 0, tz: 45, dx: 0, dy: -20 },
  { id: 'left', clip: 'facet-left', bg: 'bg-gradient-to-r from-[#FAF9F6] via-[#F0ECE4] to-[#DFD9CD]', shade: 'bg-gradient-to-r from-transparent via-black/5 to-black/50', origin: '0% 50%', rx: 0, ry: -118, rz: -6, tz: 40, dx: 20, dy: 0 }
]

// Reposo blanco puro (#FFFFFF) para progress <= 0.06
const baseWhiteOpacity = computed(() => {
  if (props.progress <= 0.06) return 1
  if (props.progress >= 0.13) return 0
  return 1 - (props.progress - 0.06) / 0.07
})

// Los matices de papel y textura solo surgen a partir de 0.06
const facetShadeOpacity = computed(() => {
  if (props.progress <= 0.06) return 0
  return Math.min(Math.max((props.progress - 0.06) / 0.12, 0), 1)
})

// Líneas de hendido: ocultas en reposo (progress <= 0.06), se desvanecen al abrir
const linesOpacity = computed(() => {
  if (props.progress <= 0.06) return 0
  const fadeIn = Math.min(Math.max((props.progress - 0.06) / 0.06, 0), 1)
  return fadeIn * Math.max(0, 1 - easedProgress.value * 2.8)
})

// Apertura dinámica y reactiva entre progress = 0.07 y progress = 0.65
const openFactor = computed(() => {
  if (props.progress <= 0.07) return 0
  if (props.progress >= 0.65) return 1
  return (props.progress - 0.07) / 0.58
})

const easedProgress = computed(() => {
  const t = openFactor.value
  return 1 - Math.pow(1 - t, 2.2)
})

// Disolución limpia del papel hacia el cosmos negro entre 0.52 y 0.78
const paperOpacity = computed(() => {
  if (isReducedMotion.value) {
    if (props.progress <= 0.06) return 1
    if (props.progress >= 0.65) return 0
    return 1 - (props.progress - 0.06) / 0.59
  }
  if (props.progress <= 0.52) return 1
  if (props.progress >= 0.78) return 0
  return 1 - (props.progress - 0.52) / 0.26
})

const facetList = computed(() => {
  const p = easedProgress.value
  const trans = 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), filter 0.18s ease-out'
  return FACETS.map(f => ({
    id: f.id,
    clipClass: f.clip,
    bgGradient: f.bg,
    shadingClass: f.shade,
    style: {
      transformOrigin: f.origin,
      transform: `rotateX(${f.rx * p}deg) rotateY(${f.ry * p}deg) rotateZ(${f.rz * p}deg) translateZ(${f.tz * p}px)`,
      filter: p > 0.005
        ? `drop-shadow(${f.dx * p}px ${f.dy * p}px ${p * 28}px rgba(0,0,0,${p * 0.45}))`
        : 'none',
      transition: trans
    }
  }))
})

onMounted(() => {
  if (import.meta.client) {
    isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
})
</script>

<style scoped>
.origami-facet {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  will-change: transform, filter;
}

.paper-texture {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.045'/%3E%3C/svg%3E");
  mix-blend-mode: multiply;
}

.facet-top { clip-path: polygon(0% 0%, 100% 0%, 48% 42%); }
.facet-right { clip-path: polygon(100% 0%, 100% 100%, 48% 42%); }
.facet-bottom { clip-path: polygon(100% 100%, 0% 100%, 48% 42%); }
.facet-left { clip-path: polygon(0% 100%, 0% 0%, 48% 42%); }
</style>
