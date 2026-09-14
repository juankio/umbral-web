<template>
  <section
    ref="sectionRef"
    class="bg-white py-28 sm:py-36 lg:py-48 relative overflow-hidden flex items-center justify-center select-none"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Triángulo Arquitectónico Tadao Ando (Azul Pastel) -->
    <div
      ref="triangleRef"
      class="absolute pointer-events-none flex items-center justify-center w-[340px] sm:w-[540px] md:w-[700px] lg:w-[860px] aspect-[500/320]"
      :style="mouseParallaxStyle"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 320"
        class="w-full h-full overflow-visible drop-shadow-[0_20px_45px_rgba(165,188,213,0.35)] animate-triangle-breathe"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,180 500,0 350,320" fill="#A5BCD5" />
      </svg>
    </div>

    <!-- Titular Monumental Centrado directamente sobre el triángulo -->
    <h2
      class="font-barlow font-bold sm:font-semibold text-5xl sm:text-7xl lg:text-8xl text-neutral-950 text-center leading-[1.05] tracking-tight drop-shadow-sm select-none z-10 px-4"
    >
      El futuro inspira nuestra<br />
      mejor versión.
    </h2>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { animate } from 'animejs'

const sectionRef = ref<HTMLElement | null>(null)
const triangleRef = ref<HTMLElement | null>(null)
const mouseOffset = ref({ x: 0, y: 0 })
const isReducedMotion = ref(false)

const mouseParallaxStyle = computed(() => {
  if (isReducedMotion.value) return {}
  return {
    transform: `translate3d(${mouseOffset.value.x}px, ${mouseOffset.value.y}px, 0)`,
    transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const handleMouseMove = (e: MouseEvent) => {
  if (isReducedMotion.value || !sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  const normX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
  const normY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
  mouseOffset.value = { x: normX * 14, y: normY * 10 }
}

const handleMouseLeave = () => {
  mouseOffset.value = { x: 0, y: 0 }
}

onMounted(() => {
  if (!import.meta.client) return
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (isReducedMotion.value || !triangleRef.value) return

  // Entrada monumental a 60fps con Anime.js
  animate(triangleRef.value, {
    opacity: [0, 1],
    scale: [0.92, 1],
    duration: 1200,
    ease: 'outExpo'
  })
})
</script>

<style scoped>
@keyframes triangleBreathe {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
  50% {
    transform: translate3d(0, -10px, 0) rotate(1.2deg) scale(1.025);
  }
}

.animate-triangle-breathe {
  will-change: transform;
  transform-origin: 50% 50%;
  animation: triangleBreathe 6.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-triangle-breathe {
    animation: none !important;
    transform: none !important;
  }
}
</style>
