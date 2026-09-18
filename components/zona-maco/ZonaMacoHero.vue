<template>
  <section
    id="hero-triangle"
    ref="containerRef"
    class="relative w-full h-[175vh] bg-[#0A0A0A] select-none"
  >
    <!-- Viewport Pinned 100vh Sticky Scroll Container -->
    <div class="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0A0A]">
      <!-- Capa 1 y 2: Origami Paper desplegando la Constelación Negra en su slot -->
      <ZonaMacoOrigamiPaper :progress="progress" class="w-full h-full">
        <ZonaMacoConstellationOrbital
          :progress="progress"
          @select="onSelectCategory"
        />
      </ZonaMacoOrigamiPaper>

      <!-- Capa 3: Monolito Triángulo Monumental UMBRAL \ CRGS sobre el pliego blanco inicial -->
      <ZonaMacoHeroTriangle
        :progress="progress"
        class="absolute inset-0 z-40 pointer-events-none"
        @select="onSelectCategory"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import ZonaMacoOrigamiPaper from './ZonaMacoOrigamiPaper.vue'
import ZonaMacoConstellationOrbital from './ZonaMacoConstellationOrbital.vue'
import ZonaMacoHeroTriangle from './ZonaMacoHeroTriangle.vue'

const emit = defineEmits<{ (e: 'select', category: string): void }>()

const containerRef = ref<HTMLElement | null>(null)
const progress = ref(0)
const { y: scrollY } = useWindowScroll()

const updateProgress = () => {
  if (!containerRef.value || typeof window === 'undefined') return
  const rect = containerRef.value.getBoundingClientRect()
  const totalScrollable = containerRef.value.offsetHeight - window.innerHeight
  if (totalScrollable <= 0) {
    progress.value = 0
    return
  }
  const current = -rect.top
  progress.value = Math.min(Math.max(current / totalScrollable, 0), 1)
}

const onSelectCategory = (category: string) => {
  emit('select', category)
}

watch(scrollY, updateProgress)

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateProgress, { passive: true })
    updateProgress()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateProgress)
  }
})
</script>
