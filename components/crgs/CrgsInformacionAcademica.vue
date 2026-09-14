<template>
  <section id="info-academica" class="py-20 sm:py-28 lg:py-32 bg-[#0A0A0A] text-white overflow-hidden border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-4 lg:gap-8">
        <!-- Columna Izquierda: Carreras -->
        <div class="w-full md:w-auto flex flex-col items-center md:items-start">
          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional"
            target="_blank"
            rel="noopener noreferrer"
            class="font-barlow text-4xl sm:text-5xl text-white font-medium hover:underline block mb-6 tracking-tight text-center md:text-left transition-colors"
          >
            Más información de carreras
          </a>
          <div
            class="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/3] overflow-hidden bg-neutral-900 group shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
            style="clip-path: polygon(0 50%, 100% 0, 80% 100%)"
          >
            <img
              src="/images/crgs-student-carreras.png"
              alt="Estudiante CRGS Carreras"
              class="w-full h-full object-cover grayscale-[15%] contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-neutral-950/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
          </div>
        </div>

        <!-- Centro: Slash Blanco Monumental -->
        <div class="flex items-center justify-center select-none py-2 md:py-0" aria-hidden="true">
          <span class="font-barlow font-thin text-8xl sm:text-[160px] text-white/90 select-none px-4 sm:px-8 leading-none">
            /
          </span>
        </div>

        <!-- Columna Derecha: Posgrados -->
        <div class="w-full md:w-auto flex flex-col items-center md:items-end">
          <div
            class="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/3] overflow-hidden bg-neutral-900 group shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
            style="clip-path: polygon(20% 0, 100% 50%, 0 100%)"
          >
            <img
              src="/images/crgs-student-posgrados.png"
              alt="Estudiante CRGS Posgrados"
              class="w-full h-full object-cover grayscale-[15%] contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-neutral-950/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
          </div>
          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/posgrados"
            target="_blank"
            rel="noopener noreferrer"
            class="font-barlow text-4xl sm:text-5xl text-white font-medium hover:underline block mt-6 text-right sm:text-left tracking-tight text-center md:text-right transition-colors"
          >
            Información de posgrados
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Información académica: Carreras y Posgrados con recortes arquitectónicos
</script>
