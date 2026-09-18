<template>
  <section id="repentina" class="py-12 sm:py-16 bg-[#1C1C1C] text-white border-b border-neutral-900 relative select-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Titular Monumental: Nuestra repentina -->
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="font-barlow font-normal text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-none">
          Nuestra repentina
        </h2>
      </div>

      <!-- Dos columnas de contexto con polígono origami conector -->
      <div class="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
        <!-- Columna izquierda: Contexto repentina y de dónde nacen los proyectos -->
        <div class="space-y-3">
          <h3 class="font-barlow font-normal text-2xl sm:text-3xl leading-[1.1] text-white uppercase tracking-tight">
            Contexto repentina y de dónde nacen los proyectos
          </h3>
          <p class="font-sans text-neutral-400 text-sm leading-relaxed font-light">
            48 horas de inmersión total y experimentación continua en los talleres del Centro Roberto Garza Sada. La materia dialoga con la tensión del vacío para engendrar soluciones que disuelven fronteras entre disciplinas.
          </p>
        </div>

        <!-- Polígono origami conector (Vector 4, id: 325:20) -->
        <div class="flex items-center justify-center py-2 lg:py-0">
          <svg
            width="90"
            height="105"
            viewBox="0 0 122 140"
            fill="none"
            class="drop-shadow-lg shrink-0 opacity-90 hover:opacity-100 transition-opacity"
            aria-hidden="true"
          >
            <path
              d="M0.5 0.432983V138.933L121 69.3623L1.61097 0.432983"
              fill="#3F3F3F"
              stroke="#000000"
              stroke-width="1.2"
            />
          </svg>
        </div>

        <!-- Columna derecha: Información general y proceso de selección -->
        <div class="space-y-3">
          <h3 class="font-barlow font-normal text-2xl sm:text-3xl leading-[1.1] text-white uppercase tracking-tight">
            Información general y proceso de selección
          </h3>
          <p class="font-sans text-neutral-400 text-sm leading-relaxed font-light">
            El comité curatorial del CRGS y especialistas invitados de Zona Maco evaluaron más de 60 propuestas de taller para seleccionar las 10 piezas definitivas que conforman la colección oficial 2026.
          </p>
        </div>
      </div>

      <!-- Marco panorámico arquitectónico de video -->
      <ZonaMacoContextVideo />
    </div>
  </section>
</template>

<script setup lang="ts">
import ZonaMacoContextVideo from './ZonaMacoContextVideo.vue'
</script>
