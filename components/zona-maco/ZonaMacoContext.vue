<template>
  <section class="py-16 lg:py-24 bg-white border-b border-neutral-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">
          Génesis & Proceso
        </span>
        <h2 class="font-barlow font-bold text-4xl sm:text-5xl uppercase tracking-tight text-neutral-950">
          Contexto repentina y de dónde nacen los proyectos
        </h2>
        <p class="mt-2 font-barlow text-xl text-neutral-600 font-light tracking-wide max-w-2xl">
          48 horas de inmersión total en los talleres del CRGS donde la frontera entre disciplinas se desvanece.
        </p>
      </div>

      <!-- Two Column Context: Video card & Process sketches -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- Video Card -->
        <div class="lg:col-span-7 bg-neutral-950 border border-neutral-800 text-white flex flex-col justify-between overflow-hidden shadow-lg group">
          <div class="relative aspect-video bg-neutral-900 overflow-hidden">
            <img
              src="/images/crgs-building.png"
              alt="Video Documental Repentina CRGS"
              class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-neutral-950/40 flex items-center justify-center">
              <button
                type="button"
                @click="isPlaying = !isPlaying"
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-neutral-950 flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-2xl focus:outline-none"
                aria-label="Reproducir video documental de la repentina"
              >
                <svg v-if="!isPlaying" class="w-7 h-7 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <svg v-else class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </button>
            </div>
            <div class="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 bg-neutral-900/90 text-neutral-300 border border-neutral-700">
              Cápsula Audiovisual · 03:45 min
            </div>
          </div>

          <div class="p-6 sm:p-8 space-y-3">
            <h3 class="font-barlow font-bold text-2xl uppercase tracking-tight text-white">
              Documental: Materia en Suspensión
            </h3>
            <p class="font-sans text-neutral-400 text-sm leading-relaxed">
              Registro del proceso de ideación, prototipado rápido en talleres de madera, metal y vaciado de concreto en los niveles 2 y 4 de La Puerta de la Creación.
            </p>
          </div>
        </div>

        <!-- Sketches & Workshop Notes -->
        <div class="lg:col-span-5 flex flex-col justify-between gap-6">
          <div class="bg-white border border-neutral-200 p-6 sm:p-8 shadow-sm flex-1">
            <div class="flex items-center justify-between pb-4 border-b border-neutral-100 mb-4">
              <span class="font-mono text-xs uppercase tracking-wider text-neutral-500">Bitácora de Taller</span>
              <span class="font-mono text-xs text-neutral-400">Ed. 2026</span>
            </div>
            <div class="space-y-4">
              <div class="flex gap-4 items-start">
                <div class="w-12 h-12 bg-neutral-100 border border-neutral-200 flex-shrink-0 flex items-center justify-center font-mono text-xs font-bold">
                  01
                </div>
                <div>
                  <h4 class="font-barlow font-bold text-lg uppercase text-neutral-900 tracking-tight">El Disparador Creativo</h4>
                  <p class="font-sans text-neutral-600 text-xs sm:text-sm mt-1">
                    Cada equipo recibió un fragmento de hormigón extraído de las obras de mantenimiento del edificio como eje conceptual ineludible.
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="w-12 h-12 bg-neutral-100 border border-neutral-200 flex-shrink-0 flex items-center justify-center font-mono text-xs font-bold">
                  02
                </div>
                <div>
                  <h4 class="font-barlow font-bold text-lg uppercase text-neutral-900 tracking-tight">Cruce Disciplinar Forzado</h4>
                  <p class="font-sans text-neutral-600 text-xs sm:text-sm mt-1">
                    Los equipos se integraron obligatoriamente por estudiantes de Artes, Diseño Industrial, Gráfico y Arquitectura de Interiores.
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="w-12 h-12 bg-neutral-100 border border-neutral-200 flex-shrink-0 flex items-center justify-center font-mono text-xs font-bold">
                  03
                </div>
                <div>
                  <h4 class="font-barlow font-bold text-lg uppercase text-neutral-900 tracking-tight">Curaduría Externa</h4>
                  <p class="font-sans text-neutral-600 text-xs sm:text-sm mt-1">
                    Un jurado internacional seleccionó las 10 piezas finales que viajan con acreditación completa al pabellón de Zona Maco.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Secondary Image Preview -->
          <div class="relative overflow-hidden h-36 border border-neutral-200 bg-neutral-900">
            <img
              src="/images/crgs-geometry.png"
              alt="Bocetos y geometría"
              class="w-full h-full object-cover grayscale contrast-125"
            />
            <div class="absolute inset-0 bg-neutral-950/60 p-4 flex items-center justify-between">
              <span class="font-barlow font-bold text-lg uppercase tracking-wider text-white">
                Ver Cuadernos de Bocetos
              </span>
              <span class="font-mono text-xs uppercase tracking-widest text-neutral-300">
                PDF Archivo (14 MB)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isPlaying = ref(false)
</script>
