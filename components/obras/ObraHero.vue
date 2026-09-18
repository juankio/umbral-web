<template>
  <section class="relative w-full bg-white pt-8 pb-12 lg:pt-14 lg:pb-16 overflow-hidden select-none">
    <!-- Vector arquitectónico lateral izquierdo (Figma node 112:161) -->
    <div
      ref="leftVectorRef"
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-10 lg:-translate-x-6 w-60 sm:w-80 lg:w-[480px] xl:w-[560px] pointer-events-none z-0 opacity-95 will-change-transform animate-float-left"
    >
      <img
        src="/images/obra-hero-left-vector.svg"
        alt=""
        class="w-full h-auto drop-shadow-2xl"
        draggable="false"
      />
    </div>

    <!-- Vector arquitectónico lateral derecho (Figma node 112:163) -->
    <div
      ref="rightVectorRef"
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-10 lg:translate-x-6 w-60 sm:w-80 lg:w-[480px] xl:w-[560px] pointer-events-none z-0 opacity-95 will-change-transform animate-float-right"
    >
      <img
        src="/images/obra-hero-right-vector.svg"
        alt=""
        class="w-full h-auto drop-shadow-2xl"
        draggable="false"
      />
    </div>

    <!-- Contenedor Central: Fotografía enmarcada + Título 96px Medium -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <!-- Marco arquitectónico de la obra (Figma 476 x 526 px) -->
      <div
        ref="photoBoxRef"
        class="relative w-[260px] sm:w-[360px] lg:w-[476px] aspect-[476/526] bg-white border border-neutral-300 shadow-xl overflow-hidden group cursor-pointer"
      >
        <img
          :src="obra.heroImage || obra.gallery?.[0]"
          :alt="obra.title"
          class="w-full h-full object-cover grayscale-[4%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
        />
        <div class="absolute inset-0 border border-black/10 pointer-events-none" />
      </div>

      <!-- Título de la obra centrado (Figma: Barlow Condensed Medium 96px) -->
      <h1
        ref="titleRef"
        class="font-barlow font-medium text-5xl sm:text-7xl md:text-8xl lg:text-[96px] text-black uppercase tracking-tight leading-none mt-6 sm:mt-8"
      >
        {{ obra.title }}
      </h1>
    </div>

    <!-- Línea divisoria completa (Figma Line 6: w:1920, 4px solid #030303) -->
    <div
      ref="dividerRef"
      class="absolute bottom-0 left-0 right-0 w-full h-[4px] bg-[#030303] origin-left"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animate } from 'animejs'
import type { Obra } from '~/composables/useObras'

defineProps<{
  obra: Obra
}>()

const photoBoxRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const dividerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // Entrada armónica orquestada a 60fps con Anime.js
  if (photoBoxRef.value) {
    animate(photoBoxRef.value, {
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.96, 1],
      duration: 900,
      ease: 'outQuart'
    })
  }

  if (titleRef.value) {
    animate(titleRef.value, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 900,
      delay: 200,
      ease: 'outQuart'
    })
  }

  if (dividerRef.value) {
    animate(dividerRef.value, {
      scaleX: [0, 1],
      duration: 1000,
      delay: 350,
      ease: 'outExpo'
    })
  }
})
</script>

<style scoped>
@keyframes floatLeft {
  0%, 100% {
    transform: translateY(-50%) translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translateY(-50%) translate3d(6px, -8px, 0) rotate(0.8deg);
  }
}

@keyframes floatRight {
  0%, 100% {
    transform: translateY(-50%) translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translateY(-50%) translate3d(-6px, 8px, 0) rotate(-0.8deg);
  }
}

.animate-float-left {
  animation: floatLeft 8s ease-in-out infinite;
}

.animate-float-right {
  animation: floatRight 8.5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-float-left,
  .animate-float-right {
    animation: none;
  }
}
</style>
