<template>
  <section class="relative w-full py-20 sm:py-28 lg:py-36 min-h-[40vh] sm:min-h-[46vh] lg:min-h-[50vh] bg-white flex flex-col justify-center items-center overflow-hidden select-none">
    <!-- Líneas vectoriales en V de fondo abrazando el titular -->
    <div
      class="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-center opacity-25 sm:opacity-35 overflow-hidden"
      aria-hidden="true"
    >
      <div class="w-full max-w-[1540px] flex items-center justify-center">
        <img
          src="/images/zm-lines-v-left.svg"
          alt=""
          class="w-1/2 max-w-[770px] h-full object-contain"
          loading="eager"
        />
        <img
          src="/images/zm-lines-v-right.svg"
          alt=""
          class="w-1/2 max-w-[770px] h-full object-contain"
          loading="eager"
        />
      </div>
    </div>

    <!-- Titular monumental centrado -->
    <div class="relative z-10 max-w-[1540px] w-full mx-auto px-6 sm:px-10 lg:px-12 text-center flex flex-col items-center justify-center">
      <h1
        ref="titleRef"
        class="font-barlow font-semibold text-5xl sm:text-7xl lg:text-8xl xl:text-[110px] text-[#070707] text-center leading-[0.92] tracking-tight will-change-transform"
      >
        Integrantes de<br />Umbral
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

const titleRef = ref<HTMLElement | null>(null)
const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(titleRef, { type: 'heading', delay: 60 })
})
</script>
