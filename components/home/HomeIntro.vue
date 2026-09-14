<template>
  <section ref="sectionRef" class="w-full bg-white py-12 lg:py-20 overflow-hidden">
    <div class="max-w-[1720px] mx-auto px-6 sm:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <!-- Columna Izquierda: Logo y Manifiesto Oficial -->
        <div class="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8">
          <div class="max-w-[260px] sm:max-w-[320px] w-full">
            <img
              src="/images/logo-umbral.png"
              alt="Umbral - CRGS"
              class="w-full h-auto object-contain"
            />
          </div>

          <div class="space-y-4 sm:space-y-5 font-barlow text-lg sm:text-xl lg:text-2xl leading-normal text-[#1C1C1C] text-justify font-normal">
            <p>
              Es la plataforma del <strong class="font-bold">Centro Roberto Garza Sada,</strong> la Escuela de Arte, Arquitectura y Diseño de la Universidad de Monterrey.
            </p>

            <p>
              <strong class="font-bold">Funciona como un umbral entre la Escuela y el mundo:</strong> el lugar donde el trabajo de sus estudiantes y egresados, diseñadores y artistas, se cura, se presenta y se pone a circular. Más que un mercado, es una vitrina del talento que se forma en sus aulas y talleres.
            </p>

            <p>
              Cada pieza que aparece aquí atravesó el mismo camino: un pensamiento que se hizo materia para convertirse finalmente en creación.
            </p>

            <p>
              <strong class="font-bold">La Repentina Zona Maco 2027 es el primer capítulo de este proyecto.</strong>
            </p>
          </div>
        </div>

        <!-- Columna Derecha: Composición geométrica con fotos y polígono amarillo -->
        <div class="lg:col-span-6 relative flex flex-col items-center">
          <!-- Foto superior: Geometría CRGS con entrada progresiva y hover suave -->
          <div
            ref="topPhotoRef"
            class="group w-full max-w-[360px] sm:max-w-[420px] overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-700 ease-out will-change-transform"
            :style="topPhotoStyle"
          >
            <img
              src="/images/crgs-geometry.png"
              alt="Arquitectura geométrica del Centro Roberto Garza Sada"
              class="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:contrast-[1.03]"
            />
          </div>

          <!-- Triángulo amarillo: Parallax de scroll exterior + Flotación continua interior -->
          <div
            ref="yellowParallaxRef"
            class="relative z-10 w-32 sm:w-44 -my-6 sm:-my-8 pointer-events-none select-none will-change-transform"
            :style="yellowParallaxStyle"
          >
            <div
              ref="yellowFloatingRef"
              class="w-full h-full flex items-center justify-center will-change-transform"
            >
              <img
                src="/images/intro-polygon-yellow.svg"
                alt=""
                class="w-full h-auto object-contain filter drop-shadow-md"
                aria-hidden="true"
              />
            </div>
          </div>

          <!-- Foto inferior: Detalles tectónicos CRGS con entrada progresiva y hover suave -->
          <div
            ref="bottomPhotoRef"
            class="group w-full max-w-[360px] sm:max-w-[420px] overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-700 ease-out will-change-transform"
            :style="bottomPhotoStyle"
          >
            <img
              src="/images/crgs-details.png"
              alt="Detalles de hormigón y encofrado del Centro Roberto Garza Sada"
              class="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:contrast-[1.03]"
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
const topPhotoRef = ref<HTMLElement | null>(null)
const bottomPhotoRef = ref<HTMLElement | null>(null)
const yellowParallaxRef = ref<HTMLElement | null>(null)
const yellowFloatingRef = ref<HTMLElement | null>(null)

const { y: scrollY } = useWindowScroll()
const isVisible = ref(false)
const sectionTop = ref(0)
const isReducedMotion = ref(false)

let yellowAnimation: any = null
let observer: IntersectionObserver | null = null

const updateSectionOffset = () => {
  if (!sectionRef.value || !import.meta.client) return
  const rect = sectionRef.value.getBoundingClientRect()
  sectionTop.value = window.scrollY + rect.top
}

const yellowParallaxStyle = computed(() => {
  if (isReducedMotion.value || !import.meta.client) return {}
  const delta = scrollY.value - sectionTop.value + 350
  const parallaxY = delta * -0.14
  const parallaxRotate = delta * 0.012

  return {
    transform: `translate3d(0, ${parallaxY}px, 0) rotate(${parallaxRotate}deg)`,
    transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const topPhotoStyle = computed(() => {
  if (!isVisible.value && !isReducedMotion.value) {
    return {
      opacity: 0,
      transform: 'translate3d(0, 32px, 0) scale(0.96)',
      transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
    }
  }
  return {
    opacity: 1,
    transform: 'translate3d(0, 0, 0) scale(1)',
    transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const bottomPhotoStyle = computed(() => {
  if (!isVisible.value && !isReducedMotion.value) {
    return {
      opacity: 0,
      transform: 'translate3d(0, 42px, 0) scale(0.96)',
      transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.18s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.18s'
    }
  }
  return {
    opacity: 1,
    transform: 'translate3d(0, 0, 0) scale(1)',
    transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.18s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.18s'
  }
})

onMounted(() => {
  if (!import.meta.client) return

  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  updateSectionOffset()
  window.addEventListener('resize', updateSectionOffset, { passive: true })

  if (isReducedMotion.value) {
    isVisible.value = true
    return
  }

  // Animación viva continua del triángulo amarillo: flotación y ligera rotación oscilatoria [-4, 6] deg
  if (yellowFloatingRef.value) {
    yellowAnimation = animate(yellowFloatingRef.value, {
      translateY: [-9, 9],
      rotate: [-4, 6],
      scale: [0.97, 1.03],
      duration: 4600,
      alternate: true,
      loop: true,
      ease: 'inOutSine'
    })
  }

  // IntersectionObserver para la entrada progresiva de fotos
  if (sectionRef.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(sectionRef.value)
  } else {
    isVisible.value = true
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('resize', updateSectionOffset)
  }
  if (observer) {
    observer.disconnect()
  }
  if (yellowAnimation && typeof yellowAnimation.pause === 'function') {
    yellowAnimation.pause()
  }
})
</script>
