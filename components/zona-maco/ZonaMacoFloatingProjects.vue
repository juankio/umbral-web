<template>
  <div class="hidden lg:block absolute inset-0 pointer-events-none z-20 overflow-hidden select-none">
    <div class="relative w-full h-full max-w-[1720px] mx-auto">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.to"
        :to="project.to"
        class="floating-card absolute w-22 sm:w-28 lg:w-34 xl:w-40 aspect-[3/4] pointer-events-auto group focus:outline-none cursor-pointer transition-transform duration-300"
        :class="[project.posClass, hoveredIndex === index ? 'z-[35]' : 'z-20']"
        :aria-label="project.ariaLabel"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave(index)"
      >
        <div
          :ref="(el) => setCardRef(el, index)"
          class="w-full h-full bg-white p-1.5 sm:p-2 shadow-[0_10px_26px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] transition-shadow duration-300 transform-gpu"
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

// Catálogo completo de los 10 productos de Zona Maco organizados en constelación/collage
const projects: FloatingProject[] = [
  // Flanco Izquierdo y Base (5 piezas)
  { to: '/obras/encuadre', title: 'Encuadre', img: '/images/figma-product-encuadre.webp', bg: '#EDEDED', posClass: 'left-[3%] lg:left-[4%] xl:left-[6%] top-[8%] lg:top-[10%] -rotate-4 hover:rotate-0', ariaLabel: 'Ver obra Encuadre' },
  { to: '/obras/desmadre', title: 'Desmadre', img: '/images/figma-product-desmadre.webp', bg: '#D3D3D3', posClass: 'left-[18%] lg:left-[20%] xl:left-[22%] top-[5%] lg:top-[7%] rotate-3 hover:rotate-0', ariaLabel: 'Ver obra Desmadre' },
  { to: '/obras/interconexion', title: 'Interconexión', img: '/images/figma-product-interconexion.webp', bg: '#434B2E', posClass: 'left-[15%] lg:left-[17%] xl:left-[19%] top-[40%] lg:top-[42%] rotate-2 hover:rotate-0', ariaLabel: 'Ver obra Interconexión' },
  { to: '/obras/mai', title: 'Mai', img: '/images/figma-product-mai.webp', bg: '#E2DFD8', posClass: 'left-[2%] lg:left-[3%] xl:left-[5%] top-[42%] lg:top-[44%] -rotate-2 hover:rotate-0', ariaLabel: 'Ver obra Mai' },
  { to: '/obras/curado', title: 'Curado', img: '/images/figma-product-curado.webp', bg: '#DCDCDC', posClass: 'left-[22%] lg:left-[24%] xl:left-[26%] bottom-[4%] lg:bottom-[6%] -rotate-3 hover:rotate-0', ariaLabel: 'Ver obra Curado' },
  // Flanco Derecho, Pendiente y Punta (5 piezas)
  { to: '/obras/roberto', title: 'Roberto', img: '/images/figma-product-roberto.webp', bg: '#E5E5E0', posClass: 'right-[24%] lg:right-[26%] xl:right-[28%] top-[6%] lg:top-[8%] rotate-2 hover:rotate-0', ariaLabel: 'Ver obra Roberto' },
  { to: '/obras/reliquia', title: 'Reliquia', img: '/images/figma-product-reliquia.webp', bg: '#BEBEBE', posClass: 'right-[4%] lg:right-[6%] xl:right-[8%] top-[8%] lg:top-[10%] -rotate-4 hover:rotate-0', ariaLabel: 'Ver obra Reliquia' },
  { to: '/obras/sagaon', title: 'Sagaón', img: '/images/figma-product-sagaon.webp', bg: '#D5CFC9', posClass: 'right-[2%] lg:right-[4%] xl:right-[6%] top-[38%] lg:top-[40%] rotate-3 hover:rotate-0', ariaLabel: 'Ver obra Sagaón' },
  { to: '/obras/entretiempo', title: 'Entretiempo', img: '/images/figma-product-entretiempo.webp?v=2', bg: '#EAEAEA', posClass: 'right-[14%] lg:right-[16%] xl:right-[18%] top-[54%] lg:top-[56%] -rotate-2 hover:rotate-0', ariaLabel: 'Ver obra Entretiempo' },
  { to: '/obras/cimiento', title: 'Cimiento', img: '/images/figma-product-cimiento.webp', bg: '#D0D0D0', posClass: 'right-[26%] lg:right-[28%] xl:right-[30%] bottom-[4%] lg:bottom-[6%] rotate-3 hover:rotate-0', ariaLabel: 'Ver obra Cimiento' }
]

const cardEls = ref<HTMLElement[]>([])
const loopAnims: any[] = []
const hoverAnims: any[] = []
const hoveredIndex = ref<number | null>(null)

const setCardRef = (el: any, index: number) => {
  if (el) cardEls.value[index] = el.$el ?? el
}

// 10 ritmos asimétricos desfasados para respiración orgánica sin sincronía mecánica
const FLOAT_CONFIGS = [
  { y: [-5, 5], duration: 3600, delay: 0 },
  { y: [4, -5], duration: 4200, delay: 250 },
  { y: [-6, 4], duration: 3800, delay: 500 },
  { y: [5, -4], duration: 4400, delay: 150 },
  { y: [-4, 6], duration: 4000, delay: 650 },
  { y: [5, -5], duration: 3900, delay: 100 },
  { y: [-5, 4], duration: 4300, delay: 350 },
  { y: [4, -6], duration: 3700, delay: 600 },
  { y: [-4, 5], duration: 4500, delay: 200 },
  { y: [6, -4], duration: 4100, delay: 450 }
]

const handleMouseEnter = (index: number) => {
  hoveredIndex.value = index
  const el = cardEls.value[index]
  if (!el) return

  loopAnims[index]?.pause()
  hoverAnims[index]?.pause()

  hoverAnims[index] = animate(el, {
    scale: 1.06,
    duration: 260,
    ease: 'outQuad'
  })
}

const handleMouseLeave = (index: number) => {
  const el = cardEls.value[index]
  if (!el) return

  hoverAnims[index] = animate(el, {
    scale: 1,
    duration: 320,
    ease: 'outQuad',
    onComplete: () => {
      if (hoveredIndex.value === index) hoveredIndex.value = null
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

  cardEls.value.forEach((el, i) => {
    if (!el) return

    animate(el, {
      opacity: [0, 1],
      duration: 750,
      delay: i * 70,
      ease: 'outQuad'
    })

    const config = FLOAT_CONFIGS[i] ?? { y: [-5, 5], duration: 3800, delay: i * 150 }
    const anim = animate(el, {
      translateY: config.y,
      duration: config.duration,
      delay: config.delay,
      direction: 'alternate',
      loop: true,
      ease: 'inOutSine'
    })
    loopAnims.push(anim)
  })
})

onUnmounted(() => {
  loopAnims.forEach((anim) => anim?.revert?.() || anim?.pause?.())
  hoverAnims.forEach((anim) => anim?.revert?.() || anim?.pause?.())
})
</script>