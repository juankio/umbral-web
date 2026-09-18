<template>
  <section id="puerta-creacion" class="py-20 lg:py-32 bg-white border-b border-neutral-200 overflow-hidden">
    <div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Columna Izquierda: Titular 146px + Descripción Arquitectónica de Tadao Ando -->
        <div class="lg:col-span-7 space-y-8">
          <div class="space-y-3">
            <span class="font-barlow text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-500 font-semibold block">
              01 / Espacio &amp; Arquitectura · Tadao Ando
            </span>
            <h2 class="font-barlow font-medium text-5xl sm:text-7xl md:text-9xl lg:text-[120px] xl:text-[146px] text-[#070707] leading-[0.9] tracking-tight">
              La Puerta<br />de la Creación
            </h2>
          </div>

          <!-- Píldoras de Metadatos Tectónicos -->
          <div class="flex flex-wrap gap-2 sm:gap-3 font-sans text-xs uppercase tracking-wider text-neutral-600">
            <span class="px-3 py-1 bg-neutral-100 border border-neutral-200">Premio Pritzker 1995</span>
            <span class="px-3 py-1 bg-neutral-100 border border-neutral-200">70m Luz Estructural</span>
            <span class="px-3 py-1 bg-neutral-100 border border-neutral-200">Certificación LEED Platino</span>
          </div>

          <!-- Descripción Arquitectónica Detallada -->
          <div class="space-y-5 font-barlow text-lg sm:text-xl lg:text-2xl text-neutral-700 leading-snug max-w-3xl">
            <p>
              Concebido por el arquitecto japonés <strong class="font-semibold text-neutral-950">Tadao Ando</strong> como su primera obra construida en Latinoamérica, el Centro Roberto Garza Sada se articula en torno a un vano escultórico continuo que desafía la gravedad y enmarca la cordillera de la Sierra Madre Oriental.
            </p>
            <p class="text-base sm:text-lg text-neutral-600 font-sans leading-relaxed">
              La monumental hendidura de concreto aparente postensado —conocida como "La Puerta de la Creación"— actúa como un umbral vivo donde convergen la luz cenital, las corrientes térmicas y las dinámicas creativas de más de 1,200 estudiantes y profesores. Sus más de 13,000 m² albergan talleres de escala 1:1, laboratorios de manufactura digital y espacios diáfanos que fomentan el aprendizaje interdisciplinario.
            </p>
          </div>
        </div>

        <!-- Columna Derecha: Prisma Origami Verde (#4BA550) & Visual del Vano Escultórico -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-[540px] aspect-[4/5] bg-neutral-950 overflow-hidden shadow-2xl group">
            <!-- Fotografía con Grayscale Arquitectónico -->
            <img
              src="/images/crgs-building.png"
              alt="Vano monumental de La Puerta de la Creación - Tadao Ando"
              class="w-full h-full object-cover grayscale-[20%] contrast-115 brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out"
              loading="lazy"
            />
            <!-- Facetas Geométricas de Origami Verde de la Identidad CRGS -->
            <div class="absolute inset-0 pointer-events-none">
              <svg viewBox="0 0 540 675" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="120,0 540,160 540,675 0,550" fill="#4BA550" fill-opacity="0.18" />
                <polygon points="540,160 540,675 280,480" fill="#439A48" fill-opacity="0.25" />
                <line x1="120" y1="0" x2="280" y2="480" stroke="#4BA550" stroke-width="1.5" stroke-opacity="0.6" />
                <line x1="280" y1="480" x2="540" y2="160" stroke="#439A48" stroke-width="1.5" stroke-opacity="0.6" />
              </svg>
            </div>
            <!-- Subtítulo técnico inferior -->
            <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white">
              <span class="font-sans text-[11px] uppercase tracking-[0.25em] text-[#4BA550] block mb-1">
                Tectónica de Concreto
              </span>
              <p class="font-barlow font-semibold text-2xl uppercase tracking-tight">
                Vano Escultórico · 70 Metros de Claro
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección 2: La Puerta de la Creación (Barlow Condensed Medium 146px + Descripción Arquitectónica)
</script>
