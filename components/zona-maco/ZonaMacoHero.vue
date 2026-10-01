<template>
  <section
    id="hero-triangle"
    class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white flex flex-col justify-between items-center select-none overflow-hidden"
  >
    <!-- Contenedor maestro: Centro geométrico con el titular puro y las 10 obras circundantes -->
    <div class="relative w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-6 lg:py-0">
      <!-- Titular puro en negro oficial de Figma en el centro geométrico -->
      <div class="relative z-10 text-center select-none pointer-events-none py-4">
        <h1 class="font-barlow font-normal text-6xl sm:text-7xl lg:text-[88px] xl:text-[104px] text-[#070707] text-center leading-[0.92] tracking-tight">
          Obras<br />Seleccionadas
        </h1>
      </div>

      <!-- Las 10 obras circundando el titular en el mismo contenedor maestro -->
      <ZonaMacoFloatingProjects />
    </div>

    <!-- Marquee arquitectónico al pie reutilizable (barra negra universal) -->
    <AppMarquee />
  </section>
</template>

<script setup lang="ts">
import ZonaMacoFloatingProjects from './ZonaMacoFloatingProjects.vue'

defineEmits<{ (e: 'select', category: string): void }>()
</script>
