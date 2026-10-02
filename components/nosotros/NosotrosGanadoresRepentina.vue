<template>
  <section id="creadores-piezas" class="relative w-full bg-white pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 scroll-mt-24 select-text">
    <!-- Contenedor Maestro Amplio (1:1 Figma) -->
    <div class="w-full max-w-[1500px] xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12">
      <!-- 1. Encabezado de Sección Oficial (Figma Nodos 407:65 & 503:218) -->
      <div class="relative flex items-center justify-center py-6 sm:py-8 lg:py-10 mb-16 sm:mb-20 lg:mb-24">
        <!-- Triángulo amarillo oficial de Figma (Nodo 503:218) absoluto centrado detrás -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            ref="triangleRef"
            viewBox="0 0 497 230"
            class="w-[320px] sm:w-[400px] lg:w-[460px] xl:w-[497px] h-auto mx-auto select-none pointer-events-none will-change-transform"
            fill="none"
            aria-hidden="true"
          >
            <path d="M242.55 0L497 191.366L0 229.348L242.55 0Z" fill="#F6D152" />
          </svg>
        </div>

        <!-- Título monumental centrado sobre el triángulo -->
        <h2
          ref="headingRef"
          class="relative z-10 font-barlow font-normal text-4xl sm:text-5xl lg:text-6xl text-[#070707] text-center leading-tight tracking-tight will-change-transform"
        >
          Creadores De Las Piezas
        </h2>
      </div>

      <!-- 2. Ritmo Asimétrico en Zigzag de los 3 Equipos -->
      <div class="w-full flex flex-col">
        <!-- FILA 1: Cimiento (ALINEADA A LA IZQUIERDA) -->
        <div class="w-full max-w-[1050px] lg:max-w-[1150px] mr-auto">
          <h3 class="font-barlow text-2xl sm:text-3xl text-[#070707] mb-4 text-left">
            Cimiento
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <NosotrosCreadorCard
              v-for="alumno in cimientoAlumnos"
              :key="alumno.name"
              :alumno="alumno"
            />
          </div>
          <!-- Línea negra horizontal debajo de Cimiento -->
          <div
            ref="lineCimientoRef"
            class="h-[1.5px] bg-[#070707] w-full max-w-[1050px] lg:max-w-[1150px] mt-8 mb-14 sm:mb-16 will-change-transform"
          />
        </div>

        <!-- FILA 2: Curado (DESPLAZADA A LA DERECHA) -->
        <div class="w-full max-w-[1050px] lg:max-w-[1150px] ml-auto">
          <h3 class="font-barlow text-2xl sm:text-3xl text-[#070707] mb-4 text-left">
            Curado
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <NosotrosCreadorCard
              v-for="alumno in curadoAlumnos"
              :key="alumno.name"
              :alumno="alumno"
            />
          </div>
          <!-- Línea negra horizontal debajo de Curado -->
          <div
            ref="lineCuradoRef"
            class="h-[1.5px] bg-[#070707] w-full max-w-[1050px] lg:max-w-[1150px] ml-auto mt-8 mb-14 sm:mb-16 will-change-transform"
          />
        </div>

        <!-- FILA 3: Encuadre (ALINEADA A LA IZQUIERDA) -->
        <div class="w-full max-w-[1050px] lg:max-w-[1150px] mr-auto">
          <h3 class="font-barlow text-2xl sm:text-3xl text-[#070707] mb-4 text-left">
            Encuadre
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <NosotrosCreadorCard
              v-for="alumno in encuadreAlumnos"
              :key="alumno.name"
              :alumno="alumno"
            />
          </div>
          <!-- Línea negra horizontal debajo de Encuadre -->
          <div
            ref="lineEncuadreRef"
            class="h-[1.5px] bg-[#070707] w-full max-w-[1050px] lg:max-w-[1150px] mt-8 mb-14 sm:mb-16 will-change-transform"
          />
        </div>

        <!-- FILA 4: Curado (DESPLAZADA A LA DERECHA - 1:1 FIGMA) -->
        <div class="w-full max-w-[1050px] lg:max-w-[1150px] ml-auto">
          <h3 class="font-barlow text-2xl sm:text-3xl text-[#070707] mb-4 text-left">
            Curado
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <NosotrosCreadorCard
              v-for="alumno in curadoAlumnos"
              :key="'curado-bottom-' + alumno.name"
              :alumno="alumno"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import NosotrosCreadorCard, { type AlumnoCreador } from './NosotrosCreadorCard.vue'

const triangleRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const lineCimientoRef = ref<HTMLElement | null>(null)
const lineCuradoRef = ref<HTMLElement | null>(null)
const lineEncuadreRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(triangleRef, { type: 'triangle', delay: 40 })
  observeScrollReveal(headingRef, { type: 'heading', delay: 100 })
  observeScrollReveal(lineCimientoRef, { type: 'divider', origin: 'left center', delay: 120 })
  observeScrollReveal(lineCuradoRef, { type: 'divider', origin: 'right center', delay: 120 })
  observeScrollReveal(lineEncuadreRef, { type: 'divider', origin: 'left center', delay: 120 })
})

const cimientoAlumnos: AlumnoCreador[] = [
  {
    name: 'Diana Ruanova',
    career: 'Diseño Industrial',
    image: '/images/alumno-diana-ruanova.webp'
  },
  {
    name: 'Diego González',
    career: 'Diseño Industrial',
    image: '/images/alumno-diego-gonzalez.webp'
  },
  {
    name: 'Matías Romero',
    career: 'Diseño Industrial',
    image: '/images/alumno-matias-romero.webp'
  }
]

const curadoAlumnos: AlumnoCreador[] = [
  {
    name: 'Camila León',
    career: 'Diseño De Modas',
    image: '/images/alumno-camila-leon.webp'
  },
  {
    name: 'Carolina Saldaña',
    career: 'Diseño Gráfico',
    image: '/images/alumno-carolina-saldana.webp'
  },
  {
    name: 'Paula Aranda',
    career: 'Diseño De Modas',
    image: '/images/alumno-paula-aranda.webp'
  }
]

const encuadreAlumnos: AlumnoCreador[] = [
  {
    name: 'Ximena Silva',
    career: 'Diseño Industrial',
    image: '/images/alumno-ximena-silva.webp'
  },
  {
    name: 'Daniela García',
    career: 'Diseño Industrial',
    image: '/images/alumno-daniela-garcia.webp'
  },
  {
    name: 'Regina Hinojosa',
    career: 'Diseño Industrial',
    image: '/images/alumno-regina-hinojosa.webp'
  }
]
</script>
