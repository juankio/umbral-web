<template>
  <div
    ref="rootRef"
    class="relative w-full h-full flex items-center justify-center select-none cursor-pointer"
    style="perspective: 1200px"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
  >
    <!-- Haz de luz interior del UMBRAL ("La Puerta de la Creación") -->
    <div
      class="absolute inset-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center"
      :style="{ opacity: lightBeamOpacity }"
    >
      <div
        class="w-32 sm:w-44 h-64 bg-gradient-to-t from-[#f5a623]/10 via-[#f5a623]/40 to-amber-100/70 blur-2xl rounded-full transform -rotate-12 transition-transform duration-500 will-change-transform"
        :style="{ transform: `rotate(-12deg) scale(${lightBeamScale})` }"
      />
      <div
        class="w-10 sm:w-14 h-52 bg-gradient-to-b from-amber-100 via-white/80 to-[#f5a623] blur-md rounded-full transition-opacity duration-300"
        :style="{ opacity: innerGlowOpacity }"
      />
    </div>

    <!-- Contenedor Maestro 3D -->
    <div
      ref="container3DRef"
      class="relative w-full h-full will-change-transform"
      :style="master3DStyle"
      style="transform-style: preserve-3d"
    >
      <!-- ALA OESTE: Facetas de Concreto y Pliegue Izquierdo -->
      <div
        ref="leftWingRef"
        class="absolute inset-0 will-change-transform"
        :style="leftWingStyle"
        style="transform-origin: 25% 65%; transform-style: preserve-3d"
      >
        <svg viewBox="0 0 367 501" class="w-full h-full drop-shadow-xl overflow-visible" fill="none">
          <polygon points="90.38,0 0,349.44 197.31,195.57" fill="#141414" stroke="#262626" stroke-width="0.75" />
          <polygon points="0,349.44 75.29,380.11 197.31,195.57" fill="#0A0A0A" stroke="#1C1C1C" stroke-width="0.75" />
          <circle cx="58" cy="220" r="1.5" fill="#2A2A2A" />
          <circle cx="110" cy="165" r="1.5" fill="#2A2A2A" />
          <line x1="197.31" y1="195.57" x2="75.29" y2="380.11" stroke="#404040" stroke-width="1.2" stroke-linecap="round" />
        </svg>
      </div>

      <!-- ALA ESTE: Facetas de Concreto y Pliegue Derecho -->
      <div
        ref="rightWingRef"
        class="absolute inset-0 will-change-transform"
        :style="rightWingStyle"
        style="transform-origin: 75% 60%; transform-style: preserve-3d"
      >
        <svg viewBox="0 0 367 501" class="w-full h-full drop-shadow-2xl overflow-visible" fill="none">
          <polygon points="90.38,0 197.31,195.57 364.67,499.56" fill="#1C1C1C" stroke="#2A2A2A" stroke-width="0.75" />
          <polygon points="197.31,195.57 75.29,380.11 364.67,499.56" fill="#101010" stroke="#222222" stroke-width="0.75" />
          <circle cx="210" cy="245" r="1.5" fill="#2C2C2C" />
          <circle cx="275" cy="360" r="1.5" fill="#2C2C2C" />
          <line x1="40.28" y1="206.07" x2="365.84" y2="500.63" stroke="#4A4A4A" stroke-width="1.2" stroke-dasharray="3 2" />
        </svg>
      </div>

      <!-- Iluminación especular reactiva al cursor -->
      <div class="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25" :style="specularHighlightStyle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { animate } from 'animejs'

const rootRef = ref<HTMLElement | null>(null)
const container3DRef = ref<HTMLElement | null>(null)
const leftWingRef = ref<HTMLElement | null>(null)
const rightWingRef = ref<HTMLElement | null>(null)

const { y: scrollY } = useWindowScroll()
const mouseX = ref(0)
const mouseY = ref(0)
const isReducedMotion = ref(false)
const isHovered = ref(false)
const hoverProgress = ref(0)
const hoverState = { val: 0 }

let hoverAnim: any = null
let idleFloatAnim: any = null

const handleMouseMove = (e: MouseEvent) => {
  if (isReducedMotion.value || !rootRef.value) return
  const rect = rootRef.value.getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width - 0.5) * 2
  mouseY.value = ((e.clientY - rect.top) / rect.height - 0.5) * 2
}

const handleMouseEnter = () => {
  if (isReducedMotion.value) return
  isHovered.value = true
  if (hoverAnim?.pause) hoverAnim.pause()
  hoverAnim = animate(hoverState, {
    val: 0.85,
    duration: 600,
    ease: 'outExpo',
    onUpdate: () => { hoverProgress.value = hoverState.val }
  })
}

const handleMouseLeave = () => {
  mouseX.value = 0
  mouseY.value = 0
  if (isReducedMotion.value) return
  isHovered.value = false
  if (hoverAnim?.pause) hoverAnim.pause()
  hoverAnim = animate(hoverState, {
    val: 0,
    duration: 700,
    ease: 'outCubic',
    onUpdate: () => { hoverProgress.value = hoverState.val }
  })
}

const scrollProgress = computed(() => {
  if (isReducedMotion.value) return 0
  return Math.min(Math.max(scrollY.value / 450, 0), 1)
})

const openProgress = computed(() => {
  if (isReducedMotion.value) return 0
  return Math.min(1, scrollProgress.value + hoverProgress.value)
})

const lightBeamOpacity = computed(() => Math.min(1, openProgress.value * 0.95 + (isHovered.value ? 0.35 : 0)))
const lightBeamScale = computed(() => 1 + hoverProgress.value * 0.45)
const innerGlowOpacity = computed(() => 0.25 + hoverProgress.value * 0.7)

const master3DStyle = computed(() => {
  if (isReducedMotion.value) return {}
  const rotX = -mouseY.value * 8
  const rotY = mouseX.value * 10
  const transY = openProgress.value * 28
  return {
    transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(${transY}px)`,
    transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const leftWingStyle = computed(() => {
  if (isReducedMotion.value) return {}
  const angle = openProgress.value * -35
  const shiftX = openProgress.value * -20
  const shiftZ = openProgress.value * 30
  return {
    transform: `rotateY(${angle}deg) rotateX(${openProgress.value * 6}deg) translate3d(${shiftX}px, 0, ${shiftZ}px)`,
    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const rightWingStyle = computed(() => {
  if (isReducedMotion.value) return {}
  const angle = openProgress.value * 38
  const shiftX = openProgress.value * 22
  const shiftZ = openProgress.value * -24
  return {
    transform: `rotateY(${angle}deg) rotateX(${openProgress.value * -5}deg) translate3d(${shiftX}px, 0, ${shiftZ}px)`,
    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const specularHighlightStyle = computed(() => {
  const x = (mouseX.value + 1) * 50
  const y = (mouseY.value + 1) * 50
  return { background: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.4) 0%, transparent 60%)` }
})

onMounted(() => {
  if (!import.meta.client) return
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (isReducedMotion.value) return

  if (container3DRef.value) {
    animate(container3DRef.value, {
      opacity: [0, 1], scale: [0.55, 1], rotateX: [65, 0], rotateY: [-50, 0],
      duration: 1400, ease: 'outExpo'
    })
    idleFloatAnim = animate(container3DRef.value, {
      translateY: [-6, 6], rotateZ: [-1.2, 1.2], duration: 4600, delay: 1400,
      alternate: true, loop: true, ease: 'inOutSine'
    })
  }

  if (leftWingRef.value && rightWingRef.value) {
    animate(leftWingRef.value, { rotateY: [-55, 0], duration: 1300, delay: 150, ease: 'outCubic' })
    animate(rightWingRef.value, { rotateY: [60, 0], duration: 1300, delay: 200, ease: 'outCubic' })
  }
})

onUnmounted(() => {
  if (idleFloatAnim?.pause) idleFloatAnim.pause()
  if (hoverAnim?.pause) hoverAnim.pause()
})
</script>
