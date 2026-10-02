<template>
  <section class="w-full bg-[#1C1C1C] text-white py-14 sm:py-16 lg:py-20 overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-12 space-y-10 sm:space-y-12 lg:space-y-14">
      <!-- Encabezado de Inspiración (escalado más compacto y armónico) -->
      <div class="text-center space-y-3 sm:space-y-3.5">
        <h2 ref="titleRef" class="font-barlow font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[86px] text-white text-center leading-none tracking-tight">
          Nuestra Inspiración
        </h2>
        <p ref="subRef" class="font-barlow text-base sm:text-lg lg:text-xl text-white/75 text-center leading-snug font-normal max-w-3xl mx-auto">
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
