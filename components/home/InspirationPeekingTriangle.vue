<template>
  <button
    type="button"
    :aria-label="side === 'left' ? `Ver figura anterior: ${figure.name}` : `Ver figura siguiente: ${figure.name}`"
    class="hidden md:flex flex-col items-center justify-center absolute top-1/2 -translate-y-1/2 z-10 opacity-45 hover:opacity-100 scale-90 hover:scale-100 transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#A5BCD5]/50 rounded-lg"
    :class="side === 'left' ? '-left-4 lg:-left-10 xl:-left-14' : '-right-4 lg:-right-10 xl:-right-14'"
    @click="$emit('navigate')"
  >
    <div class="w-28 sm:w-36 lg:w-44 h-40 sm:h-52 lg:h-64 flex items-center justify-center filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
      <AppImage
        :src="figure.image"
        :alt="figure.alt"
        img-class="w-full h-full object-contain grayscale contrast-110 brightness-95 hover:grayscale-0 transition-all duration-500 block pointer-events-none"
        loading="lazy"
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
