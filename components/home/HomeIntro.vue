<template>
  <section class="py-20 lg:py-28 bg-[#F6F6F6] border-b border-neutral-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
        <div class="lg:col-span-8">
          <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
            01 / Manifiesto Institucional
          </span>
          <h2 class="font-barlow font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-neutral-900 leading-[0.95]">
            Un Umbral entre la Escuela y el Mundo
          </h2>
        </div>
        <div class="lg:col-span-4 lg:text-right">
          <p class="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Monterrey · Febrero 2027
          </p>
        </div>
      </div>

      <!-- Bento / Editorial Collage Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        <!-- Main Statement Card -->
        <div class="md:col-span-7 bg-white p-8 sm:p-12 border border-neutral-200/80 flex flex-col justify-between shadow-sm">
          <div class="space-y-6">
            <div class="w-12 h-1 bg-neutral-950" />
            <p class="font-barlow font-light text-2xl sm:text-3xl lg:text-4xl text-neutral-900 leading-snug tracking-tight">
              <strong class="font-semibold">UMBRAL \ CRGS</strong> es la plataforma del Centro Roberto Garza Sada concebida para visibilizar el rigor creativo de sus estudiantes y egresados.
            </p>
            <p class="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed">
              Funciona como un umbral entre la Escuela y el mundo, conectando los procesos de experimentación académica con el circuito del coleccionismo, galerías e industrias de vanguardia.
            </p>
            <p class="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed">
              La <strong class="text-neutral-900 font-medium">Repentina Zona Maco 2027</strong> es el primer capítulo de este proyecto: un ejercicio de 48 horas continuas donde estudiantes de Arquitectura, Arte y Diseño desarrollaron prototipos y piezas que ahora se presentan en la feria de arte más relevante de América Latina.
            </p>
          </div>

          <div class="pt-8 mt-8 border-t border-neutral-100 flex items-center justify-between">
            <span class="font-mono text-xs uppercase tracking-wider text-neutral-400">Escuela de Arte y Diseño</span>
            <NuxtLink to="/crgs" class="font-barlow font-bold text-sm tracking-widest uppercase text-neutral-900 hover:text-neutral-600 flex items-center gap-1.5 transition-colors">
              <span>Leer Más</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Architectural Image Bento 1: Building View -->
        <div class="md:col-span-5 relative group overflow-hidden border border-neutral-200 bg-neutral-900 min-h-[300px] md:min-h-[auto]">
          <img
            src="/images/crgs-building.png"
            alt="Edificio Centro Roberto Garza Sada por Tadao Ando"
            class="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
            <span class="font-mono text-[11px] text-neutral-300 uppercase tracking-widest">La Puerta de la Creación</span>
            <h3 class="font-barlow font-bold text-2xl text-white uppercase tracking-tight">Hormigón Vaciado en Sitio</h3>
          </div>
        </div>

        <!-- Architectural Image Bento 2: Geometry -->
        <div class="md:col-span-6 relative group overflow-hidden border border-neutral-200 bg-neutral-900 h-72 sm:h-80">
          <img
            src="/images/crgs-geometry.png"
            alt="Geometría y cortes de luz en el CRGS"
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6">
            <span class="font-mono text-[11px] text-neutral-300 uppercase tracking-widest">Luz & Tensión</span>
            <h3 class="font-barlow font-bold text-2xl text-white uppercase tracking-tight">Cortes Geométricos Parabólicos</h3>
          </div>
        </div>

        <!-- Architectural Image Bento 3: Details & Texture -->
        <div class="md:col-span-6 relative group overflow-hidden border border-neutral-200 bg-neutral-900 h-72 sm:h-80">
          <img
            src="/images/crgs-details.png"
            alt="Detalles tectónicos y materialidad del CRGS"
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6">
            <span class="font-mono text-[11px] text-neutral-300 uppercase tracking-widest">Materialidad</span>
            <h3 class="font-barlow font-bold text-2xl text-white uppercase tracking-tight">Texturas del Encofrado Manual</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Sección Intro y Manifiesto de Umbral
</script>
