<template>
  <section id="ganadores-repentina" class="relative w-full bg-white py-5 sm:py-6 lg:py-8 scroll-mt-24 select-text">
    <div class="w-full max-w-[720px] sm:max-w-[780px] lg:max-w-[820px] mx-auto px-4">
      <!-- Encabezado de Sección Oficial -->
      <div class="text-center">
        <h2
          ref="headingRef"
          class="font-barlow font-normal text-3xl sm:text-4xl lg:text-5xl text-[#070707] text-center leading-tight tracking-tight will-change-transform"
        >
          Ganadores Repentina
        </h2>
        <p
          ref="subtextRef"
          class="font-barlow font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-[#0B0B0B]/85 text-center leading-snug sm:leading-relaxed max-w-3xl sm:max-w-4xl mx-auto mt-2.5 sm:mt-3.5 mb-3.5 sm:mb-5 will-change-transform"
        >
          Alumnos de la Escuela de Arte y Diseño fueron ganadores de la repentina por su proyecto y ahora expuesto en Zona Maco.
        </p>
      </div>

      <!-- Línea divisoria negra horizontal -->
      <div
        ref="lineRef"
        class="w-full h-[1px] sm:h-[2px] bg-[#030303] mx-auto mt-4 mb-6 sm:mb-8 will-change-transform"
      />

      <!-- Bloques de Proyectos -->
      <div class="space-y-4 sm:space-y-5">
        <div
          v-for="proyecto in proyectos"
          :key="proyecto.nombre"
          class="w-full"
        >
          <h3 class="font-barlow font-normal text-base sm:text-lg text-[#0B0B0B] mb-2">
            {{ proyecto.nombre }}
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            <article
              v-for="alumno in proyecto.alumnos"
              :key="alumno.name"
              class="group flex flex-col"
            >
              <div class="w-full max-w-[160px] sm:max-w-[175px] lg:max-w-[185px] aspect-square bg-[#1C1C1C] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group-hover:scale-[1.01]" />
              <h4 class="font-barlow font-normal text-lg sm:text-xl lg:text-2xl text-[#0B0B0B] mt-1.5 sm:mt-2 leading-tight">
                {{ alumno.name }}
              </h4>
              <p class="font-barlow text-xs text-neutral-600 mt-0.5 leading-snug">
                {{ alumno.role }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

interface Alumno {
  name: string
  role: string
}

interface ProyectoGanador {
  nombre: string
  alumnos: Alumno[]
}

const headingRef = ref<HTMLElement | null>(null)
const subtextRef = ref<HTMLElement | null>(null)
const lineRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(headingRef, { type: 'heading', delay: 50 })
  observeScrollReveal(subtextRef, { type: 'paragraph', delay: 120 })
  observeScrollReveal(lineRef, { type: 'divider', origin: 'center', delay: 200 })
})

const proyectos: ProyectoGanador[] = [
  {
    nombre: 'Proyecto: Reliquia',
    alumnos: [
      { name: 'Regina Galán', role: 'Alumna Diseño Gráfico 7mo Semestre' },
      { name: 'Melissa Marroquín', role: 'Alumna Diseño Gráfico 7mo Semestre' },
      { name: 'Diego Escamilla', role: 'Alumno Diseño Industrial 7mo Semestre' }
    ]
  },
  {
    nombre: 'Proyecto: Cimiento',
    alumnos: [
      { name: 'Diana Ruanova', role: 'Alumna Diseño Industrial 7mo Semestre' },
      { name: 'Diego González', role: 'Alumno Diseño Industrial 7mo Semestre' },
      { name: 'Matías Romero', role: 'Alumno Diseño Industrial 7mo Semestre' }
    ]
  }
]
</script>
