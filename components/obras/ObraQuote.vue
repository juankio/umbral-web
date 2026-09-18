<template>
  <section class="relative w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-b border-neutral-200 select-none">
    <div class="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
      <!-- Vector Origami Arquitectónico (Figma node 112:135) -->
      <div
        ref="origamiRef"
        class="w-16 h-20 sm:w-20 sm:h-24 lg:w-[114px] lg:h-[139px] mb-8 lg:mb-10 text-neutral-900 pointer-events-none will-change-transform animate-float-subtle"
      >
        <img
          src="/images/obra-origami-vector.svg"
          alt=""
          class="w-full h-full object-contain"
          draggable="false"
        />
      </div>

      <!-- Cita del equipo (Figma: Barlow Condensed Medium Italic 48px) -->
      <blockquote
        ref="quoteRef"
        class="font-barlow font-medium italic text-2xl sm:text-4xl lg:text-[48px] text-black leading-[1.15] max-w-4xl tracking-tight"
      >
        {{ quote || '“Cita de algunx de lxs integrantes del equipo”' }}
      </blockquote>

      <!-- Subtítulo o crédito del colectivo CRGS -->
      <p class="font-barlow font-normal text-base sm:text-xl text-neutral-500 uppercase tracking-widest mt-6 sm:mt-8">
        Equipo de Creación · Zona Maco 2026
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animate } from 'animejs'

defineProps<{
  quote?: string
}>()

const origamiRef = ref<HTMLElement | null>(null)
const quoteRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (quoteRef.value) {
    animate(quoteRef.value, {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 900,
      delay: 150,
      ease: 'outQuart'
    })
  }
})
</script>

<style scoped>
@keyframes floatSubtle {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(2deg);
  }
}

.animate-float-subtle {
  animation: floatSubtle 6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-float-subtle {
    animation: none;
  }
}
</style>
