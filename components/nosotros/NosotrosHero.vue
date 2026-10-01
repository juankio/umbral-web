<template>
  <section class="relative w-full py-12 sm:py-16 lg:py-20 min-h-auto lg:min-h-[46vh] bg-white flex flex-col justify-center overflow-hidden select-none border-b border-neutral-100">
    <!-- Contenido Monumental del Hero con scroll reveal -->
    <div class="relative z-10 max-w-[1720px] w-full mx-auto px-6 sm:px-12 lg:px-20 xl:px-28">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10">
        <!-- Titular Monumental -->
        <div class="max-w-[900px]">
          <span class="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#070707]/60 uppercase block mb-3">
            Equipo & Comunidad · CRGS
          </span>
          <h1
            ref="titleRef"
            class="font-barlow font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] text-[#070707] leading-[0.92] tracking-tight will-change-transform"
          >
            Integrantes de <br />Umbral
          </h1>
        </div>

        <!-- Triángulo Arquitectónico Negro Interactivo -->
        <div
          ref="triangleContainerRef"
          class="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] xl:max-w-[480px] self-end lg:self-center cursor-pointer will-change-transform"
          @mousemove="handleOrigamiMove(triangleRef, $event)"
          @mouseleave="handleOrigamiLeave(triangleRef)"
        >
          <div ref="triangleRef" class="w-full h-auto will-change-transform drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]">
            <svg
              viewBox="0 0 991 603"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-auto block select-none"
            >
              <path d="M0 603L281.43 0L990.673 603Z" fill="#1C1C1C" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Ancla visual inmediata hacia Asesores de Proyectos -->
      <div class="mt-8 sm:mt-12 pt-6 border-t border-neutral-100 flex items-center justify-between">
        <a
          href="#asesores-proyectos"
          class="group inline-flex items-center gap-3 font-barlow text-sm sm:text-base font-medium tracking-tight text-[#070707] hover:text-[#834384] transition-colors"
          aria-label="Ir a Asesores de Proyectos"
        >
          <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/20 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all duration-200">
            <svg class="w-3.5 h-3.5 transform transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
          <span class="tracking-wide uppercase font-mono text-xs sm:text-sm">Explorar Asesores y Equipos</span>
        </a>

        <span class="hidden sm:inline-block font-mono text-xs text-neutral-400 uppercase tracking-widest">
          Centro Roberto Garza Sada · UDEM
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useParallaxMotion } from '~/composables/useParallaxMotion'
import { useHoverMotion } from '~/composables/useHoverMotion'

const titleRef = ref<HTMLElement | null>(null)
const triangleContainerRef = ref<HTMLElement | null>(null)
const triangleRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()
const { handleOrigamiMove, handleOrigamiLeave } = useHoverMotion()
useParallaxMotion(triangleContainerRef, 0.06, 24)

onMounted(() => {
  observeScrollReveal(titleRef, { type: 'heading', delay: 60 })
  observeScrollReveal(triangleContainerRef, { type: 'triangle', delay: 140 })
})
</script>
