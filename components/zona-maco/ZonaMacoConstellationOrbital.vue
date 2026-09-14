<template>
  <section
    ref="sectionRef"
    class="relative w-full h-full min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center py-12 lg:py-0 px-4 sm:px-6 overflow-hidden select-none"
  >
    <div class="w-full max-w-7xl h-full relative flex items-center justify-center">
      <!-- Nota de Figma en cursiva a la izquierda -->
      <aside
        class="font-barlow italic text-neutral-400 text-xs sm:text-sm max-w-[180px] sm:max-w-[200px] leading-snug absolute left-4 sm:left-6 xl:left-10 top-6 sm:top-14 z-20 text-left will-change-transform"
        :style="annotationStyle"
      >
        Cada tipo de exposicion apareceria haciendo scroll down como desvanecido
      </aside>

      <!-- Monumental Centro: Zona Maco / Expositores -->
      <div
        class="text-center z-10 absolute left-1/2 top-1/2 pointer-events-none will-change-transform"
        :style="centerStyle"
      >
        <h2 class="font-barlow font-bold text-5xl sm:text-7xl lg:text-8xl text-white text-center leading-none tracking-tight">
          Zona Maco
        </h2>
        <div class="h-[2px] w-36 sm:w-64 bg-white mx-auto my-3 sm:my-4" />
        <p class="font-barlow font-bold text-5xl sm:text-7xl lg:text-8xl text-white text-center leading-none tracking-tight">
          Expositores
        </p>
      </div>

      <!-- 7 Nodos Orbitales Alrededor del Centro -->
      <div class="absolute inset-0 z-20 pointer-events-none">
        <article
          v-for="(item, idx) in orbitalNodes"
          :key="item.id"
          class="group flex flex-col items-center justify-center text-center cursor-pointer pointer-events-auto will-change-transform transition-transform duration-300 hover:scale-105 active:scale-95"
          :class="item.desktopClass"
          :style="getNodeStyle(idx)"
          @click="handleNodeClick(item.category)"
        >
          <!-- Isotipo ZⓈONA / ZⓈONAMACO -->
          <div class="font-barlow font-bold text-xs sm:text-base lg:text-lg text-white/95 uppercase tracking-wider flex items-center justify-center gap-0.5 group-hover:text-white transition-colors duration-200">
            <span>Z</span>
            <span class="inline-flex items-center justify-center w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-white/90 text-[7px] sm:text-[8px] font-mono font-bold leading-none mx-0.5 transition-colors group-hover:border-white">
              S
            </span>
            <span>{{ item.brandSuffix }}</span>
          </div>

          <!-- Subtítulo de Categoría -->
          <h3 class="font-barlow font-bold text-xs sm:text-base lg:text-lg text-white/95 uppercase tracking-wider text-center mt-0.5 sm:mt-1 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] transition-all duration-200">
            {{ item.category }}
          </h3>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface OrbitalNode {
  id: string
  brandSuffix: string
  category: string
  desktopClass: string
}

interface Props {
  progress?: number
}

const props = withDefaults(defineProps<Props>(), { progress: 0 })
const emit = defineEmits<{ (e: 'select', category: string): void }>()

const orbitalNodes: OrbitalNode[] = [
  { id: 'arte-contemporaneo', brandSuffix: 'ONA MACO MÉXICO', category: 'ARTE CONTEMPORÁNEO', desktopClass: 'absolute top-[10%] sm:top-[12%] left-[4%] sm:left-[8%] xl:left-[12%]' },
  { id: 'salon-anticuario', brandSuffix: 'ONAMACO', category: 'SALÓN DEL ANTICUARIO', desktopClass: 'absolute top-[10%] sm:top-[12%] right-[4%] sm:right-[8%] xl:right-[12%]' },
  { id: 'arte-moderno', brandSuffix: 'ONAMACO', category: 'ARTE MODERNO', desktopClass: 'absolute top-[50%] left-[2%] sm:left-[3%] xl:left-[6%]' },
  { id: 'diseno-emergente', brandSuffix: 'ONAMACO', category: 'DISEÑO EMERGENTE', desktopClass: 'absolute top-[50%] right-[2%] sm:right-[3%] xl:right-[6%]' },
  { id: 'diseno', brandSuffix: 'ONAMACO', category: 'DISEÑO', desktopClass: 'absolute bottom-[16%] sm:bottom-[15%] left-[4%] sm:left-[10%] xl:left-[14%]' },
  { id: 'ejes', brandSuffix: 'ONAMACO', category: 'EJES', desktopClass: 'absolute bottom-[16%] sm:bottom-[15%] right-[4%] sm:right-[10%] xl:right-[14%]' },
  { id: 'sur', brandSuffix: 'ONAMACO', category: 'SUR', desktopClass: 'absolute bottom-[6%] sm:bottom-[7%] left-1/2' }
]

const sectionRef = ref<HTMLElement | null>(null)
const isVisibleFallback = ref(false)
const isReducedMotion = ref(false)

const centerStyle = computed(() => {
  if (isReducedMotion.value) return { opacity: '1', transform: 'translate3d(-50%, -50%, 0) scale(1)' }
  const p = Math.min(Math.max((props.progress - 0.18) / 0.32, 0), 1)
  const scale = 0.92 + p * 0.08
  return {
    opacity: p.toFixed(2),
    transform: `translate3d(-50%, -50%, 0) scale(${scale.toFixed(3)})`,
    transition: 'opacity 0.15s ease-out, transform 0.15s ease-out'
  }
})

const annotationStyle = computed(() => {
  if (isReducedMotion.value) return {}
  const p = Math.min(Math.max((props.progress - 0.18) / 0.32, 0), 1)
  return {
    opacity: (p * 0.85).toFixed(2),
    transform: `translateY(${(1 - p) * 12}px)`,
    transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'
  }
})

const getNodeStyle = (index: number) => {
  if (isReducedMotion.value) {
    const transform = index === 6 ? 'translate3d(-50%, 0, 0)' : (index === 2 || index === 3) ? 'translate3d(0, -50%, 0)' : 'translate3d(0, 0, 0)'
    return { opacity: 1, transform }
  }

  // Nodos aparecen escalonados entre 0.26 y 0.72
  const start = 0.26 + (index * 0.045)
  const span = 0.15
  const p = Math.min(Math.max((props.progress - start) / span, 0), 1)

  const translateY = (1 - p) * 18
  const blur = (1 - p) * 6

  let transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`
  if (index === 6) {
    transform = `translate3d(-50%, ${translateY.toFixed(1)}px, 0)`
  } else if (index === 2 || index === 3) {
    transform = `translate3d(0, calc(-50% + ${translateY.toFixed(1)}px), 0)`
  }

  return {
    opacity: p.toFixed(2),
    transform,
    filter: `blur(${blur.toFixed(1)}px)`,
    pointerEvents: p > 0.3 ? 'auto' : 'none',
    transition: 'opacity 0.15s ease-out, filter 0.15s ease-out, transform 0.15s ease-out'
  }
}

const handleNodeClick = (category: string) => {
  emit('select', category)
  if (typeof document !== 'undefined') {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return
  isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (isReducedMotion.value) {
    isVisibleFallback.value = true
    return
  }

  const observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      isVisibleFallback.value = true
      observer.disconnect()
    }
  }, { threshold: 0.15 })

  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>
