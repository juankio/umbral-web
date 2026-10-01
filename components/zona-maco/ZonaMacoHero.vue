<template>
  <section
    id="hero-triangle"
    class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white flex flex-col justify-between items-center select-none overflow-hidden"
  >
    <!-- Contenedor central proporcional de amplitud monumental de galeria -->
    <div class="relative w-full max-w-[1840px] mx-auto h-[620px] sm:h-[700px] lg:h-[calc(100vh-140px)] min-h-[640px] max-h-[880px] px-3 sm:px-6 lg:px-8 flex items-center justify-center">
      <ZonaMacoHeroTriangle class="relative z-10 pointer-events-none" />
      <ZonaMacoFloatingProjects />
    </div>

    <!-- Marquee arquitectonico al pie reutilizable (barra negra universal) -->
    <AppMarquee />
  </section>
</template>

<script setup lang="ts">
import ZonaMacoHeroTriangle from './ZonaMacoHeroTriangle.vue'
import ZonaMacoFloatingProjects from './ZonaMacoFloatingProjects.vue'

defineEmits<{ (e: 'select', category: string): void }>()
</script>
