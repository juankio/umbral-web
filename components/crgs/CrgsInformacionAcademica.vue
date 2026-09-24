<template>
  <section
    id="informacion-academica"
    class="relative py-14 sm:py-20 lg:py-32 bg-[#1C1C1C] text-white overflow-hidden flex items-center justify-center select-text"
  >
    <div class="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-12">
      <!-- Díptico Diagonal 1:1 Figma (#332:312 a #332:326) con scroll reveal y hover -->
      <div class="flex flex-row items-center justify-center gap-2.5 sm:gap-6 lg:gap-8 relative">
        <!-- Bloque Izquierdo: Texto Arriba a la Izquierda + Triángulo Carreras Abajo -->
        <div ref="leftBlockRef" class="flex flex-col items-start w-[45%] sm:w-auto relative z-10 will-change-transform">
          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional"
            target="_blank"
            rel="noopener noreferrer"
            class="font-barlow text-sm sm:text-2xl lg:text-[38px] font-normal text-white hover:text-[#4BA550] transition-colors leading-[0.95] tracking-tight mb-2 sm:mb-4 select-text"
          >
            Más información<br />de carreras
          </a>

          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional"
            target="_blank"
            rel="noopener noreferrer"
            class="block group cursor-pointer w-full transition-transform duration-500 ease-out hover:scale-[1.03]"
            aria-label="Más información de carreras"
          >
            <AppImage
              src="/images/figma-carreras-triangle.webp"
              alt="Más información de carreras"
              img-class="w-full max-w-[150px] sm:max-w-[240px] md:max-w-[310px] lg:max-w-[360px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] drop-shadow-md"
              loading="lazy"
            />
          </a>
        </div>

        <!-- Barra Diagonal Blanca Central (Slash Inclinado "/" 1:1 Figma) con scroll reveal -->
        <div ref="slashRef" class="flex items-center justify-center px-0.5 sm:px-3 lg:px-5 select-none pointer-events-none self-center z-20 flex-shrink-0 will-change-transform">
          <div
            class="w-2 sm:w-3 lg:w-3.5 h-[180px] sm:h-[280px] md:h-[360px] lg:h-[430px] bg-white rounded-full rotate-[16deg] transform origin-center shadow-md transition-transform duration-500"
          />
        </div>

        <!-- Bloque Derecho: Triángulo Integrantes Arriba + Texto Abajo a la Derecha -->
        <div ref="rightBlockRef" class="flex flex-col items-end w-[45%] sm:w-auto relative z-10 -mt-4 sm:-mt-8 lg:-mt-12 will-change-transform">
          <NuxtLink
            to="/nosotros"
            class="block group cursor-pointer w-full flex justify-end transition-transform duration-500 ease-out hover:scale-[1.03]"
            aria-label="Integrantes de Umbral"
          >
            <AppImage
              src="/images/figma-posgrados-triangle.webp"
              alt="Integrantes de Umbral"
              img-class="w-full max-w-[150px] sm:max-w-[240px] md:max-w-[310px] lg:max-w-[360px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] drop-shadow-md"
              loading="lazy"
            />
          </NuxtLink>

          <NuxtLink
            to="/nosotros"
            class="font-barlow text-sm sm:text-2xl lg:text-[38px] font-normal text-white hover:text-[#4BA550] transition-colors leading-[0.95] tracking-tight text-right mt-2 sm:mt-4 select-text"
            aria-label="Integrantes de Umbral"
          >
            Integrantes<br />de Umbral
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

const leftBlockRef = ref<HTMLElement | null>(null)
const slashRef = ref<HTMLElement | null>(null)
const rightBlockRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(leftBlockRef, { type: 'paragraph', delay: 100 })
  observeScrollReveal(slashRef, { type: 'triangle', delay: 200 })
  observeScrollReveal(rightBlockRef, { type: 'paragraph', delay: 300 })
})
</script>
