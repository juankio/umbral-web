<template>
  <section id="repentina" class="py-14 sm:py-20 lg:py-24 bg-[#1C1C1C] text-white select-none border-b border-neutral-900">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <!-- Titular: Nuestra Repentina exacto de Figma (id: 332:373) -->
      <h2 class="font-barlow font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[80px] text-white text-center leading-none mb-8 sm:mb-12">
        Nuestra Repentina
      </h2>

      <!-- Marco Escultórico de la Repentina (Figma Group 7 / Node 325:11) -->
      <div class="relative w-full max-w-[1040px] aspect-[1697/751] bg-neutral-900 overflow-hidden shadow-2xl border border-black/80">
        <!-- Fotografía oficial del stand de exposición en Zona Maco (Node 325:19) -->
        <AppImage
          src="/images/figma-zm-repentina-showcase.webp"
          alt="Exposición oficial de la Repentina en Zona Maco"
          img-class="w-full h-full object-cover opacity-85"
          wrapper-class="absolute inset-0 w-full h-full"
          loading="lazy"
        />

        <!-- Líneas Diagonales en X y Triángulo Central (Figma Lines 19 & 20 + Vector 4) -->
        <svg
          class="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1697 751"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Línea 19: esquina superior izquierda a inferior derecha -->
          <line x1="0" y1="0" x2="1697" y2="751" stroke="#000000" stroke-width="1.2" />
          <!-- Línea 20: esquina inferior izquierda a superior derecha -->
          <line x1="0" y1="751" x2="1697" y2="0" stroke="#000000" stroke-width="1.2" />

          <!-- Triángulo Central Vector 4 (id: 325:20) centrado en el punto de cruce -->
          <g transform="translate(788, 305)">
            <path
              d="M0.5 0.432983V138.933L121 69.3623L1.61097 0.432983"
              fill="rgba(63,63,63,0.35)"
              stroke="#000000"
              stroke-width="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección Nuestra Repentina 1:1 con Figma (Frame 325:2 / Group 7)
</script>
