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
            class="w-full h-full relative overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)] group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)] transition-all duration-300 transform-gpu flex items-center justify-center"
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
    <div class="lg:hidden w-full max-w-2xl mx-auto px-4 mt-6 select-none">
      <div class="flex sm:grid sm:grid-cols-5 gap-2.5 sm:gap-3 overflow-x-auto sm:overflow-visible pb-4 pt-1 px-1 no-scrollbar snap-x snap-mandatory">
        <NuxtLink
          v-for="project in projects"
          :key="`mobile-${project.to}`"
          :to="project.to"
          class="group relative shrink-0 w-24 xs:w-28 sm:w-full snap-center focus:outline-none transition-all duration-200 active:scale-95 hover:scale-105"
          :class="project.title === 'Curado' ? 'aspect-[3/4]' : 'aspect-square'"
          :aria-label="`Ver obra ${project.title}`"
        >
          <div
            class="w-full h-full relative overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)] group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)] flex items-center justify-center transition-all duration-200"
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

// 10 obras expandidas de extremo a extremo (max-w-[1780px]) replicando la constelacion de Figma
const projects: FloatingProject[] = [
  // 1. Cimiento (Extremo Izquierdo puro, como en Figma)
  { to: '/obras/cimiento', title: 'Cimiento', img: '/images/figma-product-cimiento.webp', bg: '#D9D9D9', posClass: 'lg:left-[2%] xl:left-[2.5%] 2xl:left-[3%] lg:top-[50%] -translate-y-1/2 w-28 sm:w-32 lg:w-36 xl:w-44 2xl:w-48 aspect-square bg-[#D9D9D9] z-12' },
  // 2. Curado (Medio Izquierdo, vertical)
  { to: '/obras/curado', title: 'Curado', img: '/images/figma-product-curado.webp', bg: '#CFC4BE', posClass: 'lg:left-[19%] xl:left-[20%] 2xl:left-[21%] lg:top-[23%] xl:top-[24%] w-24 sm:w-28 lg:w-30 xl:w-38 2xl:w-40 aspect-[3/4] bg-[#CFC4BE] z-15' },
  // 3. Desmadre (Arriba Centro-Izq)
  { to: '/obras/desmadre', title: 'Desmadre', img: '/images/figma-product-desmadre.webp', bg: '#D9D9D9', posClass: 'lg:left-[32%] xl:left-[33%] 2xl:left-[34%] lg:top-[9%] xl:top-[10%] w-28 sm:w-32 lg:w-34 xl:w-42 2xl:w-46 aspect-square bg-[#D9D9D9] z-10' },
  // 4. Encuadre (Abajo Izquierdo)
  { to: '/obras/encuadre', title: 'Encuadre', img: '/images/figma-product-encuadre.webp', bg: '#EDEDED', posClass: 'lg:left-[20%] xl:left-[21%] 2xl:left-[22%] lg:bottom-[13%] xl:bottom-[14%] w-28 sm:w-32 lg:w-34 xl:w-42 2xl:w-46 aspect-square bg-[#EDEDED] z-14' },
  // 5. Entretiempo (Abajo Centro-Izq, solapando ligeramente a Encuadre)
  { to: '/obras/entretiempo', title: 'Entretiempo', img: '/images/figma-product-entretiempo.webp?v=2', bg: '#EAEAEA', posClass: 'lg:left-[32%] xl:left-[33%] 2xl:left-[34%] lg:bottom-[7%] xl:bottom-[8%] w-28 sm:w-32 lg:w-34 xl:w-42 2xl:w-46 aspect-square bg-[#EAEAEA] z-16' },
  // 6. Sagaon (Arriba Centro-Der)
  { to: '/obras/sagaon', title: 'Sagaón', img: '/images/figma-product-sagaon.webp', bg: '#D5CFC9', posClass: 'lg:left-[59%] xl:left-[60%] 2xl:left-[61%] lg:top-[8%] xl:top-[9%] w-28 sm:w-32 lg:w-34 xl:w-42 2xl:w-46 aspect-square bg-[#D5CFC9] z-13' },
  // 7. Reliquia (Arriba Derecha, solapando ligeramente a Sagaon)
  { to: '/obras/reliquia', title: 'Reliquia', img: '/images/figma-product-reliquia.webp', bg: '#D7D7CC', posClass: 'lg:left-[70%] xl:left-[71%] 2xl:left-[72%] lg:top-[16%] xl:top-[17%] w-28 sm:w-32 lg:w-34 xl:w-42 2xl:w-46 aspect-square bg-[#D7D7CC] z-14' },
  // 8. Roberto (Medio Derecha, torre verde olivo)
  { to: '/obras/roberto', title: 'Roberto', img: '/images/figma-product-roberto.webp', bg: '#434B2E', posClass: 'lg:left-[67%] xl:left-[68%] 2xl:left-[69%] lg:top-[37%] xl:top-[38%] w-26 sm:w-30 lg:w-32 xl:w-40 2xl:w-44 aspect-square bg-[#434B2E] z-15' },
  // 9. Mai (Extremo Derecho puro, como en Figma)
  { to: '/obras/mai', title: 'Mai', img: '/images/figma-product-mai.webp', bg: '#D9D9D9', posClass: 'lg:right-[2%] xl:right-[2.5%] 2xl:right-[3%] lg:top-[51%] -translate-y-1/2 w-28 sm:w-32 lg:w-36 xl:w-44 2xl:w-48 aspect-square bg-[#D9D9D9] z-11' },
  // 10. Interconexion (Abajo Derecha)
  { to: '/obras/interconexion', title: 'Interconexión', img: '/images/figma-product-interconexion.webp', bg: '#CFC4BE', posClass: 'lg:left-[69%] xl:left-[70%] 2xl:left-[71%] lg:bottom-[11%] xl:bottom-[12%] w-28 sm:w-32 lg:w-36 xl:w-44 2xl:w-48 aspect-square bg-[#CFC4BE] z-12' }
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
