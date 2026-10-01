<template>
  <div>
    <!-- Desktop Constellation (lg+): Agrupadas alrededor del título según Figma -->
    <div class="hidden lg:block absolute inset-0 pointer-events-none z-20 select-none">
      <div class="relative w-full h-full max-w-[1720px] mx-auto">
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
            class="w-full h-full relative overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.1)] hover:shadow-[0_22px_44px_rgba(0,0,0,0.22)] group-hover:shadow-[0_22px_44px_rgba(0,0,0,0.22)] transition-all duration-300 transform-gpu flex items-center justify-center"
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

    <!-- Mobile Gallery (< lg): Tira horizontal y grid compacta armónica sin desbordes ni bordes duros -->
    <div class="lg:hidden w-full max-w-2xl mx-auto px-4 mt-2 sm:mt-4 select-none">
      <div class="flex sm:grid sm:grid-cols-5 gap-2.5 sm:gap-3 overflow-x-auto sm:overflow-visible pb-4 pt-1 px-1 no-scrollbar snap-x snap-mandatory">
        <NuxtLink
          v-for="project in projects"
          :key="`mobile-${project.to}`"
          :to="project.to"
          class="group relative shrink-0 w-24 xs:w-28 sm:w-full aspect-square snap-center focus:outline-none transition-all duration-200 active:scale-95 hover:scale-105"
          :aria-label="`Ver obra ${project.title}`"
        >
          <div
            class="w-full h-full relative overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)] group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)] flex items-center justify-center transition-all duration-200"
            :style="{ backgroundColor: project.bg }"
          >
            <img
              :src="project.img"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              draggable="false"
            />
            <div class="absolute bottom-1 right-1 pointer-events-none">
              <span class="font-barlow font-medium text-[10px] text-black uppercase bg-white/90 px-1 py-0.2 shadow-2xs">
                {{ project.title }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
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

// 10 obras posicionadas en los micro-clusters compactos del lienzo de Figma alrededor de 'Obras Seleccionadas'
const projects: FloatingProject[] = [
  // Cluster Arriba-Izquierda
  { to: '/obras/desmadre', title: 'Desmadre', img: '/images/figma-product-desmadre.webp', bg: '#D9D9D9', posClass: 'lg:left-[calc(50%-150px)] xl:left-[calc(50%-170px)] lg:top-[calc(50%-240px)] xl:top-[calc(50%-260px)] w-32 sm:w-36 lg:w-40 xl:w-44 aspect-square bg-[#D9D9D9] z-10' },
  { to: '/obras/curado', title: 'Curado', img: '/images/figma-product-curado.webp', bg: '#CFC4BE', posClass: 'lg:left-[calc(50%-260px)] xl:left-[calc(50%-290px)] lg:top-[calc(50%-140px)] xl:top-[calc(50%-150px)] w-32 sm:w-36 lg:w-40 xl:w-44 aspect-square bg-[#CFC4BE] z-15' },
  // Flanco Medio-Izquierda
  { to: '/obras/cimiento', title: 'Cimiento', img: '/images/figma-product-cimiento.webp', bg: '#D9D9D9', posClass: 'lg:left-[calc(50%-460px)] xl:left-[calc(50%-510px)] lg:top-[calc(50%-20px)] xl:top-[calc(50%-20px)] w-34 sm:w-38 lg:w-42 xl:w-46 aspect-square bg-[#D9D9D9] z-12' },
  // Cluster Abajo-Izquierda
  { to: '/obras/encuadre', title: 'Encuadre', img: '/images/figma-product-encuadre.webp', bg: '#EDEDED', posClass: 'lg:left-[calc(50%-240px)] xl:left-[calc(50%-270px)] lg:top-[calc(50%+90px)] xl:top-[calc(50%+100px)] w-32 sm:w-36 lg:w-40 xl:w-44 aspect-square bg-[#EDEDED] z-14' },
  { to: '/obras/entretiempo', title: 'Entretiempo', img: '/images/figma-product-entretiempo.webp', bg: '#EAEAEA', posClass: 'lg:left-[calc(50%-110px)] xl:left-[calc(50%-130px)] lg:top-[calc(50%+110px)] xl:top-[calc(50%+120px)] w-32 sm:w-36 lg:w-40 xl:w-44 aspect-square bg-[#EAEAEA] z-16' },
  // Cluster Arriba-Derecha
  { to: '/obras/sagaon', title: 'Sagaón', img: '/images/figma-product-sagaon.webp', bg: '#D5CFC9', posClass: 'lg:left-[calc(50%+140px)] xl:left-[calc(50%+160px)] lg:top-[calc(50%-250px)] xl:top-[calc(50%-270px)] w-34 sm:w-38 lg:w-42 xl:w-46 aspect-square bg-[#D5CFC9] z-13' },
  { to: '/obras/reliquia', title: 'Reliquia', img: '/images/figma-product-reliquia.webp', bg: '#D7D7CC', posClass: 'lg:left-[calc(50%+270px)] xl:left-[calc(50%+300px)] lg:top-[calc(50%-200px)] xl:top-[calc(50%-220px)] w-32 sm:w-36 lg:w-40 xl:w-44 aspect-square bg-[#D7D7CC] z-14' },
  // Cluster Medio-Derecha
  { to: '/obras/roberto', title: 'Roberto', img: '/images/figma-product-roberto.webp', bg: '#434B2E', posClass: 'lg:left-[calc(50%+160px)] xl:left-[calc(50%+190px)] lg:top-[calc(50%-100px)] xl:top-[calc(50%-110px)] w-30 sm:w-34 lg:w-38 xl:w-42 aspect-square bg-[#434B2E] z-15' },
  { to: '/obras/mai', title: 'Mai', img: '/images/figma-product-mai.webp', bg: '#E2DFD8', posClass: 'lg:left-[calc(50%+400px)] xl:left-[calc(50%+450px)] lg:top-[calc(50%-10px)] xl:top-[calc(50%-10px)] w-34 sm:w-38 lg:w-42 xl:w-46 aspect-square bg-[#E2DFD8] z-11' },
  // Flanco Abajo-Derecha
  { to: '/obras/interconexion', title: 'Interconexión', img: '/images/figma-product-interconexion.webp', bg: '#D9D9D9', posClass: 'lg:left-[calc(50%+260px)] xl:left-[calc(50%+290px)] lg:top-[calc(50%+90px)] xl:top-[calc(50%+100px)] w-34 sm:w-38 lg:w-42 xl:w-46 aspect-square bg-[#D9D9D9] z-12' }
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
