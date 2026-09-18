<template>
  <!-- Sección "Otros proyectos seleccionados" según Figma Frame 112:102 -->
  <section class="bg-white py-16 sm:py-20 lg:py-24 border-t border-neutral-200 select-none">
    <div class="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16">
      <!-- Titular de Sección (Figma: Barlow Condensed Medium 48px) -->
      <div class="flex items-end justify-between mb-8 sm:mb-12">
        <h2 class="font-barlow font-medium text-3xl sm:text-4xl lg:text-[48px] text-black uppercase leading-none tracking-tight">
          Otros proyectos seleccionados
        </h2>

        <NuxtLink
          to="/zona-maco"
          class="hidden sm:inline-flex items-center gap-2 font-barlow font-medium text-lg lg:text-xl uppercase tracking-wider text-black hover:text-neutral-600 transition-colors duration-200"
        >
          <span>Ver Colección Completa</span>
          <span class="text-xl transition-transform duration-200 group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>

      <!-- Fila de 5 Tarjetas según Figma (Sagaón, Interconexión, Entretiempo, Cimiento, Roberto) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-8">
        <NuxtLink
          v-for="rel in related"
          :key="rel.slug"
          :to="`/obras/${rel.slug}`"
          class="group flex flex-col focus:outline-none"
        >
          <!-- Contenedor / Marco de Miniatura -->
          <div class="relative w-full aspect-square sm:aspect-[320/336] bg-white border border-neutral-300 overflow-hidden shadow-sm group-hover:shadow-xl group-hover:border-black transition-all duration-500 ease-out isolate">
            <img
              :src="rel.heroImage"
              :alt="rel.title"
              class="w-full h-full object-cover grayscale-[4%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform transform-gpu"
              loading="lazy"
            />
            <!-- Línea decorativa interior de marco -->
            <div class="absolute inset-0 border border-black/5 pointer-events-none" />
          </div>

          <!-- Título del Proyecto (Figma: Barlow Condensed Regular 48px) -->
          <div class="mt-4 flex items-baseline justify-between gap-2">
            <h3 class="font-barlow font-normal text-2xl sm:text-3xl lg:text-[36px] xl:text-[44px] text-black uppercase leading-none tracking-tight group-hover:translate-x-1 transition-transform duration-300">
              {{ rel.title }}
            </h3>
            <span class="font-barlow font-normal text-lg sm:text-xl text-neutral-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              →
            </span>
          </div>

          <!-- Línea indicadora arquitectónica activa en hover -->
          <div class="w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out mt-1" />
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
