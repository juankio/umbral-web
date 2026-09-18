<template>
  <section
    ref="heroSectionRef"
    class="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-white overflow-hidden py-8 sm:py-12 lg:py-0 select-none"
  >
    <div class="relative w-full max-w-[1720px] mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-center items-center">
      <!-- Contenedor relativo para el ensamble fiel a Figma -->
      <div class="relative w-full flex flex-col lg:flex-row items-center justify-center">
        <!-- Frase Superior en Móvil / Derecha en Desktop: Abre la puerta, -->
        <h2
          ref="rightTextRef"
          class="order-1 lg:order-none lg:absolute lg:right-4 xl:right-12 2xl:right-20 lg:top-[18%] lg:-translate-y-1/2 font-barlow text-3xl sm:text-5xl lg:text-7xl xl:text-[96px] 2xl:text-[112px] font-normal text-[#070707] text-center lg:text-right leading-none select-none tracking-normal will-change-transform mb-3 sm:mb-4 lg:mb-0"
        >
          Abre la puerta,
        </h2>

        <!-- Centro: Triángulo negro estático + Titular UMBRAL -->
        <div class="order-2 lg:order-none flex flex-col items-center justify-center will-change-transform z-10 my-2 sm:my-4 lg:my-0">
          <!-- Vector SVG estático proporcional a la altura de la pantalla (Figma 112:13) -->
          <div ref="triangleRef" class="flex justify-center select-none pointer-events-none">
            <svg
              viewBox="0 0 365 500"
              class="h-[26vh] sm:h-[34vh] lg:h-[46vh] max-h-[480px] min-h-[190px] w-auto block select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M0 349.751L90.4552 0L364.99 500L0 349.751Z" fill="black" />
            </svg>
          </div>

          <!-- Titular monumental UMBRAL centrado directamente debajo -->
          <h1
            ref="umbralTitleRef"
            class="font-barlow font-normal text-5xl sm:text-7xl lg:text-[100px] xl:text-[130px] 2xl:text-[144px] leading-none text-black tracking-tight text-center select-none mt-3 sm:mt-5 lg:mt-6 will-change-transform"
          >
            UMBRAL
          </h1>
        </div>

        <!-- Frase Inferior en Móvil / Izquierda en Desktop: Cruza el -->
        <h2
          ref="leftTextRef"
          class="order-3 lg:order-none lg:absolute lg:left-4 xl:left-12 2xl:left-20 lg:top-[58%] lg:-translate-y-1/2 font-barlow text-3xl sm:text-5xl lg:text-7xl xl:text-[96px] 2xl:text-[112px] font-normal text-[#070707] text-center lg:text-left leading-none select-none tracking-normal will-change-transform mt-3 sm:mt-4 lg:mt-0"
        >
          Cruza el
        </h2>
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

  // Entrada suave sin FOUC
  if (leftTextRef.value) {
    animate(leftTextRef.value, {
      opacity: [0, 1],
      translateX: [-25, 0],
      duration: 1000,
      delay: 100,
      ease: 'outExpo'
    })
  }

  if (rightTextRef.value) {
    animate(rightTextRef.value, {
      opacity: [0, 1],
      translateX: [25, 0],
      duration: 1000,
      delay: 180,
      ease: 'outExpo'
    })
  }

  if (triangleRef.value) {
    animate(triangleRef.value, {
      opacity: [0, 1],
      scale: [0.98, 1],
      duration: 1000,
      delay: 220,
      ease: 'outExpo'
    })
  }

  if (umbralTitleRef.value) {
    animate(umbralTitleRef.value, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
      delay: 280,
      ease: 'outExpo'
    })
  }
})
</script>
