<template>
  <div class="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-white/10 mt-8">
    <!-- Flechas minimalistas con micro-interacción táctil -->
    <div class="flex items-center gap-3">
      <button
        ref="prevBtnRef"
        type="button"
        aria-label="Figura anterior"
        class="w-11 h-11 rounded-full border border-white/20 hover:border-white text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#A5BCD5] will-change-transform cursor-pointer"
        @mouseenter="animateBtn(prevBtnRef, -2)"
        @mouseleave="resetBtn(prevBtnRef)"
        @click="$emit('prev')"
      >
        <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        ref="nextBtnRef"
        type="button"
        aria-label="Figura siguiente"
        class="w-11 h-11 rounded-full border border-white/20 hover:border-white text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#A5BCD5] will-change-transform cursor-pointer"
        @mouseenter="animateBtn(nextBtnRef, 2)"
        @mouseleave="resetBtn(nextBtnRef)"
        @click="$emit('next')"
      >
        <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Contador tipográfico 01 / 03 -->
    <span class="font-mono text-sm sm:text-base tracking-widest text-white/90">
      {{ formattedCounter }}
    </span>

    <!-- Barras de progreso -->
    <div class="flex items-center gap-2" role="tablist" aria-label="Indicadores de diapositiva">
      <button
        v-for="(_, idx) in total"
        :key="idx"
        type="button"
        role="tab"
        :aria-selected="current === idx"
        :aria-label="`Ir a la figura ${idx + 1}`"
        class="h-1.5 rounded-full overflow-hidden transition-all duration-300 relative bg-white/20 cursor-pointer"
        :class="current === idx ? 'w-10' : 'w-4 hover:bg-white/40'"
        @click="$emit('select', idx)"
      >
        <span
          v-if="current === idx"
          class="absolute inset-0 bg-white origin-left transition-all duration-75"
          :style="{ width: `${progress}%` }"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { animate } from 'animejs'

const props = defineProps<{
  current: number
  total: number
  progress: number
}>()

defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
  (e: 'select', index: number): void
}>()

const prevBtnRef = ref<HTMLElement | null>(null)
const nextBtnRef = ref<HTMLElement | null>(null)

const isReduced = () => {
  if (!import.meta.client) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const animateBtn = (el: HTMLElement | null, xShift: number) => {
  if (!el || isReduced()) return
  animate(el, {
    scale: 1.08,
    translateX: xShift,
    duration: 220,
    ease: 'outQuad'
  })
}

const resetBtn = (el: HTMLElement | null) => {
  if (!el || isReduced()) return
  animate(el, {
    scale: 1,
    translateX: 0,
    duration: 250,
    ease: 'outQuad'
  })
}

const formattedCounter = computed(() => {
  const cur = String(props.current + 1).padStart(2, '0')
  const tot = String(props.total).padStart(2, '0')
  return `${cur} / ${tot}`
})
</script>
