<template>
  <section id="proyectos" class="py-16 sm:py-24 bg-white overflow-hidden select-none border-b border-neutral-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
      <span class="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">Catálogo Oficial · 10 Piezas</span>
      <h2 class="font-barlow font-bold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-neutral-950 leading-none">Proyectos Seleccionados</h2>
      <div class="h-[2px] bg-neutral-300 max-w-6xl mx-auto mt-6" />
    </div>

    <!-- Carrusel Infinito Track Wrapper -->
    <div
      class="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
      @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
      @pointerdown="onPointerDown" @pointermove="onPointerMove"
      @pointerup="onPointerUp" @pointercancel="onPointerUp"
    >
      <div
        ref="trackRef"
        class="flex gap-4 sm:gap-6 lg:gap-8 will-change-transform py-4 px-4"
        :style="{ transform: `translate3d(${offset}px, 0, 0)` }"
      >
        <article
          v-for="(obra, idx) in tripleObras"
          :key="`${obra.slug}-${idx}`"
          class="w-[66vw] sm:w-[44vw] md:w-[240px] lg:w-[270px] xl:w-[300px] 2xl:w-[320px] flex-shrink-0 group relative flex flex-col"
        >
          <!-- Título arriba de la imagen revelado con transición elegante -->
          <NuxtLink :to="`/obras/${obra.slug}`" @click="handleLinkClick" class="h-9 mb-1.5 flex items-end justify-between px-1 overflow-hidden block focus:outline-none" :tabindex="-1">
            <h3 class="card-title font-barlow font-bold text-xl sm:text-2xl uppercase tracking-tight text-neutral-950 truncate pr-2">{{ obra.title }}</h3>
            <span class="card-category font-mono text-[11px] text-neutral-400 shrink-0">{{ obra.category }}</span>
          </NuxtLink>

          <!-- Imagen con enlace hacia /obras/[slug] -->
          <NuxtLink :to="`/obras/${obra.slug}`" @click="handleLinkClick" class="block relative aspect-[3/4] bg-neutral-100 overflow-hidden border border-neutral-200 group-hover:border-neutral-950 transition-colors duration-300 shadow-sm group-hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-neutral-950">
            <img :src="obra.heroImage" :alt="obra.title" class="card-image w-full h-full object-cover" loading="lazy" draggable="false" />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between pointer-events-none">
              <span class="px-2.5 py-1 bg-white/95 text-neutral-950 font-mono text-[10px] uppercase tracking-widest self-start font-bold shadow">{{ obra.edition || 'Edición 2026' }}</span>
              <div class="flex items-center justify-between text-white font-barlow text-sm uppercase tracking-wider">
                <span>Ver Obra Completa</span>
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </div>
            </div>
          </NuxtLink>

          <div class="mt-2.5 px-1 flex items-center justify-between text-xs font-mono text-neutral-500">
            <span class="truncate max-w-[180px]">{{ obra.designers[0] }}</span>
            <span class="font-bold text-neutral-800">{{ obra.year }}</span>
          </div>
        </article>
      </div>
    </div>

    <!-- Controles de Navegación Flechas -->
    <div class="max-w-7xl mx-auto px-4 mt-8 flex items-center justify-center gap-6">
      <button type="button" @click="prev" aria-label="Proyecto anterior" class="w-11 h-11 rounded-full border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <span class="font-mono text-xs text-neutral-400 tracking-widest uppercase">Arrastra o navega</span>
      <button type="button" @click="next" aria-label="Siguiente proyecto" class="w-11 h-11 rounded-full border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useObras } from '~/composables/useObras'

const { obras } = useObras()
const tripleObras = computed(() => [...obras, ...obras, ...obras])
const trackRef = ref<HTMLElement | null>(null)
const offset = ref(0)
const isHovered = ref(false)
const isDragging = ref(false)
const isReducedMotion = ref(false)

let startX = 0, dragStartOffset = 0, didDrag = false
let currentX = 0, targetX = 0, singleSetWidth = 0, stepWidth = 300, rafId: number | null = null

const wrap = (val: number) => singleSetWidth > 0 && val <= -singleSetWidth * 2 ? val + singleSetWidth : (singleSetWidth > 0 && val >= 0 ? val - singleSetWidth : val)

const calculateMetrics = () => {
  if (!trackRef.value) return
  singleSetWidth = trackRef.value.scrollWidth / 3
  const cards = trackRef.value.children
  stepWidth = cards.length >= 2 ? (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft : 300
  if (currentX === 0 && singleSetWidth > 0) {
    currentX = -singleSetWidth
    targetX = currentX
    offset.value = currentX
  }
}

const onMouseEnter = () => { isHovered.value = true; targetX = currentX }
const onMouseLeave = () => { isHovered.value = false }
const prev = () => { if (stepWidth > 0) targetX = (Math.round(targetX / stepWidth) + 1) * stepWidth }
const next = () => { if (stepWidth > 0) targetX = (Math.round(targetX / stepWidth) - 1) * stepWidth }

const loop = () => {
  if (!isDragging.value) {
    if (!isHovered.value && !isReducedMotion.value && singleSetWidth > 0) targetX -= 0.65
    const diff = targetX - currentX
    currentX += Math.abs(diff) > 0.05 ? diff * 0.1 : diff
    offset.value = currentX
    const wrapped = wrap(targetX)
    if (wrapped !== targetX) {
      targetX = wrapped; currentX = wrap(currentX); offset.value = currentX
    }
  }
  rafId = requestAnimationFrame(loop)
}

const onPointerDown = (e: PointerEvent) => { isDragging.value = true; didDrag = false; startX = e.clientX; dragStartOffset = currentX }
const onPointerMove = (e: PointerEvent) => {
  if (!isDragging.value) return
  if (Math.abs(e.clientX - startX) > 5) didDrag = true
  currentX = dragStartOffset + (e.clientX - startX); targetX = currentX; offset.value = currentX
}
const onPointerUp = () => {
  if (!isDragging.value) return
  isDragging.value = false
  targetX = wrap(targetX); currentX = wrap(currentX); offset.value = currentX
}

const handleLinkClick = (e: MouseEvent) => { if (didDrag) { e.preventDefault(); e.stopPropagation() } }

const scrollToCategory = (category: string) => {
  document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })
  const foundIdx = obras.findIndex(o => o.category.toLowerCase().includes(category.toLowerCase()))
  if (foundIdx !== -1 && singleSetWidth > 0) targetX = -(singleSetWidth + foundIdx * stepWidth)
}

defineExpose({ scrollToCategory, setCategory: scrollToCategory })

onMounted(() => {
  if (typeof window !== 'undefined') {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    isReducedMotion.value = mq.matches
    mq.addEventListener?.('change', (e) => { isReducedMotion.value = e.matches })
    window.addEventListener('resize', calculateMetrics)
  }
  calculateMetrics()
  rafId = requestAnimationFrame(loop)
})
onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (typeof window !== 'undefined') window.removeEventListener('resize', calculateMetrics)
})
</script>

<style scoped>
.card-title {
  transform: translateY(6px); opacity: 0;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease-out;
}
.group:hover .card-title { transform: translateY(-4px); opacity: 1; }
.card-category {
  transform: translateY(4px); opacity: 0;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.05s, opacity 0.3s ease 0.05s;
}
.group:hover .card-category { transform: translateY(0); opacity: 1; }
.card-image {
  filter: grayscale(100%) contrast(110%) brightness(96%); transform: scale(1);
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.group:hover .card-image { filter: grayscale(0%) contrast(120%) brightness(102%); transform: scale(1.04); }
@media (prefers-reduced-motion: reduce) {
  .card-title, .card-category, .card-image { transition: none !important; transform: none !important; }
  .card-title, .card-category { opacity: 1 !important; }
  .group:hover .card-title, .group:hover .card-category, .group:hover .card-image { transform: none !important; }
}
</style>
