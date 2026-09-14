<template>
  <section class="relative bg-white overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-neutral-200">
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
      <!-- Header Institucional Superior -->
      <header
        class="flex flex-wrap items-center justify-between gap-4 font-barlow text-xs sm:text-sm uppercase tracking-widest text-neutral-400 pb-4 mb-8 sm:mb-12 border-b border-neutral-200 transition-opacity duration-700"
        :class="isLoaded ? 'opacity-100' : 'opacity-0'"
      >
        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="hover:text-black transition-colors">Inicio</NuxtLink>
          <span class="text-neutral-300">/</span>
          <span class="text-black font-semibold">Nosotros · CRGS</span>
        </div>
        <div class="hidden sm:flex items-center gap-3 text-neutral-500 font-mono text-xs">
          <span>Tadao Ando Architect &amp; Associates</span>
          <span class="w-1 h-1 rounded-full bg-neutral-300" />
          <span>UDEM</span>
        </div>
      </header>

      <!-- Hero Grid: Titular Monumental & Polígono Arquitectónico -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <!-- Izquierda: Titular monumental masivo -->
        <div
          class="lg:col-span-7 space-y-6 transition-all duration-1000 ease-out"
          :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <span class="font-barlow text-xs sm:text-sm uppercase tracking-widest text-neutral-500 block font-medium">
            Universidad de Monterrey · Escuela de Arte y Diseño
          </span>

          <h1 class="font-barlow font-bold text-6xl sm:text-8xl lg:text-9xl xl:text-[140px] text-neutral-950 leading-[0.88] tracking-tight">
            Centro Roberto<br />
            Garza Sada
          </h1>

          <p class="font-barlow font-normal text-2xl sm:text-3xl lg:text-4xl text-neutral-700 tracking-tight">
            "La Puerta de la Creación"
          </p>

          <p class="font-sans text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl text-justify">
            Diseñado por el maestro Tadao Ando, este monolito de 13,000 m² de concreto aparente es un hito de la arquitectura contemporánea y el portal de excelencia creativa en Latinoamérica.
          </p>
        </div>

        <!-- Derecha: Polígono masivo negro de Tadao Ando cortando diagonalmente -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            class="relative w-full max-w-[540px] aspect-[5/6] sm:aspect-[6/7] lg:aspect-auto lg:h-[540px] transition-all duration-1000 delay-150 ease-out"
            :class="isLoaded ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : 'opacity-0 translate-x-8 -translate-y-4 scale-95'"
          >
            <svg
              viewBox="0 0 600 680"
              class="w-full h-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.18)] select-none overflow-visible block"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <!-- Polígono Principal Techo Masivo Cortando Diagonalmente -->
              <polygon points="240,0 600,0 600,680 0,500" fill="#0A0A0A" />
              <!-- Facetas Geométricas Tectónicas Tadao Ando -->
              <polygon points="240,0 600,260 600,680 270,350" fill="#141414" />
              <polygon points="240,0 270,350 0,500" fill="#1C1C1C" />
              <polygon points="600,260 600,680 380,610" fill="#050505" />
              <!-- Líneas de junta constructiva y encofrado -->
              <line x1="240" y1="0" x2="270" y2="350" stroke="#2B2B2B" stroke-width="1.5" />
              <line x1="270" y1="350" x2="600" y2="260" stroke="#2B2B2B" stroke-width="1.5" />
              <line x1="270" y1="350" x2="0" y2="500" stroke="#383838" stroke-width="1.5" />
              <line x1="270" y1="350" x2="380" y2="610" stroke="#262626" stroke-width="1" />
              <!-- Inscripción técnica monocromática -->
              <text x="560" y="640" text-anchor="end" fill="#525252" font-family="'Space Grotesk', monospace" font-size="11" letter-spacing="0.2em">
                CRGS // TADAO ANDO · 2013
              </text>
            </svg>
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
