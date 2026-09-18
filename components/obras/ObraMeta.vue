<template>
  <!-- Columna Derecha: Bloque Fijo Flotante a Escala Humana -->
  <aside class="sticky top-24 self-start select-none">
    <!-- Título en Title Case -->
    <h2 class="font-barlow font-medium text-4xl sm:text-5xl lg:text-[56px] text-black leading-none mb-3">
      {{ obra.title }}
    </h2>

    <!-- Descripción con Escala Proporcionada -->
    <div class="font-barlow font-normal text-sm sm:text-base lg:text-[18px] leading-relaxed text-neutral-800 text-left mb-6 space-y-2">
      <p v-for="(paragraph, idx) in descriptionParagraphs" :key="idx">
        {{ paragraph }}
      </p>
    </div>

    <!-- Ficha Técnica con Líneas Divisorias Delgadas Continuas -->
    <div class="w-full">
      <div class="w-full h-[1px] bg-black/80 my-3 sm:my-4" />

      <!-- Fila 1: Publicado -->
      <div class="flex items-baseline justify-between gap-4">
        <span class="font-barlow text-sm text-neutral-500 leading-none">
          Publicado
        </span>
        <span class="font-barlow text-sm sm:text-base text-black text-right leading-none">
          {{ publishedDate }}
        </span>
      </div>

      <div class="w-full h-[1px] bg-black/80 my-3 sm:my-4" />

      <!-- Fila 2: Materiales -->
      <div class="flex items-start justify-between gap-4">
        <span class="font-barlow text-sm text-neutral-500 leading-none pt-0.5 flex-shrink-0">
          Materiales
        </span>
        <div class="flex flex-col items-end text-right space-y-0.5">
          <span
            v-for="(material, idx) in materialsList"
            :key="idx"
            class="font-barlow text-sm sm:text-base text-black leading-snug"
          >
            {{ material }}
          </span>
        </div>
      </div>

      <div class="w-full h-[1px] bg-black/80 my-3 sm:my-4" />

      <!-- Fila 3: Diseñado por -->
      <div class="flex items-start justify-between gap-4">
        <span class="font-barlow text-sm text-neutral-500 leading-none pt-0.5 flex-shrink-0">
          Diseñado por
        </span>
        <div class="flex flex-col items-end text-right space-y-0.5">
          <span
            v-for="(designer, idx) in obra.designers"
            :key="idx"
            class="font-barlow text-sm sm:text-base text-black leading-snug"
          >
            {{ designer }}
          </span>
        </div>
      </div>

      <div class="w-full h-[1px] bg-black/80 my-3 sm:my-4" />

      <!-- Adquisición y Precio Proporcionado -->
      <div class="pt-2 flex items-center justify-between gap-4">
        <span class="font-barlow font-normal text-2xl sm:text-3xl text-black leading-none">
          {{ obra.price || '$00' }}
        </span>

        <a
          :href="mailtoLink"
          class="px-5 py-2.5 bg-black text-white font-barlow font-medium text-xs sm:text-sm uppercase tracking-wider text-center hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200"
        >
          Consultar Adquisición
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Obra } from '~/composables/useObras'

const props = defineProps<{
  obra: Obra
}>()

const publishedDate = computed(() => props.obra.publishedDate || '28/08/2026')

const materialsList = computed(() => {
  if (!props.obra.materials) return []
  return props.obra.materials.split(',').map(item => item.trim()).filter(Boolean)
})

const descriptionParagraphs = computed(() => {
  if (!props.obra.description) return []
  return props.obra.description.split('\n\n').filter(Boolean)
})

const mailtoLink = computed(() => {
  const subject = encodeURIComponent(`Consulta Adquisición: ${props.obra.title} · Zona Maco 2026`)
  return `mailto:crgs@udem.edu.mx?subject=${subject}`
})
</script>
