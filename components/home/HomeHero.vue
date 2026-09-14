<template>
  <section
    ref="heroSectionRef"
    class="relative w-full overflow-hidden bg-white pt-6 pb-10 lg:pt-8 lg:pb-14"
  >
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
      <!-- Grid compositivo monumental idéntico a Figma -->
      <div class="grid grid-cols-1 md:grid-cols-12 items-center gap-4 lg:gap-8">
        <!-- Izquierda: Cruza el -->
        <div class="order-2 md:order-1 md:col-span-4 flex justify-center md:justify-end md:self-center pt-2 md:pt-16">
          <h2
            ref="leftTextRef"
            class="font-barlow text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#070707] text-center md:text-right leading-[0.95] select-none"
          >
            Cruza el
          </h2>
        </div>

        <!-- Centro: Polígono negro hero-arch + UMBRAL debajo -->
        <div class="order-3 md:order-2 md:col-span-4 flex flex-col items-center justify-center">
          <!-- Wrapper exterior interactivo: Scroll Parallax + Rotación + Mouse Tilt 3D -->
          <div
            ref="archRef"
            class="relative w-44 sm:w-56 lg:w-72 aspect-[458/625] flex items-center justify-center will-change-transform cursor-pointer"
            :style="archInteractiveStyle"
          >
            <!-- Wrapper interior: Oscilación y respiración ingrávida continua en reposo -->
            <div
              ref="archInnerRef"
              class="w-full h-full flex items-center justify-center will-change-transform"
            >
              <img
                src="/images/hero-arch.svg"
                alt="Geometría La Puerta de la Creación"
                class="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm"
              />
            </div>
          </div>

          <!-- Titular monumental UMBRAL centrado bajo el arco -->
          <h1
            ref="umbralTitleRef"
            class="mt-3 sm:mt-4 font-barlow font-normal text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-black text-center uppercase leading-none select-none"
          >
            UMBRAL
          </h1>
        </div>

        <!-- Derecha: Abre la puerta, -->
        <div class="order-1 md:order-3 md:col-span-4 flex justify-center md:justify-start md:self-start pt-2 md:pt-4">
          <h2
            ref="rightTextRef"
            class="font-barlow text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#070707] text-center md:text-left leading-[0.95] select-none"
          >
            Abre la puerta,
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { animate } from 'animejs'

const heroSectionRef = ref<HTMLElement | null>(null)
const leftTextRef = ref<HTMLElement | null>(null)
const archRef = ref<HTMLElement | null>(null)
const archInnerRef = ref<HTMLElement | null>(null)
const rightTextRef = ref<HTMLElement | null>(null)
const umbralTitleRef = ref<HTMLElement | null>(null)

const { y: scrollY } = useWindowScroll()
const mouseNormX = ref(0)
const mouseNormY = ref(0)
const isReducedMotion = ref(false)

let breathingAnimation: any = null

const handleMouseMove = (event: MouseEvent) => {
  if (isReducedMotion.value || !import.meta.client) return
  const { innerWidth, innerHeight } = window
  mouseNormX.value = (event.clientX / innerWidth - 0.5) * 2
  mouseNormY.value = (event.clientY / innerHeight - 0.5) * 2
}

const archInteractiveStyle = computed(() => {
  if (isReducedMotion.value || !import.meta.client) return {}
  const scrollProgress = Math.min(Math.max(scrollY.value / 650, 0), 1)
  const rotateZ = scrollProgress * 18
  const translateY = scrollProgress * 42
  const rotateX = -mouseNormY.value * 6
  const rotateY = mouseNormX.value * 8

  return {
    transform: `perspective(900px) translate3d(0, ${translateY}px, 0) rotateZ(${rotateZ}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

onMounted(() => {
  if (!import.meta.client) return

  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (isReducedMotion.value) return

  window.addEventListener('mousemove', handleMouseMove, { passive: true })

  if (archRef.value) {
    animate(archRef.value, {
      opacity: [0, 1],
      scale: [0.92, 1],
      duration: 1100,
      ease: 'outCubic'
    })
  }

  // Respiración y ligera oscilación ingrávida continua en reposo
  if (archInnerRef.value) {
    breathingAnimation = animate(archInnerRef.value, {
      translateY: [-7, 7],
      rotate: [-1.8, 1.8],
      scale: [1, 1.022],
      duration: 4200,
      alternate: true,
      loop: true,
      ease: 'inOutSine'
    })
  }

  if (leftTextRef.value) {
    animate(leftTextRef.value, {
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 950,
      delay: 150,
      ease: 'outCubic'
    })
  }

  if (rightTextRef.value) {
    animate(rightTextRef.value, {
      opacity: [0, 1],
      translateX: [30, 0],
      duration: 950,
      delay: 150,
      ease: 'outCubic'
    })
  }

  if (umbralTitleRef.value) {
    animate(umbralTitleRef.value, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 950,
      delay: 300,
      ease: 'outCubic'
    })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('mousemove', handleMouseMove)
  }
  if (breathingAnimation && typeof breathingAnimation.pause === 'function') {
    breathingAnimation.pause()
  }
})
</script>
