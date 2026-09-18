<template>
  <section id="repentina" class="py-20 sm:py-28 lg:py-32 bg-[#1C1C1C] text-white border-b border-neutral-900 relative select-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Titular Monumental: Nuestra repentina (Figma id: 332:373, Barlow Condensed 128px regular) -->
      <div class="text-center mb-14 sm:mb-20">
        <h2 class="font-barlow font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[128px] text-white uppercase tracking-tight leading-none">
          Nuestra repentina
        </h2>
      </div>

      <!-- Dos columnas de contexto (Figma id: Group 7, y: 1555) con polígono origami conector (Vector 4) -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
        <!-- Columna izquierda: Contexto repentina y de dónde nacen los proyectos -->
        <div class="space-y-4">
          <h3 class="font-barlow font-normal text-3xl sm:text-4xl lg:text-[48px] leading-[1.08] text-white uppercase tracking-tight">
            Contexto repentina y de dónde nacen los proyectos
          </h3>
          <p class="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            48 horas de inmersión total y experimentación continua en los talleres del Centro Roberto Garza Sada. La materia dialoga con la tensión del vacío para engendrar soluciones que disuelven fronteras entre disciplinas.
          </p>
        </div>

        <!-- Polígono origami conector (Vector 4, id: 325:20) -->
        <div class="flex items-center justify-center py-2 lg:py-0">
          <svg
            width="122"
            height="140"
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
        <div class="space-y-4">
          <h3 class="font-barlow font-normal text-3xl sm:text-4xl lg:text-[48px] leading-[1.08] text-white uppercase tracking-tight">
            Información general y proceso de selección
          </h3>
          <p class="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            El comité curatorial del CRGS y especialistas invitados de Zona Maco evaluaron más de 60 propuestas de taller para seleccionar las 10 piezas definitivas que conforman la colección oficial 2026.
          </p>
        </div>
      </div>

      <!-- Marco panorámico arquitectónico de video (image 18) -->
      <div class="max-w-6xl mx-auto aspect-[16/8] sm:aspect-[16/9] bg-neutral-900 border border-neutral-700 relative overflow-hidden group shadow-2xl">
        <img
          src="/images/crgs-building.png"
          alt="Video proceso repentina"
          class="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
        />
        <div class="absolute inset-0 bg-neutral-950/60 group-hover:bg-neutral-950/40 transition-colors duration-500" />

        <!-- Trazos arquitectónicos diagonales en cruz / perspectiva isométrica -->
        <svg
          class="absolute inset-0 w-full h-full pointer-events-none z-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.22)" stroke-width="0.35" stroke-dasharray="2,2" />
          <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,255,255,0.22)" stroke-width="0.35" stroke-dasharray="2,2" />
          <polygon points="50,0 100,50 50,100 0,50" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="0.3" stroke-dasharray="1.5,1.5" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.12)" stroke-width="0.25" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.12)" stroke-width="0.25" />
        </svg>

        <!-- Metadatos perimetrales técnicos -->
        <div class="absolute top-4 left-4 sm:top-6 sm:left-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-300 z-20">
          REGISTRO AUDIOVISUAL · 03:45 MIN
        </div>
        <div class="absolute top-4 right-4 sm:top-6 sm:right-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-300 z-20">
          25°39'45"N 100°25'08"W
        </div>
        <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 z-20 hidden sm:block">
          CRGS · TALLERES DE PRODUCCIÓN
        </div>
        <div class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 z-20 hidden sm:block">
          EDICIÓN ZONA MACO 2026
        </div>

        <!-- Contenido centralizado sobre el video -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
          <button
            type="button"
            @click="isPlaying = true"
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 hover:bg-white text-white hover:text-neutral-950 border border-white/40 backdrop-blur-md flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
            aria-label="Reproducir video proceso repentina"
          >
            <svg class="w-7 h-7 sm:w-8 sm:h-8 translate-x-0.5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <h3 class="font-barlow font-normal text-3xl sm:text-5xl text-white uppercase tracking-wide drop-shadow-lg">
            Video proceso repentina
          </h3>
        </div>
      </div>
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
        <div class="relative w-full max-w-5xl aspect-video bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-10">
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs uppercase tracking-widest text-neutral-400">CRGS · CÁPSULA DOCUMENTAL</span>
            <button
              type="button"
              @click="isPlaying = false"
              class="font-mono text-xs uppercase tracking-widest text-neutral-300 hover:text-white px-3 py-1 border border-neutral-700 hover:border-white transition-colors"
            >
              Cerrar [ESC]
            </button>
          </div>
          <div class="text-center my-auto">
            <div class="w-14 h-14 mx-auto mb-4 rounded-full border border-white/20 flex items-center justify-center">
              <div class="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <h4 class="font-barlow font-bold text-2xl sm:text-4xl text-white uppercase tracking-tight mb-2">
              Materia en Suspensión · Proceso de Taller
            </h4>
            <p class="font-sans text-neutral-400 text-sm max-w-lg mx-auto">
              Documental del proceso de ideación, prototipado 1:1 y selección curatorial de las obras para Zona Maco 2026.
            </p>
          </div>
          <div class="flex items-center justify-between font-mono text-[11px] text-neutral-500">
            <span>DURACIÓN: 03:45 MIN</span>
            <span>CENTRO ROBERTO GARZA SADA</span>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isPlaying = ref(false)
</script>
