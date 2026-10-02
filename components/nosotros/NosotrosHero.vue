<template>
  <section class="relative w-full bg-[#1C1C1C] h-[calc(100dvh-72px)] lg:h-[calc(100dvh-80px)] flex flex-col justify-between overflow-hidden select-none">
    <!-- Vector Arquitectónico: Versión Desktop 1:1 Figma (Node 503:215 - Modo de aislamiento) -->
    <div
      class="hidden sm:block absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/images/figma-node-503-215.svg"
        alt=""
        class="w-full h-full object-cover object-right select-none pointer-events-none"
        loading="eager"
      />
    </div>

    <!-- Vector Arquitectónico: Versión Móvil Limpia y Proporcional (Líneas Finas de Perspectiva) -->
    <div
      class="sm:hidden absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end"
      aria-hidden="true"
    >
      <svg class="w-full h-full opacity-20" viewBox="0 0 390 700" fill="none" preserveAspectRatio="none">
        <line x1="420" y1="40" x2="0" y2="300" stroke="white" stroke-width="1.5" />
        <line x1="420" y1="85" x2="0" y2="335" stroke="white" stroke-width="1.5" />
        <line x1="420" y1="130" x2="0" y2="370" stroke="white" stroke-width="1.5" />
        <line x1="420" y1="175" x2="0" y2="405" stroke="white" stroke-width="1.5" />
        <line x1="420" y1="220" x2="0" y2="440" stroke="white" stroke-width="1.5" />
        <line x1="420" y1="265" x2="0" y2="475" stroke="white" stroke-width="1.5" />
        <line x1="420" y1="310" x2="0" y2="510" stroke="white" stroke-width="1.5" />
      </svg>
    </div>

    <!-- Espaciador superior -->
    <div class="flex-1 w-full" />

    <!-- Contenedor anclado en la parte inferior izquierda -->
    <div class="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 pb-8 sm:pb-12 lg:pb-14 text-left">
      <h1
        ref="titleRef"
        class="font-barlow font-normal text-white text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] 2xl:text-[128px] leading-[0.92] tracking-tight text-left will-change-transform"
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
