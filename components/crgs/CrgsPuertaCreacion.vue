<template>
  <section
    id="puerta-creacion"
    class="relative w-full min-h-[95vh] lg:min-h-screen bg-[#1C1C1C] flex flex-col items-center justify-center overflow-hidden py-20 sm:py-28 px-4 select-text"
  >
    <!-- Contenedor Central del Triángulo Verde Partido a la Mitad al Hacer Clic -->
    <div class="relative flex items-center justify-center w-full max-w-5xl my-auto">
      <!-- 1. El Triángulo Verde Oficial #4BA550 de Figma (dividido en 2 alas que se parten) -->
      <div
        class="relative w-[300px] sm:w-[380px] md:w-[440px] lg:w-[490px] xl:w-[520px] aspect-[650/890] max-h-[64vh] cursor-pointer group select-none transition-transform duration-500 ease-out"
        :class="!isSplit ? 'hover:scale-[1.02]' : ''"
        @click="!isSplit && toggleSplit()"
      >
        <!-- Ala Izquierda del Triángulo (se desliza a la izquierda al hacer clic) -->
        <div
          class="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
          :class="isSplit ? '-translate-x-[110px] sm:-translate-x-[180px] md:-translate-x-[240px] lg:-translate-x-[300px] -rotate-2 opacity-70' : 'translate-x-0 rotate-0 opacity-100'"
          style="clip-path: inset(0 50% 0 0);"
        >
          <img
            src="/images/crgs-puerta-creacion.svg"
            alt="La Puerta de la Creación - Mitad izquierda"
            class="w-full h-full object-contain pointer-events-none"
            draggable="false"
          />
        </div>

        <!-- Ala Derecha del Triángulo (se desliza a la derecha al hacer clic) -->
        <div
          class="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
          :class="isSplit ? 'translate-x-[110px] sm:translate-x-[180px] md:translate-x-[240px] lg:translate-x-[300px] rotate-2 opacity-70' : 'translate-x-0 rotate-0 opacity-100'"
          style="clip-path: inset(0 0 0 50%);"
        >
          <img
            src="/images/crgs-puerta-creacion.svg"
            alt="La Puerta de la Creación - Mitad derecha"
            class="w-full h-full object-contain pointer-events-none"
            draggable="false"
          />
        </div>
      </div>

      <!-- 2. Video Documental que emerge en el centro cuando el triángulo se parte a la mitad -->
      <div
        class="absolute inset-0 z-30 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        :class="isSplit ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'"
      >
        <div class="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl aspect-video bg-black border border-neutral-800 shadow-2xl overflow-hidden rounded-xs">
          <!-- Botón para cerrar y volver a unir el triángulo -->
          <button
            type="button"
            @click="toggleSplit"
            class="absolute top-3 right-3 z-40 bg-black/80 hover:bg-white text-white hover:text-black border border-white/30 px-3 py-1 text-xs font-barlow uppercase tracking-wider rounded-full flex items-center gap-1.5 transition-all cursor-pointer shadow-lg"
            aria-label="Cerrar video y unir triángulo"
          >
            <span>✕</span>
            <span>Cerrar vano</span>
          </button>

          <!-- Iframe con el documental oficial -->
          <iframe
            v-if="isSplit"
            class="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/Ro-pZcZIuPQ?autoplay=1&rel=0"
            title="Centro Roberto Garza Sada: La Puerta de la Creación (Tadao Ando)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>

      <!-- 3. Título Blanco Cursivo Monumental 1:1 Figma (#332:320)
           En reposo: centrado sobre el triángulo verde.
           Al abrirse el video: se traslada arriba del reproductor de video de forma limpia. -->
      <div
        class="absolute inset-x-0 z-20 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none px-4"
        :class="isSplit ? '-translate-y-[220px] sm:-translate-y-[270px] lg:-translate-y-[310px] scale-70 sm:scale-80 opacity-95' : 'translate-y-0 scale-100 opacity-100'"
      >
        <h2
          class="font-barlow font-medium italic text-4xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[115px] text-white leading-none tracking-tight text-center drop-shadow-md select-none"
        >
          La Puerta de la Creación
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSplit = ref(false)

const toggleSplit = () => {
  isSplit.value = !isSplit.value
}
</script>
