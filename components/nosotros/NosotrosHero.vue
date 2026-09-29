<template>
  <section class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white flex items-center overflow-hidden select-none">
    <!-- Triángulo Monumental Negro Centrado Verticalmente con Parallax -->
    <div
      class="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 lg:right-12 xl:right-16 w-[24vw] sm:w-[26vw] lg:w-[24vw] max-w-[420px] sm:max-w-[460px] lg:max-w-[500px] xl:max-w-[540px] will-change-transform pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      <div
        ref="triangleRef"
        class="w-full h-auto will-change-transform"
      >
        <svg
          viewBox="0 0 991 603"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-auto block select-none pointer-events-none"
        >
          <path d="M0 603L281.43 0L990.673 603Z" fill="#1C1C1C" />
        </svg>
      </div>
    </div>

    <!-- Contenido Monumental del Hero con scroll reveal -->
    <div class="relative z-10 max-w-[1720px] w-full mx-auto px-6 sm:px-12 lg:px-20 xl:px-28 flex items-center justify-between">
      <div class="max-w-[1000px]">
        <h1
          ref="titleRef"
          class="font-barlow font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#070707] leading-[0.92] tracking-tight will-change-transform"
        >
          Integrantes de <br />Umbral
        </h1>
      </div>
    </div>

    <!-- Indicador de scroll discreto (Cierre inferior de pantalla) -->
    <div class="absolute bottom-6 inset-x-0 flex justify-center z-10">
      <a
        href="#asesores-proyectos"
        class="group flex flex-col items-center gap-1.5 font-barlow text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-colors"
        aria-label="Ir a Asesores de Proyectos"
      >
        <span>Descubrir</span>
        <svg
          class="w-4 h-4 transition-transform group-hover:translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useParallaxMotion } from '~/composables/useParallaxMotion'

const titleRef = ref<HTMLElement | null>(null)
const triangleRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()
useParallaxMotion(triangleRef, 0.08, 30)

onMounted(() => {
  observeScrollReveal(titleRef, { type: 'heading', delay: 80 })
  observeScrollReveal(triangleRef, { type: 'triangle', delay: 180 })
})
</script>
