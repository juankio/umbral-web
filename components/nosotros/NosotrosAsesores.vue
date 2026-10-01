<template>
  <section id="asesores-proyectos" class="relative w-full bg-white pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 scroll-mt-24 lg:min-h-[calc(100vh-80px)] lg:max-h-[960px] flex flex-col justify-center overflow-hidden select-text">
    <!-- Encabezado de Sección 1:1 Figma (Node 407:65 & 417:268) con scroll reveal -->
    <div class="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 text-center">
      <h2 ref="headingRef" class="font-barlow font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#070707] text-center leading-tight tracking-tight">
        Asesores de Proyectos
      </h2>

      <!-- Bajada Institucional (1:1 Figma Node 417:268) -->
      <p ref="subtextRef" class="font-barlow font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-[#0B0B0B]/85 text-center leading-snug sm:leading-relaxed max-w-3xl sm:max-w-4xl mx-auto mt-2.5 sm:mt-3.5 mb-3.5 sm:mb-5">
        Profesores de la Escuela de Arte y Diseño fueron asesores y guías durante el proceso de los proyectos seleccionados.
      </p>

      <!-- Línea divisoria fina negra con expansión horizontal -->
      <div ref="lineRef" class="w-full max-w-[1676px] mx-auto h-[1px] sm:h-[2px] bg-[#030303] my-3 sm:my-4 will-change-transform" />
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
    name: 'Jessica Ochoa',
    role: 'Decana de la Escuela de Arte y Diseño',
    image: '/images/asesor-jessica-tri.webp',
    rotation: -6,
    facetShape: 'polygon(50% 0%, 100% 100%, 0% 85%)',
    facetScale: 'scale-[1.08]'
  },
  {
    name: 'Natalia Ceballos',
    role: 'Project Lead',
    image: '/images/asesor-natalia-tri.webp',
    rotation: 5,
    facetShape: 'polygon(15% 0%, 100% 25%, 85% 100%, 0% 80%)',
    facetScale: 'scale-[1.05]'
  },
  {
    name: 'Sergio Trujillo',
    role: 'Asesor de Diseño Gráfico',
    image: '/images/asesor-sergio-tri.webp',
    rotation: -3,
    facetShape: 'polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)',
    facetScale: 'scale-[1.07]'
  },
  {
    name: 'Edgar Morejón',
    role: 'Asesor de Diseño de Modas',
    image: '/images/asesor-edgar-tri.webp',
    rotation: 7,
    facetShape: 'polygon(30% 0%, 100% 15%, 70% 100%, 0% 85%)',
    facetScale: 'scale-[1.06]'
  },
  {
    name: 'Agustín Plancarte',
    role: 'Asesor de Diseño Industrial',
    image: '/images/asesor-agustin-tri.webp',
    rotation: -5,
    facetShape: 'polygon(5% 0%, 100% 30%, 80% 100%, 0% 70%)',
    facetScale: 'scale-[1.07]'
  },
  {
    name: 'Amparo Vázquez',
    role: 'Asesora Invitada',
    image: '/images/asesor-amparo-tri.webp',
    rotation: 4,
    facetShape: 'polygon(20% 0%, 100% 10%, 90% 100%, 0% 95%)',
    facetScale: 'scale-[1.05]'
  },
  {
    name: 'Nohemi Gamboa',
    role: 'Project Lead',
    image: '/images/asesor-nohemi-tri.webp',
    rotation: -7,
    facetShape: 'polygon(0% 0%, 85% 15%, 100% 85%, 15% 100%)',
    facetScale: 'scale-[1.08]'
  }
]
</script>
