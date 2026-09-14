<template>
  <button
    type="button"
    :aria-label="side === 'left' ? `Ver figura anterior: ${figure.name}` : `Ver figura siguiente: ${figure.name}`"
    class="hidden md:flex flex-col items-center justify-center absolute top-1/2 -translate-y-1/2 z-10 opacity-60 hover:opacity-100 scale-90 hover:scale-100 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#A5BCD5]/50 rounded-lg"
    :class="side === 'left' ? '-left-6 lg:-left-12 xl:-left-16' : '-right-6 lg:-right-12 xl:-right-16'"
    @click="$emit('navigate')"
  >
    <div class="w-36 md:w-44 lg:w-56 aspect-square filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
      <img
        :src="figure.image"
        :alt="figure.alt"
        class="w-full h-full object-cover grayscale contrast-110 brightness-95 hover:grayscale-0 transition-all duration-500 block pointer-events-none"
        :style="{ clipPath: peekingClipPath }"
      />
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { InspirationSlide } from '~/composables/useInspiration'

const props = defineProps<{
  figure: InspirationSlide
  side: 'left' | 'right'
}>()

defineEmits<{
  (e: 'navigate'): void
}>()

const peekingClipPath = computed(() => {
  return props.side === 'left'
    ? 'polygon(100% 0%, 0% 50%, 100% 100%)'
    : 'polygon(0% 0%, 100% 50%, 0% 100%)'
})
</script>
