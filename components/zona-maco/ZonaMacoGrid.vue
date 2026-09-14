<template>
  <section class="py-16 lg:py-24 bg-white border-b border-neutral-200" id="proyectos">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header & filter tabs -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-neutral-200">
        <div>
          <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">Catálogo Oficial · 10 Piezas</span>
          <h2 class="font-barlow font-bold text-4xl sm:text-5xl uppercase tracking-tightest text-neutral-950">Proyectos Seleccionados</h2>
        </div>
        <!-- Filter tabs -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            @click="setCategory(cat)"
            class="px-4 py-2 font-barlow text-sm uppercase tracking-wider transition-all duration-300 border active:scale-95 cursor-pointer"
            :class="activeCategory === cat ? 'bg-neutral-950 text-white border-neutral-950 font-bold shadow-sm' : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-900 hover:text-neutral-950 hover:bg-neutral-50'"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Interactive Grid of 10 Works -->
      <div ref="gridRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="obra in filteredObras"
          :key="obra.slug"
          class="obra-card group relative bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between transition-[transform,box-shadow,border-color] duration-300 ease-out hover:shadow-xl hover:border-neutral-900 hover:-translate-y-1 will-change-transform"
        >
          <!-- Image Container with Hover reveal -->
          <div class="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
            <img
              :src="obra.heroImage"
              :alt="obra.title"
              class="w-full h-full object-cover grayscale-[15%] contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-[transform,filter] duration-700 ease-out will-change-transform"
              loading="lazy"
            />
            <!-- Category badge -->
            <div class="absolute top-3 left-3 transition-transform duration-300 group-hover:-translate-y-0.5">
              <span class="px-2.5 py-1 text-[11px] font-mono uppercase tracking-widest bg-neutral-950/90 text-white backdrop-blur-sm border border-neutral-800 shadow-sm">{{ obra.category }}</span>
            </div>
            <!-- Price tag -->
            <div class="absolute top-3 right-3 transition-transform duration-300 group-hover:-translate-y-0.5">
              <span class="px-2.5 py-1 text-xs font-mono bg-white/95 text-neutral-950 border border-neutral-200 shadow-sm font-bold tracking-wider">{{ obra.price }}</span>
            </div>

            <!-- Hover overlay with quick action -->
            <div class="absolute inset-0 bg-neutral-950/80 backdrop-blur-[2px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-between">
              <div class="space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p class="font-mono text-[11px] text-neutral-300 uppercase tracking-wider">{{ obra.materials }}</p>
                <p class="font-barlow text-lg text-neutral-200 leading-snug line-clamp-3">"{{ obra.quote }}"</p>
              </div>
              <NuxtLink
                :to="`/obras/${obra.slug}`"
                class="w-full py-3 bg-white text-neutral-950 text-center font-barlow font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-all duration-200 flex items-center justify-center gap-2 shadow"
              >
                <span>Ver Obra Completa</span>
                <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Bottom Card Content -->
          <div class="p-6 border-t border-neutral-100 flex flex-col justify-between flex-1 bg-white">
            <div>
              <div class="flex items-baseline justify-between mb-1">
                <h3 class="font-barlow font-bold text-2xl uppercase tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">{{ obra.title }}</h3>
                <span class="font-mono text-xs font-bold text-neutral-500">{{ obra.year }}</span>
              </div>
              <p class="font-sans text-xs text-neutral-500 uppercase tracking-wider mb-3">{{ obra.designers.join(', ') }}</p>
              <p class="font-sans text-xs text-neutral-600 line-clamp-2 leading-relaxed">{{ obra.description }}</p>
            </div>
            <div class="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono">
              <span class="text-neutral-400">{{ obra.dimensions }}</span>
              <NuxtLink
                :to="`/obras/${obra.slug}`"
                class="font-barlow font-bold text-sm uppercase tracking-wider text-neutral-900 group-hover:underline flex items-center gap-1 group/ft"
              >
                <span>Ficha Técnica</span>
                <svg class="w-3 h-3 transition-transform duration-200 group-hover/ft:translate-x-0.5 group-hover/ft:-translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12L12 4M5 4h7v7" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'
import { animate, stagger } from 'animejs'
import { useObras } from '~/composables/useObras'

const { obras } = useObras()
const categories = ['Todas', 'Diseño', 'Arte Contemporáneo', 'Arte Moderno', 'Diseño Emergente']
const activeCategory = ref('Todas')
const gridRef = ref<HTMLElement | null>(null)
const isFiltering = ref(false)

const filteredObras = computed(() => {
  if (activeCategory.value === 'Todas') return obras
  return obras.filter(o => o.category === activeCategory.value)
})

const playCardsEntrance = () => {
  if (!import.meta.client || !gridRef.value) return
  const cards = gridRef.value.querySelectorAll('.obra-card')
  if (!cards.length) return

  animate(cards, {
    opacity: [0, 1],
    translateY: [16, 0],
    scale: [0.98, 1],
    duration: 400,
    delay: stagger(40),
    ease: 'outCubic',
    onComplete: () => {
      if (gridRef.value) gridRef.value.style.minHeight = ''
      isFiltering.value = false
    }
  })
}

const setCategory = (cat: string) => {
  if (activeCategory.value === cat || isFiltering.value) return
  if (!import.meta.client || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    activeCategory.value = cat
    return
  }

  isFiltering.value = true
  if (gridRef.value) gridRef.value.style.minHeight = `${gridRef.value.offsetHeight}px`

  const cards = gridRef.value?.querySelectorAll('.obra-card')
  if (cards && cards.length) {
    animate(cards, {
      opacity: [1, 0],
      translateY: [0, -8],
      scale: [1, 0.98],
      duration: 160,
      ease: 'outQuad',
      onComplete: async () => {
        activeCategory.value = cat
        await nextTick()
        playCardsEntrance()
      }
    })
  } else {
    activeCategory.value = cat
    nextTick(() => playCardsEntrance())
  }
}

onMounted(() => {
  if (!import.meta.client) return
  nextTick(() => playCardsEntrance())
})
</script>
