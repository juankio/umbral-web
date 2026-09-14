<template>
  <div
    ref="rootRef"
    class="relative w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing touch-none"
    style="perspective: 1200px"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
    @mouseleave="onMouseLeave"
  >
    <!-- Sombra volumétrica proyectada sobre el suelo del UMBRAL -->
    <div
      class="absolute bottom-[-10%] w-44 sm:w-56 h-8 bg-black/20 rounded-full blur-xl transition-transform duration-300 pointer-events-none"
      :style="shadowStyle"
    />

    <!-- Escultura Monolítica 3D Monumental de Tadao Ando -->
    <div
      ref="sculptureRef"
      class="relative w-full h-full will-change-transform"
      :style="monolith3DStyle"
      style="transform-style: preserve-3d"
    >
      <!-- Capa Profunda Z (Masa y Sombra Oclusiva) -->
      <div
        class="absolute inset-0 pointer-events-none opacity-60 filter blur-[1px]"
        style="transform: translateZ(-10px) scale(0.98)"
      >
        <svg viewBox="0 0 367 501" class="w-full h-full block" fill="none">
          <path d="M0 349.44L90.38 0L364.67 499.56L0 349.44Z" fill="#050505" />
        </svg>
      </div>

      <!-- Capa Central Z=0: Monolito Sólido de Obsidiana Arquitectónica Pulida -->
      <div class="absolute inset-0" style="transform: translateZ(0)">
        <svg viewBox="0 0 367 501" class="w-full h-full drop-shadow-2xl overflow-visible block" fill="none">
          <!-- Cara monumental principal sólida -->
          <path
            d="M0 349.44L90.38 0L364.67 499.56L0 349.44Z"
            fill="#0F0F0F"
            stroke="#1F1F1F"
            stroke-width="1.2"
          />
          <!-- Facetas geométricas de corte escultórico de Tadao Ando -->
          <polygon points="90.38,0 0,349.44 197.31,195.57" fill="#141414" stroke="#242424" stroke-width="0.8" />
          <polygon points="0,349.44 75.29,380.11 197.31,195.57" fill="#0A0A0A" stroke="#1A1A1A" stroke-width="0.8" />
          <polygon points="90.38,0 197.31,195.57 364.67,499.56" fill="#181818" stroke="#282828" stroke-width="0.8" />
          <polygon points="197.31,195.57 75.29,380.11 364.67,499.56" fill="#0D0D0D" stroke="#202020" stroke-width="0.8" />
          <!-- Trazos estructurales de encofrado -->
          <path d="M40.28 206.07L365.84 500.63" stroke="#333333" stroke-width="1.2" stroke-linecap="round" />
          <path d="M197.31 195.57L75.29 380.11" stroke="#383838" stroke-width="1.4" stroke-linecap="round" />
        </svg>
      </div>

      <!-- Capa Frontal Z=+8px: Aristas pulidas y reflejo especular reactivo -->
      <div
        class="absolute inset-0 pointer-events-none mix-blend-screen opacity-35"
        :style="specularStyle"
        style="transform: translateZ(8px)"
      />
    </div>

    <!-- Micro-insignia técnica de interacción 3D -->
    <div
      class="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase pointer-events-none select-none transition-opacity duration-500 whitespace-nowrap"
      :class="hasInteracted ? 'opacity-0' : 'opacity-70 animate-pulse'"
    >
      [ ROTAR 3D · DRAG ]
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const rootRef = ref<HTMLElement | null>(null)
const sculptureRef = ref<HTMLElement | null>(null)
const { y: scrollY } = useWindowScroll()

const rotX = ref(0)
const rotY = ref(0)
const velX = ref(0)
const velY = ref(0)
const hoverTiltX = ref(0)
const hoverTiltY = ref(0)
const isDragging = ref(false)
const hasInteracted = ref(false)
const isReducedMotion = ref(false)

let lastPointerX = 0
let lastPointerY = 0
let animFrameId: number | null = null
let idleTime = 0

const onPointerDown = (e: PointerEvent) => {
  if (isReducedMotion.value) return
  isDragging.value = true
  hasInteracted.value = true
  lastPointerX = e.clientX
  lastPointerY = e.clientY
  velX.value = 0
  velY.value = 0
  if (rootRef.value) {
    try { rootRef.value.setPointerCapture(e.pointerId) } catch (_) {}
  }
}

const onPointerMove = (e: PointerEvent) => {
  if (isReducedMotion.value) return
  if (isDragging.value) {
    const deltaX = e.clientX - lastPointerX
    const deltaY = e.clientY - lastPointerY
    velX.value = deltaY * 0.45
    velY.value = deltaX * 0.45
    rotX.value = Math.max(-45, Math.min(45, rotX.value - velX.value))
    rotY.value = Math.max(-65, Math.min(65, rotY.value + velY.value))
    lastPointerX = e.clientX
    lastPointerY = e.clientY
  } else if (rootRef.value) {
    const rect = rootRef.value.getBoundingClientRect()
    hoverTiltX.value = -((e.clientY - rect.top) / rect.height - 0.5) * 14
    hoverTiltY.value = ((e.clientX - rect.left) / rect.width - 0.5) * 16
  }
}

const onPointerUp = (e: PointerEvent) => {
  isDragging.value = false
  if (rootRef.value) {
    try { rootRef.value.releasePointerCapture(e.pointerId) } catch (_) {}
  }
}

const onMouseLeave = () => {
  if (!isDragging.value) {
    hoverTiltX.value = 0
    hoverTiltY.value = 0
  }
}

const updatePhysics = () => {
  idleTime += 0.02
  if (!isDragging.value) {
    // Inercia amortiguada
    rotX.value *= 0.94
    rotY.value *= 0.94
    velX.value *= 0.88
    velY.value *= 0.88
  }
  animFrameId = requestAnimationFrame(updatePhysics)
}

const scrollRotation = computed(() => {
  if (isReducedMotion.value) return { y: 0, z: 0, depth: 0 }
  const s = scrollY.value
  return {
    y: Math.min(30, s * 0.05),
    z: Math.min(10, s * 0.015),
    depth: -Math.min(60, s * 0.12)
  }
})

const idleFloat = computed(() => {
  if (isReducedMotion.value || isDragging.value) return { y: 0, roll: 0 }
  return {
    y: Math.sin(idleTime * 1.8) * 5,
    roll: Math.cos(idleTime * 1.2) * 1.2
  }
})

const monolith3DStyle = computed(() => {
  if (isReducedMotion.value) return {}
  const totalX = rotX.value + hoverTiltX.value
  const totalY = rotY.value + hoverTiltY.value + scrollRotation.value.y
  const totalZ = scrollRotation.value.z + idleFloat.value.roll
  const transY = idleFloat.value.y
  const transZ = scrollRotation.value.depth

  return {
    transform: `rotateX(${totalX.toFixed(2)}deg) rotateY(${totalY.toFixed(2)}deg) rotateZ(${totalZ.toFixed(2)}deg) translate3d(0, ${transY.toFixed(2)}px, ${transZ.toFixed(2)}px)`,
    transition: isDragging.value ? 'none' : 'transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)'
  }
})

const shadowStyle = computed(() => {
  if (isReducedMotion.value) return {}
  const scale = 1 - (idleFloat.value.y / 40)
  const shiftX = rotY.value * 0.8
  return {
    transform: `translateX(${shiftX}px) scale(${scale})`,
    opacity: 0.25 + (scale * 0.15)
  }
})

const specularStyle = computed(() => {
  const posX = 50 + (rotY.value + hoverTiltY.value) * 1.2
  const posY = 50 - (rotX.value + hoverTiltX.value) * 1.2
  return {
    background: `radial-gradient(circle at ${posX}% ${posY}%, rgba(255,255,255,0.45) 0%, transparent 60%)`
  }
})

onMounted(() => {
  if (!import.meta.client) return
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isReducedMotion.value) {
    animFrameId = requestAnimationFrame(updatePhysics)
  }
})

onUnmounted(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId)
})
</script>
