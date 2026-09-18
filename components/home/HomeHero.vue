<template>
  <section
    ref="heroSectionRef"
    class="relative w-full overflow-hidden bg-white pt-6 pb-8 lg:pt-8 lg:pb-10"
  >
    <div class="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-12">
      <!-- Contenedor central arquitectónico fiel a Figma -->
      <div class="flex flex-col items-center justify-center">
        <!-- Bloque del Monolito con frases laterales ancladas en desktop -->
        <div class="relative flex flex-col lg:flex-row items-center justify-center">
          <!-- Frase Arriba en mobile / Derecha en desktop: Abre la puerta, (alineado con el ápice del triángulo) -->
          <h2
            ref="rightTextRef"
            class="order-1 lg:order-none lg:absolute lg:left-[100%] lg:ml-6 xl:ml-8 2xl:ml-10 lg:top-1 xl:top-2 font-barlow text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-normal text-black text-center lg:text-left leading-none tracking-normal select-none whitespace-nowrap will-change-transform mb-3 lg:mb-0"
          >
            Abre la puerta,
          </h2>

          <!-- Frase Previa en mobile / Izquierda en desktop: Cruza el (alineado con el tercio inferior del triángulo) -->
          <h2
            ref="leftTextRef"
            class="order-2 lg:order-none lg:absolute lg:right-[100%] lg:mr-6 xl:mr-8 2xl:mr-10 lg:top-[200px] xl:top-[220px] font-barlow text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-normal text-black text-center lg:text-right leading-none tracking-normal select-none whitespace-nowrap will-change-transform mb-4 lg:mb-0"
          >
            Cruza el
          </h2>

          <!-- Vector SVG estático exacto de Figma (id: 112:13) -->
          <div
            ref="triangleRef"
            class="order-3 lg:order-none flex justify-center select-none pointer-events-none will-change-transform"
          >
            <svg
              viewBox="0 0 365 500"
              class="w-[180px] sm:w-[220px] lg:w-[250px] h-auto block"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M0 349.751L90.4552 0L364.99 500L0 349.751Z" fill="black" />
            </svg>
          </div>
        </div>

        <!-- Titular monumental UMBRAL directamente debajo del triángulo -->
        <h1
          ref="umbralTitleRef"
          class="font-barlow font-normal text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] leading-none text-black mt-4 sm:mt-5 tracking-tight text-center select-none will-change-transform"
        >
          UMBRAL
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animate } from 'animejs'

const heroSectionRef = ref<HTMLElement | null>(null)
const leftTextRef = ref<HTMLElement | null>(null)
const rightTextRef = ref<HTMLElement | null>(null)
const triangleRef = ref<HTMLElement | null>(null)
const umbralTitleRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // Entrada suave y cinematográfica sin FOUC
  if (leftTextRef.value) {
    animate(leftTextRef.value, {
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 1000,
      delay: 100,
      ease: 'outExpo'
    })
  }

  if (rightTextRef.value) {
    animate(rightTextRef.value, {
      opacity: [0, 1],
      translateX: [30, 0],
      duration: 1000,
      delay: 180,
      ease: 'outExpo'
    })
  }

  if (triangleRef.value) {
    animate(triangleRef.value, {
      opacity: [0, 1],
      scale: [0.97, 1],
      duration: 1000,
      delay: 240,
      ease: 'outExpo'
    })
  }

  if (umbralTitleRef.value) {
    animate(umbralTitleRef.value, {
      opacity: [0, 1],
      translateY: [25, 0],
      duration: 1100,
      delay: 320,
      ease: 'outExpo'
    })
  }
})
</script>
