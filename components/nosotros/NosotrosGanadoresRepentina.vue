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

      <!-- 2. Ritmo Asimétrico en Zigzag de los 10 Proyectos Oficiales (equipos de 2, 3 o 4) -->
      <div class="w-full flex flex-col">
        <div
          v-for="(proyecto, idx) in proyectos"
          :id="proyecto.id"
          :key="proyecto.id"
          class="w-full scroll-mt-28"
          :class="[
            proyecto.alumnos.length === 2 ? 'max-w-[720px]' : (proyecto.alumnos.length === 4 ? 'max-w-[1300px]' : 'max-w-[1050px] lg:max-w-[1150px]'),
            proyecto.align === 'right' ? 'ml-auto' : 'mr-auto'
          ]"
        >
          <h3 class="font-barlow text-2xl sm:text-3xl text-[#070707] mb-4 text-left">
            {{ proyecto.name }}
          </h3>
          <div
            class="grid gap-3 sm:gap-8 lg:gap-10"
            :class="{
              'grid-cols-2': proyecto.alumnos.length === 2,
              'grid-cols-3': proyecto.alumnos.length === 3,
              'grid-cols-2 sm:grid-cols-4': proyecto.alumnos.length === 4
            }"
          >
            <NosotrosCreadorCard
              v-for="alumno in proyecto.alumnos"
              :key="proyecto.id + '-' + alumno.name"
              :alumno="alumno"
            />
          </div>
          <!-- Línea negra horizontal individual de cada fila en zigzag -->
          <div
            v-if="idx < proyectos.length - 1"
            :ref="el => setLineRef(el, idx)"
            class="h-[1.5px] bg-[#070707] w-full mt-8 mb-14 sm:mb-16 will-change-transform"
            :class="proyecto.align === 'right' ? 'ml-auto' : ''"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useCreadores } from '~/composables/useCreadores'
import NosotrosCreadorCard from './NosotrosCreadorCard.vue'

const triangleRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const lineRefs = ref<HTMLElement[]>([])

const setLineRef = (el: any, idx: number) => {
  if (el) lineRefs.value[idx] = el.$el ?? el
}

const { proyectos } = useCreadores()
const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(triangleRef, { type: 'triangle', delay: 40 })
  observeScrollReveal(headingRef, { type: 'heading', delay: 100 })
  lineRefs.value.forEach((line, idx) => {
    if (!line) return
    const align = proyectos[idx]?.align ?? 'left'
    observeScrollReveal(line, {
      type: 'divider',
      origin: align === 'right' ? 'right center' : 'left center',
      delay: 120
    })
  })
})
</script>
