<template>
  <section id="repentina" class="py-14 sm:py-20 lg:py-24 bg-[#1C1C1C] text-white select-none border-b border-neutral-900">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <!-- Titular: Nuestra Repentina exacto de Figma (id: 332:373) con scroll reveal -->
      <h2
        ref="headingRef"
        class="font-barlow font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[80px] text-white text-center leading-none mb-8 sm:mb-12"
      >
        Nuestra Repentina
      </h2>

      <!-- Marco Escultórico de la Repentina con reproducción inline y scroll libre -->
      <div
        ref="frameRef"
        class="w-full max-w-[1040px]"
      >
        <ZonaMacoContextVideo />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import ZonaMacoContextVideo from './ZonaMacoContextVideo.vue'

const headingRef = ref<HTMLElement | null>(null)
const frameRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(headingRef, { type: 'heading', delay: 100 })
  observeScrollReveal(frameRef, { type: 'image', delay: 200 })
})
</script>
