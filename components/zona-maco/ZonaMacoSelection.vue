<template>
  <section id="proyectos" class="relative overflow-hidden scroll-mt-24 py-10 sm:py-14 lg:py-16 bg-white select-none border-b border-neutral-200">
    <!-- Encabezado de sección con scroll reveal -->
    <div class="relative z-10 w-full px-4 sm:px-6 text-center">
      <h2 ref="headingRef" class="font-barlow font-normal text-3xl sm:text-4xl lg:text-5xl text-[#070707] text-center leading-none tracking-tight">
        Proyectos Seleccionados
      </h2>
      <!-- Línea divisoria continua con expansión horizontal -->
      <div ref="dividerRef" class="h-[2px] sm:h-[3px] bg-[#030303] max-w-[1440px] mx-auto mt-4 mb-8 sm:mb-10 will-change-transform" />
    </div>

    <!-- Grid Editorial de 5 Columnas (2 filas de 5 piezas = 10 piezas) -->
    <div class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 xl:gap-6">
        <article
          v-for="(item, idx) in productos"
          :key="item.slug"
          :ref="el => setCardRef(el, idx)"
          class="relative w-full aspect-square group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 will-change-transform"
          :style="{ backgroundColor: item.bg }"
          @mouseenter="onCardEnter(idx)"
          @mouseleave="onCardLeave(idx)"
        >
          <NuxtLink
            :to="`/obras/${item.slug}`"
            :aria-label="`Ver proyecto ${item.title}`"
            class="block w-full h-full relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
          >
            <!-- Imagen con leve zoom en hover -->
            <AppImage
              :src="item.image"
              :alt="item.title"
              img-class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            >
              <!-- Velo de fondo blanquito suave en hover según Figma -->
              <div
                class="absolute inset-0 bg-white/45 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
              />
            </AppImage>

            <!-- Título en esquina inferior derecha con deslizamiento vertical suave -->
            <div
              class="absolute bottom-2.5 right-3 sm:bottom-3 sm:right-4 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0"
            >
              <h3
                class="card-title font-barlow font-medium text-lg sm:text-xl lg:text-2xl text-black leading-none tracking-tight select-none"
              >
                {{ item.title }}
              </h3>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>

    <!-- Líneas en V como marca de agua sutil arquitectónica -->
    <div
      class="mt-12 sm:mt-16 flex items-end justify-center w-full max-w-[1540px] mx-auto pointer-events-none select-none overflow-hidden opacity-15 sm:opacity-20"
    >
      <img
        src="/images/zm-lines-v-left.svg"
        alt=""
        aria-hidden="true"
        class="w-1/2 max-w-[770px] h-auto object-contain object-bottom"
        loading="lazy"
      />
      <img
        src="/images/zm-lines-v-right.svg"
        alt=""
        aria-hidden="true"
        class="w-1/2 max-w-[770px] h-auto object-contain object-bottom"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useHoverMotion } from '~/composables/useHoverMotion'

interface ProductSelection {
  title: string
  slug: string
  image: string
  bg: string
}

const headingRef = ref<HTMLElement | null>(null)
const dividerRef = ref<HTMLElement | null>(null)
const cardEls = ref<HTMLElement[]>([])

const { observeScrollReveal } = useScrollAnimation()
const { handleCardEnter, handleCardLeave } = useHoverMotion()

const setCardRef = (el: any, index: number) => {
  if (el) cardEls.value[index] = el.$el ?? el
}

const onCardEnter = (idx: number) => {
  handleCardEnter(cardEls.value[idx])
}

const onCardLeave = (idx: number) => {
  handleCardLeave(cardEls.value[idx])
}

const productos: ProductSelection[] = [
  { title: 'Encuadre', slug: 'encuadre', image: '/images/figma-product-encuadre.webp', bg: '#EDEDED' },
  { title: 'Entretiempo', slug: 'entretiempo', image: '/images/figma-product-entretiempo.webp?v=2', bg: '#EAEAEA' },
  { title: 'Sagaón', slug: 'sagaon', image: '/images/figma-product-sagaon.webp', bg: '#D5CFC9' },
  { title: 'Interconexión', slug: 'interconexion', image: '/images/figma-product-interconexion.webp', bg: '#CFC4BE' },
  { title: 'Roberto', slug: 'roberto', image: '/images/figma-product-roberto.webp', bg: '#434B2E' },
  { title: 'Mai', slug: 'mai', image: '/images/figma-product-mai.webp', bg: '#D9D9D9' },
  { title: 'Curado', slug: 'curado', image: '/images/figma-product-curado.webp', bg: '#CFC4BE' },
  { title: 'Cimiento', slug: 'cimiento', image: '/images/figma-product-cimiento.webp', bg: '#D9D9D9' },
  { title: 'Reliquia', slug: 'reliquia', image: '/images/figma-product-reliquia.webp', bg: '#D7D7CC' },
  { title: 'Desmadre', slug: 'desmadre', image: '/images/figma-product-desmadre.webp', bg: '#D9D9D9' }
]

onMounted(() => {
  observeScrollReveal(headingRef, { type: 'heading', delay: 50 })
  observeScrollReveal(dividerRef, { type: 'divider', origin: 'center', delay: 150 })
  cardEls.value.forEach((card, i) => {
    observeScrollReveal(card, { type: 'card', delay: (i % 5) * 50 })
  })
})
</script>
