<template>
  <section class="relative w-full min-h-[520px] lg:h-[calc(100vh-160px)] max-h-[740px] flex flex-col items-center justify-center overflow-hidden py-10 lg:py-12 bg-white select-none">
    <!-- Cuña izquierda (Figma Group 49, id 112:161) -->
    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[34%] sm:w-[38%] lg:w-[41%] xl:w-[43%] pointer-events-none select-none z-0">
      <svg viewBox="0 0 991 603" class="w-full h-auto block" fill="none">
        <path d="M0 535.815L281.43 0L990.673 603L0 535.815Z" fill="#1C1C1C" />
      </svg>
    </div>

    <!-- Cuña derecha (Figma Group 50, id 112:163) -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[34%] sm:w-[38%] lg:w-[41%] xl:w-[43%] pointer-events-none select-none z-0">
      <svg viewBox="0 0 1004 603" class="w-full h-auto block" fill="none">
        <path d="M1004 0L854.472 602.954L0 175.27L1004 0Z" fill="#1C1C1C" />
      </svg>
    </div>

    <!-- Bloque central: Foto + Título -->
    <div class="relative z-10 flex flex-col items-center justify-center text-center px-4">
      <div
        ref="photoBoxRef"
        class="relative w-[260px] sm:w-[340px] lg:w-[420px] aspect-[476/526] bg-white border border-neutral-300 shadow-sm overflow-hidden"
      >
        <img
          :src="obra.heroImage || obra.gallery?.[0]"
          :alt="obra.title"
          class="w-full h-full object-cover"
        />
      </div>

      <h1
        ref="titleRef"
        class="font-barlow font-medium text-4xl sm:text-6xl lg:text-[76px] text-black leading-none mt-4 sm:mt-6"
      >
        {{ obra.title }}
      </h1>
    </div>

    <!-- Divisoria continua limpia de borde a borde -->
    <div
      ref="dividerRef"
      class="absolute bottom-0 left-0 right-0 w-full h-[2px] bg-[#030303] origin-left"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animate } from 'animejs'
import type { Obra } from '~/composables/useObras'

defineProps<{ obra: Obra }>()

const photoBoxRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const dividerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!import.meta.client || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (photoBoxRef.value) {
    animate(photoBoxRef.value, { opacity: [0, 1], translateY: [16, 0], duration: 700, ease: 'outQuart' })
  }
  if (titleRef.value) {
    animate(titleRef.value, { opacity: [0, 1], translateY: [16, 0], duration: 700, delay: 120, ease: 'outQuart' })
  }
  if (dividerRef.value) {
    animate(dividerRef.value, { scaleX: [0, 1], duration: 800, delay: 200, ease: 'outExpo' })
  }
})
</script>
