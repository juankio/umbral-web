<template>
  <section class="relative bg-white overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-24">
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
      <!-- Breadcrumb minimalista -->
      <div class="flex items-center gap-2 font-barlow text-sm uppercase tracking-widest text-neutral-400 pb-4 mb-8 border-b border-neutral-200">
        <NuxtLink to="/" class="hover:text-black transition-colors">Inicio</NuxtLink>
        <span>/</span>
        <span class="text-black font-medium">Nosotros · CRGS</span>
      </div>

      <!-- Hero Grid 1:1 con Figma -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <!-- Izquierda: Titular monumental -->
        <div class="lg:col-span-6 space-y-6">
          <span class="font-barlow text-sm sm:text-base uppercase tracking-widest text-neutral-500 block">
            Universidad de Monterrey · Escuela de Arte, Arquitectura y Diseño
          </span>
          <h1 class="font-barlow font-semibold text-6xl sm:text-8xl lg:text-[130px] leading-[0.9] text-[#161F2C] tracking-tight">
            Centro Roberto<br />Garza Sada
          </h1>
          <p class="font-barlow font-normal text-3xl sm:text-4xl lg:text-5xl text-neutral-700 tracking-tight">
            "La Puerta de la Creación"
          </p>
          <p class="font-barlow text-xl sm:text-2xl text-neutral-600 leading-relaxed max-w-xl text-justify">
            Diseñado por el maestro de la arquitectura Tadao Ando, este edificio de 13,000 m² es un hito de la arquitectura contemporánea y un catalizador para la educación artística de excelencia en Latinoamérica.
          </p>
        </div>

        <!-- Derecha: Imagen arquitectónica monumental sin bordes artificiales -->
        <div class="lg:col-span-6 flex justify-center lg:justify-end">
          <div class="w-full max-w-[720px] overflow-hidden">
            <img
              src="/images/crgs-building.png"
              alt="Centro Roberto Garza Sada - Tadao Ando"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero institucional limpio 1:1 con Figma sin líneas de rejilla ni cajas grises
</script>
