<template>
  <section class="w-full bg-white py-12 sm:py-16 lg:py-20 border-t border-b border-neutral-200">
    <div class="max-w-[1040px] mx-auto px-4 sm:px-6">
      <!-- Fotograma Panorámico de Video con Play (Figma Node 112:115 / 113:335) -->
      <div class="relative w-full aspect-[1209/568] bg-neutral-900 overflow-hidden shadow-md border border-black/80 group">
        <AppImage
          src="/images/figma-obra-video-frame.webp"
          alt="Fotograma de proceso en taller"
          img-class="w-full h-full object-cover select-none"
          loading="lazy"
        />
        <button
          type="button"
          class="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors focus:outline-none"
          aria-label="Reproducir video del taller"
        >
          <svg viewBox="0 0 116 141" class="w-12 sm:w-16 lg:w-20 h-auto cursor-pointer hover:scale-110 transition-transform select-none" fill="none">
            <path d="M0.502 0.428V140.081L115.038 69.931L1.558 0.428" stroke="white" stroke-width="1.8" />
          </svg>
        </button>
      </div>

      <!-- Cita del equipo alineada a la izquierda bajo el marco del video -->
      <blockquote class="font-barlow italic font-normal text-xl sm:text-2xl lg:text-3xl text-black text-left leading-tight mt-6 select-none">
        {{ displayQuote }}
      </blockquote>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  quote?: string
}>()

const displayQuote = computed(() => props.quote || '“Cita de algunx de lxs integrantes del equipo”')
</script>

<style scoped>
/* Estilo limpio para evitar desincronización HMR de PostCSS */
</style>
