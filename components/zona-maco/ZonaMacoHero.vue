<template>
  <section
    id="hero-triangle"
    class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white flex flex-col justify-between items-center select-none overflow-hidden"
  >
    <!-- Contenedor central proporcional de amplitud monumental de galeria -->
    <div class="relative w-full max-w-[1840px] mx-auto h-[620px] sm:h-[700px] lg:h-[calc(100vh-140px)] min-h-[640px] max-h-[880px] px-3 sm:px-6 lg:px-8 flex items-center justify-center">
      <div class="relative z-10 text-center select-none pointer-events-none">
        <h1 class="font-barlow font-normal text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[104px] text-[#070707] text-center leading-[0.92] tracking-tight">
          Obras<br />Seleccionadas
        </h1>
      </div>
      <ZonaMacoFloatingProjects />
    </div>

    <!-- Marquee arquitectonico al pie reutilizable (barra negra universal) -->
    <AppMarquee />
  </section>
</template>

<script setup lang="ts">
import ZonaMacoFloatingProjects from './ZonaMacoFloatingProjects.vue'

defineEmits<{ (e: 'select', category: string): void }>()
</script>
