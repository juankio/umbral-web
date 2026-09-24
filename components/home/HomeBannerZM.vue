<template>
  <section
    id="banner-zm"
    class="relative w-full bg-[#1C1C1C] text-white py-14 sm:py-16 lg:py-16 lg:h-[calc(100vh-180px)] lg:max-h-[860px] lg:min-h-[620px] flex flex-col justify-center items-center overflow-hidden select-none scroll-mt-[72px]"
  >
    <!-- Contenedor Maestro Centrado Exactamente en la Mitad del Frame (Figma 112:2 / Rectangle 21) -->
    <div class="relative w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-center items-center my-auto">
      <!-- Composición Unificada Encuadrada en la Mitad Vertical -->
      <div class="relative w-full">
        <!-- Fila Superior: Párrafo oficial rozando la línea del título -->
        <div class="w-full flex justify-start sm:justify-end mb-5 sm:mb-4 lg:mb-3 z-30 relative">
          <p ref="paragraphRef" class="font-barlow font-normal text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] text-white/95 text-left sm:text-right leading-relaxed lg:leading-[1.25] tracking-normal select-none max-w-full sm:max-w-[560px] lg:max-w-[660px]">
            El CRGS participará por tercer año consecutivo en Zona Maco, la<br class="hidden lg:block">
            feria de arte y diseño más importante de Latinoamérica, <strong class="font-bold text-white">del 3 al 7</strong><br class="hidden lg:block">
            <strong class="font-bold text-white">de febrero de 2027 en la Ciudad de México.</strong> Este año el stand se<br class="hidden lg:block">
            renueva: por primera vez, tanto el diseño del espacio como los<br class="hidden lg:block">
            productos que se exhiben y venden serán desarrollados por<br class="hidden lg:block">
            alumnos actuales de la escuela.
          </p>
        </div>

        <!-- Título Cursivo Oficial: rozando la 6ta línea del párrafo -->
        <div ref="titleRef" class="relative z-30 w-full pointer-events-auto">
          <NuxtLink
            to="/zona-maco#proyectos"
            class="group inline-block focus:outline-none"
            aria-label="Ver Proyectos Seleccionados en Zona Maco"
          >
            <h2 class="font-barlow italic font-medium text-white text-3xl sm:text-5xl md:text-6xl lg:text-[84px] xl:text-[98px] 2xl:text-[108px] tracking-tight leading-none whitespace-normal lg:whitespace-nowrap drop-shadow-sm transition-all duration-300 group-hover:opacity-90">
              <span class="group-hover:underline underline-offset-8 decoration-2 decoration-white">Proyectos Seleccionados</span>
            </h2>
          </NuxtLink>
        </div>

        <!-- Triángulo Morado Oficial (#834384, id: 222:32): centrado sobre la mitad de la letra -->
        <div
          ref="purpleTriangleRef"
          class="absolute -left-2 sm:left-12 lg:left-36 xl:left-44 -bottom-5 sm:bottom-[-60px] lg:bottom-[-95px] w-[190px] sm:w-[380px] lg:w-[540px] xl:w-[600px] select-none pointer-events-none z-10 opacity-75 lg:opacity-100 will-change-transform"
        >
          <svg
            viewBox="0 0 609 459"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-auto block select-none"
          >
            <path
              d="M97.5656 459L0 0L608.937 422.109L97.5656 459Z"
              fill="#834384"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useParallaxMotion } from '~/composables/useParallaxMotion'

const paragraphRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const purpleTriangleRef = ref<HTMLElement | null>(null)

const { observeScrollReveal } = useScrollAnimation()
useParallaxMotion(purpleTriangleRef, 0.08, 30)

onMounted(() => {
  observeScrollReveal(paragraphRef, { type: 'paragraph', delay: 100 })
  observeScrollReveal(titleRef, { type: 'heading', delay: 200 })
  observeScrollReveal(purpleTriangleRef, { type: 'triangle', delay: 150 })
})
</script>
