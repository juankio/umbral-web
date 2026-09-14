<template>
  <section class="relative w-full bg-white pt-10 pb-14 lg:pt-16 lg:pb-20 overflow-hidden select-none border-b border-neutral-200">
    <!-- Triángulo negro lateral izquierdo con flotación sutil como gif -->
    <div
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 sm:-translate-x-10 lg:-translate-x-4 w-52 sm:w-72 lg:w-[420px] pointer-events-none z-0 will-change-transform opacity-95 animate-float-left"
    >
      <svg viewBox="0 0 380 460" class="w-full h-auto drop-shadow-2xl" fill="none">
        <polygon points="0,0 380,230 0,460" fill="#0A0A0A" />
      </svg>
    </div>

    <!-- Triángulo negro lateral derecho con flotación sutil en contrapunto -->
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 sm:translate-x-10 lg:translate-x-4 w-52 sm:w-72 lg:w-[420px] pointer-events-none z-0 will-change-transform opacity-95 animate-float-right"
    >
      <svg viewBox="0 0 380 460" class="w-full h-auto drop-shadow-2xl" fill="none">
        <polygon points="380,0 0,230 380,460" fill="#0A0A0A" />
      </svg>
    </div>

    <!-- Contenido central: Foto enmarcada + Título -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <!-- Marco Cuadrado de la Obra según Figma -->
      <div class="w-[280px] sm:w-[340px] md:w-[390px] aspect-square bg-neutral-100 border border-neutral-200 shadow-2xl overflow-hidden group">
        <img
          :src="obra.heroImage || obra.gallery?.[0]"
          :alt="obra.title"
          class="w-full h-full object-cover grayscale-[8%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
      </div>

      <!-- Título de la Obra Centrado -->
      <h1 class="font-barlow font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-950 uppercase tracking-tight leading-none mt-6 sm:mt-8">
        {{ obra.title }}
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Obra } from '~/composables/useObras'

defineProps<{
  obra: Obra
}>()
</script>

<style scoped>
@keyframes floatLeft {
  0%, 100% {
    transform: translateY(-50%) translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translateY(-50%) translate3d(8px, -6px, 0) rotate(1.2deg);
  }
}

@keyframes floatRight {
  0%, 100% {
    transform: translateY(-50%) translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translateY(-50%) translate3d(-8px, 6px, 0) rotate(-1.2deg);
  }
}

.animate-float-left {
  animation: floatLeft 6.8s ease-in-out infinite;
}

.animate-float-right {
  animation: floatRight 7.6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-float-left,
  .animate-float-right {
    animation: none;
  }
}
</style>
