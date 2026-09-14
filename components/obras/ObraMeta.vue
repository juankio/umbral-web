<template>
  <div class="lg:sticky lg:top-28 space-y-8 pr-0 lg:pr-8">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400">
      <NuxtLink to="/zona-maco" class="hover:text-neutral-900 transition-colors">Zona Maco</NuxtLink>
      <span>/</span>
      <span class="text-neutral-900 font-semibold truncate">{{ obra.title }}</span>
    </nav>

    <!-- Header & Title -->
    <div>
      <div class="flex items-center justify-between gap-4 mb-3">
        <span class="px-2.5 py-1 text-xs font-mono uppercase tracking-widest bg-neutral-900 text-white">
          {{ obra.category }}
        </span>
        <span class="font-mono text-xs uppercase tracking-widest text-neutral-500">
          {{ obra.edition || 'Edición 2027' }}
        </span>
      </div>

      <h1 class="font-barlow font-bold text-5xl sm:text-6xl uppercase tracking-tightest text-neutral-950 leading-[0.9]">
        {{ obra.title }}
      </h1>
      <p v-if="obra.subtitle" class="font-barlow text-xl text-neutral-500 font-light mt-2 tracking-wide">
        {{ obra.subtitle }}
      </p>
    </div>

    <!-- Price and Year -->
    <div class="flex items-baseline justify-between py-4 border-y border-neutral-200">
      <div>
        <span class="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block">Precio Estimado</span>
        <span class="font-barlow font-bold text-3xl sm:text-4xl text-neutral-950">{{ obra.price }}</span>
      </div>
      <div class="text-right">
        <span class="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block">Año</span>
        <span class="font-barlow font-bold text-2xl text-neutral-900">{{ obra.year }}</span>
      </div>
    </div>

    <!-- Designers / Authors -->
    <div>
      <span class="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1">
        Autoría & Diseño
      </span>
      <p class="font-barlow font-semibold text-xl uppercase tracking-wide text-neutral-900">
        {{ obra.designers.join(' · ') }}
      </p>
      <span class="font-mono text-xs text-neutral-500">CRGS · Universidad de Monterrey</span>
    </div>

    <!-- Quote -->
    <blockquote class="border-l-2 border-neutral-950 pl-4 py-2 italic font-barlow text-xl text-neutral-700 leading-snug">
      "{{ obra.quote }}"
    </blockquote>

    <!-- Description -->
    <div class="space-y-4 text-sm font-sans text-neutral-600 leading-relaxed">
      <p>{{ obra.description }}</p>
    </div>

    <!-- Technical Specs Table -->
    <div class="bg-neutral-100/70 border border-neutral-200 p-5 space-y-3 font-mono text-xs">
      <div class="flex justify-between border-b border-neutral-200/80 pb-2">
        <span class="text-neutral-500 uppercase">Materiales</span>
        <span class="text-neutral-900 font-medium text-right max-w-[65%]">{{ obra.materials }}</span>
      </div>
      <div class="flex justify-between border-b border-neutral-200/80 pb-2">
        <span class="text-neutral-500 uppercase">Dimensiones</span>
        <span class="text-neutral-900 font-medium">{{ obra.dimensions }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-neutral-500 uppercase">Producción</span>
        <span class="text-neutral-900 font-medium">{{ obra.hours }}</span>
      </div>
    </div>

    <!-- Inquiry CTA -->
    <div class="pt-2">
      <a
        href="mailto:crgs@udem.edu.mx?subject=Consulta%20Obra%20Zona%20Maco"
        class="w-full py-4 bg-neutral-950 text-white font-barlow font-bold text-lg uppercase tracking-wider text-center block hover:bg-neutral-800 transition-colors shadow-md"
      >
        Consultar Adquisición
      </a>
      <p class="text-center font-mono text-[10px] uppercase tracking-widest text-neutral-400 mt-2">
        Pabellón UMBRAL · Zona Maco 2027
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Obra } from '~/composables/useObras'

defineProps<{
  obra: Obra
}>()
</script>
