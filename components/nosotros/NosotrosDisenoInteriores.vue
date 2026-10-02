<template>
  <section id="diseno-interiores" class="relative w-full bg-white pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 scroll-mt-24 select-text">
    <div class="w-full max-w-[1500px] xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12">
      <!-- Línea horizontal completa antes de Stand De Diseño De Interiores (1:1 Figma) -->
      <div
        ref="lineRef"
        class="h-[1.5px] bg-[#070707] w-full mb-12 sm:mb-14 lg:mb-16 will-change-transform"
      />

      <!-- Encabezado oficial con triángulo rosa de Figma detrás (Nodo 503:224) -->
      <div class="relative flex items-center justify-center py-4 sm:py-6 mt-6 sm:mt-8 lg:mt-10 mb-16 sm:mb-20 lg:mb-24">
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            ref="triangleRef"
            viewBox="0 0 364 211"
            class="w-[240px] sm:w-[300px] lg:w-[340px] xl:w-[364px] h-auto mx-auto select-none pointer-events-none will-change-transform"
            fill="none"
            aria-hidden="true"
          >
            <path d="M243.955 210.248L0 140.763L364 0L243.955 210.248Z" fill="#D291A1" />
          </svg>
        </div>

        <h2
          ref="headingRef"
          class="relative z-10 font-barlow font-normal text-4xl sm:text-5xl lg:text-6xl text-[#070707] text-center leading-tight tracking-tight will-change-transform"
        >
          Stand De Diseño De Interiores
        </h2>
      </div>

      <!-- Grid editorial de 3 alumnas (Desplazada a la DERECHA según Figma Frame 407:2) -->
      <div class="w-full max-w-[1050px] lg:max-w-[1150px] ml-auto">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <NosotrosCreadorCard
            v-for="alumno in integrantesInteriores"
            :key="alumno.name"
            :alumno="alumno"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import NosotrosCreadorCard, { type AlumnoCreador } from './NosotrosCreadorCard.vue'

const triangleRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const lineRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(lineRef, { type: 'divider', origin: 'left center', delay: 40 })
  observeScrollReveal(triangleRef, { type: 'triangle', delay: 80 })
  observeScrollReveal(headingRef, { type: 'heading', delay: 120 })
})

const integrantesInteriores: AlumnoCreador[] = [
  {
    name: 'Yanetsy Reta',
    career: 'Diseño De Interiores',
    image: '/images/figma-interiores-yanetsy-clean.webp'
  },
  {
    name: 'Regina García',
    career: 'Diseño De Interiores',
    image: '/images/figma-interiores-regina-clean.webp'
  },
  {
    name: 'Andrea Tamez',
    career: 'Diseño De Interiores',
    image: '/images/figma-interiores-andrea-clean.webp'
  }
]
</script>
