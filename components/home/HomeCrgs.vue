<template>
  <section class="w-full bg-white py-16 lg:py-28 overflow-hidden">
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Columna Izquierda: Título y Descripción Oficial -->
        <div class="lg:col-span-6 flex flex-col space-y-8">
          <h2 class="font-barlow text-5xl md:text-[96px] lg:text-[128px] text-[#1C1C1C] leading-[0.95] font-normal">
            Centro Roberto Garza Sada
          </h2>

          <div class="space-y-6 font-barlow text-xl md:text-[32px] leading-[1.2] text-[#1C1C1C] text-justify font-normal">
            <p>
              Es un espacio de ideas y expresiones que congrega y desarrolla el mejor talento creativo, consolidándose como la sede de la formación, creación y preservación del arte, arquitectura y diseño en Latinoamérica.
            </p>

            <p>
              <strong class="font-bold">"La Puerta de la Creación",</strong> es una joya arquitectónica, un emblema de diseño moderno y sostenibilidad y también un vibrante espacio educativo que inspira a estudiantes y profesionales por igual.
            </p>
          </div>
        </div>

        <!-- Columna Derecha: Edificio CRGS con fondo desplazado #5E5E5E -->
        <div class="lg:col-span-6 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-[680px]">
            <!-- Rectángulo desplazado gris de fondo -->
            <div
              class="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 bg-[#5E5E5E] pointer-events-none"
              aria-hidden="true"
            />
            <!-- Imagen frontal del edificio -->
            <div class="relative z-10 w-full overflow-hidden bg-neutral-900 shadow-md">
              <img
                src="/images/crgs-building.png"
                alt="Edificio del Centro Roberto Garza Sada diseñado por Tadao Ando"
                class="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección institucional del Centro Roberto Garza Sada (CRGS)
</script>
