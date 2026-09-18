<template>
  <section
    id="hero-triangle"
    class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-12 select-none overflow-hidden"
  >
    <!-- Constelación asimétrica de obras flotantes por los lados ('desorden pero bonito') -->
    <ZonaMacoFloatingProjects />

    <!-- Triángulo central monumental con 'Obras Seleccionadas' -->
    <ZonaMacoHeroTriangle class="relative z-10" />
  </section>
</template>

<script setup lang="ts">
import ZonaMacoHeroTriangle from './ZonaMacoHeroTriangle.vue'
import ZonaMacoFloatingProjects from './ZonaMacoFloatingProjects.vue'

defineEmits<{ (e: 'select', category: string): void }>()
</script>
