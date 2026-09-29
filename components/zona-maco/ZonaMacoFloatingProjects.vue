<template>
  <div class="hidden lg:block absolute inset-0 pointer-events-none z-20 overflow-hidden select-none">
    <div class="relative w-full h-full max-w-[1720px] mx-auto">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.to"
        :to="project.to"
        class="floating-card absolute pointer-events-auto group focus:outline-none cursor-pointer transition-transform duration-300"
        :class="[project.posClass, hoveredIndex === index ? 'z-[35]' : 'z-20']"
        :aria-label="`Ver obra ${project.title}`"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave(index)"
      >
        <div
          :ref="(el) => setCardRef(el, index)"
          class="w-full h-full relative overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] transition-shadow duration-300 transform-gpu"
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

// 6 obras en posiciones exactas de Figma Desktop - Primary
const projects: FloatingProject[] = [
  { to: '/obras/encuadre', title: 'Encuadre', img: '/images/figma-product-encuadre.webp', bg: '#EDEDED', posClass: 'aspect-square w-24 sm:w-32 lg:w-40 xl:w-44 left-[17%] lg:left-[19%] xl:left-[21%] top-[14%] lg:top-[16%] -rotate-2 hover:rotate-0' },
  { to: '/obras/interconexion', title: 'Interconexión', img: '/images/figma-product-interconexion.webp', bg: '#434B2E', posClass: 'aspect-square w-20 sm:w-26 lg:w-32 xl:w-36 left-[22%] lg:left-[24%] xl:left-[26%] top-[40%] lg:top-[42%] rotate-2 hover:rotate-0' },
  { to: '/obras/curado', title: 'Curado', img: '/images/figma-product-curado.webp', bg: '#DCDCDC', posClass: 'aspect-[4/3] w-28 sm:w-36 lg:w-44 xl:w-50 left-[30%] lg:left-[33%] xl:left-[35%] bottom-[8%] lg:bottom-[10%] rotate-1 hover:rotate-0' },
  { to: '/obras/roberto', title: 'Roberto', img: '/images/figma-product-roberto.webp', bg: '#E5E5E0', posClass: 'aspect-square w-18 sm:w-22 lg:w-28 xl:w-32 right-[32%] lg:right-[34%] xl:right-[36%] top-[22%] lg:top-[24%] rotate-2 hover:rotate-0' },
  { to: '/obras/sagaon', title: 'Sagaón', img: '/images/figma-product-sagaon.webp', bg: '#D5CFC9', posClass: 'aspect-[3/4] w-22 sm:w-28 lg:w-34 xl:w-38 right-[18%] lg:right-[20%] xl:right-[22%] top-[12%] lg:top-[14%] -rotate-2 hover:rotate-0' },
  { to: '/obras/entretiempo', title: 'Entretiempo', img: '/images/figma-product-entretiempo.webp', bg: '#EAEAEA', posClass: 'aspect-square w-22 sm:w-28 lg:w-34 xl:w-38 right-[20%] lg:right-[22%] xl:right-[24%] top-[50%] lg:top-[52%] rotate-2 hover:rotate-0' }
]

const cardEls = ref<HTMLElement[]>([])
const loopAnims: any[] = []
const hoverAnims: any[] = []
const hoveredIndex = ref<number | null>(null)

const setCardRef = (el: any, index: number) => {
  if (el) cardEls.value[index] = el.$el ?? el
}

const handleMouseEnter = (index: number) => {
  hoveredIndex.value = index
  const el = cardEls.value[index]
  if (!el) return
  loopAnims[index]?.pause()
  hoverAnims[index]?.pause()
  hoverAnims[index] = animate(el, { scale: 1.05, duration: 250, ease: 'outQuad' })
}

const handleMouseLeave = (index: number) => {
  if (hoveredIndex.value === index) hoveredIndex.value = null
  const el = cardEls.value[index]
  if (!el) return
  hoverAnims[index]?.pause()
  hoverAnims[index] = animate(el, {
    scale: 1,
    duration: 300,
    ease: 'outQuad',
    onComplete: () => { loopAnims[index]?.play() }
  })
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
    animate(el, { opacity: [0, 1], duration: 700, delay: i * 70, ease: 'outQuad' })
    loopAnims[i] = animate(el, {
      keyframes: [
        { translateY: -5, duration: 2400 + (i * 150), ease: 'inOutSine' },
        { translateY: 5, duration: 2800 + (i * 150), ease: 'inOutSine' },
        { translateY: 0, duration: 2400 + (i * 150), ease: 'inOutSine' }
      ],
      delay: i * 180,
      loop: true
    })
  })
})

onUnmounted(() => {
  loopAnims.forEach((anim) => anim?.revert?.() || anim?.pause?.())
  hoverAnims.forEach((anim) => anim?.revert?.() || anim?.pause?.())
})
</script>
