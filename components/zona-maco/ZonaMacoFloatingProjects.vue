<template>
  <div class="contents">
    <!-- Desktop Constellation (lg+): Agrupadas alrededor del título según Figma -->
    <div class="hidden lg:block absolute inset-0 pointer-events-none z-20 select-none">
      <div class="relative w-full h-full">
        <NuxtLink
          v-for="(project, index) in projects"
          :key="project.to"
          :to="project.to"
          class="floating-card absolute pointer-events-auto group focus:outline-none cursor-pointer transition-all duration-300 hover:scale-105 hover:!z-50"
          :class="[project.posClass, hoveredIndex === index ? '!z-50' : '']"
          :aria-label="`Ver obra ${project.title}`"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)"
        >
          <div
            :ref="(el) => setCardRef(el, index)"
            class="w-full h-full relative overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.12)] group-hover:shadow-[0_14px_28px_rgba(0,0,0,0.12)] transition-all duration-300 transform-gpu flex items-center justify-center"
            :style="{ backgroundColor: project.bg }"
          >
            <img
              :src="project.img"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="eager"
              draggable="false"
            />
            <div class="absolute bottom-1.5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              <span class="font-barlow font-medium text-xs sm:text-sm text-black uppercase bg-white/95 px-1.5 py-0.5 shadow-xs">
                {{ project.title }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile Gallery (< lg): Cuadrícula simétrica 5x2 limpia con las 10 obras -->
    <div class="lg:hidden w-full max-w-md mx-auto px-4 mt-6 select-none">
      <div class="grid grid-cols-5 gap-2 sm:gap-2.5">
        <NuxtLink
          v-for="project in projects"
          :key="`mobile-${project.to}`"
          :to="project.to"
          class="group relative w-full aspect-square focus:outline-none transition-all duration-200 active:scale-95 hover:scale-105"
          :aria-label="`Ver obra ${project.title}`"
        >
          <div
            class="w-full h-full relative overflow-hidden shadow-xs hover:shadow-md flex items-center justify-center transition-all duration-200"
            :style="{ backgroundColor: project.bg }"
          >
            <img
              :src="project.img"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              draggable="false"
            />
          </div>
        </NuxtLink>
      </div>
      <p class="font-mono text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-widest text-center mt-3">
        10 Obras Seleccionadas · Toca para explorar
      </p>
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

// 10 obras referenciadas al centro exacto del canvas (calc(50% +/- offset)) abrazando el titular monumental (Figma Frame 325:2)
const projects: FloatingProject[] = [
  { to: '/obras/desmadre', title: 'Desmadre', img: '/images/figma-product-desmadre.webp', bg: '#D9D9D9', posClass: 'lg:left-[calc(50%-230px)] xl:left-[calc(50%-290px)] lg:top-[calc(50%-320px)] xl:top-[calc(50%-380px)] w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square z-10' },
  { to: '/obras/interconexion', title: 'Interconexión', img: '/images/figma-product-entretiempo.webp', bg: '#CFC4BE', posClass: 'lg:left-[calc(50%+188px)] xl:left-[calc(50%+230px)] lg:top-[calc(50%-335px)] xl:top-[calc(50%-400px)] w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square z-13' },
  { to: '/obras/mai', title: 'Mai', img: '/images/figma-product-mai.webp', bg: '#D9D9D9', posClass: 'lg:left-[calc(50%+320px)] xl:left-[calc(50%+390px)] lg:top-[calc(50%-275px)] xl:top-[calc(50%-330px)] w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square z-14' },
  { to: '/obras/roberto', title: 'Roberto', img: '/images/figma-product-interconexion.webp', bg: '#434B2E', posClass: 'lg:left-[calc(50%+200px)] xl:left-[calc(50%+245px)] lg:top-[calc(50%-150px)] xl:top-[calc(50%-180px)] w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square z-14' },
  { to: '/obras/reliquia', title: 'Reliquia', img: '/images/figma-product-reliquia.webp', bg: '#D7D7CC', posClass: 'lg:left-[calc(50%+460px)] xl:left-[calc(50%+540px)] lg:top-[calc(50%+5px)] xl:top-[calc(50%+10px)] w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square z-11' },
  { to: '/obras/sagaon', title: 'Sagaón', img: '/images/figma-product-sagaon.webp', bg: '#D5CFC9', posClass: 'lg:left-[calc(50%+314px)] xl:left-[calc(50%+375px)] lg:top-[calc(50%+135px)] xl:top-[calc(50%+160px)] w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square z-16' },
  { to: '/obras/entretiempo', title: 'Entretiempo', img: '/images/figma-product-roberto.webp', bg: '#EAEAEA', posClass: 'lg:left-[calc(50%-196px)] xl:left-[calc(50%-235px)] lg:top-[calc(50%+165px)] xl:top-[calc(50%+195px)] w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square z-15' },
  { to: '/obras/encuadre', title: 'Encuadre', img: '/images/figma-product-encuadre.webp', bg: '#EDEDED', posClass: 'lg:left-[calc(50%-344px)] xl:left-[calc(50%-415px)] lg:top-[calc(50%+130px)] xl:top-[calc(50%+155px)] w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square z-14' },
  { to: '/obras/cimiento', title: 'Cimiento', img: '/images/figma-product-cimiento.webp', bg: '#D9D9D9', posClass: 'lg:left-[calc(50%-570px)] xl:left-[calc(50%-670px)] lg:top-[calc(50%-5px)] xl:top-[calc(50%-10px)] w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square z-12' },
  { to: '/obras/curado', title: 'Curado', img: '/images/figma-product-curado.webp', bg: '#CFC4BE', posClass: 'lg:left-[calc(50%-355px)] xl:left-[calc(50%-425px)] lg:top-[calc(50%-225px)] xl:top-[calc(50%-270px)] w-28 xs:w-32 sm:w-36 lg:w-[155px] xl:w-[185px] aspect-square z-15' }
]

const cardEls = ref<HTMLElement[]>([])
const loopAnims: any[] = []
const hoveredIndex = ref<number | null>(null)

const setCardRef = (el: any, index: number) => { if (el) cardEls.value[index] = el.$el ?? el }
const handleMouseEnter = (index: number) => { hoveredIndex.value = index; loopAnims[index]?.pause() }
const handleMouseLeave = (index: number) => { if (hoveredIndex.value === index) hoveredIndex.value = null; loopAnims[index]?.play() }

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
        { translateY: -2.5, duration: 2400 + (i * 140), ease: 'inOutSine' },
        { translateY: 2.5, duration: 2800 + (i * 140), ease: 'inOutSine' },
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
