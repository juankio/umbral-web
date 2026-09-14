<template>
  <button
    type="button"
    :aria-label="side === 'left' ? `Ver figura anterior: ${figure.name}` : `Ver figura siguiente: ${figure.name}`"
    class="hidden md:flex flex-col items-center justify-center absolute top-1/2 -translate-y-1/2 z-10 opacity-50 hover:opacity-100 scale-75 hover:scale-80 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#A5BCD5]/50 rounded-lg"
    :class="side === 'left' ? '-left-8 lg:-left-16 xl:-left-24' : '-right-8 lg:-right-16 xl:-right-24'"
    @click="$emit('navigate')"
  >
    <div class="w-36 md:w-44 lg:w-60 aspect-square filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
      <img
        :src="figure.image"
        :alt="figure.alt"
        class="w-full h-full object-cover grayscale contrast-110 brightness-90 hover:grayscale-0 transition-all duration-500 block pointer-events-none"
        :style="{ clipPath: figure.clipPath }"
      />
    </div>
  </button>
</template>

<script setup lang="ts">
import type { InspirationSlide } from '~/composables/useInspiration'

defineProps<{
  figure: InspirationSlide
  side: 'left' | 'right'
}>()

defineEmits<{
  (e: 'navigate'): void
}>()
</script>
