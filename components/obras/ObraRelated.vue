<template>
  <section class="bg-white py-12 sm:py-16 lg:py-20 border-t border-neutral-200 select-text">
    <div class="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16">
      <!-- Encabezado con Título y Controles con flechas -->
      <div class="flex items-center justify-between gap-4 mb-6 sm:mb-8">
        <h2 class="font-barlow font-normal text-3xl sm:text-4xl text-black leading-none">
          Otros proyectos seleccionados
        </h2>
        <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            type="button"
            aria-label="Proyecto anterior"
            class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center text-black hover:border-black hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-black cursor-pointer"
            @click="prevSlide"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Siguiente proyecto"
            class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center text-black hover:border-black hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-black cursor-pointer"
            @click="nextSlide"
          >
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Carrusel horizontal fluido de los proyectos -->
      <div
        ref="carouselRef"
        class="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth scrollbar-none py-4"
      >
        <NuxtLink
          v-for="item in related"
          :key="item.slug"
          :to="`/obras/${item.slug}`"
          class="w-40 sm:w-48 lg:w-52 flex-shrink-0 group focus:outline-none"
        >
          <!-- Imagen oficial en marco cuadrado limpio sin bordes dobles -->
          <div class="w-40 sm:w-48 lg:w-52 aspect-square bg-neutral-100 overflow-hidden">
            <img
              :src="item.heroImage"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <!-- Título debajo en Title Case -->
          <h3 class="font-barlow font-normal text-lg sm:text-xl text-black leading-none mt-3">
            {{ item.title }}
          </h3>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Obra } from '~/composables/useObras'

defineProps<{
  related: Obra[]
}>()

const carouselRef = ref<HTMLElement | null>(null)

const prevSlide = () => {
  carouselRef.value?.scrollBy({ left: -320, behavior: 'smooth' })
}

const nextSlide = () => {
  carouselRef.value?.scrollBy({ left: 320, behavior: 'smooth' })
}
</script>
