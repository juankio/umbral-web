<template>
  <section id="asesores-proyectos" class="relative w-full bg-white pt-4 pb-20 sm:pt-6 sm:pb-28 lg:pt-8 lg:pb-36 xl:pb-44 scroll-mt-24 select-text">
    <div class="w-full max-w-[1500px] xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12">
      <!-- Línea horizontal completa antes de Asesores de Proyectos (1:1 Figma) -->
      <div
        ref="lineTopRef"
        class="h-[1.5px] bg-[#070707] w-full mb-14 sm:mb-16 lg:mb-20 will-change-transform"
      />

      <!-- Encabezado oficial con triángulo naranja de Figma detrás (Nodo 503:227) -->
      <div class="relative flex items-center justify-center py-8 sm:py-10 lg:py-12 mb-20 sm:mb-24 lg:mb-28">
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            ref="triangleRef"
            viewBox="0 0 269 283"
            class="w-[180px] sm:w-[220px] lg:w-[250px] xl:w-[269px] h-auto mx-auto select-none pointer-events-none will-change-transform"
            fill="none"
            aria-hidden="true"
          >
            <path d="M28.9293 251.912L0 0L269 282.562L28.9293 251.912Z" fill="#E69D37" />
          </svg>
        </div>

        <h2
          ref="headingRef"
          class="relative z-10 font-barlow font-normal text-4xl sm:text-5xl lg:text-6xl text-[#070707] text-center leading-tight tracking-tight will-change-transform"
        >
          Asesores de Proyectos
        </h2>
      </div>

      <!-- Retícula escalonada de 4 columnas (alternando desplazamiento 3+1) -->
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 lg:gap-9 gap-y-6 sm:gap-y-9 lg:gap-y-10 max-w-[1080px] xl:max-w-[1140px] 2xl:max-w-[1200px] mx-auto">
        <NosotrosCreadorCard
          v-for="(asesor, index) in asesores"
          :key="asesor.name + asesor.career"
          :alumno="asesor"
          :class="colStartClasses[index]"
        />
      </div>

      <!-- Línea negra horizontal completa de cierre de Asesores (1:1 Figma) -->
      <div
        ref="lineBottomRef"
        class="h-[1.5px] bg-[#070707] w-full mt-14 sm:mt-16 lg:mt-20 will-change-transform"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import NosotrosCreadorCard, { type AlumnoCreador } from './NosotrosCreadorCard.vue'

const triangleRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const lineTopRef = ref<HTMLElement | null>(null)
const lineBottomRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(lineTopRef, { type: 'divider', origin: 'right center', delay: 40 })
  observeScrollReveal(triangleRef, { type: 'triangle', delay: 80 })
  observeScrollReveal(headingRef, { type: 'heading', delay: 120 })
  observeScrollReveal(lineBottomRef, { type: 'divider', origin: 'left center', delay: 120 })
})

// Alternancia de 3 columnas en retícula de 4 (Fila 1: 1,2,3 / Fila 2: 2,3,4 / Fila 3: 1,2,3 / Fila 4: 2,3,4)
const colStartClasses = [
  'lg:col-start-1', 'lg:col-start-2', 'lg:col-start-3',
  'lg:col-start-2', 'lg:col-start-3', 'lg:col-start-4',
  'lg:col-start-1', 'lg:col-start-2', 'lg:col-start-3',
  'lg:col-start-2', 'lg:col-start-3', 'lg:col-start-4'
]

const asesores: AlumnoCreador[] = [
  // Fila 1 (Izquierda: cols 1, 2, 3)
  {
    name: 'Jessica Ochoa',
    career: 'Decana de la Escuela de Arte y Diseño',
    image: '/images/figma-asesor-jessica-ochoa.webp'
  },
  {
    name: 'Nohemi Gamboa',
    career: 'Lider De Proyecto',
    image: '/images/figma-asesor-nohemi-hd.webp'
  },
  {
    name: 'Natalia Ceballos',
    career: 'Lider De Proyecto',
    image: '/images/figma-asesor-natalia-ceballos.webp'
  },
  // Fila 2
  {
    name: 'Cristobal Guerra',
    career: 'Director del Programa Académico LDG',
    image: '/images/figma-asesor-cristobal-guerra.webp'
  },
  {
    name: 'Sergio Trujillo',
    career: 'Asesor de Diseño Gráfico',
    image: '/images/figma-asesor-sergio-trujillo.webp'
  },
  {
    name: 'Edgar Morejón',
    career: 'Asesor de Diseño de Modas',
    image: '/images/figma-asesor-edgar-morejon.webp'
  },
  // Fila 3
  {
    name: 'Amparo Vázquez',
    career: 'Asesora Invitada',
    image: '/images/figma-asesor-amparo-vazquez.webp'
  },
  {
    name: 'Agustín Plancarte',
    career: 'Asesor de Diseño Industrial',
    image: '/images/figma-asesor-agustin-plancarte.webp'
  },
  {
    name: 'Mafer Culebra',
    career: 'Asesor de Diseño Industrial',
    image: '/images/figma-asesor-mafer-culebra.webp'
  },
  // Fila 4
  {
    name: 'María Eugenia Santos',
    career: 'Directora de Programa Académico LINT',
    image: '/images/figma-asesor-maria-eugenia-santos.webp'
  },
  {
    name: 'Daniela Santos',
    career: 'Directora del Programa Académico LDI',
    image: '/images/figma-asesor-daniela-santos.webp'
  },
  {
    name: 'María de los Angeles Castillo',
    career: 'Asesor de Diseño de Interiores',
    image: '/images/figma-asesor-maria-angeles-castillo.webp'
  }
]
</script>
