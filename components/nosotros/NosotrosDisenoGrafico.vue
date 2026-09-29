<template>
  <section id="diseno-grafico" class="relative w-full bg-white pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 scroll-mt-24 lg:min-h-[calc(100vh-80px)] lg:max-h-[960px] flex flex-col justify-center overflow-hidden select-text">
    <!-- Encabezado de Sección 1:1 Figma (Node 417:275 & 417:273) con scroll reveal -->
    <div class="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 text-center">
      <h2 ref="headingRef" class="font-barlow font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#070707] text-center leading-tight tracking-tight">
        Stand de Diseño Gráfico
      </h2>

      <!-- Bajada Institucional (1:1 Figma Node 417:273) -->
      <p ref="subtextRef" class="font-barlow font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-[#0B0B0B]/85 text-center leading-snug sm:leading-relaxed max-w-3xl sm:max-w-4xl mx-auto mt-2.5 sm:mt-3.5 mb-3.5 sm:mb-5">
        Alumnas de la Licenciatura de Diseño Gráfico de 7mo semestre diseñaron el sistema de comunicación visual completo del proyecto UMBRAL \ CRGS
      </p>

      <!-- Línea divisoria fina negra con expansión horizontal -->
      <div ref="lineRef" class="w-full max-w-[1676px] mx-auto h-[1px] sm:h-[2px] bg-[#030303] my-3 sm:my-4 will-change-transform" />
    </div>

    <!-- Carrusel Infinito con Giros Dinámicos -->
    <NosotrosInfiniteCarousel :items="integrantesGrafico" />
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

const integrantesGrafico: CarouselItem[] = [
  {
    name: 'Miranda Salazar',
    role: 'Estudiante de Diseño Gráfico',
    image: '/images/integrantes-interiores-center.webp',
    rotation: -4
  },
  {
    name: 'Natalia Núñez',
    role: 'Estudiante de Diseño Gráfico',
    image: '/images/integrantes-interiores-left.webp',
    rotation: 5
  },
  {
    name: 'Luciana Yañez',
    role: 'Estudiante de Diseño Gráfico',
    image: '/images/integrantes-interiores-right.webp',
    rotation: -3
  }
]
</script>
