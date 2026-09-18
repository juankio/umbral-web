<template>
  <section ref="sectionRef" class="relative w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden select-none">
    <!-- Triángulo Azul Pastel Oficial (#A0BDD7) estático sangrado desde el borde izquierdo -->
    <div
      class="absolute -left-12 sm:-left-24 lg:-left-36 xl:-left-44 top-[14%] w-[440px] sm:w-[620px] lg:w-[820px] xl:w-[960px] z-0 select-none pointer-events-none"
    >
      <svg
        viewBox="0 0 985 639"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-auto block select-none"
      >
        <path
          d="M538.686 638.486L0 302.049L985 0L538.686 638.486Z"
          fill="#A0BDD7"
        />
      </svg>
    </div>

    <!-- Contenedor Maestro -->
    <div class="relative z-10 max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <!-- Columna Izquierda: Título en 2 Líneas y Manifiesto alineado a la izquierda -->
        <div class="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8">
          <!-- Título en 2 líneas exacto a Figma: Centro Roberto / Garza Sada -->
          <h2 class="font-barlow font-normal text-5xl sm:text-6xl lg:text-7xl xl:text-[92px] text-[#1C1C1C] leading-[0.92] tracking-tight text-left">
            Centro Roberto<br>Garza Sada
          </h2>

          <div class="space-y-4 sm:space-y-5 font-barlow text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#1C1C1C] text-left font-normal max-w-[540px]">
            <p>
              Es un espacio de ideas y expresiones que congrega y desarrolla el mejor talento creativo, consolidándose como la sede de la formación, creación y preservación del arte, arquitectura y diseño en Latinoamérica.
            </p>
            <p>
              <strong class="font-bold">"La Puerta de la Creación",</strong> es una joya arquitectónica, un emblema de diseño moderno y sostenibilidad y también un vibrante espacio educativo que inspira a estudiantes y profesionales por igual.
            </p>
          </div>
        </div>

        <!-- Columna Derecha: Fotografía limpia y pura de Figma (sin marcos técnicos) -->
        <div class="lg:col-span-6 flex justify-center lg:justify-end">
          <div class="w-full max-w-[540px] lg:max-w-[600px] xl:max-w-[640px] overflow-hidden shadow-sm">
            <img
              src="/images/figma-crgs-section4.png"
              alt="Centro Roberto Garza Sada - Patio interior y escalinatas de Tadao Ando"
              class="w-full aspect-[910/879] object-cover block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección 4: Centro Roberto Garza Sada / La Puerta de la Creación 1:1 con Figma (Frame 112:2)
</script>
