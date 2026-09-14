<template>
  <section class="border-t border-neutral-200 bg-[#F6F6F6] py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between mb-8 pb-4 border-b border-neutral-200">
        <div>
          <span class="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-1">
            Continuar Explorando
          </span>
          <h2 class="font-barlow font-bold text-3xl sm:text-4xl uppercase tracking-tight text-neutral-950">
            Otros Proyectos Seleccionados
          </h2>
        </div>

        <NuxtLink
          to="/zona-maco"
          class="font-barlow font-bold text-sm uppercase tracking-wider text-neutral-900 hover:text-neutral-600 flex items-center gap-1.5 transition-colors"
        >
          <span>Ver Todas las Obras</span>
          <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
      </div>

      <!-- Horizontal scroll / grid of related projects -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="rel in related"
          :key="rel.slug"
          :to="`/obras/${rel.slug}`"
          class="group bg-white border border-neutral-200 overflow-hidden hover:border-neutral-900 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-between"
        >
          <div class="relative aspect-square bg-neutral-100 overflow-hidden">
            <img
              :src="rel.heroImage"
              :alt="rel.title"
              class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
            />
            <div class="absolute top-2 left-2 transition-transform duration-300 group-hover:-translate-y-0.5">
              <span class="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-black/85 text-white backdrop-blur-sm border border-neutral-800">
                {{ rel.category }}
              </span>
            </div>
          </div>

          <div class="p-4 border-t border-neutral-100 flex-1 flex flex-col justify-between bg-white">
            <div>
              <div class="flex items-baseline justify-between">
                <h3 class="font-barlow font-bold text-xl uppercase tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
                  {{ rel.title }}
                </h3>
                <span class="font-mono text-xs text-neutral-900 font-semibold">{{ rel.price }}</span>
              </div>
              <p class="font-sans text-[11px] text-neutral-500 uppercase tracking-wider mt-1">
                {{ rel.designers.join(', ') }}
              </p>
            </div>

            <div class="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between font-mono text-[11px] text-neutral-400">
              <span>{{ rel.year }}</span>
              <span class="text-neutral-900 flex items-center gap-1 font-barlow font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-200">
                Ver Detalle →
              </span>
            </div>
          </div>
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
