<template>
  <section
    id="informacion-academica"
    class="relative py-20 sm:py-24 lg:py-32 bg-[#1C1C1C] text-white overflow-hidden flex items-center justify-center select-text"
  >
    <div class="max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-12">
      <!-- Díptico Diagonal 1:1 Figma (#332:312 a #332:326) Compacto y Proporcional -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 relative">
        <!-- Bloque Izquierdo: Texto Arriba a la Izquierda + Triángulo Carreras Abajo -->
        <div class="flex flex-col items-start w-full sm:w-auto relative z-10">
          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional"
            target="_blank"
            rel="noopener noreferrer"
            class="font-barlow text-2xl sm:text-3xl lg:text-[38px] font-normal text-white hover:text-[#4BA550] transition-colors leading-[0.95] tracking-tight mb-3 sm:mb-4 select-text"
          >
            Más información<br />de carreras
          </a>

          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional"
            target="_blank"
            rel="noopener noreferrer"
            class="block group cursor-pointer"
            aria-label="Más información de carreras"
          >
            <img
              src="/images/figma-carreras-triangle.png"
              alt="Más información de carreras"
              class="w-[250px] sm:w-[310px] lg:w-[360px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          </a>
        </div>

        <!-- Barra Diagonal Blanca Central (Slash Inclinado "/" 1:1 Figma) -->
        <div class="hidden md:flex items-center justify-center px-1 sm:px-3 lg:px-5 select-none pointer-events-none self-center z-20">
          <div
            class="w-3 sm:w-3.5 h-[340px] sm:h-[390px] lg:h-[430px] bg-white rounded-full rotate-[16deg] transform origin-center shadow-md"
          />
        </div>

        <!-- Bloque Derecho: Triángulo Posgrados Arriba + Texto Abajo a la Derecha -->
        <div class="flex flex-col items-end w-full sm:w-auto relative z-10 md:-mt-8 lg:-mt-12">
          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/posgrados"
            target="_blank"
            rel="noopener noreferrer"
            class="block group cursor-pointer"
            aria-label="Información de posgrados"
          >
            <img
              src="/images/figma-posgrados-triangle.png"
              alt="Información de posgrados"
              class="w-[250px] sm:w-[310px] lg:w-[360px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          </a>

          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/posgrados"
            target="_blank"
            rel="noopener noreferrer"
            class="font-barlow text-2xl sm:text-3xl lg:text-[38px] font-normal text-white hover:text-[#4BA550] transition-colors leading-[0.95] tracking-tight text-right mt-3 sm:mt-4 select-text"
          >
            Información<br />de posgrados
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Bloque Información Académica 1:1 con Figma (#332:312 a #332:326)
// Composición diagonal idéntica a Figma con barra inclinada en slash "/", triángulos paralelos y desfase vertical
</script>
