<template>
  <section id="asesores-proyectos" class="relative w-full bg-white pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 scroll-mt-24 lg:min-h-[calc(100vh-80px)] lg:max-h-[960px] flex flex-col justify-center overflow-hidden select-text">
    <!-- Encabezado de Sección 1:1 Figma (Node 407:65 & 417:268) con scroll reveal -->
    <div class="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 text-center">
      <h2 ref="headingRef" class="font-barlow font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#070707] text-center leading-tight tracking-tight">
        Asesores de Proyectos
      </h2>

      <!-- Bajada Institucional (1:1 Figma Node 417:268) -->
      <p ref="subtextRef" class="font-barlow font-normal text-xs sm:text-sm md:text-base text-[#0B0B0B]/80 text-center max-w-2xl mx-auto leading-relaxed mt-1.5 mb-2.5">
        Profesores de la Escuela de Arte y Diseño fueron asesores y guías durante el proceso de los proyectos seleccionados.
      </p>

      <!-- Línea divisoria fina negra con expansión horizontal -->
      <div ref="lineRef" class="w-full max-w-[1676px] mx-auto h-[1px] sm:h-[2px] bg-[#030303] my-2 sm:my-3 will-change-transform" />
    </div>

    <!-- Carrusel Infinito con Giros Dinámicos (Figma) -->
    <NosotrosInfiniteCarousel :items="asesores" />
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

const asesores: CarouselItem[] = [
  {
    name: 'Natalia Ceballos',
    role: 'Project Lead',
    image: '/images/asesor-natalia-tri.webp',
    rotation: -4
  },
  {
    name: 'Sergio Trujillo',
    role: 'Asesor de Diseño Gráfico',
    image: '/images/asesor-sergio-tri.webp',
    rotation: 5
  },
  {
    name: 'Edgar Morejón',
    role: 'Asesor de Diseño de Modas',
    image: '/images/asesor-edgar-tri.webp',
    rotation: -5
  },
  {
    name: 'Agustín Plancarte',
    role: 'Asesor de Diseño Industrial',
    image: '/images/asesor-agustin-tri.webp',
    rotation: 4
  },
  {
    name: 'Amparo Vázquez',
    role: 'Asesora Invitada',
    image: '/images/asesor-amparo-tri.webp',
    rotation: -3
  },
  {
    name: 'Nohemi Gamboa',
    role: 'Asesora Invitada',
    image: '/images/asesor-nohemi-tri.webp',
    rotation: 5
  },
  {
    name: 'Jessica Ochoa',
    role: 'Asesora Invitada',
    image: '/images/asesor-jessica-tri.webp',
    rotation: -4
  }
]
</script>
