<template>
  <section class="relative w-full bg-[#1C1C1C] h-[calc(100dvh-72px)] lg:h-[calc(100dvh-80px)] flex flex-col justify-between overflow-hidden select-none">
    <!-- Vector Arquitectónico Oficial 1:1 Figma (Node 503:215 - Modo de aislamiento con rayos blancos) -->
    <div
      class="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/images/figma-node-503-215.svg"
        alt=""
        class="w-full h-full object-cover object-left lg:object-right opacity-60 sm:opacity-85 lg:opacity-100 select-none pointer-events-none"
        loading="eager"
      />
    </div>

    <!-- Espaciador superior para posicionar el titular en el tercio inferior -->
    <div class="flex-1 w-full min-h-[25vh] sm:min-h-0" />

    <!-- Contenedor anclado en la parte inferior izquierda con margen generoso -->
    <div class="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14 lg:pb-16 text-left">
      <h1
        ref="titleRef"
        class="font-barlow font-normal text-white text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] 2xl:text-[128px] leading-[0.92] tracking-tight text-left will-change-transform drop-shadow-md"
      >
        Integrantes de<br />Umbral
      </h1>
    </div>

    <!-- Marquesina anclada al ras inferior del Hero -->
    <AppMarquee class="relative z-10 flex-shrink-0" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'
import AppMarquee from '~/components/ui/AppMarquee.vue'

const titleRef = ref<HTMLElement | null>(null)
let heroAnim: any = null

onMounted(() => {
  if (!import.meta.client || !titleRef.value) return

  // Soporte estricto para reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  heroAnim = animate(titleRef.value, {
    opacity: [0, 1],
    translateY: [32, 0],
    duration: 950,
    delay: 80,
    ease: 'outExpo'
  })
})

onUnmounted(() => {
  heroAnim?.revert?.() || heroAnim?.pause?.()
})
</script>
