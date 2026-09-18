<template>
  <section id="informacion-academica" class="relative py-24 sm:py-32 lg:py-44 bg-[#FAFAFA] text-[#070707] overflow-hidden border-b border-neutral-200 min-h-[900px] lg:min-h-[1200px] flex items-center">
    <div class="max-w-[1920px] w-full mx-auto px-6 sm:px-12 lg:px-16 relative">
      <!-- Layout Diagonal 1:1 Figma:
           Izq: Titular Carreras (Arriba) -> Retrato Angular (Abajo)
           Centro: Slash Monumental 1200px
           Der: Retrato Angular (Arriba) -> Titular Posgrados (Abajo)
      -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        <!-- Columna Izquierda: Carreras Profesional -->
        <div class="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div class="space-y-3">
            <span class="font-barlow text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-400 font-semibold block">
              03 / Oferta de Grado
            </span>
            <a
              href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional"
              target="_blank"
              rel="noopener noreferrer"
              class="font-barlow text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#070707] hover:text-[#4BA550] transition-colors leading-[0.95] tracking-tight block"
            >
              Más información<br class="hidden sm:inline" /> de carreras
            </a>
          </div>

          <!-- Retrato Egresados/Estudiantes Carreras con Máscara Angular apuntando al centro -->
          <div
            class="relative w-full max-w-[460px] aspect-[4/3] overflow-hidden bg-neutral-200 shadow-2xl transition-transform duration-700 hover:scale-[1.02] group"
            style="clip-path: polygon(0 45%, 100% 0, 82% 100%);"
          >
            <img
              src="/images/crgs-student-carreras.png"
              alt="Estudiantes de Carreras Profesionales CRGS"
              class="w-full h-full object-cover grayscale-[15%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              loading="eager"
            />
            <div class="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-500" />
          </div>

          <a
            href="https://www.udem.edu.mx/es/conoce/admisiones"
            target="_blank"
            rel="noopener noreferrer"
            class="font-barlow font-bold text-sm uppercase tracking-widest text-neutral-800 hover:text-black inline-flex items-center gap-2 border-b-2 border-neutral-900 pb-1 transition-colors"
          >
            <span>Convocatoria de Admisiones UDEM</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <!-- Columna Central: Slash Monumental 1200px (Barlow Condensed Thin) -->
        <div class="lg:col-span-2 flex items-center justify-center select-none pointer-events-none my-4 lg:my-0" aria-hidden="true">
          <span class="font-barlow font-thin text-[260px] sm:text-[500px] md:text-[750px] lg:text-[1000px] xl:text-[1200px] leading-[0.72] text-[#A5BCD5] select-none">
            /
          </span>
        </div>

        <!-- Columna Derecha: Posgrados & Maestrías (Retrato Arriba, Titular Abajo) -->
        <div class="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right space-y-8">
          <!-- Retrato Egresados/Estudiantes Posgrados con Máscara Angular apuntando al centro -->
          <div
            class="relative w-full max-w-[460px] aspect-[4/3] overflow-hidden bg-neutral-200 shadow-2xl transition-transform duration-700 hover:scale-[1.02] group"
            style="clip-path: polygon(18% 0, 100% 55%, 0 100%);"
          >
            <img
              src="/images/crgs-student-posgrados.png"
              alt="Estudiantes de Posgrados y Maestrías CRGS"
              class="w-full h-full object-cover grayscale-[15%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              loading="eager"
            />
            <div class="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-500" />
          </div>

          <div class="space-y-3">
            <span class="font-barlow text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-400 font-semibold block">
              04 / Posgrados &amp; Maestrías
            </span>
            <a
              href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/posgrados"
              target="_blank"
              rel="noopener noreferrer"
              class="font-barlow text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#070707] hover:text-[#4BA550] transition-colors leading-[0.95] tracking-tight block"
            >
              Información<br class="hidden sm:inline" /> de posgrados
            </a>
          </div>

          <a
            href="https://www.udem.edu.mx/es/posgrados"
            target="_blank"
            rel="noopener noreferrer"
            class="font-barlow font-bold text-sm uppercase tracking-widest text-neutral-800 hover:text-black inline-flex items-center gap-2 border-b-2 border-neutral-900 pb-1 transition-colors"
          >
            <span>Catálogo Oficial de Posgrados UDEM</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Bloque Información Académica: Carreras y Posgrados con Slash Monumental 1200px
</script>
