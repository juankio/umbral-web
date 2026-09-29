<template>
  <div class="hidden lg:block absolute inset-0 pointer-events-none z-20 select-none">
    <div class="relative w-full h-full max-w-[1720px] mx-auto">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.to"
        :to="project.to"
        class="floating-card absolute pointer-events-auto group focus:outline-none cursor-pointer transition-all duration-300"
        :class="[project.posClass, hoveredIndex === index ? '!z-[50] !rotate-0 scale-[1.08]' : '']"
        :aria-label="`Ver obra ${project.title}`"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave(index)"
      >
        <div
          :ref="(el) => setCardRef(el, index)"
          class="w-full h-full relative overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.14)] group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.28)] transition-shadow duration-300 transform-gpu"
          :style="{ backgroundColor: project.bg }"
        >
          <img
            :src="project.img"
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
            draggable="false"
          />
          <div class="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
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
}

// 10 obras en dos clusters de collage superpuesto rodeando el triángulo oficial
const projects: FloatingProject[] = [
  // Cluster Izquierdo (5 obras superpuestas en capas)
  {
    to: '/obras/desmadre',
    title: 'Desmadre',
    img: '/images/figma-product-desmadre.webp',
    bg: '#D3D3D3',
    posClass: 'left-[9%] sm:left-[10%] lg:left-[11%] top-[12%] lg:top-[14%] w-24 sm:w-28 lg:w-32 aspect-square -rotate-4 z-10'
  },
  {
    to: '/obras/encuadre',
    title: 'Encuadre',
    img: '/images/figma-product-encuadre.webp',
    bg: '#EDEDED',
    posClass: 'left-[15%] sm:left-[16%] lg:left-[17%] top-[18%] lg:top-[20%] w-28 sm:w-32 lg:w-36 aspect-square rotate-2 z-15'
  },
  {
    to: '/obras/interconexion',
    title: 'Interconexión',
    img: '/images/figma-product-interconexion.webp',
    bg: '#434B2E',
    posClass: 'left-[17%] sm:left-[18%] lg:left-[19%] top-[38%] lg:top-[40%] w-24 sm:w-28 lg:w-32 aspect-square -rotate-3 z-20 bg-[#434B2E]'
  },
  {
    to: '/obras/mai',
    title: 'Mai',
    img: '/images/figma-product-mai.webp',
    bg: '#E2DFD8',
    posClass: 'left-[9%] sm:left-[10%] lg:left-[11%] top-[42%] lg:top-[44%] w-22 sm:w-26 lg:w-30 aspect-square rotate-3 z-18 bg-[#E2DFD8]'
  },
  {
    to: '/obras/curado',
    title: 'Curado',
    img: '/images/figma-product-curado.webp',
    bg: '#DCDCDC',
    posClass: 'left-[18%] sm:left-[19%] lg:left-[20%] xl:left-[21%] top-[56%] lg:top-[58%] w-24 sm:w-28 lg:w-32 xl:w-36 aspect-square -rotate-2 z-25'
  },
  // Cluster Derecho (5 obras superpuestas en capas)
  {
    to: '/obras/reliquia',
    title: 'Reliquia',
    img: '/images/figma-product-reliquia.webp',
    bg: '#BEBEBE',
    posClass: 'right-[10%] sm:right-[11%] lg:right-[12%] top-[10%] lg:top-[12%] w-26 sm:w-30 lg:w-34 aspect-square -rotate-3 z-10'
  },
  {
    to: '/obras/roberto',
    title: 'Roberto',
    img: '/images/figma-product-roberto.webp',
    bg: '#E5E5E0',
    posClass: 'right-[17%] sm:right-[18%] lg:right-[19%] top-[16%] lg:top-[18%] w-28 sm:w-32 lg:w-36 aspect-square rotate-3 z-15 bg-[#E5E5E0]'
  },
  {
    to: '/obras/sagaon',
    title: 'Sagaón',
    img: '/images/figma-product-sagaon.webp',
    bg: '#D5CFC9',
    posClass: 'right-[11%] sm:right-[12%] lg:right-[13%] top-[32%] lg:top-[34%] w-24 sm:w-28 lg:w-32 aspect-[3/4] -rotate-2 z-20'
  },
  {
    to: '/obras/entretiempo',
    title: 'Entretiempo',
    img: '/images/figma-product-entretiempo.webp',
    bg: '#EAEAEA',
    posClass: 'right-[18%] sm:right-[19%] lg:right-[20%] top-[46%] lg:top-[48%] w-26 sm:w-30 lg:w-34 aspect-square rotate-2 z-25'
  },
  {
    to: '/obras/cimiento',
    title: 'Cimiento',
    img: '/images/figma-product-cimiento.webp',
    bg: '#D0D0D0',
    posClass: 'right-[12%] sm:right-[13%] lg:right-[14%] top-[62%] lg:top-[64%] w-24 sm:w-28 lg:w-30 aspect-square -rotate-4 z-18'
  }
]

const cardEls = ref<HTMLElement[]>([])
const loopAnims: any[] = []
const hoveredIndex = ref<number | null>(null)

const setCardRef = (el: any, index: number) => {
  if (el) cardEls.value[index] = el.$el ?? el
}
const handleMouseEnter = (index: number) => {
  hoveredIndex.value = index
  loopAnims[index]?.pause()
}
const handleMouseLeave = (index: number) => {
  if (hoveredIndex.value === index) hoveredIndex.value = null
  loopAnims[index]?.play()
}

onMounted(() => {
  if (!import.meta.client) return
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    cardEls.value.forEach((el) => { if (el) el.style.opacity = '1' })
    return
  }

  cardEls.value.forEach((el, i) => {
    if (!el) return
    animate(el, { opacity: [0, 1], duration: 600, delay: i * 40, ease: 'outQuad' })
    loopAnims[i] = animate(el, {
      keyframes: [
        { translateY: -4, duration: 2400 + (i * 140), ease: 'inOutSine' },
        { translateY: 4, duration: 2800 + (i * 140), ease: 'inOutSine' },
        { translateY: 0, duration: 2400 + (i * 140), ease: 'inOutSine' }
      ],
      delay: i * 100,
      loop: true
    })
  })
})

onUnmounted(() => {
  loopAnims.forEach((anim) => anim?.revert?.() || anim?.pause?.())
})
</script>
