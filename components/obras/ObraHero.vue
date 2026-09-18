<template>
  <section
    class="relative w-full bg-white min-h-[580px] lg:h-[720px] xl:h-[800px] flex flex-col items-center justify-end pb-10 sm:pb-12 lg:pb-14 overflow-hidden select-none"
  >
    <!-- Cuña lateral izquierda exacta de Figma (Group 49 / Vector 112:162) -->
    <div class="absolute left-0 top-[8%] sm:top-[6%] lg:top-[4%] w-[42%] sm:w-[45%] lg:w-[48%] pointer-events-none select-none z-0">
      <svg
        viewBox="0 0 991 603"
        class="w-full h-auto block select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 535.815L281.43 0L990.673 603L0 535.815Z" fill="#1C1C1C" />
      </svg>
    </div>

    <!-- Cuña lateral derecha exacta de Figma (Group 50 / Vector 112:164) -->
    <div class="absolute right-0 top-[10%] sm:top-[8%] lg:top-[6%] w-[42%] sm:w-[45%] lg:w-[48%] pointer-events-none select-none z-0">
      <svg
        viewBox="0 0 1004 603"
        class="w-full h-auto block select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1004 0L854.472 602.954L0 175.27L1004 0Z" fill="#1C1C1C" />
      </svg>
    </div>

    <!-- Contenedor Central: Fotografía enmarcada + Título en Title Case -->
    <div class="relative z-10 flex flex-col items-center justify-center text-center">
      <!-- Marco de la obra según Figma (aspect-[476/526]) -->
      <div
        class="relative w-[240px] sm:w-[320px] lg:w-[380px] xl:w-[420px] aspect-[476/526] bg-white border border-neutral-300 shadow-sm overflow-hidden"
      >
        <img
          :src="obra.heroImage || obra.gallery?.[0]"
          :alt="obra.title"
          class="w-full h-full object-cover"
          loading="eager"
          draggable="false"
        />
      </div>

      <!-- Título de la obra en Title Case exacto a Figma (Barlow Condensed Medium) -->
      <h1
        class="font-barlow font-medium text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] text-black leading-none mt-4 sm:mt-6 tracking-normal select-none"
      >
        {{ obra.title }}
      </h1>
    </div>

    <!-- Línea divisoria completa (Figma Line 6) -->
    <div class="absolute bottom-0 left-0 right-0 w-full h-[2px] bg-[#030303]" />
  </section>
</template>

<script setup lang="ts">
import type { Obra } from '~/composables/useObras'

defineProps<{
  obra: Obra
}>()
</script>
