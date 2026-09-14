<template>
  <section ref="sectionRef" class="w-full bg-white pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
    <div class="max-w-[1280px] mx-auto px-6 sm:px-12">
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
              Cada pieza que atravesó el mismo camino: un pensamiento que se hizo materia para convertirse finalmente en creación.
            </p>
            <p>
              <strong class="font-bold">La Repentina Zona Maco 2027 es el primer capítulo de este proyecto.</strong>
            </p>
          </div>
        </div>

        <!-- Columna Derecha: Fotos con marcos blueprint y origami amarillo facetado -->
        <div class="lg:col-span-5 relative flex flex-col items-center">
          <div
            class="w-full max-w-[380px] sm:max-w-[420px] transition-all duration-700 ease-out will-change-transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            <ArchitecturalBlueprintFrame
              theme="light"
              technicalLabel="CRGS · VOLADIZO ESCULTÓRICO"
              scaleLabel="ELEV · ATARDECER"
              class="w-full"
            >
              <div class="overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-500">
                <img
                  src="/images/crgs-geometry.png"
                  alt="Arquitectura geométrica del Centro Roberto Garza Sada"
                  class="w-full h-auto object-cover block transition-transform duration-700 ease-out hover:scale-105 hover:contrast-[1.03]"
                />
              </div>
            </ArchitecturalBlueprintFrame>
          </div>

          <!-- Origami Amarillo Plegado con Flexión 3D al Hover y Sombra Proyectada Dinámica -->
          <div
            class="relative z-20 w-40 sm:w-48 lg:w-52 -my-6 sm:-my-8 select-none will-change-transform cursor-pointer"
            :style="yellowParallaxStyle"
            @mouseenter="onYellowEnter"
            @mousemove="onYellowMouseMove"
            @mouseleave="onYellowMouseLeave"
          >
            <div ref="yellowFloatingRef" class="w-full h-full flex items-center justify-center will-change-transform">
              <div class="w-full h-full will-change-transform" :style="yellow3dStyle">
                <svg viewBox="0 0 652 432" class="w-full h-auto overflow-visible block" fill="none">
                  <!-- Cara Superior (Luz Directa) -->
                  <polygon points="0,276.52 651.90,0 536.28,216" fill="#F6D152" stroke="#F6D152" stroke-width="0.5" />
                  <!-- Cara Inferior (En Sombra Plegada) -->
                  <polygon points="0,276.52 536.28,216 420.66,432" fill="#E69D37" stroke="#E69D37" stroke-width="0.5" />
                  <!-- Líneas Auxiliares Isométricas de Doblez Origami -->
                  <line x1="268.14" y1="108" x2="536.28" y2="216" stroke="#D48D28" stroke-width="1" stroke-dasharray="4 3" opacity="0.45" />
                  <line x1="210.33" y1="354.26" x2="536.28" y2="216" stroke="#C47A20" stroke-width="1" stroke-dasharray="4 3" opacity="0.45" />
                  <!-- Pliegue Central de Origami -->
                  <line x1="0" y1="276.52" x2="536.28" y2="216" stroke="#D48D28" stroke-width="2.5" stroke-linecap="round" />
                  <!-- Micro-Nodos de Calibración Geométrica -->
                  <circle cx="536.28" cy="216" r="3.5" fill="#D48D28" />
                  <circle cx="0" cy="276.52" r="3" fill="#D48D28" />
                </svg>
              </div>
            </div>
          </div>

          <div
            class="w-full max-w-[380px] sm:max-w-[420px] transition-all duration-700 ease-out will-change-transform"
            :class="isVisible ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 translate-y-10'"
          >
            <ArchitecturalBlueprintFrame
              theme="light"
              technicalLabel="CRGS · ESCALINATA TECTÓNICA"
              scaleLabel="CORTE B-B'"
              class="w-full"
            >
              <div class="overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-500">
                <img
                  src="/images/crgs-details.png"
                  alt="Detalles de hormigón y encofrado del Centro Roberto Garza Sada"
                  class="w-full h-auto object-cover block transition-transform duration-700 ease-out hover:scale-105 hover:contrast-[1.03]"
                />
              </div>
            </ArchitecturalBlueprintFrame>
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
import ArchitecturalBlueprintFrame from '~/components/ui/ArchitecturalBlueprintFrame.vue'

const sectionRef = ref<HTMLElement | null>(null)
const yellowFloatingRef = ref<HTMLElement | null>(null)
const { y: scrollY } = useWindowScroll()
const isVisible = ref(false)
const sectionTop = ref(0)
const isReducedMotion = ref(false)

const yellowHoverX = ref(0)
const yellowHoverY = ref(0)
const isYellowHovered = ref(false)

let yellowAnimation: any = null
let observer: IntersectionObserver | null = null

const updateOffset = () => {
  if (sectionRef.value && import.meta.client) {
    sectionTop.value = window.scrollY + sectionRef.value.getBoundingClientRect().top
  }
}

const onYellowEnter = () => {
  if (!isReducedMotion.value) isYellowHovered.value = true
}

const onYellowMouseMove = (e: MouseEvent) => {
  if (isReducedMotion.value) return
  const target = e.currentTarget as HTMLElement
  if (!target) return
  const rect = target.getBoundingClientRect()
  yellowHoverX.value = ((e.clientX - rect.left) / rect.width - 0.5) * 2
  yellowHoverY.value = ((e.clientY - rect.top) / rect.height - 0.5) * 2
}

const onYellowMouseLeave = () => {
  isYellowHovered.value = false
  yellowHoverX.value = 0
  yellowHoverY.value = 0
}

const yellowParallaxStyle = computed(() => {
  if (!import.meta.client) return {}
  const delta = scrollY.value - sectionTop.value + 350
  return {
    transform: `translate3d(0, ${delta * -0.12}px, 0) rotate(${delta * 0.01}deg)`,
    transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const yellow3dStyle = computed(() => {
  if (isReducedMotion.value) return {}
  const rotX = isYellowHovered.value ? -yellowHoverY.value * 22 : 0
  const rotY = isYellowHovered.value ? yellowHoverX.value * 24 : 0
  const scale = isYellowHovered.value ? 1.08 : 1
  const shadowX = isYellowHovered.value ? -yellowHoverX.value * 14 : 0
  const shadowY = isYellowHovered.value ? 16 + yellowHoverY.value * 10 : 8
  const blur = isYellowHovered.value ? 24 : 10
  const alpha = isYellowHovered.value ? 0.45 : 0.2

  return {
    transform: `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, ${scale})`,
    filter: `drop-shadow(${shadowX}px ${shadowY}px ${blur}px rgba(212, 141, 40, ${alpha})) drop-shadow(0 8px 16px rgba(0,0,0,0.08))`,
    transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), filter 0.25s ease-out'
  }
})

onMounted(() => {
  if (!import.meta.client) return
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (isReducedMotion.value) {
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
  if (yellowAnimation?.pause) yellowAnimation.pause()
})
</script>
