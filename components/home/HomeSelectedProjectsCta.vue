<template>
  <section class="w-full bg-[#FFFFFF] py-24 sm:py-32 lg:py-40 relative overflow-hidden select-none">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex justify-center items-center">
      <NuxtLink
        to="/zona-maco"
        class="group relative flex flex-col items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7B4680]/30 rounded-3xl p-6 sm:p-10 transition-all duration-300 w-full max-w-5xl"
        aria-label="Haz click para ver los Proyectos Seleccionados"
      >
        <!-- Triángulo Morado / Ciruela (#7B4680) de Figma SVG centrado -->
        <div class="relative w-full max-w-[340px] sm:max-w-[500px] md:max-w-[640px] lg:max-w-[760px] flex items-center justify-center">
          <svg
            viewBox="0 0 520 340"
            class="w-full h-auto drop-shadow-[0_20px_40px_rgba(123,70,128,0.25)] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
            aria-hidden="true"
          >
            <polygon points="0,220 520,0 360,340" fill="#7B4680" />
          </svg>

          <!-- Bloque de Texto Centrado Superpuesto al Triángulo Morado -->
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none">
            <p class="font-barlow text-2xl sm:text-3xl text-neutral-800 text-center font-normal tracking-tight mb-2 sm:mb-4">
              Haz click para ver los
            </p>

            <h2 class="font-barlow font-bold italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-neutral-950 tracking-tightest leading-none text-center">
              <span class="relative inline-block pb-1 sm:pb-2">
                Proyectos Seleccionados
                <!-- Subrayado suave al hacer hover -->
                <span
                  class="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] md:h-[6px] bg-neutral-950 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out pointer-events-none"
                />
              </span>
            </h2>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección 'Proyectos Seleccionados' de Figma con polígono morado (#7B4680)
// Hover interactivo con subrayado suave y enlace a la página de obras (/zona-maco)
</script>
