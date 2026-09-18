<template>
  <section class="bg-white py-12 sm:py-16 lg:py-20 border-t border-neutral-200 select-text overflow-hidden">
    <div class="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16">
      <!-- Encabezado con Título y Controles con flechas -->
      <div class="flex items-center justify-between gap-4 mb-6 sm:mb-8">
        <h2 class="font-barlow font-normal text-3xl sm:text-4xl text-black leading-none">
          Otros proyectos seleccionados
        </h2>
        <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            type="button"
            aria-label="Proyecto anterior"
            class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center text-black hover:border-black hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-black cursor-pointer"
            @click="prevSlide"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Siguiente proyecto"
            class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center text-black hover:border-black hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-black cursor-pointer"
            @click="nextSlide"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Carrusel Horizontal Continuo Infinito -->
      <div
        class="relative w-full overflow-hidden py-3"
        @mouseenter="isHovered = true"
        @mouseleave="onMouseLeave"
      >
        <div
          ref="trackRef"
          class="flex gap-6 sm:gap-8 will-change-transform touch-pan-y select-none"
          :class="isDragging ? 'cursor-grabbing' : 'cursor-grab'"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
        >
          <div
            v-for="(item, idx) in repeatedList"
            :key="`${item.slug}-${idx}`"
            class="w-44 sm:w-52 lg:w-60 flex-shrink-0 group focus:outline-none"
          >
            <NuxtLink
              :to="`/obras/${item.slug}`"
              class="block w-full focus:outline-none"
              @click="handleLinkClick"
            >
              <!-- Imagen en marco cuadrado con velo blanquito suave en hover como en proyectos -->
              <div class="relative w-44 sm:w-52 lg:w-60 aspect-square bg-neutral-100 overflow-hidden shadow-xs">
                <img
                  :src="item.heroImage"
                  :alt="item.title"
                  class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none select-none"
                  loading="lazy"
                  draggable="false"
                />

                <!-- Velo blanquito suave en hover idéntico a selección de proyectos -->
                <div
                  class="absolute inset-0 bg-white/45 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
                />
              </div>

              <!-- Título debajo en Title Case -->
              <h3 class="font-barlow font-normal text-lg sm:text-xl text-black leading-none mt-3 truncate group-hover:underline">
                {{ item.title }}
              </h3>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { Obra } from '~/composables/useObras'

const props = defineProps<{
  related: Obra[]
}>()

const trackRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)
const isDragging = ref(false)

// Cuadruplicamos el conjunto para garantizar continuidad visual infinita en cualquier resolución
const repeatedList = computed(() => {
  if (!props.related.length) return []
  return [...props.related, ...props.related, ...props.related, ...props.related]
})

let currentX = 0
let targetX = 0
let singleSetWidth = 0
let animFrameId: number | null = null
let resizeObserver: ResizeObserver | null = null

let startPointerX = 0
let dragStartX = 0
let didDrag = false

const updateDimensions = () => {
  if (!trackRef.value || !props.related.length) return
  const cards = trackRef.value.children
  const n = props.related.length
  if (cards.length > n && cards[n] instanceof HTMLElement && cards[0] instanceof HTMLElement) {
    const calculatedWidth = (cards[n] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft
    if (calculatedWidth > 0) {
      singleSetWidth = calculatedWidth
    }
  }
}

const getStepWidth = () => {
  if (singleSetWidth > 0 && props.related.length) {
    return singleSetWidth / props.related.length
  }
  return 280
}

const prevSlide = () => {
  targetX -= getStepWidth()
}

const nextSlide = () => {
  targetX += getStepWidth()
}

const onPointerDown = (e: PointerEvent) => {
  isDragging.value = true
  didDrag = false
  startPointerX = e.clientX
  dragStartX = currentX
}

const onPointerMove = (e: PointerEvent) => {
  if (!isDragging.value) return
  const diff = e.clientX - startPointerX
  if (Math.abs(diff) > 5) {
    didDrag = true
  }
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

const handleLinkClick = (e: MouseEvent) => {
  if (didDrag) {
    e.preventDefault()
    e.stopPropagation()
  }
}

const animate = () => {
  if (singleSetWidth > 0) {
    // Auto-desplazamiento continuo suave si no está en hover ni arrastre
    if (!isHovered.value && !isDragging.value) {
      targetX += 0.55
    }

    if (!isDragging.value) {
      // Amortiguación fluida hacia targetX (lerp)
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
