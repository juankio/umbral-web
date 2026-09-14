<template>
  <section ref="sectionRef" class="w-full bg-white pt-12 sm:pt-16 lg:pt-20 pb-0 overflow-hidden">
    <div class="max-w-[1240px] mx-auto px-6 sm:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
        <!-- Columna Izquierda: Logo y Manifiesto Oficial -->
        <div class="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7">
          <div class="max-w-[260px] sm:max-w-[300px] w-full">
            <img src="/images/logo-umbral.png" alt="Umbral - CRGS" class="w-full h-auto object-contain" />
          </div>

          <div class="space-y-4 sm:space-y-5 font-barlow text-lg sm:text-xl lg:text-[22px] leading-relaxed text-[#1C1C1C] font-normal">
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

        <!-- Columna Derecha: Fotos encuadradas con triángulo amarillo solapado en diagonal -->
        <div class="lg:col-span-5 relative flex flex-col items-center">
          <div
            class="group w-full max-w-[380px] sm:max-w-[420px] overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-all duration-700 ease-out will-change-transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            <img
              src="/images/crgs-geometry.png"
              alt="Arquitectura geométrica del Centro Roberto Garza Sada"
              class="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:contrast-[1.03]"
            />
          </div>

          <div
            class="relative z-10 w-36 sm:w-44 lg:w-48 -my-8 sm:-my-10 lg:-my-12 pointer-events-none select-none will-change-transform"
            :style="yellowParallaxStyle"
          >
            <div ref="yellowFloatingRef" class="w-full h-full flex items-center justify-center will-change-transform">
              <img src="/images/intro-polygon-yellow.svg" alt="" class="w-full h-auto object-contain filter drop-shadow-md" aria-hidden="true" />
            </div>
          </div>

          <div
            class="group w-full max-w-[380px] sm:max-w-[420px] overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-all duration-700 ease-out will-change-transform"
            :class="isVisible ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 translate-y-10'"
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
const yellowFloatingRef = ref<HTMLElement | null>(null)
const { y: scrollY } = useWindowScroll()
const isVisible = ref(false)
const sectionTop = ref(0)
let yellowAnimation: any = null
let observer: IntersectionObserver | null = null

const updateOffset = () => {
  if (sectionRef.value && import.meta.client) {
    sectionTop.value = window.scrollY + sectionRef.value.getBoundingClientRect().top
  }
}

const yellowParallaxStyle = computed(() => {
  if (!import.meta.client) return {}
  const delta = scrollY.value - sectionTop.value + 350
  return {
    transform: `translate3d(0, ${delta * -0.12}px, 0) rotate(${delta * 0.01}deg)`,
    transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isVisible.value = true
    return
  }
  updateOffset()
  window.addEventListener('resize', updateOffset, { passive: true })
  if (yellowFloatingRef.value) {
    yellowAnimation = animate(yellowFloatingRef.value, {
      translateY: [-8, 8],
      rotate: [-4, 5],
      scale: [0.98, 1.02],
      duration: 4500,
      alternate: true,
      loop: true,
      ease: 'inOutSine'
    })
  }
  if (sectionRef.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(sectionRef.value)
  } else {
    isVisible.value = true
  }
})

onUnmounted(() => {
  if (import.meta.client) window.removeEventListener('resize', updateOffset)
  observer?.disconnect()
  if (yellowAnimation && typeof yellowAnimation.pause === 'function') {
    yellowAnimation.pause()
  }
})
</script>
