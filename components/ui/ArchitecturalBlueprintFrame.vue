<template>
  <div
    ref="frameRef"
    class="blueprint-frame group relative inline-block p-4 sm:p-5 select-none transition-transform duration-500 will-change-transform"
    @mouseenter="triggerTraceAnimation"
  >
    <!-- Cruces de cota técnica arquitectónica (+) en las 4 esquinas con pulsación CAD continua -->
    <span
      class="absolute top-1 left-1 font-mono text-xs leading-none cad-cross cad-delay-0 transition-all duration-300"
      :class="isDark ? 'text-white/40 group-hover:text-[#F6D152] group-hover:scale-125' : 'text-black/40 group-hover:text-amber-600 group-hover:scale-125'"
    >+</span>
    <span
      class="absolute top-1 right-1 font-mono text-xs leading-none cad-cross cad-delay-1 transition-all duration-300"
      :class="isDark ? 'text-white/40 group-hover:text-[#F6D152] group-hover:scale-125' : 'text-black/40 group-hover:text-amber-600 group-hover:scale-125'"
    >+</span>
    <span
      class="absolute bottom-1 left-1 font-mono text-xs leading-none cad-cross cad-delay-2 transition-all duration-300"
      :class="isDark ? 'text-white/40 group-hover:text-[#F6D152] group-hover:scale-125' : 'text-black/40 group-hover:text-amber-600 group-hover:scale-125'"
    >+</span>
    <span
      class="absolute bottom-1 right-1 font-mono text-xs leading-none cad-cross cad-delay-3 transition-all duration-300"
      :class="isDark ? 'text-white/40 group-hover:text-[#F6D152] group-hover:scale-125' : 'text-black/40 group-hover:text-amber-600 group-hover:scale-125'"
    >+</span>

    <!-- Etiquetas técnicas de plano arquitectónico que se iluminan vivamente al hover -->
    <div
      class="absolute -top-3 left-6 font-mono text-[9px] tracking-widest uppercase transition-all duration-300 pointer-events-none"
      :class="isDark ? 'text-white/40 group-hover:text-[#F6D152] group-hover:translate-x-1' : 'text-black/50 group-hover:text-amber-600 group-hover:translate-x-1'"
    >
      {{ technicalLabel || 'CRGS · ARCH-GRID' }}
    </div>

    <div
      class="absolute -bottom-3 right-6 font-mono text-[9px] tracking-widest uppercase transition-all duration-300 pointer-events-none"
      :class="isDark ? 'text-white/40 group-hover:text-white/90 group-hover:-translate-x-1' : 'text-black/40 group-hover:text-black/90 group-hover:-translate-x-1'"
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
        :stroke="isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.09)'"
        stroke-dasharray="4 3"
      />
      <line
        x1="100%" y1="20" x2="100%" y2="90%"
        :stroke="isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.09)'"
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
        class="transition-colors duration-300 group-hover:stroke-[#F6D152]"
      />
    </svg>

    <!-- Contenido envuelto (Foto / Retrato) con sutil elevación -->
    <div class="relative z-10 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
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
    duration: 1100,
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
  if (traceAnim && typeof traceAnim.pause === 'function') traceAnim.pause()
})
</script>

<style scoped>
.cad-cross {
  animation: cadPulse 3.2s ease-in-out infinite;
}
.cad-delay-0 { animation-delay: 0s; }
.cad-delay-1 { animation-delay: 0.8s; }
.cad-delay-2 { animation-delay: 1.6s; }
.cad-delay-3 { animation-delay: 2.4s; }

@keyframes cadPulse {
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.15); }
}
</style>
