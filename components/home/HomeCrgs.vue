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
                <!-- Cara Superior (Luz) -->
                <polygon points="0,302.05 985,0 761.84,319.24" fill="#A5BCD5" />
                <!-- Cara Inferior (Sombra de Pliegue) -->
                <polygon points="0,302.05 761.84,319.24 538.69,638.49" fill="#93ADC9" />
                <!-- Pliegue Central de Origami -->
                <line x1="0" y1="302.05" x2="761.84" y2="319.24" stroke="#6F90AE" stroke-width="2" />
                <!-- Líneas Isométricas de Pliegue Punteadas en #7A9BB8 -->
                <line x1="492.5" y1="151" x2="761.84" y2="319.24" stroke="#7A9BB8" stroke-width="1.5" stroke-dasharray="6 5" />
                <line x1="269.34" y1="470.27" x2="761.84" y2="319.24" stroke="#7A9BB8" stroke-width="1.5" stroke-dasharray="6 5" />
                <line x1="492.5" y1="151" x2="269.34" y2="470.27" stroke="#7A9BB8" stroke-width="1.2" stroke-dasharray="5 4" opacity="0.8" />
                <!-- Micro-Sello de Cota de Doblez -->
                <g transform="translate(340, 276)">
                  <rect x="0" y="0" width="176" height="26" rx="2" fill="#FFFFFF" fill-opacity="0.9" stroke="#7A9BB8" stroke-width="1" />
                  <line x1="6" y1="13" x2="14" y2="13" stroke="#7A9BB8" stroke-width="1" />
                  <line x1="10" y1="9" x2="10" y2="17" stroke="#7A9BB8" stroke-width="1" />
                  <text x="22" y="17" fill="#426688" font-family="monospace" font-size="10" font-weight="600" letter-spacing="0.08em">∠ 128.4° · PLIEGUE CRGS</text>
                </g>
                <path d="M 720 295 A 40 40 0 0 1 745 350" fill="none" stroke="#7A9BB8" stroke-width="1.5" stroke-dasharray="3 3" />
                <text x="752" y="326" fill="#426688" font-family="monospace" font-size="10" letter-spacing="0.06em">R·38</text>
                <circle cx="761.84" cy="319.24" r="4" fill="#7A9BB8" />
                <circle cx="0" cy="302.05" r="3.5" fill="#7A9BB8" />
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
                src="/images/crgs-details.png"
                alt="Interior y escaleras del Centro Roberto Garza Sada"
                class="w-full aspect-square object-cover block grayscale contrast-110 brightness-95 transition-transform duration-700 ease-out hover:scale-105"
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
          translateX: [-70, 0],
          duration: 1250,
          ease: 'outCubic'
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
