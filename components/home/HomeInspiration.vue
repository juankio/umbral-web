<template>
  <section class="w-full bg-[#1C1C1C] text-white py-20 lg:py-32 overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-12 space-y-16 lg:space-y-24">
      <!-- Encabezado de Inspiración -->
      <div class="text-center space-y-4">
        <h2 ref="titleRef" class="font-barlow font-medium text-5xl md:text-[80px] lg:text-[104px] text-white text-center leading-none uppercase tracking-tight">
          NUESTRA INSPIRACIÓN
        </h2>
        <p ref="subRef" class="font-barlow text-lg sm:text-2xl lg:text-3xl text-white/80 text-center leading-snug font-normal max-w-4xl mx-auto">
          Conoce acerca de los que hicieron el Centro Roberto Garza Sada una realidad.
        </p>
      </div>

      <!-- Carrusel Triangular de Figuras de Inspiración -->
      <InspirationCarousel />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import InspirationCarousel from '~/components/home/InspirationCarousel.vue'

const titleRef = ref<HTMLElement | null>(null)
const subRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(titleRef, { type: 'heading', delay: 100 })
  observeScrollReveal(subRef, { type: 'paragraph', delay: 200 })
})
</script>
