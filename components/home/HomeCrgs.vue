<template>
  <section ref="sectionRef" class="relative w-full bg-white py-12 lg:py-20 overflow-hidden">
    <div class="max-w-[1280px] mx-auto px-6 sm:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <!-- Columna Izquierda: Triángulo azul de fondo + Título y Descripción Oficial -->
        <div class="lg:col-span-6 relative">
          <!-- Triángulo azul origami: Wrapper exterior de parallax de scroll -->
          <div
            ref="blueParallaxRef"
            class="absolute -left-12 sm:-left-20 top-0 w-[420px] sm:w-[560px] z-0 pointer-events-none select-none will-change-transform"
            :style="blueParallaxStyle"
          >
            <div ref="blueInnerRef" class="w-full h-full will-change-transform filter drop-shadow-sm">
              <svg viewBox="0 0 985 639" class="w-full h-auto overflow-visible block" fill="none">
                <!-- Polígono limpio de triángulo azul pastel original de Figma -->
                <polygon points="0,302.05 985,0 538.69,638.49" fill="#A5BCD5" />
              </svg>
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

        <!-- Columna Derecha: Blueprint Frame con interacción 3D -->
        <div class="lg:col-span-6 flex justify-center lg:justify-end">
          <ArchitecturalBlueprintFrame
            theme="light"
            technicalLabel="CRGS · SECCIÓN LONGITUDINAL"
            scaleLabel="CORTE A-A' · 1:100"
          >
            <div
              ref="cardRef"
              class="w-full max-w-[480px] overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-shadow duration-500 will-change-transform cursor-pointer"
              :style="card3dStyle"
              @mousemove="onCardMouseMove"
              @mouseleave="onCardMouseLeave"
            >
              <img
                src="/images/crgs-building.png"
                alt="Centro Roberto Garza Sada - Interior y escalinatas tectónicas"
                class="w-full aspect-[4/3] object-cover block grayscale contrast-110 brightness-95 transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </ArchitecturalBlueprintFrame>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { animate } from 'animejs'
import ArchitecturalBlueprintFrame from '~/components/ui/ArchitecturalBlueprintFrame.vue'

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
  sectionTop.value = window.scrollY + sectionRef.value.getBoundingClientRect().top
}

const blueParallaxStyle = computed(() => {
  if (isReducedMotion.value || !import.meta.client) return {}
  const delta = scrollY.value - sectionTop.value + 400
  return {
    transform: `translate3d(0, ${delta * 0.12}px, 0) rotate(${delta * 0.008}deg)`,
    transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const onCardMouseMove = (event: MouseEvent) => {
  if (isReducedMotion.value || !cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  cardRotateX.value = -((event.clientY - rect.top) / rect.height - 0.5) * 11
  cardRotateY.value = ((event.clientX - rect.left) / rect.width - 0.5) * 13
  cardScale.value = 1.025
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

  if (sectionRef.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && blueInnerRef.value) {
        animate(blueInnerRef.value, {
          opacity: [0, 0.95],
          translateX: [-90, 0],
          translateY: [20, 0],
          duration: 1400,
          ease: 'outExpo'
        })
        observer?.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (import.meta.client) window.removeEventListener('resize', updateSectionOffset)
  observer?.disconnect()
})
</script>
