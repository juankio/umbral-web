<template>
  <div
    class="w-full relative select-none"
    role="region"
    aria-roledescription="carousel"
    aria-label="Personajes de Inspiración CRGS"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @touchstart.passive="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- Flanqueo Peeking Izquierdo (Figura anterior) -->
    <InspirationPeekingTriangle
      :figure="prevFigure"
      side="left"
      @navigate="prevSlide"
    />

    <!-- Escena Central: Información a la izquierda y Figura activa a la derecha -->
    <div class="mx-auto max-w-4xl lg:max-w-5xl px-4 sm:px-8 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center min-h-[460px]">
        <!-- Columna Información y Biografía (A la izquierda, apuntada por la flecha de Don Roberto) -->
        <div
          ref="activeTextRef"
          class="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center space-y-6"
        >
          <div class="space-y-2">
            <span class="reveal-text font-barlow text-xs sm:text-sm tracking-[0.25em] uppercase text-[#A5BCD5] font-medium block">
              {{ currentSlide.badge }}
            </span>
            <h3 class="reveal-text font-barlow font-medium text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
              {{ currentSlide.name }}
            </h3>
          </div>

          <div class="space-y-4 font-barlow text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed text-justify sm:text-left font-normal">
            <p v-for="(text, idx) in currentSlide.paragraphs" :key="idx" class="reveal-text">
              {{ text }}
            </p>
          </div>
        </div>

        <!-- Columna Triángulo Monumental Activo (A la derecha) -->
        <div class="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center">
          <div class="relative w-[320px] sm:w-[380px] lg:w-[420px] h-[460px] sm:h-[520px] lg:h-[560px] flex items-center justify-center [perspective:1200px]">
            <div
              ref="activeTriangleRef"
              class="w-full h-full flex items-center justify-center will-change-transform"
              style="transform-style: preserve-3d"
            >
              <img
                :src="currentSlide.image"
                :alt="currentSlide.alt"
                class="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flanqueo Peeking Derecho (Figura siguiente) -->
    <InspirationPeekingTriangle
      :figure="nextFigure"
      side="right"
      @navigate="nextSlide"
    />

    <!-- Controles al Pie: Flechas ( < ) ( > ), Contador 01 / 03 y 3 barras horizontales de navegación -->
    <InspirationCarouselControls
      :current="currentIndex"
      :total="slides.length"
      :progress="progress"
      @prev="prevSlide"
      @next="nextSlide"
      @select="goToSlide"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'
import { animate, stagger } from 'animejs'
import { inspirationCarouselSlides } from '~/composables/useInspiration'
import { useInspirationAutoplay } from '~/composables/useInspirationAutoplay'
import InspirationPeekingTriangle from '~/components/home/InspirationPeekingTriangle.vue'
import InspirationCarouselControls from '~/components/home/InspirationCarouselControls.vue'

const slides = inspirationCarouselSlides
const activeTriangleRef = ref<HTMLElement | null>(null)
const activeTextRef = ref<HTMLElement | null>(null)

const playSlideAnimation = (dir: number = 1) => {
  if (!import.meta.client || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  nextTick(() => {
    if (activeTriangleRef.value) {
      animate(activeTriangleRef.value, {
        rotateY: [`${dir * 24}deg`, '0deg'],
        scale: [0.92, 1],
        opacity: [0, 1],
        duration: 700,
        ease: 'outCubic'
      })
    }

    if (activeTextRef.value) {
      const texts = activeTextRef.value.querySelectorAll('.reveal-text')
      if (texts.length) {
        animate(texts, {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 550,
          delay: stagger(65),
          ease: 'outCubic'
        })
      }
    }
  })
}

const {
  currentIndex,
  progress,
  nextSlide,
  prevSlide,
  goToSlide,
  pauseAutoplay,
  resumeAutoplay,
  onTouchStart,
  onTouchEnd
} = useInspirationAutoplay({
  total: slides.length,
  initialIndex: 0,
  duration: 5500,
  onNavigate: (_index, dir) => playSlideAnimation(dir)
})

const prevIndex = computed(() => (currentIndex.value - 1 + slides.length) % slides.length)
const nextIndex = computed(() => (currentIndex.value + 1) % slides.length)

const currentSlide = computed(() => slides[currentIndex.value])
const prevFigure = computed(() => slides[prevIndex.value])
const nextFigure = computed(() => slides[nextIndex.value])

onMounted(() => {
  playSlideAnimation(1)
})
</script>