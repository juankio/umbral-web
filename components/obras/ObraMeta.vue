<template>
  <div class="lg:sticky lg:top-28 space-y-7 pr-0 lg:pr-6">
    <!-- Category & Edition Badges -->
    <div class="flex items-center justify-between gap-4 pb-4 border-b border-neutral-200">
      <span class="px-2.5 py-1 text-xs font-mono uppercase tracking-widest bg-neutral-950 text-white font-semibold">
        {{ obra.category }}
      </span>
      <span class="font-mono text-xs uppercase tracking-widest text-neutral-500">
        {{ obra.edition || 'Edición Oficial 2026' }}
      </span>
    </div>

    <!-- Price and Year Bar -->
    <div class="flex items-baseline justify-between py-4 border-b border-neutral-200">
      <div>
        <span class="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-0.5">Precio Estimado</span>
        <span class="font-barlow font-bold text-4xl sm:text-5xl text-neutral-950 tracking-tight">{{ obra.price }}</span>
      </div>
      <div class="text-right">
        <span class="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-0.5">Año</span>
        <span class="font-barlow font-bold text-3xl sm:text-4xl text-neutral-950">{{ obra.year }}</span>
      </div>
    </div>

    <!-- Designers / Diseñadoras -->
    <div>
      <span class="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1.5">
        Diseñadoras / Autoría
      </span>
      <div class="flex flex-wrap gap-x-2 gap-y-1">
        <span
          v-for="(designer, idx) in obra.designers"
          :key="designer"
          class="font-barlow font-bold text-xl uppercase tracking-wide text-neutral-950"
        >
          {{ designer }}<span v-if="idx < obra.designers.length - 1" class="text-neutral-300 ml-2">·</span>
        </span>
      </div>
      <span class="font-mono text-xs text-neutral-500 block mt-1">
        Estudiantes CRGS · Universidad de Monterrey
      </span>
    </div>

    <!-- Quote / Cita "Ciudades dentro de Ciudades" -->
    <blockquote class="border-l-2 border-neutral-950 pl-4 py-2 italic font-barlow text-2xl text-neutral-800 leading-snug">
      "{{ obra.quote }}"
    </blockquote>

    <!-- Description -->
    <div class="space-y-3 text-sm font-sans text-neutral-600 leading-relaxed">
      <p>{{ obra.description }}</p>
    </div>

    <!-- Technical Specs (Materiales, Producción, Dimensiones) -->
    <div class="bg-neutral-50 border border-neutral-200 p-5 space-y-3 font-mono text-xs">
      <div class="flex justify-between items-start gap-4 border-b border-neutral-200/80 pb-2.5">
        <span class="text-neutral-500 uppercase flex-shrink-0">Materiales</span>
        <span class="text-neutral-950 font-medium text-right">{{ obra.materials }}</span>
      </div>
      <div class="flex justify-between items-center border-b border-neutral-200/80 pb-2.5">
        <span class="text-neutral-500 uppercase">Producción</span>
        <span class="text-neutral-950 font-bold text-right">{{ obra.hours }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-neutral-500 uppercase">Dimensiones</span>
        <span class="text-neutral-950 font-medium">{{ obra.dimensions }}</span>
      </div>
    </div>

    <!-- Inquiry CTA -->
    <div class="pt-2">
      <a
        href="mailto:crgs@udem.edu.mx?subject=Consulta%20Adquisicion%20Obra%20Zona%20Maco%202026"
        class="w-full py-4 bg-neutral-950 text-white font-barlow font-bold text-base uppercase tracking-widest text-center block hover:bg-neutral-800 transition-colors shadow-sm active:scale-[0.99]"
      >
        Consultar Adquisición
      </a>
      <p class="text-center font-mono text-[10px] uppercase tracking-widest text-neutral-400 mt-2.5">
        Pabellón Escolar UMBRAL · Zona Maco 2026
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
