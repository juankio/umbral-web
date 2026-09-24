<template>
  <section
    class="relative w-full bg-white min-h-[580px] lg:h-[720px] xl:h-[800px] flex flex-col items-center justify-end pb-10 sm:pb-12 lg:pb-14 overflow-hidden select-none"
  >
    <!-- Fondo geométrico monumental 1:1 exacto de Figma con parallax -->
    <div
      ref="wedgesRef"
      class="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 will-change-transform"
    >
      <svg
        viewBox="0 0 1920 1156"
        class="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <!-- Cuña lateral izquierda (Group 49 / Vector 112:162) -->
        <path d="M-114.663 688.462L166.579 153.004L875.349 755.602L-114.663 688.462Z" fill="#1C1C1C" />
        <!-- Cuña lateral derecha (Group 50 / Vector 112:164) - full tope con el borde de la página -->
        <path d="M2085.92 341.651L1936.53 944.061L1082.83 516.763L2085.92 341.651Z" fill="#1C1C1C" />
      </svg>
    </div>

    <!-- Contenedor Central: Fotografía enmarcada + Título en Title Case -->
    <div class="relative z-10 flex flex-col items-center justify-center text-center">
      <!-- Marco de la obra según Figma con hover y scroll reveal -->
      <div
        ref="frameRef"
        class="relative w-[240px] sm:w-[320px] lg:w-[380px] xl:w-[420px] aspect-[476/526] bg-white border border-neutral-300 shadow-sm overflow-hidden group cursor-pointer"
      >
        <AppImage
          :src="obra.heroImage || obra.gallery?.[0]"
          :alt="obra.title"
          img-class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <!-- Título de la obra en Title Case exacto a Figma con scroll reveal -->
      <h1
        ref="titleRef"
        class="font-barlow font-medium text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] text-black leading-none mt-4 sm:mt-6 tracking-normal select-none will-change-transform"
      >
        {{ obra.title }}
      </h1>
    </div>

    <!-- Línea divisoria completa (Figma Line 6) con expansión horizontal -->
    <div ref="lineRef" class="absolute bottom-0 left-0 right-0 w-full h-[2px] bg-[#030303] will-change-transform" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useParallaxMotion } from '~/composables/useParallaxMotion'
import type { Obra } from '~/composables/useObras'

defineProps<{
  obra: Obra
}>()

const frameRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const lineRef = ref<HTMLElement | null>(null)
const wedgesRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()
useParallaxMotion(wedgesRef, 0.06, 25)

onMounted(() => {
  observeScrollReveal(frameRef, { type: 'image', delay: 50 })
  observeScrollReveal(titleRef, { type: 'heading', delay: 180 })
  observeScrollReveal(lineRef, { type: 'divider', origin: 'left', delay: 250 })
})
</script>
