<template>
  <div
    ref="frameRef"
    class="group relative inline-block p-4 sm:p-5 select-none transition-transform duration-500 will-change-transform"
    @mouseenter="triggerTraceAnimation"
  >
    <!-- Cruces de cota técnica arquitectónica (+) en las 4 esquinas -->
    <span
      class="absolute top-1 left-1 font-mono text-xs leading-none transition-opacity duration-300"
      :class="isDark ? 'text-white/40 group-hover:text-white/80' : 'text-black/40 group-hover:text-black/80'"
    >+</span>
    <span
      class="absolute top-1 right-1 font-mono text-xs leading-none transition-opacity duration-300"
      :class="isDark ? 'text-white/40 group-hover:text-white/80' : 'text-black/40 group-hover:text-black/80'"
    >+</span>
    <span
      class="absolute bottom-1 left-1 font-mono text-xs leading-none transition-opacity duration-300"
      :class="isDark ? 'text-white/40 group-hover:text-white/80' : 'text-black/40 group-hover:text-black/80'"
    >+</span>
    <span
      class="absolute bottom-1 right-1 font-mono text-xs leading-none transition-opacity duration-300"
      :class="isDark ? 'text-white/40 group-hover:text-white/80' : 'text-black/40 group-hover:text-black/80'"
    >+</span>

    <!-- Etiquetas técnicas de plano arquitectónico -->
    <div
      class="absolute -top-3 left-6 font-mono text-[9px] tracking-widest uppercase transition-colors duration-300 pointer-events-none"
      :class="isDark ? 'text-white/40 group-hover:text-[#f5a623]' : 'text-black/50 group-hover:text-[#d97706]'"
    >
      {{ technicalLabel || 'CRGS · ARCH-GRID' }}
    </div>

    <div
      class="absolute -bottom-3 right-6 font-mono text-[9px] tracking-widest uppercase transition-colors duration-300 pointer-events-none"
      :class="isDark ? 'text-white/40 group-hover:text-white/70' : 'text-black/40 group-hover:text-black/70'"
    >
      {{ scaleLabel || 'ECH · 1:50' }}
    </div>

    <!-- SVG Overlay: Trazos poligonales y líneas guía blueprint animadas -->
    <svg
      class="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Líneas de extensión de dibujo técnico -->
      <line
        x1="0" y1="20" x2="0" y2="90%"
        :stroke="isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'"
        stroke-dasharray="4 3"
      />
      <line
        x1="100%" y1="20" x2="100%" y2="90%"
        :stroke="isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'"
        stroke-dasharray="4 3"
      />

      <!-- Marco poligonal animado trazado con Anime.js -->
      <rect
        ref="traceRectRef"
        x="6"
        y="6"
        width="calc(100% - 12px)"
        height="calc(100% - 12px)"
        :stroke="isDark ? 'rgba(255,255,255,0.45)' : 'rgba(28,28,28,0.5)'"
        stroke-width="1.2"
        stroke-dasharray="1200"
        stroke-dashoffset="1200"
      />
    </svg>

    <!-- Contenido envuelto (Foto / Retrato) con sutil elevación -->
    <div class="relative z-10 overflow-hidden transition-transform duration-500 group-hover:scale-[1.015]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

const props = withDefaults(
  defineProps<{
    theme?: 'dark' | 'light'
    technicalLabel?: string
    scaleLabel?: string
  }>(),
  {
    theme: 'dark',
    technicalLabel: '',
    scaleLabel: ''
  }
)

const isDark = computed(() => props.theme === 'dark')
const frameRef = ref<HTMLElement | null>(null)
const traceRectRef = ref<SVGGeometryElement | null>(null)
let observer: IntersectionObserver | null = null
let traceAnim: any = null

const triggerTraceAnimation = () => {
  if (!traceRectRef.value || !import.meta.client) return
  if (traceAnim && typeof traceAnim.pause === 'function') traceAnim.pause()
  traceAnim = animate(traceRectRef.value, {
    strokeDashoffset: [1200, 0],
    duration: 1200,
    ease: 'outExpo'
  })
}

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (traceRectRef.value) traceRectRef.value.style.strokeDashoffset = '0'
    return
  }

  if (frameRef.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        triggerTraceAnimation()
        observer?.disconnect()
      }
    }, { threshold: 0.2 })
    observer.observe(frameRef.value)
  } else {
    triggerTraceAnimation()
  }
})

onUnmounted(() => {
  observer?.disconnect()
  if (traceAnim && typeof traceAnim.pause === 'function') {
    traceAnim.pause()
  }
})
</script>
