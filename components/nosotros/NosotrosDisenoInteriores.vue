<template>
  <section id="diseno-interiores" class="relative w-full bg-white pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 scroll-mt-24 flex flex-col justify-center overflow-hidden select-text">
    <!-- Encabezado de Sección 1:1 Figma (Node 413:144) con scroll reveal -->
    <div class="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 text-center">
      <h2 ref="headingRef" class="font-barlow font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#070707] text-center leading-tight tracking-tight">
        Stand de Diseño de Interiores
      </h2>

      <!-- Bajada Institucional (1:1 Figma) -->
      <p ref="subtextRef" class="font-barlow font-normal text-xs sm:text-sm md:text-base text-[#0B0B0B]/80 text-center max-w-2xl mx-auto leading-relaxed mt-1.5 mb-2.5">
        Alumnas de la Licenciatura de Diseño de Interiores conceptualizaron la museografía y el espacio expositivo del proyecto UMBRAL \ CRGS
      </p>

      <!-- Línea divisoria fina negra con expansión horizontal -->
      <div ref="lineRef" class="w-full max-w-[1676px] mx-auto h-[1px] sm:h-[2px] bg-[#030303] my-2 sm:my-3 will-change-transform" />
    </div>

    <!-- Carrusel Infinito con 3 Triángulos Negros Arquitectónicos (sin fotos ni nombres) -->
    <NosotrosInfiniteCarousel :items="triangulosInteriores" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import NosotrosInfiniteCarousel, { type CarouselItem } from './NosotrosInfiniteCarousel.vue'

const headingRef = ref<HTMLElement | null>(null)
const subtextRef = ref<HTMLElement | null>(null)
const lineRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(headingRef, { type: 'heading', delay: 50 })
  observeScrollReveal(subtextRef, { type: 'paragraph', delay: 120 })
  observeScrollReveal(lineRef, { type: 'divider', origin: 'center', delay: 200 })
})

// 3 triángulos negros arquitectónicos como placeholder interactivo con efecto de carrusel y giro 3D
const triangulosInteriores: CarouselItem[] = [
  {
    name: '',
    role: '',
    image: '/images/triangulo-negro-stand.svg',
    rotation: 4
  },
  {
    name: '',
    role: '',
    image: '/images/triangulo-negro-stand.svg',
    rotation: -5
  },
  {
    name: '',
    role: '',
    image: '/images/triangulo-negro-stand.svg',
    rotation: 3
  }
]
</script>
