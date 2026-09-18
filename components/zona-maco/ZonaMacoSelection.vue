<template>
  <section id="proyectos" class="py-16 sm:py-24 lg:py-32 bg-white select-none border-b border-neutral-200">
    <!-- Encabezado de sección -->
    <div class="w-full px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="font-barlow font-normal text-[clamp(2.5rem,5vw,5rem)] text-[#070707] text-center leading-none uppercase tracking-tight">
        Proyectos Seleccionados
      </h2>
      <!-- Línea divisoria horizontal continua -->
      <div class="h-[2px] sm:h-[3px] bg-[#030303] max-w-[1140px] mx-auto mt-6 mb-12 sm:mb-16" />
    </div>

    <!-- Grid Monumental de 2 Columnas -->
    <div class="max-w-[1140px] mx-auto px-6 sm:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
        <article
          v-for="item in productos"
          :key="item.slug"
          class="relative w-full aspect-square group overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-shadow duration-500"
          :style="{ backgroundColor: item.bg }"
        >
          <NuxtLink
            :to="`/obras/${item.slug}`"
            :aria-label="`Ver proyecto ${item.title}`"
            class="block w-full h-full relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
          >
            <!-- Imagen con sutil zoom en hover -->
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
              draggable="false"
            />

            <!-- Overlay fluido que revela el título en hover -->
            <div
              class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center p-6 text-center"
            >
              <h3
                class="card-title font-barlow font-normal text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out drop-shadow-md"
              >
                {{ item.title }}
              </h3>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ProductSelection {
  title: string
  slug: string
  image: string
  bg: string
}

// 10 productos exactos de Figma en orden estricto de izquierda a derecha, fila por fila
const productos: ProductSelection[] = [
  // Fila 1
  { title: 'Encuadre', slug: 'encuadre', image: '/images/figma-product-encuadre.png', bg: '#EDEDED' },
  { title: 'Roberto', slug: 'roberto', image: '/images/figma-product-roberto.png', bg: '#E5E5E0' },
  // Fila 2
  { title: 'Entretiempo', slug: 'entretiempo', image: '/images/figma-product-entretiempo.png', bg: '#EAEAEA' },
  { title: 'Sagaón', slug: 'sagaon', image: '/images/figma-product-sagaon.png', bg: '#D5CFC9' },
  // Fila 3
  { title: 'Interconexión', slug: 'interconexion', image: '/images/figma-product-interconexion.png', bg: '#434B2E' },
  { title: 'Reliquia', slug: 'reliquia', image: '/images/figma-product-reliquia.png', bg: '#BEBEBE' },
  // Fila 4
  { title: 'Curado', slug: 'curado', image: '/images/figma-product-curado.png', bg: '#DCDCDC' },
  { title: 'Cimiento', slug: 'cimiento', image: '/images/figma-product-cimiento.png', bg: '#D0D0D0' },
  // Fila 5
  { title: 'Mai', slug: 'mai', image: '/images/figma-product-mai.png', bg: '#E2DFD8' },
  { title: 'Desmadre', slug: 'desmadre', image: '/images/figma-product-desmadre.png', bg: '#D3D3D3' }
]
</script>
