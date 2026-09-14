<template>
  <div class="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 border-t border-white/10 mt-8">
    <!-- Flechas minimalistas -->
    <div class="flex items-center gap-3">
      <button
        type="button"
        aria-label="Figura anterior"
        class="w-11 h-11 rounded-full border border-white/20 hover:border-white text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#A5BCD5]"
        @click="$emit('prev')"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Figura siguiente"
        class="w-11 h-11 rounded-full border border-white/20 hover:border-white text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#A5BCD5]"
        @click="$emit('next')"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
import { computed } from 'vue'

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

const formattedCounter = computed(() => {
  const cur = String(props.current + 1).padStart(2, '0')
  const tot = String(props.total).padStart(2, '0')
  return `${cur} / ${tot}`
})
</script>
