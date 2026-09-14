<template>
  <section class="w-full bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden select-none">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex justify-center items-center">
      <NuxtLink
        to="/zona-maco"
        class="group relative flex flex-col items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7B4680]/30 rounded-3xl p-4 sm:p-8 w-full max-w-5xl"
        aria-label="Ver Proyectos Seleccionados - Zona Maco 2026"
      >
        <!-- Polígono Morado y Capa de Texto Calibrada en el Centroide Geométrico -->
        <div
          class="relative w-full max-w-[360px] sm:max-w-[540px] md:max-w-[680px] lg:max-w-[780px] flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
        >
          <!-- SVG del Polígono Asimétrico (#7B4680) -->
          <svg
            viewBox="0 0 780 440"
            class="w-full h-auto drop-shadow-[0_25px_50px_rgba(123,70,128,0.3)] transition-all duration-500 ease-out motion-reduce:transition-none"
            aria-hidden="true"
          >
            <polygon points="0,240 780,0 640,440" fill="#7B4680" />
          </svg>

          <!-- Contenedor de Texto Posicionado en el Centroide de la Masa Morada -->
          <div
            class="absolute left-[61.5%] top-[53.5%] -translate-x-1/2 -translate-y-1/2 w-auto max-w-[320px] sm:max-w-[380px] md:max-w-[420px] flex flex-col items-center justify-center text-center z-10 pointer-events-none"
          >
            <span class="font-barlow text-xs sm:text-sm tracking-[0.2em] uppercase text-white/95 font-semibold mb-1">
              Haz click para ver los
            </span>

            <h2 class="font-barlow font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white uppercase tracking-tight leading-[0.92] select-none text-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
              Proyectos<br> Seleccionados
            </h2>

            <span class="font-mono text-[10px] sm:text-[11px] text-white uppercase tracking-[0.12em] bg-black/30 px-3.5 py-1 rounded-full border border-white/20 mt-2.5 inline-block whitespace-nowrap">
              Zona Maco 2026 · Exposición Oficial →
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// Calibración geométrica exacta basada en el centroide de la masa morada (#7B4680)
</script>

<style scoped>
.text-shadow-\[0_4px_16px_rgba\(0\,0\,0\,0\.35\)\] {
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
}
</style>
