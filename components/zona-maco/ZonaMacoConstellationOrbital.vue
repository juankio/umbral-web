<template>
  <section
    class="relative w-full h-full min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center py-12 lg:py-0 px-4 sm:px-6 overflow-hidden select-none"
  >
    <div class="w-full max-w-7xl h-full relative flex items-center justify-center">
      <!-- Bloque central monumental: Zona Maco / Expositores -->
      <div
        class="text-center z-10 will-change-transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4"
        :style="centerStyle"
      >
        <h2 class="font-barlow font-normal text-6xl sm:text-8xl lg:text-9xl xl:text-[140px] text-white text-center leading-none tracking-tight">
          Zona Maco
        </h2>
        <div class="h-[2px] w-48 sm:w-72 bg-white/80 mx-auto my-4 sm:my-6" />
        <p class="font-barlow font-normal text-6xl sm:text-8xl lg:text-9xl xl:text-[140px] text-white text-center leading-none tracking-tight">
          Expositores
        </p>

        <!-- Enlaces a las 4 categorías de la feria -->
        <nav aria-label="Categorías de expositores" class="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 pointer-events-auto">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="font-barlow text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase text-neutral-400 hover:text-white hover:border-white transition-all cursor-pointer border border-neutral-800 px-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-white"
            @click="onSelect(cat)"
          >
            {{ cat }}
          </button>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Props {
  progress?: number
}

const props = withDefaults(defineProps<Props>(), { progress: 0 })
const emit = defineEmits<{ (e: 'select', category: string): void }>()

const categories = [
  'Arte Contemporáneo',
  'Arte Moderno',
  'Diseño Emergente',
  'Diseño'
]

const onSelect = (category: string) => {
  emit('select', category)
  if (typeof document !== 'undefined') {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
  }
}

const isReducedMotion = ref(false)

const centerStyle = computed(() => {
  if (isReducedMotion.value) {
    return { opacity: '1', transform: 'translate3d(-50%, -50%, 0) scale(1)' }
  }
  // Transición suave entre progress 0.18 y 0.50
  const p = Math.min(Math.max((props.progress - 0.18) / 0.32, 0), 1)
  const scale = 0.90 + p * 0.10
  return {
    opacity: p.toFixed(2),
    transform: `translate3d(-50%, -50%, 0) scale(${scale.toFixed(3)})`,
    transition: 'opacity 0.15s ease-out, transform 0.15s ease-out'
  }
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
})
</script>
