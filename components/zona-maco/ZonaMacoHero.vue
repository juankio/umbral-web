<template>
  <section
    id="hero-triangle"
    class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-white flex flex-col justify-between items-center select-none overflow-hidden"
  >
    <!-- Área central del Hero con el triángulo monumental y el cluster de obras flotantes -->
    <div class="relative w-full flex-1 flex items-center justify-center px-4 sm:px-8 py-4 sm:py-6">
      <!-- Constelación asimétrica de 6 obras flotantes alrededor del triángulo -->
      <ZonaMacoFloatingProjects />

      <!-- Triángulo central monumental con 'Obras Seleccionadas' -->
      <ZonaMacoHeroTriangle class="relative z-10" />
    </div>

    <!-- Marquee arquitectónico al pie 1:1 con Figma -->
    <div
      class="relative w-full overflow-hidden border-t border-neutral-100 bg-white py-3 sm:py-4 select-none"
      aria-hidden="true"
    >
      <div class="animate-marquee whitespace-nowrap flex items-center">
        <div
          v-for="i in 6"
          :key="i"
          class="flex items-center flex-shrink-0"
        >
          <span class="font-barlow font-bold text-2xl sm:text-3xl lg:text-5xl text-black tracking-widest uppercase px-4 sm:px-8">
            PENSAMIENTO. MATERIA. CREACIÓN.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ZonaMacoHeroTriangle from './ZonaMacoHeroTriangle.vue'
import ZonaMacoFloatingProjects from './ZonaMacoFloatingProjects.vue'

defineEmits<{ (e: 'select', category: string): void }>()
</script>
