<template>
  <section class="py-20 lg:py-28 bg-[#FAFAFA] border-b border-neutral-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="mb-16">
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
          02 / Legado & Visión
        </span>
        <h2 class="font-barlow font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-neutral-900 leading-[0.95]">
          Nuestra Inspiración
        </h2>
        <p class="mt-3 font-barlow text-xl sm:text-2xl text-neutral-600 font-light tracking-wide max-w-2xl">
          Conoce acerca de los que hicieron el Centro Roberto Garza Sada una realidad.
        </p>
      </div>

      <!-- Don Roberto & Doña Margarita Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Don Roberto Garza Sada Card -->
        <article class="bg-white border border-neutral-200 p-8 sm:p-10 flex flex-col justify-between group hover:border-neutral-900 transition-colors shadow-sm">
          <div>
            <div class="flex items-center gap-6 mb-6">
              <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-none overflow-hidden bg-neutral-100 border border-neutral-200 flex-shrink-0">
                <img
                  src="/images/roberto-garza-sada.png"
                  alt="Don Roberto Garza Sada"
                  class="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span class="font-mono text-xs uppercase tracking-widest text-neutral-500">Mecenazgo e Industria</span>
                <h3 class="font-barlow font-bold text-2xl sm:text-3xl text-neutral-900 uppercase tracking-tight">
                  Don Roberto Garza Sada
                </h3>
                <p class="font-barlow text-sm text-neutral-600 uppercase tracking-wider">1895 – 1979</p>
              </div>
            </div>
            <p class="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed">
              Empresario, humanista y filántropo visionario. Su convicción en el poder transformador de la educación superior y el desarrollo industrial sentó las bases para el fomento a las artes y las ciencias aplicadas en el norte de México.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-neutral-100 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            Pilar Fundacional · UDEM
          </div>
        </article>

        <!-- Doña Margarita Garza Sada de Fernández Card -->
        <article class="bg-white border border-neutral-200 p-8 sm:p-10 flex flex-col justify-between group hover:border-neutral-900 transition-colors shadow-sm">
          <div>
            <div class="flex items-center gap-6 mb-6">
              <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-none overflow-hidden bg-neutral-100 border border-neutral-200 flex-shrink-0">
                <img
                  src="/images/margarita-garza-sada.png"
                  alt="Doña Margarita Garza Sada de Fernández"
                  class="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span class="font-mono text-xs uppercase tracking-widest text-neutral-500">Promotora de las Artes</span>
                <h3 class="font-barlow font-bold text-2xl sm:text-3xl text-neutral-900 uppercase tracking-tight">
                  Doña Margarita Garza Sada
                </h3>
                <p class="font-barlow text-sm text-neutral-600 uppercase tracking-wider">de Fernández · 1925 – 2014</p>
              </div>
            </div>
            <p class="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed">
              Incansable coleccionista y promotora cultural. Su generosidad e insistencia en dotar a México de un espacio educativo con estándares arquitectónicos mundiales hicieron posible encomendar esta sede al maestro Tadao Ando.
            </p>
          </div>
          <div class="pt-6 mt-6 border-t border-neutral-100 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            Impulsora del CRGS
          </div>
        </article>
      </div>

      <!-- Tadao Ando Highlight Section -->
      <article class="relative overflow-hidden bg-[#151515] text-white border border-neutral-800 p-8 sm:p-12 lg:p-16">
        <!-- Background Arch Polygon Graphic with subtle floating -->
        <img
          ref="tadaoArchRef"
          src="/images/tadao-arch.svg"
          alt="Geometría Tadao Ando"
          class="absolute -right-16 -bottom-16 w-96 lg:w-[540px] opacity-20 pointer-events-none filter blur-[1px] will-change-transform"
        />

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div class="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div class="relative w-40 h-48 sm:w-48 sm:h-56 overflow-hidden border border-neutral-700 bg-neutral-900 shadow-2xl mb-4">
              <img
                src="/images/tadao-ando.png"
                alt="Tadao Ando - Arquitecto Premio Pritzker"
                class="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <span class="font-mono text-xs uppercase tracking-widest text-neutral-400">Premio Pritzker 1995</span>
            <h3 class="font-barlow font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Tadao Ando
            </h3>
            <p class="font-barlow text-sm text-neutral-400 uppercase tracking-wider">Osaka, Japón</p>
          </div>

          <div class="lg:col-span-8 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800 border border-neutral-700 font-mono text-xs uppercase tracking-widest text-purple-300">
              <span>La Puerta de la Creación</span>
            </div>

            <h4 class="font-barlow font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-white leading-tight">
              Un volumen escultórico de 30 metros de vuelo en concreto
            </h4>

            <p class="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed">
              El Centro Roberto Garza Sada fue concebido por Tadao Ando como una pieza escultórica habitable. El corazón del edificio es un gran vano parabólico que se eleva sobre el terreno, creando una puerta monumental que enmarca las montañas de Monterrey y simboliza el ingreso de los estudiantes a la vida creativa.
            </p>

            <blockquote class="border-l-2 border-purple-500 pl-4 py-1 italic font-barlow text-lg sm:text-xl text-neutral-200">
              "El espacio debe tocar el alma de quienes lo habitan. Este edificio busca encender la chispa creadora en cada joven que cruza su umbral."
            </blockquote>

            <div class="pt-4 flex items-center gap-4">
              <NuxtLink
                to="/crgs"
                class="font-barlow font-bold text-base uppercase tracking-widest text-white hover:text-purple-300 flex items-center gap-2 transition-colors"
              >
                <span>Descubre la arquitectura completa</span>
                <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

const tadaoArchRef = ref<HTMLElement | null>(null)
let tadaoFloatAnim: ReturnType<typeof animate> | null = null

onMounted(() => {
  if (import.meta.client && tadaoArchRef.value) {
    tadaoFloatAnim = animate(tadaoArchRef.value, {
      translateY: [-10, 8],
      rotate: [-0.8, 0.8],
      duration: 6500,
      alternate: true,
      loop: true,
      ease: 'inOutSine'
    })
  }
})

onUnmounted(() => {
  if (tadaoFloatAnim && typeof tadaoFloatAnim.pause === 'function') {
    tadaoFloatAnim.pause()
  }
})
</script>
