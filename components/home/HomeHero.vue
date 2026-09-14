<template>
  <section class="relative w-full overflow-hidden bg-[#FAFAFA] border-b border-neutral-200 pt-10 pb-16 lg:py-20">
    <!-- Subtle Architectural Background Grid Lines -->
    <div class="absolute inset-0 pointer-events-none grid grid-cols-6 lg:grid-cols-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-for="i in 12" :key="i" class="h-full border-r border-neutral-200/50 last:border-r-0" />
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Upper Eyebrow Meta -->
      <div
        ref="eyebrowRef"
        class="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-neutral-200/80 font-mono text-xs uppercase tracking-widest text-neutral-500"
      >
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
          <span>Centro Roberto Garza Sada · UDEM</span>
        </div>
        <div>Zona Maco 2027 · Plataforma de Exposición</div>
        <div class="hidden sm:block">25°39'40.7"N 100°25'08.2"W</div>
      </div>

      <!-- Main Typographic Composition -->
      <div class="pt-10 lg:pt-14 pb-8 flex flex-col items-center text-center">
        <!-- Top Text Phrase -->
        <h1
          ref="titleTopRef"
          class="font-barlow font-light text-6xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[132px] tracking-tightest leading-[0.88] text-neutral-900 uppercase"
        >
          Abre la puerta,
        </h1>

        <!-- Central Architectural Element & Logo -->
        <div
          ref="archContainerRef"
          class="relative my-6 sm:my-8 lg:my-10 flex items-center justify-center"
        >
          <div class="relative w-44 sm:w-56 lg:w-64 h-56 sm:h-72 lg:h-80 flex items-center justify-center">
            <!-- Architectural Polygon with Continuous Architectural Breathing Float -->
            <img
              ref="archSvgRef"
              src="/images/hero-arch.svg"
              alt="Geometría arquitectónica La Puerta de la Creación"
              class="absolute inset-0 w-full h-full object-contain filter drop-shadow-md opacity-95 will-change-transform"
            />
            <!-- Centered Umbral Emblem -->
            <div class="relative z-10 p-3 bg-white/95 backdrop-blur-sm border border-neutral-900 shadow-xl max-w-[130px] sm:max-w-[160px] transition-transform duration-500 hover:scale-105">
              <img
                src="/images/logo-umbral.png"
                alt="Logo Umbral"
                class="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <!-- Bottom Text Phrase -->
        <div ref="titleBottomRef" class="space-y-1">
          <p class="font-barlow font-light text-6xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[132px] tracking-tightest leading-[0.88] text-neutral-900 uppercase">
            Cruza el
          </p>
          <p class="font-barlow font-bold text-7xl sm:text-9xl md:text-[110px] lg:text-[140px] xl:text-[150px] tracking-tightest leading-[0.85] text-neutral-950 uppercase">
            UMBRAL
          </p>
        </div>

        <!-- Subtitle and Description -->
        <p
          ref="subtitleRef"
          class="mt-8 max-w-2xl font-barlow text-xl sm:text-2xl text-neutral-600 font-light tracking-wide leading-relaxed"
        >
          El portal donde las ideas gestadas en las aulas del CRGS se materializan y proyectan hacia la escena internacional del arte y el diseño.
        </p>

        <!-- Quick Access Architectural CTA Buttons -->
        <div
          ref="ctasRef"
          class="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-barlow text-lg uppercase tracking-wider font-semibold"
        >
          <NuxtLink
            to="/zona-maco"
            class="px-8 py-4 bg-neutral-950 text-white hover:bg-neutral-800 transition-all duration-300 border border-neutral-950 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 group"
          >
            <span>Explorar Zona Maco</span>
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/crgs"
            class="px-8 py-4 bg-transparent text-neutral-900 hover:bg-neutral-100 transition-all duration-300 border border-neutral-300 hover:border-neutral-900 hover:scale-[1.02] active:scale-[0.98]"
          >
            Conoce el CRGS
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate, stagger } from 'animejs'

const eyebrowRef = ref<HTMLElement | null>(null)
const titleTopRef = ref<HTMLElement | null>(null)
const archContainerRef = ref<HTMLElement | null>(null)
const archSvgRef = ref<HTMLElement | null>(null)
const titleBottomRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const ctasRef = ref<HTMLElement | null>(null)

let archFloatAnim: ReturnType<typeof animate> | null = null

onMounted(() => {
  if (!import.meta.client) return

  // Entrada monumental escalonada (Stagger Entrance Choreography)
  if (eyebrowRef.value) animate(eyebrowRef.value, { opacity: [0, 1], translateY: [-12, 0], duration: 800, ease: 'outQuad', delay: 100 })
  if (titleTopRef.value) animate(titleTopRef.value, { opacity: [0, 1], translateY: [32, 0], duration: 1000, ease: 'outCubic', delay: 200 })
  if (archContainerRef.value) animate(archContainerRef.value, { opacity: [0, 1], scale: [0.88, 1], translateY: [24, 0], duration: 1200, ease: 'outCubic', delay: 400 })
  if (titleBottomRef.value) animate(titleBottomRef.value, { opacity: [0, 1], translateY: [36, 0], duration: 1000, ease: 'outCubic', delay: 550 })
  if (subtitleRef.value) animate(subtitleRef.value, { opacity: [0, 1], translateY: [20, 0], duration: 900, ease: 'outCubic', delay: 750 })
  if (ctasRef.value) {
    animate(ctasRef.value.children, {
      opacity: [0, 1],
      translateY: [16, 0],
      scale: [0.96, 1],
      duration: 800,
      delay: stagger(120, { start: 900 }),
      ease: 'outCubic'
    })
  }

  // Floating sutil tipo respiración arquitectónica continua en el arco SVG
  if (archSvgRef.value) {
    archFloatAnim = animate(archSvgRef.value, {
      translateY: [-7, 5],
      rotate: [-0.6, 0.6],
      duration: 4800,
      alternate: true,
      loop: true,
      ease: 'inOutSine'
    })
  }
})

onUnmounted(() => {
  if (archFloatAnim && typeof archFloatAnim.pause === 'function') {
    archFloatAnim.pause()
  }
})
</script>
