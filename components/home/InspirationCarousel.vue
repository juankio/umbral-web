<template>
  <div
    class="w-full relative select-none cursor-grab active:cursor-grabbing"
    role="region"
    aria-roledescription="carousel"
    aria-label="Personajes de Inspiración CRGS"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
    @touchstart.passive="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- Flanqueo Peeking Izquierdo (Figura anterior en bucle infinito) -->
    <InspirationPeekingTriangle
      :figure="prevFigure"
      side="left"
      @navigate="prevSlide"
    />

    <!-- Escena Central: Información a la izquierda y Figura activa a la derecha -->
    <div class="mx-auto max-w-4xl lg:max-w-5xl px-4 sm:px-8 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center min-h-[380px] lg:min-h-[460px]">
        <!-- Columna Información y Biografía (A la izquierda en desktop, abajo en móvil) -->
        <div
          ref="activeTextRef"
          class="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center space-y-4 sm:space-y-6"
        >
          <div class="space-y-1.5 sm:space-y-2 text-center lg:text-left">
            <span class="reveal-text font-barlow text-xs sm:text-sm tracking-[0.25em] uppercase text-[#A5BCD5] font-medium block">
              {{ currentSlide.badge }}
            </span>
            <h3 class="reveal-text font-barlow font-medium text-2xl sm:text-3xl lg:text-[44px] text-white leading-tight">
              {{ currentSlide.name }}
            </h3>
          </div>

          <div class="space-y-3 sm:space-y-4 font-barlow text-sm sm:text-base lg:text-xl text-white/80 leading-snug lg:leading-relaxed text-left font-normal">
            <p v-for="(text, idx) in currentSlide.paragraphs" :key="idx" class="reveal-text">
              {{ text }}
            </p>
          </div>
        </div>

        <!-- Columna Triángulo Monumental Activo (A la derecha en desktop, arriba en móvil) -->
        <div class="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center">
          <div class="relative w-[190px] sm:w-[280px] lg:w-[420px] h-[220px] sm:h-[340px] lg:h-[560px] flex items-center justify-center [perspective:1200px]">
            <div
              ref="activeTriangleRef"
              class="w-full h-full flex items-center justify-center will-change-transform"
              style="transform-style: preserve-3d"
            >
              <AppImage
                :src="currentSlide.image"
                :alt="currentSlide.alt"
                img-class="w-full h-full object-contain pointer-events-none"
                wrapper-class="w-full h-full flex items-center justify-center"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flanqueo Peeking Derecho (Figura siguiente en bucle infinito) -->
    <InspirationPeekingTriangle
      :figure="nextFigure"
      side="right"
      @navigate="nextSlide"
    />

    <!-- Controles al Pie: Flechas ( < ) ( > ), Contador Circular y Barras de navegación -->
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

let isPointerDown = false
let pointerStartX = 0

const playSlideAnimation = (dir: number = 1) => {
  if (!import.meta.client || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  nextTick(() => {
    if (activeTriangleRef.value) {
      animate(activeTriangleRef.value, {
        translateX: [`${dir * 70}px`, '0px'],
        scale: [0.93, 1],
        opacity: [0, 1],
        duration: 650,
        ease: 'outCubic'
      })
    }

    if (activeTextRef.value) {
      const texts = activeTextRef.value.querySelectorAll('.reveal-text')
      if (texts.length) {
        animate(texts, {
          opacity: [0, 1],
          translateX: [`${dir * 35}px`, '0px'],
          duration: 550,
          delay: stagger(50),
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

const onPointerDown = (e: PointerEvent) => {
  isPointerDown = true
  pointerStartX = e.clientX
  pauseAutoplay()
}

const onPointerMove = (_e: PointerEvent) => {
  // tracking si se desea feedback
}

const onPointerUp = (e: PointerEvent) => {
  if (!isPointerDown) return
  isPointerDown = false
  resumeAutoplay()
  const diff = e.clientX - pointerStartX
  if (diff > 50) {
    prevSlide()
  } else if (diff < -50) {
    nextSlide()
  }
}

// Bucle circular infinito continuo
const prevIndex = computed(() => (currentIndex.value - 1 + slides.length) % slides.length)
const nextIndex = computed(() => (currentIndex.value + 1) % slides.length)

const currentSlide = computed(() => slides[currentIndex.value])
const prevFigure = computed(() => slides[prevIndex.value])
const nextFigure = computed(() => slides[nextIndex.value])

onMounted(() => {
  playSlideAnimation(1)
})
</script>
