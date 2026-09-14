<template>
  <header class="border-b border-neutral-200 bg-white pt-8 pb-6 lg:pt-14 lg:pb-10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4 sm:mb-6">
        <NuxtLink to="/" class="hover:text-neutral-900 transition-colors">Inicio</NuxtLink>
        <span>/</span>
        <NuxtLink to="/zona-maco" class="hover:text-neutral-900 transition-colors">Zona Maco</NuxtLink>
        <span>/</span>
        <span class="text-neutral-900 font-semibold truncate">{{ obra.title }}</span>
      </nav>

      <!-- Monumental 160px Title -->
      <div class="relative">
        <h1 class="font-barlow font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[160px] uppercase tracking-tightest leading-[0.85] text-neutral-950 break-words select-none">
          {{ obra.title }}
        </h1>
        <div class="flex flex-wrap items-center justify-between gap-4 mt-3 sm:mt-4 pt-4 border-t border-neutral-100">
          <p v-if="obra.subtitle" class="font-barlow text-lg sm:text-2xl text-neutral-500 font-light uppercase tracking-wide">
            {{ obra.subtitle }}
          </p>
          <div class="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-500">
            <span class="px-2.5 py-0.5 bg-neutral-950 text-white font-semibold">{{ obra.category }}</span>
            <span>Edición 2026</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { Obra } from '~/composables/useObras'

defineProps<{
  obra: Obra
}>()
</script>
