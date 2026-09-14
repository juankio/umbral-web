<template>
  <div
    class="w-full relative select-none"
    role="region"
    aria-roledescription="carousel"
    aria-label="Personajes de Inspiración CRGS"
    @touchstart.passive="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Transition name="inspiration-fade" mode="out-in">
      <div
        :key="currentSlide.id"
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[460px]"
      >
        <!-- Columna Izquierda: Foto con recorte triangular afilado -->
        <div class="lg:col-span-5 flex justify-center items-center">
          <div class="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square flex items-center justify-center">
            <div class="w-full h-full transition-transform duration-700 ease-out hover:scale-[1.02] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]">
              <img
                :src="currentSlide.image"
                :alt="currentSlide.alt"
                class="w-full h-full object-cover grayscale contrast-110 brightness-95 hover:grayscale-0 transition-all duration-700 block"
                :style="{ clipPath: currentSlide.clipPath }"
              />
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Información y Controles -->
        <div class="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div class="space-y-2">
            <span class="font-barlow text-xs sm:text-sm tracking-[0.25em] uppercase text-[#A5BCD5] font-medium block">
              {{ currentSlide.badge }}
            </span>
            <h3 class="font-barlow font-medium text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight">
              {{ currentSlide.name }}
            </h3>
          </div>

          <div class="space-y-4 font-barlow text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed text-justify sm:text-left font-normal">
            <p v-for="(text, idx) in currentSlide.paragraphs" :key="idx">
              {{ text }}
            </p>
          </div>

          <!-- Controles del Carrusel -->
          <div class="pt-4 flex items-center justify-between sm:justify-start gap-6 border-t border-white/10">
            <div class="flex items-center gap-3">
              <button
                type="button"
                aria-label="Slide anterior"
                class="w-12 h-12 rounded-full border border-white/20 hover:border-white text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#A5BCD5]"
                @click="prevSlide"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Slide siguiente"
                class="w-12 h-12 rounded-full border border-white/20 hover:border-white text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#A5BCD5]"
                @click="nextSlide"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <span class="font-mono text-base tracking-widest text-white/90">
              {{ formattedCounter }}
            </span>

            <div class="hidden sm:flex items-center gap-2">
              <button
                v-for="(_, idx) in slides"
                :key="idx"
                type="button"
                :aria-label="`Ir al slide ${idx + 1}`"
                class="h-1 rounded-full transition-all duration-300"
                :class="currentIndex === idx ? 'w-8 bg-white' : 'w-3 bg-white/25 hover:bg-white/50'"
                @click="goToSlide(idx)"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { inspirationCarouselSlides } from '~/composables/useInspiration'

const slides = inspirationCarouselSlides
const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}
const goToSlide = (index: number) => {
  currentIndex.value = index
}

const currentSlide = computed(() => slides[currentIndex.value])
const formattedCounter = computed(() => {
  const cur = String(currentIndex.value + 1).padStart(2, '0')
  const tot = String(slides.length).padStart(2, '0')
  return `${cur} / ${tot}`
})

let touchStartX = 0
const onTouchStart = (e: TouchEvent) => {
  if (e.changedTouches?.[0]) touchStartX = e.changedTouches[0].clientX
}
const onTouchEnd = (e: TouchEvent) => {
  if (!e.changedTouches?.[0]) return
  const diff = e.changedTouches[0].clientX - touchStartX
  if (diff > 45) prevSlide()
  else if (diff < -45) nextSlide()
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'ArrowLeft') prevSlide()
}

onMounted(() => {
  if (import.meta.client) window.addEventListener('keydown', onKeyDown)
})
onUnmounted(() => {
  if (import.meta.client) window.removeEventListener('keydown', onKeyDown)
})
</script>

<style scoped>
.inspiration-fade-enter-active,
.inspiration-fade-leave-active {
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.inspiration-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.inspiration-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>