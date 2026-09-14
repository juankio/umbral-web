<template>
  <section class="relative bg-[#FAFAFA] border-b border-neutral-200 overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24">
    <!-- Subtle architectural background lines -->
    <div class="absolute inset-0 pointer-events-none grid grid-cols-6 lg:grid-cols-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-for="i in 12" :key="i" class="h-full border-r border-neutral-200/40 last:border-r-0" />
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 pb-6 mb-8 border-b border-neutral-200">
        <NuxtLink to="/" class="hover:text-neutral-900 transition-colors">Inicio</NuxtLink>
        <span>/</span>
        <span class="text-neutral-900 font-semibold">Nosotros · CRGS</span>
      </div>

      <!-- Main Titles -->
      <div class="max-w-4xl space-y-4">
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
          Universidad de Monterrey · Escuela de Arte, Hábitat y Diseño
        </span>
        <h1 class="font-barlow font-bold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tightest leading-[0.9] text-neutral-950">
          Centro Roberto Garza Sada
        </h1>
        <p class="font-barlow font-light text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-600">
          La Puerta de la Creación
        </p>
        <p class="font-sans text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl pt-2">
          Diseñado por el arquitecto japonés Tadao Ando, este edificio de 13,000 m² es un hito de la arquitectura contemporánea y un catalizador para la educación artística de excelencia en Latinoamérica.
        </p>
      </div>

      <!-- Architectural Facade Graphic -->
      <div class="mt-12 lg:mt-16 relative border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm overflow-hidden">
        <img
          src="/images/crgs-facade.svg"
          alt="Fachada y corte estructural del Centro Roberto Garza Sada por Tadao Ando"
          class="w-full h-auto max-h-[360px] object-contain mx-auto filter drop-shadow-sm opacity-95 transition-transform duration-700 hover:scale-[1.01]"
        />

        <div class="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-500 uppercase tracking-wider">
          <span>Tadao Ando Architect & Associates · Tokio, Japón</span>
          <span>Voladizo escultórico de 30 metros de claro</span>
          <span>Inauguración: 2013</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero institucional del CRGS
</script>
