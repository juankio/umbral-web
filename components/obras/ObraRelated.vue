<template>
  <section class="bg-white py-12 sm:py-16 lg:py-20 border-t border-neutral-200 select-none">
    <div class="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16">
      <!-- Título de Sección en Title Case -->
      <h2 class="font-barlow font-normal text-2xl sm:text-3xl text-black leading-none mb-6 sm:mb-8">
        Otros proyectos seleccionados
      </h2>

      <!-- Carrusel horizontal fluido de los productos -->
      <div class="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none py-4">
        <NuxtLink
          v-for="item in related"
          :key="item.slug"
          :to="`/obras/${item.slug}`"
          class="w-36 sm:w-44 lg:w-48 flex-shrink-0 group focus:outline-none"
        >
          <!-- Imagen limpia cuadrada en bg-neutral-100 con hover scale-105 -->
          <div class="w-36 sm:w-44 lg:w-48 aspect-square bg-neutral-100 overflow-hidden">
            <img
              :src="item.heroImage"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <!-- Nombre de la obra abajo en Title Case -->
          <h3 class="mt-2.5 sm:mt-3 font-barlow font-normal text-lg sm:text-xl text-black">
            {{ item.title }}
          </h3>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Obra } from '~/composables/useObras'

defineProps<{
  related: Obra[]
}>()
</script>
