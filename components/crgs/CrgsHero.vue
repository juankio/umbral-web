<template>
  <section class="relative bg-white overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-24 border-b border-neutral-200">
    <div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16">
      <!-- Header Institucional Superior & Breadcrumb -->
      <header
        class="flex flex-wrap items-center justify-between gap-4 font-barlow text-xs sm:text-sm uppercase tracking-widest text-neutral-400 pb-3 mb-8 sm:mb-12 border-b border-neutral-200"
      >
        <nav class="flex items-center gap-2">
          <NuxtLink to="/" class="hover:text-black transition-colors">Inicio</NuxtLink>
          <span class="text-neutral-300">/</span>
          <span class="text-[#070707] font-semibold">Nosotros · CRGS</span>
        </nav>
        <div class="flex items-center gap-3 text-neutral-500 font-sans text-xs">
          <span>Universidad de Monterrey</span>
          <span class="w-1 h-1 rounded-full bg-neutral-300" />
          <span>Tadao Ando Architect &amp; Associates</span>
        </div>
      </header>

      <!-- Titular Monumental 1:1 Figma (Barlow Condensed SemiBold 150px) -->
      <div class="mb-10 sm:mb-16">
        <span class="font-barlow text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-500 block mb-3 font-medium">
          Escuela de Arte, Arquitectura y Diseño
        </span>
        <h1 class="font-barlow font-semibold text-5xl sm:text-7xl md:text-9xl lg:text-[125px] xl:text-[150px] text-[#070707] leading-[0.88] tracking-tight">
          Centro Roberto<br />
          Garza Sada
        </h1>
      </div>

      <!-- Monumental Building Stage: Group 24 (w: 2210, h: 1593) -->
      <div
        class="relative w-full max-w-[2210px] mx-auto overflow-hidden bg-neutral-100 shadow-2xl group"
        style="aspect-ratio: 2210 / 1593;"
      >
        <!-- Fotografía Monumental del Edificio CRGS -->
        <img
          src="/images/crgs-building.png"
          alt="Centro Roberto Garza Sada - La Puerta de la Creación por Tadao Ando"
          class="w-full h-full object-cover object-center grayscale-[15%] contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-1000 ease-out"
          loading="eager"
        />

        <!-- Overlay Tectónico y Blueprint Constructivo (Group 24) -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        <!-- Inscripciones Arquitectónicas Monumentales -->
        <div class="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 flex flex-wrap items-end justify-between gap-6 pointer-events-none">
          <div class="space-y-1 sm:space-y-2 text-white">
            <span class="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-neutral-300 block">
              Planta &amp; Alzado Monumental · Tadao Ando
            </span>
            <p class="font-barlow font-medium text-xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white leading-none">
              13,000 m² · Concreto Aparente Esculpido
            </p>
          </div>
          <div class="font-sans text-[11px] sm:text-xs text-neutral-300 tracking-[0.2em] uppercase text-right">
            <span>25°39'44"N 100°25'08"W</span>
            <span class="block text-neutral-400">San Pedro Garza García · N.L.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    isLoaded.value = true
  })
})
</script>
