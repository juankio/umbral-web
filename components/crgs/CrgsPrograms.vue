<template>
  <section id="programas-profesional" class="py-20 lg:py-28 bg-white border-b border-neutral-200 overflow-hidden select-text">
    <div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16">
      <!-- Encabezado 1:1 Figma (#332:336) Centrado con scroll reveal -->
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 ref="headingRef" class="font-barlow font-normal text-4xl sm:text-5xl lg:text-6xl text-black leading-none">
          Programas Profesional
        </h2>
        <p ref="subtextRef" class="font-barlow font-normal text-xl sm:text-2xl lg:text-3xl text-neutral-700 leading-snug mt-3">
          Aprende en clases de estudio dirigidas por la práctica e impartidas por una facultad de artistas y diseñadores.
        </p>
      </div>

      <!-- Carrusel Horizontal Infinito con Triángulos Únicos de Figma -->
      <div
        class="relative w-full overflow-hidden py-4"
        @mouseenter="isHovered = true"
        @mouseleave="onMouseLeave"
      >
        <div
          ref="trackRef"
          class="flex gap-12 sm:gap-16 lg:gap-20 will-change-transform touch-pan-y select-none items-center"
          :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
        >
          <div
            v-for="(prog, idx) in repeatedPrograms"
            :key="`${prog.code}-${idx}`"
            class="w-[460px] sm:w-[540px] lg:w-[600px] flex-shrink-0 flex items-center gap-6 sm:gap-8 group focus:outline-none transition-transform duration-300 hover:-translate-y-1"
          >
            <!-- Contenedor del Triángulo Oficial de Figma con hover zoom suave -->
            <div class="h-44 sm:h-56 lg:h-64 max-w-[260px] sm:max-w-[310px] flex-shrink-0 flex items-center justify-center">
              <AppImage
                :src="prog.image"
                :alt="prog.name"
                img-class="h-full w-auto max-w-full object-contain pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-sm"
                wrapper-class="h-full flex items-center justify-center"
                loading="lazy"
              />
            </div>

            <!-- Información del Programa 1:1 Figma -->
            <div class="flex-grow space-y-1 select-text max-w-xs sm:max-w-sm">
              <h3 class="font-barlow font-medium text-xl sm:text-2xl lg:text-[26px] text-black leading-tight group-hover:underline">
                {{ prog.name }}
              </h3>
              <span class="font-barlow text-base sm:text-lg text-neutral-500 block font-normal leading-none pt-0.5">
                {{ prog.code }}
              </span>
              <p class="font-barlow text-sm sm:text-base text-neutral-700 leading-snug pt-1">
                {{ prog.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Controles de navegación con micro-interacción al click/hover -->
      <div class="flex items-center justify-center gap-4 mt-8 sm:mt-12">
        <button
          type="button"
          aria-label="Programa anterior"
          class="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-300 hover:border-black hover:bg-neutral-50 text-black flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black active:scale-90 hover:scale-105 shadow-xs"
          @click="prevSlide"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Programa siguiente"
          class="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-300 hover:border-black hover:bg-neutral-50 text-black flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black active:scale-90 hover:scale-105 shadow-xs"
          @click="nextSlide"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useContinuousCarousel } from '~/composables/useContinuousCarousel'

interface Program {
  code: string
  name: string
  description: string
  image: string
}

const headingRef = ref<HTMLElement | null>(null)
const subtextRef = ref<HTMLElement | null>(null)
const { observeScrollReveal } = useScrollAnimation()

const programs: Program[] = [
  { code: 'LDG', name: 'Licenciatura en Diseño Gráfico', description: 'Estudia la Licenciatura en Diseño Gráfico en UDEM y desarolla tu creatividad con técnicas innovadoras.', image: '/images/program-triangle-2.webp' },
  { code: 'LINT', name: 'Licenciatura en Diseño de Interiores', description: 'Estudia la Licenciatura en Diseño de Interiores en UDEM, y transforma diferentes espacios con creatividad.', image: '/images/program-triangle-3.webp' },
  { code: 'LDM', name: 'Licenciatura en Diseño de Moda', description: 'Estudia la Licenciatura en Diseño de Moda en UDEM y crea tendencias innovadoras con una formación integral.', image: '/images/program-triangle-4.webp' },
  { code: 'LDI', name: 'Licenciatura en Diseño Industrial', description: 'Estudia la Licenciatura en Diseño Industrial en UDEM y desarolla productos innovadores con un enfoque en funcionalidad.', image: '/images/program-triangle-5.webp' },
  { code: 'LAED', name: 'Licenciatura en Animación y Efectos Digitales', description: 'Estudia la Licenciatura en Animación y Efectos Digitales en UDEM y domina técnicas de alto impacto.', image: '/images/program-triangle-1.webp' }
]

const repeatedPrograms = computed(() => [...programs, ...programs, ...programs, ...programs])

const {
  trackRef,
  isHovered,
  isDragging,
  prevSlide,
  nextSlide,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onMouseLeave
} = useContinuousCarousel({
  itemCount: () => programs.length,
  defaultStepWidth: 520,
  speed: 0.5
})

onMounted(() => {
  observeScrollReveal(headingRef, { type: 'heading', delay: 50 })
  observeScrollReveal(subtextRef, { type: 'paragraph', delay: 120 })
})
</script>