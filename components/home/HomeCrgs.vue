<template>
  <section ref="sectionRef" class="relative w-full bg-white py-12 lg:py-20 overflow-hidden">
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <!-- Columna Izquierda: Triángulo azul de fondo + Título y Descripción Oficial -->
        <div class="lg:col-span-6 relative">
          <!-- Triángulo azul pastel: Wrapper exterior de parallax de scroll -->
          <div
            ref="blueParallaxRef"
            class="absolute -left-12 sm:-left-20 top-0 w-[420px] sm:w-[560px] z-0 pointer-events-none select-none will-change-transform"
            :style="blueParallaxStyle"
          >
            <!-- Wrapper interior: Entrada suave deslizándose desde la izquierda -->
            <div
              ref="blueInnerRef"
              class="w-full h-full will-change-transform"
            >
              <img
                src="/images/crgs-bg-vector.svg"
                alt=""
                aria-hidden="true"
                class="w-full h-auto opacity-95"
              />
            </div>
          </div>

          <div class="relative z-10 flex flex-col space-y-6 sm:space-y-8">
            <h2 class="font-barlow text-4xl sm:text-6xl lg:text-7xl text-[#1C1C1C] leading-[0.95] font-normal">
              Centro Roberto Garza Sada
            </h2>

            <div class="space-y-4 sm:space-y-5 font-barlow text-base sm:text-lg leading-normal text-[#1C1C1C] text-justify font-normal">
              <p>
                Es un espacio de ideas y expresiones que congrega y desarrolla el mejor talento creativo, consolidándose como la sede de la formación, creación y preservación del arte, arquitectura y diseño en Latinoamérica.
              </p>

              <p>
                <strong class="font-bold">"La Puerta de la Creación",</strong> es una joya arquitectónica, un emblema de diseño moderno y sostenibilidad y también un vibrante espacio educativo que inspira a estudiantes y profesionales por igual.
              </p>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Fotografía cuadrada con efecto interactivo de profundidad al hover -->
        <div class="lg:col-span-6 flex justify-center lg:justify-end">
          <div
            ref="cardRef"
            class="group w-full max-w-[480px] overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-shadow duration-500 will-change-transform cursor-pointer"
            :style="card3dStyle"
            @mousemove="onCardMouseMove"
            @mouseleave="onCardMouseLeave"
          >
            <img
              src="/images/crgs-details.png"
              alt="Interior y escaleras del Centro Roberto Garza Sada"
              class="w-full aspect-square object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { animate } from 'animejs'

const sectionRef = ref<HTMLElement | null>(null)
const blueParallaxRef = ref<HTMLElement | null>(null)
const blueInnerRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)

const { y: scrollY } = useWindowScroll()
const sectionTop = ref(0)
const isReducedMotion = ref(false)

const cardRotateX = ref(0)
const cardRotateY = ref(0)
const cardScale = ref(1)

let observer: IntersectionObserver | null = null

const updateSectionOffset = () => {
  if (!sectionRef.value || !import.meta.client) return
  const rect = sectionRef.value.getBoundingClientRect()
  sectionTop.value = window.scrollY + rect.top
}

const blueParallaxStyle = computed(() => {
  if (isReducedMotion.value || !import.meta.client) return {}
  const delta = scrollY.value - sectionTop.value + 400
  const parallaxY = delta * 0.12
  const parallaxRotate = delta * 0.008

  return {
    transform: `translate3d(0, ${parallaxY}px, 0) rotate(${parallaxRotate}deg)`,
    transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const onCardMouseMove = (event: MouseEvent) => {
  if (isReducedMotion.value || !cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5
  cardRotateX.value = -y * 11
  cardRotateY.value = x * 13
  cardScale.value = 1.028
}

const onCardMouseLeave = () => {
  cardRotateX.value = 0
  cardRotateY.value = 0
  cardScale.value = 1
}

const card3dStyle = computed(() => {
  if (isReducedMotion.value || !import.meta.client) return {}
  return {
    transform: `perspective(1000px) rotateX(${cardRotateX.value}deg) rotateY(${cardRotateY.value}deg) scale3d(${cardScale.value}, ${cardScale.value}, ${cardScale.value})`,
    transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

onMounted(() => {
  if (!import.meta.client) return

  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  updateSectionOffset()
  window.addEventListener('resize', updateSectionOffset, { passive: true })

  if (isReducedMotion.value) return

  // Entrada suave deslizándose desde la izquierda al intersecar viewport
  if (sectionRef.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          if (blueInnerRef.value) {
            animate(blueInnerRef.value, {
              opacity: [0, 0.95],
              translateX: [-70, 0],
              duration: 1250,
              ease: 'outCubic'
            })
          }
          observer?.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(sectionRef.value)
  } else if (blueInnerRef.value) {
    animate(blueInnerRef.value, {
      opacity: [0, 0.95],
      translateX: [-70, 0],
      duration: 1250,
      ease: 'outCubic'
    })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('resize', updateSectionOffset)
  }
  if (observer) {
    observer.disconnect()
  }
})
</script>
