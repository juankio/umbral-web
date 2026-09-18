<template>
  <section ref="sectionRef" class="w-full bg-white py-10 sm:py-12 overflow-hidden">
    <div class="max-w-[1200px] mx-auto px-6 sm:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
        <!-- Columna Izquierda: Logo y Manifiesto Oficial -->
        <div class="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
          <div class="max-w-[220px] sm:max-w-[260px] w-full">
            <img src="/images/logo-umbral.png" alt="Umbral - CRGS" class="w-full h-auto object-contain" />
          </div>

          <div class="space-y-3.5 sm:space-y-4 font-barlow text-base sm:text-lg lg:text-xl leading-relaxed text-[#1C1C1C] font-normal">
            <p>
              Es la plataforma del <strong class="font-bold">Centro Roberto Garza Sada,</strong> de la Escuela de Arte y Diseño de la Universidad de Monterrey.
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

        <!-- Columna Derecha: Fotos con marcos blueprint y triángulo dorado afilado -->
        <div class="lg:col-span-5 relative flex flex-col items-center">
          <!-- Foto Superior: Voladizo Escultórico -->
          <div
            class="w-full max-w-[320px] sm:max-w-[360px] transition-all duration-700 ease-out will-change-transform"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
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

          <!-- Triángulo Dorado Limpio, Afilado y Sólido de Figma (Estático) -->
          <div class="relative z-20 w-36 sm:w-44 lg:w-48 -my-5 sm:-my-6 select-none pointer-events-none">
            <svg viewBox="0 0 652 432" class="w-full h-auto overflow-visible block drop-shadow-md" fill="none">
              <!-- Cara Superior Luz Dorada Nítida -->
              <polygon points="0,276.52 651.90,0 536.28,216" fill="#F6D152" />
              <!-- Cara Inferior Sombra Dorada Cálida -->
              <polygon points="0,276.52 536.28,216 420.66,432" fill="#E69D37" />
            </svg>
          </div>

          <!-- Foto Inferior: Escalinata Tectónica -->
          <div
            class="w-full max-w-[320px] sm:max-w-[360px] transition-all duration-700 ease-out will-change-transform"
            :class="isVisible ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 translate-y-8'"
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
import { ref, onMounted, onUnmounted } from 'vue'
import ArchitecturalBlueprintFrame from '~/components/ui/ArchitecturalBlueprintFrame.vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isVisible.value = true
    return
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
  observer?.disconnect()
})
</script>
