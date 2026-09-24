<template>
  <section class="bg-white py-12 sm:py-16 lg:py-20 border-t border-neutral-200 select-text overflow-hidden">
    <div class="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16">
      <!-- Encabezado con Título y Controles con flechas con scroll reveal -->
      <div class="flex items-center justify-between gap-4 mb-6 sm:mb-8">
        <h2 ref="headingRef" class="font-barlow font-normal text-3xl sm:text-4xl text-black leading-none">
          Otros proyectos seleccionados
        </h2>
        <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            type="button"
            aria-label="Proyecto anterior"
            class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center text-black hover:border-black hover:bg-neutral-50 hover:scale-105 active:scale-90 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-black cursor-pointer shadow-xs"
            @click="prevSlide"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Siguiente proyecto"
            class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center text-black hover:border-black hover:bg-neutral-50 hover:scale-105 active:scale-90 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-black cursor-pointer shadow-xs"
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
            class="w-44 sm:w-52 lg:w-60 flex-shrink-0 group focus:outline-none transition-transform duration-300 hover:-translate-y-1"
          >
            <NuxtLink
              :to="`/obras/${item.slug}`"
              class="block w-full focus:outline-none"
              @click="handleLinkClick"
            >
              <!-- Imagen en marco cuadrado con velo blanquito suave en hover -->
              <div class="relative w-44 sm:w-52 lg:w-60 aspect-square bg-neutral-100 overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-300">
                <AppImage
                  :src="item.heroImage"
                  :alt="item.title"
                  img-class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none select-none"
                  loading="lazy"
                >
                  <div
                    class="absolute inset-0 bg-white/45 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
                  />
                </AppImage>
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
import { ref, computed, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useContinuousCarousel } from '~/composables/useContinuousCarousel'
import type { Obra } from '~/composables/useObras'

const props = defineProps<{
  related: Obra[]
}>()

const headingRef = ref<HTMLElement | null>(null)
const { observeScrollReveal } = useScrollAnimation()

const repeatedList = computed(() => {
  if (!props.related.length) return []
  return [...props.related, ...props.related, ...props.related, ...props.related]
})

const {
  trackRef,
  isHovered,
  isDragging,
  prevSlide,
  nextSlide,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onMouseLeave,
  handleLinkClick
} = useContinuousCarousel({
  itemCount: () => props.related.length,
  defaultStepWidth: 280,
  speed: 0.55
})

onMounted(() => {
  observeScrollReveal(headingRef, { type: 'heading', delay: 50 })
})
</script>