<template>
  <section id="diseno-grafico" class="relative w-full bg-white pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 scroll-mt-24 select-text">
    <div class="w-full max-w-[1500px] xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12">
      <!-- Línea horizontal completa antes de Stand de Diseño Gráfico (1:1 Figma) -->
      <div
        ref="lineRef"
        class="h-[1.5px] bg-[#070707] w-full mb-12 sm:mb-14 lg:mb-16 will-change-transform"
      />

      <!-- Encabezado oficial con triángulo azul de Figma detrás (Nodo 503:221) -->
      <div class="relative flex items-center justify-center py-4 sm:py-6 mb-16 sm:mb-20 lg:mb-24">
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg
            ref="triangleRef"
            viewBox="0 0 456 188"
            class="w-[280px] sm:w-[350px] lg:w-[410px] xl:w-[456px] h-auto mx-auto select-none pointer-events-none will-change-transform"
            fill="none"
            aria-hidden="true"
          >
            <path d="M173.164 0L456 117.201L0 187.941L173.164 0Z" fill="#A5BCD5" />
          </svg>
        </div>

        <h2
          ref="headingRef"
          class="relative z-10 font-barlow font-normal text-4xl sm:text-5xl lg:text-6xl text-[#070707] text-center leading-tight tracking-tight will-change-transform"
        >
          Stand de Diseño Gráfico
        </h2>
      </div>

      <!-- Grid editorial de 3 alumnas (Alineada a la IZQUIERDA según Figma Frame 407:2) -->
      <div class="w-full max-w-[1050px] lg:max-w-[1150px] mr-auto">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <NosotrosCreadorCard
            v-for="alumno in integrantesGrafico"
            :key="alumno.name"
            :alumno="alumno"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import NosotrosCreadorCard, { type AlumnoCreador } from './NosotrosCreadorCard.vue'

const triangleRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const lineRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()

onMounted(() => {
  observeScrollReveal(lineRef, { type: 'divider', origin: 'right center', delay: 40 })
  observeScrollReveal(triangleRef, { type: 'triangle', delay: 80 })
  observeScrollReveal(headingRef, { type: 'heading', delay: 120 })
})

const integrantesGrafico: AlumnoCreador[] = [
  {
    name: 'Natalia Nuñez',
    career: 'Diseño Gráfico',
    image: '/images/figma-grafico-natalia-nunez.webp'
  },
  {
    name: 'Miranda Salazar',
    career: 'Diseño Gráfico',
    image: '/images/figma-grafico-miranda-salazar.webp'
  },
  {
    name: 'Luciana Yañez',
    career: 'Diseño Gráfico',
    image: '/images/figma-grafico-luciana-yanez.webp'
  }
]
</script>
