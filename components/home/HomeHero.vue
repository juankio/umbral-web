<template>
  <section
    ref="heroSectionRef"
    class="relative w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-80px)] flex flex-col justify-between items-center bg-white overflow-hidden select-none"
  >
    <!-- Área central del Hero como lienzo limpio monumental -->
    <div class="relative w-full flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-8 lg:py-0">
      <!-- Frase 1 en Móvil (order 1) / Superior Izquierda en Desktop: Abre la puerta, -->
      <h2
        ref="leftTextRef"
        class="order-1 lg:order-none lg:absolute lg:right-[calc(50%+160px)] xl:right-[calc(50%+190px)] 2xl:right-[calc(50%+220px)] lg:top-[20%] xl:top-[18%] font-barlow font-normal text-4xl sm:text-6xl lg:text-7xl xl:text-[96px] 2xl:text-[112px] text-black text-center lg:text-right leading-none select-none tracking-normal whitespace-nowrap will-change-transform"
      >
        Abre la puerta,
      </h2>

      <!-- Frase 2 en Móvil (order 2) / Media-baja Derecha en Desktop: cruza el (en minúscula) -->
      <h2
        ref="rightTextRef"
        class="order-2 lg:order-none lg:absolute lg:left-[calc(50%+160px)] xl:left-[calc(50%+190px)] 2xl:left-[calc(50%+220px)] lg:top-[50%] xl:top-[48%] font-barlow font-normal text-4xl sm:text-6xl lg:text-7xl xl:text-[96px] 2xl:text-[112px] text-black text-center lg:text-left leading-none select-none tracking-normal whitespace-nowrap will-change-transform mb-6 sm:mb-8 lg:mb-0"
      >
        cruza el
      </h2>

      <!-- Centro: Monolito central (triángulo SVG + titular UMBRAL debajo) -->
      <div class="order-3 lg:order-none relative z-10 flex flex-col items-center justify-center will-change-transform">
        <!-- Vector SVG estático proporcional a la altura de la pantalla con parallax y hover -->
        <div
          ref="triangleRef"
          class="flex justify-center select-none cursor-pointer will-change-transform"
          @mousemove="handleOrigamiMove(triangleRef, $event)"
          @mouseleave="handleOrigamiLeave(triangleRef)"
        >
          <svg
            viewBox="0 0 365 500"
            class="h-[300px] sm:h-[380px] lg:h-[460px] xl:h-[500px] w-auto block select-none pointer-events-none"
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
          class="font-barlow font-normal text-6xl sm:text-8xl lg:text-[115px] xl:text-[144px] leading-none text-black tracking-tight text-center select-none mt-3 sm:mt-4 lg:mt-5 will-change-transform"
        >
          UMBRAL
        </h1>
      </div>
    </div>

    <!-- Marquee arquitectónico al pie (barra negra por defecto) -->
    <AppMarquee />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'
import { useParallaxMotion } from '~/composables/useParallaxMotion'
import { useHoverMotion } from '~/composables/useHoverMotion'

const heroSectionRef = ref<HTMLElement | null>(null)
const leftTextRef = ref<HTMLElement | null>(null)
const rightTextRef = ref<HTMLElement | null>(null)
const triangleRef = ref<HTMLElement | null>(null)
const umbralTitleRef = ref<HTMLElement | null>(null)

const activeAnims: any[] = []
const { handleOrigamiMove, handleOrigamiLeave } = useHoverMotion()
useParallaxMotion(triangleRef, 0.07, 28)

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // Entrada suave sin FOUC
  if (leftTextRef.value) {
    activeAnims.push(animate(leftTextRef.value, {
      opacity: [0, 1],
      translateX: [-25, 0],
      duration: 1000,
      delay: 100,
      ease: 'outExpo'
    }))
  }

  if (rightTextRef.value) {
    activeAnims.push(animate(rightTextRef.value, {
      opacity: [0, 1],
      translateX: [25, 0],
      duration: 1000,
      delay: 180,
      ease: 'outExpo'
    }))
  }

  if (triangleRef.value) {
    activeAnims.push(animate(triangleRef.value, {
      opacity: [0, 1],
      scale: [0.98, 1],
      duration: 1000,
      delay: 220,
      ease: 'outExpo'
    }))
  }

  if (umbralTitleRef.value) {
    activeAnims.push(animate(umbralTitleRef.value, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
      delay: 280,
      ease: 'outExpo'
    }))
  }
})

onUnmounted(() => {
  activeAnims.forEach(anim => anim?.revert?.() || anim?.pause?.())
})
</script>
