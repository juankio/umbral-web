<template>
  <section
    ref="heroSectionRef"
    class="relative w-full overflow-hidden bg-white pt-6 pb-10 lg:pt-8 lg:pb-14"
  >
    <div class="max-w-[1280px] mx-auto px-6 sm:px-12">
      <div class="grid grid-cols-1 md:grid-cols-12 items-center gap-4 lg:gap-8">
        <!-- Izquierda: Cruza el (Stagger 1) -->
        <div class="order-2 md:order-1 md:col-span-4 flex justify-center md:justify-end md:self-center pt-2 md:pt-16">
          <h2
            ref="leftTextRef"
            class="hero-title-reveal font-barlow text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#070707] text-center md:text-right leading-[0.95] select-none opacity-0 will-change-transform"
          >
            Cruza el
          </h2>
        </div>

        <!-- Centro: Monolito 3D Arquitectónico de Tadao Ando + UMBRAL (Stagger 2 & 3) -->
        <div class="order-3 md:order-2 md:col-span-4 flex flex-col items-center justify-center">
          <div class="relative w-48 sm:w-60 lg:w-72 aspect-[367/501] flex items-center justify-center cursor-grab active:cursor-grabbing">
            <ArchitecturalOrigami />
          </div>

          <!-- Logo monumental UMBRAL \ CRGS exacto de Figma (id: 112:17) -->
          <h1 class="sr-only">UMBRAL · Centro Roberto Garza Sada · UDEM</h1>
          <div
            ref="umbralTitleRef"
            class="hero-title-reveal mt-4 sm:mt-6 w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px] flex justify-center select-none opacity-0 will-change-transform"
          >
            <img
              src="/images/logo-umbral-2.png"
              alt="UMBRAL · CRGS"
              class="w-full h-auto object-contain pointer-events-none"
            />
          </div>
        </div>

        <!-- Derecha: Abre la puerta, (Stagger 1) -->
        <div class="order-1 md:order-3 md:col-span-4 flex justify-center md:justify-start md:self-start pt-2 md:pt-4">
          <h2
            ref="rightTextRef"
            class="hero-title-reveal font-barlow text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#070707] text-center md:text-left leading-[0.95] select-none opacity-0 will-change-transform"
          >
            Abre la puerta,
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animate } from 'animejs'
import ArchitecturalOrigami from './ArchitecturalOrigami.vue'

const heroSectionRef = ref<HTMLElement | null>(null)
const leftTextRef = ref<HTMLElement | null>(null)
const rightTextRef = ref<HTMLElement | null>(null)
const umbralTitleRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (leftTextRef.value) leftTextRef.value.style.opacity = '1'
    if (rightTextRef.value) rightTextRef.value.style.opacity = '1'
    if (umbralTitleRef.value) umbralTitleRef.value.style.opacity = '1'
    return
  }

  // Revelación escalonada rítmica
  if (leftTextRef.value) {
    animate(leftTextRef.value, {
      opacity: [0, 1],
      translateX: [-40, 0],
      translateY: [10, 0],
      duration: 1100,
      delay: 150,
      ease: 'outExpo'
    })
  }

  if (rightTextRef.value) {
    animate(rightTextRef.value, {
      opacity: [0, 1],
      translateX: [40, 0],
      translateY: [-10, 0],
      duration: 1100,
      delay: 250,
      ease: 'outExpo'
    })
  }

  if (umbralTitleRef.value) {
    animate(umbralTitleRef.value, {
      opacity: [0, 1],
      translateY: [45, 0],
      scale: [0.94, 1],
      duration: 1200,
      delay: 450,
      ease: 'outExpo'
    })
  }
})
</script>
