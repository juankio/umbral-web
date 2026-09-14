<template>
  <!-- Contenedor estático/sticky según especificación de Figma -->
  <div class="lg:sticky lg:top-28 space-y-6">
    <!-- Título de la Obra -->
    <h1 class="font-barlow font-bold text-5xl sm:text-6xl text-neutral-950 uppercase leading-none">
      {{ obra.title }}
    </h1>

    <!-- Texto de descripción: Dos párrafos editoriales bien formateados -->
    <div class="space-y-4 font-sans text-sm text-neutral-700 leading-relaxed">
      <p v-for="(paragraph, idx) in descriptionParagraphs" :key="idx">
        {{ paragraph }}
      </p>
    </div>

    <!-- Línea divisoria negra horizontal -->
    <div class="h-[2px] bg-neutral-950 my-6" />

    <!-- Tabla / Ficha Técnica con líneas divisorias finas -->
    <div class="space-y-4">
      <!-- Fila 1: Publicado -->
      <div class="flex items-baseline justify-between gap-4 py-1">
        <span class="font-sans text-sm text-neutral-500 font-medium">Publicado</span>
        <span class="font-sans text-sm text-neutral-950 text-right">
          {{ publishedDate }}
        </span>
      </div>

      <!-- Línea divisoria fina -->
      <div class="h-[1px] bg-neutral-200" />

      <!-- Fila 2: Materiales -->
      <div class="flex items-start justify-between gap-4 py-1">
        <span class="font-sans text-sm text-neutral-500 font-medium pt-0.5 flex-shrink-0">Materiales</span>
        <div class="flex flex-col items-end text-right space-y-1">
          <span
            v-for="(material, idx) in materialsList"
            :key="idx"
            class="font-sans text-sm text-neutral-950"
          >
            {{ material }}
          </span>
        </div>
      </div>

      <!-- Línea divisoria fina -->
      <div class="h-[1px] bg-neutral-200" />

      <!-- Fila 3: Diseñado por -->
      <div class="flex items-start justify-between gap-4 py-1">
        <span class="font-sans text-sm text-neutral-500 font-medium pt-0.5 flex-shrink-0">Diseñado por</span>
        <div class="flex flex-col items-end text-right space-y-1">
          <span
            v-for="(designer, idx) in obra.designers"
            :key="idx"
            class="font-sans text-sm text-neutral-950 font-medium"
          >
            {{ designer }}
          </span>
        </div>
      </div>
    </div>

    <!-- Botón Consultar Adquisición -->
    <div class="pt-4">
      <a
        :href="mailtoLink"
        class="w-full py-4 px-6 bg-neutral-950 text-white font-barlow font-bold text-base uppercase tracking-widest text-center block hover:bg-neutral-800 transition-colors duration-200 shadow-sm"
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

// Fecha de publicación con fallback a fecha de Figma
const publishedDate = computed(() => {
  return props.obra.publishedDate || '28/08/2026'
})

// Lista vertical de materiales desglosados
const materialsList = computed(() => {
  if (!props.obra.materials) return []
  return props.obra.materials
    .split(',')
    .map(item => item.trim())
    .filter(Boolean)
})

// Dos párrafos editoriales estructurados
const descriptionParagraphs = computed(() => {
  if (!props.obra.description) return []
  if (props.obra.description.includes('\n\n')) {
    return props.obra.description.split('\n\n').filter(Boolean)
  }
  const sentences = props.obra.description.match(/[^.!?]+[.!?]+/g)
  if (sentences && sentences.length >= 2) {
    const mid = Math.ceil(sentences.length / 2)
    return [
      sentences.slice(0, mid).join(' ').trim(),
      sentences.slice(mid).join(' ').trim()
    ]
  }
  return [props.obra.description]
})

// Link de consulta de adquisición
const mailtoLink = computed(() => {
  const subject = encodeURIComponent(`Consulta Adquisición: ${props.obra.title} · Zona Maco 2026`)
  return `mailto:crgs@udem.edu.mx?subject=${subject}`
})
</script>
