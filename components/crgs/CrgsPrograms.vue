<template>
  <section id="programas-profesional" class="py-20 lg:py-28 bg-white border-b border-neutral-200 overflow-hidden select-text">
    <div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16">
      <!-- Encabezado 1:1 Figma (#332:336) Centrado -->
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 class="font-barlow font-normal text-4xl sm:text-5xl lg:text-6xl text-black leading-none">
          Programas Profesional
        </h2>
        <p class="font-barlow font-normal text-xl sm:text-2xl lg:text-3xl text-neutral-700 leading-snug mt-3">
          Aprende en clases de estudio dirigidas por la práctica e impartidas por una facultad de artistas y diseñadores.
        </p>
      </div>

      <!-- Carrusel Horizontal Infinito con Triángulos Únicos de Figma -->
      <div
        class="relative w-full overflow-hidden py-4"
        @mouseenter="isHovered = true"
        @mouseleave="onMouseLeave"
      >
        <div
          ref="trackRef"
          class="flex gap-12 sm:gap-16 lg:gap-20 will-change-transform touch-pan-y select-none items-center"
          :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
        >
          <div
            v-for="(prog, idx) in repeatedPrograms"
            :key="`${prog.code}-${idx}`"
            class="w-[460px] sm:w-[540px] lg:w-[600px] flex-shrink-0 flex items-center gap-6 sm:gap-8 group focus:outline-none"
          >
            <!-- Contenedor del Triángulo Oficial de Figma con su Orientación Geométrica Real -->
            <div class="h-44 sm:h-56 lg:h-64 max-w-[260px] sm:max-w-[310px] flex-shrink-0 flex items-center justify-center">
              <AppImage
                :src="prog.image"
                :alt="prog.name"
                img-class="h-full w-auto max-w-full object-contain pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-sm"
                wrapper-class="h-full flex items-center justify-center"
                loading="lazy"
              />
            </div>

            <!-- Información del Programa 1:1 Figma -->
            <div class="flex-grow space-y-1 select-text max-w-xs sm:max-w-sm">
              <h3 class="font-barlow font-medium text-xl sm:text-2xl lg:text-[26px] text-black leading-tight">
                {{ prog.name }}
              </h3>
              <span class="font-barlow text-base sm:text-lg text-neutral-500 block font-normal leading-none pt-0.5">
                {{ prog.code }}
              </span>
              <p class="font-barlow text-sm sm:text-base text-neutral-700 leading-snug pt-1">
                {{ prog.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Controles de navegación situados debajo del carrusel -->
      <div class="flex items-center justify-center gap-4 mt-8 sm:mt-12">
        <button
          type="button"
          aria-label="Programa anterior"
          class="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-300 hover:border-black hover:bg-neutral-50 text-black flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black active:scale-95 shadow-xs"
          @click="prevSlide"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Programa siguiente"
          class="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-300 hover:border-black hover:bg-neutral-50 text-black flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-black active:scale-95 shadow-xs"
          @click="nextSlide"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

interface Program {
  code: string
  name: string
  description: string
  image: string
}

// 5 programas oficiales con sus respectivos triángulos geométricos de Figma
const programs: Program[] = [
  {
    code: 'LDG',
    name: 'Licenciatura en Diseño Gráfico',
    description: 'Estudia la Licenciatura en Diseño Gráfico en UDEM y desarolla tu creatividad con técnicas innovadoras, preparándote para liderar el mundo del diseño visual.',
    image: '/images/program-triangle-2.webp'
  },
  {
    code: 'LINT',
    name: 'Licenciatura en Diseño de Interiores',
    description: 'Estudia la Licenciatura en Diseño de Interiores en UDEM, y transforma diferentes espacios con creatividad, creando ambientes funcionales, estéticos e impactantes.',
    image: '/images/program-triangle-3.webp'
  },
  {
    code: 'LDM',
    name: 'Licenciatura en Diseño de Moda',
    description: 'Estudia la Licenciatura en Diseño de Moda en UDEM y crea tendencias innovadoras con una formación integral en diseño, moda en la industria textil.',
    image: '/images/program-triangle-4.webp'
  },
  {
    code: 'LDI',
    name: 'Licenciatura en Diseño Industrial',
    description: 'Estudia la Licenciatura en Diseño Industrial en UDEM y desarolla productos innovadores con un enfoque en funcionalidad, estética para el mercado global.',
    image: '/images/program-triangle-5.webp'
  },
  {
    code: 'LAED',
    name: 'Licenciatura en Animación y Efectos Digitales',
    description: 'Estudia la Licenciatura en Animación y Efectos Digitales en UDEM y domina las técnicas más avanzadas para crear y producir efectos visuales de alto impacto.',
    image: '/images/program-triangle-1.webp'
  }
]

// Cuadruplicamos la lista para garantizar bucle infinito continuo sin fin
const repeatedPrograms = computed(() => [...programs, ...programs, ...programs, ...programs])

const trackRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)
const isDragging = ref(false)

let currentX = 0
let targetX = 0
let singleSetWidth = 0
let animFrameId: number | null = null
let resizeObserver: ResizeObserver | null = null

let startPointerX = 0
let dragStartX = 0

const updateDimensions = () => {
  if (!trackRef.value || !programs.length) return
  const cards = trackRef.value.children
  const n = programs.length
  if (cards.length > n && cards[n] instanceof HTMLElement && cards[0] instanceof HTMLElement) {
    const calculatedWidth = (cards[n] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft
    if (calculatedWidth > 0) {
      singleSetWidth = calculatedWidth
    }
  }
}

const getStepWidth = () => {
  if (singleSetWidth > 0 && programs.length) {
    return singleSetWidth / programs.length
  }
  return 520
}

const prevSlide = () => {
  targetX -= getStepWidth()
}

const nextSlide = () => {
  targetX += getStepWidth()
}

const onPointerDown = (e: PointerEvent) => {
  isDragging.value = true
  startPointerX = e.clientX
  dragStartX = currentX
}

const onPointerMove = (e: PointerEvent) => {
  if (!isDragging.value) return
  const diff = e.clientX - startPointerX
  currentX = dragStartX - diff
  targetX = currentX
}

const onPointerUp = () => {
  if (!isDragging.value) return
  isDragging.value = false
}

const onMouseLeave = () => {
  isHovered.value = false
  if (isDragging.value) {
    isDragging.value = false
  }
}

const animate = () => {
  if (singleSetWidth > 0) {
    // Desplazamiento continuo suave si no está en hover ni arrastre
    if (!isHovered.value && !isDragging.value) {
      targetX += 0.5
    }

    if (!isDragging.value) {
      // Amortiguación hacia targetX
      currentX += (targetX - currentX) * 0.08
    }

    // Normalización imperceptible para bucle infinito continuo
    if (currentX >= singleSetWidth) {
      currentX -= singleSetWidth
      targetX -= singleSetWidth
    } else if (currentX < 0) {
      currentX += singleSetWidth
      targetX += singleSetWidth
    }

    if (trackRef.value) {
      trackRef.value.style.transform = `translate3d(${-currentX}px, 0, 0)`
    }
  }

  animFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  nextTick(() => {
    updateDimensions()
    animFrameId = requestAnimationFrame(animate)

    if (typeof ResizeObserver !== 'undefined' && trackRef.value) {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions()
      })
      resizeObserver.observe(trackRef.value)
    }
  })
})

onBeforeUnmount(() => {
  if (animFrameId) {
    cancelAnimationFrame(animFrameId)
  }
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>
