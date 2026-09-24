<template>
  <!-- Vector Origami Arquitectónico (Figma id: 112:13) con micro-interacción suave al pasar el mouse -->
  <div
    ref="origamiBoxRef"
    class="cursor-pointer select-none will-change-transform transition-shadow duration-300"
    @mousemove="handleOrigamiMove(origamiBoxRef, $event)"
    @mouseleave="handleOrigamiLeave(origamiBoxRef)"
  >
    <svg
      viewBox="0 0 365 500"
      class="w-[260px] sm:w-[310px] lg:w-[365px] h-auto block select-none pointer-events-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 349.751L90.4552 0L364.99 500L0 349.751Z" fill="black" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHoverMotion } from '~/composables/useHoverMotion'

const origamiBoxRef = ref<HTMLElement | null>(null)
const { handleOrigamiMove, handleOrigamiLeave } = useHoverMotion()
</script>

