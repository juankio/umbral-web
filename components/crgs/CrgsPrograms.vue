<template>
  <section id="programas" class="py-20 lg:py-28 bg-white border-b border-neutral-200 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado Centrado Institucional -->
      <div class="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
          Oferta Académica Oficial
        </span>
        <h2 class="font-barlow font-bold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-neutral-950">
          PROGRAMAS PROFESIONAL
        </h2>
        <p class="font-sans text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto text-center mt-3 leading-relaxed">
          Aprende en clases de estudio dirigidas por la práctica e impartidas por una facultad de artistas y diseñadores.
        </p>
      </div>

      <!-- Lista Escalonada de Programas Académicos (Alternancia en Flujo Vertical) -->
      <div class="space-y-20 lg:space-y-28">
        <article
          v-for="(prog, idx) in programs"
          :key="prog.code"
          :ref="(el) => setItemRef(el, idx)"
          :data-index="idx"
          class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 transition-all duration-700 ease-out"
          :class="[
            idx % 2 === 1 ? 'lg:flex-row-reverse' : '',
            visibleMap[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          ]"
        >
          <!-- Retrato/Fotografía con Corte Triangular Arquitectónico -->
          <div class="w-full lg:w-1/2 flex justify-center">
            <div
              class="relative w-full max-w-[520px] aspect-[4/3] overflow-hidden bg-neutral-100 shadow-md group"
              :style="{
                clipPath: idx % 2 === 0
                  ? 'polygon(0% 15%, 85% 0%, 100% 85%, 15% 100%)'
                  : 'polygon(15% 0%, 100% 15%, 85% 100%, 0% 85%)'
              }"
            >
              <img
                :src="prog.image"
                :alt="prog.name"
                class="w-full h-full object-cover grayscale-[25%] contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-neutral-950/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </div>

          <!-- Información del Programa Académico -->
          <div class="w-full lg:w-1/2 space-y-4">
            <span class="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-1 bg-neutral-950 text-white inline-block">
              {{ prog.code }}
            </span>
            <h3 class="font-barlow font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-neutral-950 leading-tight">
              {{ prog.name }}
            </h3>
            <p class="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
              {{ prog.description }}
            </p>
            <div class="pt-2">
              <a
                :href="prog.link"
                target="_blank"
                rel="noopener noreferrer"
                class="font-barlow font-bold text-sm uppercase tracking-wider text-neutral-950 hover:text-neutral-600 inline-flex items-center gap-2 border-b-2 border-neutral-950 hover:border-neutral-500 pb-1 transition-colors group"
              >
                Plan de Estudios
                <svg class="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12L12 4M5 4h7v7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, onMounted, onBeforeUnmount, type ComponentPublicInstance } from 'vue'

interface Program {
  code: string
  name: string
  description: string
  image: string
  link: string
}

const programs: Program[] = [
  {
    code: 'LAED',
    name: 'Licenciatura en Animación y Efectos Digitales',
    description: 'Desarrolla narrativas visuales inmersivas, animación digital 2D/3D y efectos especiales cinematográficos con rigor artístico y técnico.',
    image: '/images/crgs-student-laed.png',
    link: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-animacion-y-efectos-digitales'
  },
  {
    code: 'LDG',
    name: 'Licenciatura en Diseño Gráfico',
    description: 'Domina los sistemas de comunicación visual, tipografía experimental, diseño editorial y experiencias multimedia de alcance internacional.',
    image: '/images/crgs-student-ldg.png',
    link: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-diseno-grafico'
  },
  {
    code: 'LINT',
    name: 'Licenciatura en Diseño de Interiores',
    description: 'Transforma atmósferas y espacios habitables integrando iluminación arquitectónica, tecnología constructiva y psicología ambiental.',
    image: '/images/crgs-student-lint.png',
    link: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-diseno-de-interiores'
  },
  {
    code: 'LDM',
    name: 'Licenciatura en Diseño de Moda',
    description: 'Crea colecciones textiles, indumentaria contemporánea y patronaje tridimensional con un profundo enfoque en la sostenibilidad.',
    image: '/images/crgs-student-ldm.png',
    link: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-diseno-de-moda'
  },
  {
    code: 'LDI',
    name: 'Licenciatura en Diseño Industrial',
    description: 'Diseña objetos, sistemas de mobiliario y productos manufacturados con alto valor estético, funcional y rigor productivo sostenible.',
    image: '/images/crgs-student-ldi.png',
    link: 'https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-diseno-industrial'
  }
]

const itemElements: HTMLElement[] = []
const setItemRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el && '$el' in el) {
    itemElements[index] = el.$el as HTMLElement
  } else if (el) {
    itemElements[index] = el as HTMLElement
  }
}

const visibleMap = reactive<Record<number, boolean>>({})
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idx = Number(entry.target.getAttribute('data-index'))
        if (!isNaN(idx)) {
          visibleMap[idx] = true
          observer?.unobserve(entry.target)
        }
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

  itemElements.forEach((el) => {
    if (el) observer?.observe(el)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
