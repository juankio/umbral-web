<template>
  <section
    id="hero-triangle"
    class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white flex flex-col justify-between items-center select-none overflow-hidden"
  >
    <!-- Área central del Hero con el triángulo oficial y las 10 obras en collage -->
    <div class="relative w-full flex-1 flex items-center justify-center px-4 sm:px-8 py-4 sm:py-6">
      <!-- 10 obras en collage superpuesto de galería a sangre -->
      <ZonaMacoFloatingProjects />

      <!-- Triángulo negro oficial (#1C1C1C) con 'Obras Seleccionadas' -->
      <ZonaMacoHeroTriangle class="relative z-30" />
    </div>

    <!-- Marquee arquitectónico al pie reutilizable -->
    <AppMarquee theme="light" />
  </section>
</template>

<script setup lang="ts">
import ZonaMacoHeroTriangle from './ZonaMacoHeroTriangle.vue'
import ZonaMacoFloatingProjects from './ZonaMacoFloatingProjects.vue'

defineEmits<{ (e: 'select', category: string): void }>()
</script>
