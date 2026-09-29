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

    <!-- Marquee arquitectónico al pie 1:1 con Figma (~42px continuo en negro sobre blanco) -->
    <div
      class="relative w-full overflow-hidden border-t border-neutral-100 bg-white py-3 sm:py-3.5 select-none"
      aria-hidden="true"
    >
      <div class="animate-marquee whitespace-nowrap flex items-center">
        <div
          v-for="i in 8"
          :key="i"
          class="flex items-center flex-shrink-0"
        >
          <span class="font-barlow font-medium sm:font-bold text-[28px] sm:text-[34px] lg:text-[42px] text-black tracking-widest uppercase px-4 sm:px-8 leading-none">
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
