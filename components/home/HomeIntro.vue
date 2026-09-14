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

        <!-- Columna Derecha: Fotos con marcos blueprint y triángulo dorado afilado -->
        <div class="lg:col-span-5 relative flex flex-col items-center">
          <!-- Foto Superior: Voladizo Escultórico -->
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
              <div class="overflow-hidden rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <img
                  src="/images/crgs-geometry.png"
                  alt="Arquitectura geométrica del Centro Roberto Garza Sada"
                  class="w-full h-auto object-cover block transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            </ArchitecturalBlueprintFrame>
          </div>

          <!-- Triángulo Dorado Limpio, Afilado y Flotante con Parallax entre las fotos -->
          <div
            class="relative z-20 w-44 sm:w-52 lg:w-56 -my-6 sm:-my-8 select-none will-change-transform cursor-pointer"
            :style="yellowParallaxStyle"
            @mouseenter="isHovered = true"
            @mousemove="onMouseMove"
            @mouseleave="onMouseLeave"
          >
            <div
              ref="yellowShapeRef"
              class="w-full h-full will-change-transform"
              :style="yellow3dStyle"
            >
              <svg viewBox="0 0 652 432" class="w-full h-auto overflow-visible block drop-shadow-lg" fill="none">
                <!-- Cara Superior Luz Dorada Nítida -->
                <polygon points="0,276.52 651.90,0 536.28,216" fill="#F6D152" />
                <!-- Cara Inferior Sombra Dorada Cálida -->
                <polygon points="0,276.52 536.28,216 420.66,432" fill="#E69D37" />
              </svg>
            </div>
          </div>

          <!-- Foto Inferior: Escalinata Tectónica -->
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
              <div class="overflow-hidden rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <img
                  src="/images/crgs-details.png"
                  alt="Detalles de hormigón y encofrado del Centro Roberto Garza Sada"
                  class="w-full h-auto object-cover block transition-transform duration-700 ease-out hover:scale-105"
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
const yellowShapeRef = ref<HTMLElement | null>(null)
const { y: scrollY } = useWindowScroll()
const isVisible = ref(false)
const sectionTop = ref(0)
const isReducedMotion = ref(false)

const tiltX = ref(0)
const tiltY = ref(0)
const isHovered = ref(false)

let floatAnim: any = null
let observer: IntersectionObserver | null = null

const updateOffset = () => {
  if (sectionRef.value && import.meta.client) {
    sectionTop.value = window.scrollY + sectionRef.value.getBoundingClientRect().top
  }
}

const onMouseMove = (e: MouseEvent) => {
  if (isReducedMotion.value) return
  const target = e.currentTarget as HTMLElement
  if (!target) return
  const rect = target.getBoundingClientRect()
  tiltX.value = ((e.clientX - rect.left) / rect.width - 0.5) * 22
  tiltY.value = -((e.clientY - rect.top) / rect.height - 0.5) * 20
}

const onMouseLeave = () => {
  isHovered.value = false
  tiltX.value = 0
  tiltY.value = 0
}

const yellowParallaxStyle = computed(() => {
  if (!import.meta.client || isReducedMotion.value) return {}
  const delta = scrollY.value - sectionTop.value + 350
  return {
    transform: `translate3d(0, ${delta * -0.14}px, 0)`,
    transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)'
  }
})

const yellow3dStyle = computed(() => {
  if (isReducedMotion.value) return {}
  const scale = isHovered.value ? 1.06 : 1
  return {
    transform: `perspective(600px) rotateX(${tiltY.value}deg) rotateY(${tiltX.value}deg) scale(${scale})`,
    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
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

  if (yellowShapeRef.value) {
    floatAnim = animate(yellowShapeRef.value, {
      translateY: [-8, 8],
      rotate: [-3, 3],
      duration: 3800,
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
  if (floatAnim?.pause) floatAnim.pause()
})
</script>
