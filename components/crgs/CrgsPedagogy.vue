<template>
  <section class="py-16 lg:py-24 bg-white border-b border-neutral-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Statement -->
        <div class="lg:col-span-6 space-y-6">
          <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
            01 / Metodología de Estudio
          </span>

          <h2 class="font-barlow font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-neutral-950 leading-[0.95]">
            Aprende en clases de estudio dirigidas por la práctica e impartidas por una facultad de artistas y diseñadores.
          </h2>

          <div class="w-16 h-1 bg-neutral-950" />

          <p class="font-sans text-neutral-700 text-base sm:text-lg leading-relaxed">
            En el Centro Roberto Garza Sada, la teoría y la ejecución manual convergen en un único entorno continuo. Los estudiantes trabajan en talleres de escala 1:1, donde la materia cruda (concreto, metales, madera, textiles y algoritmos digitales) se somete a prueba física permanente.
          </p>

          <p class="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed">
            La interacción directa con profesores activos en la práctica profesional internacional y las revisiones colectivas tipo charette fomentan un rigor crítico que prepara a cada alumno para los desafíos del diseño y el arte a nivel global.
          </p>

          <!-- Studio Metrics -->
          <div class="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200 font-mono">
            <div>
              <span class="font-barlow font-bold text-3xl text-neutral-950 block">22+</span>
              <span class="text-neutral-500 text-[11px] uppercase tracking-wider">Talleres Especializados</span>
            </div>
            <div>
              <span class="font-barlow font-bold text-3xl text-neutral-950 block">1:1</span>
              <span class="text-neutral-500 text-[11px] uppercase tracking-wider">Escala de Prototipado</span>
            </div>
            <div>
              <span class="font-barlow font-bold text-3xl text-neutral-950 block">100%</span>
              <span class="text-neutral-500 text-[11px] uppercase tracking-wider">Práctica en Estudio</span>
            </div>
          </div>
        </div>

        <!-- Right Visual Showcase -->
        <div class="lg:col-span-6 space-y-6">
          <div class="relative overflow-hidden border border-neutral-200 bg-neutral-900 group shadow-md">
            <img
              src="/images/crgs-building.png"
              alt="Estudios de trabajo en el CRGS"
              class="w-full h-80 object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <span class="font-mono text-[10px] text-neutral-300 uppercase tracking-widest">Nivel 4 · Aulas Taller</span>
              <h3 class="font-barlow font-bold text-2xl text-white uppercase tracking-tight">Espacios Abiertos de Co-creación</h3>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white border border-neutral-200 p-5">
              <h4 class="font-barlow font-bold text-xl uppercase tracking-tight text-neutral-950">Talleres Digitales</h4>
              <p class="font-sans text-xs text-neutral-600 mt-1">Corte láser, ruteado CNC de 5 ejes, impresión 3D en resina y arcilla.</p>
            </div>
            <div class="bg-white border border-neutral-200 p-5">
              <h4 class="font-barlow font-bold text-xl uppercase tracking-tight text-neutral-950">Laboratorios Tectónicos</h4>
              <p class="font-sans text-xs text-neutral-600 mt-1">Hornos de cerámica alta temperatura, fundición y laboratorio de maderas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Metodología: clases de estudio dirigidas por la práctica e impartidas por artistas y diseñadores
</script>
