<template>
  <div class="hidden lg:block absolute inset-0 pointer-events-none z-20 overflow-hidden select-none">
    <div class="relative w-full h-full max-w-[1720px] mx-auto">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.to"
        :to="project.to"
        class="floating-card absolute w-22 sm:w-26 lg:w-30 xl:w-36 aspect-[3/4] pointer-events-auto group focus:outline-none cursor-pointer transition-transform duration-300"
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

// Catálogo completo de los 10 productos en collage envolvente perimetral
const projects: FloatingProject[] = [
  // Flanco Izquierdo
  { to: '/obras/encuadre', title: 'Encuadre', img: '/images/figma-product-encuadre.webp', bg: '#EDEDED', posClass: 'left-[2%] sm:left-[3%] lg:left-[4%] xl:left-[5%] top-[8%] lg:top-[10%] -rotate-4 hover:rotate-0', ariaLabel: 'Ver obra Encuadre' },
  { to: '/obras/desmadre', title: 'Desmadre', img: '/images/figma-product-desmadre.webp', bg: '#D3D3D3', posClass: 'left-[16%] sm:left-[17%] lg:left-[18%] xl:left-[19%] top-[0.5%] lg:top-[1%] rotate-2 hover:rotate-0', ariaLabel: 'Ver obra Desmadre' },
  { to: '/obras/interconexion', title: 'Interconexión', img: '/images/figma-product-interconexion.webp', bg: '#434B2E', posClass: 'left-[13%] sm:left-[14%] lg:left-[15%] xl:left-[16%] top-[40%] lg:top-[42%] rotate-2 hover:rotate-0', ariaLabel: 'Ver obra Interconexión' },
  { to: '/obras/mai', title: 'Mai', img: '/images/figma-product-mai.webp', bg: '#E2DFD8', posClass: 'left-[2%] sm:left-[2.5%] lg:left-[3%] xl:left-[3.5%] top-[48%] lg:top-[50%] -rotate-3 hover:rotate-0', ariaLabel: 'Ver obra Mai' },
  { to: '/obras/curado', title: 'Curado', img: '/images/figma-product-curado.webp', bg: '#DCDCDC', posClass: 'left-[18%] sm:left-[19%] lg:left-[20%] xl:left-[21%] bottom-[0.5%] lg:bottom-[1%] -rotate-2 hover:rotate-0', ariaLabel: 'Ver obra Curado' },
  // Flanco Derecho
  { to: '/obras/roberto', title: 'Roberto', img: '/images/figma-product-roberto.webp', bg: '#E5E5E0', posClass: 'right-[21%] sm:right-[22%] lg:right-[23%] xl:right-[25%] top-[4%] lg:top-[5%] rotate-2 hover:rotate-0', ariaLabel: 'Ver obra Roberto' },
  { to: '/obras/reliquia', title: 'Reliquia', img: '/images/figma-product-reliquia.webp', bg: '#BEBEBE', posClass: 'right-[3%] sm:right-[4%] lg:right-[5%] xl:right-[6%] top-[8%] lg:top-[10%] -rotate-4 hover:rotate-0', ariaLabel: 'Ver obra Reliquia' },
  { to: '/obras/sagaon', title: 'Sagaón', img: '/images/figma-product-sagaon.webp', bg: '#D5CFC9', posClass: 'right-[1%] sm:right-[1.5%] lg:right-[2%] xl:right-[2.5%] top-[40%] lg:top-[42%] rotate-3 hover:rotate-0', ariaLabel: 'Ver obra Sagaón' },
  { to: '/obras/entretiempo', title: 'Entretiempo', img: '/images/figma-product-entretiempo.webp?v=2', bg: '#EAEAEA', posClass: 'right-[12%] sm:right-[13%] lg:right-[14%] xl:right-[15%] top-[54%] lg:top-[56%] -rotate-2 hover:rotate-0', ariaLabel: 'Ver obra Entretiempo' },
  { to: '/obras/cimiento', title: 'Cimiento', img: '/images/figma-product-cimiento.webp', bg: '#D0D0D0', posClass: 'right-[22%] sm:right-[23%] lg:right-[24%] xl:right-[25%] bottom-[2%] lg:bottom-[3%] rotate-3 hover:rotate-0', ariaLabel: 'Ver obra Cimiento' }
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

  hoverAnims[index] = animate(el, {
    scale: 1.06,
    duration: 260,
    ease: 'outQuad'
  })
}

const handleMouseLeave = (index: number) => {
  if (hoveredIndex.value === index) {
    hoveredIndex.value = null
  }
  const el = cardEls.value[index]
  if (!el) return

  hoverAnims[index]?.pause()
  hoverAnims[index] = animate(el, {
    scale: 1,
    duration: 320,
    ease: 'outQuad',
    onComplete: () => {
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
      delay: i * 80,
      ease: 'outQuad'
    })

    const anim = animate(el, {
      keyframes: [
        { translateY: -6, duration: 2500 + (i * 150), ease: 'inOutSine' },
        { translateY: 6, duration: 2900 + (i * 150), ease: 'inOutSine' },
        { translateY: 0, duration: 2500 + (i * 150), ease: 'inOutSine' }
      ],
      delay: i * 200,
      loop: true
    })
    loopAnims[i] = anim
  })
})

onUnmounted(() => {
  loopAnims.forEach((anim) => anim?.revert?.() || anim?.pause?.())
  hoverAnims.forEach((anim) => anim?.revert?.() || anim?.pause?.())
})
</script>
