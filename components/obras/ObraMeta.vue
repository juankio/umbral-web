<template>
  <!-- Columna Derecha Fija / Sticky según Figma Frame 112:102 -->
  <div class="lg:sticky lg:top-24 space-y-6 lg:space-y-8 select-none">
    <!-- Header: Título 90px Medium + Año 64px Regular -->
    <div class="flex items-baseline justify-between gap-4">
      <h2 class="font-barlow font-medium text-5xl sm:text-7xl lg:text-[76px] xl:text-[90px] text-black uppercase leading-[0.9] tracking-tight">
        {{ obra.title }}
      </h2>
      <span class="font-barlow font-normal text-3xl sm:text-4xl lg:text-[52px] xl:text-[64px] text-black leading-[0.9] flex-shrink-0">
        {{ obra.year || 'Año' }}
      </span>
    </div>

    <!-- Descripción Oficial: Barlow Condensed Regular 32px -->
    <div class="space-y-4 font-barlow font-normal text-lg sm:text-2xl lg:text-[28px] xl:text-[32px] text-black leading-[1.2] text-left sm:text-justify">
      <p v-for="(paragraph, idx) in descriptionParagraphs" :key="idx">
        {{ paragraph }}
      </p>
    </div>

    <!-- Ficha Técnica con Líneas Divisorias de 4px (Line 7, Line 8, Line 9) -->
    <div class="pt-2">
      <!-- Línea Divisoria 7 (Figma Line 7: 4px solid #030303) -->
      <div class="w-full h-[4px] bg-[#030303] my-5 lg:my-6" />

      <!-- Fila 1: Publicado -->
      <div class="flex items-baseline justify-between gap-4 py-1">
        <span class="font-barlow font-medium text-xl sm:text-2xl lg:text-[30px] xl:text-[36px] text-[#3F3F3F] leading-none">
          Publicado
        </span>
        <span class="font-barlow font-normal text-lg sm:text-xl lg:text-[26px] xl:text-[32px] text-black text-right leading-none">
          {{ publishedDate }}
        </span>
      </div>

      <!-- Línea Divisoria 8 (Figma Line 8: 4px solid #030303) -->
      <div class="w-full h-[4px] bg-[#030303] my-5 lg:my-6" />

      <!-- Fila 2: Materiales -->
      <div class="flex items-start justify-between gap-4 py-1">
        <span class="font-barlow font-medium text-xl sm:text-2xl lg:text-[30px] xl:text-[36px] text-[#3F3F3F] leading-none pt-1 flex-shrink-0">
          Materiales
        </span>
        <div class="flex flex-col items-end text-right space-y-1">
          <span
            v-for="(material, idx) in materialsList"
            :key="idx"
            class="font-barlow font-normal text-lg sm:text-xl lg:text-[26px] xl:text-[32px] text-black leading-[1.2]"
          >
            {{ material }}
          </span>
        </div>
      </div>

      <!-- Línea Divisoria 9 (Figma Line 9: 4px solid #030303) -->
      <div class="w-full h-[4px] bg-[#030303] my-5 lg:my-6" />

      <!-- Fila 3: Diseñado por -->
      <div class="flex items-start justify-between gap-4 py-1">
        <span class="font-barlow font-medium text-xl sm:text-2xl lg:text-[30px] xl:text-[36px] text-[#3F3F3F] leading-none pt-1 flex-shrink-0">
          Diseñado por
        </span>
        <div class="flex flex-col items-end text-right space-y-1">
          <span
            v-for="(designer, idx) in obra.designers"
            :key="idx"
            class="font-barlow font-normal text-lg sm:text-xl lg:text-[26px] xl:text-[32px] text-black leading-[1.2]"
          >
            {{ designer }}
          </span>
        </div>
      </div>
    </div>

    <!-- Fila Inferior: Precio 64px Regular + Botón Adquisición -->
    <div class="pt-4 lg:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="font-barlow font-normal text-4xl sm:text-5xl lg:text-[64px] text-black leading-none self-start sm:self-center">
        {{ obra.price || '$00' }}
      </div>

      <a
        :href="mailtoLink"
        class="w-full sm:w-auto px-8 py-3.5 bg-black text-white font-barlow font-medium text-lg sm:text-xl uppercase tracking-widest text-center hover:bg-neutral-800 active:scale-[0.98] transition-all duration-300 shadow-md"
      >
        Consultar Adquisición
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Obra } from '~/composables/useObras'

const props = defineProps<{
  obra: Obra
}>()

// Fecha de publicación según ficha técnica de Figma
const publishedDate = computed(() => {
  return props.obra.publishedDate || '28/08/2026'
})

// Lista vertical de materiales
const materialsList = computed(() => {
  if (!props.obra.materials) return []
  return props.obra.materials
    .split(',')
    .map(item => item.trim())
    .filter(Boolean)
})

// Párrafos editoriales según Figma
const descriptionParagraphs = computed(() => {
  if (!props.obra.description) return []
  if (props.obra.description.includes('\n\n')) {
    return props.obra.description.split('\n\n').filter(Boolean)
  }
  return [props.obra.description]
})

// Enlace de adquisición institucional
const mailtoLink = computed(() => {
  const subject = encodeURIComponent(`Consulta Adquisición: ${props.obra.title} · Zona Maco 2026`)
  return `mailto:crgs@udem.edu.mx?subject=${subject}`
})
</script>
