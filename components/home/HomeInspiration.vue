<template>
  <section class="w-full bg-[#1C1C1C] text-white py-20 lg:py-32 overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-12 space-y-16 lg:space-y-24">
      <!-- Encabezado de Inspiración -->
      <div class="text-center space-y-4">
        <h2 class="font-barlow font-medium text-5xl md:text-[80px] lg:text-[104px] text-white text-center leading-none uppercase tracking-tight">
          NUESTRA INSPIRACIÓN
        </h2>
        <p class="font-barlow text-lg sm:text-2xl lg:text-3xl text-white/80 text-center leading-snug font-normal max-w-4xl mx-auto">
          Conoce acerca de los que hicieron el Centro Roberto Garza Sada una realidad.
        </p>
      </div>

      <!-- Carrusel Triangular de Figuras de Inspiración -->
      <InspirationCarousel />
    </div>
  </section>
</template>

<script setup lang="ts">
import InspirationCarousel from '~/components/home/InspirationCarousel.vue'
</script>
