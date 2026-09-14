<template>
  <section class="relative w-full overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24">
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
      <!-- Grid compositivo monumental idéntico a Figma -->
      <div class="grid grid-cols-1 md:grid-cols-12 items-center gap-4 lg:gap-8">
        <!-- Izquierda: Cruza el -->
        <div class="order-2 md:order-1 md:col-span-4 flex justify-center md:justify-end md:self-center pt-2 md:pt-32">
          <h2
            ref="leftTextRef"
            class="font-barlow text-6xl md:text-[100px] lg:text-[128px] font-normal text-[#070707] text-center md:text-right leading-[0.95] select-none"
          >
            Cruza el
          </h2>
        </div>

        <!-- Centro: Polígono negro hero-arch + UMBRAL debajo -->
        <div class="order-3 md:order-2 md:col-span-4 flex flex-col items-center justify-center">
          <div
            ref="archRef"
            class="relative w-[280px] sm:w-[380px] lg:w-[458px] aspect-[458/625] flex items-center justify-center will-change-transform"
          >
            <div
              ref="archInnerRef"
              class="w-full h-full flex items-center justify-center will-change-transform"
            >
              <img
                src="/images/hero-arch.svg"
                alt="Geometría La Puerta de la Creación"
                class="w-full h-full object-contain select-none pointer-events-none"
              />
            </div>
          </div>

          <!-- Titular monumental UMBRAL centrado bajo el arco -->
          <h1
            ref="umbralTitleRef"
            class="mt-4 sm:mt-6 font-barlow font-normal text-7xl md:text-[120px] lg:text-[160px] tracking-tight text-black text-center uppercase leading-none select-none"
          >
            UMBRAL
          </h1>
        </div>

        <!-- Derecha: Abre la puerta, -->
        <div class="order-1 md:order-3 md:col-span-4 flex justify-center md:justify-start md:self-start pt-2 md:pt-4">
          <h2
            ref="rightTextRef"
            class="font-barlow text-6xl md:text-[100px] lg:text-[128px] font-normal text-[#070707] text-center md:text-left leading-[0.95] select-none"
          >
            Abre la puerta,
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

const leftTextRef = ref<HTMLElement | null>(null)
const archRef = ref<HTMLElement | null>(null)
const archInnerRef = ref<HTMLElement | null>(null)
const rightTextRef = ref<HTMLElement | null>(null)
const umbralTitleRef = ref<HTMLElement | null>(null)

let breathingAnimation: any = null

onMounted(() => {
  if (!import.meta.client) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  if (archRef.value) {
    animate(archRef.value, {
      opacity: [0, 1],
      scale: [0.93, 1],
      duration: 1100,
      ease: 'outCubic'
    })
  }

  // Respiración continua ingrávida en el polígono central
  if (archInnerRef.value) {
    breathingAnimation = animate(archInnerRef.value, {
      translateY: [-6, 6],
      scale: [1, 1.018],
      duration: 4000,
      alternate: true,
      loop: true,
      ease: 'inOutSine'
    })
  }

  if (leftTextRef.value) {
    animate(leftTextRef.value, {
      opacity: [0, 1],
      translateX: [-28, 0],
      duration: 950,
      delay: 150,
      ease: 'outCubic'
    })
  }

  if (rightTextRef.value) {
    animate(rightTextRef.value, {
      opacity: [0, 1],
      translateX: [28, 0],
      duration: 950,
      delay: 150,
      ease: 'outCubic'
    })
  }

  if (umbralTitleRef.value) {
    animate(umbralTitleRef.value, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 950,
      delay: 300,
      ease: 'outCubic'
    })
  }
})

onUnmounted(() => {
  if (breathingAnimation && typeof breathingAnimation.pause === 'function') {
    breathingAnimation.pause()
  }
})
</script>
