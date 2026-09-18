<template>
  <section
    id="informacion-academica"
    class="relative py-14 sm:py-20 lg:py-32 bg-[#1C1C1C] text-white overflow-hidden flex items-center justify-center select-text"
  >
    <div class="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-12">
      <!-- Díptico Diagonal 1:1 Figma (#332:312 a #332:326) -->
      <div class="flex flex-row items-center justify-center gap-2.5 sm:gap-6 lg:gap-8 relative">
        <!-- Bloque Izquierdo: Texto Arriba a la Izquierda + Triángulo Carreras Abajo -->
        <div class="flex flex-col items-start w-[45%] sm:w-auto relative z-10">
          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional"
            target="_blank"
            rel="noopener noreferrer"
            class="font-barlow text-sm sm:text-2xl lg:text-[38px] font-normal text-white hover:text-[#4BA550] transition-colors leading-[0.95] tracking-tight mb-2 sm:mb-4 select-text"
          >
            Más información<br />de carreras
          </a>

          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional"
            target="_blank"
            rel="noopener noreferrer"
            class="block group cursor-pointer w-full"
            aria-label="Más información de carreras"
          >
            <AppImage
              src="/images/figma-carreras-triangle.webp"
              alt="Más información de carreras"
              img-class="w-full max-w-[150px] sm:max-w-[240px] md:max-w-[310px] lg:max-w-[360px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          </a>
        </div>

        <!-- Barra Diagonal Blanca Central (Slash Inclinado "/" 1:1 Figma) -->
        <div class="flex items-center justify-center px-0.5 sm:px-3 lg:px-5 select-none pointer-events-none self-center z-20 flex-shrink-0">
          <div
            class="w-2 sm:w-3 lg:w-3.5 h-[180px] sm:h-[280px] md:h-[360px] lg:h-[430px] bg-white rounded-full rotate-[16deg] transform origin-center shadow-md"
          />
        </div>

        <!-- Bloque Derecho: Triángulo Posgrados Arriba + Texto Abajo a la Derecha -->
        <div class="flex flex-col items-end w-[45%] sm:w-auto relative z-10 -mt-4 sm:-mt-8 lg:-mt-12">
          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/posgrados"
            target="_blank"
            rel="noopener noreferrer"
            class="block group cursor-pointer w-full flex justify-end"
            aria-label="Información de posgrados"
          >
            <AppImage
              src="/images/figma-posgrados-triangle.webp"
              alt="Información de posgrados"
              img-class="w-full max-w-[150px] sm:max-w-[240px] md:max-w-[310px] lg:max-w-[360px] h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          </a>

          <a
            href="https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/posgrados"
            target="_blank"
            rel="noopener noreferrer"
            class="font-barlow text-sm sm:text-2xl lg:text-[38px] font-normal text-white hover:text-[#4BA550] transition-colors leading-[0.95] tracking-tight text-right mt-2 sm:mt-4 select-text"
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
// Díptico diagonal paralelo con barra blanca inclinada presente en todas las resoluciones
</script>
