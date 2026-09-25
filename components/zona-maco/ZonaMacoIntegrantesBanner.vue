<template>
  <section
    id="integrantes-banner"
    class="relative w-full bg-[#1C1C1C] text-white min-h-[calc(100vh-80px)] lg:min-h-screen lg:h-[calc(100vh-80px)] flex flex-col justify-center items-center py-16 sm:py-20 lg:py-0 overflow-hidden select-none scroll-mt-[72px]"
  >
    <!-- Contenedor Maestro Centrado -->
    <div class="relative w-full max-w-[1540px] mx-auto px-6 sm:px-12 lg:px-16 my-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16">
        <!-- Columna Izquierda: Título y Triángulo -->
        <div class="relative lg:col-span-7 flex items-center justify-start min-h-[140px] sm:min-h-[200px] lg:min-h-[240px]">
          <!-- Triángulo Amarillo Oficial (#FDCF2C, umbral.gold) Centrado Verticalmente con Parallax -->
          <div class="absolute left-0 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] lg:w-[540px] xl:w-[620px] 2xl:w-[660px] select-none pointer-events-none z-0 opacity-80 lg:opacity-100">
            <div
              ref="triangleRef"
              class="w-full h-auto will-change-transform"
            >
              <svg
                viewBox="0 0 609 459"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-auto block select-none"
              >
                <path
                  d="M97.5656 459L0 0L608.937 422.109L97.5656 459Z"
                  fill="#FDCF2C"
                />
              </svg>
            </div>
          </div>

          <!-- Título Cursivo Monumental con Enlace a /nosotros -->
          <div ref="titleRef" class="relative z-10 w-full pointer-events-auto">
            <NuxtLink
              to="/nosotros"
              class="group inline-block focus:outline-none"
              aria-label="Conocer integrantes de Umbral"
            >
              <h2 class="font-barlow italic font-medium text-white text-5xl sm:text-7xl md:text-8xl lg:text-[86px] xl:text-[100px] 2xl:text-[112px] tracking-tight leading-none drop-shadow-sm transition-all duration-300 group-hover:opacity-90">
                <span class="group-hover:underline underline-offset-8 decoration-2 decoration-white">Integrantes Umbral</span>
              </h2>
            </NuxtLink>
          </div>
        </div>

        <!-- Columna Derecha: Párrafo Descriptivo Institucional -->
        <div class="lg:col-span-5 flex items-center justify-start lg:justify-end">
          <p
            ref="paragraphRef"
            class="font-barlow text-base sm:text-xl lg:text-[22px] xl:text-[26px] text-white/95 leading-relaxed text-left lg:text-right select-none max-w-full lg:max-w-[560px]"
          >
            Conoce al equipo docente, profesores asesores y alumnas de
            Diseño Gráfico e Interiores que conceptualizaron el sistema
            visual y la museografía de <strong class="font-bold text-white">UMBRAL \ CRGS.</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useParallaxMotion } from '~/composables/useParallaxMotion'

const paragraphRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const triangleRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()
useParallaxMotion(triangleRef, 0.08, 30)

onMounted(() => {
  observeScrollReveal(paragraphRef, { type: 'paragraph', delay: 100 })
  observeScrollReveal(titleRef, { type: 'heading', delay: 200 })
  observeScrollReveal(triangleRef, { type: 'triangle', delay: 150 })
})
</script>
