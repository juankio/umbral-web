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
      class="absolute bottom-[-10%] w-44 sm:w-56 h-8 bg-black/20 rounded-full blur-xl pointer-events-none"
      :style="shadowStyle"
    />

    <!-- Escultura Monolítica 3D Monumental de Tadao Ando -->
    <div
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
          <path d="M0 349.44L90.38 0L364.67 499.56L0 349.44Z" fill="#0F0F0F" stroke="#1F1F1F" stroke-width="1.2" />
          <polygon points="90.38,0 0,349.44 197.31,195.57" fill="#141414" stroke="#242424" stroke-width="0.8" />
          <polygon points="0,349.44 75.29,380.11 197.31,195.57" fill="#0A0A0A" stroke="#1A1A1A" stroke-width="0.8" />
          <polygon points="90.38,0 197.31,195.57 364.67,499.56" fill="#181818" stroke="#282828" stroke-width="0.8" />
          <polygon points="197.31,195.57 75.29,380.11 364.67,499.56" fill="#0D0D0D" stroke="#202020" stroke-width="0.8" />
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
import { ref, computed, onMounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const rootRef = ref<HTMLElement | null>(null)
const { y: scrollY } = useWindowScroll()

const rotX = ref(0), rotY = ref(0)
const hoverTiltX = ref(0), hoverTiltY = ref(0)
const isDragging = ref(false), hasInteracted = ref(false), isReducedMotion = ref(false)
let lastPointerX = 0, lastPointerY = 0

const onPointerDown = (e: PointerEvent) => {
  if (isReducedMotion.value) return
  isDragging.value = true
  hasInteracted.value = true
  lastPointerX = e.clientX
  lastPointerY = e.clientY
  if (rootRef.value) {
    try { rootRef.value.setPointerCapture(e.pointerId) } catch (_) {}
  }
}

const onPointerMove = (e: PointerEvent) => {
  if (isReducedMotion.value) return
  if (isDragging.value) {
    rotX.value = Math.max(-35, Math.min(35, rotX.value - (e.clientY - lastPointerY) * 0.4))
    rotY.value = Math.max(-55, Math.min(55, rotY.value + (e.clientX - lastPointerX) * 0.4))
    lastPointerX = e.clientX
    lastPointerY = e.clientY
  } else if (rootRef.value) {
    const rect = rootRef.value.getBoundingClientRect()
    hoverTiltX.value = -((e.clientY - rect.top) / rect.height - 0.5) * 8
    hoverTiltY.value = ((e.clientX - rect.left) / rect.width - 0.5) * 10
  }
}

const onPointerUp = (e: PointerEvent) => {
  isDragging.value = false
  rotX.value = 0
  rotY.value = 0
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

const scrollFactor = computed(() => {
  if (isReducedMotion.value || !import.meta.client) return 0
  return Math.min(Math.max(scrollY.value, 0) / 600, 1)
})

const monolith3DStyle = computed(() => {
  if (isReducedMotion.value) return {}
  const totalX = rotX.value + hoverTiltX.value
  const totalY = rotY.value + hoverTiltY.value + (scrollFactor.value * 12)
  const totalZ = scrollFactor.value * 3
  const transZ = -scrollFactor.value * 25

  return {
    transform: `rotateX(${totalX.toFixed(2)}deg) rotateY(${totalY.toFixed(2)}deg) rotateZ(${totalZ.toFixed(2)}deg) translateZ(${transZ.toFixed(2)}px)`,
    transition: isDragging.value ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const shadowStyle = computed(() => {
  if (isReducedMotion.value) return {}
  const shiftX = (rotY.value + scrollFactor.value * 12) * 0.5
  const scale = 1 - scrollFactor.value * 0.12
  return {
    transform: `translateX(${shiftX.toFixed(1)}px) scale(${scale.toFixed(2)})`,
    transition: isDragging.value ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const specularStyle = computed(() => {
  const posX = 50 + (rotY.value + hoverTiltY.value) * 0.9
  const posY = 50 - (rotX.value + hoverTiltX.value) * 0.9
  return {
    background: `radial-gradient(circle at ${posX.toFixed(1)}% ${posY.toFixed(1)}%, rgba(255,255,255,0.4) 0%, transparent 60%)`
  }
})

onMounted(() => {
  if (!import.meta.client) return
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>
