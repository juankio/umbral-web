<template>
  <div class="max-w-[980px] mx-auto aspect-[16/8] sm:aspect-[16/9] bg-neutral-900 border border-neutral-700 relative overflow-hidden group shadow-2xl">
    <AppImage
      src="/images/crgs-building.webp"
      alt="Video proceso repentina"
      img-class="w-full h-full object-cover grayscale contrast-125 opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
      wrapper-class="absolute inset-0 w-full h-full"
      loading="lazy"
    />
    <div class="absolute inset-0 bg-neutral-950/60 group-hover:bg-neutral-950/40 transition-colors duration-500" />

    <!-- Trazos arquitectónicos diagonales en cruz -->
    <svg
      class="absolute inset-0 w-full h-full pointer-events-none z-10"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.22)" stroke-width="0.35" stroke-dasharray="2,2" />
      <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,255,255,0.22)" stroke-width="0.35" stroke-dasharray="2,2" />
      <polygon points="50,0 100,50 50,100 0,50" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="0.3" stroke-dasharray="1.5,1.5" />
    </svg>

    <!-- Metadatos perimetrales técnicos -->
    <div class="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-300 z-20">
      REGISTRO AUDIOVISUAL · 03:45 MIN
    </div>
    <div class="absolute top-3 right-4 sm:top-5 sm:right-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-300 z-20">
      25°39'45"N 100°25'08"W
    </div>
    <div class="absolute bottom-3 left-4 sm:bottom-5 sm:left-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 z-20 hidden sm:block">
      CRGS · TALLERES DE PRODUCCIÓN
    </div>
    <div class="absolute bottom-3 right-4 sm:bottom-5 sm:right-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 z-20 hidden sm:block">
      EDICIÓN ZONA MACO 2026
    </div>

    <!-- Contenido centralizado sobre el video -->
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
      <button
        type="button"
        @click="isPlaying = true"
        class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 hover:bg-white text-white hover:text-neutral-950 border border-white/40 backdrop-blur-md flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
        aria-label="Reproducir video proceso repentina"
      >
        <svg class="w-6 h-6 sm:w-7 sm:h-7 translate-x-0.5 fill-current" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
      <h3 class="font-barlow font-normal text-2xl sm:text-4xl text-white uppercase tracking-wide drop-shadow-lg">
        Video proceso repentina
      </h3>
    </div>

    <!-- Reproductor Modal Overlay -->
    <Teleport to="body">
      <div
        v-if="isPlaying"
        class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        tabindex="0"
        @click.self="isPlaying = false"
        @keydown.esc="isPlaying = false"
      >
        <div class="relative w-full max-w-4xl aspect-video bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-8">
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs uppercase tracking-widest text-neutral-400">CRGS · CÁPSULA DOCUMENTAL</span>
            <button
              type="button"
              @click="isPlaying = false"
              class="font-mono text-xs uppercase tracking-widest text-neutral-300 hover:text-white px-3 py-1 border border-neutral-700 hover:border-white transition-colors cursor-pointer"
            >
              Cerrar [ESC]
            </button>
          </div>
          <div class="text-center my-auto">
            <div class="w-12 h-12 mx-auto mb-3 rounded-full border border-white/20 flex items-center justify-center">
              <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <h4 class="font-barlow font-bold text-xl sm:text-3xl text-white uppercase tracking-tight mb-2">
              Materia en Suspensión · Proceso de Taller
            </h4>
            <p class="font-sans text-neutral-400 text-xs sm:text-sm max-w-md mx-auto">
              Documental del proceso de ideación, prototipado 1:1 y selección curatorial de las obras para Zona Maco 2026.
            </p>
          </div>
          <div class="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-neutral-500">
            <span>DURACIÓN: 03:45 MIN</span>
            <span>CENTRO ROBERTO GARZA SADA</span>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isPlaying = ref(false)
</script>
