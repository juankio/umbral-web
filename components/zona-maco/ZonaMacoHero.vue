<template>
  <section
    id="hero-triangle"
    class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white flex flex-col justify-between items-center select-none overflow-hidden"
  >
    <!-- Área central del Hero con el triángulo oficial y las 10 obras circundantes -->
    <div class="relative w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-6 lg:py-0">
      <!-- Triángulo negro oficial (#1C1C1C) con titular 'Obras Seleccionadas' en blanco -->
      <ZonaMacoHeroTriangle class="relative z-10 my-4 lg:my-0" />

      <!-- Las 10 obras en constelación perimetral (desktop) y tira compacta (mobile) -->
      <ZonaMacoFloatingProjects />
    </div>

    <!-- Marquee arquitectónico al pie reutilizable (barra negra universal) -->
    <AppMarquee />
  </section>
</template>

<script setup lang="ts">
import ZonaMacoHeroTriangle from './ZonaMacoHeroTriangle.vue'
import ZonaMacoFloatingProjects from './ZonaMacoFloatingProjects.vue'

defineEmits<{ (e: 'select', category: string): void }>()
</script>
