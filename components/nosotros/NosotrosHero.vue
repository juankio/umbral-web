<template>
  <section class="relative w-full bg-white overflow-hidden select-none pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-14 lg:pb-20">
    <!-- Triángulo Monumental Negro en esquina superior derecha (1:1 Figma Node 407:67) con parallax y hover -->
    <div
      ref="triangleRef"
      class="absolute top-4 sm:top-6 lg:top-8 right-0 lg:right-2 w-[30vw] sm:w-[36vw] lg:w-[32vw] max-w-[580px] min-w-[120px] sm:min-w-[200px] lg:min-w-[260px] select-none z-0 translate-x-[4%] sm:translate-x-[2%] lg:translate-x-0 will-change-transform pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 991 603"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-auto block select-none pointer-events-none"
      >
        <path d="M0 535.815L281.43 0L990.673 603L0 535.815Z" fill="#1C1C1C" />
      </svg>
    </div>

    <!-- Contenido Monumental del Hero (1:1 Figma Node 407:4) con scroll reveal -->
    <div class="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-28">
      <div class="max-w-[1000px] pt-4 sm:pt-6 lg:pt-8">
        <h1
          ref="titleRef"
          class="font-barlow font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#070707] leading-[0.92] tracking-tight will-change-transform"
        >
          Integrantes de <br />Umbral
        </h1>
      </div>
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
