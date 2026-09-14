<template>
  <section class="bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden flex items-center justify-center select-none">
    <NuxtLink
      to="/zona-maco"
      class="group relative w-full max-w-[780px] aspect-[780/440] flex items-center justify-center cursor-pointer focus:outline-none"
      aria-label="Ver Proyectos Seleccionados"
    >
      <svg
        viewBox="0 0 780 440"
        class="absolute inset-0 w-full h-full drop-shadow-[0_25px_45px_rgba(123,70,128,0.35)] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        fill="none"
      >
        <polygon points="0,280 780,0 580,440" fill="#7B4680" />
      </svg>

      <div class="absolute left-[59%] top-[54%] -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white flex flex-col items-center justify-center w-[340px] sm:w-[440px] pointer-events-none">
        <span class="font-barlow text-xs sm:text-sm tracking-[0.22em] uppercase text-white font-semibold mb-1.5 block">
          Haz click para ver los
        </span>
        <h2 class="font-barlow font-bold text-4xl sm:text-5xl md:text-[58px] text-white uppercase tracking-tight leading-[0.92] select-none text-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
          Proyectos<br>Seleccionados
        </h2>
        <span class="font-mono text-[10px] sm:text-xs text-white uppercase tracking-[0.2em] bg-black/25 px-4 py-1.5 rounded-full border border-white/20 mt-3.5 inline-block">
          Zona Maco 2026 · Exposición Oficial →
        </span>
      </div>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
// Triángulo morado restaurado a Captura 2
</script>
