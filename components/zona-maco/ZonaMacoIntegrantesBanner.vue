<template>
  <section
    id="integrantes-banner"
    class="relative py-16 sm:py-24 lg:py-28 bg-[#1C1C1C] text-white border-t border-neutral-800 overflow-hidden select-none"
  >
    <!-- Fondo geométrico arquitectónico sutil (Triángulo Umbral) con parallax -->
    <div
      ref="triangleRef"
      class="absolute -right-8 -bottom-12 w-64 sm:w-80 lg:w-[440px] opacity-[0.05] pointer-events-none select-none will-change-transform"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 609 459"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-auto block"
      >
        <path
          d="M97.5656 459L0 0L608.937 422.109L97.5656 459Z"
          fill="currentColor"
          class="text-white"
        />
      </svg>
    </div>

    <div class="relative max-w-[1480px] mx-auto px-6 sm:px-12 lg:px-16 text-center z-10">
      <!-- Título de llamada a la acción con scroll reveal -->
      <h2 ref="headingRef" class="font-barlow font-normal text-4xl sm:text-6xl lg:text-7xl text-white text-center leading-none tracking-tight">
        Integrantes de Umbral
      </h2>

      <!-- Divisor arquitectónico con expansión horizontal -->
      <div ref="dividerRef" class="h-[2px] sm:h-[3px] bg-white/25 max-w-[860px] mx-auto mt-4 mb-6 sm:mb-8 will-change-transform" />

      <!-- Subtexto descriptivo -->
      <p ref="subtextRef" class="font-barlow font-light text-base sm:text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed select-text">
        Conoce al equipo de diseño, alumnas y profesores asesores detrás de UMBRAL \ CRGS
      </p>

      <!-- Enlace arquitectónico con flecha hacia /nosotros y hover magnético -->
      <div class="mt-8 sm:mt-11 flex justify-center">
        <NuxtLink
          to="/nosotros"
          class="group inline-flex items-center gap-3.5 sm:gap-4 px-8 sm:px-10 py-3.5 sm:py-4 border border-white text-white bg-transparent hover:bg-white hover:text-[#1C1C1C] transition-all duration-300 ease-out font-barlow text-lg sm:text-xl font-normal tracking-wide cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-sm hover:shadow-2xl active:scale-[0.98]"
          aria-label="Conocer integrantes de Umbral"
          @mouseenter="handleArrowEnter(arrowRef, 8)"
          @mouseleave="handleArrowLeave(arrowRef)"
        >
          <span>Conocer integrantes</span>
          <span
            ref="arrowRef"
            class="font-mono text-xl sm:text-2xl inline-block will-change-transform transition-transform duration-200"
            aria-hidden="true"
          >
            →
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useHoverMotion } from '~/composables/useHoverMotion'
import { useParallaxMotion } from '~/composables/useParallaxMotion'

const headingRef = ref<HTMLElement | null>(null)
const dividerRef = ref<HTMLElement | null>(null)
const subtextRef = ref<HTMLElement | null>(null)
const arrowRef = ref<HTMLElement | null>(null)
const triangleRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()
const { handleArrowEnter, handleArrowLeave } = useHoverMotion()
useParallaxMotion(triangleRef, 0.07, 30)

onMounted(() => {
  observeScrollReveal(headingRef, { type: 'heading', delay: 50 })
  observeScrollReveal(dividerRef, { type: 'divider', origin: 'center', delay: 150 })
  observeScrollReveal(subtextRef, { type: 'paragraph', delay: 200 })
})
</script>
