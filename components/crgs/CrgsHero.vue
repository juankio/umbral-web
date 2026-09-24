<template>
  <section
    class="relative bg-white overflow-hidden min-h-[75vh] sm:min-h-[85vh] lg:min-h-[calc(100vh-80px)] flex items-center select-text"
  >
    <!-- Contenedor del Título a la izquierda según Figma (#332:303 / #240:6) -->
    <div class="relative z-10 max-w-[1920px] mx-auto w-full px-6 sm:px-12 lg:px-20 xl:px-28 py-16 lg:py-24">
      <h1
        ref="titleRef"
        class="font-barlow font-semibold text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[145px] text-[#070707] leading-[0.92] tracking-tight max-w-2xl xl:max-w-3xl will-change-transform"
      >
        Centro Roberto<br />
        Garza Sada
      </h1>
    </div>

    <!-- Triángulo Monumental Negro 1:1 Figma (Vector 1: #332:308 / #240:11) con sutil parallax -->
    <div
      ref="polygonBoxRef"
      class="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 will-change-transform"
    >
      <svg
        viewBox="0 0 1920 1080"
        class="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <!-- Polígono del triángulo con desborde derecho exacto de Figma -->
        <polygon
          points="1693,150 2707,1180 503,1080"
          fill="#1C1C1C"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useParallaxMotion } from '~/composables/useParallaxMotion'

const titleRef = ref<HTMLElement | null>(null)
const polygonBoxRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()
useParallaxMotion(polygonBoxRef, 0.08, 35)

onMounted(() => {
  observeScrollReveal(titleRef, { type: 'heading', duration: 1000, delay: 100 })
})
</script>
