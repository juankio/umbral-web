<template>
  <section
    id="hero-triangle"
    class="relative w-full min-h-[calc(100vh-80px)] lg:min-h-[840px] xl:min-h-[890px] bg-white flex flex-col justify-between items-center select-none overflow-hidden"
  >
    <!-- Contenedor central proporcional de amplitud monumental de galería -->
    <div class="relative w-full max-w-[1840px] mx-auto min-h-[580px] sm:min-h-[640px] lg:min-h-[740px] xl:min-h-[780px] px-3 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center my-auto">
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
