<template>
  <section class="relative w-full bg-white pt-8 pb-12 lg:pt-14 lg:pb-16 overflow-hidden select-none">
    <!-- Vector arquitectónico lateral izquierdo (Figma layout) -->
    <div
      class="absolute left-0 top-1/2 -translate-y-1/2 w-36 sm:w-52 lg:w-[320px] xl:w-[380px] pointer-events-none z-0"
    >
      <img
        src="/images/obra-hero-left-vector.svg"
        alt=""
        class="w-full h-auto"
        draggable="false"
      />
    </div>

    <!-- Vector arquitectónico lateral derecho (Figma layout) -->
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 w-36 sm:w-52 lg:w-[320px] xl:w-[380px] pointer-events-none z-0"
    >
      <img
        src="/images/obra-hero-right-vector.svg"
        alt=""
        class="w-full h-auto"
        draggable="false"
      />
    </div>

    <!-- Contenedor Central: Fotografía enmarcada + Título en Title Case -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <!-- Marco fotográfico esbelto y equilibrado -->
      <div
        ref="photoBoxRef"
        class="relative w-[240px] sm:w-[300px] lg:w-[360px] aspect-[476/526] bg-white border border-neutral-300 overflow-hidden"
      >
        <img
          :src="obra.heroImage || obra.gallery?.[0]"
          :alt="obra.title"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Título de la obra en Title Case (sin uppercase) -->
      <h1
        ref="titleRef"
        class="font-barlow font-medium text-4xl sm:text-5xl lg:text-[64px] text-black leading-none mt-4 sm:mt-6"
      >
        {{ obra.title }}
      </h1>
    </div>

    <!-- Línea divisoria limpia de extremo a extremo -->
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

defineProps<{
  obra: Obra
}>()

const photoBoxRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const dividerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!import.meta.client || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (photoBoxRef.value) {
    animate(photoBoxRef.value, {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 700,
      ease: 'outQuart'
    })
  }

  if (titleRef.value) {
    animate(titleRef.value, {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 700,
      delay: 120,
      ease: 'outQuart'
    })
  }

  if (dividerRef.value) {
    animate(dividerRef.value, {
      scaleX: [0, 1],
      duration: 800,
      delay: 200,
      ease: 'outExpo'
    })
  }
})
</script>
