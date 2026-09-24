<template>
  <div class="hidden lg:block absolute inset-0 pointer-events-none z-20 overflow-hidden select-none">
    <div class="relative w-full h-full max-w-[1720px] mx-auto">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.to"
        :ref="(el) => setCardRef(el, index)"
        :to="project.to"
        class="floating-card absolute aspect-square bg-white p-1.5 sm:p-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] transition-shadow duration-300 pointer-events-auto group focus:outline-none cursor-pointer"
        :class="[project.posClass, hoveredIndex === index ? 'z-35' : 'z-20']"
        :aria-label="project.ariaLabel"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave(index)"
      >
        <div class="w-full h-full relative overflow-hidden" :style="{ backgroundColor: project.bg }">
          <img
            :src="project.img"
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
            draggable="false"
          />
          <div class="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span class="font-barlow font-medium text-xs sm:text-sm text-black uppercase bg-white/90 px-1.5 py-0.5 shadow-xs">
              {{ project.title }}
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

interface FloatingProject {
  to: string
  title: string
  img: string
  bg: string
  posClass: string
  ariaLabel: string
}

const projects: FloatingProject[] = [
  { to: '/obras/encuadre', title: 'Encuadre', img: '/images/figma-product-encuadre.webp', bg: '#EDEDED', posClass: 'left-4 sm:left-8 lg:left-12 xl:left-20 top-[8%] sm:top-[10%] -rotate-3 hover:rotate-0 w-24 sm:w-32 lg:w-40 xl:w-48', ariaLabel: 'Ver obra Encuadre' },
  { to: '/obras/interconexion', title: 'Interconexión', img: '/images/figma-product-interconexion.webp', bg: '#434B2E', posClass: 'left-8 sm:left-14 lg:left-20 xl:left-32 top-[44%] -translate-y-1/2 rotate-2 hover:rotate-0 w-22 sm:w-28 lg:w-36 xl:w-44', ariaLabel: 'Ver obra Interconexión' },
  { to: '/obras/curado', title: 'Curado', img: '/images/figma-product-curado.webp', bg: '#DCDCDC', posClass: 'left-4 sm:left-10 lg:left-16 xl:left-24 bottom-[10%] sm:bottom-[12%] -rotate-2 hover:rotate-0 w-24 sm:w-32 lg:w-40 xl:w-46', ariaLabel: 'Ver obra Curado' },
  { to: '/obras/roberto', title: 'Roberto', img: '/images/figma-product-roberto.webp', bg: '#E5E5E0', posClass: 'right-4 sm:right-10 lg:right-16 xl:right-24 top-[6%] sm:top-[8%] rotate-3 hover:rotate-0 w-26 sm:w-36 lg:w-44 xl:w-52', ariaLabel: 'Ver obra Roberto' },
  { to: '/obras/sagaon', title: 'Sagaón', img: '/images/figma-product-sagaon.webp', bg: '#D5CFC9', posClass: 'right-8 sm:right-16 lg:right-22 xl:right-36 top-[46%] -translate-y-1/2 -rotate-3 hover:rotate-0 w-24 sm:w-32 lg:w-40 xl:w-46', ariaLabel: 'Ver obra Sagaón' },
  { to: '/obras/entretiempo', title: 'Entretiempo', img: '/images/figma-product-entretiempo.webp?v=2', bg: '#EAEAEA', posClass: 'right-4 sm:right-10 lg:right-16 xl:right-24 bottom-[8%] sm:bottom-[10%] rotate-2 hover:rotate-0 w-26 sm:w-34 lg:w-42 xl:w-48', ariaLabel: 'Ver obra Entretiempo' }
]

const cardEls = ref<HTMLElement[]>([])
const loopAnims: any[] = []
const hoverAnims: any[] = []
const hoveredIndex = ref<number | null>(null)

const setCardRef = (el: any, index: number) => {
  if (el) {
    cardEls.value[index] = el.$el ?? el
  }
}

// Desfases cíclicos cruzados (Izquierda - Derecha) para una constelación orgánica sin saturación
const STAGGER_DELAYS = [0, 2800, 5600, 1400, 4200, 7000]

const handleMouseEnter = (index: number) => {
  hoveredIndex.value = index
  const el = cardEls.value[index]
  if (!el) return

  // Pausar ciclo de desaparición para que el usuario explore y navegue sin estrés
  loopAnims[index]?.pause()
  hoverAnims[index]?.pause()

  hoverAnims[index] = animate(el, {
    opacity: 1,
    scale: 1.08,
    duration: 280,
    ease: 'outQuad'
  })
}

const handleMouseLeave = (index: number) => {
  const el = cardEls.value[index]
  if (!el) return

  hoverAnims[index] = animate(el, {
    scale: 1,
    duration: 380,
    ease: 'outQuad',
    onComplete: () => {
      if (hoveredIndex.value === index) hoveredIndex.value = null
      // Reanuda suavemente la danza cósmica
      loopAnims[index]?.play()
    }
  })
}

onMounted(() => {
  if (!import.meta.client) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    cardEls.value.forEach((el) => {
      if (el) el.style.opacity = '1'
    })
    return
  }

  // Constelación viva con Anime.js v4 DurationKeyframes
  cardEls.value.forEach((el, i) => {
    if (!el) return
    const anim = animate(el, {
      keyframes: [
        { opacity: 0, scale: 0.9, duration: 0 },
        { opacity: 1, scale: 1, duration: 1600, ease: 'outQuad' },
        { opacity: 1, scale: 1.02, translateY: -6, duration: 2600, ease: 'inOutSine' },
        { opacity: 0, scale: 0.94, translateY: 0, duration: 1600, ease: 'inQuad' },
        { opacity: 0, scale: 0.9, duration: 2600 }
      ],
      delay: STAGGER_DELAYS[i] ?? i * 1400,
      loop: true
    })
    loopAnims.push(anim)
  })
})

onUnmounted(() => {
  loopAnims.forEach((anim) => anim?.revert?.() || anim?.pause?.())
  hoverAnims.forEach((anim) => anim?.revert?.() || anim?.pause?.())
})
</script>
