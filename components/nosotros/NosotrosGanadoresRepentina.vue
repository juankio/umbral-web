<template>
  <section id="ganadores-repentina" class="relative w-full bg-white pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 scroll-mt-24 select-text">
    <div class="w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-12">
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
        class="w-full h-[1px] sm:h-[2px] bg-[#030303] max-w-[1540px] mx-auto mt-4 mb-8 sm:mb-12 will-change-transform"
      />

      <!-- Bloques de Proyectos -->
      <div class="space-y-12 sm:space-y-16">
        <div
          v-for="proyecto in proyectos"
          :key="proyecto.nombre"
          class="w-full"
        >
          <h3 class="font-barlow font-normal text-xl sm:text-2xl text-[#0B0B0B] mb-4">
            {{ proyecto.nombre }}
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <article
              v-for="alumno in proyecto.alumnos"
              :key="alumno.name"
              class="group flex flex-col"
            >
              <!-- Foto con ratio aspect-square, esquinas limpias y elevación sutil -->
              <div class="w-full aspect-square overflow-hidden bg-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  :src="alumno.image"
                  :alt="alumno.name"
                  class="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <!-- Nombre y carrera / semestre -->
              <h4 class="font-barlow font-normal text-2xl sm:text-3xl lg:text-4xl text-[#0B0B0B] mt-3 leading-tight">
                {{ alumno.name }}
              </h4>
              <p class="font-barlow text-sm sm:text-base text-neutral-600 mt-1">
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
  image: string
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
      {
        name: 'Regina Galán',
        role: 'Alumna Diseño Gráfico 7mo Semestre',
        image: '/images/alumno-regina-galan.webp'
      },
      {
        name: 'Melissa Marroquín',
        role: 'Alumna Diseño Gráfico 7mo Semestre',
        image: '/images/alumno-melissa-marroquin.webp'
      },
      {
        name: 'Diego Escamilla',
        role: 'Alumno Diseño Industrial 7mo Semestre',
        image: '/images/alumno-diego-escamilla.webp'
      }
    ]
  },
  {
    nombre: 'Proyecto: Cimiento',
    alumnos: [
      {
        name: 'Diana Ruanova',
        role: 'Alumna Diseño Industrial 7mo Semestre',
        image: '/images/alumno-diana-ruanova.webp'
      },
      {
        name: 'Diego González',
        role: 'Alumno Diseño Industrial 7mo Semestre',
        image: '/images/alumno-diego-gonzalez.webp'
      },
      {
        name: 'Matías Romero',
        role: 'Alumno Diseño Industrial 7mo Semestre',
        image: '/images/alumno-matias-romero.webp'
      }
    ]
  }
]
</script>
